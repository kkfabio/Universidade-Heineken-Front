import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-heineken-green overflow-hidden">
      {/* (Marca d'água) */}
      <div className="absolute top-[-10%] right-[-5%] text-heineken-dark opacity-20 select-none pointer-events-none">
        <span className="text-[40rem] leading-none">★</span>
      </div>

      {/* Header da Tela */}
      <div className="z-10 text-center mb-8">
        <div className="text-heineken-red text-3xl mb-2">★</div>
        <h1 className="text-white text-3xl font-bold uppercase tracking-tight">
          UHNK — Universidade <br /> Heineken
        </h1>
        <p className="text-heineken-light/80 text-xs mt-2 tracking-[0.2em] font-medium uppercase">
          Brewing Knowledge Excellence
        </p>
      </div>

      {/* Card do Formulário */}
      <main className="z-10 w-full max-w-[400px] px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
          <LoginForm />
        </div>
        
        {/* Footer */}
        <p className="text-center text-heineken-light/50 text-[10px] mt-12 uppercase tracking-widest">
          © 2024 Heineken Heritage Learning
        </p>
      </main>
    </div>
  );
}
