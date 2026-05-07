// src/components/Sidebar.tsx
'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar({ onNewTraining }: { onNewTraining?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { label: 'Home', icon: '🏠', href: '/dashboard' },
    { label: 'Meus Cursos', icon: '🎓', href: '/cursos' },
    { label: 'Certificados', icon: '📜', href: '/certificados' },
    { label: 'Equipe', icon: '👥', href: '/admin' },
    { label: 'Relatórios', icon: '📊', href: '/relatorios' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-100 p-8 flex flex-col justify-between min-h-screen sticky top-0">
      <div>
        <div className="text-[#004d2c] font-black text-2xl mb-12 tracking-tighter">UHNK</div>
        <nav className="space-y-6">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">Menu Principal</p>
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-4 font-bold text-sm p-2 transition-all ${
                pathname === item.href ? 'text-[#00b140]' : 'text-slate-400 hover:text-[#004d2c]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="space-y-6">
        <button 
          onClick={onNewTraining}
          className="w-full bg-[#3d6e35] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#004d2c] transition shadow-lg"
        >
          Novo Treinamento
        </button>
        <div className="space-y-2 border-t pt-4">
          <button onClick={() => router.push('/ajuda')} className="text-[11px] font-bold text-slate-400 flex items-center gap-2"><span>❓</span> Ajuda</button>
          <button onClick={() => router.push('/')} className="text-[11px] font-bold text-slate-400 flex items-center gap-2"><span>⬅️</span> Sair</button>
        </div>
      </div>
    </aside>
  );
}