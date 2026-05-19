"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"

interface SettingSectionProps {
  title: string
  icon: LucideIcon
  children: React.ReactNode
}

export function SettingSection({ title, icon: Icon, children }: SettingSectionProps) {
  return (
    <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#007041]/10 transition-all space-y-6">
      <div className="flex items-center gap-4 pb-4 border-b border-slate-50">
        <div className="p-3 bg-[#007041]/5 rounded-2xl text-[#007041]">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-xl font-black text-slate-800 tracking-tight">{title}</h2>
        </div>
      </div>
      <div className="pt-2">
        {children}
      </div>
    </div>
  )
}