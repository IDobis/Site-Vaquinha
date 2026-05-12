# Documentação do site — Vaquinha (GPU)

Este repositório contém um site **estático** pensado para ser **leve**, **rápido** e **semântico**, ideal para **GitHub Pages**. Regras de código e de pastas estão no **`Planejamento.md`** (§ 9, em especial **9.0** — só o básico, sem banco de dados).

**Última revisão da documentação:** QR + botão **Copiar chave PIX** (clipboard), `pixKey` em `js/config.js`, `assets/pix-qrcode.png`, hero em `assets/marketing-hero.png`.

**Regra de escopo:** só o **básico** — site **estático** no GitHub Pages (HTML, CSS, JS, imagens). **Sem** banco de dados, **sem** backend que grave dados ou login. Listas, meta ou textos você **atualiza à mão** no HTML ou no `config.js`. Detalhes no **`Planejamento.md` → § 9.0**.

## 1. Objetivos técnicos

| Meta | Como é atendido |
|------|------------------|
| **Leve** | HTML + CSS + JS em arquivos estáticos; sem framework por padrão. |
| **Rápido** | Poucas requisições, CSS mínimo, imagem hero otimizada (`png`/`webp`/`jpg`). |
| **Semântico** | `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, headings em ordem lógica. |
| **Documentado** | Este arquivo + `Planejamento.md` + `Tutorial-Hospedagem-GitHub.md`. |

---

## 2. Estrutura de arquivos

```
Site-Vaquinha/
├── .nojekyll                  # Desativa Jekyll no GitHub Pages (site 100% estático)
├── css/
│   └── styles.css             # Estilos globais + hero
├── js/
│   ├── config.js              # `window.siteConfig.pixKey` (chave PIX, ex.: CPF)
│   └── pixCopy.js             # Botão que copia a chave para a área de transferência
├── assets/
│   ├── marketing-hero.png     # Banner (hero)
│   └── pix-qrcode.png         # QR Code estático (mesma conta que a chave em `pixKey`)
├── Planejamento.md
├── Tutorial-Hospedagem-GitHub.md
├── Documentação.md
└── .gitattributes
```

---

## 3. Imagem de marketing (hero)

1. O hero usa **`assets/marketing-hero.png`** (arte atual da campanha). Para trocar a imagem, substitua o arquivo mantendo o nome ou atualize o `src` no `index.html` e este documento.
2. Prefira PNG/WebP otimizado (largura típica 1024–1600 px) para carregar rápido no celular.
3. Ajuste o **`alt`** no HTML se o conteúdo visual mudar (acessibilidade e SEO).

**QR Code PIX:** **`assets/pix-qrcode.png`** — deve ser do **mesmo recebedor** que a chave em **`pixKey`** no `config.js` (ao trocar chave ou QR, mantenha os dois alinhados).

---

## 4. HTML (`index.html`)

- **`lang="pt-BR"`** no `<html>`.
- **`<a class="skip-link">`** — primeiro foco: pula para **`#conteudo-principal`** (acessibilidade).
- **`<header class="site-header">`** — cabeçalho da página: faixa com **`<figure>`** (arte) e bloco **`.site-header__inner`** com **`<h1>`** (único título principal) e parágrafos introdutórios.
- **`<main id="conteudo-principal">`** — conteúdo principal.
- **`<article id="historia-campanha">`** — texto autossuficiente da campanha; **`<h2 id="titulo-historia">`**; **`aria-labelledby`** liga região ao título.
- **`<section id="doacao-pix">`** — **`<h2 class="pix-card__title">`**; **`<p class="pix-card__intro" id="pix-instrucoes">`**; **`<figure class="pix-qr">`** com **`assets/pix-qrcode.png`**; **`<button type="button" id="pix-copiar-btn">`** **Copiar chave PIX** (`aria-describedby`); **`<p id="pix-feedback" role="status" aria-live="polite">`**.
- **`<footer>`** — rodapé; agradecimento em **`<small>`** (tom secundário sem perder significado).
- **`application/ld+json`** — `WebPage` no `<head>` (dados estruturados para buscadores, complementar ao HTML).

---

## 5. CSS (`css/styles.css`)

- Variáveis em `:root` para cores e espaçamento.
- Bloco **`.hero`** / **`.hero__figure`** / **`.hero__image`** — faixa largura total com `object-fit: cover` e altura limitada para não empurrar o conteúdo demais no celular.
- Bloco **`.pix-card`** — coluna centralizada, fundo em gradiente suave, borda discreta; **`.pix-card__title`** / **`.pix-card__intro`**; **`.pix-qr`** (moldura ao redor do QR); **`.btn-pix`** sólido (sem gradiente neon); **`.pix-feedback`** com separador só quando há mensagem (`:not(:empty)`).

---

## 6. JavaScript (`js/config.js` + `js/pixCopy.js`)

| Arquivo | Função |
|---------|--------|
| `js/config.js` | Define **`window.siteConfig.pixKey`** (string da chave PIX: CPF, e-mail, telefone ou EVP). |
| `js/pixCopy.js` | Ao clicar em **`#pix-copiar-btn`**, copia **`pixKey`** com **`navigator.clipboard`** e escreve feedback em **`#pix-feedback`**. |

- No `index.html`, **`config.js` deve vir antes de `pixCopy.js`**, ambos com **`defer`**.
- **Sem `type="module"`** — funciona em `file://` e no GitHub Pages.
- **Clipboard:** em **`file://`** o navegador pode bloquear copiar; use **`http://localhost`** (`npx serve .`) ou o site publicado em **HTTPS**.

### Convenções (alinhadas ao planejamento)

- **camelCase:** funções e variáveis no JS (ex.: `chave`, `ok`, `fail`).
- **PascalCase:** reservado para classes quando o projeto voltar a usar módulos ou componentes.
- **HTML/CSS:** classes em **kebab-case** (ex.: `hero__image`, `btn-pix`).

---

## 7. Pagamento na própria página

O site **não processa** pagamento no servidor. O fluxo é **QR estático** + botão que **copia a chave PIX** (`pixKey` em `js/config.js`). O visitante usa no app em **PIX → Chave PIX** (ou equivalente do banco).

---

## 8. Frameworks (opcional)

Por padrão o projeto **não** usa framework. Se adicionar um dos permitidos no planejamento (ex.: Alpine.js), descreva nesta seção: URL do CDN ou npm, quais arquivos tocar, e se o deploy no Pages continua só com arquivos estáticos ou exige build.

---

## 9. Publicação

Siga **`Tutorial-Hospedagem-GitHub.md`**. O site deve manter **`index.html`** na raiz do branch publicado (Pages em `/ (root)`).

- Na raiz existe **`.nojekyll`** (arquivo vazio): desliga o **Jekyll** no GitHub Pages para o site ser servido **só como HTML/CSS/JS estáticos** (evita o Pages “processar” arquivos e quebrar ou mudar o visual).
- O CSS é referenciado com **`?v=…`** no `index.html` para forçar **atualização em cache** do navegador após mudanças grandes de estilo (aumente o número quando publicar novo visual).

---

## 10. Manutenção e documentação

- Alterou a **chave PIX** ou o **QR** → edite `pixKey` em `js/config.js` e substitua **`assets/pix-qrcode.png`** por um QR que aponte para a **mesma** conta/chave.
- Alterou **pastas, scripts ou dependências** → atualize **este arquivo** (`Documentação.md`).
- Alterou **regras de produto ou texto institucional** → atualize o **`Planejamento.md`** quando fizer sentido.

Comandos usuais após editar:

```bash
git add .
git commit -m "Descreva a alteração em uma frase"
git push
```

---

## 11. Privacidade e segurança

- Não commite tokens de API de gateways de pagamento em repositório público.
- A chave PIX fica em `js/config.js` (`pixKey`); não commite dados além do necessário para a vaquinha.

---

*Mantenha esta documentação sincronizada com o código a cada mudança relevante.*
