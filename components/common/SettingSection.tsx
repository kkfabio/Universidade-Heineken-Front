"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"

interface SettingSectionProps {
  title: string
  icon: LucideIcon
  children: React.ReactNode
  isDark?: boolean
}

export function SettingSection({ title, icon: Icon, children, isDark = false }: SettingSectionProps) {
  return (
    <section className={`p-8 rounded-[32px] border transition-all ${
      isDark 
        ? "bg-[#1E1E1E] border-zinc-800 text-white" 
        : "bg-white border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] text-slate-900"
    }`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-2.5 rounded-xl ${isDark ? "bg-zinc-800 text-[#5CFF9B]" : "bg-slate-50 text-[#007041]"}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-black text-xl tracking-tight">{title}</h3>
      </div>
      {children}
    </section>
  )
}