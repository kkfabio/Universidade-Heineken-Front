import '../styles/globals.css';
import LayoutClient from './LayoutClient';

export const metadata = {
  title: 'UHNK — Universidade Heineken',
  description: 'Plataforma de aprendizado corporativo da Heineken',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-[#F4F4F4]">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
