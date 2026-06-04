"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

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
        setError(data.message || "E-mail ou senha incorretos");
      }
    } catch (error) {
      setError("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
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
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                E-mail Corporativo
              </label>

              <input
                type="email"
                placeholder="nome@heineken.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-heineken-green focus:ring-2 focus:ring-heineken-green/20 outline-none transition-all"
                required
              />
            </div>

            {/* Senha */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                Senha
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-heineken-green focus:ring-2 focus:ring-heineken-green/20 outline-none transition-all"
                  required
                />

                {/* Olho */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
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
              disabled={loading}
              className="w-full bg-heineken-green hover:bg-heineken-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-heineken-green/20 transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Entrando..." : "Entrar na Plataforma"}
            </button>
          </form>

          {/* Esqueci minha senha */}
          <div className="mt-6 text-center">
            <Link
              href="/forgot-password"
              className="text-heineken-green hover:text-heineken-dark text-xs font-medium uppercase tracking-widest transition-colors"
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