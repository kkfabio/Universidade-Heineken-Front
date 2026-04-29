'use client';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import AddTalentModal from '../../components/AddTalentModal';

export default function AdminPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F4F7F5]">
      <Sidebar />
      <main className="flex-1 p-12">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-serif text-[#004d2c] font-bold">Gestão de Talentos</h1>
            <p className="text-slate-400">Administre o acesso dos colaboradores da unidade.</p>
          </div>
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-[#00b140] text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-[#00b140]/20 hover:scale-105 transition"
          >
            + Novo Talento
          </button>
        </header>

        <div className="bg-white rounded-[40px] p-20 shadow-sm border border-slate-50 text-center">
          <p className="text-slate-300 font-medium">Selecione um talento para gerenciar ou adicione um novo.</p>
        </div>
      </main>

      <AddTalentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}