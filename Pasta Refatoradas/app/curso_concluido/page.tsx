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
      <aside className="w-[180px] min-w-[180px] bg-[#0f5b2d] min-h-screen flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-4 border-b border-white/10">
            <div className="w-9 h-9 rounded-full bg-[#0a3d1e] flex items-center justify-center">
              <User size={16} color="white" />
            </div>
            <div>
              <h1 className="text-white text-[11px] font-bold leading-none">
                Learning Journey
              </h1>
              <span className="text-[8px] text-[#a9c7ad] uppercase tracking-widest">
                Global Graduate
              </span>
            </div>
          </div>

          {/* Menu */}
          <div className="mt-6 flex flex-col">
            <div className="sidebar-item">
              <Home size={14} />
              FEED
            </div>
            <div className="sidebar-item sidebar-active">
              <BookOpen size={14} />
              COURSES
            </div>
            <div className="sidebar-item">
              <Globe size={14} />
              WIKI
            </div>
            <div className="sidebar-item">
              <Award size={14} />
              CERTIFICATES
            </div>
            <div className="sidebar-item">
              <User size={14} />
              PROFILE
            </div>
          </div>
        </div>

        {/* Ask AI Button */}
        <div className="p-3">
          <button className="w-full h-10 rounded-xl bg-[#08b000] hover:bg-[#07a000] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors">
            <Sparkles size={14} />
            Ask AI
          </button>
        </div>
      </aside>

      {/* ==================== CONTENT ==================== */}
      <section className="flex-1 min-w-0 flex flex-col">
        {/* Top Bar */}
        <header className="h-[52px] bg-white border-b border-[#ececec] flex items-center justify-between px-6 shrink-0">
          <h1 className="text-[#165a2f] italic font-bold text-[28px] title-serif">
            UHNK
          </h1>
          <div className="flex items-center gap-5">
            <Bell size={18} className="text-gray-500 cursor-pointer hover:text-gray-700" />
            <Settings size={18} className="text-gray-500 cursor-pointer hover:text-gray-700" />
            <div className="w-9 h-9 rounded-full border-[3px] border-[#ff6b32] bg-[#3d8f95] cursor-pointer" />
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {/* ========== HERO BANNER ========== */}
          <div className="w-full rounded-[18px] bg-gradient-to-br from-[#115d2d] to-[#0e4d25] px-8 py-8 flex items-center justify-between gap-8 overflow-hidden">
            {/* Left Text */}
            <div className="max-w-[480px] flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1f7a3e]/60 text-white text-[11px] font-bold uppercase tracking-wide">
                ⭐ Parabéns pelo sucesso
              </div>

              <h1 className="title-serif text-white text-[36px] font-bold leading-[42px] mt-4">
                Você é agora um Especialista Global!
              </h1>

              <p className="text-[#c8deca] text-[14px] mt-3 leading-6">
                Completou com êxito o curso de Maestria em Logística
                Sustentável. Continue explorando novos desafios!
              </p>

              <button className="mt-5 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-colors">
                Ver meu progresso
              </button>
            </div>

            {/* Right Certificate Preview */}
            <div className="w-[180px] h-[210px] rounded-[16px] bg-[#2f7449]/60 p-3 relative shrink-0 hidden lg:block">
              <div className="w-full h-full rounded-xl bg-[#f5f5f5] flex flex-col items-center justify-center gap-2">
                <Award size={28} className="text-[#0b8c22]" />
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                  Certificado
                </span>
              </div>
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#cb3200] flex items-center justify-center">
                <CheckCircle2 size={14} color="white" />
              </div>
            </div>
          </div>

          {/* ========== CONTENT GRID ========== */}
          <div className="mt-7 flex gap-6">
            {/* Left — Módulos */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-[24px] title-serif font-bold text-[#222]">
                  Conteúdo Concluído
                </h2>
                <span className="bg-[#0a8c21] text-white text-[11px] px-4 py-1.5 rounded-full font-bold tracking-wide">
                  100% COMPLETADO
                </span>
              </div>

              {/* Module Cards */}
              <div className="space-y-3">
                {[
                  { title: "Introdução à Cadeia de Suprimentos Circular", aulas: "12 Aulas" },
                  { title: "Redução de Carbono em Transportes", aulas: "08 Aulas" },
                  { title: "Ética e Compliance Ambiental", aulas: "15 Aulas" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="card shadow-soft h-[80px] px-5 flex items-center justify-between hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#daf0dc] flex items-center justify-center shrink-0">
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
                    <span className="text-[#aaa] text-sm shrink-0 ml-4">
                      {item.aulas}
                    </span>
                  </div>
                ))}
              </div>

              {/* Extra Stats Row */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Tempo total", value: "12h 45m" },
                  { label: "Nota final", value: "9.6 / 10" },
                  { label: "Posição", value: "Top 5%" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="card shadow-soft p-4 flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-[10px] text-[#999] uppercase tracking-wider font-semibold">
                      {stat.label}
                    </span>
                    <span className="text-[20px] font-bold text-[#0b8c22] title-serif mt-1">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Certificado */}
            <div className="w-[280px] shrink-0">
              <div className="card shadow-soft p-5">
                {/* Certificate Preview */}
                <div className="w-full h-[200px] border border-[#e8e8e8] rounded-xl bg-[#fafafa] flex flex-col items-center justify-center gap-3">
                  <span className="text-[#13861d] text-[10px] uppercase tracking-[0.15em] font-semibold">
                    Certificado de conclusão
                  </span>
                  <div className="w-12 h-[1px] bg-[#13861d]/20" />
                  <h2 className="text-[22px] font-bold title-serif text-[#222]">
                    João Silva Pereira
                  </h2>
                  <span className="text-[10px] text-[#999]">
                    Maestria em Logística Sustentável
                  </span>
                </div>

                {/* Actions */}
                <button className="w-full h-[46px] rounded-xl bg-[#0b8c22] hover:bg-[#0a7d1e] text-white font-semibold mt-4 flex items-center justify-center gap-2 text-[14px] transition-colors">
                  <FileText size={16} />
                  Acessar meu Certificado
                </button>

                <button className="w-full h-[46px] rounded-xl bg-[#f0f0f0] hover:bg-[#e5e5e5] text-[#1d6a28] font-semibold mt-2.5 text-[14px] transition-colors">
                  Explorar mais cursos
                </button>
              </div>

              {/* Share Card */}
              <div className="card shadow-soft p-5 mt-4">
                <h4 className="text-[13px] font-bold text-[#222] mb-3">
                  Compartilhar conquista
                </h4>
                <div className="flex gap-2">
                  {["LinkedIn", "E-mail", "Link"].map((channel) => (
                    <button
                      key={channel}
                      className="flex-1 h-9 rounded-lg bg-[#f0f0f0] hover:bg-[#e5e5e5] text-[11px] font-semibold text-[#555] transition-colors"
                    >
                      {channel}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}