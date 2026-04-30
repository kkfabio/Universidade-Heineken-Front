"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Login tentado");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Campo Email */}
      <div className="space-y-2">
        <label 
          htmlFor="email"
          className="text-white text-[10px] font-bold uppercase tracking-wider ml-1"
        >
          Email
        </label>
        <input
          id="email"
          required
          type="email"
          placeholder="Colaborador@heineken.com"
          className="w-full bg-white/20 border-none rounded-lg p-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/50 outline-none transition-all"
        />
      </div>

      {/* Campo Senha */}
      <div className="space-y-2">
        <label 
          htmlFor="password"
          className="text-white text-[10px] font-bold uppercase tracking-wider ml-1"
        >
          Senha
        </label>
        <div className="relative">
          <input
            id="password"
            required
            type={showPassword ? "text" : "password"}
            placeholder="........"
            className="w-full bg-white/20 border-none rounded-lg p-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/50 outline-none transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-1"
            aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Botão Entrar */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#D9D9D9] hover:bg-white text-[#007042] font-bold py-3 rounded-lg transition-colors uppercase text-sm tracking-widest mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <div className="h-5 w-5 border-2 border-[#007042] border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Entrar"
        )}
      </button>

      {/* Link Esqueci Senha - Atualizado para /forgot-password */}
      <div className="text-center">
        <Link 
          href="/forgot-password" 
          className="text-white/80 text-xs hover:text-white underline-offset-4 hover:underline transition-all"
        >
          Esqueci minha senha
        </Link>
      </div>
    </form>
  );
}