import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#007042] text-white p-6 flex flex-col hidden md:flex">
      <div className="mb-10">
        <h1 className="text-2xl font-bold italic">HEINEKEN</h1>
        <p className="text-xs opacity-70">Universidade Heineken</p>
      </div>
      
      <nav className="flex-1 space-y-4">
        <a href="/dashboard" className="block p-2 hover:bg-[#005a35] rounded">Início</a>
        <a href="/cursos" className="block p-2 hover:bg-[#005a35] rounded">Meus Cursos</a>
        <a href="/biblioteca" className="block p-2 hover:bg-[#005a35] rounded">Biblioteca</a>
        <a href="/certificados" className="block p-2 hover:bg-[#005a35] rounded">Certificados</a>
      </nav>

      <div className="mt-auto pt-6 border-t border-[#008a52]">
        <a href="/configuracoes" className="block p-2 hover:bg-[#005a35] rounded">Configurações</a>
        <a href="/login" className="block p-2 text-red-300 hover:text-red-100">Sair</a>
      </div>
    </aside>
  );
}
