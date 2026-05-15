'use client';
import { useState } from 'react';

export default function PerfilPage() {
  const [cursos] = useState([
    { id: 1, nome: "Cultura de Qualidade Heineken", sub: "Módulo Avançado", prog: 85, status: true, tempo: "HOJE" },
    { id: 2, nome: "Gestão de PDV Digital", sub: "Transformação B2B", prog: 42, status: true, tempo: "3 DIAS ATRÁS" },
    { id: 3, nome: "Liderança em Tempos de Mudança", sub: "Soft Skills", prog: 0, status: false, tempo: "NUNCA ACESSADO" }
  ]);

  return (
    <div className="bg-[#F8FAF9] text-[#1A1A1A] min-h-full">
      <main className="py-12 px-12 max-w-[1500px] w-full mx-auto">

        {/* Header João Silva */}
        <header className="flex justify-between items-start mb-14 relative">
          <div className="relative">
            <span className="text-8xl font-serif text-slate-100 absolute -top-12 -left-6 pointer-events-none opacity-70 select-none">01</span>
            <h1 className="text-5xl font-serif font-bold relative z-10 tracking-tight text-[#1a1a1a]">João Silva</h1>
            <p className="text-slate-400 text-lg mt-2 font-medium tracking-tight">Consultor de Vendas Sênior | Região Sudeste</p>

            <div className="flex gap-4 mt-8">
              <button className="bg-[#24522e] text-white px-7 py-2.5 rounded-xl font-bold text-xs shadow-lg hover:bg-[#004d2c] transition-all transform hover:-translate-y-0.5">
                Gerenciar Acessos
              </button>
              <button className="bg-white border border-slate-200 text-[#3d6e35] px-7 py-2.5 rounded-xl font-bold text-xs hover:shadow-md transition-all">
                Ver Histórico de IA
              </button>
            </div>
          </div>

          {/* Foto de Perfil */}
          <div className="relative">
            <div className="w-44 h-44 bg-slate-100 rounded-[35px] overflow-hidden shadow-2xl border-[5px] border-white rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Perfil" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-2 -right-2 bg-[#bd2c1a] w-9 h-9 rounded-full flex items-center justify-center text-white text-lg shadow-lg border-2 border-white">
              ★
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-10">

          {/* Coluna Esquerda: Dados e Certificados */}
          <div className="col-span-12 lg:col-span-4 space-y-10">
            <section className="bg-white p-9 rounded-[35px] shadow-sm border border-slate-50 relative">
              <div className="absolute top-8 right-8 opacity-10 text-3xl">📋</div>
              <h3 className="font-serif text-[#3d6e35] font-bold text-xl mb-8 border-b pb-4">Dados Pessoais</h3>
              <div className="space-y-6 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                <div><p className="mb-1">E-mail Corporativo</p><p className="text-slate-700 normal-case text-sm font-bold">joao.silva@heineken.com.br</p></div>
                <div><p className="mb-1">Matrícula</p><p className="text-slate-700 text-sm font-bold">#88291-X</p></div>
                <div><p className="mb-1">Data de Admissão</p><p className="text-slate-700 text-sm font-bold">12 de Março, 2021</p></div>
                <div><p className="mb-1">Unidade</p><p className="text-slate-700 text-sm font-bold">São Paulo - Headquarter</p></div>
              </div>
            </section>

            <section className="bg-white p-9 rounded-[35px] shadow-sm relative overflow-hidden border border-slate-50">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-50/50 text-9xl font-serif pointer-events-none">🛡️</div>
              <h3 className="font-serif text-slate-800 font-bold text-xl mb-8 relative z-10">Certificados</h3>
              <div className="space-y-4 relative z-10">
                <div className="bg-[#f8f9f8]/90 backdrop-blur-sm p-5 rounded-2xl flex items-center gap-4 border border-white shadow-sm">
                  <span className="text-3xl">🥇</span>
                  <div><p className="text-[11px] font-black text-slate-800">Mestre Cervejeiro Nível 1</p><p className="text-[9px] text-slate-400 font-bold uppercase">Out/2023</p></div>
                </div>
                <div className="bg-[#f8f9f8]/90 backdrop-blur-sm p-5 rounded-2xl flex items-center gap-4 border border-white shadow-sm">
                  <span className="text-3xl">🥈</span>
                  <div><p className="text-[11px] font-black text-slate-800">Excelência em Vendas</p><p className="text-[9px] text-slate-400 font-bold uppercase">Jan/2024</p></div>
                </div>
              </div>
            </section>
          </div>

          {/* Coluna Direita: Cursos e Atividade */}
          <div className="col-span-12 lg:col-span-8 space-y-10">
            <section className="bg-white p-11 rounded-[45px] shadow-sm border border-slate-50">
              <div className="flex justify-between items-center mb-10">
                <h3 className="font-serif text-slate-800 font-bold text-2xl">Cursos com Acesso</h3>
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#00b140] rounded-full"></div> Status: Ativo
                </span>
              </div>

              <div className="space-y-10">
                {cursos.map((c) => (
                  <div key={c.id} className={c.status ? 'opacity-100' : 'opacity-40'}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-serif text-xl font-bold text-slate-800 tracking-tight">{c.nome}</p>
                        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-wide">{c.sub}</p>
                      </div>
                      <div className={`w-9 h-4 rounded-full relative cursor-pointer transition-colors ${c.status ? 'bg-[#00b140]' : 'bg-slate-200'}`}>
                        <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${c.status ? 'right-0.5' : 'left-0.5'}`}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden shadow-inner">
                        <div className="bg-[#00b140] h-full transition-all duration-700" style={{ width: `${c.prog}%` }}></div>
                      </div>
                      <span className="text-[11px] font-black text-[#00b140]">{c.prog}%</span>
                    </div>
                    <div className="flex justify-between mt-2.5">
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-tighter">{c.prog}% CONCLUÍDO</span>
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-tighter">ÚLTIMO ACESSO: {c.tempo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-11 rounded-[45px] shadow-sm border border-slate-50">
              <h3 className="font-serif text-slate-800 font-bold text-2xl mb-10">Atividade Recente</h3>
              <div className="space-y-10 border-l border-slate-100 pl-10 ml-2">
                <div className="relative">
                  <div className="absolute -left-[45px] top-1.5 w-3.5 h-3.5 bg-[#00b140] rounded-full border-4 border-white shadow-sm"></div>
                  <p className="text-[13px] font-bold text-slate-800">Concluiu o módulo &quot;Fermentação Controlada&quot;</p>
                  <p className="text-[9px] text-slate-300 font-black uppercase mt-1">Hoje, às 14:32</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[45px] top-1.5 w-3.5 h-3.5 bg-[#bd2c1a] rounded-full border-4 border-white shadow-sm"></div>
                  <p className="text-[13px] font-bold text-slate-800">Nova certificação obtida: Excelência em Vendas</p>
                  <p className="text-[9px] text-slate-300 font-black uppercase mt-1">Ontem, às 10:15</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
