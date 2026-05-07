// src/components/AddTalentModal.tsx
'use client';
import { useState } from 'react';

export default function AddTalentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isActive, setIsActive] = useState(true);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-[30px] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-[#bd2c1a] p-2 text-white text-xs">★</div>
        
        <div className="p-10">
          <h2 className="text-3xl font-serif font-bold text-[#1a1a1a] mb-1">Adicionar Novo Talento</h2>
          <p className="text-sm text-slate-400 mb-8">Inicie o processo de integração corporativa UHNK.</p>

          <form className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-[#3d6e35] uppercase mb-2">Nome Completo</label>
              <input type="text" placeholder="Ex: Jean-François van Boxmeer" className="w-full bg-[#f8f9f8] border-none p-4 rounded-xl text-sm" />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#3d6e35] uppercase mb-2">E-mail Corporativo</label>
              <input type="email" placeholder="nome@heineken.com" className="w-full bg-[#f8f9f8] border-none p-4 rounded-xl text-sm" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-[#3d6e35] uppercase mb-2">Senha Temporária</label>
                <div className="bg-[#f8f9f8] p-4 rounded-xl text-sm font-bold text-slate-500 flex justify-between">
                  <span>HKN-2024-TMP</span> 👁️
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[#3d6e35] uppercase mb-2">Status Inicial</label>
                <div 
                  onClick={() => setIsActive(!isActive)}
                  className="bg-[#f8f9f8] p-4 rounded-xl flex items-center gap-3 cursor-pointer"
                >
                  <div className={`w-8 h-4 rounded-full relative transition-colors ${isActive ? 'bg-[#00b140]' : 'bg-slate-300'}`}>
                    <div className={`absolute top-1 w-2 h-2 bg-white rounded-full transition-all ${isActive ? 'right-1' : 'left-1'}`}></div>
                  </div>
                  <span className="text-xs font-bold text-slate-700">{isActive ? 'Ativo' : 'Inativo'}</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#3d6e35] uppercase mb-2">Função / Perfil</label>
              <select className="w-full bg-[#f8f9f8] border-none p-4 rounded-xl text-sm appearance-none cursor-pointer">
                <option>Usuário (Colaborador)</option>
                <option>Gestor de Unidade</option>
              </select>
            </div>

            <div className="flex gap-4 pt-6">
              <button type="button" onClick={onClose} className="flex-1 py-4 border border-slate-200 rounded-xl font-bold text-slate-400">Cancelar</button>
              <button type="button" className="flex-1 py-4 bg-[#24522e] text-white rounded-xl font-bold hover:bg-[#004d2c] transition">Confirmar Cadastro</button>
            </div>
          </form>
        </div>
        <div className="bg-[#f8f9f8] py-4 text-center text-[9px] font-bold text-slate-400 uppercase tracking-widest border-t">
          🛡️ Segurança Heineken UHNK em conformidade com LGPD
        </div>
      </div>
    </div>
  );
}