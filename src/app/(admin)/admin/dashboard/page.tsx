import Link from 'next/link';

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface StatCard {
  title: string;
  value: string | number;
  subtitle: string;
  icon: string;
  color: string;
  bgColor: string;
  href: string;
}

interface RecentCourse {
  id: string;
  name: string;
  students: number;
  progress: number;
  status: 'ativo' | 'rascunho' | 'encerrado';
}

interface RecentUser {
  id: string;
  name: string;
  email: string;
  progress: number;
  lastAccess: string;
}

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const statCards: StatCard[] = [
  {
    title: 'Usuários Ativos',
    value: '1.248',
    subtitle: '+12% este mês',
    icon: '👥',
    color: 'text-[#007042]',
    bgColor: 'bg-green-50 border-green-200',
    href: '/admin/usuarios',
  },
  {
    title: 'Cursos Publicados',
    value: 34,
    subtitle: '3 novos esta semana',
    icon: '📚',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 border-blue-200',
    href: '/admin/cursos/novo',
  },
  {
    title: 'Certificados Emitidos',
    value: '892',
    subtitle: '+67 este mês',
    icon: '🎓',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 border-purple-200',
    href: '/admin/certificados',
  },
  {
    title: 'Conclusão Média',
    value: '74%',
    subtitle: '+5% vs mês anterior',
    icon: '📈',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 border-orange-200',
    href: '/admin/progresso',
  },
];

const recentCourses: RecentCourse[] = [
  { id: '1', name: 'Introdução à Cultura Heineken', students: 342, progress: 68, status: 'ativo' },
  { id: '2', name: 'Qualidade e Processo de Produção', students: 215, progress: 45, status: 'ativo' },
  { id: '3', name: 'Liderança e Gestão de Pessoas', students: 189, progress: 82, status: 'ativo' },
  { id: '4', name: 'Sustentabilidade Corporativa', students: 97, progress: 30, status: 'rascunho' },
  { id: '5', name: 'Segurança no Trabalho', students: 405, progress: 91, status: 'encerrado' },
];

const recentUsers: RecentUser[] = [
  { id: '1', name: 'Carlos Souza', email: 'carlos.souza@heineken.com', progress: 85, lastAccess: 'Hoje, 14h32' },
  { id: '2', name: 'Ana Lima', email: 'ana.lima@heineken.com', progress: 62, lastAccess: 'Hoje, 11h15' },
  { id: '3', name: 'Rafael Mendes', email: 'rafael.mendes@heineken.com', progress: 38, lastAccess: 'Ontem, 16h48' },
  { id: '4', name: 'Juliana Costa', email: 'juliana.costa@heineken.com', progress: 94, lastAccess: 'Ontem, 09h20' },
  { id: '5', name: 'Bruno Alves', email: 'bruno.alves@heineken.com', progress: 12, lastAccess: '3 dias atrás' },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: RecentCourse['status'] }) {
  const map = {
    ativo: 'bg-green-100 text-green-700',
    rascunho: 'bg-yellow-100 text-yellow-700',
    encerrado: 'bg-gray-100 text-gray-500',
  };
  const label = { ativo: 'Ativo', rascunho: 'Rascunho', encerrado: 'Encerrado' };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${map[status]}`}>
      {label[status]}
    </span>
  );
}

function ProgressBar({ value }: { value: number }) {
  const color = value >= 80 ? 'bg-[#007042]' : value >= 50 ? 'bg-blue-500' : 'bg-orange-400';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs text-gray-500 w-8 text-right">{value}%</span>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DashboardInstrutor() {
  return (
    <div className="p-8 space-y-8 max-w-screen-xl mx-auto">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard do Instrutor</h1>
          <p className="text-sm text-gray-500 mt-0.5">Visão geral da plataforma · Atualizado agora</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/usuarios/novo"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:border-[#007042] hover:text-[#007042] transition-colors shadow-sm"
          >
            <span>👤</span>
            Novo Usuário
          </Link>
          <Link
            href="/admin/cursos/novo"
            className="flex items-center gap-2 px-4 py-2 bg-[#007042] text-white rounded-lg text-sm font-medium hover:bg-[#005a35] transition-colors shadow-sm"
          >
            <span>＋</span>
            Novo Curso
          </Link>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {statCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className={`group flex flex-col gap-3 p-5 bg-white rounded-2xl border ${card.bgColor} shadow-sm hover:shadow-md transition-all`}
          >
            <div className="flex items-start justify-between">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${card.bgColor}`}>
                {card.icon}
              </div>
              <span className="text-xs text-gray-400 group-hover:text-[#007042] transition-colors">Ver →</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{card.title}</p>
              <p className={`text-3xl font-black mt-0.5 ${card.color}`}>{card.value}</p>
              <p className="text-xs text-gray-400 mt-1">{card.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Cursos Recentes */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-900 text-sm">Cursos em Destaque</h2>
            <Link href="/admin/cursos/novo" className="text-xs text-[#007042] font-semibold hover:underline">
              Novo curso →
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentCourses.map((course) => (
              <div key={course.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#007042]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#007042] text-base">📚</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{course.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{course.students} alunos</p>
                  <div className="mt-1.5">
                    <ProgressBar value={course.progress} />
                  </div>
                </div>
                <StatusBadge status={course.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Alunos Recentes */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-900 text-sm">Atividade Recente</h2>
            <Link href="/admin/usuarios" className="text-xs text-[#007042] font-semibold hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentUsers.map((user) => (
              <Link
                key={user.id}
                href={`/admin/usuarios/${user.id}`}
                className="flex items-center gap-3 px-6 py-3.5 hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#007042] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-xs">{user.name.charAt(0)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-800 truncate">{user.name}</p>
                  <p className="text-[10px] text-gray-400 truncate">{user.lastAccess}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-bold text-[#007042]">{user.progress}%</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-[#007042] to-[#005a35] rounded-2xl p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-widest text-green-200 mb-3">Ações Rápidas</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Gerenciar Usuários', icon: '👥', href: '/admin/usuarios' },
            { label: 'Ver Progresso', icon: '📊', href: '/admin/progresso' },
            { label: 'Certificados', icon: '🎓', href: '/admin/certificados' },
            { label: 'Histórico IA', icon: '🤖', href: '/admin/ia-historico' },
          ].map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="flex flex-col items-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-xl text-center transition-colors cursor-pointer"
            >
              <span className="text-2xl">{action.icon}</span>
              <span className="text-xs font-semibold text-green-100 leading-tight">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
