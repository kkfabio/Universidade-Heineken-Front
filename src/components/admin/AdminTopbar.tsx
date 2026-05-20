'use client';

import { useState, useRef, useEffect } from 'react';
import { Bell, CheckCheck, X } from 'lucide-react';

// --- Tipos -------------------------------------------------------------------

interface Notification {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

// --- Mock inicial ------------------------------------------------------------

const initialNotifications: Notification[] = [
  {
    id: '1',
    title: 'Novo aluno matriculado',
    body: 'Carlos Souza se inscreveu em "Cultura Cervejeira e Liderança".',
    time: 'Agora mesmo',
    read: false,
  },
  {
    id: '2',
    title: 'Curso concluído',
    body: 'Ana Lima concluiu o curso "Segurança no Trabalho" com 98% de aproveitamento.',
    time: '15 min atrás',
    read: false,
  },
  {
    id: '3',
    title: 'Aluno em risco',
    body: 'Bruno Alves está com progresso abaixo de 20% há mais de 7 dias.',
    time: '1h atrás',
    read: false,
  },
  {
    id: '4',
    title: 'Certificado emitido',
    body: 'Juliana Costa recebeu o certificado de "Gestão de Equipes".',
    time: 'Ontem',
    read: true,
  },
  {
    id: '5',
    title: 'Novo comentário',
    body: 'Rafael Mendes deixou uma dúvida no módulo 3 de "Gestão de Equipes".',
    time: '2 dias atrás',
    read: true,
  },
];

// --- Componente --------------------------------------------------------------

export default function AdminTopbar() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  function markAsRead(id: string) {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  }

  function markAllAsRead() {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }

  function dismiss(id: string) {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0 shadow-sm">
      {/* Título */}
      <div>
        <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
          Universidade Heineken
        </h2>
        <p className="text-xs text-gray-500">Painel Administrativo</p>
      </div>

      <div className="flex items-center gap-4">
        {/* Sino */}
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(prev => !prev)}
            className="relative p-2 text-gray-500 hover:text-heineken-green transition-colors rounded-lg hover:bg-gray-50"
            aria-label="Notificações"
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-heineken-red" />
            )}
          </button>

          {/* Painel de notificações */}
          {isOpen && (
            <div
              ref={panelRef}
              className="absolute right-0 top-full mt-2 w-[360px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-100 z-50 overflow-hidden"
            >
              {/* Header do painel */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">Notificações</span>
                  {unreadCount > 0 && (
                    <span className="text-[10px] font-bold bg-heineken-red text-white rounded-full px-1.5 py-0.5 leading-none">
                      {unreadCount}
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="flex items-center gap-1 text-xs font-semibold text-heineken-green hover:text-heineken-dark transition-colors"
                  >
                    <CheckCheck size={13} />
                    Marcar todas como lidas
                  </button>
                )}
              </div>

              {/* Lista */}
              <div className="max-h-[400px] overflow-y-auto divide-y divide-gray-50">
                {notifications.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-2 text-center px-6">
                    <Bell size={28} className="text-gray-300" />
                    <p className="text-sm font-semibold text-gray-500">Nenhuma notificação</p>
                    <p className="text-xs text-gray-400">Você está em dia com tudo.</p>
                  </div>
                ) : (
                  notifications.map(notification => (
                    <div
                      key={notification.id}
                      onClick={() => markAsRead(notification.id)}
                      className={`group relative flex gap-3 px-5 py-4 cursor-pointer transition-colors ${
                        notification.read
                          ? 'bg-white hover:bg-gray-50'
                          : 'bg-green-50/60 hover:bg-green-50'
                      }`}
                    >
                      {/* Indicador não lida */}
                      <div className="mt-1.5 shrink-0">
                        <span
                          className={`block w-2 h-2 rounded-full transition-colors ${
                            notification.read ? 'bg-gray-200' : 'bg-heineken-green'
                          }`}
                        />
                      </div>

                      {/* Conteúdo */}
                      <div className="flex-1 min-w-0 pr-6">
                        <p className={`text-xs font-bold leading-snug ${notification.read ? 'text-gray-600' : 'text-gray-900'}`}>
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {notification.body}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1.5 font-medium">
                          {notification.time}
                        </p>
                      </div>

                      {/* Botão remover */}
                      <button
                        onClick={e => { e.stopPropagation(); dismiss(notification.id); }}
                        className="absolute top-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-600 p-0.5 rounded"
                        aria-label="Remover notificação"
                      >
                        <X size={13} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {notifications.length > 0 && (
                <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50">
                  <p className="text-[10px] text-gray-400 text-center">
                    Clique em uma notificação para marcá-la como lida
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Avatar do admin */}
        <div className="flex items-center gap-2.5 pl-4 border-l border-gray-200">
          <div className="w-8 h-8 rounded-full bg-heineken-green flex items-center justify-center">
            <span className="text-white font-bold text-xs">A</span>
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold text-gray-800">Admin</p>
            <p className="text-[10px] text-gray-500">Instrutor</p>
          </div>
        </div>
      </div>
    </header>
  );
}
