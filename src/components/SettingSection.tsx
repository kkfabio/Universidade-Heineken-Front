"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"

interface SettingSectionProps {
  title: string
  icon: LucideIcon
  children: React.ReactNode
  isDark?: boolean
}

export function SettingSection({ title, icon: Icon, children, isDark }: SettingSectionProps) {
  return (
    <div className={`p-8 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] border transition-all ${
      isDark ? "bg-[#1A1A1A] border-slate-800" : "bg-white border-slate-50"
    }`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-[#007041]/10 rounded-lg">
          <Icon className="h-6 w-6 text-[#007041]" strokeWidth={2} />
        </div>
        <h3 className={`text-2xl font-bold tracking-tight ${isDark ? "text-white" : "text-[#1A1A1A]"}`}>
          {title}
        </h3>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  )
}