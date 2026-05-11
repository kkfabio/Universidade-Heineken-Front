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
  Sun,
  Loader2
} from "lucide-react"
import { Input } from "../../components/ui/input"
import { Switch } from "../../components/ui/switch"
import { Button } from "../../components/ui/button"
import { SettingSection } from "../../components/SettingSection"

/**
 * SettingsPage - Versão Final de Entrega (ADS)
 * Implementa lógica de persistência simulada e tratamento estrito de tipos.
 */
export default function SettingsPage() {
  // Estado de UI
  const [isSaving, setIsSaving] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  
  // Estados de Configuração
  const [notifications, setNotifications] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)

  /**
   * Simula o processo de persistência no backend da Universidade Heineken
   */
  const handleSave = async () => {
    setIsSaving(true)
    // Simula latência de rede (1.5 segundos)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSaving(false)
    
    console.log("Payload enviado:", { darkMode, notifications, twoFactor })
    alert("Configurações de João Silva aplicadas com sucesso!")
  }

  return (
    <div className={`flex-1 min-h-screen space-y-6 p-8 pt-6 transition-colors duration-500 ${
      darkMode ? "bg-[#121212] text-white" : "bg-[#FBFBFB] text-slate-900"
    }`}>
      
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b pb-6">
        <div>
          <h2 className={`text-3xl font-extrabold tracking-tight ${darkMode ? "text-[#00A35C]" : "text-[#003321]"}`}>
            Configurações
          </h2>
          <p className={`text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Universidade Heineken • Portal do Colaborador
          </p>
        </div>
        <Button 
          onClick={handleSave}
          disabled={isSaving}
          className="bg-[#007041] hover:bg-[#005a34] text-white flex items-center gap-2 px-8 py-6 shadow-xl active:scale-95 transition-all disabled:opacity-70"
        >
          {isSaving ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          {isSaving ? "Salvando..." : "Salvar Alterações"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Seção: Perfil */}
        <SettingSection 
          title="Perfil Profissional" 
          description="Informações visíveis para a organização." 
          icon={User}
          isDark={darkMode}
        >
          <div className="grid gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Nome Completo</label>
            <Input 
              placeholder="João Silva" 
              className={`h-11 ${darkMode ? "bg-[#2A2A2A] border-slate-700 text-white" : "bg-white"}`}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">E-mail Corporativo</label>
            <Input 
              type="email" 
              placeholder="joaosilva@heineken.com" 
              className={`h-11 ${darkMode ? "bg-[#2A2A2A] border-slate-700 text-white" : "bg-white"}`}
            />
          </div>
        </SettingSection>

        {/* Seção: Segurança */}
        <SettingSection 
          title="Segurança" 
          description="Gerenciamento de credenciais e acesso." 
          icon={Lock}
          isDark={darkMode}
        >
          <div className={`flex items-center justify-between rounded-xl border p-4 transition-colors ${
            darkMode ? "border-slate-800 bg-[#222]" : "border-slate-100 bg-slate-50/50"
          }`}>
            <div className="space-y-1">
              <p className="text-sm font-semibold">Autenticação (2FA)</p>
              <p className="text-xs opacity-60">Ativar validação multifator.</p>
            </div>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </div>
        </SettingSection>

        {/* Seção: Preferências */}
        <SettingSection 
          title="Preferências" 
          description="Personalização da interface e sistema." 
          icon={Globe}
          isDark={darkMode}
        >
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${darkMode ? "bg-yellow-500/10 text-yellow-500" : "bg-orange-500/10 text-orange-500"}`}>
                {darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </div>
              <span className="text-sm font-semibold">Modo Escuro</span>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${notifications ? "bg-[#007041]/10 text-[#007041]" : "bg-slate-100 text-slate-400"}`}>
                <Bell className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold">Notificações Push</span>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
        </SettingSection>

        {/* Seção: Governança */}
        <SettingSection 
          title="Privacidade" 
          description="Termos de uso e LGPD." 
          icon={ShieldCheck}
          isDark={darkMode}
        >
          <div className={`p-4 rounded-lg text-xs leading-relaxed ${darkMode ? "bg-slate-800/50 text-slate-400" : "bg-slate-50 text-slate-600"}`}>
            Sua conta está em conformidade com as diretrizes de proteção de dados da Heineken Brasil.
          </div>
          <Button 
            variant="outline" 
            onClick={() => alert("Exibindo termos...")}
            className={`w-full text-xs font-bold uppercase tracking-tight ${
              darkMode ? "border-slate-700 hover:bg-slate-800" : "border-slate-200"
            }`}
          >
            Ver Política de Dados
          </Button>
        </SettingSection>
      </div>
    </div>
  )
}