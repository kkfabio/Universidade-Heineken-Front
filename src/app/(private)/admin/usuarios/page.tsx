'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, UserPlus, ChevronRight, Mail, Building2, SlidersHorizontal, ChevronDown, Award, CheckCircle2, Briefcase } from 'lucide-react';
import { ModalNovoUsuario } from '@/components/admin/ModalNovoUsuario';

// --- Types --------------------------------------------------------------------

interface UserListItem {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  progress: number;
  lastAccess: string;
  status: 'active' | 'inactive';
}

// --- Mock Data ----------------------------------------------------------------

const mockUsers: UserListItem[] = [
  {
    id: '1',
    name: 'Carlos Eduardo Souza',
    email: 'carlos.souza@heineken.com',
    department: 'Operações — Fábrica SP',
    role: 'Operador de Linha',
    progress: 72,
    lastAccess: 'Hoje, 14h32',
    status: 'active',
  },
  {
    id: '2',
    name: 'Ana Lima',
    email: 'ana.lima@heineken.com',
    department: 'RH — Corporativo',
    role: 'Analista de RH',
    progress: 62,
    lastAccess: 'Hoje, 11h15',
    status: 'active',
  },
  {
    id: '3',
    name: 'Rafael Mendes',
    email: 'rafael.mendes@heineken.com',
    department: 'Logística — Distribuição',
    role: 'Supervisor',
    progress: 38,
    lastAccess: 'Ontem, 16h48',
    status: 'active',
  },
  {
    id: '4',
    name: 'Juliana Costa',
    email: 'juliana.costa@heineken.com',
    department: 'Qualidade — Laboratório',
    role: 'Analista de Qualidade',
    progress: 94,
    lastAccess: 'Ontem, 09h20',
    status: 'active',
  },
  {
    id: '5',
    name: 'Bruno Alves',
    email: 'bruno.alves@heineken.com',
    department: 'TI — Infraestrutura',
    role: 'Técnico de TI',
    progress: 12,
    lastAccess: '3 dias atrás',
    status: 'inactive',
  },
  {
    id: '6',
    name: 'Fernanda Rocha',
    email: 'fernanda.rocha@heineken.com',
    department: 'Marketing — Digital',
    role: 'Coordenadora',
    progress: 85,
    lastAccess: 'Hoje, 08h45',
    status: 'active',
  },
];

// --- Page ---------------------------------------------------------------------

export default function UsuariosAdminPage() {
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = mockUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.department.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-8 max-w-[1280px] mx-auto w-full space-y-8 pb-12">
      {/* Page Header (Header Section) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black font-serif text-[#1A1C1C]">Usuários</h1>
          <p className="text-sm text-gray-500 mt-1">
            {mockUsers.length} alunos cadastrados na plataforma
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-heineken-green hover:bg-heineken-dark text-white text-sm font-semibold px-8 py-3 rounded-lg transition-colors shadow-[0_8px_20px_rgba(0,112,66,0.2)]"
        >
          <UserPlus size={18} />
          Adicionar Usuário
        </button>
      </div>

      {/* Filters Bar */}
      <div className="bg-[#F4F3F3] rounded-xl flex items-center p-6 gap-4">
        <div className="flex-1 bg-white rounded-lg flex items-center px-4 py-3 border border-transparent focus-within:border-heineken-green transition-colors">
          <Search size={18} className="text-[#6B7280] mr-3 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome ou email..."
            className="bg-transparent outline-none text-sm font-medium text-[#1A1C1C] placeholder-[#6B7280] w-full"
          />
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg text-sm font-medium text-[#1A1C1C] hover:bg-gray-50 transition-colors">
            <CheckCircle2 size={16} className="text-heineken-green" />
            Status: Todos
            <ChevronDown size={16} className="text-gray-400" />
          </button>
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg text-sm font-medium text-[#1A1C1C] hover:bg-gray-50 transition-colors">
            <Briefcase size={16} className="text-heineken-green" />
            Role: Todas
            <ChevronDown size={16} className="text-gray-400" />
          </button>
          <button className="flex items-center justify-center bg-[#E3E2E2] hover:bg-[#d6d5d5] w-12 h-[46px] rounded-lg transition-colors text-[#3F4A3A]">
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Management Table */}
      <div className="bg-white rounded-2xl border border-[#BECAB6]/20 shadow-[0_4px_32px_rgba(0,34,0,0.03)] overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-50 flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#1A1C1C] uppercase tracking-wider">
            Lista de Alunos
          </h2>
          <span className="text-xs text-gray-400 font-medium">
            {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="divide-y divide-gray-50">
          {filtered.map((user) => (
            <Link
              key={user.id}
              href={`/admin/usuarios/${user.id}`}
              className="group flex items-center gap-6 px-8 py-5 hover:bg-[#F8FCF9] transition-colors"
            >
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007042] to-[#005a35] flex items-center justify-center shrink-0 shadow-[0_0_0_2px_white,0_0_0_3px_rgba(0,112,66,0.15)]">
                <span className="text-white font-bold text-sm">
                  {user.name.charAt(0)}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 grid grid-cols-[2fr_2fr_1fr_auto] gap-6 items-center">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#1A1C1C] group-hover:text-[#007042] transition-colors truncate">
                    {user.name}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Mail size={12} className="text-gray-400 shrink-0" />
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <Building2 size={12} className="text-gray-400 shrink-0" />
                    <p className="text-xs text-[#1A1C1C] truncate">{user.department}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{user.role}</p>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Cursos</span>
                    <span className="text-[10px] font-bold text-[#007042]">{user.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#007042] transition-all"
                      style={{ width: `${user.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6 shrink-0 ml-4">
                  {/* Status */}
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${
                      user.status === 'active'
                        ? 'bg-[#E5F5E9] text-heineken-green'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {user.status === 'active' ? 'Ativo' : 'Inativo'}
                  </span>

                  <ChevronRight
                    size={18}
                    className="text-gray-300 group-hover:text-[#007042] transition-colors"
                  />
                </div>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="px-8 py-16 text-center">
              <p className="text-sm text-gray-400">Nenhum usuário encontrado para &ldquo;{search}&rdquo;</p>
            </div>
          )}
        </div>
        
        {/* Pagination placeholder (mock) */}
        {filtered.length > 0 && (
          <div className="bg-[#F4F3F3]/20 px-8 py-6 flex items-center justify-between border-t border-gray-50">
            <span className="text-sm text-gray-500">Mostrando 1 a {filtered.length} de {mockUsers.length}</span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-sm font-medium text-gray-400 cursor-not-allowed">Anterior</button>
              <button className="w-8 h-8 flex items-center justify-center bg-heineken-green text-white rounded-md text-sm font-medium">1</button>
              <button className="px-3 py-1 text-sm font-medium text-heineken-green hover:bg-green-50 rounded-md transition-colors">Próxima</button>
            </div>
          </div>
        )}
      </div>

      {/* Dashboard Metric Section (Asymmetric) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_288px] gap-6 pt-4">
        {/* Left Card: Growth */}
        <div className="bg-heineken-dark rounded-2xl p-10 relative overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.1),0_20px_25px_rgba(0,0,0,0.1)] flex flex-col justify-center min-h-[268px]">
          <div className="absolute top-1/2 right-12 -translate-y-1/2 w-64 h-64 bg-heineken-green rounded-full blur-[64px] opacity-20 pointer-events-none" />
          <div className="absolute right-0 bottom-0 pointer-events-none select-none">
            <span className="font-serif font-black text-white/5 text-[96px] leading-none block translate-y-6">GROWTH</span>
          </div>
          
          <h3 className="text-white text-2xl font-bold font-serif relative z-10 mb-8">
            Crescimento da Rede
          </h3>
          
          <div className="flex items-end gap-12 relative z-10">
            <div>
              <p className="text-white/80 text-sm mb-1 font-medium">Novos acessos semanais</p>
              <div className="flex items-baseline gap-3">
                <span className="text-white text-5xl font-bold font-serif">+24%</span>
                <span className="text-green-300 text-sm font-medium tracking-wide">EM ALTA</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <p className="text-white/80 text-sm mb-1 font-medium">Cadastros totais</p>
              <div className="flex items-baseline gap-3">
                <span className="text-white text-3xl font-bold font-serif">{mockUsers.length * 142}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card: Top Engajadores */}
        <div className="bg-[#E3E2E2] rounded-2xl border border-[#BECAB6]/20 p-8 flex flex-col justify-between shadow-sm min-h-[268px]">
          <div>
            <Award className="text-heineken-green w-7 h-7 mb-4" />
            <h4 className="text-[#1A1C1C] font-bold font-serif text-xl mb-2">Top Engajadores</h4>
            <p className="text-[#3F4A3A] text-sm leading-relaxed">
              Usuários com maior frequência de acesso nos últimos 7 dias.
            </p>
          </div>
          
          <div className="flex items-center mt-6 pt-2">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`w-12 h-12 rounded-full border-2 border-[#E3E2E2] bg-gradient-to-br flex items-center justify-center shadow-sm relative z-[${10-i}] ${
                    i === 1 ? 'from-green-500 to-green-700' :
                    i === 2 ? 'from-blue-500 to-blue-700' :
                    i === 3 ? 'from-purple-500 to-purple-700' :
                    'from-orange-500 to-orange-700'
                  }`}
                >
                  <span className="text-white text-xs font-bold">U{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ModalNovoUsuario 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

