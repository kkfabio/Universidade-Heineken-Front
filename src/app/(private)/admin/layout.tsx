'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  Bot, 
  Zap, 
  LogOut, 
  BookOpen
} from 'lucide-react';
import AdminTopbar from '@/components/admin/AdminTopbar';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/cursos', label: 'Cursos', icon: BookOpen },
  { href: '/admin/usuarios', label: 'Usuários', icon: Users },
  { href: '/admin/backlog-ia', label: 'Backlog da IA', icon: Bot },
  { href: '/admin/certificados', label: 'Certificados', icon: GraduationCap },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#F4F4F4] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 h-full bg-[#007042] text-white flex flex-col shrink-0">
        {/* Logo */}
        <div className="px-6 py-7 border-b border-[#005a35]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
              <span className="text-[#007042] font-black text-sm">H</span>
            </div>
            <div>
              <p className="font-black text-sm tracking-widest uppercase leading-none">HEINEKEN</p>
              <p className="text-[10px] text-green-200 opacity-80 leading-tight">Universidade</p>
            </div>
          </div>
        </div>

        {/* Admin badge */}
        <div className="px-6 py-3 bg-[#005a35]">
          <span className="text-[10px] font-bold uppercase tracking-widest text-green-300 flex items-center gap-2">
            <Zap size={12} className="fill-green-300" />
            Painel do Instrutor
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/admin/dashboard' && pathname.startsWith(item.href));
            
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-white text-[#007042] shadow-sm'
                    : 'text-green-100 hover:bg-[#005a35] hover:text-white'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-[#007042]' : 'text-green-200'} />
                <span>{item.label}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#007042]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-[#005a35] space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-300 hover:bg-red-900/20 hover:text-red-200 transition-colors"
          >
            <LogOut size={18} />
            <span>Sair</span>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <AdminTopbar />

        {/* Page content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
