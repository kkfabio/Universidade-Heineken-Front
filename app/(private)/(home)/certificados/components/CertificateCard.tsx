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
    <div className="group bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,112,65,0.15)] transition-all duration-300 sm:hover:-translate-y-1 flex flex-col h-full">
      
      {/* Imagem de Capa Adaptativa */}
      <div className="relative h-40 sm:h-48 overflow-hidden shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#007041] text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-full shadow-sm">
          Concluído
        </div>
      </div>

      {/* Área de Conteúdo */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-4 min-w-0">
        <div className="flex items-start gap-3 min-w-0">
          <div className="mt-0.5 p-2 bg-[#007041]/10 rounded-xl shrink-0">
            <Award className="h-4 w-4 text-[#007041]" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-black text-[#1A1A1A] text-xs sm:text-sm leading-snug tracking-tight line-clamp-2 break-words" title={title}>
              {title}
            </h3>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1">{date}</p>
          </div>
        </div>

        {/* Botões de Ação Dinâmicos */}
        <div className="flex gap-2 mt-auto pt-2">
          <button
            type="button"
            onClick={onDownload}
            className="flex-1 flex items-center justify-center gap-1.5 bg-[#007041] hover:bg-[#005a34] text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest h-11 rounded-xl sm:rounded-2xl transition-colors active:scale-[0.98] select-none min-w-0"
          >
            <Download className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">Baixar</span>
          </button>
          
          <button
            type="button"
            onClick={onViewDetails}
            className="flex-1 flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest h-11 rounded-xl sm:rounded-2xl transition-colors border border-slate-100 active:scale-[0.98] select-none min-w-0"
          >
            <Eye className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">Detalhes</span>
          </button>
        </div>
      </div>
    </div>
  )
}