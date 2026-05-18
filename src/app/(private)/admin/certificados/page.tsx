'use client';

import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  Search,
  Plus,
  Download,
  Trash2,
  MoreVertical,
  CheckCircle2,
  Upload,
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ChevronDown,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type CertificadoStatus = 'aprovado' | 'pendente';

interface Certificado {
  id: string;
  alunoNome: string;
  alunoEmail: string;
  alunoIniciais: string;
  alunoCor: string;
  curso: string;
  conclusao: string;
  notaFinal: number | null;
  status: CertificadoStatus;
}

interface NovoCertificadoForm {
  alunoNome: string;
  alunoEmail: string;
  curso: string;
  conclusao: string;
  notaFinal: string;
}

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const CURSOS = [
  'Todos os cursos',
  'Cervejaria Premium 101',
  'Logística Avançada',
  'Marketing Editorial',
  'Liderança Inspiradora',
  'Segurança no Trabalho',
];

const mockCertificados: Certificado[] = [
  {
    id: '1',
    alunoNome: 'João Silva',
    alunoEmail: 'joao.silva@heineken.com',
    alunoIniciais: 'JS',
    alunoCor: '#8cfc76',
    curso: 'Cervejaria Premium 101',
    conclusao: '12/10/2023',
    notaFinal: 9.5,
    status: 'aprovado',
  },
  {
    id: '2',
    alunoNome: 'Maria Oliveira',
    alunoEmail: 'm.oliveira@heineken.com',
    alunoIniciais: 'MO',
    alunoCor: '#bfdbfe',
    curso: 'Logística Avançada',
    conclusao: '15/10/2023',
    notaFinal: null,
    status: 'pendente',
  },
  {
    id: '3',
    alunoNome: 'Ricardo Costa',
    alunoEmail: 'ricardo.c@heineken.com',
    alunoIniciais: 'RC',
    alunoCor: '#b6f1b4',
    curso: 'Marketing Editorial',
    conclusao: '10/10/2023',
    notaFinal: 8.0,
    status: 'aprovado',
  },
  {
    id: '4',
    alunoNome: 'Ana Lima',
    alunoEmail: 'ana.lima@heineken.com',
    alunoIniciais: 'AL',
    alunoCor: '#fde68a',
    curso: 'Liderança Inspiradora',
    conclusao: '20/10/2023',
    notaFinal: null,
    status: 'pendente',
  },
  {
    id: '5',
    alunoNome: 'Carlos Souza',
    alunoEmail: 'carlos.souza@heineken.com',
    alunoIniciais: 'CS',
    alunoCor: '#ddd6fe',
    curso: 'Segurança no Trabalho',
    conclusao: '05/10/2023',
    notaFinal: 7.5,
    status: 'aprovado',
  },
  {
    id: '6',
    alunoNome: 'Fernanda Rocha',
    alunoEmail: 'fernanda.rocha@heineken.com',
    alunoIniciais: 'FR',
    alunoCor: '#fecaca',
    curso: 'Cervejaria Premium 101',
    conclusao: '18/10/2023',
    notaFinal: null,
    status: 'pendente',
  },
];

const ITEMS_PER_PAGE = 5;

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default function CertificadosAdminPage() {
  const [busca, setBusca] = useState('');
  const [cursoFiltro, setCursoFiltro] = useState('Todos os cursos');
  const [statusFiltro, setStatusFiltro] = useState<CertificadoStatus | 'todos'>('todos');
  const [pagina, setPagina] = useState(1);
  const [certificados, setCertificados] = useState<Certificado[]>(mockCertificados);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNovoModalOpen, setIsNovoModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [arquivos, setArquivos] = useState<File[]>([]);
  const [novoForm, setNovoForm] = useState({ nomeCertificado: '', curso: '', cargaHoraria: '' });
  const [form, setForm] = useState<NovoCertificadoForm>({
    alunoNome: '',
    alunoEmail: '',
    curso: '',
    conclusao: '',
    notaFinal: '',
  });

  // -------------------------------------------------------------------------
  // Derived state
  // -------------------------------------------------------------------------

  const filtered = certificados.filter((c) => {
    const matchBusca =
      c.alunoNome.toLowerCase().includes(busca.toLowerCase()) ||
      c.alunoEmail.toLowerCase().includes(busca.toLowerCase());
    const matchCurso =
      cursoFiltro === 'Todos os cursos' || c.curso === cursoFiltro;
    const matchStatus =
      statusFiltro === 'todos' || c.status === statusFiltro;
    return matchBusca && matchCurso && matchStatus;
  });

  const totalPaginas = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const paginados = filtered.slice(
    (paginaAtual - 1) * ITEMS_PER_PAGE,
    paginaAtual * ITEMS_PER_PAGE,
  );

  const totalEmitidosMes = certificados.filter((c) => c.status === 'aprovado').length;
  const totalPendentes = certificados.filter((c) => c.status === 'pendente').length;

  // -------------------------------------------------------------------------
  // Handlers
  // -------------------------------------------------------------------------

  function showSuccess(msg: string) {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 3000);
  }

  function handleLimparFiltros() {
    setBusca('');
    setCursoFiltro('Todos os cursos');
    setStatusFiltro('todos');
    setPagina(1);
  }

  function handleAprovar(id: string) {
    setCertificados((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: 'aprovado', notaFinal: c.notaFinal ?? 7.0 } : c,
      ),
    );
    showSuccess('Certificado aprovado com sucesso.');
  }

  function handleExcluir() {
    if (!deletingId) return;
    setCertificados((prev) => prev.filter((c) => c.id !== deletingId));
    setDeletingId(null);
    showSuccess('Certificado removido com sucesso.');
  }

  function handleAdicionarCertificado(e: React.FormEvent) {
    e.preventDefault();
    const iniciais = form.alunoNome
      .split(' ')
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase() ?? '')
      .join('');
    const novo: Certificado = {
      id: crypto.randomUUID(),
      alunoNome: form.alunoNome,
      alunoEmail: form.alunoEmail,
      curso: form.curso,
      conclusao: form.conclusao,
      notaFinal: form.notaFinal ? parseFloat(form.notaFinal) : null,
      status: 'pendente',
      alunoIniciais: iniciais,
      alunoCor: '#e5f5e9',
    };
    setCertificados((prev) => [novo, ...prev]);
    setIsModalOpen(false);
    setForm({ alunoNome: '', alunoEmail: '', curso: '', conclusao: '', notaFinal: '' });
    showSuccess('Certificado adicionado com sucesso.');
  }

  function handleStatusFiltro(s: CertificadoStatus | 'todos') {
    setStatusFiltro(s);
    setPagina(1);
  }


  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------

  return (
    <div className="p-8 max-w-[1280px] mx-auto w-full space-y-8 pb-12 animate-in fade-in duration-500">

      {/* ── Editorial Header ─────────────────────────────────────────────── */}
      <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-heineken-green tracking-wide">
            Administração
          </span>
          <h1 className="text-4xl font-black font-serif text-[#1A1C1C] tracking-tight">
            Certificados
          </h1>
        </div>

        {/* Decorative star badge */}
        <div className="absolute -top-6 right-0 pointer-events-none select-none opacity-80">
          <GraduationCap size={80} className="text-heineken-green opacity-10" />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsNovoModalOpen(true)}
            className="flex items-center gap-2 bg-white hover:bg-[#F4F4F4] text-heineken-green text-sm font-bold px-8 py-3.5 rounded-xl border-2 border-heineken-green transition-all hover:-translate-y-0.5"
          >
            <Plus size={18} />
            Novo Certificado
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-heineken-green hover:bg-heineken-dark text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all shadow-[0_8px_24px_rgba(0,112,66,0.25)] hover:shadow-[0_12px_28px_rgba(0,112,66,0.35)] hover:-translate-y-0.5"
          >
            <Plus size={18} />
            Adicionar Certificado
          </button>
        </div>
      </div>

      {/* ── Filter Bento Grid ────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {/* Usuário */}
        <div className="bg-white border border-[rgba(190,202,182,0.15)] rounded-xl p-5 flex flex-col gap-2 shadow-sm">
          <span className="text-[11px] font-bold text-[#6F7B69] uppercase tracking-[1.2px]">
            Usuário
          </span>
          <div className="bg-[#E3E2E2] rounded-lg flex items-center gap-2 px-3 py-2">
            <Search size={14} className="text-[#6B7280] shrink-0" />
            <input
              type="text"
              value={busca}
              onChange={(e) => { setBusca(e.target.value); setPagina(1); }}
              placeholder="Nome ou e-mail"
              className="bg-transparent outline-none text-sm text-[#1A1C1C] placeholder-[#6B7280] w-full"
            />
          </div>
        </div>

        {/* Curso */}
        <div className="bg-white border border-[rgba(190,202,182,0.15)] rounded-xl p-5 flex flex-col gap-2 shadow-sm">
          <span className="text-[11px] font-bold text-[#6F7B69] uppercase tracking-[1.2px]">
            Curso
          </span>
          <div className="relative bg-[#E3E2E2] rounded-lg">
            <select
              value={cursoFiltro}
              onChange={(e) => { setCursoFiltro(e.target.value); setPagina(1); }}
              className="w-full bg-transparent appearance-none outline-none text-sm text-[#1A1C1C] px-3 py-2 pr-8 cursor-pointer"
            >
              {CURSOS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#3F4A3A] pointer-events-none" />
          </div>
        </div>

        {/* Status */}
        <div className="bg-white border border-[rgba(190,202,182,0.15)] rounded-xl p-5 flex flex-col gap-2 shadow-sm">
          <span className="text-[11px] font-bold text-[#6F7B69] uppercase tracking-[1.2px]">
            Status
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleStatusFiltro(statusFiltro === 'aprovado' ? 'todos' : 'aprovado')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                statusFiltro === 'aprovado'
                  ? 'bg-heineken-green text-white'
                  : 'bg-[#E3E2E2] text-[#6F7B69] hover:bg-gray-300'
              }`}
            >
              Aprovado
            </button>
            <button
              onClick={() => handleStatusFiltro(statusFiltro === 'pendente' ? 'todos' : 'pendente')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                statusFiltro === 'pendente'
                  ? 'bg-heineken-green text-white'
                  : 'bg-[#E3E2E2] text-[#6F7B69] hover:bg-gray-300'
              }`}
            >
              Pendente
            </button>
          </div>
        </div>

        {/* Limpar filtros */}
        <div className="bg-[#F4F3F3] rounded-xl flex items-center justify-center p-4 cursor-pointer hover:bg-gray-200 transition-colors" onClick={handleLimparFiltros}>
          <div className="flex items-center gap-2">
            <X size={16} className="text-heineken-green" />
            <span className="text-sm font-bold text-heineken-green">Limpar Filtros</span>
          </div>
        </div>
      </div>


      {/* ── Table ────────────────────────────────────────────────────────── */}
      <div className="bg-white border border-[rgba(190,202,182,0.15)] rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">

        {/* Table header */}
        <div className="bg-[#F4F3F3] hidden lg:grid grid-cols-[2fr_1.5fr_1fr_0.8fr_1fr_1.2fr] px-6 py-4">
          {['Usuário', 'Curso', 'Conclusão', 'Nota Final', 'Status', 'Ações'].map((col, i) => (
            <div
              key={col}
              className={`text-[11px] font-extrabold text-[#3F4A3A] uppercase tracking-[1.2px] ${
                i === 3 ? 'text-center' : i === 5 ? 'text-right' : ''
              }`}
            >
              {col}
            </div>
          ))}
        </div>

        {/* Table body */}
        <div className="divide-y divide-[#EEEEEE]">
          {paginados.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center">
                <GraduationCap size={26} className="text-gray-300" />
              </div>
              <p className="text-sm font-bold font-serif text-[#1A1C1C]">Nenhum certificado encontrado</p>
              <p className="text-xs text-gray-400">Tente ajustar os filtros para ver mais resultados.</p>
            </div>
          ) : (
            paginados.map((cert) => (
              <div
                key={cert.id}
                className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr_1fr_0.8fr_1fr_1.2fr] items-center px-6 py-4 hover:bg-[#F8FCF9] transition-colors group gap-2 lg:gap-0"
              >
                {/* Usuário */}
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-[#002106]"
                    style={{ backgroundColor: cert.alunoCor }}
                  >
                    {cert.alunoIniciais}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#1A1C1C] truncate group-hover:text-heineken-green transition-colors">
                      {cert.alunoNome}
                    </p>
                    <p className="text-xs text-[#6F7B69] truncate">{cert.alunoEmail}</p>
                  </div>
                </div>

                {/* Curso */}
                <div className="min-w-0 pr-4">
                  <p className="text-sm font-semibold text-heineken-green leading-snug truncate">
                    {cert.curso}
                  </p>
                </div>

                {/* Conclusão */}
                <div>
                  <p className="text-sm text-[#6F7B69] font-medium">{cert.conclusao}</p>
                </div>

                {/* Nota Final */}
                <div className="flex justify-center">
                  {cert.notaFinal !== null ? (
                    <span className="bg-[rgba(0,112,66,0.15)] text-heineken-green font-bold text-sm px-3 py-1 rounded">
                      {cert.notaFinal.toFixed(1)}
                    </span>
                  ) : (
                    <span className="bg-[#E3E2E2] text-[#6F7B69] font-bold text-sm px-3 py-1 rounded">
                      --
                    </span>
                  )}
                </div>

                {/* Status */}
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      cert.status === 'aprovado' ? 'bg-heineken-green' : 'bg-heineken-red'
                    }`}
                  />
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wide ${
                      cert.status === 'aprovado' ? 'text-heineken-green' : 'text-heineken-red'
                    }`}
                  >
                    {cert.status === 'aprovado' ? 'Aprovado' : 'Pendente'}
                  </span>
                </div>

                {/* Ações */}
                <div className="flex items-center justify-end gap-1">
                  {cert.status === 'aprovado' ? (
                    <>
                      <button
                        title="Baixar certificado"
                        className="p-2 rounded-lg text-gray-400 hover:text-heineken-green hover:bg-green-50 transition-colors"
                      >
                        <Download size={18} />
                      </button>
                      <button
                        title="Excluir certificado"
                        onClick={() => setDeletingId(cert.id)}
                        className="p-2 rounded-lg text-gray-400 hover:text-heineken-red hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleAprovar(cert.id)}
                        className="bg-[rgba(0,102,0,0.1)] hover:bg-[rgba(0,102,0,0.2)] text-heineken-green text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Aprovar
                      </button>
                      <button
                        title="Mais opções"
                        className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        <MoreVertical size={16} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination footer */}
        {filtered.length > 0 && (
          <div className="bg-[#F4F3F3] px-6 py-4 flex items-center justify-between border-t border-[#EEEEEE]">
            <span className="text-[11px] font-bold text-[#6F7B69] uppercase tracking-wide">
              Mostrando {paginados.length} de {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPagina((p) => Math.max(1, p - 1))}
                disabled={paginaAtual === 1}
                className="w-10 h-10 flex items-center justify-center bg-[#E3E2E2] rounded-lg text-[#3F4A3A] hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPagina(p)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                    p === paginaAtual
                      ? 'bg-heineken-green text-white'
                      : 'text-[#1A1C1C] hover:bg-gray-100'
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
                disabled={paginaAtual === totalPaginas}
                className="w-10 h-10 flex items-center justify-center bg-[#E3E2E2] rounded-lg text-[#3F4A3A] hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>


      {/* ── Metric Cards ─────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">

        {/* Emitidos este mês */}
        <div className="bg-heineken-green rounded-2xl p-8 relative overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,102,0,0.2),0_8px_10px_-6px_rgba(0,102,0,0.2)] flex flex-col gap-1">
          <div className="absolute bottom-[-20px] right-[-20px] pointer-events-none select-none">
            <GraduationCap size={96} className="text-white opacity-10" />
          </div>
          <p className="text-4xl font-black font-serif text-white relative z-10">
            {String(totalEmitidosMes).padStart(3, '0')}
          </p>
          <p className="text-xs font-bold text-white/80 uppercase tracking-[1.4px] relative z-10">
            Emitidos este mês
          </p>
        </div>

        {/* Aprovações pendentes */}
        <div className="bg-white border border-[rgba(190,202,182,0.15)] rounded-2xl p-8 flex flex-col gap-1 shadow-sm">
          <p className="text-4xl font-black font-serif text-heineken-green">
            {String(totalPendentes).padStart(2, '0')}
          </p>
          <p className="text-xs font-bold text-[#6F7B69] uppercase tracking-[1.4px]">
            Aprovações pendentes
          </p>
          {/* Stacked avatars */}
          <div className="flex items-center mt-3 pt-1">
            <div className="flex -space-x-3">
              {[
                { bg: '#E4E4E7', label: '' },
                { bg: '#D4D4D8', label: '' },
                { bg: '#A1A1AA', label: '' },
                { bg: '#007042', label: `+${Math.max(0, totalPendentes - 3)}` },
              ].map((av, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: av.bg, zIndex: 4 - i }}
                >
                  {av.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Importação em massa */}
        <div className="bg-[#F4F3F3] border-2 border-dashed border-[rgba(190,202,182,0.4)] rounded-2xl flex flex-col items-center justify-center gap-2 px-8 py-10 cursor-pointer hover:border-heineken-green hover:bg-green-50/30 transition-colors group">
          <Upload size={28} className="text-[#6F7B69] group-hover:text-heineken-green transition-colors mb-1" />
          <p className="text-sm font-bold text-[#1A1C1C] text-center">Importação em Massa</p>
          <p className="text-xs text-[#6F7B69] text-center">Carregar CSV com registros externos</p>
        </div>
      </div>


      {/* ── Modal: Novo Certificado (com upload de arquivo) ──────────────── */}
      <Dialog.Root open={isNovoModalOpen} onOpenChange={(open) => {
        setIsNovoModalOpen(open);
        if (!open) {
          setArquivos([]);
          setNovoForm({ nomeCertificado: '', curso: '', cargaHoraria: '' });
        }
      }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-xl font-black font-serif text-[#1A1C1C]">
                Novo Certificado
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100">
                  <X size={20} />
                </button>
              </Dialog.Close>
            </div>

            <div className="flex flex-col gap-5">

              {/* Nome do Certificado */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-heineken-dark uppercase tracking-[1.2px]">
                  Nome do Certificado <span className="text-heineken-red">*</span>
                </label>
                <div className="bg-[#F4F4F4] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-heineken-green transition-shadow">
                  <input
                    type="text"
                    required
                    value={novoForm.nomeCertificado}
                    onChange={(e) => setNovoForm((f) => ({ ...f, nomeCertificado: e.target.value }))}
                    placeholder="Ex: Certificado de Conclusão — Cervejaria Premium"
                    className="w-full bg-transparent outline-none text-sm text-[#1A1C1C] placeholder-[#6B7280] font-medium"
                  />
                </div>
              </div>

              {/* Curso vinculado + Carga Horária */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-heineken-dark uppercase tracking-[1.2px]">
                    Curso <span className="text-heineken-red">*</span>
                  </label>
                  <div className="relative bg-[#F4F4F4] rounded-lg focus-within:ring-2 focus-within:ring-heineken-green transition-shadow">
                    <select
                      required
                      value={novoForm.curso}
                      onChange={(e) => setNovoForm((f) => ({ ...f, curso: e.target.value }))}
                      className="w-full bg-transparent appearance-none outline-none text-sm text-[#1A1C1C] px-4 py-3 cursor-pointer"
                    >
                      <option value="" disabled>Selecione</option>
                      {CURSOS.filter((c) => c !== 'Todos os cursos').map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3F4A3A] pointer-events-none" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-heineken-dark uppercase tracking-[1.2px]">
                    Carga Horária (h) <span className="text-heineken-red">*</span>
                  </label>
                  <div className="bg-[#F4F4F4] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-heineken-green transition-shadow">
                    <input
                      type="number"
                      min="1"
                      required
                      value={novoForm.cargaHoraria}
                      onChange={(e) => setNovoForm((f) => ({ ...f, cargaHoraria: e.target.value }))}
                      placeholder="Ex: 40"
                      className="w-full bg-transparent outline-none text-sm text-[#1A1C1C] placeholder-[#6B7280] font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Área de upload */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-heineken-dark uppercase tracking-[1.2px]">
                  Arquivo do Certificado <span className="text-heineken-red">*</span>
                </label>
                <label
                  htmlFor="upload-certificado"
                  className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl px-6 py-8 cursor-pointer transition-colors ${
                    arquivos.length > 0
                      ? 'border-heineken-green bg-green-50/40'
                      : 'border-[rgba(190,202,182,0.5)] bg-[#F4F4F4] hover:border-heineken-green hover:bg-green-50/20'
                  }`}
                >
                  <Upload size={28} className={arquivos.length > 0 ? 'text-heineken-green' : 'text-[#6F7B69]'} />
                  {arquivos.length === 0 ? (
                    <>
                      <p className="text-sm font-bold text-[#1A1C1C] text-center">
                        Arraste ou clique para enviar
                      </p>
                      <p className="text-xs text-[#6F7B69] text-center">
                        PDF, PNG ou JPEG — máx. 10 MB
                      </p>
                    </>
                  ) : (
                    <div className="flex flex-col items-center gap-1">
                      {arquivos.map((f, i) => (
                        <p key={i} className="text-sm font-semibold text-heineken-green text-center truncate max-w-xs">
                          {f.name}
                        </p>
                      ))}
                      <p className="text-xs text-[#6F7B69]">Clique para substituir</p>
                    </div>
                  )}
                  <input
                    id="upload-certificado"
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) setArquivos(Array.from(e.target.files));
                    }}
                  />
                </label>

                {/* Lista de arquivos selecionados */}
                {arquivos.length > 0 && (
                  <div className="flex flex-col gap-1.5 mt-1">
                    {arquivos.map((f, i) => (
                      <div key={i} className="flex items-center justify-between bg-[#F4F4F4] rounded-lg px-3 py-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-[10px] font-bold uppercase bg-heineken-green text-white px-1.5 py-0.5 rounded shrink-0">
                            {f.name.split('.').pop()?.toUpperCase()}
                          </span>
                          <span className="text-xs text-[#1A1C1C] font-medium truncate">{f.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setArquivos((prev) => prev.filter((_, idx) => idx !== i))}
                          className="text-gray-400 hover:text-heineken-red transition-colors shrink-0 ml-2"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Ações */}
              <div className="flex items-center justify-end gap-3 pt-1">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="px-6 py-2.5 text-sm font-semibold text-[#3F4A3A] border-2 border-[#BECAB6] rounded-lg hover:bg-[#F4F4F4] transition-colors"
                  >
                    Cancelar
                  </button>
                </Dialog.Close>
                <button
                  type="button"
                  disabled={arquivos.length === 0 || !novoForm.nomeCertificado || !novoForm.curso || !novoForm.cargaHoraria}
                  onClick={() => {
                    setIsNovoModalOpen(false);
                    setArquivos([]);
                    setNovoForm({ nomeCertificado: '', curso: '', cargaHoraria: '' });
                    showSuccess('Certificado enviado com sucesso.');
                  }}
                  className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold bg-heineken-green text-white rounded-lg hover:bg-heineken-dark transition-colors shadow-[0_8px_20px_rgba(0,112,66,0.2)] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <CheckCircle2 size={16} />
                  Enviar Certificado
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* ── Modal: Adicionar Certificado ─────────────────────────────────── */}      <Dialog.Root open={isModalOpen} onOpenChange={(open) => {
        if (!open) {
          setIsModalOpen(false);
          setForm({ alunoNome: '', alunoEmail: '', curso: '', conclusao: '', notaFinal: '' });
        } else {
          setIsModalOpen(true);
        }
      }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-xl font-black font-serif text-[#1A1C1C]">
                Adicionar Certificado
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100">
                  <X size={20} />
                </button>
              </Dialog.Close>
            </div>

            <form onSubmit={handleAdicionarCertificado} className="flex flex-col gap-4">
              {/* Nome do aluno */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-heineken-dark uppercase tracking-[1.2px]">
                  Nome do Aluno <span className="text-heineken-red">*</span>
                </label>
                <div className="bg-[#F4F4F4] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-heineken-green transition-shadow">
                  <input
                    type="text"
                    required
                    value={form.alunoNome}
                    onChange={(e) => setForm((f) => ({ ...f, alunoNome: e.target.value }))}
                    placeholder="Ex: João Silva"
                    className="w-full bg-transparent outline-none text-sm text-[#1A1C1C] placeholder-[#6B7280] font-medium"
                  />
                </div>
              </div>

              {/* E-mail */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-heineken-dark uppercase tracking-[1.2px]">
                  E-mail <span className="text-heineken-red">*</span>
                </label>
                <div className="bg-[#F4F4F4] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-heineken-green transition-shadow">
                  <input
                    type="email"
                    required
                    value={form.alunoEmail}
                    onChange={(e) => setForm((f) => ({ ...f, alunoEmail: e.target.value }))}
                    placeholder="joao.silva@heineken.com"
                    className="w-full bg-transparent outline-none text-sm text-[#1A1C1C] placeholder-[#6B7280] font-medium"
                  />
                </div>
              </div>

              {/* Curso */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-heineken-dark uppercase tracking-[1.2px]">
                  Curso <span className="text-heineken-red">*</span>
                </label>
                <div className="relative bg-[#F4F4F4] rounded-lg focus-within:ring-2 focus-within:ring-heineken-green transition-shadow">
                  <select
                    required
                    value={form.curso}
                    onChange={(e) => setForm((f) => ({ ...f, curso: e.target.value }))}
                    className="w-full bg-transparent appearance-none outline-none text-sm text-[#1A1C1C] px-4 py-3 cursor-pointer"
                  >
                    <option value="" disabled>Selecione um curso</option>
                    {CURSOS.filter((c) => c !== 'Todos os cursos').map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3F4A3A] pointer-events-none" />
                </div>
              </div>

              {/* Data de conclusão + Nota */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-heineken-dark uppercase tracking-[1.2px]">
                    Data de Conclusão <span className="text-heineken-red">*</span>
                  </label>
                  <div className="bg-[#F4F4F4] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-heineken-green transition-shadow">
                    <input
                      type="date"
                      required
                      value={form.conclusao}
                      onChange={(e) => setForm((f) => ({ ...f, conclusao: e.target.value }))}
                      className="w-full bg-transparent outline-none text-sm text-[#1A1C1C] font-medium"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-heineken-dark uppercase tracking-[1.2px]">
                    Nota Final
                  </label>
                  <div className="bg-[#F4F4F4] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-heineken-green transition-shadow">
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      value={form.notaFinal}
                      onChange={(e) => setForm((f) => ({ ...f, notaFinal: e.target.value }))}
                      placeholder="0.0 – 10.0"
                      className="w-full bg-transparent outline-none text-sm text-[#1A1C1C] placeholder-[#6B7280] font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="px-6 py-2.5 text-sm font-semibold text-[#3F4A3A] border-2 border-[#BECAB6] rounded-lg hover:bg-[#F4F4F4] transition-colors"
                  >
                    Cancelar
                  </button>
                </Dialog.Close>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold bg-heineken-green text-white rounded-lg hover:bg-heineken-dark transition-colors shadow-[0_8px_20px_rgba(0,112,66,0.2)]"
                >
                  <CheckCircle2 size={16} />
                  Adicionar
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>


      {/* ── Modal: Confirmar Exclusão ─────────────────────────────────────── */}
      <Dialog.Root open={!!deletingId} onOpenChange={(open) => { if (!open) setDeletingId(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-lg font-bold text-[#1A1C1C]">
                Remover certificado
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X size={20} />
                </button>
              </Dialog.Close>
            </div>
            <p className="text-sm text-gray-600">
              Tem certeza que deseja remover este certificado? Esta ação não pode ser desfeita.
            </p>
            <div className="flex items-center justify-end gap-3">
              <Dialog.Close asChild>
                <button className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors">
                  Cancelar
                </button>
              </Dialog.Close>
              <button
                onClick={handleExcluir}
                className="px-5 py-2.5 text-sm font-semibold bg-heineken-red text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Remover
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* ── Success toast ────────────────────────────────────────────────── */}
      {successMsg && (
        <div className="fixed bottom-6 right-6 bg-heineken-green text-white rounded-xl px-6 py-3 shadow-lg z-50 text-sm font-semibold animate-in slide-in-from-bottom-4 duration-300">
          {successMsg}
        </div>
      )}

    </div>
  );
}
