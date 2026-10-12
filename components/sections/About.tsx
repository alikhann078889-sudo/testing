import { Compass, Gauge, Layers, PenLine } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/lib/content";

const icons = [Compass, Gauge, Layers, PenLine];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-3">
            <div className="card rounded-2xl p-7 sm:p-9">
              {about.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-lg leading-relaxed text-slate-200"
                      : "mt-5 leading-relaxed text-slate-300"
                  }
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">
                  Let&apos;s work together
                </a>
                <a href="#projects" className="btn-ghost">
                  See selected work
                </a>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-2">
            <div className="grid gap-4">
              {about.highlights.map((item, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <Reveal key={item.title} delay={0.08 * i}>
                    <div className="card card-hover flex items-start gap-4 rounded-2xl p-5">
                      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-500/15 text-primary-300">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
