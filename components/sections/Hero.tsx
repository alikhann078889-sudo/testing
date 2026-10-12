"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { hero, site } from "@/lib/content";

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.65, 0.35, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative gradient orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[120px]"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            I build fast, thoughtful products where{" "}
            <span className="bg-gradient-to-r from-primary-300 via-primary-400 to-accent-400 bg-clip-text text-transparent">
              engineering meets design
            </span>
            .
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {hero.subline}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.p {...fadeUp(0.4)} className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {site.location} · {site.availability}
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.dl
          {...fadeUp(0.5)}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="card card-hover rounded-2xl p-5 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-bold text-white sm:text-3xl">{stat.value}</span>
                <span className="mt-1 block text-xs text-slate-400">{stat.label}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
      {/* site is referenced to keep the import meaningful */}
      <span className="sr-only">{site.name}</span>
    </section>
  );
}
