'use client';

export default function Navbar() {
  return (
    <nav className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-12 sticky top-0 z-40">
      {/* Lado Esquerdo: Logo */}
      <div className="flex items-center gap-12">
        <div className="text-[#004d2c] font-black text-2xl tracking-tighter">UHNK</div>
        
        {/* Links de Atalho Centrais */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-300">
          <span className="hover:text-[#004d2c] cursor-pointer transition">Dashboard</span>
          <span className="hover:text-[#004d2c] cursor-pointer transition">Treinamentos</span>
          <span className="hover:text-[#004d2c] cursor-pointer transition text-[#00b140] border-b-2 border-[#00b140] pb-1">Gestão</span>
        </div>
      </div>

      {/* Lado Direito: Ícones e Perfil */}
      <div className="flex items-center gap-6">
        <button className="text-slate-400 hover:text-slate-600 transition relative">
          <span className="text-xl">🔔</span>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E32D2D] rounded-full border-2 border-white"></span>
        </button>
        
        <button className="text-slate-400 hover:text-slate-600 transition">
          <span className="text-xl">⚙️</span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-100">
            {/* Imagem do usuário logado */}
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
          </div>
        </div>
      </div>
    </nav>
  );
}