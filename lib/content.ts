export const site = {
  name: "Maya Chen",
  role: "Design Engineer & Full-Stack Developer",
  location: "San Francisco, CA",
  email: "maya@mayachen.dev",
  availability: "Open to senior product engineering roles",
  resumeUrl: "/resume-maya-chen.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/mayachen-dev", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mayachen-dev", icon: "linkedin" },
    { label: "X / Twitter", href: "https://x.com/mayachen_dev", icon: "twitter" },
    { label: "Dribbble", href: "https://dribbble.com/mayachen", icon: "dribbble" },
  ],
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Design Engineer · San Francisco",
  headline: "I build fast, thoughtful products where engineering meets design.",
  subline:
    "Hi, I'm Maya. For the past 8 years I've shipped web apps used by millions — obsessing over the last 10% of polish that turns a good product into a great one.",
  primaryCta: { label: "View my work", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
  stats: [
    { value: "8+", label: "Years shipping products" },
    { value: "40+", label: "Projects launched" },
    { value: "12", label: "Open-source libraries" },
    { value: "3.2M", label: "Users reached" },
  ],
};

export const about = {
  eyebrow: "About",
  title: "Engineer by training, designer at heart",
  paragraphs: [
    "I started out as a CS major at UC Berkeley who kept sneaking into design critiques. Today I sit comfortably in both worlds: I can take a fuzzy idea, sketch the interface, design the system, and ship the production code behind it.",
    "Most recently I led the front-end platform team at Northwind Labs, where we rebuilt a legacy dashboard into a Next.js app that loads in under 400ms and cut support tickets by 31%. Before that I built real-time collaboration tools at Driftline and mentored 20+ engineers through their first production launches.",
    "Outside of work you'll find me sketching interface ideas in a battered Moleskine, contributing to open-source design tooling, and chasing the perfect flat white.",
  ],
  highlights: [
    { title: "Product-minded", detail: "I ask 'why' before 'how' — every feature starts from a user problem." },
    { title: "Performance obsessed", detail: "Core Web Vitals, bundle budgets, and 60fps interactions by default." },
    { title: "Design systems", detail: "I've built and maintained token-based systems used by 5 product teams." },
    { title: "Mentor & writer", detail: "Writing about interface craft to 18k subscribers on 'Polished Bits'." },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    skills: ["TypeScript", "React 19", "Next.js 15", "Tailwind CSS", "Framer Motion", "Accessibility (WCAG)"],
  },
  {
    title: "Backend & Data",
    icon: "server",
    skills: ["Node.js", "PostgreSQL", "Prisma", "Redis", "tRPC / GraphQL", "Edge functions"],
  },
  {
    title: "Design & Craft",
    icon: "pen",
    skills: ["Figma", "Design systems", "Motion design", "Prototyping", "User research", "Figma-to-code"],
  },
  {
    title: "Platform & Tooling",
    icon: "wrench",
    skills: ["Vercel", "Docker", "CI/CD (GitHub Actions)", "Playwright", "Storybook", "Analytics & A/B testing"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  metric: string;
  accent: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "Pulseboard",
    tagline: "Real-time product analytics",
    description:
      "A streaming analytics dashboard that ingests 40k events/sec via WebSockets and renders live funnels with virtualized charts. Led the migration from a legacy Angular app to Next.js.",
    tags: ["Next.js", "ClickHouse", "WebSockets", "D3"],
    year: "2024",
    role: "Tech lead · 5 engineers",
    metric: "P95 dashboard load 6.1s → 380ms",
    accent: "from-violet-500/70 to-fuchsia-500/40",
    links: [
      { label: "Live demo", href: "https://pulseboard-demo.vercel.app" },
      { label: "Case study", href: "https://mayachen.dev/writing/pulseboard" },
    ],
  },
  {
    name: "Lumen UI",
    tagline: "Open-source component library",
    description:
      "A fully accessible React component library with 48 components, design tokens, and dark mode built in. Used in production by 2,300+ projects and featured on GitHub Trending.",
    tags: ["TypeScript", "Radix UI", "Tailwind", "Storybook"],
    year: "2023",
    role: "Creator & maintainer",
    metric: "4.1k GitHub stars · 90k weekly downloads",
    accent: "from-cyan-500/70 to-sky-500/40",
    links: [
      { label: "Documentation", href: "https://lumen-ui.dev" },
      { label: "GitHub", href: "https://github.com/mayachen-dev/lumen-ui" },
    ],
  },
  {
    name: "Ledgerly",
    tagline: "Invoicing for freelancers",
    description:
      "A SaaS that turns time tracking into branded invoices with Stripe payments and automated reminders. Built solo end-to-end; grew to 1,800 paying customers in year one.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    year: "2023",
    role: "Founder · solo build",
    metric: "$18k MRR · 1,800 paying users",
    accent: "from-emerald-500/70 to-teal-500/40",
    links: [
      { label: "Live site", href: "https://ledgerly.app" },
      { label: "Changelog", href: "https://ledgerly.app/changelog" },
    ],
  },
  {
    name: "Fernweh",
    tagline: "Offline-first travel planner",
    description:
      "A PWA for planning multi-city trips with collaborative itineraries, Mapbox routing, and full offline support via IndexedDB sync. Installable, 92 Lighthouse score.",
    tags: ["React", "Mapbox", "IndexedDB", "PWA"],
    year: "2022",
    role: "Design & frontend",
    metric: "38k monthly active travelers",
    accent: "from-amber-500/70 to-orange-500/40",
    links: [
      { label: "Live app", href: "https://fernweh.app" },
      { label: "GitHub", href: "https://github.com/mayachen-dev/fernweh" },
    ],
  },
  {
    name: "Echo Notes",
    tagline: "Voice memos that organize themselves",
    description:
      "Records voice notes, transcribes them with Whisper on edge functions, and auto-tags action items into structured summaries. Ships as a mobile-first web app.",
    tags: ["Whisper API", "Edge runtime", "Zustand", "Vercel AI"],
    year: "2024",
    role: "Side project",
    metric: "Product Hunt #2 · 6.5k upvotes",
    accent: "from-rose-500/70 to-pink-500/40",
    links: [
      { label: "Live demo", href: "https://echonotes.app" },
      { label: "Write-up", href: "https://mayachen.dev/writing/echo-notes" },
    ],
  },
  {
    name: "Orbit Retros",
    tagline: "Real-time team retrospectives",
    description:
      "A collaborative retro board where distributed teams run ceremonies together — CRDT-backed live cursors, anonymous voting, and automatic action-item follow-ups in Slack.",
    tags: ["Yjs", "CRDTs", "Node.js", "Slack API"],
    year: "2021",
    role: "Full-stack engineer",
    metric: "Adopted by 340 engineering teams",
    accent: "from-indigo-500/70 to-blue-500/40",
    links: [
      { label: "Product page", href: "https://orbitretro.com" },
      { label: "Case study", href: "https://mayachen.dev/writing/orbit" },
    ],
  },
];

export const experience = [
  {
    company: "Northwind Labs",
    role: "Senior Frontend Engineer → Tech Lead",
    period: "2021 — Present",
    location: "San Francisco (hybrid)",
    summary:
      "Lead a team of 5 rebuilding the core analytics product. Own the design system, performance budget, and front-end architecture across 3 squads.",
    bullets: [
      "Cut P95 dashboard load from 6.1s to 380ms via streaming SSR and route-level code splitting.",
      "Shipped a token-based design system now used by 5 product teams; reduced UI defects 44%.",
      "Introduced Playwright E2E coverage on critical flows, dropping regression escapes by 60%.",
    ],
  },
  {
    company: "Driftline",
    role: "Full-Stack Engineer",
    period: "2018 — 2021",
    location: "Remote",
    summary:
      "Built real-time collaboration features for a docs startup from seed stage through Series B acquisition.",
    bullets: [
      "Implemented multiplayer editing with Yjs CRDTs supporting 200+ concurrent editors per doc.",
      "Designed and shipped the public REST + WebSocket API used by 60+ integration partners.",
      "Scaled the Node.js presence service from 1k to 90k concurrent connections.",
    ],
  },
  {
    company: "Brightfold Studio",
    role: "Frontend Developer",
    period: "2016 — 2018",
    location: "Oakland, CA",
    summary:
      "Agency role building marketing sites and interactive campaigns for consumer brands.",
    bullets: [
      "Delivered 25+ award-nominated sites; two Awwwards 'Site of the Day' mentions.",
      "Standardized the studio's React starter, cutting project setup time from days to hours.",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Maya is the rare engineer who sweats the pixels and the query plans. She rebuilt our dashboard and our activation rate jumped 18% in a quarter.",
    name: "Priya Raghavan",
    title: "VP Product, Northwind Labs",
    initials: "PR",
  },
  {
    quote:
      "She took a napkin sketch and turned it into Lumen UI — accessible, documented, and beautiful. Half our team now reaches for her library first.",
    name: "Daniel Okafor",
    title: "Staff Engineer, Fintech Collective",
    initials: "DO",
  },
  {
    quote:
      "Working with Maya on Orbit felt like adding three people: a designer, a backend engineer, and a product lead. The live cursors demo sold our whole seed round.",
    name: "Sofia Marino",
    title: "Co-founder, Driftline",
    initials: "SM",
  },
];
