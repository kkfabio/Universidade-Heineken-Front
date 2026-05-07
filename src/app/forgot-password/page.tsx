"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen bg-[#F4F4F4]">
      {/* LADO ESQUERDO: Imagem/Verde */}
      <div className="relative hidden w-1/2 flex-col justify-between bg-heineken-green p-16 lg:flex overflow-hidden">
        {/* Camada de imagem de fundo (Garrafa) */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('/bottle-bg.jpg')" }} // Adicione uma imagem na pasta public depois
        />

        <div className="relative z-10 flex items-center gap-2">
          <div className="bg-white rounded-full p-1 leading-none flex items-center justify-center">
            <span className="text-heineken-green text-xs">★</span>
          </div>
          <span className="text-white font-bold tracking-tighter italic">UHNK</span>
        </div>

        <div className="relative z-10 max-w-md space-y-4">
          <h1 className="text-5xl font-serif text-white leading-tight">
            Patrimônio em constante 
            <span className="italic font-light"> evolução.</span>
          </h1>
          <p className="text-heineken-light/80 text-sm leading-relaxed">
            Sua jornada de aprendizado na Heineken continua aqui. Acesse os conteúdos exclusivos da nossa universidade corporativa.
          </p>

          {/* Card de Progresso */}
          <div className="mt-8 flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 w-fit">
            <div className="h-10 w-10 bg-black/20 rounded flex items-center justify-center text-[8px] text-white">IMG</div>
            <div>
              <p className="text-[10px] font-bold text-white uppercase tracking-wider">Próxima Parada: Sommelier de Estrelas</p>
              <p className="text-[9px] text-white/60 uppercase">Módulo 04 • 85% concluído</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-[8px] text-white/40 tracking-[0.4em] uppercase">
          EST. 1864
        </div>
      </div>

      {/* LADO DIREITO: Formulário */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2 bg-white">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Recuperar acesso</h2>
            <p className="text-gray-500 text-sm leading-snug">
              Insira seu e-mail para receber as instruções de redefinição de senha.
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">
                Email Corporativo
              </label>
              <input
                required
                type="email"
                placeholder="nome.sobrenome@heineken.com"
                className="w-full rounded-lg bg-gray-100 p-4 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-heineken-green/20 transition-all border border-transparent focus:border-heineken-green"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-heineken-green py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-heineken-dark shadow-lg shadow-heineken-green/20"
            >
              Enviar instruções <ArrowRight size={16} />
            </button>
          </form>

          <div className="flex justify-center">
            <Link 
              href="/login" 
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-heineken-green hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={14} /> Voltar para o login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}