import * as React from "react"
import { LucideIcon } from "lucide-react"

interface SettingSectionProps {
  title: string
  icon: LucideIcon
  children: React.ReactNode
}

export function SettingSection({ title, icon: Icon, children }: SettingSectionProps) {
  return (
    <div className="bg-white rounded-[32px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.05)] border border-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-[#007041]/10 rounded-xl">
          <Icon className="h-5 w-5 text-[#007041]" />
        </div>
        <h3 className="text-lg font-black text-slate-800 tracking-tight">{title}</h3>
      </div>
      {children}
    </div>
  )
}