import { Layout, Server, PenTool, Wrench } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/lib/content";

const iconMap: Record<string, typeof Layout> = {
  layout: Layout,
  server: Server,
  pen: PenTool,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for shipping"
          description="Eight years across startups and scale-ups, tuned for product engineering roles that blur the line between design and code."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Layout;
            return (
              <Reveal key={group.title} delay={0.07 * i}>
                <div className="card card-hover h-full rounded-2xl p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary-500/25 to-accent-500/20 text-primary-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="chip">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
