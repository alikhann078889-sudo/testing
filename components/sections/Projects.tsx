import { ExternalLink, Github } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few things I've designed, built, and shipped — from open-source libraries to products with real users and revenue."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={0.06 * i}>
              <article className="card card-hover group flex h-full flex-col rounded-2xl p-6 sm:p-7">
                <div className={`relative mb-6 h-36 overflow-hidden rounded-xl bg-gradient-to-br ${project.accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-between p-5">
                    <span className="rounded-lg bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {project.year}
                    </span>
                    <span className="rounded-lg bg-black/25 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm">
                      {project.role}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary-300">{project.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-300">
                  <span aria-hidden="true">📈</span>
                  {project.metric}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
                  {project.links.map((link, li) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-200 transition hover:text-accent-300"
                    >
                      {li === 0 ? <ExternalLink className="h-4 w-4" aria-hidden="true" /> : <Github className="h-4 w-4" aria-hidden="true" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
