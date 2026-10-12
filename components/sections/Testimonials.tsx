import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What collaborators say"
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="card card-hover flex h-full flex-col">
                <Quote className="h-6 w-6 text-accent" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-line/10 pt-4">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
