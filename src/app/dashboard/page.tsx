'use client';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#F4F7F5]">
      <Sidebar />
      
      <main className="flex-1 p-12">
        {/* Navbar Superior */}
        <nav className="flex justify-between items-center mb-12">
          <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 flex items-center gap-3 w-96 shadow-sm">
            <span className="text-slate-300">🔍</span>
            <input type="text" placeholder="Procurar por cursos ou pessoas..." className="border-none bg-transparent text-sm w-full focus:ring-0" />
          </div>
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 cursor-pointer">🔔</div>
            <div className="flex items-center gap-3">
              <div className="text-right"><p className="text-xs font-bold text-slate-700">Admin Mode</p><p className="text-[9px] text-[#00b140] font-black uppercase">Heineken Brasil</p></div>
              <div className="w-10 h-10 bg-[#004d2c] rounded-xl"></div>
            </div>
          </div>
        </nav>

        {/* Header João Silva */}
        <header className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-6xl font-serif text-[#004d2c] font-bold tracking-tight">João Silva</h1>
            <p className="text-slate-400 text-lg mt-2 font-medium">Consultor de Vendas Sênior | Região Sudeste</p>
          </div>
          <div className="relative">
            <div className="w-44 h-44 bg-slate-900 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img src="/api/placeholder/200/200" alt="Perfil" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-2 -right-2 bg-[#E32D2D] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white">★</div>
          </div>
        </header>

        {/* Grid Principal */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 space-y-8">
            {/* Card Dados Pessoais */}
            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-50">
              <h3 className="text-[#004d2c] font-black text-[10px] tracking-widest uppercase mb-8">📋 Dados Pessoais</h3>
              <div className="space-y-6">
                <div><p className="text-slate-300 font-black text-[9px] uppercase">E-mail</p><p className="font-bold text-slate-700 text-sm">joao.silva@heineken.com.br</p></div>
                <div><p className="text-slate-300 font-black text-[9px] uppercase">Matrícula</p><p className="font-bold text-slate-700 text-sm">#38231-K</p></div>
              </div>
            </section>

            {/* Card Certificados (NOVO) */}
            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-50">
              <h3 className="text-[#004d2c] font-black text-[10px] tracking-widest uppercase mb-6">🏅 Certificados</h3>
              <div className="flex gap-3">
                 <div className="w-12 h-12 bg-[#00b140]/10 rounded-xl flex items-center justify-center text-xl">🎓</div>
                 <div className="w-12 h-12 bg-[#004d2c]/10 rounded-xl flex items-center justify-center text-xl">🏆</div>
                 <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-300 text-xs font-bold">+2</div>
              </div>
            </section>
          </div>

          <div className="col-span-8 space-y-8">
            {/* Card Atividades Recentes (NOVO) */}
            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-50">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-[#004d2c] font-bold text-xl">Atividade Recente</h3>
                <button className="text-[10px] font-black text-[#00b140] uppercase tracking-widest">Ver Tudo</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <span className="bg-white p-2 rounded-lg shadow-sm">📝</span>
                    <div><p className="text-sm font-bold text-slate-700">Concluiu "Segurança no Trabalho"</p><p className="text-[10px] text-slate-400">Há 2 horas</p></div>
                  </div>
                  <span className="text-[#00b140] font-bold text-xs">+50 XP</span>
                </div>
              </div>
            </section>

            {/* Card Cursos */}
            <section className="bg-[#24522e] p-10 rounded-[40px] shadow-xl text-white">
               <div className="flex justify-between mb-8"><h3 className="font-bold text-xl text-[#00b140]">Curso em Foco</h3><span className="text-[10px] font-bold opacity-50">85% COMPLETE</span></div>
               <p className="text-2xl font-serif font-bold mb-6">Cultura de Qualidade Heineken</p>
               <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden"><div className="bg-[#00b140] h-full w-[85%]"></div></div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}