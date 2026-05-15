#!/bin/bash
# ============================================================================
# Script de commits para a branch Matheus-Gabriel
# ============================================================================
# COMO USAR:
#
# 1. Clone o repositório (se ainda não clonou):
#    git clone <url-do-repo>
#    cd Universidade-Heineken-Front
#
# 2. Crie a branch a partir da main atualizada:
#    git checkout main
#    git pull origin main
#    git checkout -b Matheus-Gabriel
#
# 3. Descompacte o ZIP do projeto unificado dentro do repositório,
#    sobrescrevendo o que existir (incluindo arquivos ocultos como .gitignore).
#    Exemplo:
#      unzip Universidade-Heineken-Front-unificado.zip -d /tmp/
#      cp -ra /tmp/Universidade-Heineken-Front-unificado/. ./
#
# 4. Rode este script:
#    chmod +x commit-history.sh
#    ./commit-history.sh
#
# 5. Empurre para o GitHub:
#    git push -u origin Matheus-Gabriel
# ============================================================================

# Verifica se está em um repositório git
if [ ! -d ".git" ]; then
  echo "❌ Esta pasta não é um repositório git. Clone o repo primeiro."
  exit 1
fi

# Verifica se está na branch Matheus-Gabriel
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "Matheus-Gabriel" ]; then
  echo "⚠️  Você está na branch '$CURRENT_BRANCH', não em 'Matheus-Gabriel'."
  echo "Rode: git checkout -b Matheus-Gabriel"
  exit 1
fi

# Função auxiliar: faz commit apenas se houver algo staged
commit_if_staged() {
  local msg="$1"
  if git diff --cached --quiet; then
    echo "   ⏭️  nada novo para commitar (arquivos idênticos à main) — pulando."
  else
    git commit -q -m "$msg"
    echo "   ✅ commit feito."
  fi
}

echo "🧹 Removendo arquivos da main que não fazem parte do projeto unificado..."
git rm -f src/components/Sidebar.tsx 2>/dev/null || true
git rm -f src/app/biblioteca/.gitkeep 2>/dev/null || true
git rm -f src/app/cursos/.gitkeep 2>/dev/null || true
git rm -f src/app/dashboard/.gitkeep 2>/dev/null || true
git rm -f src/app/certificados/.gitkeep 2>/dev/null || true
git rm -f src/app/perfil/.gitkeep 2>/dev/null || true
git rm -f src/components/.gitkeep 2>/dev/null || true
git rm -f src/tsconfig.json 2>/dev/null || true
git rm -f src/next-env.d.ts 2>/dev/null || true
git rm -f tailwind.config.ts 2>/dev/null || true

echo ""
echo "📦 [1/12] Setup base do projeto..."
git add package.json tsconfig.json postcss.config.cjs next.config.mjs .gitignore src/styles/globals.css src/lib/utils.ts
commit_if_staged "chore: moderniza setup do projeto para Next.js 15 e Tailwind v4"

echo "🎨 [2/12] Componentes UI base..."
git add src/components/ui/
commit_if_staged "feat(ui): atualiza componentes shadcn (button, card, input, switch, label, alert, checkbox)"

echo "🧭 [3/12] Layout global (Sidebar + Topbar)..."
git add src/components/layout/ src/app/layout.tsx src/app/LayoutClient.tsx src/app/page.tsx
commit_if_staged "feat(layout): adiciona Sidebar e Topbar globais com LayoutClient"

echo "🔐 [4/12] Autenticação (Fabio-Nunes)..."
git add src/app/login/ src/app/forgot-password/
commit_if_staged "feat(auth): integra telas de login e recuperação de senha da branch Fabio-Nunes"

echo "🏠 [5/12] Dashboard (Fabio-Nunes)..."
git add src/app/dashboard/
commit_if_staged "feat(dashboard): integra dashboard com modais de novidades e notificações"

echo "📰 [6/12] Feed (warlley-santos)..."
git add src/app/feed/ src/components/feed/ src/types/post.ts public/
commit_if_staged "feat(feed): integra central de notícias da branch warlley-santos"

echo "📚 [7/12] Cursos (warlley-santos)..."
git add src/app/cursos/ src/components/cursos/ src/types/course.ts
commit_if_staged "feat(cursos): integra catálogo e detalhes de cursos da branch warlley-santos"

echo "🎓 [8/12] Certificados e Configurações (hugo-cavalcanti)..."
git add src/app/certificados/ src/app/configuracoes/ src/components/CertificateCard.tsx src/components/SettingSection.tsx
commit_if_staged "feat(perfil): integra certificados e configurações da branch hugo-cavalcanti"

echo "👤 [9/12] Perfil do colaborador (Pedro-Soares)..."
git add src/app/perfil/page.tsx
commit_if_staged "feat(perfil): integra página de perfil da branch Pedro-Soares"

echo "📖 [10/12] Wiki e tela de conclusão (luiz-fernando)..."
git add src/app/wiki/ src/app/perfil/curso-concluido/
commit_if_staged "feat(conteudo): integra wiki e tela de conclusão da branch luiz-fernando"

echo "🛠️  [11/12] Painel administrativo (Joao-Victor + Pedro)..."
git add 'src/app/(admin)/' src/components/admin/
commit_if_staged "feat(admin): integra painel administrativo das branches Joao-Victor-MBP e Pedro-Soares"

echo "📝 [12/12] Documentação..."
git add README.md COMMITS.md commit-history.sh
git add -A
commit_if_staged "docs: adiciona README com mapa de rotas e decisões de arquitetura"

echo ""
echo "✅ Pronto! Histórico de commits da branch Matheus-Gabriel:"
echo ""
git log --oneline | head -15
echo ""
echo "Para empurrar para o GitHub:"
echo "  git push -u origin Matheus-Gabriel"
