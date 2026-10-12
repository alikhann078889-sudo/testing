import { site, nav, socials } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-bold text-base">
            {site.initials}
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">{site.name}</p>
            <p className="text-xs text-muted">{site.role} · {site.location}</p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-muted transition hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-2.5">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line/25 text-muted transition hover:border-accent/50 hover:text-accent"
              >
                <s.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-center text-xs text-muted">
        © {year} {site.name}. Designed & built with Next.js, Tailwind CSS and too much coffee.
      </p>
    </footer>
  );
}
