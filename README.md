# 🍺 Universidade Heineken — Frontend

Interface web da plataforma **Universidade Heineken**, desenvolvida com Next.js 16 e React 19. O projeto oferece uma experiência de aprendizado moderna, com foco em design limpo e performance.

🔗 **Deploy:** [universidade-heineken-front-dev-bxx.vercel.app](https://universidade-heineken-front-dev-bxx.vercel.app)

---

## 🚀 Stack

| Tecnologia | Versão | Descrição |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.4 | Framework React com App Router |
| [React](https://react.dev/) | 19.2.4 | Biblioteca de interface |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Estilização utilitária |
| [shadcn/ui](https://ui.shadcn.com/) | ^4.8.0 | Componentes acessíveis e customizáveis |
| [Radix UI](https://www.radix-ui.com/) | — | Primitivos de UI headless |
| [Recharts](https://recharts.org/) | ^3.8.1 | Gráficos e visualizações de dados |
| [Lucide React](https://lucide.dev/) | ^1.16.0 | Ícones SVG |

---

## 📁 Estrutura de Pastas

```
├── app/                  # Rotas e layouts (App Router do Next.js)
├── components/           # Componentes reutilizáveis
├── lib/                  # Utilitários e helpers
├── public/               # Arquivos estáticos (imagens, fonts, etc.)
├── src/                  # Código-fonte adicional
├── types/                # Definições de tipos TypeScript
├── tailwind.config.ts    # Configuração do Tailwind
├── next.config.ts        # Configuração do Next.js
└── tsconfig.json         # Configuração do TypeScript
```

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Node.js >= 18
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/kkfabio/Universidade-Heineken-Front.git
cd Universidade-Heineken-Front

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build de produção

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 🌐 Deploy

O projeto está configurado para deploy automático na [Vercel](https://vercel.com/). Qualquer push na branch `main` dispara um novo deploy.

Para fazer deploy manual via Vercel CLI:

```bash
npx vercel --prod
```

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature: `git checkout -b feat/minha-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona minha feature'`
4. Push para a branch: `git push origin feat/minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é privado e de uso interno. © Universidade Heineken.
