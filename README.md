# 🍺 Universidade Heineken (UHNK) — Frontend

Interface web da plataforma de e-learning corporativo da Heineken, desenvolvida com Next.js 14, TypeScript e Tailwind CSS.

## 🔗 Links

- **Produção:** https://universidade-heineken-front-mu.vercel.app
- **Backend:** https://github.com/kkfabio/Universidade-Heineken-Backend

---

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- JWT (autenticação stateless via cookie)
- BCrypt (hash de senhas)

---

## ✨ Funcionalidades

- **Login** com validação de credenciais via JWT
- **Recuperação de senha** com validação de CPF e geração de senha temporária (expira em 5 minutos)
- **Troca de senha** com validação de força e verificação da senha atual via BCrypt
- **Proteção de rotas** via middleware Next.js (cookie JWT)
- **Logout** com limpeza de cookie e redirecionamento
- **Dashboard** com cursos e progresso do usuário

---

## 🔐 Arquitetura de Autenticação
Usuário → Vercel (Next.js) → Railway (Spring Boot) → Supabase (PostgreSQL)

- Senhas armazenadas com **BCrypt**
- Autenticação via **JWT stateless** (sem sessão no servidor)
- Token salvo em **cookie HTTP** com expiração de 24h
- Rotas privadas protegidas por **middleware** que valida o cookie

---

## ⚙️ Rodando localmente

### Pré-requisitos

- Node.js 18+
- Backend rodando (ver repositório do backend)

### Instalação

```bash
git clone https://github.com/kkfabio/Universidade-Heineken-Front
cd Universidade-Heineken-Front
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env.local` na raiz:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
```

### Rodando

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura do Projeto

src/
├── app/
│   ├── (public)/
│   │   ├── login/
│   │   └── forgot-password/
│   └── (private)/
│       └── (home)/
│           ├── dashboard/
│           ├── cursos/
│           └── configuracoes/
├── components/
└── middleware.ts

---

## 👤 Usuário de teste 

Email: joaosilva@heineken.com
Senha: Joao@!2021
CPF:   123.456.789-00

---

## 📄 Licença

Projeto desenvolvido para fins educacionais.
