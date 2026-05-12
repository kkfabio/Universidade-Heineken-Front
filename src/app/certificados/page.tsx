"use client"

import * as React from "react"
import { CertificateCard } from "../../components/CertificateCard"
import { Button } from "../../components/ui/button"
import { Download, ExternalLink, Trophy } from "lucide-react"

export default function CertificadosPage() {
  // Corrigido para 'date' para bater com a prop do componente
  const certificados = [
    { id: 1, titulo: "Cultura e Valores Heineken", date: "12 de Outubro, 2023" },
    { id: 2, titulo: "Liderança de Alta Performance", date: "28 de Setembro, 2023" },
    { id: 3, titulo: "Sustentabilidade: Brew a Better World", date: "15 de Agosto, 2023" },
    { id: 4, titulo: "Fundamentos da Cadeia de Suprimentos", date: "02 de Julho, 2023" },
  ]

  return (
    <div className="min-h-screen p-8 md:p-12 bg-[#FBFBFB]">
      {/* Header com Estatísticas (Figma) */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <header>
          <p className="text-[#007041] font-bold text-xs tracking-[3px] mb-2 uppercase">01 / Achievement</p>
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">Meus Certificados</h1>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed font-medium">
            Bem-vindo ao seu repositório de excelência da Heineken Academy.
          </p>
        </header>

        {/* Badges de Performance */}
        <div className="flex gap-3">
          <div className="bg-[#007041] p-4 rounded-xl text-white text-center min-w-25 shadow-lg shadow-[#007041]/20">
            <p className="text-2xl font-black">12</p>
            <p className="text-[8px] font-bold uppercase tracking-widest opacity-70">Concluídos</p>
          </div>
          <div className="bg-[#003321] p-4 rounded-xl text-white text-center min-w-25">
            <p className="text-2xl font-black text-[#5CFF9B]">84%</p>
            <p className="text-[8px] font-bold uppercase tracking-widest opacity-70">Progresso Geral</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Grid de Certificados Normais */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificados.map((cert) => (
            <CertificateCard key={cert.id} title={cert.titulo} date={cert.date} />
          ))}
        </div>

        {/* Card Master (Lateral Direita) */}
        <div className="lg:col-span-4">
          <div className="bg-[#003321] rounded-32 p-10 h-full text-white flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <p className="text-[9px] font-bold uppercase tracking-[3px] text-[#5CFF9B] mb-6">Destaque de Carreira</p>
              <h2 className="text-3xl font-black leading-tight mb-6">Mastering Heineken Global Supply</h2>
              
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-8 flex items-center justify-center">
                 <Trophy className="h-16 w-16 text-[#5CFF9B] opacity-50" />
                 <p className="absolute text-[10px] font-bold uppercase mt-16 italic opacity-40">Certificado Master</p>
              </div>
              
              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Este certificado reconhece a maestria em processos de logística global e gestão de inventário.
              </p>
            </div>

            <div className="space-y-3 relative z-10 pt-10">
              <Button className="w-full bg-[#00A35C] hover:bg-[#008f50] text-white font-black py-6 rounded-xl uppercase tracking-tighter text-xs">
                Baixar PDF
              </Button>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 py-6 rounded-xl font-bold uppercase tracking-tighter text-[10px]">
                Visualizar Detalhes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}