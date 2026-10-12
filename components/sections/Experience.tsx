import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          blurb="Four teams, one thread: shipping products that people use daily and that survive their own success."
        />

        <ol className="relative mt-12 space-y-10 border-l border-line/20 pl-6 sm:pl-8">
          {experience.map((job, i) => (
            <li key={job.company} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1 grid h-6 w-6 place-items-center rounded-full border border-accent/40 bg-base sm:-left-[39px]"
              >
                <Briefcase className="h-3 w-3 text-accent" aria-hidden="true" />
              </span>

              <Reveal delay={i * 0.06}>
                <article className="card card-hover">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-ink">
                      {job.role} · <span className="text-accent">{job.company}</span>
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      {job.period} · {job.location}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted">{job.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-ink/90">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
