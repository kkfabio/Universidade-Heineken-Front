'use client';

import * as React from 'react';
import { X, Play, FileText, AlignLeft, Clock, Link2, CheckCircle2 } from 'lucide-react';
import type { Aula } from '@/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  aulaExistente?: Pick<Aula, 'id' | 'titulo' | 'tipo' | 'duracao' | 'url'> | null;
  onSalvar?: (dados: Omit<Aula, 'id' | 'ordem'>) => void;
}

export function ModalNovaAula({ isOpen, onClose, aulaExistente, onSalvar }: Props) {
  const isEdit = !!aulaExistente;

  const [titulo, setTitulo] = React.useState(aulaExistente?.titulo ?? '');
  const [tipo,   setTipo]   = React.useState<'video' | 'documento'>(aulaExistente?.tipo ?? 'video');
  const [duracao, setDuracao] = React.useState(aulaExistente?.duracao ?? 0);
  const [url,    setUrl]    = React.useState(aulaExistente?.url ?? '');

  React.useEffect(() => {
    setTitulo(aulaExistente?.titulo   ?? '');
    setTipo(aulaExistente?.tipo     ?? 'video');
    setDuracao(aulaExistente?.duracao  ?? 0);
    setUrl(aulaExistente?.url      ?? '');
  }, [aulaExistente, isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSalvar?.({ titulo, tipo, duracao, url });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={onClose} />

      <div
        className="relative w-full max-w-[540px] bg-white rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.25)] border border-[#BECAB6] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-8 pt-7 pb-5 border-b border-[#BECAB6]/30 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#007042]/10 flex items-center justify-center shrink-0">
              <Play size={18} className="text-[#007042]" />
            </div>
            <div>
              <h2 className="text-xl font-black font-serif text-[#1A1C1C]">
                {isEdit ? 'Editar Aula' : 'Nova Aula'}
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">Adicione um vídeo ou documento ao módulo</p>
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

          {/* Tipo de conteúdo */}
          <div className="space-y-2">
            <span className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] block">
              Tipo de Conteúdo
            </span>
            <div className="grid grid-cols-2 gap-3">
              {(['video', 'documento'] as const).map(t => {
                const Icon = t === 'video' ? Play : FileText;
                const label = t === 'video' ? 'Vídeo Aula' : 'Documento';
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTipo(t)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 font-bold text-sm transition-all ${
                      tipo === t
                        ? 'border-[#007042] bg-[#E5F5E9] text-[#007042]'
                        : 'border-[#BECAB6]/40 bg-[#F4F4F4] text-[#3F4A3A] hover:border-[#007042]/30'
                    }`}
                  >
                    <Icon size={16} />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Título */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
              <AlignLeft size={13} /> Título da Aula
            </label>
            <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
              <input
                type="text"
                required
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
                placeholder={tipo === 'video' ? 'Ex: Introdução à Liderança Situacional' : 'Ex: Guia de Boas Práticas.pdf'}
                className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
              />
            </div>
          </div>

          {/* URL / Link */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
              <Link2 size={13} /> {tipo === 'video' ? 'URL do Vídeo' : 'URL do Documento'}
            </label>
            <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
              <input
                type="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder={tipo === 'video' ? 'https://youtube.com/...' : 'https://drive.google.com/...'}
                className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-sm"
              />
            </div>
          </div>

          {/* Duração */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
              <Clock size={13} /> Duração Estimada (minutos)
            </label>
            <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow max-w-[180px]">
              <input
                type="number"
                min={1}
                value={duracao || ''}
                onChange={e => setDuracao(Number(e.target.value))}
                placeholder="Ex: 45"
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
              {isEdit ? 'Salvar Aula' : 'Adicionar Aula'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
