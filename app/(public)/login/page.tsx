"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        document.cookie = `token=${data.token}; path=/; max-age=86400`;
        router.push("/dashboard");
      } else {
        alert("E-mail ou senha incorretos");
      }
    } catch (error) {
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-heineken-green overflow-hidden">
      {/* Estrela (Marca d'água) */}
      <div className="absolute top-[-10%] right-[-5%] text-heineken-dark opacity-20 select-none pointer-events-none">
        <span className="text-[40rem] leading-none">★</span>
      </div>

      {/* Header */}
      <div className="z-10 text-center mb-8">
        <div className="text-heineken-red text-3xl mb-2">★</div>

        <h1 className="text-white text-3xl font-bold uppercase tracking-tight">
          UHNK — Universidade <br /> Heineken
        </h1>

        <p className="text-heineken-light/80 text-xs mt-2 tracking-[0.2em] font-medium uppercase">
          Login de Acesso
        </p>
      </div>

      {/* Card */}
      <main className="z-10 w-full max-w-[400px] px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-white text-sm mb-2">
                E-mail
              </label>

              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-heineken-light transition"
                required
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block text-white text-sm mb-2">
                Senha
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-heineken-light transition"
                  required
                />

                {/* Olho */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-black hover:text-gray-800 transition"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              className="w-full bg-white text-heineken-green hover:bg-heineken-light font-bold py-3 rounded-xl uppercase tracking-wider transition-all duration-300"
            >
              Entrar
            </button>
          </form>

          {/* Esqueci minha senha */}
          <div className="mt-6 text-center">
            <Link
              href="/forgot-password"
              className="text-white/60 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors inline-block"
            >
              Esqueci minha senha
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-heineken-light/50 text-[10px] mt-12 uppercase tracking-widest">
          © 2026 Heineken Heritage Learning
        </p>
      </main>
    </div>
  );
}