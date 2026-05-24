import './globals.css'
import LayoutClient from './LayoutClient';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={cn("font-sans", geist.variable)}>
      <body className="bg-heineken-light">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
