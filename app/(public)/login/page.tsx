"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./components/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        document.cookie = `token=${data.token}; path=/; max-age=86400`;
        document.cookie = `role=${data.role}; path=/; max-age=86400`;
        if (data.role === "ADMIN") {
          router.push("/admin/dashboard");
        } else {
          router.push("/dashboard");
        }
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

      {/* Header da Tela */}
      <div className="z-10 text-center mb-8">
        <div className="text-heineken-red text-3xl mb-2">★</div>
        <h1 className="text-white text-3xl font-bold uppercase tracking-tight">
          UHNK — Universidade <br /> Heineken
        </h1>
        <p className="text-heineken-light/80 text-xs mt-2 tracking-[0.2em] font-medium uppercase">
          Login de Acesso
        </p>
      </div>

      {/* Card do Formulário com efeito de vidro */}
      <main className="z-10 w-full max-w-[400px] px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl">
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={handleLogin}
          />

          {/* Botão Esqueci minha senha */}
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
