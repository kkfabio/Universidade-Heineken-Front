'use client';

import * as React from 'react';
import { X, Layers, AlignLeft, Clock, CheckCircle2 } from 'lucide-react';
import type { Modulo } from '@/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  moduloExistente?: Pick<Modulo, 'id' | 'titulo' | 'descricao' | 'duracao'> | null;
  onSalvar?: (dados: { titulo: string; descricao: string; duracao: number }) => void;
}

export function ModalNovoModulo({ isOpen, onClose, moduloExistente, onSalvar }: Props) {
  const isEdit = !!moduloExistente;

  const [titulo,   setTitulo]   = React.useState(moduloExistente?.titulo   ?? '');
  const [descricao, setDescricao] = React.useState(moduloExistente?.descricao ?? '');
  const [duracao,  setDuracao]  = React.useState(moduloExistente?.duracao  ?? 0);

  React.useEffect(() => {
    setTitulo(moduloExistente?.titulo   ?? '');
    setDescricao(moduloExistente?.descricao ?? '');
    setDuracao(moduloExistente?.duracao  ?? 0);
  }, [moduloExistente, isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSalvar?.({ titulo, descricao, duracao });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={onClose} />

      <div
        className="relative w-full max-w-[520px] bg-white rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.25)] border border-[#BECAB6] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-8 pt-7 pb-5 border-b border-[#BECAB6]/30 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#007042]/10 flex items-center justify-center shrink-0">
              <Layers size={20} className="text-[#007042]" />
            </div>
            <div>
              <h2 className="text-xl font-black font-serif text-[#1A1C1C]">
                {isEdit ? 'Editar Módulo' : 'Novo Módulo'}
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">Defina o título e configurações do módulo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#1A1C1C] p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form className="p-8 space-y-5" onSubmit={handleSubmit}>
          {/* Título */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
              <Layers size={13} /> Título do Módulo
            </label>
            <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
              <input
                type="text"
                required
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
                placeholder="Ex: Módulo 1: O Papel do Líder"
                className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
              />
            </div>
          </div>

          {/* Descrição */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
              <AlignLeft size={13} /> Descrição (opcional)
            </label>
            <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
              <textarea
                rows={3}
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                placeholder="Descreva brevemente o conteúdo deste módulo..."
                className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-sm resize-none"
              />
            </div>
          </div>

          {/* Duração */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
              <Clock size={13} /> Duração Estimada (horas)
            </label>
            <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow max-w-[160px]">
              <input
                type="number"
                min={1}
                required
                value={duracao || ''}
                onChange={e => setDuracao(Number(e.target.value))}
                placeholder="Ex: 10"
                className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border-2 border-[#BECAB6] text-[#3F4A3A] font-bold text-sm rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-[#007042] hover:bg-[#005a35] text-white font-bold text-sm rounded-xl shadow-[0_8px_24px_rgba(0,112,66,0.2)] transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={16} />
              {isEdit ? 'Salvar Módulo' : 'Criar Módulo'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
