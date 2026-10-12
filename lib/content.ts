import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MonitorSmartphone,
  Database,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Maya Chen",
  initials: "MC",
  role: "Senior Product Engineer",
  location: "Berlin, Germany",
  email: "hello@mayachen.dev",
  availability: "Open to senior product roles & select freelance",
  resumeUrl: "/resume.pdf",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type Social = { label: string; href: string; icon: LucideIcon };
export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/mayachen-dev", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mayachen-dev", icon: Linkedin },
  { label: "X / Twitter", href: "https://x.com/mayachen_dev", icon: Twitter },
  { label: "Email", href: "mailto:hello@mayachen.dev", icon: Mail },
];

export const hero = {
  eyebrow: "Senior Product Engineer · Berlin",
  headlineA: "I build fast, humane software",
  headlineB: "for data-heavy products.",
  sub: "Eight years turning ambiguous problems into shipped products — real-time dashboards, design systems and offline-first tools that thousands of people rely on every day.",
  primaryCta: { label: "View projects", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
  stats: [
    { value: "8+", label: "years shipping products" },
    { value: "40k/min", label: "events streamed at peak" },
    { value: "12", label: "products taken 0 → 1" },
    { value: "4.9k", label: "GitHub stars on my OSS" },
  ],
};

export const about = {
  eyebrow: "About",
  title: "Engineer who sweats the last 10%",
  paragraphs: [
    "I'm Maya — a product engineer based in Berlin. I've spent the last eight years in the messy middle between design and infrastructure: prototyping with designers in the morning, tuning Postgres queries in the afternoon.",
    "My favourite work looks invisible: a dashboard that loads before you finish blinking, a sync engine that never loses a field note, a design system that lets a team of five ship like a team of twenty.",
    "Away from the keyboard I race vintage road bikes, photograph brutalist architecture, and maintain two open-source libraries used in production by teams I've never met.",
  ],
  highlights: [
    "Led the design system powering 9 product teams",
    "Cut p95 dashboard load time from 4.1s to 640ms",
    "Mentored 11 engineers, 4 now senior",
    "Speaker: React Berlin 2024, “Local-first that lasts”",
  ],
  facts: [
    { label: "Based in", value: "Berlin (CET, UTC+1)" },
    { label: "Focus", value: "Product engineering, DX, data viz" },
    { label: "Currently", value: "Learning Rust for edge tooling" },
    { label: "Open to", value: "Senior roles & select freelance" },
  ],
};

export type SkillGroup = { title: string; icon: LucideIcon; blurb: string; items: string[] };
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    blurb: "Interfaces that stay fast and accessible under real-world load.",
    items: ["TypeScript", "React 19", "Next.js App Router", "Tailwind CSS", "Framer Motion", "WCAG 2.2 AA"],
  },
  {
    title: "Backend & Data",
    icon: Database,
    blurb: "APIs and data models that hold up when the traffic graph goes vertical.",
    items: ["Node.js", "PostgreSQL", "Prisma", "Redis", "tRPC", "WebSockets", "ClickHouse"],
  },
  {
    title: "Practice & Tooling",
    icon: Workflow,
    blurb: "The habits that keep small teams shipping with confidence.",
    items: ["Design systems", "Vitest & Playwright", "CI/CD (GitHub Actions)", "Observability", "Figma", "Technical writing"],
  },
];

export type Project = {
  title: string;
  year: string;
  description: string;
  tags: string[];
  live: string;
  source: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Pulseboard",
    year: "2024",
    description:
      "Real-time operations dashboard for a logistics startup — 40k events/min streamed over WebSockets into virtualised charts, with alert routing that cut incident triage time by 38%.",
    tags: ["Next.js", "WebSockets", "ClickHouse", "Recharts"],
    live: "https://pulseboard.demo",
    source: "https://github.com/mayachen-dev/pulseboard",
    featured: true,
  },
  {
    title: "Fieldnotes",
    year: "2024",
    description:
      "Offline-first field research app for ecologists. CRDT-based sync keeps 200+ species surveys consistent across patchy connectivity in the field; used by 3 university labs.",
    tags: ["PWA", "IndexedDB", "Yjs", "Deno"],
    live: "https://fieldnotes.app",
    source: "https://github.com/mayachen-dev/fieldnotes",
    featured: true,
  },
  {
    title: "Ledgerline",
    year: "2023",
    description:
      "Open-source invoicing for freelancers: a typed CLI plus web UI that generates compliant PDF invoices from a git-friendly YAML ledger. 2.1k stars and 40+ contributors.",
    tags: ["TypeScript", "tRPC", "Prisma", "OSS"],
    live: "https://ledgerline.dev",
    source: "https://github.com/mayachen-dev/ledgerline",
  },
  {
    title: "Cartogram",
    year: "2023",
    description:
      "Interactive visualisation of EU open transit data — 1.2M stop-level records rendered with MapLibre and D3, with isochrone queries served from a pre-tiled edge cache.",
    tags: ["D3", "MapLibre", "Edge caching"],
    live: "https://cartogram.viz",
    source: "https://github.com/mayachen-dev/cartogram",
  },
  {
    title: "Relay CMS",
    year: "2022",
    description:
      "Headless CMS starter with edge-rendered previews and typed content models. Adopted as the base for 6 client builds; template downloaded 9k times.",
    tags: ["Next.js", "Sanity", "Edge runtime"],
    live: "https://relaycms.dev",
    source: "https://github.com/mayachen-dev/relay-cms",
  },
  {
    title: "Snipsmith",
    year: "2021",
    description:
      "Local-first snippet manager with end-to-end encryption via WebCrypto and optional peer sync. Desktop-grade keyboard UX in the browser; 12k monthly active users.",
    tags: ["React", "Dexie", "WebCrypto"],
    live: "https://snipsmith.app",
    source: "https://github.com/mayachen-dev/snipsmith",
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experience: Job[] = [
  {
    role: "Senior Product Engineer",
    company: "Nordlicht Labs",
    period: "2022 — Present",
    location: "Berlin",
    summary: "Technical lead for the analytics suite serving 300+ B2B customers.",
    highlights: [
      "Led the design system now powering 9 product teams; cut UI build time ~35%",
      "Re-architected ingestion to ClickHouse; p95 dashboard load 4.1s → 640ms",
      "Introduced Playwright e2e gates; production regressions down 60%",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Freightwave",
    period: "2020 — 2022",
    location: "Hamburg (remote)",
    summary: "Built the real-time shipment tracking platform used by 40 freight forwarders.",
    highlights: [
      "WebSocket pipeline handling 40k position events/min at peak season",
      "Shipped carrier-integration framework; onboarding new carriers 3× faster",
      "Owned Postgres schema and query performance through 10× data growth",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Klarheit Studio",
    period: "2018 — 2020",
    location: "Berlin",
    summary: "Client work for fintech and mobility startups, from prototype to production.",
    highlights: [
      "Delivered 14 production launches with a 3-person team",
      "Built the studio's internal component library and Storybook pipeline",
      "Brought every client project to WCAG 2.1 AA before it was fashionable",
    ],
  },
  {
    role: "Junior Developer",
    company: "Stadtwerke Digital",
    period: "2016 — 2018",
    location: "Leipzig",
    summary: "First engineering role: citizen-facing services for a municipal utility.",
    highlights: [
      "Rebuilt the outage map as a progressive web app; 92k monthly users",
      "Automated the release process, cutting deploys from hours to minutes",
    ],
  },
];

export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [
  {
    quote:
      "Maya joined a burning platform and left behind a calm, well-tested codebase. She asks the question everyone else was afraid to ask, then quietly fixes the root cause.",
    name: "Jonas Weber",
    role: "VP Engineering, Nordlicht Labs",
  },
  {
    quote:
      "The rare engineer who argues about kerning and query plans in the same standup. Our dashboard went from 'the slow page' to the product demo we lead with.",
    name: "Priya Raghavan",
    role: "Head of Product, Freightwave",
  },
  {
    quote:
      "Maya turned our vague 'make it feel alive' brief into a real-time interface our field teams actually trust. Handover docs so good we barely needed her — but we keep hiring her anyway.",
    name: "Dr. Elena Fischer",
    role: "Research Lead, Ecology Dept. TU Munich",
  },
];

export const contact = {
  eyebrow: "Contact",
  title: "Let's build something worth shipping",
  blurb:
    "Have a product that needs an engineer who cares about the details? Tell me what you're working on — I read everything and reply within two working days.",
  responseNote: "Usually replies within 48 hours · Berlin, CET",
};
