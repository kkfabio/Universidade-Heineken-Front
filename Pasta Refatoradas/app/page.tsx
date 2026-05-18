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
            <Bell size={20} className="cursor-pointer hover:text-gray-800 transition-colors" />
            <Settings size={20} className="cursor-pointer hover:text-gray-800 transition-colors" />
            <div className="w-9 h-9 rounded-full border-2 border-[#ff6b32] bg-[#3d8f95] overflow-hidden shadow-sm">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Thiago" alt="avatar" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* ========== GREEN HEADER ========== */}
          <div className="w-full bg-gradient-to-r from-[#007000] to-[#009010] px-10 py-8 flex items-center justify-between relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-white/5" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full border border-white/5" />
            <div className="flex items-center gap-5 relative z-10">
              <div className="relative">
                <div className="w-[80px] h-[80px] rounded-full border-[3px] border-white/80 bg-[#2d4554] flex items-center justify-center shadow-lg">
                  <User size={34} color="white" />
                </div>
                <div className="absolute bottom-0.5 right-0.5 w-5 h-5 rounded-full bg-[#df3c00] border-2 border-white" />
              </div>
              <div>
                <h2 className="text-white text-[26px] font-bold leading-tight">Thiago Silva</h2>
                <p className="text-white/60 text-[14px] mt-0.5">Brand Manager — Supply Chain Excellence</p>
              </div>
            </div>
            <div className="w-[320px] rounded-xl bg-white/10 backdrop-blur-sm px-5 py-3.5 border border-white/10 relative z-10">
              <div className="flex justify-between text-white text-[10px] uppercase tracking-wider">
                <span className="font-medium">Nível 14 • Mestre Cervejeiro</span>
                <span className="font-bold text-[12px]">12,450 XP</span>
              </div>
              <div className="w-full h-[6px] bg-white/20 rounded-full mt-2.5 overflow-hidden">
                <div className="w-[70%] h-full bg-white rounded-full transition-all" />
              </div>
              <span className="text-[9px] text-white/40 mt-1.5 block text-right">Faltam 1,550 XP para o próximo nível</span>
            </div>
          </div>

          {/* ========== PAGE BODY ========== */}
          <div className="px-10 py-8">
            <div className="flex gap-6">
              {/* -------- LEFT COLUMN -------- */}
              <div className="w-[320px] min-w-[320px] flex flex-col gap-5 shrink-0">
                {/* Informações Pessoais */}
                <div className="card shadow-soft p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.15em]">Dados Pessoais</span>
                      <h2 className="text-[22px] font-bold text-slate-800 title-serif mt-1">Informações</h2>
                    </div>
                    <Settings size={16} color="#bbb" className="cursor-pointer hover:text-gray-500 mt-1" />
                  </div>
                  <div className="space-y-5">
                    <div>
                      <span className="text-[10px] uppercase text-[#9b9b9b] tracking-wider font-semibold">E-mail Corporativo</span>
                      <p className="text-[14px] mt-1 text-[#333]">thiago.silva@heineken.com</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#9b9b9b] tracking-wider font-semibold">Localização</span>
                      <p className="text-[14px] mt-1 text-[#333]">São Paulo, Brasil (HQ)</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#9b9b9b] tracking-wider font-semibold">Data de Admissão</span>
                      <p className="text-[14px] mt-1 text-[#333]">Março, 2021</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#9b9b9b] tracking-wider font-semibold">Idiomas</span>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {["Português", "English", "Dutch"].map((lang) => (
                          <span key={lang} className="px-3 py-1 rounded-full bg-[#edf7ea] text-[#1c722d] text-[11px] font-semibold">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Meus Badges */}
                <div className="card shadow-soft p-6">
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <span className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.15em]">Conquistas</span>
                      <h2 className="text-[22px] font-bold text-slate-800 title-serif mt-1">Meus Badges</h2>
                    </div>
                    <button className="text-[#cf2900] text-[12px] font-semibold hover:underline">Ver todos</button>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
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
                        className={`h-[78px] rounded-xl flex flex-col items-center justify-center text-center p-2 transition-all cursor-pointer ${
                          item.locked ? "bg-[#f0f0f0]" : "bg-[#f0f8ee] hover:bg-[#e4f2e0] hover:shadow-sm"
                        }`}
                      >
                        <Medal size={22} color={item.locked ? "#ccc" : "#0d8d24"} />
                        <span className={`text-[9px] mt-2 font-semibold leading-3 ${item.locked ? "text-[#ccc]" : "text-[#333]"}`}>
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* -------- RIGHT COLUMN -------- */}
              <div className="flex-1 min-w-0 flex flex-col gap-6">
                {/* Section Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.15em]">Histórico</span>
                    <h2 className="text-[22px] font-bold text-slate-800 title-serif mt-1">Minha Atividade</h2>
                  </div>
                  <button className="text-[13px] text-slate-800 font-semibold hover:underline flex items-center gap-1">
                    Ver tudo →
                  </button>
                </div>

                {/* ========== TIMELINE ========== */}
                <div className="space-y-4">
                  {/* Activity 1 */}
                  <div className="card p-5 border-l-4 border-[#0d8d24] shadow-[0_2px_12px_rgba(13,141,36,0.12)] hover:shadow-[0_4px_20px_rgba(13,141,36,0.2)] transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#edf7ea] flex items-center justify-center shrink-0">
                            <Award size={16} color="#0d8d24" />
                          </div>
                          <span className="text-[10px] text-[#aaa] font-bold tracking-wider uppercase">Hoje, 10:30 AM</span>
                        </div>
                        <h4 className="text-[15px] font-bold text-[#222] ml-11">
                          Concluiu o curso "O Legado Heineken: Cultura e Valores"
                        </h4>
                        <p className="text-[12px] text-[#888] mt-1.5 leading-5 ml-11">
                          Parabéns! Você finalizou todos os módulos e obteve a nota máxima na avaliação final. Este curso contribui para seu pilar de Cultura Organizacional.
                        </p>
                        <div className="flex gap-4 mt-3 ml-11">
                          <a href="#" className="text-[11px] text-[#0d8d24] font-semibold flex items-center gap-1.5 hover:underline">
                            <Share2 size={12} /> Compartilhar no Feed
                          </a>
                          <a href="#" className="text-[11px] text-[#0d8d24] font-semibold flex items-center gap-1.5 hover:underline">
                            <Award size={12} /> Certificado PDF
                          </a>
                        </div>
                      </div>
                      <span className="text-[10px] text-white bg-[#0d8d24] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shrink-0">
                        Completo
                      </span>
                    </div>
                  </div>

                  {/* Activity 2 */}
                  <div className="card p-5 border-l-4 border-[#ff6b32] shadow-[0_2px_12px_rgba(13,141,36,0.12)] hover:shadow-[0_4px_20px_rgba(13,141,36,0.2)] transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#fff3ee] flex items-center justify-center shrink-0">
                            <Medal size={16} color="#ff6b32" />
                          </div>
                          <span className="text-[10px] text-[#aaa] font-bold tracking-wider uppercase">Ontem, 16:45 PM</span>
                        </div>
                        <h4 className="text-[15px] font-bold text-[#222] ml-11">
                          Novo Badge Conquistado: "Curador de Conhecimento"
                        </h4>
                        <p className="text-[12px] text-[#888] mt-1.5 leading-5 ml-11">
                          Você compartilhou mais de 10 artigos úteis na Wiki interna este mês. Continue contribuindo!
                        </p>
                      </div>
                      <span className="text-[10px] text-white bg-[#ff6b32] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shrink-0">
                        Badge
                      </span>
                    </div>
                  </div>

                  {/* Activity 3 */}
                  <div className="card p-5 border-l-4 border-[#0d8d24] shadow-[0_2px_12px_rgba(13,141,36,0.12)] hover:shadow-[0_4px_20px_rgba(13,141,36,0.2)] transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#edf7ea] flex items-center justify-center shrink-0">
                            <MessageCircle size={16} color="#0d8d24" />
                          </div>
                          <span className="text-[10px] text-[#aaa] font-bold tracking-wider uppercase">12 de Outubro</span>
                        </div>
                        <h4 className="text-[15px] font-bold text-[#222] ml-11">
                          Comentou em "Inovações em Embalagens Sustentáveis"
                        </h4>
                        <p className="text-[12px] text-[#888] mt-1.5 leading-5 italic ml-11">
                          "Excelente abordagem sobre o uso de bioplásticos. Acredito que podemos aplicar esse piloto na região Sudeste em breve."
                        </p>
                      </div>
                      <span className="text-[10px] text-[#0d8d24] bg-[#edf7ea] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shrink-0">
                        Comentário
                      </span>
                    </div>
                  </div>

                  {/* Activity 4 */}
                  <div className="card p-5 border-l-4 border-[#3b82f6] shadow-[0_2px_12px_rgba(13,141,36,0.12)] hover:shadow-[0_4px_20px_rgba(13,141,36,0.2)] transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0">
                            <BookOpen size={16} color="#3b82f6" />
                          </div>
                          <span className="text-[10px] text-[#aaa] font-bold tracking-wider uppercase">08 de Outubro</span>
                        </div>
                        <h4 className="text-[15px] font-bold text-[#222] ml-11">
                          Iniciou o curso "Supply Chain Analytics Avançado"
                        </h4>
                        <p className="text-[12px] text-[#888] mt-1.5 leading-5 ml-11">
                          Módulo 1 de 6 concluído. Progresso atual: 15%
                        </p>
                        <div className="ml-11 mt-3">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] text-[#3b82f6] font-bold">15% concluído</span>
                            <span className="text-[10px] text-[#aaa]">1/6 módulos</span>
                          </div>
                          <div className="w-full h-[6px] bg-[#eff6ff] rounded-full overflow-hidden">
                            <div className="w-[15%] h-full bg-[#3b82f6] rounded-full transition-all" />
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#3b82f6] bg-[#eff6ff] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shrink-0">
                        Em andamento
                      </span>
                    </div>
                  </div>

                  {/* Activity 5 */}
                  <div className="card p-5 border-l-4 border-[#0d8d24] shadow-[0_2px_12px_rgba(13,141,36,0.12)] hover:shadow-[0_4px_20px_rgba(13,141,36,0.2)] transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-[#edf7ea] flex items-center justify-center shrink-0">
                            <BookMarked size={16} color="#0d8d24" />
                          </div>
                          <span className="text-[10px] text-[#aaa] font-bold tracking-wider uppercase">01 de Outubro</span>
                        </div>
                        <h4 className="text-[15px] font-bold text-[#222] ml-11">
                          Publicou artigo na Wiki: "Otimização de Rotas Logísticas"
                        </h4>
                        <p className="text-[12px] text-[#888] mt-1.5 leading-5 ml-11">
                          Seu artigo já recebeu 24 visualizações e 8 curtidas.
                        </p>
                        <div className="flex gap-5 mt-3 ml-11">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f5f5f5]">
                            <BookMarked size={13} color="#888" />
                            <span className="text-[11px] text-[#666] font-semibold">24 views</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f5f5f5]">
                            <MessageCircle size={13} color="#888" />
                            <span className="text-[11px] text-[#666] font-semibold">3 comentários</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] text-[#0d8d24] bg-[#edf7ea] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shrink-0">
                        Wiki
                      </span>
                    </div>
                  </div>
                </div>

                {/* ========== STATS ========== */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.15em]">Desempenho</span>
                      <h2 className="text-[22px] font-bold text-slate-800 title-serif mt-1">Estatísticas</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {/* Cursos Concluídos */}
                    <div className="h-[180px] rounded-[20px] relative overflow-hidden group cursor-pointer shadow-[0_2px_12px_rgba(13,141,36,0.12)] hover:shadow-[0_4px_20px_rgba(13,141,36,0.25)] transition-shadow">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400"
                        alt="Courses"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d1e]/95 via-[#115d2d]/80 to-[#115d2d]/50" />
                      <div className="relative z-10 h-full p-6 flex flex-col justify-between text-white">
                        <Award size={24} className="opacity-60" />
                        <div>
                          <h1 className="text-[48px] font-bold leading-none">08</h1>
                          <span className="uppercase tracking-[0.15em] text-[10px] mt-1 block text-white/60 font-semibold">
                            Cursos Concluídos
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Ranking Global */}
                    <div className="card px-6 py-5 flex flex-col justify-between h-[180px] shadow-[0_2px_12px_rgba(13,141,36,0.12)] hover:shadow-[0_4px_20px_rgba(13,141,36,0.2)] transition-shadow">
                      <div>
                        <span className="text-[10px] uppercase text-[#999] tracking-wider font-semibold">Ranking Global</span>
                        <h2 className="text-[#0d8d24] text-[32px] font-bold leading-tight mt-2 title-serif">#42nd Place</h2>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#aaa]">Top 8% global</span>
                        <div className="w-9 h-9 rounded-full bg-[#edf7ea] flex items-center justify-center">
                          <TrendingUp size={18} color="#0d8d24" />
                        </div>
                      </div>
                    </div>

                    {/* Horas de Estudo */}
                    <div className="h-[180px] rounded-[20px] relative overflow-hidden group cursor-pointer shadow-[0_2px_12px_rgba(13,141,36,0.12)] hover:shadow-[0_4px_20px_rgba(13,141,36,0.25)] transition-shadow">
                      <img
                        src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400"
                        alt="Study"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d1e]/95 via-[#115d2d]/80 to-[#115d2d]/50" />
                      <div className="relative z-10 h-full px-6 py-5 flex flex-col justify-between text-white">
                        <div>
                          <span className="text-[10px] uppercase opacity-50 tracking-wider font-semibold">Horas de Estudo</span>
                          <h2 className="text-[32px] font-bold leading-tight mt-2">124h 30m</h2>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-white/40">+12h este mês</span>
                          <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                            <Clock3 size={18} />
                          </div>
                        </div>
                      </div>
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