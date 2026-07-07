export type Lang = "pt" | "en";

type Metric = { value: string; label: string };
type Case = { title: string; desc: string };
type Shot = { src: string; caption: string };
type Project = {
  id: string;
  name: string;
  kind: string;
  desc: string;
  metrics: Metric[];
  cases: Case[];
  stack: string[];
  shots: Shot[];
};

type Content = {
  nav: { projetos: string; stack: string; decisoes: string; contato: string };
  hero: {
    role: string;
    base: string;
    name: string;
    title: string[];
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  projects: { eyebrow: string; lead: string; items: Project[] };
  stack: { eyebrow: string; lead: string; groups: { label: string; items: string[] }[] };
  principles: {
    eyebrow: string;
    lead: string;
    situationLabel: string;
    items: { case: string; decision: string; tag: string }[];
  };
  contact: { eyebrow: string; cta: string; sub: string };
};

/** Dicionário do site em PT/EN. Fonte única das strings. Organizado por PROJETOS.
 *  Tom: seco e factual, sem hype, sem travessão (regra do projeto). */
export const dict: Record<Lang, Content> = {
  pt: {
    nav: { projetos: "Projetos", stack: "Stack", decisoes: "Decisões", contato: "Contato" },
    hero: {
      role: "Fundador & CTO da LoveTickets",
      base: "Imperatriz, MA · Brasil",
      name: "Marcos Vitor",
      title: ["Produto", "e engenharia."],
      sub: "Penso o produto e construo a engenharia que o sustenta. Projeto e mantenho sistemas que rodam em produção, do primeiro traço ao deploy.",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Falar comigo",
      scroll: "Role para ver",
    },
    projects: {
      eyebrow: "Projetos",
      lead: "O que eu construí.",
      items: [
        {
          id: "01",
          name: "LoveTickets",
          kind: "Plataforma de ingressos e gestão de eventos",
          desc: "Ecossistema de 7 serviços que cobre o ciclo inteiro: venda online com PIX e cartão, app nativo com dois lados num só binário (o consumidor compra e guarda ingressos, o produtor cria eventos e vende no balcão), check-in na portaria, maquininha física e back office financeiro. Fundei e construo desde o início.",
          metrics: [
            { value: "+1.600", label: "eventos realizados" },
            { value: "+120 mil", label: "ingressos vendidos" },
            { value: "+60 mil", label: "acessos por mês" },
            { value: "7", label: "serviços em produção" },
          ],
          cases: [
            { title: "App consumidor e produtor num só", desc: "Um binário React Native com dois produtos: a compra e descoberta para o público e o painel de organizador para criar eventos, vender no PDV e acompanhar o financeiro em tempo real." },
            { title: "Offline-first de verdade", desc: "React Query com cache persistido, refetch silencioso no foco e mutations otimistas. O check-in valida o QR na portaria sem internet e sincroniza depois. Acaba com a fila." },
            { title: "Três backends, uma sessão", desc: "O app conversa com três serviços independentes (API Node, BFF Next.js e a POS API) com um único JWT e refresh transparente numa camada de serviços central." },
            { title: "Convite num toque", desc: "Unifiquei a venda presencial com o convite: o organizador identifica o cliente e o sistema resolve a conta, vincula e notifica por push e email. Colapsa um fluxo de 5 passos em 1." },
            { title: "Antifraude de QR único", desc: "Ao transferir o ingresso, o anterior é invalidado na hora. Print não entra duas vezes." },
          ],
          stack: ["React Native / Expo", "Reanimated", "Next.js (BFF)", "Node", "TypeScript", "React Query", "Prisma", "MySQL", "Stripe", "Supabase", "Ably", "EAS Build / OTA"],
          shots: [],
        },
        {
          id: "02",
          name: "Twin",
          kind: "Orquestração de desenvolvimento com IA multi-agente",
          desc: "Um sistema central que coordena vários agentes de IA desenvolvendo em paralelo nos repositórios, sem colisão, com o humano decidindo o que entra. Requests numerados com ciclo de status, gate de aprovação, contratos de API entre serviços e cada commit amarrado ao request que o originou.",
          metrics: [],
          cases: [
            { title: "Requests numerados", desc: "Cada demanda tem ciclo de status: aberto, aprovado, em progresso, concluído." },
            { title: "Gate de aprovação humano", desc: "Nenhum agente implementa sem eu liberar. Eu decido o que entra." },
            { title: "Contratos de API fechados", desc: "Nada é integrado entre serviços sem shape acordado." },
            { title: "Rastreabilidade total", desc: "Cada commit amarrado ao request que o originou." },
          ],
          stack: ["Next.js", "TypeScript", "Multi-agente", "OpenCode SDK"],
          shots: [
            { src: "/shots/twin/home.png", caption: "Central de Comando: requests, o que precisa de mim e o estado dos projetos" },
            { src: "/shots/twin/oraculo.png", caption: "O oráculo processando ao vivo: roteia a pergunta, separa o contexto e responde" },
          ],
        },
        {
          id: "03",
          name: "ByteTribe Radar",
          kind: "Redação automatizada com IA, da notícia crua ao post pronto",
          desc: "Sistema que faz o trabalho de uma redação inteira de conteúdo sobre IA. Um motor de curadoria lê 35 fontes, agrupa por tema e deixa a IA fazer o julgamento editorial, saindo uma newsletter pronta pra revisar. Um pipeline de criativos gera o material de divulgação inteiro: reels em vídeo, carrosséis e locução. O humano só revisa e aprova.",
          metrics: [],
          cases: [
            { title: "Curadoria com julgamento editorial", desc: "Ingere 35 fontes em camadas de credibilidade, agrupa por tema e pontua cada uma. A IA faz o julgamento fino e escreve o rascunho no tom da marca." },
            { title: "Reels gerados por código", desc: "Vídeo vertical renderizado com Remotion, com narração por IA e legenda sincronizada palavra a palavra com a voz." },
            { title: "Arte generativa determinística", desc: "A mesma notícia sempre vira a mesma arte, com campo de cor por shader. Preview no navegador e vídeo final são idênticos." },
            { title: "Guardrails de alcance", desc: "Filtra as palavras que derrubam o alcance no Instagram e no TikTok antes de publicar." },
          ],
          stack: ["Next.js", "Remotion", "satori", "Shaders (WebGL)", "ElevenLabs (TTS)", "TypeScript"],
          shots: [
            { src: "/shots/bytetribe/radar-edicao.png", caption: "O Radar: uma edição curada pela IA, pronta pra revisar" },
            { src: "/shots/bytetribe/criativos-reel.png", caption: "Reel vertical gerado por código, com locução e legenda sincronizada" },
            { src: "/shots/bytetribe/criativos-carrossel.png", caption: "Carrossel para Instagram, arte determinística por notícia" },
          ],
        },
      ],
    },
    stack: {
      eyebrow: "Stack",
      lead: "Tecnologias que eu uso.",
      groups: [
        { label: "Frontend", items: ["React", "Next.js", "React Native / Expo", "TypeScript", "Tailwind"] },
        { label: "Backend", items: ["Node.js", "Prisma", "MySQL", "APIs REST", "cache distribuído"] },
        { label: "Mobile & nativo", items: ["Expo", "módulos nativos Java", "WatermelonDB", "TEF / SiTef", "Universal / App Links"] },
        { label: "IA & criação", items: ["orquestração multi-agente", "Remotion", "shaders WebGL", "TTS"] },
      ],
    },
    principles: {
      eyebrow: "Decisões de engenharia",
      lead: "Como eu escolho, com exemplos reais.",
      situationLabel: "Situação",
      items: [
        {
          case: "Marcar o canal de venda de um pedido",
          decision: "Recusei sobrecarregar a coluna de enum. Misturava dois eixos ortogonais e regredia o financeiro. Usei um campo JSON que já existia. Zero migration, nada quebrado.",
          tag: "Sem gambiarra estrutural",
        },
        {
          case: "Validar ingresso na portaria sem internet",
          decision: "Pus a validação no dispositivo com base local e reconciliação depois. O check-in acontece offline e sincroniza quando a rede volta. Acabou a fila de entrada.",
          tag: "Offline-first de verdade",
        },
        {
          case: "Impedir que um print de ingresso entre duas vezes",
          decision: "Cada transferência gera um QR novo e invalida o anterior na hora. O antifraude é consequência do modelo de dados, não um remendo em cima.",
          tag: "Segurança por design",
        },
        {
          case: "Sete serviços evoluindo ao mesmo tempo",
          decision: "Nenhum é integrado sem contrato de API acordado. O shape é combinado antes, então uma mudança num serviço não estoura os outros em produção.",
          tag: "Contrato antes de código",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      cta: "Fale comigo",
      sub: "Aberto a conversar sobre produto, engenharia ou desenvolvimento com IA.",
    },
  },
  en: {
    nav: { projetos: "Projects", stack: "Stack", decisoes: "Decisions", contato: "Contact" },
    hero: {
      role: "Founder & CTO at LoveTickets",
      base: "Imperatriz, Brazil",
      name: "Marcos Vitor",
      title: ["Product", "and engineering."],
      sub: "I think the product and build the engineering behind it. I design and maintain systems that run in production, from the first sketch to deploy.",
      ctaPrimary: "See projects",
      ctaSecondary: "Get in touch",
      scroll: "Scroll to explore",
    },
    projects: {
      eyebrow: "Projects",
      lead: "What I've built.",
      items: [
        {
          id: "01",
          name: "LoveTickets",
          kind: "Ticketing and event management platform",
          desc: "An ecosystem of 7 services covering the full cycle: online sales with PIX and card, a native app with two sides in a single binary (the consumer buys and holds tickets, the producer creates events and sells at the counter), door check-in, a physical card reader, and a financial back office. I founded it and build it from the ground up.",
          metrics: [
            { value: "+1,600", label: "events run" },
            { value: "+120k", label: "tickets sold" },
            { value: "+60k", label: "monthly visits" },
            { value: "7", label: "services in production" },
          ],
          cases: [
            { title: "Consumer and producer in one app", desc: "A single React Native binary with two products: buying and discovery for the public, and an organizer panel to create events, sell at the POS and track finances in real time." },
            { title: "Truly offline-first", desc: "React Query with a persisted cache, silent refetch on focus and optimistic mutations. Check-in validates the QR at the door with no internet and syncs later. No more lines." },
            { title: "Three backends, one session", desc: "The app talks to three independent services (a Node API, a Next.js BFF and the POS API) with a single JWT and transparent refresh in a central service layer." },
            { title: "One-tap invite", desc: "I unified in-person sales with invites: the organizer identifies the customer and the system resolves the account, links it and notifies by push and email. It collapses a 5-step flow into 1." },
            { title: "Single-QR anti-fraud", desc: "Transferring a ticket invalidates the previous one instantly. A screenshot can't enter twice." },
          ],
          stack: ["React Native / Expo", "Reanimated", "Next.js (BFF)", "Node", "TypeScript", "React Query", "Prisma", "MySQL", "Stripe", "Supabase", "Ably", "EAS Build / OTA"],
          shots: [],
        },
        {
          id: "02",
          name: "Twin",
          kind: "Multi-agent AI development orchestration",
          desc: "A central system that coordinates multiple AI agents developing in parallel across repositories, without collision, with the human deciding what ships. Numbered requests with a status cycle, an approval gate, API contracts between services, and every commit tied to the request that originated it.",
          metrics: [],
          cases: [
            { title: "Numbered requests", desc: "Every task has a status cycle: open, approved, in progress, done." },
            { title: "Human approval gate", desc: "No agent ships without my sign-off. I decide what goes in." },
            { title: "Closed API contracts", desc: "Nothing is integrated between services without an agreed shape." },
            { title: "Full traceability", desc: "Every commit tied to the request that originated it." },
          ],
          stack: ["Next.js", "TypeScript", "Multi-agent", "OpenCode SDK"],
          shots: [
            { src: "/shots/twin/home.png", caption: "Command center: requests, what needs me, and the state of every project" },
            { src: "/shots/twin/oraculo.png", caption: "The oracle working live: it routes the question, separates context and answers" },
          ],
        },
        {
          id: "03",
          name: "ByteTribe Radar",
          kind: "Automated newsroom with AI, from raw news to a ready-to-post",
          desc: "A system that does the work of an entire newsroom on AI content. A curation engine reads 35 sources, groups them by topic and lets the AI make the editorial call, producing a newsletter ready to review. A creative pipeline generates the whole promo set: video reels, carousels and voice-over. The human only reviews and approves.",
          metrics: [],
          cases: [
            { title: "Curation with editorial judgment", desc: "Ingests 35 sources across credibility tiers, groups them by topic and scores each one. The AI makes the fine call and writes the draft in the brand's voice." },
            { title: "Code-rendered reels", desc: "Vertical video rendered with Remotion, with AI narration and captions synced word by word to the voice." },
            { title: "Deterministic generative art", desc: "The same story always becomes the same art, with a shader color field. Browser preview and final video are identical." },
            { title: "Reach guardrails", desc: "Strips the words that tank reach on Instagram and TikTok before publishing." },
          ],
          stack: ["Next.js", "Remotion", "satori", "Shaders (WebGL)", "ElevenLabs (TTS)", "TypeScript"],
          shots: [
            { src: "/shots/bytetribe/radar-edicao.png", caption: "The Radar: an AI-curated edition, ready to review" },
            { src: "/shots/bytetribe/criativos-reel.png", caption: "Code-rendered vertical reel, with voice-over and synced captions" },
            { src: "/shots/bytetribe/criativos-carrossel.png", caption: "Instagram carousel, deterministic art per story" },
          ],
        },
      ],
    },
    stack: {
      eyebrow: "Stack",
      lead: "Technologies I use.",
      groups: [
        { label: "Frontend", items: ["React", "Next.js", "React Native / Expo", "TypeScript", "Tailwind"] },
        { label: "Backend", items: ["Node.js", "Prisma", "MySQL", "REST APIs", "distributed cache"] },
        { label: "Mobile & native", items: ["Expo", "native Java modules", "WatermelonDB", "TEF / SiTef", "Universal / App Links"] },
        { label: "AI & creative", items: ["multi-agent orchestration", "Remotion", "WebGL shaders", "TTS"] },
      ],
    },
    principles: {
      eyebrow: "Engineering decisions",
      lead: "How I choose, with real examples.",
      situationLabel: "Context",
      items: [
        {
          case: "Marking the sales channel of an order",
          decision: "I refused to overload the enum column. It mixed two orthogonal axes and regressed the financials. I used a JSON field that already existed. Zero migration, nothing broken.",
          tag: "No structural hacks",
        },
        {
          case: "Validating a ticket at the door with no internet",
          decision: "I put validation on the device with a local database and reconciliation afterward. Check-in happens offline and syncs when the network is back. No more entry lines.",
          tag: "Truly offline-first",
        },
        {
          case: "Stopping a ticket screenshot from entering twice",
          decision: "Every transfer generates a new QR and invalidates the previous one instantly. Anti-fraud is a consequence of the data model, not a patch on top.",
          tag: "Security by design",
        },
        {
          case: "Seven services evolving at once",
          decision: "None is integrated without an agreed API contract. The shape is settled first, so a change in one service doesn't blow up the others in production.",
          tag: "Contract before code",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      cta: "Get in touch",
      sub: "Open to talk about product, engineering, or AI-driven development.",
    },
  },
};

export type Dict = (typeof dict)["pt"];
