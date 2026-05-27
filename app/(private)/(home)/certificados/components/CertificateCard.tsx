import { Download, Eye, Award } from "lucide-react"

interface CertificateCardProps {
  title: string
  date: string
  imageUrl: string
  onDownload: () => void
  onViewDetails: () => void
}

export function CertificateCard({
  title,
  date,
  imageUrl,
  onDownload,
  onViewDetails,
}: CertificateCardProps) {
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,112,65,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col">
      
      {/* Imagem de capa */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-4 right-4 bg-[#007041] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
          Concluído
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 p-2 bg-[#007041]/10 rounded-xl shrink-0">
            <Award className="h-4 w-4 text-[#007041]" />
          </div>
          <div>
            <h3 className="font-black text-[#1A1A1A] text-sm leading-snug tracking-tight line-clamp-2">
              {title}
            </h3>
            <p className="text-[11px] text-slate-400 font-medium mt-1">{date}</p>
          </div>
        </div>

        {/* Botões */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={onDownload}
            className="flex-1 flex items-center justify-center gap-2 bg-[#007041] hover:bg-[#005a34] text-white text-[10px] font-black uppercase tracking-widest h-11 rounded-2xl transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            Baixar
          </button>
          <button
            onClick={onViewDetails}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest h-11 rounded-2xl transition-colors border border-slate-100"
          >
            <Eye className="h-3.5 w-3.5" />
            Detalhes
          </button>
        </div>
      </div>
    </div>
  )
}