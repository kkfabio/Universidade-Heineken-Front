"use client";

import { usePathname } from "next/navigation";
import Sidebar from "../components/Sidebar";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPublicPage = pathname === "/login" || pathname === "/forgot-password";

  return (
    <>
      {isPublicPage ? (
        <main className="w-full min-h-screen">
          {children}
        </main>
      ) : (
        <div className="flex min-h-screen">
          <aside className="w-64 fixed inset-y-0 left-0 z-50">
            <Sidebar />
          </aside>
          <main className="flex-1 ml-64 p-8">
            {children}
          </main>
        </div>
      )}
    </>
  );
}