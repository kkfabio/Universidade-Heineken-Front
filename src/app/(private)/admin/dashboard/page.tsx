'use client';

import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, BookOpen, GraduationCap, TrendingUp, BarChart2, MessageSquare, ArrowRight, FileText, Search } from 'lucide-react';

// --- Tipos --------------------------------------------------------------------

interface StatCard {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  iconBg: string;
  href: string;
}

interface RecentUser {
  id: string;
  name: string;
  email: string;
  progress: number;
  lastAccess: string;
}

// --- Mock Data -----------------------------------------------------------------

const statCards: StatCard[] = [
  {
    title: 'Usuários Ativos',
    value: '1.248',
    subtitle: '+12% este mês',
    icon: <Users size={20} className="text-[#007042]" />,
    color: 'text-gray-900',
    iconBg: 'bg-green-50',
    href: '/admin/usuarios',
  },
  {
    title: 'Cursos Publicados',
    value: 34,
    subtitle: '3 novos esta semana',
    icon: <BookOpen size={20} className="text-blue-600" />,
    color: 'text-gray-900',
    iconBg: 'bg-blue-50',
    href: '/admin/cursos',
  },
  {
    title: 'Certificados Emitidos',
    value: '892',
    subtitle: '+67 este mês',
    icon: <GraduationCap size={20} className="text-purple-600" />,
    color: 'text-gray-900',
    iconBg: 'bg-purple-50',
    href: '/admin/certificados',
  },
  {
    title: 'Conclusão Média',
    value: '74%',
    subtitle: '+5% vs mês anterior',
    icon: <TrendingUp size={20} className="text-orange-600" />,
    color: 'text-gray-900',
    iconBg: 'bg-orange-50',
    href: '/admin/progresso',
  },
];

const chartData = [
  { name: 'Seg', acessos: 120, conclusoes: 10 },
  { name: 'Ter', acessos: 210, conclusoes: 25 },
  { name: 'Qua', acessos: 180, conclusoes: 15 },
  { name: 'Qui', acessos: 290, conclusoes: 40 },
  { name: 'Sex', acessos: 250, conclusoes: 35 },
  { name: 'Sáb', acessos: 90, conclusoes: 5 },
  { name: 'Dom', acessos: 110, conclusoes: 8 },
];

const recentUsers: RecentUser[] = [
  { id: '1', name: 'Carlos Souza', email: 'carlos.souza@heineken.com', progress: 85, lastAccess: 'Hoje, 14h32' },
  { id: '2', name: 'Ana Lima', email: 'ana.lima@heineken.com', progress: 62, lastAccess: 'Hoje, 11h15' },
  { id: '3', name: 'Rafael Mendes', email: 'rafael.mendes@heineken.com', progress: 38, lastAccess: 'Ontem, 16h48' },
  { id: '4', name: 'Juliana Costa', email: 'juliana.costa@heineken.com', progress: 94, lastAccess: 'Ontem, 09h20' },
  { id: '5', name: 'Bruno Alves', email: 'bruno.alves@heineken.com', progress: 12, lastAccess: '3 dias atrás' },
];

// --- Page ----------------------------------------------------------------------

export default function DashboardInstrutor() {
  return (
    <div className="p-8 space-y-12 max-w-[1280px] mx-auto w-full">

      {/* Header - TopNavBar (Adjusted to Figma) */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#1A1C1C] font-serif">Painel do Instrutor</h1>
        
        <div className="flex items-center gap-6">
          {/* Search Input from Figma (Background: #EEEEEE) */}
          <div className="flex items-center bg-[#EEEEEE] rounded-full px-4 py-2 w-64">
            <Search size={18} className="text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Hero Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative flex flex-col p-6 bg-white rounded-xl shadow-[0_4px_24px_rgba(0,34,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,34,0,0.08)] transition-all overflow-hidden"
          >
            <div className="flex items-start justify-between mb-8">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg}`}>
                {card.icon}
              </div>
              <span className="text-xs font-semibold text-gray-400 group-hover:text-[#007042] transition-colors flex items-center gap-1">Ver detalhes <ArrowRight size={12} /></span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{card.title}</p>
              <p className={`text-4xl font-black ${card.color}`}>{card.value}</p>
              <p className="text-xs text-gray-400 mt-2 font-medium">{card.subtitle}</p>
            </div>
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#006600]/20 transition-all duration-300 group-hover:bg-[#007042]" />
          </Link>
        ))}
      </div>

      {/* Activity Chart & Asymmetric Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Line Chart Placeholder Area */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow-[0_4px_24px_rgba(0,34,0,0.04)] p-8 flex flex-col min-h-[488px]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-bold text-[#1A1C1C] text-lg">Atividade da Plataforma</h2>
            <select className="text-sm bg-gray-50 border-none rounded-lg px-4 py-2 outline-none text-gray-600 font-semibold cursor-pointer">
               <option>Últimos 7 dias</option>
               <option>Últimos 30 dias</option>
               <option>Este ano</option>
            </select>
          </div>
          <div className="flex-1 w-full h-[280px] min-h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 24px rgba(0,34,0,0.08)' }}
                  cursor={{ stroke: '#E5E7EB', strokeWidth: 2, strokeDasharray: '5 5' }}
                />
                <Line type="monotone" name="Acessos" dataKey="acessos" stroke="#007042" strokeWidth={3} dot={{ r: 4, fill: '#007042', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, fill: '#007042', stroke: '#fff', strokeWidth: 2 }} />
                <Line type="monotone" name="Conclusões" dataKey="conclusoes" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4, fill: '#3B82F6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, fill: '#3B82F6', stroke: '#fff', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Asymmetric Section Right Column (Bento Quick Access Grid) */}
        <div className="flex flex-col gap-6">
          
          <h3 className="font-bold text-[#1A1C1C] text-sm">Funções Administrativas</h3>
          
          {/* 2x2 Grid for Admin Functions */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            <Link href="/admin/usuarios" className="group flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white shadow-[0_4px_24px_rgba(0,34,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,34,0,0.08)] text-gray-600 hover:text-[#007042] transition-all">
              <Users size={24} className="text-[#007042] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Usuários</span>
            </Link>
            <Link href="/admin/progresso" className="group flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white shadow-[0_4px_24px_rgba(0,34,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,34,0,0.08)] text-gray-600 hover:text-[#007042] transition-all">
              <BarChart2 size={24} className="text-[#007042] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Relatórios</span>
            </Link>
            <Link href="/admin/certificados" className="group flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white shadow-[0_4px_24px_rgba(0,34,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,34,0,0.08)] text-gray-600 hover:text-[#007042] transition-all">
              <FileText size={24} className="text-[#007042] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Certificados</span>
            </Link>
            <Link href="/admin/ia-historico" className="group flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white shadow-[0_4px_24px_rgba(0,34,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,34,0,0.08)] text-gray-600 hover:text-[#007042] transition-all">
              <MessageSquare size={24} className="text-[#007042] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Auditoria IA</span>
            </Link>
          </div>

          {/* Featured Course Overlap UI */}
          <div className="relative rounded-xl overflow-hidden min-h-[148px] flex items-end p-6 group cursor-pointer bg-[#B3EEB1]">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl z-0 transition-transform duration-500 group-hover:scale-110" />
            
            <div className="relative z-10 w-full flex items-center justify-between">
              <div>
                <p className="text-[#005a35] text-[10px] font-black uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  Destaque
                </p>
                <h3 className="text-[#007042] font-black leading-tight max-w-[160px] text-lg">Cultura Cervejeira e Liderança</h3>
              </div>
              <Link href="/admin/cursos/1" className="w-10 h-10 rounded-full bg-[#007042] hover:bg-[#005a35] text-white flex items-center justify-center transition-all shadow-md group-hover:scale-105">
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Recent Activity List (Divider-less) */}
      <div className="bg-[#F4F3F3] rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-[#1A1C1C] text-lg">Atividade Recente</h2>
          <button className="text-sm font-semibold text-[#007042] hover:text-[#005a35] transition-colors flex items-center gap-1">
            Ver registro completo <ArrowRight size={14} />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {recentUsers.map((user, index) => (
            <div
              key={user.id}
              className={`group flex items-center gap-4 px-6 py-4 rounded-xl transition-all hover:shadow-[0_4px_24px_rgba(0,34,0,0.04)] cursor-pointer ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-[#007042]/10 flex items-center justify-center shrink-0">
                <span className="text-[#007042] font-bold text-sm">{user.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#007042] transition-colors truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate mt-0.5">Acessou o sistema em {user.lastAccess}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-gray-500">Progresso</span>
                  <span className="text-xs font-bold text-[#007042] bg-green-50 px-3 py-1 rounded-md">{user.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

