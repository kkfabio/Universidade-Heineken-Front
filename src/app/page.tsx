import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4F7F5] p-6 text-center">
      <h1 className="text-[#004d2c] font-serif text-5xl font-bold mb-4 tracking-tight">Bem-vindo à Universidasde Heineken</h1>
      <p className="text-slate-500 text-lg mb-10 max-w-md">Acesse sua plataforma de treinamentos e gestão de talentos.</p>
      
      <Link href="/dashboard" className="bg-[#004d2c] text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-[#00b140] transition-all shadow-xl shadow-[#004d2c]/20">
        Entrar na Plataforma
      </Link>
    </div>
  );
}