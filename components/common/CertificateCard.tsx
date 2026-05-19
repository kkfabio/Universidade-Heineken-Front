"use client"

import * as React from "react"
import { Eye, Download } from "lucide-react"
// CORRIGIDO: Agora aponta para o caminho correto usando o alias da raiz
import { Button } from "@/components/ui/button"

interface CertificateCardProps {
  title: string
  date: string
  imageUrl?: string
  onViewDetails?: () => void
  onDownload?: () => void
}

export function CertificateCard({
  title,
  date,
  imageUrl,
  onViewDetails,
  onDownload,
}: CertificateCardProps) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,70,65,0.05)] transition-all group flex flex-col h-full">
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <p className="text-white text-xs font-bold tracking-wider uppercase">Heineken Academy</p>
          </div>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <h3 className="font-black text-slate-800 text-lg leading-snug line-clamp-2 tracking-tight group-hover:text-[#007041] transition-colors">
            {title}
          </h3>
          <p className="text-xs text-slate-400 font-medium mt-1">{date}</p>
        </div>

        <div className="flex gap-2 pt-2 border-t border-slate-50">
          <Button
            variant="outline"
            onClick={onViewDetails}
            className="flex-1 h-11 rounded-xl border-slate-200 text-slate-500 text-xs font-bold gap-2 uppercase tracking-wider hover:bg-slate-50"
          >
            <Eye className="h-4 w-4" /> Detalhes
          </Button>
          <Button
            onClick={onDownload}
            className="bg-[#007041] hover:bg-[#005a34] text-white h-11 w-11 rounded-xl flex items-center justify-center p-0 shadow-md shadow-[#007041]/10"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}