import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          blurb="Six things I've shipped — products, tools and open source — with the stack behind each one."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.08}>
              <article
                className={`card card-hover flex h-full flex-col ${
                  project.featured ? "border-accent/30 bg-elevated/60" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted">
                      {project.year}
                      {project.featured ? " · Featured" : ""}
                    </p>
                  </div>
                  {project.featured ? (
                    <span className="chip border-accent/40 text-accent">★ Featured</span>
                  ) : null}
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-4 border-t border-line/10 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:text-accent-strong"
                  >
                    Live demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-ink"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    Source
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
