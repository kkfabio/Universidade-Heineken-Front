"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

/**
 * Interface de Propriedades do Componente
 */
interface SettingSectionProps {
  title: string
  description: string
  icon: LucideIcon
  children: React.ReactNode
  isDark?: boolean
}

/**
 * Padroniza o layout das seções de configuração com suporte a acessibilidade e temas.
 */
export function SettingSection({ 
  title, 
  description, 
  icon: Icon, 
  children,
  isDark = false
}: SettingSectionProps) {
  return (
    <Card className={`group shadow-sm transition-all duration-300 ${
      isDark ? "bg-[#1A1A1A] border-slate-800" : "bg-white border-slate-200"
    } hover:shadow-md`}>
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <Icon className={`h-5 w-5 transition-colors ${isDark ? "text-[#00A35C]" : "text-[#007041]"}`} />
          <CardTitle className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
            {title}
          </CardTitle>
        </div>
        <CardDescription className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {children}
      </CardContent>
    </Card>
  )
}