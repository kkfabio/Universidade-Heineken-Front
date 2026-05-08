"use client"

import * as React from "react"
import { useState } from "react"
import { 
  Bell, 
  Lock, 
  User, 
  ShieldCheck, 
  Moon, 
  Globe,
  Save
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Switch } from "../../components/ui/switch"
import { Button } from "../../components/ui/button"

/**
 * SettingsPage Component
 * Responsável pela gestão de preferências do usuário e segurança da conta.
 * Implementa princípios de Clean UI e tratamento de estado local.
 */
export default function SettingsPage() {
  // Estados para simular a interação com o sistema
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [twoFactor, setTwoFactor] = useState(false)

  // Handler para persistência de dados
  const handleSaveSettings = () => {
    // Lógica futura: Integração com API de backend
    console.log("Salvando configurações...", { notifications, darkMode, twoFactor })
    alert("Configurações atualizadas com sucesso!")
  }

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 bg-[#FBFBFB]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#003321]">Configurações</h2>
          <p className="text-sm text-slate-500">
            Gerencie as diretrizes da sua conta e preferências de sistema.
          </p>
        </div>
        <Button 
          onClick={handleSaveSettings}
          className="bg-[#007041] hover:bg-[#005a34] text-white flex items-center gap-2"
        >
          <Save className="h-4 w-4" />
          Salvar Alterações
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Gestão de Perfil */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-[#007041]" />
              <CardTitle className="text-lg">Informações Pessoais</CardTitle>
            </div>
            <CardDescription>Dados de identificação do colaborador.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase text-slate-500">Nome Completo</label>
              <Input id="name" placeholder="Hugo Cavalcanti" className="focus-visible:ring-[#007041]" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase text-slate-500">E-mail</label>
              <Input id="email" type="email" placeholder="hugo@universidade.com" />
            </div>
          </CardContent>
        </Card>

        {/* Segurança da Conta */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-[#007041]" />
              <CardTitle className="text-lg">Segurança</CardTitle>
            </div>
            <CardDescription>Parâmetros de proteção e acesso.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">Autenticação (2FA)</p>
                <p className="text-xs text-slate-500">Dobrar a segurança do login.</p>
              </div>
              <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">Alertas de Login</p>
                <p className="text-xs text-slate-500">Notificar novos acessos por e-mail.</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Preferências de Interface */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-[#007041]" />
              <CardTitle className="text-lg">Sistema</CardTitle>
            </div>
            <CardDescription>Configurações de interface e idioma.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Moon className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-medium">Modo Escuro</span>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-medium">Notificações Push</span>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
          </CardContent>
        </Card>

        {/* Governança de Dados */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-[#007041]" />
              <CardTitle className="text-lg">Privacidade</CardTitle>
            </div>
            <CardDescription>Termos e conformidade com a LGPD.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-xs leading-relaxed text-slate-500">
              Seus dados são protegidos por criptografia de ponta a ponta e seguem as normas globais de segurança da Heineken.
            </p>
            <Button variant="link" className="p-0 h-auto text-[#007041] text-xs">
              Acessar Central de Privacidade
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}