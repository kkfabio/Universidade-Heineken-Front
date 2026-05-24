'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Star,
  Bot,
  MessageSquare,
  Clock,
  Settings,
} from 'lucide-react';
import { ModalGerenciarUsuario } from '@/components/admin/ModalGerenciarUsuario';

// ---------------------------------------------------------------------------
// Shared mock data — mesmos usuários da lista /admin/usuarios
// ---------------------------------------------------------------------------

interface Curso {
  id: string;
  titulo: string;
  categoria: string;
  progresso: number;
  ativo: boolean;
  ultimoAcesso: string;
}

interface Certificado {
  id: string;
  titulo: string;
  emitidoEm: string;
}

interface AtividadeRecente {
  id: string;
  descricao: string;
  data: string;
  tipo: 'conclusao' | 'certificado' | 'acesso';
}

interface HistoricoIA {
  id: string;
  pergunta: string;
  data: string;
  curso: string;
}

interface PerfilAluno {
  id: string;
  nome: string;
  cargo: string;
  email: string;
  matricula: string;
  dataAdmissao: string;
  unidade: string;
  cursos: Curso[];
  certificados: Certificado[];
  atividades: AtividadeRecente[];
  historicoIA: HistoricoIA[];
}

// ---------------------------------------------------------------------------
// Mock database — espelha os IDs da página /admin/usuarios
// ---------------------------------------------------------------------------

const mockDatabase: Record<string, PerfilAluno> = {
  '1': {
    id: '1',
    nome: 'Carlos Eduardo Souza',
    cargo: 'Operador de Linha | Operações — Fábrica SP',
    email: 'carlos.souza@heineken.com',
    matricula: '#10001-C',
    dataAdmissao: '15 de Janeiro, 2024',
    unidade: 'Fábrica SP — Operações',
    cursos: [
      { id: 'c1', titulo: 'Cultura Cervejeira e Liderança', categoria: 'Cultura', progresso: 100, ativo: true, ultimoAcesso: '12 Mar 2024' },
      { id: 'c2', titulo: 'Segurança no Trabalho', categoria: 'Segurança', progresso: 68, ativo: true, ultimoAcesso: 'Hoje' },
      { id: 'c3', titulo: 'Gestão de Qualidade ISO', categoria: 'Qualidade', progresso: 0, ativo: false, ultimoAcesso: 'Nunca acessado' },
    ],
    certificados: [
      { id: 'cert1', titulo: 'Cultura Cervejeira', emitidoEm: 'Mar/2024' },
    ],
    atividades: [
      { id: 'a1', descricao: 'Concluiu o módulo "Cultura Cervejeira"', data: 'Hoje, às 14:32', tipo: 'conclusao' },
      { id: 'a2', descricao: 'Certificado emitido: Cultura Cervejeira', data: 'Ontem, às 10:15', tipo: 'certificado' },
      { id: 'a3', descricao: 'Iniciou curso de Segurança no Trabalho', data: '3 dias atrás', tipo: 'acesso' },
    ],
    historicoIA: [
      { id: 'ia1', pergunta: 'Como funciona o processo de fermentação?', data: 'Hoje, 14:10', curso: 'Cultura Cervejeira' },
      { id: 'ia2', pergunta: 'Quais são as normas de segurança para operadores?', data: 'Ontem, 09:30', curso: 'Segurança no Trabalho' },
    ],
  },
  '2': {
    id: '2',
    nome: 'Ana Lima',
    cargo: 'Analista de RH | RH — Corporativo',
    email: 'ana.lima@heineken.com',
    matricula: '#10002-A',
    dataAdmissao: '03 de Março, 2022',
    unidade: 'Corporativo — São Paulo',
    cursos: [
      { id: 'c1', titulo: 'Gestão de Talentos UHNK', categoria: 'RH', progresso: 80, ativo: true, ultimoAcesso: 'Hoje' },
      { id: 'c2', titulo: 'Liderança e Cultura', categoria: 'Liderança', progresso: 45, ativo: true, ultimoAcesso: '2 dias atrás' },
    ],
    certificados: [
      { id: 'cert1', titulo: 'Gestão de Talentos', emitidoEm: 'Fev/2024' },
      { id: 'cert2', titulo: 'Cultura Heineken', emitidoEm: 'Nov/2023' },
    ],
    atividades: [
      { id: 'a1', descricao: 'Concluiu módulo "Recrutamento Estratégico"', data: 'Hoje, às 11:15', tipo: 'conclusao' },
      { id: 'a2', descricao: 'Nova certificação: Gestão de Talentos', data: '2 dias atrás', tipo: 'certificado' },
    ],
    historicoIA: [
      { id: 'ia1', pergunta: 'Como estruturar um plano de desenvolvimento individual?', data: 'Hoje, 10:45', curso: 'Gestão de Talentos' },
    ],
  },
  '3': {
    id: '3',
    nome: 'Rafael Mendes',
    cargo: 'Supervisor | Logística — Distribuição',
    email: 'rafael.mendes@heineken.com',
    matricula: '#10003-R',
    dataAdmissao: '20 de Junho, 2021',
    unidade: 'Logística — Distribuição SP',
    cursos: [
      { id: 'c1', titulo: 'Logística e Operações', categoria: 'Logística', progresso: 38, ativo: true, ultimoAcesso: 'Ontem' },
      { id: 'c2', titulo: 'Gestão de Frotas', categoria: 'Operações', progresso: 20, ativo: true, ultimoAcesso: '5 dias atrás' },
    ],
    certificados: [],
    atividades: [
      { id: 'a1', descricao: 'Acessou módulo "Rotas de Distribuição"', data: 'Ontem, às 16:48', tipo: 'acesso' },
    ],
    historicoIA: [
      { id: 'ia1', pergunta: 'Quais são as melhores práticas para roteirização?', data: 'Ontem, 16:30', curso: 'Logística e Operações' },
    ],
  },
  '4': {
    id: '4',
    nome: 'Juliana Costa',
    cargo: 'Analista de Qualidade | Qualidade — Laboratório',
    email: 'juliana.costa@heineken.com',
    matricula: '#10004-J',
    dataAdmissao: '08 de Setembro, 2020',
    unidade: 'Laboratório — Qualidade SP',
    cursos: [
      { id: 'c1', titulo: 'Gestão de Qualidade ISO 9001', categoria: 'Qualidade', progresso: 100, ativo: true, ultimoAcesso: '10 Abr 2024' },
      { id: 'c2', titulo: 'Análise Sensorial de Cerveja', categoria: 'Técnico', progresso: 94, ativo: true, ultimoAcesso: 'Ontem' },
      { id: 'c3', titulo: 'Sustentabilidade e ESG', categoria: 'ESG', progresso: 88, ativo: true, ultimoAcesso: '3 dias atrás' },
    ],
    certificados: [
      { id: 'cert1', titulo: 'ISO 9001 — Qualidade', emitidoEm: 'Abr/2024' },
      { id: 'cert2', titulo: 'Análise Sensorial', emitidoEm: 'Mar/2024' },
      { id: 'cert3', titulo: 'Sustentabilidade Heineken', emitidoEm: 'Jan/2024' },
    ],
    atividades: [
      { id: 'a1', descricao: 'Concluiu curso "ISO 9001"', data: 'Ontem, às 09:20', tipo: 'conclusao' },
      { id: 'a2', descricao: 'Certificado emitido: ISO 9001', data: 'Ontem, às 09:25', tipo: 'certificado' },
      { id: 'a3', descricao: 'Acessou "Análise Sensorial"', data: '2 dias atrás', tipo: 'acesso' },
    ],
    historicoIA: [
      { id: 'ia1', pergunta: 'Quais parâmetros definem a qualidade do lúpulo?', data: 'Ontem, 08:50', curso: 'Análise Sensorial' },
      { id: 'ia2', pergunta: 'Como implementar controle estatístico de processo?', data: '3 dias atrás', curso: 'ISO 9001' },
    ],
  },
  '5': {
    id: '5',
    nome: 'Bruno Alves',
    cargo: 'Técnico de TI | TI — Infraestrutura',
    email: 'bruno.alves@heineken.com',
    matricula: '#10005-B',
    dataAdmissao: '12 de Novembro, 2023',
    unidade: 'TI — Infraestrutura SP',
    cursos: [
      { id: 'c1', titulo: 'Segurança da Informação', categoria: 'TI', progresso: 12, ativo: true, ultimoAcesso: '3 dias atrás' },
    ],
    certificados: [],
    atividades: [
      { id: 'a1', descricao: 'Iniciou curso "Segurança da Informação"', data: '3 dias atrás', tipo: 'acesso' },
    ],
    historicoIA: [],
  },
  '6': {
    id: '6',
    nome: 'Fernanda Rocha',
    cargo: 'Coordenadora | Marketing — Digital',
    email: 'fernanda.rocha@heineken.com',
    matricula: '#10006-F',
    dataAdmissao: '01 de Fevereiro, 2022',
    unidade: 'Marketing — Digital SP',
    cursos: [
      { id: 'c1', titulo: 'Marketing Digital Heineken', categoria: 'Marketing', progresso: 100, ativo: true, ultimoAcesso: '05 Mai 2024' },
      { id: 'c2', titulo: 'Estratégia de Marca', categoria: 'Branding', progresso: 85, ativo: true, ultimoAcesso: 'Hoje' },
      { id: 'c3', titulo: 'Análise de Dados', categoria: 'Analytics', progresso: 60, ativo: true, ultimoAcesso: '2 dias atrás' },
    ],
    certificados: [
      { id: 'cert1', titulo: 'Marketing Digital', emitidoEm: 'Mai/2024' },
      { id: 'cert2', titulo: 'Estratégia de Marca', emitidoEm: 'Abr/2024' },
    ],
    atividades: [
      { id: 'a1', descricao: 'Concluiu "Marketing Digital Heineken"', data: 'Hoje, às 08:45', tipo: 'conclusao' },
      { id: 'a2', descricao: 'Certificado emitido: Marketing Digital', data: 'Hoje, às 08:50', tipo: 'certificado' },
      { id: 'a3', descricao: 'Acessou módulo "Análise de Dados"', data: '2 dias atrás', tipo: 'acesso' },
    ],
    historicoIA: [
      { id: 'ia1', pergunta: 'Como medir o ROI de campanhas digitais?', data: 'Hoje, 08:20', curso: 'Análise de Dados' },
      { id: 'ia2', pergunta: 'Quais são as tendências de marketing para cerveja premium?', data: '2 dias atrás', curso: 'Estratégia de Marca' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[1.2px]">{label}</p>
      <p className="text-[15px] font-medium text-[#1A1C1C]">{value}</p>
    </div>
  );
}

function CursoItem({ curso }: { curso: Curso }) {
  return (
    <div className={`border-b border-[#eee] last:border-0 pb-6 last:pb-0 flex flex-col gap-2 ${!curso.ativo ? 'opacity-60' : ''}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <p className="text-[17px] font-bold text-[#1A1C1C] leading-snug">{curso.titulo}</p>
          <p className="text-[13px] text-gray-500">{curso.categoria}</p>
        </div>
        <div className="relative shrink-0 mt-1">
          <div className={`w-[44px] h-[24px] rounded-full ${curso.ativo ? 'bg-[#007042]' : 'bg-gray-200'}`} />
          <div className={`absolute top-[2px] size-[20px] rounded-full bg-white shadow-sm transition-transform ${curso.ativo ? 'translate-x-[22px]' : 'translate-x-[2px]'}`} />
        </div>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-heineken-green to-heineken-dark"
          style={{ width: `${curso.progresso}%` }}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-bold text-[#007042] uppercase tracking-[0.8px]">
          {curso.ativo ? `${curso.progresso}% CONCLUÍDO` : 'ACESSO BLOQUEADO'}
        </p>
        <p className="text-[11px] text-gray-400 uppercase tracking-[0.8px]">
          ÚLTIMO ACESSO: {curso.ultimoAcesso.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

function AtividadeItem({ atividade }: { atividade: AtividadeRecente }) {
  const dotColor =
    atividade.tipo === 'conclusao' ? 'bg-[#007042]' :
    atividade.tipo === 'certificado' ? 'bg-[#AC1A00]' : 'bg-gray-300';

  return (
    <div className="relative flex items-start pl-8">
      <div className={`absolute left-0 top-1 size-[14px] rounded-full border-[3px] border-white shadow-sm ${dotColor}`} />
      <div className="flex flex-col gap-0.5">
        <p className="text-[14px] font-semibold text-[#1A1C1C] leading-snug">{atividade.descricao}</p>
        <p className="text-[11px] text-gray-400">{atividade.data}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PerfilAlunoAdminPage({ params }: PageProps) {
  const { id } = use(params);
  const [modalAberto, setModalAberto] = useState(false);

  const aluno = mockDatabase[id] ?? mockDatabase['1'];

  return (
    <div className="p-8 max-w-[1280px] mx-auto w-full space-y-10">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400">
        <Link
          href="/admin/usuarios"
          className="flex items-center gap-1.5 text-[#007042] font-semibold hover:text-[#005a35] transition-colors"
        >
          <ArrowLeft size={14} />
          Usuários
        </Link>
        <ChevronRight size={13} className="text-gray-300" />
        <span className="text-gray-500 font-medium">{aluno.nome}</span>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="flex items-center gap-6">
        {/* Avatar */}
        <div className="relative shrink-0 w-16 h-16">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#007042] to-[#005a35] flex items-center justify-center shadow-md">
            <span className="text-white font-black font-serif text-2xl">
              {aluno.nome.charAt(0)}
            </span>
          </div>
          <div className="absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full bg-[#AC1A00] flex items-center justify-center shadow-sm">
            <Star size={10} className="text-white fill-white" />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <Star size={12} className="text-[#AC1A00] fill-[#AC1A00]" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[1.4px]">Perfil do Aluno</span>
          </div>
          <h1 className="text-[32px] font-black font-serif text-[#1A1C1C] leading-tight tracking-tight truncate">
            {aluno.nome}
          </h1>
          <p className="text-[14px] text-gray-500">{aluno.cargo}</p>
        </div>

        {/* Action */}
        <div className="shrink-0">
          <button
            onClick={() => setModalAberto(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#007042] text-white text-[13px] font-bold rounded-lg shadow-[0_4px_16px_rgba(0,112,66,0.25)] hover:bg-[#005a35] transition-colors"
          >
            <Settings size={14} />
            Gerenciar Usuário
          </button>
        </div>
      </section>

      {/* ── BENTO GRID ───────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">

        {/* ── LEFT COLUMN ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-5">

          {/* Dados Pessoais */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,34,0,0.05)] flex flex-col gap-5">
            <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
              <BookOpen size={15} className="text-[#007042]" />
              <h2 className="text-[15px] font-bold font-serif text-[#1A1C1C]">Dados Pessoais</h2>
            </div>
            <div className="flex flex-col gap-4">
              <InfoField label="E-mail Corporativo" value={aluno.email} />
              <InfoField label="Matrícula" value={aluno.matricula} />
              <InfoField label="Data de Admissão" value={aluno.dataAdmissao} />
              <InfoField label="Unidade" value={aluno.unidade} />
            </div>
          </div>

          {/* Certificados */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,34,0,0.05)] flex flex-col gap-4 relative overflow-hidden">
            <h2 className="text-[15px] font-bold font-serif text-[#1A1C1C]">Certificados</h2>
            {aluno.certificados.length === 0 ? (
              <p className="text-[13px] text-gray-400">Nenhum certificado emitido.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {aluno.certificados.map((cert) => (
                  <div key={cert.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <Award size={15} className="text-[#007042] shrink-0" />
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <p className="text-[13px] font-bold text-[#1A1C1C] leading-snug">{cert.titulo}</p>
                      <p className="text-[11px] text-gray-400">Emitido em {cert.emitidoEm}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Histórico de IA */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,34,0,0.05)] flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Bot size={15} className="text-[#007042]" />
              <h2 className="text-[15px] font-bold font-serif text-[#1A1C1C]">Histórico de IA</h2>
            </div>
            {aluno.historicoIA.length === 0 ? (
              <p className="text-[13px] text-gray-400">Nenhuma interação com a IA registrada.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {aluno.historicoIA.map((item) => (
                  <div key={item.id} className="flex flex-col gap-1 p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-start gap-2">
                      <MessageSquare size={12} className="text-[#007042] shrink-0 mt-0.5" />
                      <p className="text-[12px] font-medium text-[#1A1C1C] leading-snug">{item.pergunta}</p>
                    </div>
                    <div className="flex items-center gap-2 pl-5">
                      <Clock size={10} className="text-gray-400" />
                      <p className="text-[10px] text-gray-400">{item.data} · {item.curso}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT COLUMN ────────────────────────────────────────────── */}
        <div className="flex flex-col gap-5">

          {/* Cursos com Acesso */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,34,0,0.05)] flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-bold font-serif text-[#1A1C1C]">Cursos com Acesso</h2>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[1px]">Status: Ativo</span>
            </div>
            <div className="flex flex-col gap-6">
              {aluno.cursos.map((curso) => (
                <CursoItem key={curso.id} curso={curso} />
              ))}
            </div>
          </div>

          {/* Atividade Recente */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,34,0,0.05)] flex flex-col gap-6">
            <h2 className="text-[20px] font-bold font-serif text-[#1A1C1C]">Atividade Recente</h2>
            <div className="relative flex flex-col gap-6">
              <div className="absolute left-[6px] top-2 bottom-2 w-[2px] bg-gray-100" />
              {aluno.atividades.map((atividade) => (
                <AtividadeItem key={atividade.id} atividade={atividade} />
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                label: 'Cursos Ativos',
                value: aluno.cursos.filter((c) => c.ativo).length,
                icon: <BookOpen size={18} className="text-[#007042]" />,
                bg: 'bg-green-50',
              },
              {
                label: 'Certificados',
                value: aluno.certificados.length,
                icon: <Award size={18} className="text-amber-600" />,
                bg: 'bg-amber-50',
              },
              {
                label: 'Progresso Médio',
                value: `${Math.round(
                  aluno.cursos.filter((c) => c.ativo).reduce((acc, c) => acc + c.progresso, 0) /
                  Math.max(aluno.cursos.filter((c) => c.ativo).length, 1)
                )}%`,
                icon: <CheckCircle2 size={18} className="text-blue-600" />,
                bg: 'bg-blue-50',
              },
            ].map(({ label, value, icon, bg }) => (
              <div key={label} className={`${bg} rounded-2xl p-5 flex flex-col gap-2`}>
                <div>{icon}</div>
                <p className="text-[28px] font-black text-[#1A1C1C] leading-none">{value}</p>
                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.8px]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ModalGerenciarUsuario
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        usuario={{ nome: aluno.nome, email: aluno.email }}
      />
    </div>
  );
}
