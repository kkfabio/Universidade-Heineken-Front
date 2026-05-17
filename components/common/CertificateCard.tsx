"use client"

import * as React from "react"
import { Eye, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CertificateCardProps {
  title: string
  date: string
  imageUrl: string
}

export function CertificateCard({ title, date, imageUrl }: CertificateCardProps) {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-50 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,112,65,0.05)] transition-all duration-300 group">
      <div>
        <div className="relative h-48 w-full rounded-[24px] overflow-hidden mb-6 bg-slate-100">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 shadow-lg">
              <Eye className="h-5 w-5 text-slate-700" />
            </Button>
          </div>
        </div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{date}</p>
        <h3 className="font-black text-xl text-slate-800 leading-snug tracking-tight mb-4 group-hover:text-[#007041] transition-colors">
          {title}
        </h3>
      </div>

      <Button variant="outline" className="w-full border-slate-100 hover:bg-[#007041] hover:text-white hover:border-[#007041] h-14 rounded-xl text-xs font-bold uppercase tracking-widest gap-2 transition-all">
        <Download className="h-4 w-4" /> Baixar Certificado
      </Button>
    </div>
  )
}