# Tutorial — Hospedar o site no GitHub (GitHub Pages)

Este tutorial publica um site **estático** (HTML/CSS/JS sem servidor próprio) usando **GitHub** + **GitHub Pages**, gratuito com HTTPS.

**Pré-requisitos:** conta no [GitHub](https://github.com) e o projeto já com arquivos (ex.: `index.html` na raiz deste repositório).

---

## Parte 1 — Enviar o código para o GitHub

### 1.1 Criar o repositório no site do GitHub

1. Acesse https://github.com e faça login.
2. Clique em **New** (novo repositório).
3. Nome sugerido: `Site-Vaquinha` (ou outro; o link final usará esse nome).
4. Deixe **público** (Public) — GitHub Pages gratuito em contas pessoais costuma ser mais simples assim.
5. **Não** marque “Add a README” se você já tem arquivos locais e vai enviar por Git pela primeira vez (evita conflito). Se já criou com README, use `git pull` antes do primeiro `push` (veja nota no fim).
6. Clique em **Create repository**.

### 1.2 Conectar sua pasta local ao GitHub (primeira vez)

Abra o terminal na pasta do projeto (no Windows: PowerShell ou Git Bash).

Se o Git ainda não foi inicializado nesta pasta:

```bash
git init
git add .
git commit -m "Primeira versão do site da vaquinha"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

Substitua `SEU_USUARIO` e `SEU_REPOSITORIO` pelos seus dados (GitHub mostra a URL na página do repositório).

Se o GitHub pedir login, use **Personal Access Token** (senha de app) em vez da senha da conta, ou o **GitHub Desktop**.

---

## Parte 2 — Ativar o GitHub Pages

1. No GitHub, abra o repositório do site.
2. Vá em **Settings** (Configurações).
3. No menu lateral, clique em **Pages**.
4. Em **Build and deployment**:
   - **Source**: escolha **Deploy from a branch**.
   - **Branch**: selecione `main` e pasta **`/ (root)`**.
5. Salve (**Save**).

O GitHub vai gerar o site. Em alguns minutos aparecerá um link do tipo:

`https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

Atualize a página de **Settings → Pages** se o link não aparecer de imediato.

---

## Parte 3 — Atualizar o site depois

Sempre que alterar arquivos localmente:

```bash
git add .
git commit -m "Descreva a alteração em uma frase"
git push
```

O Pages atualiza sozinho em poucos minutos após o `push`.

---

## Dica — testar no PC antes de publicar

Para o **copiar e colar** (área de transferência) funcionar de forma confiável, o navegador costuma exigir **HTTPS** ou **`http://localhost`**. Abrir o `index.html` só com duplo clique (`file://`) pode bloquear o clipboard. Na pasta do projeto:

```bash
npx --yes serve .
```

Abra o endereço que o comando mostrar (geralmente `http://localhost:3000`).

---

## Parte 4 — Problemas comuns

| Problema | O que fazer |
|----------|-------------|
| Página 404 | Confirme que existe `index.html` na **raiz** (ou na pasta que você escolheu em Pages). Aguarde 2–5 minutos após o primeiro deploy. |
| Site antigo | Limpe cache do navegador ou abra em aba anônima. |
| Erro no primeiro `push` | Se criou o repo com README no site, faça: `git pull origin main --allow-unrelated-histories`, resolva conflitos se houver, depois `git push`. |
| Quero domínio próprio | Em **Pages**, seção **Custom domain**; configure DNS conforme a documentação do GitHub. |
| Link PIX não muda / botão estranho | Confirme que `js/config.js` está **antes** de `js/pixCopy.js` no `index.html`. Abra o site por **`http://localhost`** (`npx serve .`) ou pelo **HTTPS** do GitHub Pages. |

---

## Links úteis

- Documentação oficial: [GitHub Pages](https://docs.github.com/pages)
- Status do GitHub: https://www.githubstatus.com/

---

*Dúvidas sobre estrutura de arquivos e semântica do HTML estão em `Documentação.md`.*
