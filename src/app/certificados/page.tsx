"use client"

import * as React from "react"
import { Star, Search, Filter, Trophy } from "lucide-react"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { CertificateCard } from "../../components/CertificateCard"

export default function CertificadosPage() {
  const certificados = [
    { id: 1, titulo: "Excelência em Supply Chain Excellence", data: "12/04/2026", carga: "40" },
    { id: 2, titulo: "Gestão de Marcas e Identidade Visual", data: "05/03/2026", carga: "20" },
    { id: 3, titulo: "Liderança e Gestão de Pessoas", data: "20/01/2026", carga: "15" },
  ]

  return (
    <div className="min-h-screen p-8 md:p-16 bg-[#F8FAFB]">
      
      {/* Header Identitário UHNK */}
      <header className="relative mb-16">
        <div className="flex items-center gap-4 mb-2">
          <Trophy className="h-8 w-8 text-[#007041]" />
          <h1 className="text-5xl font-black text-[#007041] tracking-tighter">Meus Certificados</h1>
        </div>
        <p className="text-slate-500 text-lg font-medium max-w-2xl">
          Sua galeria de conquistas e competências validadas pela Universidade UHNK.
        </p>
        <Star className="absolute -top-10 right-0 h-40 w-40 text-slate-200 -z-10 opacity-20" />
      </header>

      {/* Barra de Ações Rápidas */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
          <Input 
            placeholder="Buscar por curso ou palavra-chave..." 
            className="pl-14 h-16 rounded-[20px] border-none shadow-sm bg-white text-slate-600 font-medium placeholder:text-slate-300 focus:ring-2 focus:ring-[#007041]"
          />
        </div>
        <Button variant="outline" className="h-16 px-8 rounded-[20px] border-slate-200 bg-white font-bold text-slate-500 gap-3 hover:bg-slate-50">
          <Filter className="h-5 w-5" /> Filtrar por Ano
        </Button>
      </div>

      {/* Grid de Certificados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificados.map((cert) => (
          <CertificateCard 
            key={cert.id}
            title={cert.titulo}
            date={cert.data}
            hours={cert.carga}
          />
        ))}

        {/* Card de Próxima Conquista (Gamificação) */}
        <div className="border-4 border-dashed border-slate-200 rounded-[32px] p-10 flex flex-col items-center justify-center text-center opacity-50 hover:opacity-80 transition-all cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-slate-300" />
          </div>
          <p className="font-black text-slate-400 uppercase tracking-widest text-xs">Em andamento</p>
          <h4 className="text-lg font-bold text-slate-500 mt-2">Logística Reversa 4.0</h4>
          <p className="text-xs text-slate-400 mt-1 italic">Conclua o módulo 5 para liberar</p>
        </div>
      </div>
    </div>
  )
}