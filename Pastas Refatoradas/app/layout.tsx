import '../styles/global.css'
import LayoutClient from './LayoutClient';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-heineken-light">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}