"use client"

import * as React from "react"
import { useState } from "react"
import { 
  Bell, Lock, ShieldCheck, HelpCircle, FileText, Headphones, Star, CheckCircle, Eye, EyeOff, AlertCircle, X 
} from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { SettingSection } from "@/components/common/SettingSection"

type FeedbackType = { tipo: "sucesso" | "erro"; texto: string }
type ModalType = "faq" | "suporte" | "termos" | null

const FAQ_ITEMS = [
  { q: "Como faço para emitir meu certificado master?", a: "O certificado master é liberado automaticamente assim que você atinge 100% de conclusão em todos os sub-módulos da trilha de Global Supply Chain." },
  { q: "O código de verificação dos certificados é público?", a: "Não. O código (ex: UHNK-18LAKFQ9) serve para validação interna de recursos de RH e auditorias de competência da marca." },
  { q: "Posso alterar meu e-mail de cadastro?", a: "Por questões de conformidade corporativa, as alterações cadastrais estruturais devem ser solicitadas diretamente via chamado de suporte técnico." },
  { q: "O que acontece se eu desativar o perfil na wiki?", a: "Seu nome e pontuações serão ocultados nos rankings intercontinentais e pesquisas públicas de colaboradores." }
]

export default function SettingsPage() {
  const [darkMode] = useState(false)
  const [feedback, setFeedback] = useState<FeedbackType | null>(null)
  const [activeModal, setActiveModal] = useState<ModalType>(null)

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    newsletter: false
  })

  const [privacy, setPrivacy] = useState({
    perfilWiki: true,
    compartilharRankings: false
  })

  const [passwords, setPasswords] = useState({
    atual: "",
    nova: "",
    confirmacao: ""
  })

  const [passwordVisibility, setPasswordVisibility] = useState({
    atual: false,
    nova: false,
    confirmacao: false
  })

  const triggerFeedback = (tipo: "sucesso" | "erro", texto: string) => {
    setFeedback({ tipo, texto })
    setTimeout(() => setFeedback(null), 4000)
  }

  const handlePasswordChange = (field: keyof typeof passwords, value: string) => {
    setPasswords(prev => ({ ...prev, [field]: value }))
  }

  const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
    setPasswordVisibility(prev => ({ ...prev, [field]: !prev[field] }))
  }

  const toggleNotification = (field: keyof typeof notifications, checked: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: checked }))
    const labels = { email: "E-mail", push: "Push", newsletter: "Newsletter" }
    triggerFeedback("sucesso", `${labels[field]}: ${checked ? "Ativado(a)" : "Desativado(a)"}`)
  }

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault()
    const { atual, nova, confirmacao } = passwords

    if (!atual || !nova || !confirmacao) {
      return triggerFeedback("erro", "Por favor, preencha todos os campos de senha.")
    }
    if (nova !== confirmacao) {
      return triggerFeedback("erro", "A nova senha e a confirmação não coincidem.")
    }
    if (nova.length < 6) {
      return triggerFeedback("erro", "A nova senha deve ter pelo menos 6 caracteres.")
    }

    triggerFeedback("sucesso", "Senha updated com sucesso na plataforma!")
    setPasswords({ atual: "", nova: "", confirmacao: "" })
  }

  const helpMenuOptions = [
    { id: "faq" as const, label: "Perguntas Frequentes (FAQ)", icon: FileText },
    { id: "suporte" as const, label: "Contatar Suporte Técnico", icon: Headphones },
    { id: "termos" as const, label: "Termos de Uso e Privacidade", icon: ShieldCheck }
  ]

  return (
    <div className={`min-h-screen p-8 md:p-16 transition-colors duration-500 ${darkMode ? "bg-[#121212]" : "bg-[#F8FAFB]"}`}>
      
      {feedback && (
        <div className={`fixed top-5 right-5 px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3 font-bold text-sm border animate-in fade-in duration-300 ${
          feedback.tipo === "sucesso" ? "bg-[#007041] text-white border-white/20" : "bg-red-600 text-white border-white/20"
        }`}>
          {feedback.tipo === "sucesso" ? (
            <CheckCircle className="h-5 w-5 text-[#5CFF9B]" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-200" />
          )}
          {feedback.texto}
        </div>
      )}
      
      <header className="relative mb-16">
        <h1 className="text-5xl font-black text-[#007041] mb-2 tracking-tighter">Configurações</h1>
        <p className="text-slate-500 text-lg font-medium">
          Gerencie sua experiência educacional e preferências de segurança na Universidade UHNK.
        </p>
        <Star className="absolute -top-4 right-0 h-32 w-32 text-slate-200 -z-10 opacity-30" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <div className="lg:col-span-8 space-y-10">
          <SettingSection title="Notificações" icon={Bell}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#007041]/30 transition-colors">
                  <div>
                    <p className="font-bold text-slate-900">Notificações por E-mail</p>
                    <p className="text-xs text-slate-400">Alertas de cursos e certificados</p>
                  </div>
                  <Switch 
                    checked={notifications.email} 
                    onCheckedChange={(checked) => toggleNotification("email", checked)}
                    className="border border-slate-300 data-[state=checked]:bg-[#007041] data-[state=unchecked]:bg-slate-200" 
                  />
                </div>

                <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#007041]/30 transition-colors">
                  <div>
                    <p className="font-bold text-slate-900">Push no Navegador</p>
                    <p className="text-xs text-slate-400">Lembretes de aulas ao vivo</p>
                  </div>
                  <Switch 
                    checked={notifications.push} 
                    onCheckedChange={(checked) => toggleNotification("push", checked)}
                    className="border border-slate-300 data-[state=checked]:bg-[#007041] data-[state=unchecked]:bg-slate-200" 
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-[#007041]/5 border-l-4 border-[#007041] rounded-r-2xl">
                <div>
                  <p className="font-bold text-[#007041]">Newsletter Corporate Excellence</p>
                  <p className="text-xs text-slate-400">Insights mensais sobre liderança global</p>
                </div>
                <Switch 
                  checked={notifications.newsletter} 
                  onCheckedChange={(checked) => toggleNotification("newsletter", checked)}
                  className="border border-slate-300 data-[state=checked]:bg-[#007041] data-[state=unchecked]:bg-slate-200" 
                />
              </div>

              <div className="flex justify-end pt-2">
                <Button 
                  onClick={() => triggerFeedback("sucesso", "Preferências de notificação sincronizadas!")} 
                  className="bg-[#007041] hover:bg-[#005a34] text-white font-bold px-6 h-11 rounded-xl text-xs uppercase tracking-wider"
                >
                  Salvar Notificações
                </Button>
              </div>
            </div>
          </SettingSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <SettingSection title="Alterar Senha" icon={Lock}>
              <form onSubmit={handleUpdatePassword} className="space-y-4">
                {[
                  { id: "atual" as const, label: "Senha Atual" },
                  { id: "nova" as const, label: "Nova Senha" },
                  { id: "confirmacao" as const, label: "Confirmar Nova Senha" }
                ].map(field => (
                  <div key={field.id} className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{field.label}</label>
                    <div className="relative">
                      <input 
                        type={passwordVisibility[field.id] ? "text" : "password"} 
                        placeholder="••••••••" 
                        value={passwords[field.id]}
                        onChange={(e) => handlePasswordChange(field.id, e.target.value)}
                        className="w-full p-4 pr-12 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold focus:ring-2 focus:ring-[#007041] outline-none transition-all placeholder:text-slate-300" 
                      />
                      <button
                        type="button"
                        onClick={() => togglePasswordVisibility(field.id)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {passwordVisibility[field.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                ))}

                <Button type="submit" className="w-full bg-[#007041] hover:bg-[#005a34] text-white h-14 rounded-xl font-bold shadow-lg shadow-[#007041]/20 transition-all active:scale-[0.98] mt-2">
                  Atualizar Senha
                </Button>
              </form>
            </SettingSection>

            <SettingSection title="Privacidade" icon={ShieldCheck}>
              <div className="space-y-4">
                <p className="text-sm text-slate-500 font-medium">Controle seus dados de progresso.</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-sm font-bold text-slate-700">Perfil visível na Wiki</span>
                    <input 
                      type="checkbox" 
                      checked={privacy.perfilWiki} 
                      onChange={(e) => setPrivacy(prev => ({ ...prev, perfilWiki: e.target.checked }))}
                      className="accent-[#007041] h-5 w-5 cursor-pointer" 
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-sm font-bold text-slate-700">Compartilhar rankings</span>
                    <input 
                      type="checkbox" 
                      checked={privacy.compartilharRankings} 
                      onChange={(e) => setPrivacy(prev => ({ ...prev, compartilharRankings: e.target.checked }))}
                      className="accent-[#007041] h-5 w-5 cursor-pointer" 
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <Button 
                    onClick={() => triggerFeedback("sucesso", "Configurações de privacidade salvas localmente!")} 
                    className="bg-[#007041] hover:bg-[#005a34] text-white font-bold px-6 h-11 rounded-xl text-xs uppercase tracking-wider"
                  >
                    Salvar Privacidade
                  </Button>
                </div>
              </div>
            </SettingSection>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-10">
          <div className="bg-[#007041] p-10 rounded-[40px] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="w-24 h-24 rounded-full border-4 border-white/20 mx-auto mb-4 overflow-hidden shadow-xl bg-white/10 flex items-center justify-center">
               <span className="text-3xl font-black">JS</span>
            </div>
            <h4 className="text-2xl font-black">João Silva</h4>
            <p className="text-[10px] opacity-70 mb-8 uppercase tracking-[3px] font-bold leading-tight">
              Brand Manager<br/>Supply Chain Excellence
            </p>
            
            <div className="bg-black/20 rounded-full h-3 w-full mb-2">
              <div className="bg-[#5CFF9B] h-full w-[85%] rounded-full shadow-[0_0_15px_rgba(92,255,155,0.8)]"></div>
            </div>
            <p className="text-[10px] font-black text-right mb-8 text-[#5CFF9B]">NÍVEL DE PERFIL: 85%</p>
            
            <p className="text-sm italic opacity-90 leading-relaxed font-medium">
              "O aprendizado contínuo é o fermento do nosso sucesso."
            </p>
          </div>

          <div className="p-4">
             <h4 className="text-[#007041] font-black mb-6 flex items-center gap-2 text-xl uppercase tracking-tighter">
               <HelpCircle className="h-6 w-6" /> Precisa de ajuda?
             </h4>
             <ul className="space-y-4">
               {helpMenuOptions.map(option => (
                 <li 
                   key={option.id}
                   onClick={() => setActiveModal(option.id)}
                   className="flex items-center gap-4 p-3 rounded-xl border border-transparent text-slate-500 font-bold hover:text-[#007041] hover:bg-slate-50 cursor-pointer transition-all group"
                 >
                   <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-[#007041]/10">
                     <option.icon className="h-5 w-5" />
                   </div>
                   {option.label}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>

      {/* ================= MODAL: FAQ ================= */}
      {activeModal === "faq" && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-2xl shadow-2xl border border-slate-100 m-4 max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                <FileText className="h-6 w-6 text-[#007041]" /> Perguntas Frequentes
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-6">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="font-black text-[#007041] mb-2 text-sm uppercase tracking-tight">Q: {item.q}</p>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: SUPORTE TÉCNICO ================= */}
      {activeModal === "suporte" && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-md shadow-2xl border border-slate-100 m-4 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                <Headphones className="h-5 w-5 text-[#007041]" /> Abertura de Chamado
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-slate-500 font-medium">Relate o problema técnico encontrado na plataforma Universidade UHNK:</p>
              <textarea 
                placeholder="Descreva detalhadamente a instabilidade ou dúvida..." 
                className="w-full h-32 p-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-[#007041] placeholder:text-slate-300 resize-none"
              />
              <div className="flex gap-3 pt-2">
                <Button variant="outline" onClick={() => setActiveModal(null)} className="flex-1 border-slate-200 text-slate-500 font-bold rounded-xl h-12 text-xs uppercase">
                  Cancelar
                </Button>
                <Button 
                  onClick={() => { setActiveModal(null); triggerFeedback("sucesso", "Chamado aberto sob o protocolo #UHNK-2026!"); }}
                  className="flex-1 bg-[#007041] hover:bg-[#005a34] text-white font-black rounded-xl h-12 text-xs uppercase tracking-wider"
                >
                  Enviar Chamado
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: TERMOS E PRIVACIDADE ================= */}
      {activeModal === "termos" && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-lg shadow-2xl border border-slate-100 m-4 max-h-[75vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#007041]" /> Termos e Políticas
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 text-slate-600 text-xs leading-relaxed font-medium">
              <p className="font-bold text-slate-800 text-sm">1. Propósito da Plataforma</p>
              <p>A Universidade UHNK é uma plataforma voltada exclusivamente ao treinamento corporativo de funcionários, focada na difusão de metodologias de cadeias de suprimentos e integridade de marca.</p>
              <p className="font-bold text-slate-800 text-sm">2. Segurança de Credenciais</p>
              <p>O compartilhamento de chaves privadas de criptografia, senhas institucionais ou códigos de validação de certificados com agentes externos configura quebra de confidencialidade.</p>
              <p className="font-bold text-slate-800 text-sm">3. Lei Geral de Proteção de Dados (LGPD)</p>
              <p>As preferências de exibição de dados e conquistas nos rankings globais podem ser revogadas a qualquer momento pelo painel de controle de privacidade do usuário.</p>
            </div>
            <Button onClick={() => setActiveModal(null)} className="w-full mt-6 bg-[#007041] hover:bg-[#005a34] text-white font-black rounded-xl h-12 text-xs uppercase tracking-wider">
              Entendi e Aceito
            </Button>
          </div>
        </div>
      )}

    </div>
  )
}