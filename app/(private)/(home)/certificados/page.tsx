"use client"

import * as React from "react"
import { Trophy, Search, Filter, Download, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CertificateCard } from "@/components/common/CertificateCard"

export default function CertificadosPage() {
  const certificados = [
    { 
      id: 1, 
      titulo: "Cultura e Valores Heineken", 
      date: "12 de Outubro, 2023",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800" 
    },
    { 
      id: 2, 
      titulo: "Liderança de Alta Performance", 
      date: "28 de Setembro, 2023",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800" 
    },
    { 
      id: 3, 
      titulo: "Sustentabilidade: Brew a Better World", 
      date: "15 de Agosto, 2023",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800" 
    },
    { 
      id: 4, 
      titulo: "Fundamentos da Cadeia de Suprimentos", 
      date: "02 de Julho, 2023",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" 
    },
  ]

  return (
    <div className="min-h-screen p-8 md:p-16 bg-[#FBFBFB]">
      
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <header className="relative">
          <p className="text-[#007041] font-black text-xs tracking-[3px] mb-2 uppercase">01 / Achievement</p>
          <h1 className="text-6xl font-black text-[#1A1A1A] mb-4 tracking-tighter">Meus Certificados</h1>
          <p className="text-slate-500 text-lg max-w-xl font-medium leading-relaxed">
            Bem-vindo ao seu repositório de excelência da Heineken Academy.
          </p>
          <Star className="absolute -top-10 -left-10 h-32 w-32 text-slate-200 -z-10 opacity-20" />
        </header>

        <div className="flex gap-4">
          <div className="bg-[#007041] p-6 rounded-[24px] text-white text-center min-w-[120px] shadow-xl shadow-[#007041]/20">
            <p className="text-3xl font-black">12</p>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-70">Concluídos</p>
          </div>
          <div className="bg-[#003321] p-6 rounded-[24px] text-white text-center min-w-[120px]">
            <p className="text-3xl font-black text-[#5CFF9B]">84%</p>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-70">Progresso</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-14">
        <div className="relative flex-1 group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#007041] transition-colors" />
          <Input 
            placeholder="Pesquisar certificados..." 
            className="pl-16 h-16 rounded-[24px] border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white text-slate-600 font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-[#007041]"
          />
        </div>
        <Button variant="outline" className="h-16 px-10 rounded-[24px] border-slate-100 bg-white font-black text-slate-500 gap-3 hover:bg-slate-50 uppercase text-[10px] tracking-widest">
          <Filter className="h-4 w-4" /> Filtrar
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificados.map((cert) => (
            <CertificateCard 
              key={cert.id} 
              title={cert.titulo} 
              date={cert.date} 
              imageUrl={cert.imageUrl} 
            />
          ))}
        </div>

        <div className="lg:col-span-4">
          <div className="bg-[#003321] rounded-[40px] p-12 h-full text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="relative z-10">
              <Trophy className="h-12 w-12 text-[#5CFF9B] mb-8" strokeWidth={1} />
              <p className="text-[10px] font-black uppercase tracking-[4px] text-[#5CFF9B] mb-4">Mastering Degree</p>
              <h2 className="text-4xl font-black leading-[1.1] mb-6 tracking-tight">Mastering Heineken Global Supply</h2>
              
              <div className="bg-white/5 rounded-[24px] p-8 border border-white/10 mb-8 flex flex-col items-center justify-center">
                 <Trophy className="h-16 w-16 text-[#5CFF9B] opacity-40 mb-2" />
                 <p className="text-[9px] font-black uppercase tracking-widest opacity-30 italic">Certificado Master</p>
              </div>

              <p className="text-sm opacity-60 leading-relaxed font-medium">
                Este certificado reconhece a maestria em processos de logística global e gestão de inventário avançada.
              </p>
            </div>

            <div className="space-y-4 relative z-10 pt-10">
              <Button className="w-full bg-[#00A35C] hover:bg-[#008f50] text-white font-black h-16 rounded-2xl uppercase tracking-widest text-[11px] shadow-xl">
                <Download className="mr-2 h-4 w-4" /> Baixar PDF
              </Button>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 h-16 rounded-2xl font-bold uppercase tracking-widest text-[11px]">
                Visualizar Detalhes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}