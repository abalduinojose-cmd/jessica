# Jessica Groomer — Landing Page

Landing page de conversão para tosadora pet premium. Construída com **Astro** (site 100% estático),
**Tailwind CSS v4** e **TypeScript strict** — zero framework de UI, JS mínimo em vanilla.

## Como rodar

```sh
npm install
npm run dev        # http://localhost:5188
npm run build      # gera a versão de produção em dist/
npm run preview    # testa a versão de produção localmente
```

## Onde trocar os textos

Todo o conteúdo fica centralizado em dois lugares — **nenhum texto está hardcodado em componentes**:

| Arquivo | O que tem lá |
| --- | --- |
| `src/config/site.ts` | Nome, tagline, WhatsApp, Instagram, cidade (`CITY`), endereço (`ADDRESS`), horários |
| `src/data/services.ts` | Os 6 cards de serviços |
| `src/data/credentials.ts` | As 5 credenciais da seção "Quem sou eu" |
| `src/data/faq.ts` | Perguntas e respostas (alimenta o FAQ visual **e** o SEO ao mesmo tempo) |
| `src/data/testimonials.ts` | Depoimentos (placeholders — trocar pelos reais) |
| `src/data/club.ts` | Planos do Clubinho (valores fictícios de demonstração) |
| `src/data/gallery.ts` | Fotos da galeria |
| `src/data/videos.ts` | Vídeos do Instagram |

## Onde ficam as fotos

As fotos reais estão em `src/assets/` e são otimizadas automaticamente (WebP) pelo `astro:assets`:

- `src/assets/hero-jessica.jpg` — foto de fundo do hero
- `src/assets/jessica-tesoura.jpg` — foto da seção "Quem sou eu"
- `src/assets/galeria/pet-01.jpg` … `pet-06.jpg` — galeria (caminhos e legendas em `src/data/gallery.ts`)
- `src/assets/logo/` — recortes da logo oficial (completa e monograma)
- **Vídeos**: em `public/videos/` (reel-01 a reel-03); legendas em `src/data/videos.ts`

Para trocar qualquer foto, substitua o arquivo mantendo o nome — ou adicione um novo e ajuste o
import correspondente.

## Deploy (Vercel ou Netlify)

**Vercel:** importe o repositório em [vercel.com/new](https://vercel.com/new). O Astro é detectado
automaticamente (build `npm run build`, saída `dist/`). Só clicar em Deploy.

**Netlify:** importe em [app.netlify.com](https://app.netlify.com). Build command: `npm run build`,
publish directory: `dist`.

Depois do deploy, **atualize o domínio real** em `astro.config.mjs` (campo `site`) e em
`public/robots.txt` para o sitemap e o canonical ficarem corretos.

## O que ficou como TODO para a Jessica preencher

- [ ] **Cidade** (`CITY`) e **endereço** (`ADDRESS`) em `src/config/site.ts` — entram no title, no H1 e no schema de SEO local
- [ ] **Horários de atendimento** reais em `src/config/site.ts` (`OPENING_HOURS`)
- [ ] **Depoimentos reais** em `src/data/testimonials.ts`
- [ ] **Planos reais do Clubinho** em `src/data/club.ts` (os atuais são fictícios, para demonstração)
- [ ] **Domínio definitivo** em `astro.config.mjs` e `public/robots.txt`
