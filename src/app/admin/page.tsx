// src/app/admin/page.tsx
'use client';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import AddTalentModal from '../../components/AddTalentModal';

export default function AdminPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F4F7F5]">
      <Sidebar />
      <main className="flex-1 p-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-serif text-[#004d2c] font-bold">Gestão de Talentos</h1>
            <p className="text-slate-400 mt-2">Administre o acesso dos colaboradores.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#00b140] text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-[#008f34] transition"
          >
            + Novo Talento
          </button>
        </header>

        <div className="bg-white rounded-[40px] p-20 border border-dashed border-slate-200 text-center text-slate-300">
          Selecione um talento para gerenciar ou adicione um novo.
        </div>
      </main>

      <AddTalentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}