"use client"

import * as React from "react"
import { Award, Download, CheckCircle2 } from "lucide-react"
import { Button } from "./ui/button"

interface CertificateCardProps {
  title: string
  date: string
  hours: string
  isDark?: boolean
}

export function CertificateCard({ title, date, hours, isDark }: CertificateCardProps) {
  return (
    <div className={`group p-8 rounded-[32px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${
      isDark ? "bg-[#1A1A1A] border-slate-800" : "bg-white"
    }`}>
      {/* Detalhe visual lateral */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#007041] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-[#007041]/10 rounded-2xl">
          <Award className="h-7 w-7 text-[#007041]" strokeWidth={1.5} />
        </div>
        <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest">
          {hours} HORAS
        </span>
      </div>

      <h3 className={`text-xl font-bold leading-tight mb-2 group-hover:text-[#007041] transition-colors ${
        isDark ? "text-white" : "text-slate-800"
      }`}>
        {title}
      </h3>
      
      <div className="flex items-center gap-2 mb-8">
        <CheckCircle2 className="h-4 w-4 text-[#5CFF9B]" />
        <p className="text-xs font-medium text-slate-400">Concluído em {date}</p>
      </div>

      <Button className="w-full bg-[#007041] hover:bg-[#005a34] rounded-xl font-bold gap-2 h-12 shadow-lg shadow-[#007041]/10">
        <Download className="h-4 w-4" /> Baixar Certificado
      </Button>
    </div>
  )
}