import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UHNK Platform",
  description: "Feed da empresa e catálogo de cursos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}