import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  blurb?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, blurb, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {blurb ? <p className="mt-4 text-base leading-relaxed text-muted">{blurb}</p> : null}
      <span
        aria-hidden="true"
        className={`mt-6 block h-px w-16 bg-gradient-to-r from-accent to-transparent ${centered ? "mx-auto" : ""}`}
      />
    </Reveal>
  );
}
