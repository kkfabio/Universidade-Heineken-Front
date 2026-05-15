import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UHNK - Learning Journey',
  description: 'Parte 3 - Curso e Quiz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
