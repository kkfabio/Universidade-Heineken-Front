"use client";
import { Bell, X, CheckCircle2, Award, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

interface NotificationListProps {
  onClose: () => void;
}

export default function NotificationListModal({ onClose }: NotificationListProps) {
  const router = useRouter();

  const notifications = [
    {
      id: 1,
      icon: <CheckCircle2 className="text-heineken-green" size={20} />,
      title: "Novo curso disponível: Liderança Exponencial",
      desc: "Acesse agora o conteúdo",
      type: "course"
    },
    {
      id: 2,
      icon: <Award className="text-heineken-green" size={20} />,
      title: "Certificado disponível para download",
      desc: "Parabéns! Você concluiu 'Heineken 2030'",
      type: "award"
    },
    {
      id: 3,
      icon: <Calendar className="text-heineken-red" size={20} />,
      title: "Lembrete: Aula Magna amanhã",
      desc: "Não perca o encontro com nosso CEO às 10h",
      type: "alert"
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Header do Modal */}
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-2 font-bold text-gray-800">
            <Bell className="text-heineken-green" size={20} />
            Notificações
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Lista de Notificações */}
        <div className="mt-4 space-y-4">
          {notifications.map((n) => (
            <div 
              key={n.id} 
              className="flex gap-4 rounded-xl border border-gray-50 p-3 hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 group-hover:bg-white transition-colors">
                {n.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 leading-tight">
                  {n.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {n.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Ação para Configurações */}
        <button 
          onClick={() => router.push("/configuracoes/notificacoes")}
          className="mt-6 w-full text-center text-xs font-bold uppercase tracking-widest text-heineken-green hover:text-heineken-dark hover:underline transition-all"
        >
          Ver todas as notificações
        </button>
      </div>
    </div>
  );
}