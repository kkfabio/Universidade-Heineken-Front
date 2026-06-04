"use client";

interface LoginFormProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
}: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          E-mail
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nome@heineken.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007041]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Senha
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007041]"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#007041] hover:bg-[#005431] text-white font-bold py-3 rounded-lg transition-colors"
      >
        Entrar
      </button>
    </form>
  );
}