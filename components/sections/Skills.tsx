import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit tuned for product work"
          blurb="Depth where it matters, breadth where it helps. These are the tools I reach for when the deadline is real."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <article className="card card-hover h-full">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                    <group.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{group.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
