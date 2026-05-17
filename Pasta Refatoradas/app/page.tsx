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
  Sparkles,
  Share2,
  TrendingUp,
  BookMarked,
  MessageCircle,
} from "lucide-react";

export default function PerfilPage() {
  return (
    <main className="w-screen min-h-screen bg-[#f3f3f3] flex overflow-hidden">
      {/* ==================== SIDEBAR ==================== */}
      <aside className="w-[200px] min-w-[200px] bg-[#0f5b2d] min-h-screen flex flex-col justify-between shrink-0 shadow-xl">
        <div>
          <div className="flex items-center gap-3 px-5 py-6 border-b border-white/10">
            <div className="w-9 h-9 rounded-full bg-[#0a3d1e] flex items-center justify-center shrink-0">
              <User size={16} color="white" />
            </div>
            <div className="overflow-hidden">
              <h1 className="text-white text-[11px] font-bold leading-none truncate">
                Learning Journey
              </h1>
              <span className="text-[8px] text-[#a9c7ad] uppercase tracking-widest block">
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

        <div className="p-4">
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
            <Bell
              size={18}
              className="text-gray-500 cursor-pointer hover:text-gray-700"
            />
            <Settings
              size={18}
              className="text-gray-500 cursor-pointer hover:text-gray-700"
            />
            <div className="w-9 h-9 rounded-full border-[3px] border-[#ff6b32] bg-[#3d8f95] cursor-pointer" />
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* ========== GREEN HEADER ========== */}
          <div className="w-full bg-gradient-to-r from-[#007000] to-[#009010] px-8 py-7 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-[76px] h-[76px] rounded-full border-[3px] border-white/80 bg-[#2d4554] flex items-center justify-center">
                  <User size={32} color="white" />
                </div>
                <div className="absolute bottom-0.5 right-0.5 w-5 h-5 rounded-full bg-[#df3c00] border-2 border-white" />
              </div>
              <div>
                <h2 className="text-white text-[24px] font-bold leading-tight">
                  Thiago Silva
                </h2>
                <p className="text-[#d0e8d2] text-[14px] mt-0.5">
                  Brand Manager — Supply Chain Excellence
                </p>
              </div>
            </div>

            <div className="w-[320px] rounded-xl bg-[#006000]/50 backdrop-blur-sm px-5 py-3.5 border border-white/10">
              <div className="flex justify-between text-white text-[10px] uppercase tracking-wider">
                <span className="font-medium">
                  Nível 14 • Mestre Cervejeiro
                </span>
                <span className="font-bold text-[12px]">12,450 XP</span>
              </div>
              <div className="w-full h-[6px] bg-white/20 rounded-full mt-2.5 overflow-hidden">
                <div className="w-[70%] h-full bg-white rounded-full transition-all" />
              </div>
              <span className="text-[9px] text-white/60 mt-1.5 block text-right">
                Faltam 1,550 XP para o próximo nível
              </span>
            </div>
          </div>

          {/* ========== BODY GRID ========== */}
          <div className="px-6 py-6 flex gap-6">
            {/* -------- LEFT COLUMN (Fixed width) -------- */}
            <div className="w-[320px] min-w-[320px] flex flex-col gap-5 shrink-0">
              {/* Informações Pessoais */}
              <div className="card shadow-soft p-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-[#1d6a28] text-[22px] font-bold leading-7 title-serif">
                    Informações
                    <br />
                    Pessoais
                  </h2>
                  <Settings
                    size={16}
                    color="#bbb"
                    className="cursor-pointer hover:text-gray-500 mt-1"
                  />
                </div>

                <div className="mt-6 space-y-5">
                  <div>
                    <span className="text-[10px] uppercase text-[#9b9b9b] tracking-wider font-semibold">
                      E-mail Corporativo
                    </span>
                    <p className="text-[14px] mt-1 text-[#333]">
                      thiago.silva@heineken.com
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#9b9b9b] tracking-wider font-semibold">
                      Localização
                    </span>
                    <p className="text-[14px] mt-1 text-[#333]">
                      São Paulo, Brasil (HQ)
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#9b9b9b] tracking-wider font-semibold">
                      Data de Admissão
                    </span>
                    <p className="text-[14px] mt-1 text-[#333]">Março, 2021</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#9b9b9b] tracking-wider font-semibold">
                      Idiomas
                    </span>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {["Português", "English", "Dutch"].map((lang) => (
                        <span
                          key={lang}
                          className="px-3 py-1 rounded-full bg-[#edf7ea] text-[#1c722d] text-[11px] font-semibold"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Meus Badges */}
              <div className="card shadow-soft p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-[#1d6a28] text-[22px] font-bold title-serif">
                    Meus Badges
                  </h2>
                  <button className="text-[#cf2900] text-[12px] font-semibold hover:underline">
                    Ver todos
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-5">
                  {[
                    { name: "Expert em Logística", locked: false },
                    { name: "Sustentabilidade", locked: false },
                    { name: "Inovação 2025", locked: false },
                    { name: "Liderança", locked: false },
                    { name: "QA Orientado", locked: false },
                    { name: "Locked", locked: true },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`h-[78px] rounded-xl flex flex-col items-center justify-center text-center p-2 transition-colors ${
                        item.locked
                          ? "bg-[#f0f0f0]"
                          : "bg-[#f0f8ee] hover:bg-[#e4f2e0] cursor-pointer"
                      }`}
                    >
                      <Medal
                        size={22}
                        color={item.locked ? "#ccc" : "#0d8d24"}
                      />
                      <span
                        className={`text-[9px] mt-2 font-semibold leading-3 ${
                          item.locked ? "text-[#ccc]" : "text-[#333]"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* -------- RIGHT COLUMN (Expande toda a tela) -------- */}
            <div className="flex-1 min-w-0 flex flex-col gap-5">
              {/* Título */}
              <h2 className="text-[28px] font-bold text-[#222] title-serif">
                Minha Atividade
              </h2>

              {/* ========== TIMELINE ========== */}
              <div className="relative pl-6">
                <div className="absolute left-[10px] top-2 bottom-2 w-[2px] bg-[#d4ecd6]" />

                {/* Activity 1 */}
                <div className="relative pb-5">
                  <div className="absolute left-[-20px] top-1.5 w-[12px] h-[12px] rounded-full bg-[#0d8d24] border-[2px] border-white shadow-sm" />
                  <div className="card shadow-soft p-5">
                    <span className="text-[10px] text-[#aaa] font-bold tracking-wider uppercase">
                      Hoje, 10:30 AM
                    </span>
                    <h4 className="text-[14px] font-bold text-[#222] mt-1.5">
                      Concluiu o curso "O Legado Heineken: Cultura e Valores"
                    </h4>
                    <p className="text-[12px] text-[#888] mt-2 leading-5">
                      Parabéns! Você finalizou todos os módulos e obteve a nota
                      máxima na avaliação final. Este curso contribui para seu
                      pilar de Cultura Organizacional.
                    </p>
                    <div className="flex gap-4 mt-3">
                      <a
                        href="#"
                        className="text-[11px] text-[#0d8d24] font-semibold flex items-center gap-1.5 hover:underline"
                      >
                        <Share2 size={12} />
                        Compartilhar no Feed
                      </a>
                      <a
                        href="#"
                        className="text-[11px] text-[#0d8d24] font-semibold flex items-center gap-1.5 hover:underline"
                      >
                        <Award size={12} />
                        Certificado PDF
                      </a>
                    </div>
                  </div>
                </div>

                {/* Activity 2 */}
                <div className="relative pb-5">
                  <div className="absolute left-[-20px] top-1.5 w-[12px] h-[12px] rounded-full bg-[#ff6b32] border-[2px] border-white shadow-sm" />
                  <div className="card shadow-soft p-5">
                    <span className="text-[10px] text-[#aaa] font-bold tracking-wider uppercase">
                      Ontem, 16:45 PM
                    </span>
                    <h4 className="text-[14px] font-bold text-[#222] mt-1.5">
                      Novo Badge Conquistado: "Curador de Conhecimento"
                    </h4>
                    <p className="text-[12px] text-[#888] mt-2 leading-5">
                      Você compartilhou mais de 10 artigos úteis na Wiki interna
                      este mês. Continue contribuindo!
                    </p>
                  </div>
                </div>

                {/* Activity 3 */}
                <div className="relative pb-5">
                  <div className="absolute left-[-20px] top-1.5 w-[12px] h-[12px] rounded-full bg-[#0d8d24] border-[2px] border-white shadow-sm" />
                  <div className="card shadow-soft p-5">
                    <span className="text-[10px] text-[#aaa] font-bold tracking-wider uppercase">
                      12 de Outubro
                    </span>
                    <h4 className="text-[14px] font-bold text-[#222] mt-1.5">
                      Comentou em "Inovações em Embalagens Sustentáveis"
                    </h4>
                    <p className="text-[12px] text-[#888] mt-2 leading-5 italic">
                      "Excelente abordagem sobre o uso de bioplásticos. Acredito
                      que podemos aplicar esse piloto na região Sudeste em
                      breve."
                    </p>
                  </div>
                </div>

                {/* Activity 4 */}
                <div className="relative pb-5">
                  <div className="absolute left-[-20px] top-1.5 w-[12px] h-[12px] rounded-full bg-[#3b82f6] border-[2px] border-white shadow-sm" />
                  <div className="card shadow-soft p-5">
                    <span className="text-[10px] text-[#aaa] font-bold tracking-wider uppercase">
                      08 de Outubro
                    </span>
                    <h4 className="text-[14px] font-bold text-[#222] mt-1.5">
                      Iniciou o curso "Supply Chain Analytics Avançado"
                    </h4>
                    <p className="text-[12px] text-[#888] mt-2 leading-5">
                      Módulo 1 de 6 concluído. Progresso atual: 15%
                    </p>
                    <div className="w-full h-[5px] bg-gray-100 rounded-full mt-3 overflow-hidden">
                      <div className="w-[15%] h-full bg-[#3b82f6] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Activity 5 */}
                <div className="relative">
                  <div className="absolute left-[-20px] top-1.5 w-[12px] h-[12px] rounded-full bg-[#0d8d24] border-[2px] border-white shadow-sm" />
                  <div className="card shadow-soft p-5">
                    <span className="text-[10px] text-[#aaa] font-bold tracking-wider uppercase">
                      01 de Outubro
                    </span>
                    <h4 className="text-[14px] font-bold text-[#222] mt-1.5">
                      Publicou artigo na Wiki: "Otimização de Rotas Logísticas"
                    </h4>
                    <p className="text-[12px] text-[#888] mt-2 leading-5">
                      Seu artigo já recebeu 24 visualizações e 8 curtidas.
                    </p>
                    <div className="flex gap-4 mt-3">
                      <span className="text-[11px] text-[#aaa] flex items-center gap-1">
                        <BookMarked size={12} /> 24 views
                      </span>
                      <span className="text-[11px] text-[#aaa] flex items-center gap-1">
                        <MessageCircle size={12} /> 3 comentários
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========== STATS CARDS ========== */}
              <div className="grid grid-cols-3 gap-4 mt-2">
                {/* Cursos Concluídos */}
                <div className="rounded-[18px] bg-gradient-to-br from-[#008000] to-[#006800] p-6 flex flex-col justify-between text-white shadow-md h-[180px]">
                  <Award size={24} className="opacity-70" />
                  <div>
                    <h1 className="text-[48px] font-bold leading-none">08</h1>
                    <span className="uppercase tracking-[0.15em] text-[10px] mt-1 block text-white/70 font-semibold">
                      Cursos Concluídos
                    </span>
                  </div>
                </div>

                {/* Ranking Global */}
                <div className="card shadow-soft px-6 py-5 flex flex-col justify-between h-[180px]">
                  <div>
                    <span className="text-[10px] uppercase text-[#999] tracking-wider font-semibold">
                      Ranking Global
                    </span>
                    <h2 className="text-[#0d8d24] text-[32px] font-bold leading-tight mt-2">
                      #42nd Place
                    </h2>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#aaa]">
                      Top 8% global
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#edf7ea] flex items-center justify-center">
                      <TrendingUp size={18} color="#0d8d24" />
                    </div>
                  </div>
                </div>

                {/* Horas de Estudo */}
                <div className="rounded-[18px] bg-gradient-to-r from-[#008000] to-[#009010] px-6 py-5 flex flex-col justify-between text-white shadow-md h-[180px]">
                  <div>
                    <span className="text-[10px] uppercase opacity-60 tracking-wider font-semibold">
                      Horas de Estudo
                    </span>
                    <h2 className="text-[32px] font-bold leading-tight mt-2">
                      124h 30m
                    </h2>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-white/50">
                      +12h este mês
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                      <Clock3 size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}