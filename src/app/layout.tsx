import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="flex min-h-screen bg-gray-50">
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}