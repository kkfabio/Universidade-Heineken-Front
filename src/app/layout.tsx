"use client"; // Precisamos disso para usar o usePathname

import { usePathname } from "next/navigation";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Definimos quais rotas NÃO devem ter a Sidebar
  const isPublicPage = pathname === "/login";

  return (
    <html lang="pt-br">
      <body className="bg-heineken-light">
        {isPublicPage ? (
          // Se for login, renderiza apenas o conteúdo (tela cheia)
          <main className="w-full min-h-screen">
            {children}
          </main>
        ) : (
          // Se for qualquer outra página, renderiza com Sidebar
          <div className="flex min-h-screen">
            <aside className="w-64 fixed inset-y-0 left-0 z-50">
              <Sidebar />
            </aside>
            <main className="flex-1 ml-64 p-8">
              {children}
            </main>
          </div>
        )}
      </body>
    </html>
  );
}