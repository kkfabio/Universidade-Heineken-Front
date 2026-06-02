"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [temporaryPassword, setTemporaryPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.push("/login");
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // CORREÇÃO: Utilização correta de template literals para a URL da API
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/password/forgot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, cpf }),
      });

      const data = await response.json();

      if (response.ok) {
        setTemporaryPassword(data.temporaryPassword);
        setSuccess(true);
      } else {
        setError(data.message || "E-mail ou CPF não encontrados em nossa base.");
      }
    } catch (err) {
      setError("Não foi possível conectar ao servidor. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFB] w-full select-none">
      
      {/* --- PAINEL ESQUERDO INSTITUCIONAL --- */}
      <div className="relative hidden w-1/2 flex-col justify-between bg-[#007041] p-16 lg:flex overflow-hidden">
        {/* Ajuste de opacidade do overlay conforme diretrizes da marca */}
        <div 
          className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-overlay scale-105 transition-transform duration-10000 ease-out"
          style={{ backgroundImage: "url('/bottle-bg.jpg')" }} 
        />

        {/* Logo com espaçamento reduzido e refinado */}
        <div className="relative z-10 flex items-center gap-2 mb-2">
          <div className="bg-white rounded-full h-6 w-6 leading-none flex items-center justify-center shadow-sm">
            <span className="text-[#007041] text-xs font-black">★</span>
          </div>
          <span className="text-white font-black tracking-tighter text-xl uppercase">UHNK</span>
        </div>

        {/* Bloco de Mensagem Principal */}
        <div className="relative z-10 max-w-md space-y-5">
          <h1 className="text-5xl font-black text-white leading-tight tracking-tight">
            Patrimônio em constante
            <span className="block text-white/80 font-light italic">evolução.</span>
          </h1>
          <p className="text-white/80 text-sm font-medium leading-relaxed max-w-sm">
            Sua jornada de aprendizado na Heineken continua aqui. Acesse os conteúdos exclusivos da nossa universidade corporativa.
          </p>
          
          <div className="mt-6 flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 w-fit shadow-lg">
            <div className="h-10 w-10 bg-black/20 rounded-xl flex items-center justify-center text-[10px] font-bold text-white tracking-widest">
              UHNK
            </div>
            <div>
              <p className="text-[10px] font-black text-white uppercase tracking-wider">Próxima Parada: Sommelier de Estrelas</p>
              <p className="text-[9px] text-white/60 font-bold uppercase tracking-wide mt-0.5">Módulo 04 • 85% concluído</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-[9px] font-black text-white/40 tracking-[0.4em] uppercase font-mono">EST. 1864</div>
      </div>

      {/* --- PAINEL DIREITO: FORMULÁRIO DE INTERAÇÃO --- */}
      <div className="flex w-full items-center justify-center p-6 sm:p-12 lg:w-1/2 bg-white shadow-2xl z-10">
        <div className="w-full max-w-sm space-y-8">

          {!success ? (
            <>
              {/* Título e Contexto */}
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-neutral-900 tracking-tight">Recuperar acesso</h2>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  Insira suas credenciais institucionais válidas para receber uma credencial temporária de acesso.
                </p>
              </div>

              {/* Box de Notificação de Erro Interno */}
              {error && (
                <div className="flex items-start gap-2.5 rounded-xl bg-red-50 p-4 border border-red-100 text-red-700 animate-in fade-in slide-in-from-top-2 duration-200">
                  <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold leading-relaxed">{error}</p>
                </div>
              )}

              {/* Formulário principal */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    E-mail Corporativo
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nome.sobrenome@heineken.com"
                    className="w-full rounded-xl bg-slate-50 p-4 text-sm font-medium text-neutral-900 outline-none border border-slate-200/80 focus:border-[#007041] focus:ring-4 focus:ring-[#007041]/5 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    CPF
                  </label>
                  <input
                    required
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="000.000.000-00"
                    className="w-full rounded-xl bg-slate-50 p-4 text-sm font-medium text-neutral-900 outline-none border border-slate-200/80 focus:border-[#007041] focus:ring-4 focus:ring-[#007041]/5 transition-all placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#007041] py-4 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#005431] active:scale-[0.99] shadow-lg shadow-[#007041]/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Processando..." : "Solicitar credenciais"} 
                  {!loading && <ArrowRight className="h-4 w-4 shrink-0" />}
                </button>
              </form>
            </>
          ) : (
            /* --- ESTADO DE SUCESSO --- */
            <div className="space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="flex justify-center">
                <div className="rounded-full bg-emerald-50 p-3 text-[#007041]">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-neutral-900 tracking-tight">Acesso Liberado!</h2>
                <p className="text-slate-500 text-sm font-medium">Anote sua chave temporária de autenticação:</p>
                
                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 text-2xl font-mono font-black tracking-widest text-[#007041] shadow-inner select-all">
                  {temporaryPassword}
                </div>
                
                <p className="text-slate-400 text-xs font-medium pt-1">
                  Por segurança, mude essa senha imediatamente após realizar o login no painel de configurações.
                </p>
              </div>

              <button
                onClick={() => router.push("/login")}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#007041] py-4 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#005431] shadow-lg shadow-[#007041]/10"
              >
                Prosseguir para o Login <ArrowRight className="h-4 w-4 shrink-0" />
              </button>
            </div>
          )}

          {/* Link de retorno unificado */}
          <div className="flex justify-center pt-4 border-t border-slate-100">
            <Link
              href="/login"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#007041] hover:text-[#005431] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5 shrink-0" /> Retornar à tela de autenticação
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}