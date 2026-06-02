import * as React from "react"
import { LucideIcon } from "lucide-react"

interface SettingSectionProps {
  title: string
  icon: LucideIcon
  children: React.ReactNode
}

export function SettingSection({ title, icon: Icon, children }: SettingSectionProps) {
  return (
    <div className="bg-white rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-slate-100 w-full min-w-0">
      
      {/* Cabeçalho da Seção */}
      <div className="flex items-center gap-3 mb-5 sm:mb-6 min-w-0">
        <div className="p-2.5 bg-[#007041]/10 rounded-xl shrink-0">
          <Icon className="h-5 w-5 text-[#007041]" />
        </div>
        <h3 className="text-base sm:text-lg font-black text-slate-800 tracking-tight truncate" title={title}>
          {title}
        </h3>
      </div>
      
      {/* Conteúdo Injetado */}
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}