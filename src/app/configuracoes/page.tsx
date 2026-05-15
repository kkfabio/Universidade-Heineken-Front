"use client"

import * as React from "react"
import { useState } from "react"
import { 
  Bell, Lock, ShieldCheck, Globe, HelpCircle, FileText, Headphones, Star 
} from "lucide-react"
import { Switch } from "../../components/ui/switch"
import { Button } from "../../components/ui/button"
import { SettingSection } from "../../components/SettingSection"

/**
 * Usuário: Thiago Silva | Brand Manager - Supply Chain Excellence
 */
export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`min-h-screen p-8 md:p-16 transition-colors duration-500 ${darkMode ? "bg-[#121212]" : "bg-[#F8FAFB]"}`}>
      
      <header className="relative mb-16">
        <h1 className="text-5xl font-black text-[#007041] mb-2 tracking-tighter">Configurações</h1>
        <p className="text-slate-500 text-lg font-medium">
          Gerencie sua experiência educacional e preferências de segurança na Universidade UHNK.
        </p>
        <Star className="absolute -top-4 right-0 h-32 w-32 text-slate-200 -z-10 opacity-30" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* COLUNA PRINCIPAL DA ESQUERDA */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Notificações */}
          <SettingSection title="Notificações" icon={Bell} isDark={darkMode}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#007041]/30 transition-colors">
                <div>
                  <p className="font-bold text-slate-900">Notificações por E-mail</p>
                  <p className="text-xs text-slate-400">Alertas de cursos e certificados</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-[#007041]" />
              </div>
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-[#007041]/30 transition-colors">
                <div>
                  <p className="font-bold text-slate-900">Push no Navegador</p>
                  <p className="text-xs text-slate-400">Lembretes de aulas ao vivo</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-[#007041]" />
              </div>
            </div>
            <div className="flex items-center justify-between p-6 bg-[#007041]/5 border-l-4 border-[#007041] rounded-r-2xl">
              <div>
                <p className="font-bold text-[#007041]">Newsletter Corporate Excellence</p>
                <p className="text-xs text-slate-400">Insights mensais sobre liderança global</p>
              </div>
              <Switch className="data-[state=checked]:bg-[#007041]" />
            </div>
          </SettingSection>

          {/* Segurança e Privacidade */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <SettingSection title="Alterar Senha" icon={Lock} isDark={darkMode}>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Senha Atual</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full p-4 bg-slate-50 rounded-xl border-none text-sm font-bold focus:ring-2 focus:ring-[#007041] outline-none transition-all placeholder:text-slate-300" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nova Senha</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full p-4 bg-slate-50 rounded-xl border-none text-sm font-bold focus:ring-2 focus:ring-[#007041] outline-none transition-all placeholder:text-slate-300" 
                  />
                </div>
                <Button className="w-full bg-[#007041] hover:bg-[#005a34] h-14 rounded-xl font-bold shadow-lg shadow-[#007041]/20 transition-all active:scale-[0.98] mt-2">
                  Atualizar Senha
                </Button>
              </div>
            </SettingSection>

            <SettingSection title="Privacidade" icon={ShieldCheck} isDark={darkMode}>
              <p className="text-sm text-slate-500 mb-2 font-medium">Controle seus dados de progresso.</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-sm font-bold text-slate-700">Perfil visível na Wiki</span>
                  <input type="checkbox" defaultChecked className="accent-[#007041] h-5 w-5" />
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-sm font-bold text-slate-700">Compartilhar rankings</span>
                  <input type="checkbox" className="accent-[#007041] h-5 w-5" />
                </div>
              </div>
            </SettingSection>
          </div>
        </div>

        {/* BARRA LATERAL DIREITA */}
        <div className="lg:col-span-4 space-y-10">
          
          {/* Card de Perfil Institucional */}
          <div className="bg-[#007041] p-10 rounded-[40px] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="w-24 h-24 rounded-full border-4 border-white/20 mx-auto mb-4 overflow-hidden shadow-xl bg-white/10 flex items-center justify-center">
               <span className="text-3xl font-black">TS</span>
            </div>
            <h4 className="text-2xl font-black">Thiago Silva</h4>
            <p className="text-[10px] opacity-70 mb-8 uppercase tracking-[3px] font-bold leading-tight">
              Brand Manager<br/>Supply Chain Excellence
            </p>
            
            <div className="bg-black/20 rounded-full h-3 w-full mb-2">
              <div className="bg-[#5CFF9B] h-full w-[85%] rounded-full shadow-[0_0_15px_rgba(92,255,155,0.8)]"></div>
            </div>
            <p className="text-[10px] font-black text-right mb-8 text-[#5CFF9B]">NÍVEL DE PERFIL: 85%</p>
            
            <p className="text-sm italic opacity-90 leading-relaxed font-medium">
              "O aprendizado contínuo é o fermento do nosso sucesso."
            </p>
          </div>

          {/* Central de Ajuda */}
          <div className="p-4">
             <h4 className="text-[#007041] font-black mb-8 flex items-center gap-2 text-xl uppercase tracking-tighter">
               <HelpCircle className="h-6 w-6" /> Precisa de ajuda?
             </h4>
             <ul className="space-y-6">
               {[
                 { icon: FileText, label: "Perguntas Frequentes (FAQ)" },
                 { icon: Headphones, label: "Contatar Suporte Técnico" },
                 { icon: ShieldCheck, label: "Termos de Uso e Privacidade" }
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-4 text-slate-500 font-bold hover:text-[#007041] cursor-pointer transition-all group">
                   <div className="p-2 bg-slate-100 rounded-xl group-hover:bg-[#007041]/10">
                     <item.icon className="h-5 w-5" />
                   </div>
                   {item.label}
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </div>
    </div>
  )
}