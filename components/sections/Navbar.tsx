"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { nav, site } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the viewport grows past the md breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 rounded-full font-semibold text-ink transition hover:text-accent"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-bold text-base">
            {site.initials}
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-elevated/60 hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.resumeUrl}
            className="hidden items-center gap-2 rounded-full border border-line/25 px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent/50 hover:text-accent md:inline-flex"
          >
            <FileDown className="h-4 w-4" aria-hidden="true" />
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-line/25 text-ink transition hover:border-accent/50 hover:text-accent md:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="glass overflow-hidden border-t border-line/10 md:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink transition hover:bg-elevated/60 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.resumeUrl}
                  className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-accent transition hover:bg-elevated/60"
                >
                  <FileDown className="h-4 w-4" aria-hidden="true" />
                  Download résumé
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
