# Lovatte & Freire Odontologia — Site institucional

Site institucional em React + Vite + Tailwind CSS para a **Lovatte & Freire
Odontologia** (Guapimirim - RJ), com foco em conversão via WhatsApp.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- lucide-react (ícones)

## Estrutura do projeto

```
lovatte-freire/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── siteConfig.js          ← TODAS as informações editáveis ficam aqui
    ├── hooks/
    │   └── useReveal.js        ← animação de entrada ao rolar a página
    └── components/
        ├── Header.jsx          ← menu fixo + hambúrguer mobile
        ├── Hero.jsx            ← seção inicial
        ├── TrustBar.jsx        ← diferenciais
        ├── About.jsx           ← sobre a clínica
        ├── Specialties.jsx     ← cards de tratamentos (exemplo/editável)
        ├── LaserHairRemoval.jsx← seção de depilação a laser
        ├── Journey.jsx         ← jornada do paciente (4 etapas)
        ├── Gallery.jsx         ← galeria de fotos (placeholders)
        ├── BeforeAfter.jsx     ← seção "antes e depois" com slider interativo
        ├── Testimonials.jsx    ← depoimentos (placeholders)
        ├── CTA.jsx             ← chamada final para WhatsApp
        ├── Contact.jsx         ← telefone, WhatsApp, Instagram, endereço, mapa
        ├── Footer.jsx          ← rodapé
        ├── PageHeader.jsx      ← cabeçalho simples usado nas páginas de galeria
        └── FloatingWhatsApp.jsx← botão flutuante no mobile
    └── pages/
        ├── LaserGalleryPage.jsx    ← página dedicada de fotos (depilação a laser)
        └── DentalGalleryPage.jsx   ← página dedicada de fotos (antes e depois dos dentes)
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior instalado.

```bash
# 1. Entre na pasta do projeto
cd lovatte-freire

# 2. Instale as dependências
npm install

# 3. Rode o ambiente de desenvolvimento
npm run dev
```

O site abrirá em `http://localhost:5173`.

Para gerar a versão de produção (arquivos otimizados para publicar em
qualquer hospedagem — Vercel, Netlify, hospedagem própria, etc.):

```bash
npm run build
```

Os arquivos finais ficarão na pasta `dist/`. Para pré-visualizar o build:

```bash
npm run preview
```

## ⚠️ Informações que precisam ser substituídas pelos dados reais

Nenhuma informação sensível ou específica da clínica foi inventada. Tudo
está centralizado no arquivo **`src/siteConfig.js`**, claramente sinalizado
com comentários `// SUBSTITUIR`. Antes de publicar o site, revise:

| Informação | Onde editar | Status atual |
|---|---|---|
| Número de WhatsApp | `siteConfig.whatsapp.number` | Placeholder (`5521999999999`) |
| Mensagem inicial do WhatsApp | `siteConfig.whatsapp.message` | Texto sugerido — pode editar |
| Endereço completo | `siteConfig.address` | Placeholder "Endereço a confirmar" |
| Instagram (handle e link) | `siteConfig.instagram` | Placeholder — confirmar perfil real |
| Horário de atendimento | `siteConfig.hours` | Placeholder "Horário a confirmar" |
| Link de incorporação do Google Maps | `siteConfig.googleMapsEmbedUrl` | Vazio — mapa mostra aviso até ser preenchido |
| Especialidades/tratamentos oferecidos | `siteConfig.specialties` | Lista de exemplo — confirmar quais realmente são oferecidos |
| Fotos da clínica (Hero, Sobre, Galeria) | `src/components/Hero.jsx`, `About.jsx`, `Gallery.jsx` | Espaços reservados com aviso visual — substituir por `<img>` com fotos reais |
| Depoimentos de pacientes | `src/components/Testimonials.jsx` | Placeholders "Depoimento real do paciente" — **nenhum foi inventado** |
| Fotos e casos de "antes e depois" | `src/components/BeforeAfter.jsx` (fotos) e `siteConfig.beforeAfterCases` (nome/tratamento de cada caso) | Placeholders — publicar **apenas com autorização por escrito do paciente** |
| Foto do ambiente/equipamento de depilação a laser | `src/components/LaserHairRemoval.jsx` | Espaço reservado — substituir por foto real |
| Áreas atendidas na depilação a laser | `siteConfig.laserHairRemoval.areasNote` | Placeholder "a confirmar" — preencher se desejar listar as áreas |
| Imagem de compartilhamento (Open Graph) | `index.html` → `og:image` | Placeholder `/og-image.jpg` — adicionar imagem 1200×630px em `public/` |
| URL final do site | `index.html` → `canonical` e `og:url` | Placeholder — trocar pelo domínio real |
| CRO da clínica/dentistas | Não incluído no site | Adicionar quando fornecido, se exigido por norma do CFO |

O telefone `(21) 2632-2809` foi mantido conforme informado; confirme se
esse mesmo número deve ser usado no link de WhatsApp (o link de WhatsApp
usa um formato diferente do de telefone e precisa ser configurado à parte).

> **Sobre a seção "Antes e depois":** antes de publicar fotos reais de
> pacientes, confirme com a clínica se há autorização por escrito de uso
> de imagem para cada caso, e verifique as regras do Conselho Federal de
> Odontologia sobre publicidade e uso de imagens de resultados em
> tratamentos odontológicos.

## Páginas de galeria (fotos)

O site agora tem duas páginas dedicadas de fotos, acessadas pelos botões
"Ver fotos" (seção Depilação a laser) e "Ver galeria completa" (seção
Antes e depois). Elas usam um roteamento leve baseado em hash — sem
biblioteca extra e sem precisar configurar nada no servidor:

- `#/fotos/depilacao-a-laser` → `src/pages/LaserGalleryPage.jsx`
  Grade com 4 fotos de início. Edite os textos e a quantidade de fotos em
  `siteConfig.laserGalleryPage`.
- `#/fotos/antes-e-depois` → `src/pages/DentalGalleryPage.jsx`
  Reaproveita os casos de `siteConfig.beforeAfterCases` (cada caso = 1
  foto de "antes" + 1 de "depois", já totalizando as 4 fotos de início
  com os 2 casos padrão). Para adicionar mais casos, basta incluir novos
  itens nesse array.

Como é 100% baseado em hash (`#/...`), essas páginas funcionam mesmo na
hospedagem estática mais simples — não é necessário configurar
"rewrites" na Vercel nem em nenhum outro provedor.

## Notas de design

- Paleta: branco/creme, azul-marinho e dourado suave — inspirada nos tons
  de madeira, mármore e iluminação em LED dourada já usados na recepção
  física da clínica.
- A "linha dourada fluida" que aparece como divisor entre seções é o
  elemento de assinatura visual do site: uma referência discreta aos
  perfis de luz da recepção.
- Totalmente responsivo (mobile, tablet, desktop), com menu hambúrguer no
  celular e botão de WhatsApp flutuante fixo no mobile.
- Animações leves de entrada ao rolar a página (respeitam
  `prefers-reduced-motion`).
- SEO configurado: title, meta description, Open Graph, H1 único (no
  Hero), H2 em cada seção, `alt`/rótulos descritivos nos espaços de
  imagem e HTML semântico (`header`, `main`, `section`, `footer`).

## Sem erros de compilação

Todos os componentes foram revisados (chaves, tags JSX e imports
balanceados). Para confirmar o build localmente, basta rodar
`npm install && npm run build` — nenhuma dependência exótica é usada além
de `react`, `react-dom`, `lucide-react`, `vite` e `tailwindcss`.
