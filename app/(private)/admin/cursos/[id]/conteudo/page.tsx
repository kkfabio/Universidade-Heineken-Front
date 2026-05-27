'use client';

import * as React from 'react';
import {
  PlusCircle, Layers, Play, FileText,
  Edit, Trash2, ChevronDown, Clock, LayoutList, GripVertical, FileSpreadsheet
} from 'lucide-react';
import { ModalNovoModulo } from '@/components/admin/ModalNovoModulo';
import { ModalNovaAula }   from '@/components/admin/ModalNovaAula';
import { ModalNovaProva }  from '@/components/admin/ModalNovaProva';
import type { Modulo, Aula, Prova } from '@/types';

// ── Initial mock data ─────────────────────────────────────────────────────────
const INITIAL_MODULOS: Modulo[] = [
  {
    id: 'm1', titulo: 'Módulo 1: O Papel do Líder',
    descricao: 'Fundamentos da liderança moderna e o papel do líder transformacional.',
    duracao: 10, ordem: 1,
    aulas: [
      { id: 'a1', titulo: 'Introdução à Liderança Situacional', tipo: 'video',    duracao: 30, ordem: 1 },
      { id: 'a2', titulo: 'Guia de Boas Práticas',              tipo: 'documento', duracao: 15, ordem: 2 },
    ],
  },
  {
    id: 'm2', titulo: 'Módulo 2: Comunicação Não-Violenta',
    descricao: 'Técnicas de comunicação empática e resolução de conflitos.',
    duracao: 15, ordem: 2,
    aulas: [
      { id: 'a3', titulo: 'Pilares da CNV', tipo: 'video', duracao: 45, ordem: 1 },
    ],
  },
  {
    id: 'm3', titulo: 'Módulo 3: Feedback Construtivo',
    descricao: '',
    duracao: 15, ordem: 3,
    aulas: [],
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function AulaRow({
  aula,
  onEdit,
  onDelete,
}: {
  aula: Aula;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const Icon = aula.tipo === 'video' ? Play : FileText;
  const color = aula.tipo === 'video' ? 'text-purple-500 bg-purple-50' : 'text-blue-500 bg-blue-50';
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#BECAB6]/30 bg-white hover:border-[#007042]/30 hover:shadow-sm transition-all group/aula">
      <GripVertical size={16} className="text-gray-300 group-hover/aula:text-gray-400 cursor-grab shrink-0" />
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${color}`}>
        <Icon size={14} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#1A1C1C] truncate">{aula.titulo}</p>
        {aula.duracao && (
          <span className="text-xs text-gray-400 font-medium flex items-center gap-1 mt-0.5">
            <Clock size={11} /> {aula.duracao} min
          </span>
        )}
      </div>
      <div className="flex items-center gap-1 opacity-0 group-hover/aula:opacity-100 transition-opacity">
        <button
          onClick={onEdit}
          className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          title="Editar aula"
        >
          <Edit size={15} />
        </button>
        <button
          onClick={onDelete}
          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          title="Excluir aula"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
}

function ProvaRow({
  prova,
  onEdit,
  onDelete,
  isFinal = false,
}: {
  prova: Prova;
  onEdit: () => void;
  onDelete: () => void;
  isFinal?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${isFinal ? 'border-orange-500/30 bg-orange-50/30 hover:border-orange-500/50' : 'border-[#BECAB6]/30 bg-white hover:border-[#007042]/30'} hover:shadow-sm transition-all group/prova`}>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isFinal ? 'text-orange-600 bg-orange-100' : 'text-[#007042] bg-[#007042]/10'}`}>
        <FileSpreadsheet size={14} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#1A1C1C] truncate">{prova.titulo}</p>
        <span className="text-xs text-gray-400 font-medium flex items-center gap-2 mt-0.5">
          <span>{prova.qntdQuestoes} questões</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>Mínimo {prova.pontuacaoMinima}%</span>
        </span>
      </div>
      <div className="flex items-center gap-1 opacity-0 group-hover/prova:opacity-100 transition-opacity">
        <button
          onClick={onEdit}
          className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          title="Editar prova"
        >
          <Edit size={15} />
        </button>
        <button
          onClick={onDelete}
          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          title="Excluir prova"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
}

function ModuloCard({
  modulo,
  onEditModulo,
  onDeleteModulo,
  onAddAula,
  onEditAula,
  onDeleteAula,
  onAddProva,
  onEditProva,
  onDeleteProva,
}: {
  modulo: Modulo;
  onEditModulo: () => void;
  onDeleteModulo: () => void;
  onAddAula: () => void;
  onEditAula: (aula: Aula) => void;
  onDeleteAula: (aulaId: string) => void;
  onAddProva: () => void;
  onEditProva: (prova: Prova) => void;
  onDeleteProva: () => void;
}) {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="border border-[#BECAB6]/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Modulo Header */}
      <div
        className="flex items-center gap-3 px-5 py-4 bg-white cursor-pointer group"
        onClick={() => setOpen(o => !o)}
      >
        <GripVertical size={18} className="text-gray-300 group-hover:text-gray-400 cursor-grab shrink-0" />
        <div className="w-9 h-9 rounded-xl bg-[#007042]/10 flex items-center justify-center shrink-0">
          <Layers size={17} className="text-[#007042]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#1A1C1C] text-sm">{modulo.titulo}</p>
          <div className="flex items-center gap-3 mt-0.5 text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1"><Clock size={11} /> {modulo.duracao}h</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="flex items-center gap-1"><LayoutList size={11} /> {modulo.aulas.length} aulas</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={e => { e.stopPropagation(); onEditModulo(); }}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Editar módulo"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); onDeleteModulo(); }}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            title="Excluir módulo"
          >
            <Trash2 size={16} />
          </button>
          <div className={`w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Expandable Aulas */}
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-1 bg-[#FAFAFA] border-t border-[#BECAB6]/30 space-y-2">
            {modulo.aulas.length > 0 ? (
              modulo.aulas.map(aula => (
                <AulaRow
                  key={aula.id}
                  aula={aula}
                  onEdit={() => onEditAula(aula)}
                  onDelete={() => onDeleteAula(aula.id)}
                />
              ))
            ) : (
              <div className="py-8 border-2 border-dashed border-[#BECAB6]/40 rounded-xl flex flex-col items-center gap-2 text-center">
                <LayoutList size={22} className="text-gray-300" />
                <p className="text-sm font-semibold text-gray-400">Nenhuma aula adicionada</p>
                <p className="text-xs text-gray-400">Clique em &ldquo;Nova Aula&rdquo; para começar</p>
              </div>
            )}

            {/* Add Aula & Prova */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={onAddAula}
                className="flex-1 py-2.5 border-2 border-dashed border-[#BECAB6]/60 rounded-xl text-sm font-bold text-[#007042] hover:border-[#007042]/50 hover:bg-[#F0F9F4] transition-all flex items-center justify-center gap-2"
              >
                <PlusCircle size={15} /> Nova Aula
              </button>
              {!modulo.prova && (
                <button
                  onClick={onAddProva}
                  className="px-4 py-2.5 border-2 border-dashed border-[#BECAB6]/60 rounded-xl text-sm font-bold text-[#007042] hover:border-[#007042]/50 hover:bg-[#F0F9F4] transition-all flex items-center justify-center gap-2"
                  title="Adicionar Prova do Módulo"
                >
                  <FileSpreadsheet size={15} /> Nova Prova
                </button>
              )}
            </div>

            {modulo.prova && (
              <div className="mt-4 pt-4 border-t border-[#BECAB6]/30">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Avaliação do Módulo</p>
                <ProvaRow
                  prova={modulo.prova}
                  onEdit={() => onEditProva(modulo.prova!)}
                  onDelete={onDeleteProva}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ConteudoPage() {
  const [modulos, setModulos] = React.useState<Modulo[]>(INITIAL_MODULOS);

  // Módulo modal
  const [moduloModal, setModuloModal] = React.useState(false);
  const [moduloEdit, setModuloEdit] = React.useState<Pick<Modulo, 'id' | 'titulo' | 'descricao' | 'duracao'> | null>(null);

  // Aula modal
  const [aulaModal,   setAulaModal]   = React.useState(false);
  const [aulaEdit,    setAulaEdit]    = React.useState<Pick<Aula, 'id' | 'titulo' | 'tipo' | 'duracao' | 'url'> | null>(null);
  const [moduloAlvoId, setModuloAlvoId] = React.useState<string | null>(null);

  // Prova modal
  const [provaModal, setProvaModal] = React.useState(false);
  const [provaEdit, setProvaEdit] = React.useState<Partial<Prova> | null>(null);
  const [tipoProva, setTipoProva] = React.useState<'modulo' | 'curso'>('modulo');
  const [provaFinal, setProvaFinal] = React.useState<Prova | null>(null);

  function openAddModulo() {
    setModuloEdit(null);
    setModuloModal(true);
  }

  function openEditModulo(modulo: Modulo) {
    setModuloEdit({ id: modulo.id, titulo: modulo.titulo, descricao: modulo.descricao, duracao: modulo.duracao });
    setModuloModal(true);
  }

  function deleteModulo(id: string) {
    setModulos(prev => prev.filter(m => m.id !== id));
  }

  function salvarModulo(dados: { titulo: string; descricao: string; duracao: number }) {
    if (moduloEdit) {
      setModulos(prev => prev.map(m => m.id === moduloEdit.id ? { ...m, ...dados } : m));
    } else {
      const next: Modulo = {
        id: `m${Date.now()}`, ordem: modulos.length + 1, aulas: [], ...dados,
      };
      setModulos(prev => [...prev, next]);
    }
  }

  function openAddAula(moduloId: string) {
    setModuloAlvoId(moduloId);
    setAulaEdit(null);
    setAulaModal(true);
  }

  function openEditAula(moduloId: string, aula: Aula) {
    setModuloAlvoId(moduloId);
    setAulaEdit(aula);
    setAulaModal(true);
  }

  function deleteAula(moduloId: string, aulaId: string) {
    setModulos(prev => prev.map(m =>
      m.id === moduloId ? { ...m, aulas: m.aulas.filter(a => a.id !== aulaId) } : m
    ));
  }

  function salvarAula(dados: Omit<Aula, 'id' | 'ordem'>) {
    if (!moduloAlvoId) return;
    if (aulaEdit) {
      setModulos(prev => prev.map(m =>
        m.id === moduloAlvoId
          ? { ...m, aulas: m.aulas.map(a => a.id === aulaEdit.id ? { ...a, ...dados } : a) }
          : m
      ));
    } else {
      const next: Aula = { id: `a${Date.now()}`, ordem: 0, ...dados };
      setModulos(prev => prev.map(m =>
        m.id === moduloAlvoId ? { ...m, aulas: [...m.aulas, { ...next, ordem: m.aulas.length + 1 }] } : m
      ));
    }
  }

  function openAddProvaModulo(moduloId: string) {
    setModuloAlvoId(moduloId);
    setTipoProva('modulo');
    setProvaEdit(null);
    setProvaModal(true);
  }

  function openEditProvaModulo(moduloId: string, prova: Prova) {
    setModuloAlvoId(moduloId);
    setTipoProva('modulo');
    setProvaEdit(prova);
    setProvaModal(true);
  }

  function deleteProvaModulo(moduloId: string) {
    setModulos(prev => prev.map(m => m.id === moduloId ? { ...m, prova: undefined } : m));
  }

  function openAddProvaFinal() {
    setTipoProva('curso');
    setProvaEdit(null);
    setProvaModal(true);
  }

  function openEditProvaFinal(prova: Prova) {
    setTipoProva('curso');
    setProvaEdit(prova);
    setProvaModal(true);
  }

  function deleteProvaFinal() {
    setProvaFinal(null);
  }

  function salvarProva(dados: Omit<Prova, 'id'>) {
    if (tipoProva === 'modulo') {
      if (!moduloAlvoId) return;
      setModulos(prev => prev.map(m => {
        if (m.id === moduloAlvoId) {
          const id = provaEdit ? provaEdit.id! : `p${Date.now()}`;
          return { ...m, prova: { id, ...dados } };
        }
        return m;
      }));
    } else {
      const id = provaEdit ? provaEdit.id! : `p${Date.now()}`;
      setProvaFinal({ id, ...dados });
    }
  }

  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold font-serif text-[#1A1C1C]">Estrutura do Curso</h2>
          <p className="text-xs text-gray-500 mt-0.5">{modulos.length} módulos · {modulos.reduce((s, m) => s + m.aulas.length, 0)} aulas</p>
        </div>
        <button
          onClick={openAddModulo}
          className="flex items-center gap-2 bg-[#007042] hover:bg-[#005a35] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-[0_6px_20px_rgba(0,112,66,0.2)] hover:-translate-y-0.5 transition-all"
        >
          <PlusCircle size={16} /> Novo Módulo
        </button>
      </div>

      {/* Modules List */}
      {modulos.length > 0 ? (
        <div className="space-y-3">
          {modulos.map(modulo => (
            <ModuloCard
              key={modulo.id}
              modulo={modulo}
              onEditModulo={() => openEditModulo(modulo)}
              onDeleteModulo={() => deleteModulo(modulo.id)}
              onAddAula={() => openAddAula(modulo.id)}
              onEditAula={aula => openEditAula(modulo.id, aula)}
              onDeleteAula={aulaId => deleteAula(modulo.id, aulaId)}
              onAddProva={() => openAddProvaModulo(modulo.id)}
              onEditProva={prova => openEditProvaModulo(modulo.id, prova)}
              onDeleteProva={() => deleteProvaModulo(modulo.id)}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 border-2 border-dashed border-[#BECAB6]/50 rounded-2xl flex flex-col items-center gap-3 text-center">
          <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center">
            <Layers size={26} className="text-gray-300" />
          </div>
          <p className="font-bold text-[#1A1C1C] font-serif">Nenhum módulo cadastrado</p>
          <p className="text-sm text-gray-400 max-w-xs">Clique em &ldquo;Novo Módulo&rdquo; para começar a estruturar o conteúdo deste curso.</p>
        </div>
      )}

      {/* Prova Final */}
      <div className="mt-8 pt-6 border-t border-[#BECAB6]/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold font-serif text-[#1A1C1C]">Avaliação Final do Curso</h2>
            <p className="text-xs text-gray-500 mt-0.5">Prova obrigatória para emissão de certificado</p>
          </div>
          {!provaFinal && (
            <button
              onClick={openAddProvaFinal}
              className="flex items-center gap-2 bg-white border border-[#007042] text-[#007042] hover:bg-[#F0F9F4] text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
            >
              <FileSpreadsheet size={16} /> Adicionar Prova Final
            </button>
          )}
        </div>
        
        {provaFinal ? (
          <ProvaRow
            prova={provaFinal}
            onEdit={() => openEditProvaFinal(provaFinal)}
            onDelete={deleteProvaFinal}
            isFinal
          />
        ) : (
          <div className="py-6 border-2 border-dashed border-[#BECAB6]/50 rounded-2xl flex flex-col items-center gap-2 text-center bg-[#FAFAFA]">
            <FileSpreadsheet size={22} className="text-gray-300" />
            <p className="text-sm font-semibold text-gray-400">Nenhuma prova final configurada</p>
          </div>
        )}
      </div>

      {/* Modals */}
      <ModalNovoModulo
        isOpen={moduloModal}
        onClose={() => setModuloModal(false)}
        moduloExistente={moduloEdit}
        onSalvar={salvarModulo}
      />
      <ModalNovaAula
        isOpen={aulaModal}
        onClose={() => setAulaModal(false)}
        aulaExistente={aulaEdit}
        onSalvar={salvarAula}
      />
      <ModalNovaProva
        isOpen={provaModal}
        onClose={() => setProvaModal(false)}
        provaExistente={provaEdit}
        onSalvar={salvarProva}
        tipoProva={tipoProva}
      />
    </div>
  );
}
