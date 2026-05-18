'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Home, 
  BookOpen, 
  Library, 
  GraduationCap, 
  Settings, 
  LogOut 
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  // Hide this sidebar on admin routes (the admin layout has its own sidebar)
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const navItems = [
    { href: '/dashboard', label: 'Início', icon: Home },
    { href: '/cursos', label: 'Meus Cursos', icon: BookOpen },
    { href: '/biblioteca', label: 'Biblioteca', icon: Library },
    { href: '/certificados', label: 'Certificados', icon: GraduationCap },
  ];

  return (
    <aside className="w-64 h-screen bg-[#007042] text-white p-4 flex flex-col hidden md:flex shrink-0 border-r border-[#005a35]">
      {/* Logo Section */}
      <div className="px-2 py-6 mb-6">
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
      
      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? 'bg-white text-[#007042] shadow-lg shadow-black/5' 
                  : 'text-green-100 hover:bg-[#005a35] hover:text-white'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-[#007042]' : 'text-green-200'} />
              {item.label}
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#007042]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Actions */}
      <div className="mt-auto pt-6 border-t border-[#008a52] space-y-1">
        <Link 
          href="/configuracoes" 
          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
            pathname === '/configuracoes'
              ? 'bg-white text-[#007042]'
              : 'text-green-100 hover:bg-[#005a35] hover:text-white'
          }`}
        >
          <Settings size={18} className={pathname === '/configuracoes' ? 'text-[#007042]' : 'text-green-200'} />
          Configurações
        </Link>
        <Link 
          href="/" 
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-300 hover:bg-red-900/20 hover:text-red-200 transition-all duration-200"
        >
          <LogOut size={18} />
          Sair
        </Link>
      </div>
    </aside>
  );
}
