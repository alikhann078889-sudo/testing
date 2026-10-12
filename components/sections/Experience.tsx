import { Briefcase, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Eight years of shipping products at startups and scale-ups — from seed-stage chaos to platform work at scale."
        />

        <ol className="relative mt-14 space-y-8 border-l border-white/10 pl-6 sm:pl-8">
          {experience.map((job, i) => (
            <li key={job.company} className="relative">
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-[#070b14] sm:-left-[39px] ${
                  i === 0 ? "bg-accent-400" : "bg-primary-400"
                }`}
              />
              <Reveal delay={0.05 * i}>
                <div className="card card-hover rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400">
                        <span className="inline-flex items-center gap-1.5 font-medium text-primary-300">
                          <Briefcase className="h-4 w-4" aria-hidden="true" />
                          {job.company}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" aria-hidden="true" />
                          {job.location}
                        </span>
                      </p>
                    </div>
                    <span className="chip">{job.period}</span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{job.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
