'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ onNewTraining }: { onNewTraining?: () => void }) {
  const pathname = usePathname();

  const menuItems = [
    { label: 'Home', icon: '🏠', href: '/dashboard' },
    { label: 'Gestão Equipe', icon: '👥', href: '/admin' },
    { label: 'Treinamentos', icon: '📚', href: '/cursos' },
    { label: 'Relatórios', icon: '📊', href: '/relatorios' },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-100 p-10 flex flex-col justify-between min-h-screen sticky top-0">
      <div>
        <div className="text-[#004d2c] font-black text-3xl mb-16 tracking-tighter">UHNK</div>
        
        <nav className="space-y-6">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">Menu Principal</p>
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-4 font-bold text-sm p-2 rounded-lg transition-all ${
                pathname === item.href ? 'text-[#00b140] bg-[#00b140]/5' : 'text-slate-400 hover:text-[#004d2c]'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-12">
          <button 
            onClick={onNewTraining}
            className="w-full bg-[#24522e] text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-[#004d2c] transition shadow-lg shadow-[#24522e]/20"
          >
            + Novo Treinamento
          </button>
        </div>
      </div>

      <div className="space-y-4 pt-8 border-t border-slate-50">
        <button className="flex items-center gap-4 font-bold text-sm text-slate-400 hover:text-slate-600 w-full p-2">
          <span>❓</span> Ajuda & Suporte
        </button>
        <button className="flex items-center gap-4 font-bold text-sm text-[#E32D2D] hover:opacity-80 w-full p-2">
          <span>🚪</span> Sair da Conta
        </button>
      </div>
    </aside>
  );
}