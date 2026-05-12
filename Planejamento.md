# Planejamento — Vaquinha para placa de vídeo

Site estático para arrecadar contribuições (vaquinha) visando uma nova placa de vídeo, hospedado no **GitHub Pages** (gratuito, com HTTPS).

---

## 1. Objetivo

- Apresentar de forma clara e honesta o motivo da campanha.
- Facilitar a doação via **PIX** usando a chave: `140.736.359.05`.
- Transmitir confiança (transparência, meta opcional, agradecimento).
- Manter o site **leve**, **rápido** e **acessível** em celular e desktop.

---

## 2. Público e mensagem

| Público | O que priorizar |
|--------|------------------|
| Amigos / comunidade | Tom pessoal, objetivo da GPU, link fácil para PIX |
| Visitantes casuais | Explicação curta, prova de que é você (opcional: redes, vídeo curto) |

**Sugestão de mensagem central (ajuste ao seu estilo):**  
“Estou juntando para uma placa de vídeo nova; qualquer valor no PIX ajuda. Obrigado por ler.”

---

## 3. Conteúdo sugerido (página única)

1. **Título** — nome da campanha (ex.: “Vaquinha — nova GPU”).
2. **História em 3–5 frases** — por que importa, sem textão.
3. **Meta (opcional)** — valor alvo só se quiser mostrar progresso (atualize manualmente ou remova se preferir simplicidade).
4. **PIX** — chave em destaque + botão “Copiar chave” (se o HTML tiver script leve) ou instrução “copie abaixo”.
5. **Agradecimento** — quem já ajudou (opcional, primeiro nome ou “anonimizado”).
6. **Contato / redes** — opcional, para reforçar legitimidade.

Evite prometer recompensas que não possa cumprir; vaquinha informal costuma ser “sem contrapartida”.

---

## 4. Chave PIX (doação)

**Chave PIX:** `140.736.359.05`

- Inclua no site exatamente essa chave, com aviso para conferir antes de confirmar no app do banco.
- **Fonte única no código:** chave e Copia e cola ficam em `js/config.js` no objeto **`window.siteConfig`**. O botão do site usa só o **link** `pix://` gerado a partir do Copia e cola. Ao trocar, edite esse arquivo e a **`Documentação.md`**.

---

## 5. Pagamento “dentro” da própria página?

**GitHub Pages** só hospeda arquivos **estáticos** (HTML/CSS/JS no navegador). Não existe servidor seu processando cartão ou PIX dinâmico ali.

| Abordagem | O que o visitante faz | Viável no Pages? |
|-----------|------------------------|------------------|
| **Chave PIX + copiar** (atual) | Abre o app do banco e cola a chave | Sim |
| **QR Code PIX estático** | Você gera um BR Code (valor fixo ou “aberto”) e coloca uma imagem na página; escaneia no banco | Sim (imagem gerada fora do site) |
| **Botão “doar” que abre app/link** | Redireciona para link `pix` ou página de gateway | Sim |
| **Checkout completo no domínio** (cartão, boleto, PIX com confirmação automática) | Precisa de **provedor** (Mercado Pago, Stripe com PIX, PagBank, etc.) com **API/backend** ou widget hospedado pelo provedor | Parcial: use **widget/script oficial** do provedor ou link externo; o processamento não roda “no GitHub”, e sim no serviço de pagamento |

**Resumo:** dá para **parecer** que a doação é “pela página” (QR na página, botão que abre o fluxo, iframe/widget do provedor), mas o **dinheiro** sempre passa pelo banco/app ou pelo gateway. Para PIX **dinâmico** (QR que muda por valor), normalmente precisa de backend ou serviço pronto.

---

## 6. Hospedagem (visão geral)

- Repositório no **GitHub** + **GitHub Pages** servindo arquivos estáticos (`index.html`, CSS, imagens).
- Detalhes passo a passo: arquivo **`Tutorial-Hospedagem-GitHub.md`**.

---

## 7. Dicas de design

### 7.1 Princípios

- **Uma coluna legível** — largura máxima ~65–75 caracteres por linha (ex.: `max-width` no texto).
- **Hierarquia clara** — um `<h1>`, seções com `<h2>`; não pule níveis de heading sem necessidade.
- **Contraste** — texto escuro em fundo claro (ou o inverso com contraste WCAG AA no mínimo).
- **Espaço em branco** — margens generosas entre blocos; evita sensação de “paredão de texto”.

### 7.2 Cores e identidade

- Paleta **pequena** (1 cor de destaque + neutros). Ex.: um tom para botões/links e cinzas para texto secundário.
- Cor de destaque pode remeter a “tech” (azul, verde-água) sem exagerar em neon.

### 7.3 Tipografia

- **Uma família** do sistema (`system-ui`) ou duas no máximo (título + corpo).
- Tamanho base **≥ 16px** no corpo; títulos proporcionais.

### 7.4 Imagens

- **Uma foto sua** ou da máquina atual — humaniza e aumenta confiança.
- Otimize imagens (WebP quando possível, dimensões adequadas ao uso na página).
- Sempre `alt` descritivo em `<img>` (acessibilidade e SEO).

### 7.5 PIX em destaque

- Card ou caixa com borda suave contendo a chave em **fonte monoespaçada** para leitura fácil.
- Ícone simples (SVG inline leve) ou emoji só se combinar com o tom do site.

### 7.6 Confiança (sem poluir)

- Frase curta: “100% do valor vai para [objetivo]”.
- Opcional: data de última atualização da meta ou do texto.

### 7.7 Performance = parte do design

- Poucos arquivos, CSS enxuto, sem bibliotecas pesadas.
- Isso melhora **tempo de carregamento** e percepção de qualidade.

### 7.8 Opiniões de design (direção para esta vaquinha)

- **Hero com sua foto ou arte** — primeira dobra com imagem forte + rosto ou setup aumenta confiança; evite só stock genérico sem relação com você.
- **Menos texto acima da dobra** — um título curto, uma linha de apoio e o bloco PIX visível sem rolar muito no celular.
- **Um único CTA visual** — “Copiar PIX” (ou QR) como ação principal; links secundários discretos (redes).
- **Tom honesto** — layout “clean” escuro combina com tech/GPU; se preferir mais acolhedor, troque o fundo para claro e mantenha contraste alto.
- **Evite poluir com muitos emojis** — um ou nenhum no título costuma parecer mais sério para quem ainda não te conhece.

---

## 8. Acessibilidade e SEO (rápido)

- `lang="pt-BR"` no `<html>`.
- Título da página (`<title>`) descritivo.
- Meta description (uma frase) se quiser melhor preview em compartilhamentos.
- Foco visível em links e botões (teclado).

---

## 9. Regras do projeto (código e manutenção)

### 9.0 Só o básico — sem banco de dados

- O site fica no **GitHub Pages** como página **estática**: HTML, CSS, JS e arquivos de imagem.
- **Não** entra neste projeto: criação ou uso de **banco de dados**, servidor com login, API que grave dados, painel admin, etc.
- O que precisar de “lista” (quem doou, quanto falta da meta) você **atualiza no próprio HTML** (ou no `js/config.js` como texto), manualmente — simples e suficiente para a vaquinha.

### 9.1 Nomenclatura (JavaScript)

- **camelCase:** variáveis, parâmetros, funções e métodos (ex.: `pixKey`, `copyToClipboard`, `init`).
- **PascalCase:** classes, construtores e “tipos” exportáveis (ex.: `PixCopy`).
- **HTML e CSS:** manter **kebab-case** em `id` e `class` (padrão da web e compatível com estilos).

### 9.2 Organização em módulos por tipo de arquivo

- **HTML:** página(s) na raiz ou em subpastas claras (ex.: `index.html`).
- **CSS:** pasta `css/` (ex.: `css/styles.css`); novos arquivos por bloco se o projeto crescer (ex.: `css/hero.css`).
- **JS:** pasta `js/` com arquivos separados por responsabilidade (ex.: `config.js`, `pixCopy.js`).
- **Assets:** imagens em `assets/` (ex.: `assets/marketing-hero.png`).

### 9.3 Frameworks

- **Permitido apenas o simples:** bibliotecas pequenas e com um papel claro (ex.: **Alpine.js**, **Petite-Vue**, **htmx** leve), sem ecossistema pesado por padrão.
- **Evitar por padrão:** React/Vue/Svelte “completo” com bundler e muitas dependências — só se houver motivo forte e ainda assim preferir build mínimo (ex.: Vite) documentado.
- Qualquer framework novo entra no repositório **só** com atualização da **`Documentação.md`** (como instalar, build, pastas).

### 9.4 Documentação obrigatória

- **Sempre** atualizar a **`Documentação.md`** quando mudar estrutura de pastas, scripts, chave PIX, fluxo de deploy ou dependências.
- Para mudanças de produto/texto relevante, alinhar também o **`Planejamento.md`** quando fizer sentido.

---

## 10. Próximos passos (checklist)

- [ ] Ajustar textos no `index.html` ao seu tom de voz.
- [x] Imagem de marketing em **`assets/marketing-hero.png`**; revisar o `alt` se mudar a arte.
- [ ] Subir o repositório no GitHub e ativar Pages (tutorial).
- [ ] Testar no celular e em outro navegador.
- [ ] Compartilhar o link `https://<usuario>.github.io/<repo>/`.

---

## 11. Observação legal / ética (informal)

Campanhas entre pessoas físicas costumam ser informais; não deixe de ser transparente. Se um dia escalar muito, avalie regras locais (imposto, plataformas oficiais). Este planejamento não substitui assessoria jurídica.

---

*Última atualização sugerida: preencha a data quando publicar.*
