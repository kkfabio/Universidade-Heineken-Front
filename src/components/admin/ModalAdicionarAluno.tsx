'use client';

import * as React from 'react';
import { X, User, Mail, Briefcase, CheckCircle2, UserPlus } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdicionarAluno?: (dados: { nome: string; email: string; funcao: string }) => void;
}

export function ModalAdicionarAluno({ isOpen, onClose, onAdicionarAluno }: Props) {
  const [nome,   setNome]   = React.useState('');
  const [email,  setEmail]  = React.useState('');
  const [funcao, setFuncao] = React.useState('');

  React.useEffect(() => {
    if (isOpen) { setNome(''); setEmail(''); setFuncao(''); }
  }, [isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onAdicionarAluno?.({ nome, email, funcao });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={onClose} />

      <div
        className="relative w-full max-w-[480px] bg-white rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.25)] border border-[#BECAB6] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Red star decorator */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-0 right-0 w-12 h-12 bg-[#AC1A00] hover:bg-[#8B1400] flex items-center justify-center rounded-bl-2xl z-10 transition-colors cursor-pointer"
        >
          <UserPlus size={18} className="text-white" />
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-[#BECAB6]/30 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-black font-serif text-[#1A1C1C]">Adicionar Aluno</h2>
            <p className="text-xs text-gray-500 mt-1">Matricule um aluno neste curso</p>
          </div>
          <button
            onClick={onClose}
            className="mt-1 mr-14 text-gray-400 hover:text-[#1A1C1C] p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form className="p-8 space-y-5" onSubmit={handleSubmit}>
          {/* Nome */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
              <User size={13} /> Nome Completo
            </label>
            <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
              <input
                type="text"
                required
                value={nome}
                onChange={e => setNome(e.target.value)}
                placeholder="Ex: Maria da Silva"
                className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
              />
            </div>
          </div>

          {/* E-mail */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
              <Mail size={13} /> E-mail Corporativo
            </label>
            <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="nome@heineken.com"
                className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
              />
            </div>
          </div>

          {/* Função */}
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
              <Briefcase size={13} /> Função
            </label>
            <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
              <input
                type="text"
                value={funcao}
                onChange={e => setFuncao(e.target.value)}
                placeholder="Ex: Analista de Vendas"
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
              <CheckCircle2 size={16} /> Matricular Aluno
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
