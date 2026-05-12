# Documentação do site — Vaquinha (GPU)

Este repositório contém um site **estático** pensado para ser **leve**, **rápido** e **semântico**, ideal para **GitHub Pages**. Regras de código e de pastas estão no **`Planejamento.md`** (§ 9, em especial **9.0** — só o básico, sem banco de dados).

**Última revisão da documentação:** um único link PIX (`#pix-link`), `window.siteConfig` em `js/config.js`, hero em `assets/marketing-hero.png`.

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
├── index.html                 # Página principal
├── css/
│   └── styles.css             # Estilos globais + hero
├── js/
│   ├── config.js              # Chave PIX e constantes públicas
│   └── pixCopy.js             # Define o href pix:// do botão e o texto com a chave
├── assets/
│   └── marketing-hero.png     # Banner de marketing da vaquinha (hero)
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

---

## 4. HTML (`index.html`)

- **`lang="pt-BR"`** no `<html>`.
- **`<a class="skip-link">`** — primeiro foco: pula para **`#conteudo-principal`** (acessibilidade).
- **`<header class="site-header">`** — cabeçalho da página: faixa com **`<figure>`** (arte) e bloco **`.site-header__inner`** com **`<h1>`** (único título principal) e parágrafos introdutórios.
- **`<main id="conteudo-principal">`** — conteúdo principal.
- **`<article id="historia-campanha">`** — texto autossuficiente da campanha; **`<h2 id="titulo-historia">`**; **`aria-labelledby`** liga região ao título.
- **`<section id="doacao-pix">`** — bloco de doação; instruções em **`<p id="pix-instrucoes">`**; ação em **`<p class="pix-card__action">`** envolvendo o **`<a id="pix-link" aria-describedby="pix-instrucoes">`** (contexto extra para leitores de tela).
- **`<footer>`** — rodapé; agradecimento em **`<small>`** (tom secundário sem perder significado).
- **`application/ld+json`** — `WebPage` no `<head>` (dados estruturados para buscadores, complementar ao HTML).

---

## 5. CSS (`css/styles.css`)

- Variáveis em `:root` para cores e espaçamento.
- Bloco **`.hero`** / **`.hero__figure`** / **`.hero__image`** — faixa largura total com `object-fit: cover` e altura limitada para não empurrar o conteúdo demais no celular.
- Bloco **`.pix-card`** — destaque na seção de doação; **`.btn-pix`** / **`.btn-pix--primary`** / **`.btn-pix--solo`** — botão-link único em largura confortável.

---

## 6. JavaScript (`js/config.js` + `js/pixCopy.js`)

| Arquivo | Função |
|---------|--------|
| `js/config.js` | Define **`window.siteConfig`** com `pixKey` e `pixCopiaColaPayload` (chave e BR Code Copia e cola). |
| `js/pixCopy.js` | No carregamento, define o `href` do `#pix-link` (`pix://pay?brcode=…`) e o texto **Doar com PIX —** + `pixKey`. |

- No `index.html`, **`config.js` deve vir antes de `pixCopy.js`**, ambos com **`defer`** (executam após o HTML estar parseado, na ordem).
- **Sem `type="module"`** — funciona em `file://` (só o `pix://` pode não reagir) e no GitHub Pages.

### Convenções (alinhadas ao planejamento)

- **camelCase:** funções e variáveis no JS (ex.: `buildPixDeeplink`, `pixKey`).
- **PascalCase:** reservado para classes quando o projeto voltar a usar módulos ou componentes.
- **HTML/CSS:** classes em **kebab-case** (ex.: `hero__image`, `btn-pix`).

---

## 7. Pagamento na própria página

O site **não processa** pagamento no servidor. Há **um link** (`pix://…`) gerado a partir de **`pixCopiaColaPayload`** no `config.js`. Compatibilidade do `pix://` varia por aparelho e banco; o visitante pode usar **PIX → Copia e cola** no app com o mesmo código.

---

## 8. Frameworks (opcional)

Por padrão o projeto **não** usa framework. Se adicionar um dos permitidos no planejamento (ex.: Alpine.js), descreva nesta seção: URL do CDN ou npm, quais arquivos tocar, e se o deploy no Pages continua só com arquivos estáticos ou exige build.

---

## 9. Publicação

Siga **`Tutorial-Hospedagem-GitHub.md`**. O site deve manter **`index.html`** na raiz do branch publicado (Pages em `/ (root)`).

---

## 10. Manutenção e documentação

- Alterou **chave PIX** ou **Copia e cola** → edite `window.siteConfig` em `js/config.js` (o botão e o link leem dali).
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
- Chave e payload PIX ficam em `js/config.js` (`window.siteConfig`); não commite segredos além do necessário para a vaquinha.

---

*Mantenha esta documentação sincronizada com o código a cada mudança relevante.*
