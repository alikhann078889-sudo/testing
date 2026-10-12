import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p> : null}
      <span
        aria-hidden="true"
        className={`mt-6 block h-1 w-16 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </Reveal>
  );
}
