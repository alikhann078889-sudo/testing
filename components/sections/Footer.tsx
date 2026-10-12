import { Github, Linkedin, Twitter, Dribbble, Heart } from "lucide-react";
import { nav, site } from "@/lib/content";

const socialIcons: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-page">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#top" className="inline-flex items-center gap-2 font-semibold text-white">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-bold text-white">
                M
              </span>
              {site.name}
            </a>
            <p className="mt-2 max-w-xs text-sm text-slate-400">
              {site.role} crafting fast, accessible products from {site.location}.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-slate-400 transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <ul className="flex gap-3">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.icon] ?? Github;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.name} on ${social.label}`}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-primary-400/50 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Built with Next.js, Tailwind &amp; a little
            <Heart className="h-3.5 w-3.5 text-primary-400" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
