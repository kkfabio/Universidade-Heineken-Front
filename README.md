# Universidade Heineken — Front Unificado (UHNK)

Plataforma de aprendizado corporativo da Heineken. Este repositório é o **merge** das 8 branches do grupo de front, mantendo cada tela o mais próxima possível do que cada integrante entregou e fazendo apenas os ajustes mínimos necessários para tudo conviver em um mesmo Next.js app.

## Stack

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS v4 (`@theme` via `globals.css`)
- shadcn/ui (button, card, input, switch, etc.)
- lucide-react para ícones

## Como rodar

```bash
npm install
npm run dev
```

App em [http://localhost:3000](http://localhost:3000).

## Mapa de telas (e quem entregou cada uma)

| Rota                              | Branch de origem  | O que é                                   |
| --------------------------------- | ----------------- | ----------------------------------------- |
| `/`                               | —                 | Redirect para `/login`                    |
| `/login`                          | **Fabio Nunes**   | Tela de login com card de vidro           |
| `/forgot-password`                | **Fabio Nunes**   | Recuperação de senha (split-screen)       |
| `/dashboard`                      | **Fabio Nunes**   | Home com modais (Novidades + Notificações)|
| `/feed`                           | **Warlley Santos**| Central de notícias                       |
| `/cursos`                         | **Warlley Santos**| Catálogo + Em andamento + Concluídos      |
| `/cursos/[id]`                    | **Warlley Santos**| Detalhe do curso com conteúdo programático|
| `/certificados`                   | **Hugo Cavalcanti**| Repositório de certificados com badges   |
| `/configuracoes`                  | **Hugo Cavalcanti**| Notificações, senha, privacidade, perfil |
| `/perfil`                         | **Pedro Soares**  | Perfil do colaborador (João Silva)        |
| `/perfil/curso-concluido`         | **Luiz Fernando** | Tela de conclusão de curso                |
| `/wiki`                           | **Luiz Fernando** | Wiki institucional                        |
| `/admin/dashboard`                | **João Victor**   | Painel do instrutor (stats e atividades)  |
| `/admin/usuarios`                 | João Victor (rota)| Listagem de usuários                      |
| `/admin/usuarios/novo`            | João Victor (rota)| Cadastro de novo usuário                  |
| `/admin/usuarios/[id]`            | João Victor (rota)| Detalhe de usuário                        |
| `/admin/cursos/novo`              | João Victor (rota)| Criação de novo curso                     |
| `/admin/cursos/[id]/aulas`        | João Victor (rota)| Gestão de aulas do curso                  |
| `/admin/certificados`             | João Victor (rota)| Certificados emitidos pela plataforma     |
| `/admin/progresso`                | João Victor (rota)| Taxa de conclusão por curso               |
| `/admin/ia-historico`             | João Victor (rota)| Histórico de interações com IA            |
| `/admin/talentos`                 | **Pedro Soares**  | Gestão de talentos + modal AddTalent      |

> As rotas marcadas como "João Victor (rota)" tiveram páginas vazias no ZIP original — criei stubs funcionais e coerentes com o resto do painel admin para que o menu não quebre.

## Decisões de merge

1. **Base estrutural**: `main` (TypeScript + Tailwind v4 + shadcn).
2. **Sidebar + Topbar globais**: do **Warlley** (mais moderna). Adicionei links para Dashboard, Perfil, Configurações e Admin sem mexer no estilo.
3. **LayoutClient** (em `src/app/LayoutClient.tsx`): controla quando mostrar o layout com sidebar. Em `/login`, `/forgot-password` e em `/admin/*` o layout global é suprimido — login/recuperação renderizam tela cheia e o admin tem layout próprio (do João).
4. **Páginas do Warlley** (`/feed`, `/cursos`, `/cursos/[id]`): originalmente importavam Sidebar e Topbar diretamente. Removi essas importações redundantes para evitar duplicação visual com o LayoutClient. **Nenhum outro ajuste no visual delas.**
5. **Dashboard do Fabio**: removida apenas a `<nav>` simulada interna (UHNK + avatar) que duplicava o Topbar global. Modais, blur, animações e demais elementos: intactos.
6. **HTMLs do Luiz**: os 3 arquivos sem extensão (`meuperfil`, `cursoconcluido`, `wikipagina`) eram HTML puro com `<style>` interno. Convertidos para componentes React mantendo **100% do CSS original via `styled-jsx`** dentro do componente. A página `meuperfil` foi substituída pelo perfil mais rico do Pedro em `/perfil`, enquanto `cursoconcluido` e `wikipagina` foram preservadas em `/perfil/curso-concluido` e `/wiki`. O sidebar duplicado do HTML foi removido (o global já cobre).
7. **Conflito `/admin`**: tanto Pedro quanto João tinham rotas `/admin/*`. Resolvi colocando a gestão de talentos do Pedro em `/admin/talentos` (acessível pelo menu admin), preservando o resto do painel do João como `/admin/dashboard`, `/admin/usuarios`, etc.

## Estrutura

```
src/
├── app/
│   ├── (admin)/admin/       ← Painel admin (João + talentos do Pedro)
│   │   ├── layout.tsx       ← Layout próprio do admin (sem sidebar global)
│   │   ├── dashboard/
│   │   ├── usuarios/[id]/
│   │   ├── usuarios/novo/
│   │   ├── cursos/novo/
│   │   ├── cursos/[id]/aulas/
│   │   ├── certificados/
│   │   ├── progresso/
│   │   ├── ia-historico/
│   │   └── talentos/        ← Pedro
│   ├── login/               ← Fabio
│   ├── forgot-password/     ← Fabio
│   ├── dashboard/           ← Fabio (com modais)
│   ├── feed/                ← Warlley
│   ├── cursos/[id]/         ← Warlley
│   ├── certificados/        ← Hugo
│   ├── configuracoes/       ← Hugo
│   ├── perfil/              ← Pedro
│   │   └── curso-concluido/ ← Luiz
│   ├── wiki/                ← Luiz
│   ├── LayoutClient.tsx
│   ├── layout.tsx
│   └── page.tsx             ← redirect → /login
├── components/
│   ├── layout/              ← Sidebar + Topbar (Warlley)
│   ├── ui/                  ← shadcn (button, card, input, switch...)
│   ├── feed/                ← componentes Warlley (FeedGrid, NewsCard etc)
│   ├── cursos/              ← componentes Warlley (CourseCard etc)
│   ├── admin/               ← modais Pedro (AddTalent, NewJourney)
│   ├── CertificateCard.tsx  ← Hugo
│   └── SettingSection.tsx   ← Hugo
├── lib/utils.ts             ← cn() helper
├── styles/globals.css       ← tema Heineken via @theme
└── types/                   ← types Warlley
```

## Notas

- O login do Fabio só aceita e-mails terminados em `@heineken.com` e redireciona para `/dashboard`.
- O dashboard do Fabio abre com o modal de Novidades por padrão (estado inicial `showNews = true`).
- O admin tem layout próprio (sidebar verde com o badge "Painel do Instrutor") e não compartilha o Topbar global do usuário.
