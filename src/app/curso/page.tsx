'use client';
import React, { useState } from 'react';
// ADICIONEI O "Send" NA LISTA ABAIXO:
import { PlayCircle, CheckCircle2, ChevronRight, Menu, ArrowLeft, Clock, BookOpen, Send } from 'lucide-react';
import Link from 'next/link';

export default function CoursePage() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    { 
      title: 'Boas-vindas', 
      description: 'Bem-vindo ao time! Neste módulo, Kauan Henrique Menezes, apresentaremos a visão geral da jornada de aprendizado e os primeiros passos na plataforma UHNK.',
      duration: '5 min',
      done: true 
    },
    { 
      title: 'Segurança no Trabalho', 
      description: 'Segurança em primeiro lugar. Aprenda as normas fundamentais de segurança, o uso correto de EPIs e como prevenir acidentes no ambiente Heineken.',
      duration: '15 min',
      done: false 
    },
    { 
      title: 'Qualidade Heineken', 
      description: 'Conheça o padrão "Star" de qualidade. Vamos mergulhar nos processos de fabricação que garantem a excelência dos nossos produtos globalmente.',
      duration: '20 min',
      done: false 
    },
    { 
      title: 'Processos Internos', 
      description: 'Entenda como a empresa funciona no dia a dia: sistemas, fluxos de comunicação e a cultura de alta performance do sistema UHNK.',
      duration: '12 min',
      done: false 
    }
  ];

  return (
    <div className="min-h-screen bg-[#004d2c] text-white font-sans">
      <header className="bg-[#007b3e] p-4 shadow-lg flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:bg-white/20 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-black italic tracking-tighter">UHNK</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <p className="text-xs opacity-70">Logado como</p>
            <p className="text-sm font-bold leading-tight">Kauan Henrique Menezes</p>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#007b3e] font-black shadow-inner">K</div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-[1600px] mx-auto">
        <main className="flex-1">
          <div className="aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center group cursor-pointer relative mb-6">
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-[#007b3e] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Módulo {activeModule + 1}</span>
            </div>
            
            <PlayCircle className="w-24 h-24 text-[#007b3e] group-hover:scale-110 transition-all drop-shadow-[0_0_15px_rgba(0,123,62,0.5)]" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <h2 className="text-2xl font-black">{modules[activeModule].title}</h2>
              <div className="flex gap-4 mt-2 text-sm text-gray-300">
                 <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {modules[activeModule].duration}</span>
                 <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> Aula teórica</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-[2.5rem] backdrop-blur-md border border-white/5 shadow-xl">
            <h3 className="text-2xl font-black mb-4 text-[#007b3e]">Sobre esta aula</h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              {modules[activeModule].description}
            </p>
          </div>
        </main>

        <aside className="w-full lg:w-[400px] flex flex-col gap-4">
          <div className="bg-white/5 rounded-[2.5rem] p-6 border border-white/10 shadow-lg">
            <h3 className="font-black text-xl mb-6 flex items-center gap-3">
              <Menu className="w-6 h-6 text-[#007b3e]" /> Módulos do Curso
            </h3>
            
            <div className="space-y-3">
              {modules.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveModule(i)}
                  className={`w-full p-5 rounded-2xl flex items-center justify-between transition-all group ${
                    activeModule === i 
                    ? 'bg-[#007b3e] text-white shadow-lg scale-[1.02]' 
                    : 'hover:bg-white/10 text-gray-400 bg-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className={`${activeModule === i ? 'text-white' : 'text-[#007b3e]'}`}>
                      {item.done ? <CheckCircle2 className="w-6 h-6" /> : <PlayCircle className="w-6 h-6" />}
                    </div>
                    <div>
                      <p className={`text-sm font-black ${activeModule === i ? 'text-white' : 'text-gray-200'}`}>{item.title}</p>
                      <p className="text-xs opacity-60 font-medium">{item.duration} de conteúdo</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeModule === i ? 'translate-x-1 opacity-100' : 'opacity-30'}`} />
                </button>
              ))}
            </div>
          </div>
          
          <Link href="/quiz" className="bg-[#007b3e] hover:bg-[#004d2c] text-white p-6 rounded-[2.5rem] font-black text-center transition-all shadow-lg flex items-center justify-center gap-3">
             <Send className="w-5 h-5" /> IR PARA O QUESTIONÁRIO
          </Link>
        </aside>
      </div>
    </div>
  );
}