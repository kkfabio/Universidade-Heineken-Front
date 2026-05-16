'use client';

import { use } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Mail,
  Phone,
  Building2,
  CalendarDays,
  BookOpen,
  Award,
  TrendingUp,
  Clock,
  CheckCircle2,
  ChevronRight,
  User,
  Lock,
  Trash2,
} from 'lucide-react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

// --- Types --------------------------------------------------------------------

interface StudentCourse {
  id: string;
  title: string;
  category: string;
  progress: number;
  status: 'completed' | 'in_progress' | 'not_started';
  completedAt?: string;
  lastAccess: string;
  totalHours: number;
  completedHours: number;
}

interface StudentStat {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

interface StudentProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  role: string;
  avatar: string;
  joinedAt: string;
  lastAccess: string;
  totalCourses: number;
  completedCourses: number;
  certificates: number;
  overallProgress: number;
  courses: StudentCourse[];
}

// --- Mock Data ----------------------------------------------------------------

const mockStudent: StudentProfile = {
  id: '1',
  name: 'Carlos Eduardo Souza',
  email: 'carlos.souza@heineken.com',
  phone: '+55 (11) 98765-4321',
  department: 'Operações — Fábrica SP',
  role: 'Operador de Linha',
  avatar: 'CS',
  joinedAt: 'Janeiro de 2024',
  lastAccess: 'Hoje, 14h32',
  totalCourses: 8,
  completedCourses: 5,
  certificates: 3,
  overallProgress: 72,
  courses: [
    {
      id: 'c1',
      title: 'Cultura Cervejeira e Liderança',
      category: 'Cultura',
      progress: 100,
      status: 'completed',
      completedAt: '12 Mar 2024',
      lastAccess: '12 Mar 2024',
      totalHours: 8,
      completedHours: 8,
    },
    {
      id: 'c2',
      title: 'Segurança no Trabalho — Nível Avançado',
      category: 'Segurança',
      progress: 100,
      status: 'completed',
      completedAt: '28 Mar 2024',
      lastAccess: '28 Mar 2024',
      totalHours: 12,
      completedHours: 12,
    },
    {
      id: 'c3',
      title: 'Processo de Produção — Módulo 3',
      category: 'Técnico',
      progress: 68,
      status: 'in_progress',
      lastAccess: 'Hoje, 14h32',
      totalHours: 16,
      completedHours: 11,
    },
    {
      id: 'c4',
      title: 'Gestão de Qualidade ISO 9001',
      category: 'Qualidade',
      progress: 40,
      status: 'in_progress',
      lastAccess: 'Ontem, 09h15',
      totalHours: 20,
      completedHours: 8,
    },
    {
      id: 'c5',
      title: 'Sustentabilidade e Meio Ambiente',
      category: 'ESG',
      progress: 100,
      status: 'completed',
      completedAt: '05 Abr 2024',
      lastAccess: '05 Abr 2024',
      totalHours: 6,
      completedHours: 6,
    },
    {
      id: 'c6',
      title: 'Comunicação e Trabalho em Equipe',
      category: 'Soft Skills',
      progress: 0,
      status: 'not_started',
      lastAccess: '—',
      totalHours: 10,
      completedHours: 0,
    },
  ],
};

const progressChartData = [
  { name: 'Progresso', value: mockStudent.overallProgress, fill: '#007042' },
  { name: 'Restante', value: 100 - mockStudent.overallProgress, fill: '#E8F5ED' },
];

// --- Sub-components -----------------------------------------------------------

function StatBadge({ stat }: { stat: StudentStat }) {
  return (
    <div className="flex flex-col items-center gap-1.5 p-4 bg-white rounded-xl shadow-[0_2px_12px_rgba(0,34,0,0.05)]">
      <div className={`p-2 rounded-lg ${stat.color}`}>{stat.icon}</div>
      <p className="text-xl font-black text-[#1A1C1C]">{stat.value}</p>
      <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider text-center leading-tight">
        {stat.label}
      </p>
    </div>
  );
}

function CourseStatusBadge({ status }: { status: StudentCourse['status'] }) {
  const map = {
    completed: { label: 'Concluído', classes: 'bg-green-50 text-[#007042]' },
    in_progress: { label: 'Em andamento', classes: 'bg-amber-50 text-amber-700' },
    not_started: { label: 'Não iniciado', classes: 'bg-gray-100 text-gray-500' },
  };
  const { label, classes } = map[status];
  return (
    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${classes}`}>
      {label}
    </span>
  );
}

function CourseProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{
          width: `${progress}%`,
          background:
            progress === 100
              ? '#007042'
              : progress > 50
                ? '#15803d'
                : '#86efac',
        }}
      />
    </div>
  );
}

function CourseCard({ course }: { course: StudentCourse }) {
  return (
    <div className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#007042]/20 hover:shadow-[0_4px_24px_rgba(0,34,0,0.06)] transition-all duration-200">
      {/* Status icon */}
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
          course.status === 'completed'
            ? 'bg-green-50 text-[#007042]'
            : course.status === 'in_progress'
              ? 'bg-amber-50 text-amber-600'
              : 'bg-gray-100 text-gray-400'
        }`}
      >
        {course.status === 'completed' ? (
          <CheckCircle2 size={18} />
        ) : course.status === 'in_progress' ? (
          <Clock size={18} />
        ) : (
          <BookOpen size={18} />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            {course.category}
          </span>
          <CourseStatusBadge status={course.status} />
        </div>
        <p className="text-sm font-semibold text-[#1A1C1C] truncate group-hover:text-[#007042] transition-colors">
          {course.title}
        </p>
        <div className="flex items-center gap-3 mt-2">
          <CourseProgressBar progress={course.progress} />
          <span className="text-xs font-bold text-gray-500 shrink-0 w-8 text-right">
            {course.progress}%
          </span>
        </div>
        <p className="text-[10px] text-gray-400 mt-1.5">
          {course.completedHours}h / {course.totalHours}h •{' '}
          {course.status === 'completed'
            ? `Concluído em ${course.completedAt}`
            : `Último acesso: ${course.lastAccess}`}
        </p>
      </div>

      <ChevronRight
        size={16}
        className="text-gray-300 group-hover:text-[#007042] transition-colors shrink-0"
      />
    </div>
  );
}

// --- Page ---------------------------------------------------------------------

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PerfilAlunoAdminPage({ params }: PageProps) {
  const { id } = use(params);
  const student = { ...mockStudent, id };

  const stats: StudentStat[] = [
    {
      label: 'Cursos Matriculados',
      value: student.totalCourses,
      icon: <BookOpen size={16} className="text-[#007042]" />,
      color: 'bg-green-50',
    },
    {
      label: 'Cursos Concluídos',
      value: student.completedCourses,
      icon: <CheckCircle2 size={16} className="text-emerald-600" />,
      color: 'bg-emerald-50',
    },
    {
      label: 'Certificados',
      value: student.certificates,
      icon: <Award size={16} className="text-amber-600" />,
      color: 'bg-amber-50',
    },
    {
      label: 'Último Acesso',
      value: student.lastAccess,
      icon: <Clock size={16} className="text-blue-600" />,
      color: 'bg-blue-50',
    },
  ];

  return (
    <div className="p-8 max-w-[1280px] mx-auto w-full space-y-10">

      {/* Breadcrumb + Back */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link
          href="/admin/usuarios"
          className="flex items-center gap-1.5 text-[#007042] font-semibold hover:text-[#005a35] transition-colors"
        >
          <ArrowLeft size={15} />
          Usuários
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-gray-400">{student.name}</span>
      </div>

      {/* --- HERO SECTION - Asymmetric Editorial Layout ----------------------- */}
      <section className="grid grid-cols-[1fr_auto] gap-8 items-start">
        {/* Left — Info + Stats */}
        <div className="space-y-6">
          {/* Name & Role */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#007042] bg-green-50 px-3 py-1 rounded-full">
                Aluno
              </span>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                ID #{student.id}
              </span>
            </div>
            <h1 className="text-4xl font-black font-serif text-[#1A1C1C] leading-tight">
              {student.name}
            </h1>
            <p className="text-base text-gray-500 font-medium">{student.role}</p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5 text-sm text-gray-600">
              <Mail size={15} className="text-[#007042] shrink-0" />
              <span>{student.email}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-600">
              <Phone size={15} className="text-[#007042] shrink-0" />
              <span>{student.phone}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-600">
              <Building2 size={15} className="text-[#007042] shrink-0" />
              <span>{student.department}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-600">
              <CalendarDays size={15} className="text-[#007042] shrink-0" />
              <span>Membro desde {student.joinedAt}</span>
            </div>
          </div>

          {/* Stat Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {stats.map((stat) => (
              <StatBadge key={stat.label} stat={stat} />
            ))}
          </div>
        </div>

        {/* Right — Avatar + Progress Ring */}
        <div className="flex flex-col items-center gap-5 shrink-0 w-[220px]">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#007042] to-[#005a35] flex items-center justify-center shadow-[0_0_0_4px_white,0_0_0_6px_#007042/20]">
              <span className="text-white font-black text-4xl font-serif">
                {student.avatar}
              </span>
            </div>
            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-white shadow" />
          </div>

          {/* Radial Progress */}
          <div className="relative w-[140px] h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="65%"
                outerRadius="90%"
                barSize={10}
                data={progressChartData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar dataKey="value" cornerRadius={6} background={{ fill: '#E8F5ED' }} />
              </RadialBarChart>
            </ResponsiveContainer>
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <TrendingUp size={14} className="text-[#007042] mb-0.5" />
              <span className="text-2xl font-black text-[#1A1C1C]">{student.overallProgress}%</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Progresso</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID ----------------------------------------------------------- */}
      <section className="grid grid-cols-[1fr_2fr] gap-6 items-start">

        {/* LEFT COL — Dados Pessoais */}
        <div className="space-y-4">
          {/* Personal Data Card */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,34,0,0.04)] space-y-4">
            <h2 className="text-sm font-bold text-[#1A1C1C] uppercase tracking-wider">
              Dados Pessoais
            </h2>
            <div className="space-y-3">
              {[
                { label: 'Nome Completo', value: student.name },
                { label: 'E-mail Corporativo', value: student.email },
                { label: 'Telefone', value: student.phone },
                { label: 'Departamento', value: student.department },
                { label: 'Cargo', value: student.role },
                { label: 'Na plataforma desde', value: student.joinedAt },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5 py-2 border-b border-gray-50 last:border-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</p>
                  <p className="text-sm text-[#1A1C1C] font-medium break-all">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Actions Card */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,34,0,0.04)] space-y-3">
            <h2 className="text-sm font-bold text-[#1A1C1C] uppercase tracking-wider">
              Ações Administrativas
            </h2>
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold text-[#007042] bg-green-50 hover:bg-green-100 transition-colors text-left">
                <User size={16} />
                Editar Perfil
              </button>
              <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
                <Lock size={16} />
                Redefinir Senha
              </button>
              <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold text-[#FF2B00] bg-red-50 hover:bg-red-100 transition-colors text-left">
                <Trash2 size={16} />
                Remover Usuário
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COL — Cursos e Progresso */}
        <div className="space-y-4">
          {/* Summary Strip */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                label: 'Taxa de Conclusão',
                value: `${Math.round((student.completedCourses / student.totalCourses) * 100)}%`,
                sub: `${student.completedCourses} de ${student.totalCourses} cursos`,
                accent: 'text-[#007042]',
                bg: 'bg-[#F0FAF5]',
              },
              {
                label: 'Horas Cursadas',
                value: `${student.courses.reduce((acc, c) => acc + c.completedHours, 0)}h`,
                sub: `de ${student.courses.reduce((acc, c) => acc + c.totalHours, 0)}h totais`,
                accent: 'text-blue-600',
                bg: 'bg-blue-50',
              },
              {
                label: 'Certificados Emitidos',
                value: student.certificates,
                sub: 'trilhas completas',
                accent: 'text-amber-600',
                bg: 'bg-amber-50',
              },
            ].map(({ label, value, sub, accent, bg }) => (
              <div key={label} className={`${bg} rounded-2xl p-5`}>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                <p className={`text-3xl font-black ${accent}`}>{value}</p>
                <p className="text-xs text-gray-400 mt-1">{sub}</p>
              </div>
            ))}
          </div>

          {/* Courses List */}
          <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,34,0,0.04)] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
              <h2 className="text-sm font-bold text-[#1A1C1C] uppercase tracking-wider">
                Cursos Matriculados
              </h2>
              <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                {student.courses.length} cursos
              </span>
            </div>
            <div className="p-4 space-y-2">
              {student.courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
