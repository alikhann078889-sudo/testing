"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { hero, site } from "@/lib/content";

export default function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.65, 0.35, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden="true" className="dot-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 h-96 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p {...fade(0)} className="chip mx-auto">
            <MapPin className="mr-1.5 h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-6xl"
          >
            {hero.headlineA}{" "}
            <span className="bg-gradient-to-r from-accent to-accent-strong bg-clip-text text-transparent">
              {hero.headlineB}
            </span>
          </motion.h1>

          <motion.p {...fade(0.16)} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {hero.sub}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost">
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.p {...fade(0.3)} className="mt-6 text-sm text-muted">
            {site.availability}
          </motion.p>
        </div>

        <motion.dl
          {...fade(0.38)}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="card card-hover text-center">
              <dt className="order-2 mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                {stat.label}
              </dt>
              <dd className="order-1 text-2xl font-bold text-accent sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
      {/* site.name referenced so the identity stays tied to content.ts */}
      <span className="sr-only">{site.name}</span>
    </section>
  );
}
