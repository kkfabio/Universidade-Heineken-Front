"use client";

import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/feed": "Feed",
  "/cursos": "Meus Cursos",
  "/wiki": "Wiki",
  "/certificados": "Certificados",
  "/profile": "Perfil",
  "/configuracoes": "Configurações",
};

export function Topbar() {
  const pathname = usePathname();

  const pageTitle =
    Object.entries(pageTitles).find(
      ([key]) => pathname === key || pathname.startsWith(`${key}/`)
    )?.[1] ?? "Dashboard";

  return (
    <header className="flex h-16 items-center justify-between border-b border-black/5 bg-[#FBFBF8] px-6">
      <div className="flex items-center gap-4">
        <div className="text-sm font-bold uppercase tracking-[0.35em] text-[#0B5D2A]">
          UHNK
        </div>
        <span className="h-6 w-px bg-black/10" />
        <h1 className="text-sm font-semibold text-neutral-700">{pageTitle}</h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="Favoritos"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm text-neutral-600 transition duration-200 hover:bg-neutral-50 hover:text-[#0B5D2A] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D2A] focus-visible:ring-offset-2"
        >
          ♡
        </button>
        <button
          aria-label="Configurações"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm text-neutral-600 transition duration-200 hover:bg-neutral-50 hover:text-[#0B5D2A] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D2A] focus-visible:ring-offset-2"
        >
          ⚙
        </button>
        <button
          aria-label="Abrir perfil"
          className="h-10 w-10 rounded-full bg-[#CBE8B8] ring-2 ring-white transition hover:scale-[1.03] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D2A] focus-visible:ring-offset-2"
        />
      </div>
    </header>
  );
}
