"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

interface SettingSectionProps {
  title: string
  description: string
  icon: LucideIcon
  children: React.ReactNode
  isDark?: boolean
}

export function SettingSection({ 
  title, 
  description, 
  icon: Icon, 
  children,
  isDark 
}: SettingSectionProps) {
  return (
    <Card className={`shadow-sm transition-all duration-300 ${
      isDark ? "bg-[#1A1A1A] border-slate-800" : "bg-white border-slate-200"
    }`}>
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <Icon className={`h-5 w-5 ${isDark ? "text-[#00A35C]" : "text-[#007041]"}`} />
          <CardTitle className={`text-lg ${isDark ? "text-white" : "text-slate-900"}`}>{title}</CardTitle>
        </div>
        <CardDescription className={isDark ? "text-slate-400" : "text-slate-500"}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {children}
      </CardContent>
    </Card>
  )
}