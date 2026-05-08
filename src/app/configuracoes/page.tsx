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
  Save,
  Sun
} from "lucide-react"
import { Input } from "../../components/ui/input"
import { Switch } from "../../components/ui/switch"
import { Button } from "../../components/ui/button"
import { SettingSection } from "../../components/SettingSection"

/**
 * SettingsPage - Versão Funcional e Modular
 */
export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)

  const handleSave = () => {
    console.log("Configurações salvas:", { darkMode, notifications, twoFactor })
    alert("As configurações do perfil de João Silva foram atualizadas.")
  }

  return (
    <div className={`flex-1 min-h-screen space-y-6 p-8 pt-6 transition-colors duration-500 ${
      darkMode ? "bg-[#121212] text-white" : "bg-[#FBFBFB] text-slate-900"
    }`}>
      
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold tracking-tight ${darkMode ? "text-[#00A35C]" : "text-[#003321]"}`}>
            Configurações
          </h2>
          <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Painel de controle - Universidade Heineken
          </p>
        </div>
        <Button 
          onClick={handleSave}
          className="bg-[#007041] hover:bg-[#005a34] text-white flex items-center gap-2 shadow-md active:scale-95 transition-all"
        >
          <Save className="h-4 w-4" />
          Salvar Alterações
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SettingSection 
          title="Informações Pessoais" 
          description="Identificação do colaborador." 
          icon={User}
          isDark={darkMode}
        >
          <div className="grid gap-2">
            <label className="text-xs font-bold uppercase opacity-70">Nome Completo</label>
            <Input 
              placeholder="João Silva" 
              className={darkMode ? "bg-[#2A2A2A] border-slate-700 text-white" : ""}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs font-bold uppercase opacity-70">E-mail Corporativo</label>
            <Input 
              type="email" 
              placeholder="joaosilva@heineken.com" 
              className={darkMode ? "bg-[#2A2A2A] border-slate-700 text-white" : ""}
            />
          </div>
        </SettingSection>

        <SettingSection 
          title="Segurança" 
          description="Proteção de conta." 
          icon={Lock}
          isDark={darkMode}
        >
          <div className={`flex items-center justify-between rounded-lg border p-3 ${darkMode ? "border-slate-800" : "border-slate-100"}`}>
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Autenticação (2FA)</p>
              <p className="text-xs opacity-70">Verificação em duas etapas.</p>
            </div>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </div>
        </SettingSection>

        <SettingSection 
          title="Interface" 
          description="Ajustes visuais." 
          icon={Globe}
          isDark={darkMode}
        >
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              {darkMode ? <Moon className="h-4 w-4 text-yellow-400" /> : <Sun className="h-4 w-4 text-orange-400" />}
              <span className="text-sm font-medium">Modo Escuro</span>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <Bell className={`h-4 w-4 ${notifications ? "text-[#007041]" : "text-slate-400"}`} />
              <span className="text-sm font-medium">Notificações Push</span>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
        </SettingSection>

        <SettingSection 
          title="Privacidade" 
          description="Termos e LGPD." 
          icon={ShieldCheck}
          isDark={darkMode}
        >
          <p className="text-xs leading-relaxed opacity-70">
            Seus dados são processados de acordo com a Política de Segurança da Informação.
          </p>
          <Button 
            variant="link" 
            onClick={() => alert("Acessando Termos...")}
            className={`p-0 h-auto text-xs justify-start hover:no-underline font-semibold ${darkMode ? "text-[#00A35C]" : "text-[#007041]"}`}
          >
            Ver Política de Privacidade
          </Button>
        </SettingSection>
      </div>
    </div>
  )
}