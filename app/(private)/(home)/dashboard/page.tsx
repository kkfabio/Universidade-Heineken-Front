"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { 
  TrendingUp, 
  ArrowUpRight, 
  BookOpen, 
  Leaf, 
  Globe, 
  History,
  Sparkles
} from "lucide-react";

const NewsModal = dynamic(() => import("@/components/dashboard/NewsModal"), { ssr: false });
const NotificationListModal = dynamic(() => import("@/components/dashboard/NotificationListModal"), { ssr: false });

export default function DashboardPage() {
  const [showNews, setShowNews] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const alreadySeen = sessionStorage.getItem("dashboard_news_seen");
    if (!alreadySeen) {
      setShowNews(true);
    }
  }, []);

  const handleTransition = () => {
    sessionStorage.setItem("dashboard_news_seen", "true");
    setShowNews(false);
    setShowNotifications(true);
  };

  const isOverlayActive = mounted && (showNews || showNotifications);

  return (
    <div className="relative min-h-screen bg-[#F8FAFB] w-full">
      {/* Container principal com controle de transição e redução de escala suavizada para overlays */}
      <div
        className={`transition-all duration-300 ease-out w-full ${
          isOverlayActive ? "blur-[3px] scale-[0.99] origin-center opacity-90" : "blur-0 scale-100 opacity-100"
        }`}
      >
        <main className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto min-h-screen w-full">
          
          {/* --- CABEÇALHO DA DASHBOARD --- */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight flex items-center gap-3">
              Olá, João Silva! <span className="animate-pulse">☀️</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
              Veja o que está acontecendo na Universidade UHNK hoje.
            </p>
          </div>

          {/* --- CONTEÚDO PRINCIPAL (Destaque + Painel Lateral) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
            
            {/* Banner de Destaque Principal */}
            <div className="lg:col-span-3 bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col justify-between group">
              <Link href="https://www.heinekenbrasil.com.br/" target="_blank" className="block relative w-full h-[240px] sm:h-[350px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da"
                  alt="Produção Heineken Zero"
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </Link>
              
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between items-start">
                <div className="w-full">
                  <span className="inline-flex items-center gap-1.5 bg-[#007041]/10 text-[#007041] text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                    <Sparkles className="h-3 w-3 shrink-0" /> Novidade
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black mt-4 mb-3 text-neutral-900 tracking-tight leading-tight">
                    A Revolução Digital na Produção de Cerveja Zero
                  </h2>
                  <p className="text-slate-500 text-sm sm:text-lg font-medium leading-relaxed mb-6 max-w-3xl">
                    Descubra como novas tecnologias integradas estão transformando a consistência de produção e elevando globalmente a qualidade da nossa Heineken 0.0.
                  </p>
                </div>
                <Link
                  href="https://www.heinekenbrasil.com.br/"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#007041] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-[#005431] transition-colors shadow-md shadow-[#007041]/10 group/btn"
                >
                  Ler artigo completo <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Painel Lateral Direito */}
            <div className="flex flex-col gap-6 w-full">
              
              {/* Box de Estatísticas */}
              <div className="bg-white rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-slate-800 text-lg uppercase tracking-tight mb-5 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <TrendingUp className="h-4 w-4 text-[#007041]" /> Progresso Atual
                  </h3>
                  
                  <div className="mb-5">
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                      <span>Liderança Global</span>
                      <span className="text-[#007041] font-mono">85%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-[#007041] h-2 rounded-full transition-all duration-500" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                      <span>Inovação Sustentável</span>
                      <span className="text-[#007041] font-mono">43%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-[#007041] h-2 rounded-full transition-all duration-500" style={{ width: "43%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box de Próximo Módulo */}
              <div className="bg-[#007041] text-white rounded-[24px] p-6 shadow-[0_12px_24px_rgba(0,112,65,0.15)] flex flex-col justify-between items-start h-full min-h-[220px]">
                <div className="w-full">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/70 flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5" /> Próximo Módulo
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black mt-3 mb-6 tracking-tight leading-snug">
                    Cultura Heineken: 150 Anos de Excelência
                  </h3>
                </div>
                <Link
                  href="https://www.heineken.com/br/pt/nossa-historia"
                  target="_blank"
                  className="w-full text-center sm:w-auto bg-white text-neutral-900 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition duration-200 hover:bg-slate-50 hover:shadow-lg active:scale-95"
                >
                  Continuar jornada
                </Link>
              </div>

            </div>
          </div>

          {/* --- GRID SECUNDÁRIO DE TRILHAS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
            
            {/* Card 1: Sustentabilidade */}
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 group">
              <Link href="https://www.heinekenbrasil.com.br/sustentabilidade" target="_blank" className="block relative w-full h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt="Sustentabilidade"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
              <div className="p-5">
                <span className="inline-flex items-center gap-1 text-emerald-600 text-[10px] font-black tracking-wider uppercase bg-emerald-50 px-2 py-0.5 rounded">
                  <Leaf className="h-3 w-3 shrink-0" /> Sustentabilidade
                </span>
                <h3 className="text-xl font-black mt-3 text-neutral-900 tracking-tight group-hover:text-[#007041] transition-colors">
                  Brewing a Better World
                </h3>
              </div>
            </div>

            {/* Card 2: Comunidade */}
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 group">
              <Link href="https://www.heineken.com/" target="_blank" className="block relative w-full h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  alt="Comunidade"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
              <div className="p-5">
                <span className="inline-flex items-center gap-1 text-sky-600 text-[10px] font-black tracking-wider uppercase bg-sky-50 px-2 py-0.5 rounded">
                  <Globe className="h-3 w-3 shrink-0" /> Comunidade
                </span>
                <h3 className="text-xl font-black mt-3 text-neutral-900 tracking-tight group-hover:text-[#007041] transition-colors">
                  Novo Hub Global em Amsterdã
                </h3>
              </div>
            </div>

            {/* Card 3: Legado */}
            <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 group">
              <Link href="https://www.heineken.com/br/pt/nossa-historia" target="_blank" className="block relative w-full h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
                  alt="Legado do Fermento"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
              <div className="p-5">
                <span className="inline-flex items-center gap-1 text-amber-600 text-[10px] font-black tracking-wider uppercase bg-amber-50 px-2 py-0.5 rounded">
                  <History className="h-3 w-3 shrink-0" /> Legado e História
                </span>
                <h3 className="text-xl font-black mt-3 text-neutral-900 tracking-tight group-hover:text-[#007041] transition-colors">
                  O Segredo do Fermento A Revelado
                </h3>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* --- RENDERIZAÇÃO FLUIDA DOS MODAIS --- */}
      {showNews && <NewsModal onContinue={handleTransition} />}
      {showNotifications && (
        <NotificationListModal onClose={() => setShowNotifications(false)} />
      )}
    </div>
  );
}