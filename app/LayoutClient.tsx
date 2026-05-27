"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublicPage = pathname === "/login" || pathname === "/forgot-password";
  const isAdminPage = pathname.startsWith("/admin");

  if (isPublicPage) {
    return <main className="w-full min-h-screen">{children}</main>;
  }

  if (isAdminPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-[#F3F3EF]">
      <aside className="w-[88px] xl:w-[220px] fixed inset-y-0 left-0 z-50">
        <Sidebar />
      </aside>
      <div className="flex-1 ml-[88px] xl:ml-[220px] flex flex-col min-h-screen">
        <Topbar />
        <main className="flex-1 p-6 xl:p-8">{children}</main>
      </div>
    </div>
  );
}
