"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "../components/layout/Sidebar";
import { Topbar } from "../components/layout/Topbar";

const PUBLIC_PAGES = ["/login", "/forgot-password"];

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isPublicPage = PUBLIC_PAGES.includes(pathname);
  // O admin tem layout próprio (em src/app/(admin)/admin/layout.tsx), então não envolvemos
  const isAdminPage = pathname.startsWith("/admin");

  if (isPublicPage || isAdminPage) {
    // Login / forgot-password / admin renderizam por conta própria
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-[#F4F4F1] text-neutral-900">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
