"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { 
  Bell, Lock, ShieldCheck, HelpCircle, FileText, Headphones, Star, CheckCircle, Eye, EyeOff, AlertCircle, X, LogOut
} from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { SettingSection } from "./components/SettingSection"

export default function SettingsPage() {
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)
  const [mensagem, setMensagem] = useState<{ tipo: "sucesso" | "erro"; texto: string } | null>(null)

  const [notifEmail, setNotifEmail] = useState(true)
  const [notifPush, setNotifPush] = useState(true)
  const [notifNewsletter, setNotifNewsletter] = useState(false)

  const [perfilWiki, setPerfilWiki] = useState(true)
  const [compartilharRankings, setCompartilharRankings] = useState(false)

  const [senhaAtual, setSenhaAtual] = useState("")
  const [novaSenha, setNovaSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")

  const [verSenhaAtual, setVerSenhaAtual] = useState(false)
  const [verNovaSenha, setVerNovaSenha] = useState(false)
  const [verConfirmarSenha, setVerConfirmarSenha] = useState(false)

  const [abrirModalFAQ, setAbrirModalFAQ] = useState(false)
  const [abrirModalSuporte, setAbrirModalSuporte] = useState(false)
  const [abrirModalTermos, setAbrirModalTermos] = useState(false)

  const mostrarFeedback = (tipo: "sucesso" | "erro", texto: string) => {
    setMensagem({ tipo, texto })
  }

  // Efeito para limpar o feedback após o tempo determinado de forma segura
  useEffect(() => {
    if (!mensagem) return
    const timer = setTimeout(() => setMensagem(null), 4000)
    return () => clearTimeout(timer)
  }, [mensagem])

  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0"
    router.push("/login")
  }

  const handleSalvarNotificacoes = () => {
    mostrarFeedback("sucesso", "Preferências de notificação sincronizadas!")
  }

  const handleSalvarPrivacidade = () => {
    mostrarFeedback("sucesso", "Configurações de privacidade salvas localmente!")
  }

  const handleAtualizarSenha = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!senhaAtual || !novaSenha || !confirmarSenha) {
      mostrarFeedback("erro", "Por favor, preencha todos os campos de senha.")
      return
    }

    if (novaSenha !== confirmarSenha) {
      mostrarFeedback("erro", "A nova senha e a confirmação não coincidem.")
      return
    }

    if (novaSenha.length < 6) {
      mostrarFeedback("erro", "A nova senha deve ter pelo menos 6 caracteres.")
      return
    }

    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1]

      if (!token) {
        mostrarFeedback("erro", "Sessão expirada. Faça login novamente.")
        return
      }

      const payload = JSON.parse(atob(token.split(".")[1]))
      const email = payload.sub

      // Corrigido: Substituído aspas duplas por backticks para permitir a interpolação correta da URL
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/password/change`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          currentPassword: senhaAtual,
          newPassword: novaSenha,
        }),
      })

      if (response.ok) {
        mostrarFeedback("sucesso", "Senha updated com sucesso!")
        setSenhaAtual("")
        setNovaSenha("")
        setConfirmarSenha("")
      } else {
        mostrarFeedback("erro", "Senha atual incorreta.")
      }
    } catch (error) {
      mostrarFeedback("erro", "Erro ao conectar com o servidor.")
    }
  }

  return (
    <div className={`min-h-screen p-4 sm:p-8 md:p-16 transition-colors duration-500 ${darkMode ? "bg-[#121212]" : "bg-[#F8FAFB]"}`}>

      {/* Alerta de Feedback Responsivo */}
      {mensagem && (
        <div className={`fixed top-4 right-4 left-4 sm:left-auto sm:max-w-md px-5 py-4 rounded-xl sm:rounded-2xl shadow-2xl z-50 flex items-center gap-3 font-bold text-xs sm:text-sm border animate-in fade-in slide-in-from-top-2 duration-300 ${
          mensagem.tipo === "sucesso" 
            ? "bg-[#007041] text-white border-white/10" 
            : "bg-red-600 text-white border-white/10"
        }`}>
          {mensagem.tipo === "sucesso" ? (
            <CheckCircle className="h-5 w-5 text-[#5CFF9B] shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-200" />
          )}
          <span className="flex-1">{mensagem.texto}</span>
        </div>
      )}
      
      {/* Cabeçalho */}
      <header className="relative mb-10 sm:mb-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#007041] mb-2 tracking-tighter">
          Configurações
        </h1>
        <p className="text-slate-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
          Gerencie sua experiência educacional e preferências de segurança na Universidade UHNK.
        </p>
        <Star className="absolute -top-6 right-0 h-24 w-24 sm:h-32 sm:w-32 text-slate-200 -z-10 opacity-20 pointer-events-none block sm:block" />
      </header>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">

        {/* Coluna de Configurações */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-10">
          
          <SettingSection title="Notificações" icon={Bell}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#007041]/30 transition-colors gap-4">
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-sm sm:text-base">Notificações por E-mail</p>
                    <p className="text-xs text-slate-400 truncate">Alertas de cursos e certificados</p>
                  </div>
                  <Switch checked={notifEmail} onCheckedChange={(v) => { setNotifEmail(v); mostrarFeedback("sucesso", `E-mail: ${v ? "Ativado" : "Desativado"}`); }} className="shrink-0 border border-slate-300 data-[state=checked]:bg-[#007041] data-[state=unchecked]:bg-slate-200" />
                </div>

                <div className="flex items-center justify-between p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#007041]/30 transition-colors gap-4">
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-sm sm:text-base">Push no Navegador</p>
                    <p className="text-xs text-slate-400 truncate">Lembretes de aulas ao vivo</p>
                  </div>
                  <Switch checked={notifPush} onCheckedChange={(v) => { setNotifPush(v); mostrarFeedback("sucesso", `Push: ${v ? "Ativado" : "Desativado"}`); }} className="shrink-0 border border-slate-300 data-[state=checked]:bg-[#007041] data-[state=unchecked]:bg-slate-200" />
                </div>
              </div>

              <div className="flex items-center justify-between p-5 sm:p-6 bg-[#007041]/5 border-l-4 border-[#007041] rounded-r-2xl gap-4">
                <div className="min-w-0">
                  <p className="font-bold text-[#007041] text-sm sm:text-base">Newsletter Corporate Excellence</p>
                  <p className="text-xs text-slate-400 truncate sm:whitespace-normal">Insights mensais sobre liderança global</p>
                </div>
                <Switch checked={notifNewsletter} onCheckedChange={(v) => { setNotifNewsletter(v); mostrarFeedback("sucesso", `Newsletter: ${v ? "Ativada" : "Desativada"}`); }} className="shrink-0 border border-slate-300 data-[state=checked]:bg-[#007041] data-[state=unchecked]:bg-slate-200" />
              </div>

              <div className="flex justify-end pt-2">
                <Button onClick={handleSalvarNotificacoes} className="w-full sm:w-auto bg-[#007041] hover:bg-[#005a34] text-white font-bold px-6 h-11 rounded-xl text-xs uppercase tracking-wider transition-all">
                  Salvar Notificações
                </Button>
              </div>
            </div>
          </SettingSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            
            {/* Alterar Senha */}
            <SettingSection title="Alterar Senha" icon={Lock}>
              <form onSubmit={handleAtualizarSenha} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Senha Atual</label>
                  <div className="relative">
                    <input type={verSenhaAtual ? "text" : "password"} placeholder="••••••••" value={senhaAtual} onChange={(e) => setSenhaAtual(e.target.value)} className="w-full p-3.5 pr-12 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold focus:ring-2 focus:ring-[#007041] outline-none transition-all placeholder:text-slate-300" />
                    <button type="button" onClick={() => setVerSenhaAtual(!verSenhaAtual)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                      {verSenhaAtual ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nova Senha</label>
                  <div className="relative">
                    <input type={verNovaSenha ? "text" : "password"} placeholder="••••••••" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} className="w-full p-3.5 pr-12 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold focus:ring-2 focus:ring-[#007041] outline-none transition-all placeholder:text-slate-300" />
                    <button type="button" onClick={() => setVerNovaSenha(!verNovaSenha)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                      {verNovaSenha ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Confirmar Nova Senha</label>
                  <div className="relative">
                    <input type={verConfirmarSenha ? "text" : "password"} placeholder="••••••••" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} className="w-full p-3.5 pr-12 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold focus:ring-2 focus:ring-[#007041] outline-none transition-all placeholder:text-slate-300" />
                    <button type="button" onClick={() => setVerConfirmarSenha(!verConfirmarSenha)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                      {verConfirmarSenha ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-[#007041] hover:bg-[#005a34] text-white h-12 sm:h-14 rounded-xl font-bold shadow-lg shadow-[#007041]/20 transition-all active:scale-[0.98] mt-2">
                  Atualizar Senha
                </Button>
              </form>
            </SettingSection>

            {/* Privacidade */}
            <SettingSection title="Privacidade" icon={ShieldCheck}>
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Controle seus dados de progresso.</p>
                <div className="space-y-3">
                  {/* Substituídos checkboxes nativos por Switches para manter a consistência visual */}
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 gap-4">
                    <span className="text-xs sm:text-sm font-bold text-slate-700">Perfil visível na Wiki</span>
                    <Switch checked={perfilWiki} onCheckedChange={setPerfilWiki} className="shrink-0 border border-slate-300 data-[state=checked]:bg-[#007041]" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 gap-4">
                    <span className="text-xs sm:text-sm font-bold text-slate-700">Compartilhar rankings</span>
                    <Switch checked={compartilharRankings} onCheckedChange={setCompartilharRankings} className="shrink-0 border border-slate-300 data-[state=checked]:bg-[#007041]" />
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <Button onClick={handleSalvarPrivacidade} className="w-full sm:w-auto bg-[#007041] hover:bg-[#005a34] text-white font-bold px-6 h-11 rounded-xl text-xs uppercase tracking-wider transition-all">
                    Salvar Privacidade
                  </Button>
                </div>
              </div>
            </SettingSection>

          </div>
        </div>

        {/* Barra Lateral / Perfil */}
        <div className="lg:col-span-4 space-y-6 sm:space-y-10 w-full">
          <div className="bg-[#007041] p-6 sm:p-10 rounded-[28px] sm:rounded-[40px] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white/20 mx-auto mb-4 overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="João Silva"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl sm:text-2xl font-black truncate">João Silva</h4>
            <p className="text-[10px] opacity-70 mb-6 sm:mb-8 uppercase tracking-[2px] font-bold leading-tight min-h-[2rem]">
              Brand Manager<br/>Supply Chain Excellence
            </p>
            <div className="bg-black/20 rounded-full h-2.5 w-full mb-1.5">
              <div className="bg-[#5CFF9B] h-full w-[85%] rounded-full shadow-[0_0_15px_rgba(92,255,155,0.8)]"></div>
            </div>
            <p className="text-[10px] font-black text-right mb-6 sm:mb-8 text-[#5CFF9B]">NÍVEL DE PERFIL: 85%</p>
            <p className="text-xs sm:text-sm italic opacity-90 leading-relaxed font-medium">
              "O aprendizado contínuo é o fermento do nosso sucesso."
            </p>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-6 flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3 rounded-xl sm:rounded-2xl text-xs uppercase tracking-widest transition-all select-none active:scale-[0.98]"
            >
              <LogOut className="h-4 w-4 shrink-0" />
              Sair da conta
            </button>
          </div>

          {/* Seção de Ajuda */}
          <div className="p-2 sm:p-4">
            <h4 className="text-[#007041] font-black mb-5 flex items-center gap-2 text-lg sm:text-xl uppercase tracking-tighter">
              <HelpCircle className="h-5 sm:h-6 w-5 sm:w-6" /> Precisa de ajuda?
            </h4>
            <ul className="space-y-3">
              <li onClick={() => setAbrirModalFAQ(true)} className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl border border-transparent text-slate-500 font-bold hover:text-[#007041] hover:bg-slate-50 cursor-pointer transition-all group text-sm sm:text-base">
                <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-[#007041]/10 text-slate-400 group-hover:text-[#007041] transition-colors"><FileText className="h-5 w-5" /></div>
                Perguntas Frequentes (FAQ)
              </li>
              <li onClick={() => setAbrirModalSuporte(true)} className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl border border-transparent text-slate-500 font-bold hover:text-[#007041] hover:bg-slate-50 cursor-pointer transition-all group text-sm sm:text-base">
                <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-[#007041]/10 text-slate-400 group-hover:text-[#007041] transition-colors"><Headphones className="h-5 w-5" /></div>
                Contatar Suporte Técnico
              </li>
              <li onClick={() => setAbrirModalTermos(true)} className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl border border-transparent text-slate-500 font-bold hover:text-[#007041] hover:bg-slate-50 cursor-pointer transition-all group text-sm sm:text-base">
                <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-[#007041]/10 text-slate-400 group-hover:text-[#007041] transition-colors"><ShieldCheck className="h-5 w-5" /></div>
                Termos de Uso e Privacidade
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- MODAIS ADAPTATIVOS COM ROLAGEM SEGURA --- */}

      {/* Modal: FAQ */}
      {abrirModalFAQ && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in duration-200 p-4">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 w-full max-w-2xl shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-5 pb-3 border-b border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                <FileText className="h-5 sm:h-6 w-5 sm:w-6 text-[#007041]" /> Perguntas Frequentes
              </h3>
              <button onClick={() => setAbrirModalFAQ(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { q: "Como faço para emitir meu certificado master?", a: "O certificado master é liberado automaticamente assim que você atinge 100% de conclusão em todos os sub-módulos da trilha de Global Supply Chain." },
                { q: "O código de verificação dos certificados é público?", a: "Não. O código (ex: UHNK-18LAKFQ9) serve para validação interna de recursos de RH e auditorias de competência da marca." },
                { q: "Posso alterar meu e-mail de cadastro?", a: "Por questões de conformidade corporativa, as alterações cadastrais estruturais devem ser solicitadas diretamente via chamado de suporte técnico." },
                { q: "O que acontece se eu desativar o perfil na wiki?", a: "Seu nome e pontuações serão ocultados nos rankings intercontinais e pesquisas públicas de colaboradores." }
              ].map((item, i) => (
                <div key={i} className="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="font-black text-[#007041] mb-1.5 text-xs sm:text-sm uppercase tracking-tight">Q: {item.q}</p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal: Suporte */}
      {abrirModalSuporte && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in duration-200 p-4">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 w-full max-w-md shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                <Headphones className="h-5 w-5 text-[#007041]" /> Abertura de Chamado
              </h3>
              <button onClick={() => setAbrirModalSuporte(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-500 font-medium">Relate o problema técnico encontrado na plataforma Universidade UHNK:</p>
              <textarea placeholder="Descreva detalhadamente a instabilidade ou dúvida..." className="w-full h-32 p-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-[#007041] placeholder:text-slate-300 resize-none" />
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button variant="outline" onClick={() => setAbrirModalSuporte(false)} className="w-full sm:flex-1 border-slate-200 text-slate-500 font-bold rounded-xl h-11 text-xs uppercase order-2 sm:order-1">Cancelar</Button>
                <Button onClick={() => { setAbrirModalSuporte(false); mostrarFeedback("sucesso", "Chamado aberto sob o protocolo #UHNK-2026!"); }} className="w-full sm:flex-1 bg-[#007041] hover:bg-[#005a34] text-white font-black rounded-xl h-11 text-xs uppercase tracking-wider order-1 sm:order-2">Enviar Chamado</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Termos */}
      {abrirModalTermos && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in duration-200 p-4">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 w-full max-w-lg shadow-2xl border border-slate-100 max-h-[80vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-5 pb-2 border-b border-slate-100">
              <h3 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#007041]" /> Termos e Políticas
              </h3>
              <button onClick={() => setAbrirModalTermos(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 text-slate-600 text-[11px] sm:text-xs leading-relaxed font-medium">
              <div>
                <p className="font-bold text-slate-800 text-xs sm:text-sm mb-1">1. Propósito da Plataforma</p>
                <p>A Universidade UHNK é uma plataforma voltada exclusivamente ao treinamento corporativo de funcionários, focada na difusão de metodologias de cadeias de suprimentos e integridade de marca.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-xs sm:text-sm mb-1">2. Segurança de Credenciais</p>
                <p>O compartilhamento de chaves privadas de criptografia, senhas institucionais ou códigos de validação de certificados com agentes externos configura quebra de confidencialidade.</p>
              </div>
              <div>
                <p className="font-bold text-slate-800 text-xs sm:text-sm mb-1">3. Lei Geral de Proteção de Dados (LGPD)</p>
                <p>As preferências de exibição de dados e conquistas nos rankings globais podem ser revogadas a qualquer momento pelo painel de controle de privacidade do usuário.</p>
              </div>
            </div>
            <Button onClick={() => setAbrirModalTermos(false)} className="w-full mt-6 bg-[#007041] hover:bg-[#005a34] text-white font-black rounded-xl h-11 text-xs uppercase tracking-wider transition-all">
              Entendi e Aceito
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}