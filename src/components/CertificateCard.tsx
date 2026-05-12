"use client"

import * as React from "react"
import { Eye, Download } from "lucide-react"
import { Button } from "./ui/button"

interface CertificateCardProps {
  title: string
  date: string // Garantindo que o nome da prop seja 'date'
  isDark?: boolean
}

export function CertificateCard({ title, date, isDark }: CertificateCardProps) {
  return (
    <div className={`group rounded-[24px] overflow-hidden border border-slate-100 shadow-sm transition-all hover:shadow-xl ${
      isDark ? "bg-[#1A1A1A] border-slate-800" : "bg-white"
    }`}>
      {/* Thumbnail com gradiente e selo (Figma style) */}
      <div className="relative h-44 bg-gradient-to-br from-slate-200 to-slate-400">
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
        <div className="absolute bottom-3 left-3 bg-[#007041] text-white text-[9px] font-black px-2 py-1 rounded-sm uppercase tracking-wider">
          Concluído
        </div>
      </div>

      <div className="p-6">
        <h3 className={`text-lg font-bold leading-tight mb-1 min-h-[3rem] ${isDark ? "text-white" : "text-slate-800"}`}>
          {title}
        </h3>
        <p className="text-[11px] text-slate-400 mb-6">Concluído em {date}</p>

        <div className="flex gap-2">
          <Button className="flex-1 bg-[#007041] hover:bg-[#005a34] text-white rounded-lg font-bold text-[10px] h-9 uppercase tracking-tighter">
            <Eye className="h-4 w-4 mr-1" /> Visualizar
          </Button>
          <Button variant="outline" className="border-slate-200 rounded-lg px-2 h-9 hover:bg-slate-50">
            <Download className="h-4 w-4 text-slate-600" />
          </Button>
        </div>
      </div>
    </div>
  )
}