import React from "react";
import {
  Bell,
  Settings,
  User,
  Home,
  BookOpen,
  Globe,
  Award,
  Users,
  Leaf,
  Bookmark,
  ChevronRight,
  Star,
} from "lucide-react";

export default function WikiPage() {
  return (
    <main className="w-screen min-h-screen bg-[#f3f3f3] flex overflow-hidden font-sans">
      {/* ==================== SIDEBAR ==================== */}
      <aside className="w-[200px] bg-[#0f5b2d] min-h-screen flex flex-col justify-between shrink-0 shadow-xl">
        <div>
          <div className="flex items-center gap-3 px-5 py-6 border-b border-white/10">
            <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
              <User size={18} color="white" />
            </div>
            <div className="overflow-hidden">
              <h1 className="text-white text-[11px] font-bold leading-tight truncate">
                Learning Journey
              </h1>
              <span className="text-[9px] text-[#a9c7ad] uppercase tracking-widest block">
                Global Graduate
              </span>
            </div>
          </div>

          <nav className="mt-6 flex flex-col">
            <div className="sidebar-item">
              <Home size={16} /> FEED
            </div>
            <div className="sidebar-item">
              <BookOpen size={16} /> COURSES
            </div>
            <div className="sidebar-item sidebar-active">
              <Globe size={16} /> WIKI
            </div>
            <div className="sidebar-item">
              <Award size={16} /> CERTIFICATES
            </div>
            <div className="sidebar-item">
              <User size={16} /> PROFILE
            </div>
          </nav>
        </div>

        <div className="p-4">
          <button className="w-full h-11 rounded-xl bg-[#08b000] text-white text-xs font-bold hover:bg-[#07a000] transition-colors shadow-lg">
            Ask AI
          </button>
        </div>
      </aside>

      {/* ==================== CONTENT ==================== */}
      <section className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* TOPBAR */}
        <header className="h-[60px] bg-white border-b border-[#ececec] flex items-center justify-between px-8 shrink-0">
          <h1 className="text-[#165a2f] italic font-bold text-3xl title-serif tracking-tighter">
            UHNK
          </h1>
          <div className="flex items-center gap-5 text-gray-500">
            <Bell
              size={20}
              className="cursor-pointer hover:text-gray-800 transition-colors"
            />
            <Settings
              size={20}
              className="cursor-pointer hover:text-gray-800 transition-colors"
            />
            <div className="w-9 h-9 rounded-full border-2 border-[#ff6b32] bg-[#3d8f95] overflow-hidden shadow-sm">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Thiago"
                alt="avatar"
              />
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="px-10 py-10 w-full">
          {/* ========== HEADER ========== */}
          <div className="relative mb-10">
            <div className="absolute -top-4 right-0 opacity-15 hidden lg:block">
              <Star size={140} fill="#d1d5db" color="#d1d5db" />
            </div>

            <span className="text-[#008000] text-[11px] font-bold uppercase tracking-[0.2em] block mb-3">
              Knowledge Repository
            </span>
            <h1 className="title-serif text-[48px] font-bold text-slate-800 leading-[1.1] mb-4">
              Wiki — Conheça a <br /> Heineken
            </h1>
            <p className="text-gray-500 text-[15px] max-w-xl leading-relaxed">
              Explore deeper into our legacy, our processes, and the values that
              define our excellence. This is our shared heritage.
            </p>
          </div>

          {/* ========== GRID DE CARDS ========== */}
          <div className="grid grid-cols-12 gap-5 mb-12">
            {/* ——— ROW 1 ——— */}

            {/* Card: História */}
            <div className="col-span-12 lg:col-span-8 card shadow-soft overflow-hidden flex group cursor-pointer h-[240px]">
              <div className="w-[45%] bg-[#0a3d21] flex items-center justify-center p-6 relative overflow-hidden shrink-0">
                <div className="w-[130px] h-[130px] rounded-full border-[3px] border-[#c5a44e]/50 flex items-center justify-center bg-green-900 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <div className="w-[105px] h-[105px] rounded-full border-2 border-[#c5a44e]/30 bg-[#0f4424] flex flex-col items-center justify-center">
                    <div className="text-[#c5a44e] text-[7px] tracking-widest uppercase font-bold">
                      Premium Quality
                    </div>
                    <div className="w-12 h-[1px] bg-[#c5a44e]/30 my-1" />
                    <div className="text-white text-[13px] font-bold title-serif tracking-wider">
                      Heineken
                    </div>
                    <div className="w-12 h-[1px] bg-[#c5a44e]/30 my-1" />
                    <div className="text-[#c5a44e] text-[6px] tracking-widest uppercase">
                      Est. 1864
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-7 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#008000] text-[10px] font-bold uppercase tracking-widest">
                    Legado
                  </span>
                  <span className="bg-[#008000] text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Destaque
                  </span>
                </div>
                <h2 className="title-serif text-[28px] font-bold text-slate-800 mb-3">
                  História
                </h2>
                <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                  Desde 1864, de uma pequena cervejaria em Amsterdã para o
                  mundo. Descubra a jornada de Gerard Adriaan Heineken.
                </p>
                <button className="flex items-center gap-1.5 text-[#008000] text-[13px] font-bold group-hover:gap-3 transition-all">
                  Ler artigo completo <ChevronRight size={15} />
                </button>
              </div>
            </div>

            {/* Card: Cultura */}
            <div className="col-span-12 lg:col-span-4 rounded-[20px] bg-[#007a33] p-7 text-white flex flex-col justify-between shadow-lg hover:bg-[#006d2e] transition-colors cursor-pointer h-[240px]">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-md">
                <Users size={20} />
              </div>
              <div>
                <span className="text-green-200/70 text-[10px] font-bold uppercase tracking-widest block mb-1.5">
                  Valores
                </span>
                <h2 className="title-serif text-[26px] font-bold mb-3 leading-tight">
                  Cultura
                </h2>
                <p className="text-green-100/60 text-[12px] leading-relaxed mb-4">
                  Entenda os pilares que sustentam nosso ambiente de trabalho e o
                  orgulho de pertencer à HEINEKEN.
                </p>
                <button className="flex items-center gap-1.5 text-white/80 text-[13px] font-bold hover:text-white hover:gap-3 transition-all">
                  Explorar <ChevronRight size={15} />
                </button>
              </div>
            </div>

            {/* ——— ROW 2 ——— */}

            {/* Card: Sustentabilidade */}
            <div className="col-span-12 lg:col-span-5 card shadow-soft overflow-hidden flex flex-col cursor-pointer group h-[420px]">
              <div className="h-[160px] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-green-500/50 flex items-center justify-center text-green-500/60">
                  <Leaf size={30} />
                </div>
                <div className="absolute bottom-3 w-full text-center">
                  <span className="text-white/20 text-[9px] tracking-[0.25em] uppercase font-bold">
                    Strive for Sustainability
                  </span>
                </div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full border border-white/5" />
                <div className="absolute -top-3 -left-3 w-14 h-14 rounded-full border border-white/5" />
              </div>

              <div className="p-6 bg-white flex-1 flex flex-col">
                <span className="text-[#008000] text-[10px] font-bold uppercase tracking-widest block mb-1.5">
                  Brewing a Better World
                </span>
                <h2 className="title-serif text-[22px] font-bold text-slate-800 mb-2 leading-tight">
                  Sustentabilidade
                </h2>
                <p className="text-gray-500 text-[12px] leading-relaxed flex-1">
                  Nosso compromisso com o meio ambiente e com o impacto social
                  positivo em nossas operações.
                </p>

                <div className="flex justify-between items-center mt-4 mb-3">
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                    12 min de leitura
                  </span>
                  <div className="p-2 rounded-full bg-gray-100 text-gray-400 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                    <Bookmark size={14} />
                  </div>
                </div>

                <button className="w-fit px-5 py-2 rounded-full border border-gray-200 text-gray-600 text-[12px] font-semibold hover:border-green-500 hover:text-green-700 hover:bg-green-50 transition-all">
                  Ver Infográfico
                </button>
              </div>
            </div>

            {/* Card: Processo de Fabricação */}
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-4 h-[420px]">
              {/* Header card com imagem de fundo */}
              <div className="card shadow-soft overflow-hidden flex group cursor-pointer hover:shadow-md transition-shadow relative h-[110px]">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80&w=800"
                    alt="Brewery"
                    className="w-full h-full object-cover opacity-15 group-hover:opacity-25 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="relative z-10 px-6 py-5 flex items-center justify-between w-full">
                  <div>
                    <span className="text-[#008000] text-[10px] font-bold uppercase tracking-widest block mb-1">
                      Excelência Técnica
                    </span>
                    <h2 className="title-serif text-[26px] font-bold text-slate-800 leading-tight">
                      Processo de Fabricação
                    </h2>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <ChevronRight size={18} className="text-green-600" />
                  </div>
                </div>
              </div>

              {/* Sub-cards row */}
              <div className="flex gap-4 flex-1 min-h-0">
                {/* ===== PURO MALTE ===== */}
                <div className="flex-1 card shadow-soft overflow-hidden flex flex-col cursor-pointer group hover:shadow-md transition-shadow">
                  {/* Imagem de malte */}
                  <div className="h-[120px] relative shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=400"
                      alt="Grãos de malte"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* Number badge */}
                    <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <span className="text-green-700 font-bold text-[11px]">
                        01
                      </span>
                    </div>

                    {/* Label */}
                    <div className="absolute bottom-3 left-3">
                      <span className="text-white/80 text-[8px] tracking-[0.15em] uppercase font-bold">
                        Ingredientes
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[17px] font-bold text-slate-800 leading-tight">
                        Puro Malte
                      </h3>
                      <p className="text-gray-400 text-[12px] leading-relaxed mt-2">
                        A base de nossa qualidade superior — ingredientes
                        selecionados com rigor e tradição centenária.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-4 text-green-600 text-[11px] font-semibold group-hover:gap-3 transition-all">
                      Saiba mais
                      <ChevronRight size={13} />
                    </div>
                  </div>
                </div>

                {/* ===== FERMENTAÇÃO A ===== */}
                <div className="flex-1 card shadow-soft overflow-hidden flex flex-col cursor-pointer group hover:shadow-md transition-shadow">
                  {/* Imagem de fermentação */}
                  <div className="h-[120px] relative shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=400"
                      alt="Tanques de fermentação"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* Number badge */}
                    <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <span className="text-green-700 font-bold text-[11px]">
                        02
                      </span>
                    </div>

                    {/* Label */}
                    <div className="absolute bottom-3 left-3">
                      <span className="text-white/80 text-[8px] tracking-[0.15em] uppercase font-bold">
                        Brewing Process
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[17px] font-bold text-slate-800 leading-tight">
                        Fermentação A
                      </h3>
                      <p className="text-gray-400 text-[12px] leading-relaxed mt-2">
                        O segredo do sabor equilibrado e da pureza incomparável.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-4 text-green-600 text-[11px] font-semibold group-hover:gap-3 transition-all">
                      Saiba mais
                      <ChevronRight size={13} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== QUOTE + CTAs ========== */}
          <div className="text-center py-8 flex flex-col items-center border-t border-gray-200">
            <div className="text-green-600 text-[40px] font-serif leading-none opacity-40 mb-1">
              "
            </div>
            <p className="text-[16px] title-serif italic text-slate-600 mb-6 max-w-md">
              "Qualidade não é um ato, é um hábito."
            </p>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 rounded-full bg-[#008000] text-white text-[12px] font-bold hover:bg-[#006d2e] transition-all shadow-md active:scale-95">
                Contribuir com a Wiki
              </button>
              <button className="px-6 py-2.5 rounded-full bg-white border border-gray-200 text-[#008000] text-[12px] font-bold hover:bg-gray-50 transition-all active:scale-95">
                Solicitar Tópico
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}