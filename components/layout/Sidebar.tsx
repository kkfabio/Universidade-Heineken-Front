"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Newspaper, BookOpen, Trophy, Settings } from "lucide-react";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Feed", href: "/feed", icon: Newspaper },
  { label: "Meus Cursos", href: "/cursos", icon: BookOpen },
  { label: "Certificados", href: "/certificados", icon: Trophy },
  { label: "Configurações", href: "/configuracoes", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-[88px] flex-col justify-between self-stretch bg-[#0B5D2A] text-white xl:w-[220px]">
      <div>
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-5 xl:px-6">
          <div className="h-10 w-10 rounded-full bg-white/20" />
          <div className="hidden xl:block">
            <p className="text-sm font-semibold leading-none">Learning Journey</p>
            <p className="mt-1 text-xs text-white/70">Knowledge Platform</p>
          </div>
        </div>

        <nav className="mt-6 px-3 xl:px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition xl:px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B5D2A] ${
                      isActive
                        ? "bg-[#2F8A52] text-white shadow-sm"
                        : "text-white/85 hover:bg-[#2C7A4B] hover:text-white"
                    }`}
                  >
                    <Icon size={18} className="shrink-0" />
                    <span className="hidden xl:inline">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
