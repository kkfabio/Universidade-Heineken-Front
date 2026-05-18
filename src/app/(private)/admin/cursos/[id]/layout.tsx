'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { ReactNode } from 'react';
import {
  ChevronRight, BookOpen, Save, Eye,
  Clock, Users, TrendingUp,
} from 'lucide-react';
import type { CursoCompleto } from '@/types';

// ---------------------------------------------------------------------------
// Mock – em produção viria de API via params.id
// ---------------------------------------------------------------------------
const mockCursos: Record<string, CursoCompleto> = {
  '1': {
    id: '1',
    titulo: 'Liderança Inspiradora',
    descricao: 'Desenvolva habilidades essenciais de liderança para inspirar e guiar equipes de alta performance.',
    categoria: 'Liderança',
    nivel: 'Intermediário',
    cargaHoraria: 40,
    status: 'active',
    modulos: [],
    alunos: [],
  },
  '2': {
    id: '2',
    titulo: 'Excelência em Vendas',
    descricao: 'Domine técnicas avançadas de vendas e relacionamento com clientes.',
    categoria: 'Vendas e Comercial',
    nivel: 'Iniciante',
    cargaHoraria: 20,
    status: 'active',
    modulos: [],
    alunos: [],
  },
  '3': {
    id: '3',
    titulo: 'Cultura de Segurança na Fábrica',
    descricao: 'Construa uma cultura sólida de segurança operacional.',
    categoria: 'Operações e Logística',
    nivel: 'Avançado',
    cargaHoraria: 60,
    status: 'draft',
    modulos: [],
    alunos: [],
  },
};

const mockStats: Record<string, { totalAlunos: number; taxaConclusao: number; modulosCount: number }> = {
  '1': { totalAlunos: 128, taxaConclusao: 74, modulosCount: 3 },
  '2': { totalAlunos: 64, taxaConclusao: 52, modulosCount: 2 },
  '3': { totalAlunos: 0, taxaConclusao: 0, modulosCount: 0 },
};

// ---------------------------------------------------------------------------
// Tabs
// ---------------------------------------------------------------------------
const TABS = [
  { label: 'Informações Básicas', href: 'informacao' },
  { label: 'Conteúdo',            href: 'conteudo'   },
  { label: 'Alunos',              href: 'alunos'     },
];

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------
export default function CourseEditLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const params   = useParams();
  const courseId = (params?.id as string) ?? '1';

  const curso  = mockCursos[courseId] ?? mockCursos['1'];
  const stats  = mockStats[courseId]  ?? mockStats['1'];
  const active = TABS.find(t => pathname.endsWith(t.href))?.href ?? 'informacao';

  return (
    <div className="p-6 max-w-[1280px] mx-auto w-full space-y-5 pb-12 animate-in fade-in duration-500">

      {/* ── Breadcrumb ── */}
      <nav className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <Link href="/admin/cursos" className="hover:text-[#007042] transition-colors">
          Cursos
        </Link>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-[#1A1C1C] font-bold truncate max-w-[280px]">{curso.titulo}</span>
      </nav>

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#007042]/10 flex items-center justify-center shrink-0 shadow-sm">
            <BookOpen size={26} className="text-[#007042]" />
          </div>
          <div>
            <h1 className="text-3xl font-black font-serif text-[#1A1C1C] tracking-tight leading-tight">
              {curso.titulo}
            </h1>
            <div className="flex items-center gap-3 mt-1.5">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                curso.status === 'active'
                  ? 'bg-[#E5F5E9] text-heineken-green'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {curso.status === 'active' ? 'Ativo' : 'Rascunho'}
              </span>
              <span className="text-sm text-gray-500 font-medium">
                {curso.categoria} · {curso.nivel}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#BECAB6] text-[#3F4A3A] font-bold text-sm hover:bg-gray-50 transition-colors">
            <Eye size={17} /> Visualizar
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#007042] hover:bg-[#005a35] text-white font-bold text-sm shadow-[0_8px_24px_rgba(0,112,66,0.2)] hover:-translate-y-0.5 transition-all">
            <Save size={17} /> Salvar Alterações
          </button>
        </div>
      </div>

      {/* ── Tabs Card ── */}
      <div className="bg-white rounded-2xl border border-[#BECAB6]/40 shadow-sm overflow-hidden">
        {/* Tab Bar */}
        <div className="border-b border-[#BECAB6]/40 px-6 flex gap-1 overflow-x-auto">
          {TABS.map(tab => {
            const isActive = active === tab.href;
            return (
              <Link
                key={tab.href}
                href={`/admin/cursos/${courseId}/${tab.href}`}
                className={`relative px-5 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                  isActive ? 'text-[#007042]' : 'text-gray-500 hover:text-[#1A1C1C]'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007042] rounded-t-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="p-8">{children}</div>
      </div>

      {/* ── Metadata Footer (3 stat cards) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Carga Horária */}
        <div className="bg-white rounded-2xl border border-[#BECAB6]/40 shadow-sm p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-[#007042]/10 flex items-center justify-center shrink-0">
            <Clock size={22} className="text-[#007042]" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Carga Horária</p>
            <p className="text-2xl font-black text-[#1A1C1C] mt-0.5">{curso.cargaHoraria}h</p>
            <p className="text-xs text-gray-400 font-medium mt-0.5">{stats.modulosCount} módulos</p>
          </div>
        </div>

        {/* Alunos */}
        <div className="bg-white rounded-2xl border border-[#BECAB6]/40 shadow-sm p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <Users size={22} className="text-blue-600" />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Alunos Matriculados</p>
            <p className="text-2xl font-black text-[#1A1C1C] mt-0.5">{stats.totalAlunos}</p>
            <p className="text-xs text-gray-400 font-medium mt-0.5">neste curso</p>
          </div>
        </div>

        {/* Taxa de Conclusão */}
        <div className="bg-white rounded-2xl border border-[#BECAB6]/40 shadow-sm p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
            <TrendingUp size={22} className="text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Taxa de Conclusão</p>
            <p className="text-2xl font-black text-[#1A1C1C] mt-0.5">{stats.taxaConclusao}%</p>
            <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-purple-500 rounded-full transition-all"
                style={{ width: `${stats.taxaConclusao}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
