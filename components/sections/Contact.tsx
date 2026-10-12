"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Github, Linkedin, Twitter, Dribbble, Mail, MapPin, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/content";

const socialIcons: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  dribbble: Dribbble,
};

type FormState = { name: string; email: string; message: string };
type Errors = Partial<FormState>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name (at least 2 characters).";
  if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 20) errors.message = "Tell me a bit more — at least 20 characters.";
  return errors;
}

const inputClass = (hasError: boolean) =>
  `w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:outline-none focus:ring-2 ${
    hasError
      ? "border-danger/60 focus:ring-danger/50"
      : "border-white/10 focus:border-primary-400/60 focus:ring-primary-500/40"
  }`;

export default function Contact() {
  const [values, setValues] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    // Static site: simulate a send, then confirm.
    window.setTimeout(() => {
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a role, project, or just a question? My inbox is open — I usually reply within a day."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Info panel */}
          <Reveal className="lg:col-span-2">
            <div className="card flex h-full flex-col rounded-2xl p-7 sm:p-8">
              <h3 className="text-lg font-bold text-white">Contact details</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex items-center gap-3 text-slate-300 transition hover:text-white"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-500/15 text-primary-300">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">Email</span>
                      <span className="font-medium group-hover:underline">{site.email}</span>
                    </span>
                  </a>
                </li>
                <li className="inline-flex items-center gap-3 text-slate-300">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/15 text-accent-300">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Based in</span>
                    <span className="font-medium">{site.location}</span>
                  </span>
                </li>
              </ul>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Elsewhere</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {site.socials.map((social) => {
                  const Icon = socialIcons[social.icon] ?? Github;
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${site.name} on ${social.label}`}
                        className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-primary-400/50 hover:bg-primary-500/15 hover:text-white"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-auto pt-8 text-sm leading-relaxed text-slate-400">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-success align-middle" aria-hidden="true" />
                {site.availability} — currently taking on select projects.
              </p>
            </div>
          </Reveal>

          {/* Form panel */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="card rounded-2xl p-7 sm:p-8">
              {status === "sent" ? (
                <div role="status" className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-400">
                    Thanks for reaching out — I&apos;ll get back to you within one business day.
                  </p>
                  <button type="button" onClick={() => setStatus("idle")} className="btn-ghost mt-6">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-slate-300">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Ada Lovelace"
                        value={values.name}
                        onChange={update("name")}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={inputClass(Boolean(errors.name))}
                      />
                      {errors.name && (
                        <p id="contact-name-error" className="mt-1.5 text-xs text-danger">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-slate-300">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="ada@example.com"
                        value={values.email}
                        onChange={update("email")}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={inputClass(Boolean(errors.email))}
                      />
                      {errors.email && (
                        <p id="contact-email-error" className="mt-1.5 text-xs text-danger">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={6}
                      placeholder="Tell me about your project, timeline, and what success looks like…"
                      value={values.message}
                      onChange={update("message")}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`${inputClass(Boolean(errors.message))} resize-y`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 text-xs text-danger">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button type="submit" disabled={status === "sending"} className="btn-primary disabled:cursor-not-allowed disabled:opacity-60">
                      {status === "sending" ? "Sending…" : "Send message"}
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <p className="text-xs text-slate-500">Prefer email? Write to {site.email} directly.</p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
