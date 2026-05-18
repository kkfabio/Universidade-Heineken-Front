'use client';

import * as React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { Star, ChevronDown, User, Mail, Key, Briefcase, CheckCircle2, Eye, EyeOff } from 'lucide-react';

interface ModalNovoUsuarioProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalNovoUsuario({ isOpen, onClose }: ModalNovoUsuarioProps) {
  const [senhaVisivel, setSenhaVisivel] = React.useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-[576px] bg-white rounded-2xl shadow-[0_32px_64px_rgba(0,34,0,0.15)] border border-[#BECAB6] overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Red Star Decorator (Heritage Branding) */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-0 right-0 w-14 h-14 bg-[#AC1A00] hover:bg-[#8B1400] flex items-center justify-center rounded-bl-2xl shadow-sm z-10 transition-colors cursor-pointer"
        >
          <Star className="text-white fill-white" size={24} />
        </button>

        {/* Content Container */}
        <div className="flex-1 overflow-y-auto p-10 pb-14 space-y-8">
          
          {/* Header */}
          <div className="space-y-2 pr-12">
            <h2 id="modal-title" className="text-3xl font-black font-serif text-[#1A1C1C]">Adicionar Usuário</h2>
            <p className="text-sm text-gray-500 font-sans">
              Preencha os dados abaixo para cadastrar um novo aluno na plataforma.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6 font-sans" onSubmit={(e) => e.preventDefault()}>
            {/* Nome Completo */}
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                <User size={14} />
                Nome Completo
              </label>
              <div className="bg-[#F4F4F4] rounded-lg px-4 py-[15px] focus-within:ring-2 focus-within:ring-[#007042] transition-shadow flex items-center gap-3">
                <input 
                  type="text" 
                  placeholder="Ex: Jean-François van Boxmeer"
                  className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
                />
              </div>
            </div>

            {/* E-mail Corporativo */}
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                <Mail size={14} />
                E-mail Corporativo
              </label>
              <div className="bg-[#F4F4F4] rounded-lg px-4 py-[15px] focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
                <input 
                  type="email" 
                  placeholder="nome@heineken.com"
                  className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
                />
              </div>
            </div>

            {/* Grid for Password and Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Senha Temporária */}
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                  <Key size={14} />
                  Senha Temporária
                </label>
                <div className="bg-[#F4F4F4] rounded-lg px-4 py-[15px] focus-within:ring-2 focus-within:ring-[#007042] transition-shadow flex items-center gap-2">
                  <input 
                    type={senhaVisivel ? 'text' : 'password'}
                    placeholder="Gerar automaticamente"
                    className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setSenhaVisivel(v => !v)}
                    className="text-[#6F7B69] hover:text-[#1A1C1C] transition-colors shrink-0"
                    aria-label={senhaVisivel ? 'Ocultar senha' : 'Mostrar senha'}
                  >
                    {senhaVisivel ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Status Inicial */}
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] block">
                  Status Inicial
                </label>
                <div className="bg-[#F4F4F4] rounded-lg px-4 py-[14px] flex items-center justify-between">
                  <span className="text-[#1A1C1C] font-medium text-base flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#007042]" />
                    Ativo
                  </span>
                  <Switch.Root
                    className="w-[42px] h-[24px] bg-[#BECAB6] data-[state=checked]:bg-[#007042] rounded-full relative outline-none cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#007042]"
                    id="status-mode"
                    defaultChecked
                  >
                    <Switch.Thumb className="block w-[20px] h-[20px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] shadow-sm" />
                  </Switch.Root>
                </div>
              </div>
            </div>

            {/* Função / Perfil */}
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                <Briefcase size={14} />
                Função / Perfil
              </label>
              <div className="relative bg-[#F4F4F4] rounded-lg focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
                <select defaultValue="" className="w-full bg-transparent appearance-none outline-none text-[#1A1C1C] font-medium text-base px-4 py-[15px] cursor-pointer">
                  <option value="" disabled className="text-[#6F7B69]">Selecione uma função</option>
                  <option value="operador">Operador de Linha</option>
                  <option value="analista">Analista</option>
                  <option value="coordenador">Coordenador</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="gerente">Gerente</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="text-[#3F4A3A]" size={20} />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <button 
                type="button"
                onClick={onClose}
                className="w-full sm:flex-1 py-[14px] border-2 border-[#BECAB6] text-[#3F4A3A] font-bold text-base rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                className="w-full sm:flex-1 py-[16px] bg-[#007042] text-white font-bold text-base rounded-lg shadow-[0_12px_24px_rgba(0,112,66,0.2)] hover:bg-[#005a35] transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={18} />
                Confirmar Cadastro
              </button>
            </div>
          </form>
        </div>
        
        {/* Footer Tonal Hint */}
        <div className="bg-[#F4F4F4] py-4 flex justify-center items-center mt-auto">
          <div className="w-32 h-1.5 bg-[#DCDCDC] rounded-full" />
        </div>
      </div>
    </div>
  );
}
