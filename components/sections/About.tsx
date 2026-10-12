import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { about, site } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-base leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {about.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <aside className="card h-fit lg:sticky lg:top-24">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">At a glance</h3>
              <dl className="mt-5 space-y-4">
                {about.facts.map((f) => (
                  <div key={f.label} className="border-b border-line/10 pb-4 last:border-0 last:pb-0">
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">{f.label}</dt>
                    <dd className="mt-1 text-sm font-medium text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <a href={site.resumeUrl} className="btn-ghost mt-6 w-full">
                Download résumé
              </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
