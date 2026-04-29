// src/components/AddTalentModal.tsx
'use client';
import { useState } from 'react';

interface AddTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTalentModal: React.FC<AddTalentModalProps> = ({ isOpen, onClose }) => {
  // Estado para o Status clicável
  const [isActive, setIsActive] = useState(true);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Header com a Estrela do Figma */}
        <div className="relative p-8 text-center border-b border-slate-50">
          <div className="absolute top-6 right-8 text-[#E32D2D] text-xl">★</div>
          <h2 className="text-2xl font-serif font-bold text-[#004d2c]">Adicionar Novo Talento</h2>
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mt-2">Cadastro Corporativo UHNK</p>
        </div>

        <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Nome */}
          <div>
            <label className="block text-[9px] font-black text-slate-300 uppercase tracking-tighter mb-2">Nome Completo</label>
            <input type="text" placeholder="Ex: Jean-François van Boxmeer" className="w-full bg-slate-50 border-none p-4 rounded-2xl text-sm focus:ring-2 focus:ring-[#00b140] transition" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[9px] font-black text-slate-300 uppercase tracking-tighter mb-2">E-mail Corporativo</label>
            <input type="email" placeholder="nome@heineken.com.br" className="w-full bg-slate-50 border-none p-4 rounded-2xl text-sm focus:ring-2 focus:ring-[#00b140]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Função/Perfil (NOVO) */}
            <div>
              <label className="block text-[9px] font-black text-slate-300 uppercase tracking-tighter mb-2">Função | Perfil</label>
              <select className="w-full bg-slate-50 border-none p-4 rounded-2xl text-xs font-bold text-slate-600 appearance-none cursor-pointer">
                <option>Consultor Sênior</option>
                <option>Gestor de Unidade</option>
                <option>Analista de Logística</option>
                <option>Trade Marketing</option>
              </select>
            </div>

            {/* Status Clicável (NOVO) */}
            <div>
              <label className="block text-[9px] font-black text-slate-300 uppercase tracking-tighter mb-2">Status da Conta</label>
              <div 
                onClick={() => setIsActive(!isActive)}
                className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl cursor-pointer hover:bg-slate-100 transition group"
              >
                <span className={`text-[10px] font-bold ${isActive ? 'text-[#00b140]' : 'text-slate-400'}`}>
                  {isActive ? 'ATIVO' : 'INATIVO'}
                </span>
                <div className={`w-8 h-4 rounded-full relative transition-colors ${isActive ? 'bg-[#00b140]' : 'bg-slate-300'}`}>
                  <div className={`absolute top-1 w-2 h-2 bg-white rounded-full transition-all ${isActive ? 'right-1' : 'left-1'}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Senha Temporária */}
          <div>
            <label className="block text-[9px] font-black text-slate-300 uppercase tracking-tighter mb-2">Senha Temporária de Acesso</label>
            <div className="bg-slate-100 p-4 rounded-2xl flex justify-between items-center">
              <code className="text-xs font-bold text-slate-500">HKN-2026-TMP</code>
              <span className="text-[10px] text-slate-300 cursor-pointer hover:text-[#00b140]">Copiar</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-3 pt-6">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 py-4 text-xs font-bold text-slate-400 hover:text-slate-600 transition"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className="flex-1 py-4 bg-[#24522e] text-white text-xs font-bold rounded-2xl shadow-lg shadow-[#24522e]/20 hover:bg-[#004d2c] transition active:scale-95"
            >
              Confirmar Cadastro
            </button>
          </div>
        </form>
        
        <p className="text-[8px] text-center pb-6 text-slate-300 font-bold tracking-[0.2em]">🛡️ SECURITY PROTOCOL • LGPD COMPLIANT</p>
      </div>
    </div>
  );
};

export default AddTalentModal;