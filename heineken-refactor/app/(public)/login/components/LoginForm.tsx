"use client";

interface LoginFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function LoginForm({ email, setEmail, password, setPassword, onSubmit }: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4 w-full max-w-sm">
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">E-mail Corporativo</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nome@heineken.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-heineken-green focus:ring-2 focus:ring-heineken-green/20 outline-none transition-all"
          required
        />
      </div>
      
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Senha</label>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-heineken-green focus:ring-2 focus:ring-heineken-green/20 outline-none transition-all"
          required
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-heineken-green hover:bg-heineken-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-heineken-green/20 transition-all transform active:scale-[0.98]"
      >
        Entrar na Plataforma
      </button>
    </form>
  );
}