# Guia de Commits — Branch `Matheus-Gabriel`

Plano de **13 commits** para integrar o front unificado partindo da branch `main` atual (que só tem a base mínima).

> ⚠️ **Atenção**: a branch `main` já tem `package.json`, `tsconfig.json`, `tailwind.config.ts`, `src/components/Sidebar.tsx`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/configuracoes/page.tsx`, `src/components/ui/*`, `src/lib/utils.ts` e `src/styles/globals.css`. Esses arquivos serão **substituídos** durante os commits, pois o projeto unificado moderniza tudo (Next 15, Tailwind v4, app modular).

---

## Passo 1 — Criar a branch a partir da main

```bash
git checkout main
git pull origin main
git checkout -b Matheus-Gabriel
```

---

## Passo 2 — Copiar todos os arquivos do projeto unificado para a raiz do repositório

Descompacte o ZIP e copie tudo (incluindo arquivos ocultos como `.gitignore`) para a raiz do repositório, **substituindo** o que existir.

```bash
# Exemplo (ajuste os caminhos para o seu ambiente):
unzip Universidade-Heineken-Front-unificado.zip
cp -r Universidade-Heineken-Front-unificado/* Universidade-Heineken-Front/
cp -r Universidade-Heineken-Front-unificado/.gitignore Universidade-Heineken-Front/
cd Universidade-Heineken-Front
```

---

## Passo 3 — Antes do primeiro commit, remova os arquivos da main que serão substituídos

A main tinha alguns `.gitkeep` em pastas vazias e um `Sidebar.tsx` em `src/components/` (que agora vive em `src/components/layout/`). Vamos limpar:

```bash
git rm -f src/components/Sidebar.tsx 2>/dev/null || true
git rm -f src/app/biblioteca/.gitkeep 2>/dev/null || true
git rm -f src/app/cursos/.gitkeep 2>/dev/null || true
git rm -f src/app/dashboard/.gitkeep 2>/dev/null || true
git rm -f src/app/certificados/.gitkeep 2>/dev/null || true
git rm -f src/app/perfil/.gitkeep 2>/dev/null || true
git rm -f src/components/.gitkeep 2>/dev/null || true
git rm -f src/tsconfig.json 2>/dev/null || true
git rm -f src/next-env.d.ts 2>/dev/null || true
```

(O script `commit-history.sh` já faz isso pra você.)

---

## Os 13 commits

### Commit 1 — Configuração base
```
chore: moderniza setup do projeto para Next.js 15 e Tailwind v4
```

**Arquivos:** `package.json`, `tsconfig.json`, `postcss.config.cjs`, `next.config.mjs`, `.gitignore`, `src/styles/globals.css`, `src/lib/utils.ts`

```bash
git rm -f src/components/Sidebar.tsx src/app/biblioteca/.gitkeep src/app/cursos/.gitkeep \
          src/app/dashboard/.gitkeep src/app/certificados/.gitkeep src/app/perfil/.gitkeep \
          src/components/.gitkeep src/tsconfig.json src/next-env.d.ts 2>/dev/null
git rm -f tailwind.config.ts 2>/dev/null
git add package.json tsconfig.json postcss.config.cjs next.config.mjs .gitignore src/styles/globals.css src/lib/utils.ts
git commit -m "chore: moderniza setup do projeto para Next.js 15 e Tailwind v4"
```

---

### Commit 2 — Componentes UI base
```
feat(ui): atualiza componentes shadcn (button, card, input, switch, label, alert, checkbox)
```

```bash
git add src/components/ui/
git commit -m "feat(ui): atualiza componentes shadcn (button, card, input, switch, label, alert, checkbox)"
```

---

### Commit 3 — Layout global
```
feat(layout): adiciona Sidebar e Topbar globais com LayoutClient
```

```bash
git add src/components/layout/ src/app/layout.tsx src/app/LayoutClient.tsx src/app/page.tsx
git commit -m "feat(layout): adiciona Sidebar e Topbar globais com LayoutClient"
```

---

### Commit 4 — Autenticação (Fabio)
```
feat(auth): integra telas de login e recuperação de senha da branch Fabio-Nunes
```

```bash
git add src/app/login/ src/app/forgot-password/
git commit -m "feat(auth): integra telas de login e recuperação de senha da branch Fabio-Nunes"
```

---

### Commit 5 — Dashboard (Fabio)
```
feat(dashboard): integra dashboard com modais de novidades e notificações
```

```bash
git add src/app/dashboard/
git commit -m "feat(dashboard): integra dashboard com modais de novidades e notificações"
```

---

### Commit 6 — Feed (Warlley)
```
feat(feed): integra central de notícias da branch warlley-santos
```

```bash
git add src/app/feed/ src/components/feed/ src/types/post.ts public/
git commit -m "feat(feed): integra central de notícias da branch warlley-santos"
```

---

### Commit 7 — Cursos (Warlley)
```
feat(cursos): integra catálogo e detalhes de cursos da branch warlley-santos
```

```bash
git add src/app/cursos/ src/components/cursos/ src/types/course.ts
git commit -m "feat(cursos): integra catálogo e detalhes de cursos da branch warlley-santos"
```

---

### Commit 8 — Certificados e Configurações (Hugo)
```
feat(perfil): integra certificados e configurações da branch hugo-cavalcanti
```

```bash
git add src/app/certificados/ src/app/configuracoes/ src/components/CertificateCard.tsx src/components/SettingSection.tsx
git commit -m "feat(perfil): integra certificados e configurações da branch hugo-cavalcanti"
```

---

### Commit 9 — Perfil do colaborador (Pedro)
```
feat(perfil): integra página de perfil da branch Pedro-Soares
```

```bash
git add src/app/perfil/page.tsx
git commit -m "feat(perfil): integra página de perfil da branch Pedro-Soares"
```

---

### Commit 10 — Wiki e curso concluído (Luiz)
```
feat(conteudo): integra wiki e tela de conclusão da branch luiz-fernando
```

```bash
git add src/app/wiki/ src/app/perfil/curso-concluido/
git commit -m "feat(conteudo): integra wiki e tela de conclusão da branch luiz-fernando"
```

---

### Commit 11 — Painel administrativo (João Victor + Pedro)
```
feat(admin): integra painel administrativo das branches Joao-Victor-MBP e Pedro-Soares
```

```bash
git add 'src/app/(admin)/' src/components/admin/
git commit -m "feat(admin): integra painel administrativo das branches Joao-Victor-MBP e Pedro-Soares"
```

---

### Commit 12 — Turbopack no Next config
```
chore(build): habilita Turbopack no next config (cherry-pick de Fabio-Nunes)
```

Esse commit existe porque o Fabio adicionou suporte a Turbopack em uma atualização recente da branch dele. Integramos ao `next.config.mjs` unificado.

```bash
# O next.config.mjs já está atualizado, então esse commit é só uma anotação
# se você quiser separá-lo do commit 1. Caso queira deixar isso já no commit 1, pode pular.
# Se quiser separá-lo: edite o next.config.mjs no commit 1 sem Turbopack, depois adicione aqui.
```

> Se quiser pular esse commit e deixar o Turbopack já no commit 1, ignore esta etapa.

---

### Commit 13 — Documentação
```
docs: adiciona README com mapa de rotas e decisões de arquitetura
```

```bash
git add README.md
git add -A
git commit -m "docs: adiciona README com mapa de rotas e decisões de arquitetura"
```

---

## Empurrar para o GitHub

```bash
git push -u origin Matheus-Gabriel
```

Depois é só abrir o Pull Request da `Matheus-Gabriel` → `main`.

---

## Resultado esperado do `git log --oneline`

```
... docs: adiciona README com mapa de rotas e decisões de arquitetura
... feat(admin): integra painel administrativo das branches Joao-Victor-MBP e Pedro-Soares
... feat(conteudo): integra wiki e tela de conclusão da branch luiz-fernando
... feat(perfil): integra página de perfil da branch Pedro-Soares
... feat(perfil): integra certificados e configurações da branch hugo-cavalcanti
... feat(cursos): integra catálogo e detalhes de cursos da branch warlley-santos
... feat(feed): integra central de notícias da branch warlley-santos
... feat(dashboard): integra dashboard com modais de novidades e notificações
... feat(auth): integra telas de login e recuperação de senha da branch Fabio-Nunes
... feat(layout): adiciona Sidebar e Topbar globais com LayoutClient
... feat(ui): atualiza componentes shadcn (button, card, input, switch, label, alert, checkbox)
... chore: moderniza setup do projeto para Next.js 15 e Tailwind v4
... (commits anteriores da main)
```
