"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="min-h-screen flex items-center justify-center bg-[#007041] p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-bold mb-2">UHNK</h1>
          <p className="text-white/80 text-sm">Universidade Heineken</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg text-sm font-medium">
              {error}
            </div>
          )}

          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={handleLogin}
          />

          <div className="mt-6 text-center">
            <Link
              href="/forgot-password"
              className="text-[#007041] hover:text-[#005431] text-sm font-medium"
            >
              Esqueci minha senha
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}