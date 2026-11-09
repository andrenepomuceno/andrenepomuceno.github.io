# CLAUDE.md — andrenepomuceno.github.io

Site de portfólio pessoal do André Nepomuceno, publicado em https://www.andrenepomuceno.com.br/ (GitHub
Pages, domínio em `public/CNAME`). É a vitrine dos projetos irmãos em `~/`: cada entrada resume um
projeto que vive no seu próprio repositório. Só frontend: React 19 + MUI 9, build com Vite 8, three.js
apenas no fundo animado. Você atua como engenheiro de frontend e editor do conteúdo.

## O que o site mostra

Três abas em `src/App.jsx`:

- **About Me / Sobre mim** (`src/components/AboutMe.jsx`): texto e links de perfil (GitHub, LinkedIn,
  YouTube `@alsn0`, ALSN Engenharia em https://www.alsnengenharia.com.br/).
- **Hobby Projects / Projetos pessoais**: `portfolioItems` em `src/data.jsx`, um card por projeto
  (`src/components/PortfolioItem.jsx`). Ordem: projetos ativos primeiro (os de física na GPU em destaque),
  arquivados (`archived: true`, chip "Archived") no fim.
- **Articles / Artigos**: `articles` em `src/data.jsx`, o mesmo card: o artigo (PDF em `public/papers/`)
  e as referências aos materiais de estudo (categoria "Study Material", link para a demo de cada um).

Entrada com `draft: true` espera a demo entrar no ar: aparece no `npm run dev` e com `?drafts=1`, com o
chip "Draft" / "Rascunho", e fica escondida no site publicado (`published()` em `src/App.jsx`). Quando a
demo responder 200, tire o `draft` e publique.

## Projetos irmãos (fonte do conteúdo)

Somente leitura daqui. Para descrever um projeto, leia o `README.md` e o `CHANGELOG.md` dele; não
invente recursos.

| entrada | pasta local | repositório | demo |
|---|---|---|---|
| particle.js (v2) | `../particle.js` | público | `/particle.js/` |
| lattice.js | `../lattice.js` | **privado** | `/lattice.js/` |
| Metric Shaders | sem clone local (`gh api repos/andrenepomuceno/metric-shaders/...`) | **privado** | `/metric-shaders/` |
| BiomeSimulator | `../BiomeSimulator` | público | `/BiomeSimulator/` |
| ESP Garden | — | público | — |
| wallet.py, em-sim, fluid-sim | — | públicos, arquivados no GitHub | — |
| artigo (Conservation laws as Lie-algebra membership) | `../matrix-physics/paper/journal/main.pdf` | **privado** | `public/papers/conservation-laws-lie-algebra-membership.pdf` |
| Standard Model: study material | `../sm-study` | **privado** | `/sm-study/` (`npm run deploy` grava o branch `gh-pages`) |
| Classical physics and relativity: study material | `../classic-study` | **privado** | `/classic-study/` (`pages.yml` publica do `main`) |

Demos sob `https://www.andrenepomuceno.com.br/<repo>/` (o Pages de cada repositório herda o domínio).

- Link "View Code" só para repositório público; confira com
  `gh repo view andrenepomuceno/<repo> --json isPrivate,isArchived`. Privado leva só "Online Demo".
- Projeto arquivado no GitHub leva `archived: true`.
- O PDF do artigo é uma **cópia**: quando o artigo mudar, copie de novo e compare com `sha256sum`. O PDF
  traz e-mail e ORCID do autor (publicação intencional).

## Conteúdo e i18n (en, pt-BR)

- `src/i18n/strings.js`: `STRINGS` (textos da interface, por chave), `initialLang()`, `translate()`,
  `localize()`. `src/i18n/I18nProvider.jsx` e `src/i18n/context.js` (`useI18n()` → `{ lang, setLang, t, l }`).
- Idioma: `?lang=en|pt-BR` vale para a visita; depois a escolha salva (`localStorage['lang']`); depois o
  idioma do navegador (`pt*` → pt-BR); padrão `en`. O seletor EN/PT fica no topo, à direita.
- Em `data.jsx`, todo texto (inclusive `title`) é uma string (igual nos dois idiomas: nomes, tecnologias)
  ou um objeto `{ en, 'pt-BR' }` lido com `l()`. Rótulos repetidos (`PERSONAL_PROJECT`, `STUDY_MATERIAL`,
  `LINK`, `TAG`) ficam no topo.
- Texto novo entra nos **dois idiomas** no mesmo commit. `translate()` falha alto com chave ausente.
- O artigo é em inglês: o título fica em inglês e o link diz "Ler PDF (em inglês)".

## Imagens

- `public/img/`, WebP (Pillow, `quality=85`), cerca de 900×600 ou quadrada, idealmente abaixo de 100 KB.
  O card exibe no máximo 300×300 px.
- De onde vêm (2026-11-08):
  - particle.js: recorte de `../particle.js/docs/img/quarks.png` (clusters de quarks + editor de forças).
  - lattice.js: `node scripts/snap.mjs --scenario mexican-hat-ssb --query bare=1 --width 1200 --height 800
    --wait 6000 --out <dir>` dentro de `../lattice.js`, recortado no quadrado da rede.
  - Metric Shaders: demo publicada, cena *Black hole* com a métrica *Schwarzschild lens*, interface
    escondida com `H`, 1200×800.
  - artigo: `pdftoppm -f 1 -l 1 -r 110 -png` da primeira página, recorte do título e do resumo.
  - sm-study e classic-study (2026-11-09): o `scripts/snap.mjs` de cada projeto, `--lang en --width 1200
    --height 800 --wait 3000`, rotas `feynman/h-gammagamma` e `laboratorio/minkowski`; recorte
    `(195, 70, 1185, 730)` (cena + coluna de equações) reduzido a 900×600.
- Playwright: use o de `../lattice.js/node_modules/playwright` (o Chromium já está instalado). GPU real no
  WSL: `chromium.launch({ args: ['--use-angle=gl', '--ignore-gpu-blocklist'], env: { ...process.env,
  MESA_D3D12_DEFAULT_ADAPTER_NAME: 'NVIDIA' } })`. Use `waitUntil: 'domcontentloaded'`: com Google Fonts,
  `load` e `networkidle` podem não chegar.
- Screenshot de página inteira mostra fundo branco abaixo da primeira tela (o gradiente é
  `background-attachment: fixed`); é artefato da captura, não do site. Confira com a página rolada.

## Comandos

```
npm run dev       # servidor de desenvolvimento (avisos do React só aparecem aqui)
npm run lint      # eslint (precisa sair limpo)
npm run build     # produção em dist/
npm run preview   # serve o dist/
```

Validação visual antes de publicar: `npm run lint` e `npm run build` limpos, e um script Playwright que
abre as três abas em `en` e `pt-BR`, em 1280×900 e 390×844, sem erros nem avisos no console e sem
rolagem horizontal no celular; leia os PNGs.

O build avisa que o chunk do `AnimatedBackground` (three.js) passa de 500 kB; ele já é carregado com
`lazy()`, então o aviso não bloqueia.

## Publicação

- `dev` é a branch de trabalho; `main` é só publicação. `publish.sh` faz o merge de `dev` em `main` e o
  push das duas.
- `.github/workflows/webpack.yml` roda a cada push no `main`: `npm ci`, build com `VITE_APP_VERSION` (a
  versão aparece no rodapé) e `VITE_GA_MEASUREMENT_ID`, tag `v<versão>` e deploy em `gh-pages`.
- **Suba a versão** em `package.json` (`npm version <x.y.z> --no-git-tag-version`) antes de publicar.
  Até a 1.4.6 o passo da tag falhava com versão repetida e o deploy não rodava (três deploys perdidos em
  2026-05-20); agora ele só avisa, mas a versão sem bump não ganha tag.
- Publicar (merge em `main`, `publish.sh`) só a pedido do usuário.

## Regras do projeto

- Código, identificadores e commits em inglês; documentação (`CLAUDE.md`, `tasks/`) em português; o
  conteúdo do site em inglês e português.
- Sem estado global mutável de módulo; dados em `src/data.jsx`, textos da interface em
  `src/i18n/strings.js`.
- Sem código comentado nem blocos esquecidos. Comentário só para o *porquê*.
- `localStorage` sempre em `try/catch` (pode estar bloqueado); a página funciona sem ele.
- Valores inválidos falham alto, com o valor recebido e o esperado.

## Fluxo de trabalho (modelo dos projetos irmãos)

- Tarefas: um `.md` por tarefa em `tasks/inbox/` (formato em `tasks/README.md`); ao concluir, escrever a
  seção `## Resultado` e `mv` para `tasks/done/`. Pedidos que chegam no meio de uma tarefa viram tarefa
  na hora. `tasks/` **não é versionado** (está no `.gitignore`, pedido do usuário em 2026-11-08): nunca
  faça stage dele.
- Commits pequenos e coerentes, conventional commits no imperativo, stage explícito por caminho, lint e
  build verdes antes de cada commit.
- Dúvidas para o usuário: em formato de quiz (múltipla escolha, recomendação primeiro).
- Documentação muda no mesmo commit do comportamento. Limpe processos (servidores `vite`) e arquivos
  temporários ao terminar.
