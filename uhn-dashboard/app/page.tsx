import React from "react";
import {
  Bell,
  Settings,
  User,
  Home,
  BookOpen,
  Globe,
  Award,
  Medal,
  Clock3,
  ChevronRight,
} from "lucide-react";

export default function PerfilPage() {
  return (
    <main className="w-screen min-h-screen bg-[#f3f3f3] flex overflow-hidden font-sans">
      
      {/* SIDEBAR - Utilizando suas classes do global.css */}
      <aside className="w-[200px] bg-[#0f5b2d] min-h-screen flex flex-col justify-between shrink-0 shadow-xl">
        <div>
          {/* LOGO */}
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

          {/* MENU */}
          <nav className="mt-6 flex flex-col">
            <div className="sidebar-item">
              <Home size={16} /> FEED
            </div>
            <div className="sidebar-item">
              <BookOpen size={16} /> COURSES
            </div>
            <div className="sidebar-item">
              <Globe size={16} /> WIKI
            </div>
            <div className="sidebar-item">
              <Award size={16} /> CERTIFICATES
            </div>
            <div className="sidebar-item sidebar-active">
              <User size={16} /> PROFILE
            </div>
          </nav>
        </div>

        {/* ASK AI */}
        <div className="p-4">
          <button className="w-full h-11 rounded-xl bg-[#08b000] text-white text-xs font-bold hover:bg-[#07a000] transition-colors shadow-lg">
            Ask AI
          </button>
        </div>
      </aside>

      {/* CONTENT AREA */}
      <section className="flex-1 flex flex-col h-screen overflow-y-auto">
        
        {/* TOPBAR */}
        <header className="h-[60px] bg-white border-b border-[#ececec] flex items-center justify-between px-8 shrink-0">
          <h1 className="text-[#165a2f] italic font-bold text-3xl title-serif tracking-tighter">
            UHNK
          </h1>

          <div className="flex items-center gap-5 text-gray-500">
            <Bell size={20} className="cursor-pointer hover:text-gray-800 transition-colors" />
            <Settings size={20} className="cursor-pointer hover:text-gray-800 transition-colors" />
            <div className="w-9 h-9 rounded-full border-2 border-[#ff6b32] bg-[#3d8f95] overflow-hidden shadow-sm">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Thiago" alt="avatar" />
            </div>
          </div>
        </header>

        {/* GREEN HERO HEADER */}
        <div className="w-full bg-[#008000] px-12 py-8 flex items-center justify-between relative">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-white bg-[#2d4554] overflow-hidden shadow-lg">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Thiago" alt="profile" />
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-[#df3c00] border-2 border-white flex items-center justify-center shadow-sm">
                <span className="text-[10px] text-white font-bold">✎</span>
              </div>
            </div>

            <div>
              <h2 className="text-white text-3xl font-bold">Thiago Silva</h2>
              <p className="text-green-100/80 text-sm font-medium">
                Brand Manager — Supply Chain Excellence
              </p>
            </div>
          </div>

          {/* XP PROGRESS CARD */}
          <div className="w-[360px] rounded-2xl bg-white/10 backdrop-blur-sm p-4 border border-white/20 shadow-xl">
            <div className="flex justify-between text-white text-[10px] font-bold uppercase tracking-wider mb-2">
              <span>Nível 14 • Mestre Cervejeiro</span>
              <span>12,450 XP</span>
            </div>
            <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden relative">
              <div className="w-[70%] h-full bg-green-400 rounded-full"></div>
              {/* Star indicator on progress bar */}
              <div className="absolute left-[70%] top-0 w-px h-full bg-white shadow-sm"></div>
            </div>
            <p className="text-[10px] text-white/70 text-center mt-2 font-medium">
              Faltam 1,550 XP para o próximo nível
            </p>
          </div>
        </div>

        {/* MAIN BODY */}
        <div className="p-8 max-w-7xl mx-auto w-full flex gap-8">
          
          {/* LEFT COLUMN: Info & Badges */}
          <div className="w-[340px] flex flex-col gap-6 shrink-0">
            
            {/* PERSONAL INFO CARD */}
            <div className="card shadow-soft p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[#1d6a28] text-2xl font-bold title-serif leading-tight">
                  Informações <br /> Pessoais
                </h2>
                <Settings size={16} color="#aaa" className="cursor-pointer hover:text-gray-600" />
              </div>

              <div className="space-y-6">
                <InfoItem label="E-mail corporativo" value="thiago.silva@heineken.com" />
                <InfoItem label="Localização" value="São Paulo, Brasil (HQ)" />
                <InfoItem label="Data de admissão" value="Março, 2021" />
                
                <div>
                  <span className="text-[10px] uppercase text-gray-400 font-bold block mb-2">
                    Idiomas
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    {['Português', 'English', 'Dutch'].map(lang => (
                      <span key={lang} className="px-3 py-1 rounded-full bg-[#edf7ea] text-[#1c722d] text-xs font-bold">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BADGES CARD */}
            <div className="card shadow-soft p-6">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-[#1d6a28] text-2xl font-bold title-serif">
                  Meus Badges
                </h2>
                <button className="text-[#cf2900] text-xs font-bold hover:underline">
                  Ver todos
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Expert em Logística", locked: false },
                  { name: "Sustentabilidade", locked: false },
                  { name: "Inovação 2025", locked: false },
                  { name: "Liderança", locked: false },
                  { name: "QA Orientado", locked: false },
                  { name: "Locked", locked: true },
                ].map((badge, index) => (
                  <div
                    key={index}
                    className={`h-20 rounded-xl flex flex-col items-center justify-center text-center p-2 transition-all ${
                      badge.locked ? 'bg-gray-100 opacity-60' : 'bg-[#f7f7f7] hover:bg-green-50 border border-transparent hover:border-green-200'
                    }`}
                  >
                    <Medal
                      size={20}
                      color={badge.locked ? "#ccc" : "#0d8d24"}
                    />
                    <span className="text-[9px] mt-2 font-bold leading-tight text-gray-600">
                      {badge.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: My Activity */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-[#2b2b2b] mb-8 title-serif">
              Minha Atividade
            </h1>

            {/* STATS GRID */}
            <div className="flex gap-6 items-start">
              
              {/* Large Courses Completed Card */}
              <div className="w-[260px] h-[220px] rounded-[24px] bg-[#008000] p-8 flex flex-col justify-end text-white shadow-lg">
                <Award size={28} className="mb-auto" />
                <h3 className="text-6xl font-black leading-none">08</h3>
                <span className="uppercase tracking-widest text-xs font-bold mt-3 opacity-90">
                  Cursos concluídos
                </span>
              </div>

              {/* Vertical Stack for Ranking and Hours */}
              <div className="flex flex-col gap-6">
                
                {/* Ranking Card */}
                <div className="w-[260px] h-[100px] card shadow-soft p-6 flex items-center justify-between group cursor-pointer hover:border-green-400 transition-all">
                  <div>
                    <span className="text-[10px] uppercase text-gray-400 font-bold block tracking-wider">
                      Ranking Global
                    </span>
                    <h2 className="text-[#198b27] text-3xl font-black mt-1">
                      #42nd Place
                    </h2>
                  </div>
                  <ChevronRight color="#198b27" className="group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Study Hours Card */}
                <div className="w-[260px] h-[100px] rounded-[24px] bg-[#008000] p-6 flex items-center justify-between text-white shadow-lg">
                  <div>
                    <span className="text-[10px] uppercase opacity-80 font-bold block tracking-wider">
                      Horas de estudo
                    </span>
                    <h2 className="text-3xl font-black mt-1">
                      124h 30m
                    </h2>
                  </div>
                  <Clock3 size={28} className="opacity-80" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Helper Component for Info Items
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-[10px] uppercase text-gray-400 font-bold block">
        {label}
      </span>
      <p className="text-[15px] mt-1 font-medium text-slate-700">
        {value}
      </p>
    </div>
  );
}
