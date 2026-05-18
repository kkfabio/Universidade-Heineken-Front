import {
  Bell,
  Settings,
  User,
  Home,
  BookOpen,
  Globe,
  Award,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";

export default function CursoConcluidoPage() {
  return (
    <main className="w-screen min-h-screen bg-[#f3f3f3] flex overflow-hidden">
      {/* ==================== SIDEBAR ==================== */}
      <aside className="w-[200px] min-w-[200px] bg-[#0f5b2d] min-h-screen flex flex-col justify-between shrink-0 shadow-xl">
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
            <div className="sidebar-item sidebar-active">
              <BookOpen size={16} /> COURSES
            </div>
            <div className="sidebar-item">
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
          <button className="w-full h-11 rounded-xl bg-[#08b000] text-white text-xs font-bold hover:bg-[#07a000] transition-colors shadow-lg flex items-center justify-center gap-2">
            <Sparkles size={14} />
            Ask AI
          </button>
        </div>
      </aside>

      {/* ==================== CONTENT ==================== */}
      <section className="flex-1 min-w-0 flex flex-col h-screen">
        {/* Top Bar */}
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

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-10 py-10">
          {/* ========== PAGE HEADER ========== */}
          <div className="mb-8">
            <span className="text-gray-400 text-[13px] font-medium">02</span>
            <h1 className="title-serif text-[48px] font-bold text-slate-800 leading-[1.1] mt-1">
              Curso Concluído
            </h1>
            <p className="text-gray-500 text-[15px] max-w-2xl leading-relaxed mt-3">
              Completou com êxito o curso de Maestria em Logística Sustentável.
              Continue explorando novos desafios!
            </p>
          </div>

          {/* ========== RESULTADO DO CURSO ========== */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[18px] font-bold text-slate-800">
                Resultado do Curso
              </h2>
              <button className="text-[13px] text-slate-800 font-semibold hover:underline flex items-center gap-1">
                Ver todos →
              </button>
            </div>

            {/* Hero Cards */}
            <div className="grid grid-cols-5 gap-5">
              {/* Card 1 - Conclusão */}
              <div className="col-span-3 h-[280px] rounded-[20px] relative overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
                  alt="Success"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d1e]/95 via-[#115d2d]/80 to-[#115d2d]/50" />
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[11px] font-bold uppercase tracking-wide backdrop-blur-sm border border-white/15 text-white">
                      ⭐ Parabéns pelo sucesso
                    </span>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2 text-right">
                      <span className="text-white/50 text-[9px] uppercase tracking-wider font-bold block">
                        XP Ganho
                      </span>
                      <span className="text-white text-[18px] font-bold">
                        +2,450
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                        <Award size={20} className="text-white" />
                      </div>
                      <div className="h-[1px] flex-1 bg-white/10" />
                    </div>
                    <h3 className="text-[28px] font-bold text-white leading-tight">
                      Especialista Global
                    </h3>
                    <p className="text-white/50 text-[14px] mt-1">
                      Maestria em Logística Sustentável
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="px-6 py-2.5 rounded-xl bg-white text-[#115d2d] text-[12px] font-bold hover:bg-gray-100 transition-colors shadow-lg">
                      Ver progresso
                    </button>
                    <button className="px-6 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white text-[12px] font-bold hover:bg-white/20 transition-colors">
                      Compartilhar
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 - Certificado */}
              <div className="col-span-2 h-[280px] rounded-[20px] relative overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=600"
                  alt="Certificate"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a4a20]/95 via-[#5a6b3a]/80 to-[#5a6b3a]/50" />
                <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[11px] font-bold uppercase tracking-wide backdrop-blur-sm border border-white/15 text-white">
                      Certificado Disponível
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/15">
                      <CheckCircle2 size={18} className="text-green-300" />
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 flex flex-col items-center gap-2">
                    <div className="w-8 h-[1px] bg-white/30" />
                    <h3 className="text-[22px] font-bold text-white text-center leading-tight">
                      João Silva Pereira
                    </h3>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">
                      Certificado de Conclusão
                    </span>
                    <div className="w-8 h-[1px] bg-white/30" />
                  </div>
                  <button className="w-full py-3 rounded-xl bg-white text-[#4a5a2e] text-[12px] font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg">
                    <FileText size={14} />
                    Acessar Certificado
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ========== CONTEÚDO CONCLUÍDO ========== */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.15em]">
                Jornada
              </span>
              <span className="text-[13px] text-gray-400">3 módulos</span>
            </div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[18px] font-bold text-slate-800">
                Conteúdo Concluído
              </h2>
              <span className="bg-[#0a8c21] text-white text-[11px] px-4 py-1.5 rounded-full font-bold tracking-wide">
                100% COMPLETADO
              </span>
            </div>

            {/* Module Cards */}
            <div className="space-y-3">
              {[
                {
                  title: "Introdução à Cadeia de Suprimentos Circular",
                  aulas: "12 Aulas",
                },
                {
                  title: "Redução de Carbono em Transportes",
                  aulas: "08 Aulas",
                },
                {
                  title: "Ética e Compliance Ambiental",
                  aulas: "15 Aulas",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="card shadow-soft h-[80px] px-6 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#edf7ea] flex items-center justify-center shrink-0 group-hover:bg-[#d4f0d0] transition-colors">
                      <CheckCircle2 size={20} color="#0b8c22" />
                    </div>
                    <div>
                      <span className="text-[#13861d] text-[11px] font-semibold">
                        Módulo 0{index + 1}
                      </span>
                      <h3 className="font-bold text-[15px] text-[#222] leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[#bbb] text-[13px] shrink-0 ml-4">
                    {item.aulas}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { label: "Tempo Total", value: "12h 45m" },
                { label: "Nota Final", value: "9.6 / 10" },
                { label: "Posição", value: "Top 5%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="card shadow-soft p-5 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-[10px] text-[#999] uppercase tracking-[0.15em] font-semibold">
                    {stat.label}
                  </span>
                  <span className="text-[22px] font-bold text-[#0b8c22] title-serif mt-1.5">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Share Section */}
            <div className="card shadow-soft p-6 mt-6 flex items-center justify-between">
              <div>
                <h4 className="text-[14px] font-bold text-[#222]">
                  Compartilhar conquista
                </h4>
                <p className="text-[12px] text-[#999] mt-1">
                  Mostre sua evolução para a rede
                </p>
              </div>
              <div className="flex gap-2">
                {["LinkedIn", "E-mail", "Link"].map((channel) => (
                  <button
                    key={channel}
                    className="h-9 px-5 rounded-xl bg-[#f5f5f5] hover:bg-[#eaeaea] text-[11px] font-semibold text-[#555] transition-colors"
                  >
                    {channel}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}