"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { contact, site, socials } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";
type Errors = { name?: string; email?: string; message?: string };

function validate(values: { name: string; email: string; message: string }): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please tell me your name.";
  if (!values.email.trim()) {
    errors.email = "An email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "That email address doesn't look right.";
  }
  if (!values.message.trim()) errors.message = "A short message helps me reply usefully.";
  else if (values.message.trim().length < 20) errors.message = "A little more detail, please (20+ characters).";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      // Static site: simulate delivery, then confirm to the user.
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-base/60 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 ${
      hasError ? "border-red-400/70" : "border-line/25"
    }`;

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} blurb={contact.blurb} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="card h-fit">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Direct lines</h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/12 text-accent">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <a href={`mailto:${site.email}`} className="text-sm font-medium text-ink hover:text-accent">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/12 text-accent">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-ink">{site.location}</span>
                </li>
              </ul>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">Elsewhere</h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-line/25 text-muted transition hover:border-accent/50 hover:text-accent"
                    >
                      <s.icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-line/10 pt-5 text-xs text-muted">{contact.responseNote}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="card space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={update("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Ada Lovelace"
                    className={inputClass(Boolean(errors.name))}
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="you@company.com"
                    className={inputClass(Boolean(errors.email))}
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="What are you building, and where could I help?"
                  className={inputClass(Boolean(errors.message))}
                />
                {errors.message ? (
                  <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
                  {status === "sending" ? "Sending…" : "Send message"}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>

                {status === "success" ? (
                  <p role="status" className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Thanks — your message is on its way. I'll reply within two working days.
                  </p>
                ) : null}
                {status === "error" && Object.keys(errors).length > 0 ? (
                  <p role="alert" className="text-sm text-red-400">
                    Please fix the highlighted fields and try again.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
