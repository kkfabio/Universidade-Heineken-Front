"use client";
import { Bell, Mail, Smartphone, Globe, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NotificationSettings() {
  const settings = [
    { id: 'courses', title: 'Novos Cursos', desc: 'Avisar quando novos treinamentos forem liberados.', icon: <Globe size={20}/> },
    { id: 'certificates', title: 'Certificados', desc: 'Notificar quando um certificado estiver pronto.', icon: <Smartphone size={20}/> },
    { id: 'events', title: 'Eventos e Lives', desc: 'Lembretes de transmissões ao vivo da Heineken.', icon: <Mail size={20}/> },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      {/* Botão Voltar */}
      <Link href="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-heineken-green transition-colors mb-6 group">
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">Voltar ao Dashboard</span>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Bell className="text-heineken-green" /> Notificações
        </h1>
        <p className="text-gray-500 mt-2 italic">Gerencie como você recebe as atualizações da Heineken University.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {settings.map((item, index) => (
          <div key={item.id} className={`p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors ${index !== settings.length - 1 ? 'border-b border-gray-50' : ''}`}>
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-2xl bg-gray-50 flex items-center justify-center text-heineken-green">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
            
            {/* Toggle Switch */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-heineken-green"></div>
            </label>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-end gap-4">
        <button className="px-8 py-3 rounded-xl text-sm font-bold text-gray-400 hover:bg-gray-100 transition-all">Descartar</button>
        <button className="px-8 py-3 rounded-xl text-sm font-bold text-white bg-heineken-green hover:bg-heineken-dark shadow-lg shadow-heineken-green/20 transition-all">Salvar Preferências</button>
      </div>
    </div>
  );
}