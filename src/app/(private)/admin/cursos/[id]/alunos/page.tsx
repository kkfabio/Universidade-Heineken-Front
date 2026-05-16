'use client';

import * as React from 'react';
import {
  Search, UserPlus, Trash2, CheckCircle2,
  Clock, TrendingUp, XCircle,
} from 'lucide-react';
import { ModalAdicionarAluno } from '@/components/admin/ModalAdicionarAluno';
import type { AlunosCurso } from '@/types';

// ── Mock ─────────────────────────────────────────────────────────────────────
const INITIAL_ALUNOS: AlunosCurso[] = [
  { id: 'u1', nome: 'Ana Beatriz Rocha',    email: 'ana.rocha@heineken.com',    funcao: 'Analista de Vendas',       progresso: 100, matriculadoEm: '2025-01-10', status: 'concluido' },
  { id: 'u2', nome: 'Carlos Mendez',         email: 'c.mendez@heineken.com',     funcao: 'Supervisor de Logística',  progresso: 74,  matriculadoEm: '2025-02-03', status: 'ativo'     },
  { id: 'u3', nome: 'Fernanda Lima',          email: 'f.lima@heineken.com',       funcao: 'Coordenadora de RH',       progresso: 52,  matriculadoEm: '2025-03-15', status: 'ativo'     },
  { id: 'u4', nome: 'José Andrade',           email: 'j.andrade@heineken.com',    funcao: 'Operador de Linha',        progresso: 8,   matriculadoEm: '2025-04-01', status: 'inativo'   },
  { id: 'u5', nome: 'Mariana Costa',          email: 'm.costa@heineken.com',      funcao: 'Gerente Comercial',        progresso: 91,  matriculadoEm: '2025-01-22', status: 'concluido' },
  { id: 'u6', nome: 'Ricardo Farias',         email: 'r.farias@heineken.com',     funcao: 'Analista de Dados',        progresso: 33,  matriculadoEm: '2025-05-08', status: 'ativo'     },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: AlunosCurso['status'] }) {
  const map = {
    concluido: { label: 'Concluído', cls: 'bg-[#E5F5E9] text-[#008200]' },
    ativo:     { label: 'Em Andamento', cls: 'bg-blue-50 text-blue-700' },
    inativo:   { label: 'Inativo',   cls: 'bg-gray-100 text-gray-500'   },
  } as const;
  const { label, cls } = map[status];
  return (
    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${cls}`}>
      {label}
    </span>
  );
}

function ProgressBar({ value }: { value: number }) {
  const color =
    value === 100 ? 'bg-[#007042]' :
    value >= 60   ? 'bg-blue-500'  :
    value >= 30   ? 'bg-yellow-400' : 'bg-gray-300';
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs font-bold text-gray-500 w-8 text-right">{value}%</span>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function AlunosPage() {
  const [alunos, setAlunos] = React.useState<AlunosCurso[]>(INITIAL_ALUNOS);
  const [search, setSearch] = React.useState('');
  const [modal,  setModal]  = React.useState(false);

  const filtered = alunos.filter(a =>
    a.nome.toLowerCase().includes(search.toLowerCase()) ||
    a.email.toLowerCase().includes(search.toLowerCase()) ||
    a.funcao.toLowerCase().includes(search.toLowerCase())
  );

  function removerAluno(id: string) {
    setAlunos(prev => prev.filter(a => a.id !== id));
  }

  function adicionarAluno(dados: { nome: string; email: string; funcao: string }) {
    const novo: AlunosCurso = {
      id: `u${Date.now()}`,
      nome: dados.nome,
      email: dados.email,
      funcao: dados.funcao,
      progresso: 0,
      matriculadoEm: new Date().toISOString().split('T')[0],
      status: 'ativo',
    };
    setAlunos(prev => [novo, ...prev]);
  }

  // stats
  const concluidos = alunos.filter(a => a.status === 'concluido').length;
  const mediaProgresso = alunos.length
    ? Math.round(alunos.reduce((s, a) => s + a.progresso, 0) / alunos.length)
    : 0;

  return (
    <div className="space-y-6">

      {/* ── Stats mini-bar ── */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[#F4F4F4] rounded-xl p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
            <TrendingUp size={16} className="text-blue-600" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Matriculados</p>
            <p className="text-xl font-black text-[#1A1C1C]">{alunos.length}</p>
          </div>
        </div>
        <div className="bg-[#F4F4F4] rounded-xl p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#E5F5E9] flex items-center justify-center shrink-0">
            <CheckCircle2 size={16} className="text-[#007042]" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Concluíram</p>
            <p className="text-xl font-black text-[#1A1C1C]">{concluidos}</p>
          </div>
        </div>
        <div className="bg-[#F4F4F4] rounded-xl p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
            <Clock size={16} className="text-purple-600" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Progresso Médio</p>
            <p className="text-xl font-black text-[#1A1C1C]">{mediaProgresso}%</p>
          </div>
        </div>
      </div>

      {/* ── Toolbar ── */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="flex-1 w-full bg-[#F4F4F4] rounded-xl flex items-center px-4 py-3 gap-3 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
          <Search size={18} className="text-gray-400 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar por nome, e-mail ou função..."
            className="bg-transparent outline-none text-sm font-medium text-[#1A1C1C] placeholder-gray-400 w-full"
          />
        </div>
        <button
          onClick={() => setModal(true)}
          className="flex items-center gap-2 bg-[#007042] hover:bg-[#005a35] text-white text-sm font-bold px-5 py-3 rounded-xl shadow-[0_6px_20px_rgba(0,112,66,0.2)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
        >
          <UserPlus size={16} /> Adicionar Aluno
        </button>
      </div>

      {/* ── Table ── */}
      {filtered.length > 0 ? (
        <div className="border border-[#BECAB6]/40 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F4F4F4] border-b border-[#BECAB6]/30">
                <th className="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Aluno</th>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden md:table-cell">Função</th>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider">Progresso</th>
                <th className="px-5 py-3.5 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Status</th>
                <th className="px-5 py-3.5 text-right text-[11px] font-bold text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#BECAB6]/20">
              {filtered.map(aluno => (
                <tr key={aluno.id} className="bg-white hover:bg-[#FAFAFA] transition-colors group">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#007042]/10 flex items-center justify-center shrink-0">
                        <span className="text-[#007042] font-bold text-sm">{aluno.nome[0]}</span>
                      </div>
                      <div>
                        <p className="font-bold text-[#1A1C1C]">{aluno.nome}</p>
                        <p className="text-xs text-gray-400 font-medium">{aluno.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-gray-600 font-medium">{aluno.funcao}</span>
                  </td>
                  <td className="px-5 py-4 min-w-[140px]">
                    <ProgressBar value={aluno.progresso} />
                  </td>
                  <td className="px-5 py-4 hidden lg:table-cell">
                    <StatusBadge status={aluno.status} />
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      onClick={() => removerAluno(aluno.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                      title="Remover do curso"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="py-20 border-2 border-dashed border-[#BECAB6]/50 rounded-2xl flex flex-col items-center gap-3 text-center">
          <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center">
            <XCircle size={26} className="text-gray-300" />
          </div>
          <p className="font-bold text-[#1A1C1C] font-serif">
            {search ? `Nenhum resultado para "${search}"` : 'Nenhum aluno matriculado'}
          </p>
          <p className="text-sm text-gray-400 max-w-xs">
            {search ? 'Tente um termo diferente.' : 'Clique em "Adicionar Aluno" para matricular o primeiro aluno.'}
          </p>
        </div>
      )}

      {/* Modal */}
      <ModalAdicionarAluno
        isOpen={modal}
        onClose={() => setModal(false)}
        onAdicionarAluno={adicionarAluno}
      />
    </div>
  );
}
