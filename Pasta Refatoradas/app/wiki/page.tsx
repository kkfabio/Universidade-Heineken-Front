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
  Menu,
} from "lucide-react";

export default function WikiPage() {
  return (
    <main className="w-full min-h-screen bg-[#f3f3f3] flex overflow-hidden font-sans">
      
      {/* ==================== SIDEBAR ==================== */}
      <aside className="hidden md:flex w-[220px] bg-[#0f5b2d] min-h-screen flex-col justify-between shrink-0 shadow-xl">
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
      <section className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        
        {/* ==================== TOPBAR ==================== */}
        <header className="h-[60px] bg-white border-b border-[#ececec] flex items-center justify-between px-4 md:px-8 shrink-0">
          
          <div className="flex items-center gap-3">
            <button className="md:hidden text-gray-600">
              <Menu size={22} />
            </button>

            <h1 className="text-[#165a2f] italic font-bold text-2xl md:text-3xl title-serif tracking-tighter">
              UHNK
            </h1>
          </div>

          <div className="flex items-center gap-4 md:gap-5 text-gray-500">
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

        {/* ==================== PAGE CONTENT ==================== */}
        <div className="px-4 md:px-10 py-6 md:py-10 w-full">
          
          {/* ==================== HEADER ==================== */}
          <div className="relative mb-10">
            
            <div className="absolute -top-4 right-0 opacity-15 hidden lg:block">
              <Star size={140} fill="#d1d5db" color="#d1d5db" />
            </div>

            <span className="text-[#008000] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] block mb-3">
              Knowledge Repository
            </span>

            <h1 className="title-serif text-[32px] md:text-[48px] font-bold text-slate-800 leading-[1.1] mb-4">
              Wiki — Conheça a <br /> Heineken
            </h1>

            <p className="text-gray-500 text-[14px] md:text-[15px] max-w-xl leading-relaxed">
              Explore deeper into our legacy, our processes, and the values that
              define our excellence. This is our shared heritage.
            </p>
          </div>

          {/* ==================== GRID ==================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-12">
            
            {/* ==================== HISTÓRIA ==================== */}
            <div className="lg:col-span-8 rounded-[24px] bg-white shadow-lg overflow-hidden flex flex-col md:flex-row group cursor-pointer min-h-[240px]">
              
              <div className="md:w-[45%] bg-[#0a3d21] flex items-center justify-center p-8 relative overflow-hidden">
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

              <div className="flex-1 p-6 md:p-7 flex flex-col justify-center bg-white">
                
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-[#008000] text-[10px] font-bold uppercase tracking-widest">
                    Legado
                  </span>

                  <span className="bg-[#008000] text-white text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Destaque
                  </span>
                </div>

                <h2 className="title-serif text-[24px] md:text-[28px] font-bold text-slate-800 mb-3">
                  História
                </h2>

                <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                  Desde 1864, de uma pequena cervejaria em Amsterdã para o
                  mundo. Descubra a jornada de Gerard Adriaan Heineken.
                </p>

                <button className="flex items-center gap-1.5 text-[#008000] text-[13px] font-bold hover:gap-3 transition-all">
                  Ler artigo completo <ChevronRight size={15} />
                </button>
              </div>
            </div>

            {/* ==================== CULTURA ==================== */}
            <div className="lg:col-span-4 rounded-[20px] bg-[#007a33] p-7 text-white flex flex-col justify-between shadow-lg hover:bg-[#006d2e] transition-colors cursor-pointer min-h-[240px]">
              
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-md">
                <Users size={20} />
              </div>

              <div className="mt-8">
                <span className="text-green-200/70 text-[10px] font-bold uppercase tracking-widest block mb-1.5">
                  Valores
                </span>

                <h2 className="title-serif text-[24px] md:text-[26px] font-bold mb-3 leading-tight">
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

            {/* ==================== SUSTENTABILIDADE ==================== */}
            <div className="lg:col-span-5 rounded-[24px] bg-white shadow-lg overflow-hidden flex flex-col cursor-pointer group">
              
              <div className="h-[160px] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-green-500/50 flex items-center justify-center text-green-500/60">
                  <Leaf size={30} />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                
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

                <button className="mt-5 w-fit px-5 py-2 rounded-full border border-gray-200 text-gray-600 text-[12px] font-semibold hover:border-green-500 hover:text-green-700 hover:bg-green-50 transition-all">
                  Ver Infográfico
                </button>
              </div>
            </div>

            {/* ==================== FABRICAÇÃO ==================== */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              
              <div className="rounded-[24px] bg-white shadow-lg overflow-hidden flex group cursor-pointer relative min-h-[110px]">
                
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

                    <h2 className="title-serif text-[22px] md:text-[26px] font-bold text-slate-800 leading-tight">
                      Processo de Fabricação
                    </h2>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
                    <ChevronRight size={18} className="text-green-600" />
                  </div>
                </div>
              </div>

              {/* SUBCARDS */}
              <div className="flex flex-col md:flex-row gap-4">
                
                {/* CARD 1 */}
                <div className="flex-1 rounded-[24px] bg-white shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=400"
                    alt="Malte"
                    className="w-full h-[180px] object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-[18px] font-bold text-slate-800">
                      Puro Malte
                    </h3>

                    <p className="text-gray-400 text-[12px] leading-relaxed mt-2">
                      Ingredientes selecionados com rigor e tradição.
                    </p>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="flex-1 rounded-[24px] bg-white shadow-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=400"
                    alt="Fermentação"
                    className="w-full h-[180px] object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-[18px] font-bold text-slate-800">
                      Fermentação A
                    </h3>

                    <p className="text-gray-400 text-[12px] leading-relaxed mt-2">
                      O segredo do sabor equilibrado e da pureza incomparável.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== FOOTER CTA ==================== */}
          <div className="text-center py-8 flex flex-col items-center border-t border-gray-200">
            
            <div className="text-green-600 text-[40px] font-serif leading-none opacity-40 mb-1">
              "
            </div>

            <p className="text-[15px] md:text-[16px] title-serif italic text-slate-600 mb-6 max-w-md px-2">
              "Qualidade não é um ato, é um hábito."
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-2.5 rounded-full bg-[#008000] text-white text-[12px] font-bold hover:bg-[#006d2e] transition-all shadow-md">
                Contribuir com a Wiki
              </button>

              <button className="px-6 py-2.5 rounded-full bg-white border border-gray-200 text-[#008000] text-[12px] font-bold hover:bg-gray-50 transition-all">
                Solicitar Tópico
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}