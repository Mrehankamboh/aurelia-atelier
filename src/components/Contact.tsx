"use client";

import { useState, type FormEvent } from "react";
import { contact, studio } from "@/content/site";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

type Fields = {
  name: string;
  email: string;
  interest: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  interest: contact.interests[0],
  message: "",
};

const fieldClass =
  "w-full rounded-2xl border border-stone-line bg-stone-page px-4 py-3 text-ink transition duration-300 outline-none placeholder:text-ink-soft/70 hover:border-copper/40 focus:border-copper";

export default function Contact() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) next.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      next.email = "Add a valid email.";
    }
    if (fields.message.trim().length < 12) {
      next.message = "Tell us a little more about the project.";
    }
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Project enquiry from ${fields.name.trim()}`);
    const body = encodeURIComponent(
      `${fields.message.trim()}\n\n${fields.name.trim()}\n${fields.email.trim()}\n${fields.interest}`,
    );
    window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-28 bg-stone-raised py-24 md:py-32 lg:py-36">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow>{contact.eyebrow}</Eyebrow>
            <h2 className="mt-4 max-w-md font-display text-4xl leading-[1.02] tracking-[-0.035em] text-ink sm:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-soft">{contact.body}</p>

            <ul className="mt-10 space-y-3">
              <li>
                <a
                  href={`mailto:${studio.email}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-stone-line bg-stone-page px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-copper"
                >
                  <span>
                    <span className="block text-[11px] tracking-[0.16em] text-ink-soft uppercase">
                      Email
                    </span>
                    <span className="mt-1 block text-ink transition duration-300 group-hover:text-copper">
                      {studio.email}
                    </span>
                  </span>
                  <span
                    className="text-ink-soft transition duration-300 group-hover:translate-x-1 group-hover:text-copper"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </li>
              <li className="rounded-2xl border border-stone-line bg-stone-page px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-copper">
                <span className="block text-[11px] tracking-[0.16em] text-ink-soft uppercase">
                  Studio
                </span>
                <span className="mt-1 block text-ink">{studio.address}</span>
              </li>
            </ul>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">{contact.visit}</p>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            <div className="rounded-[28px] border border-stone-line bg-stone-page p-6 shadow-[0_24px_60px_rgba(28,25,23,0.06)] sm:p-8 md:p-10">
              {sent ? (
                <div>
                  <p className="text-[11px] tracking-[0.16em] text-copper uppercase">Note ready</p>
                  <h3 className="mt-3 font-display text-3xl tracking-[-0.03em] text-ink">
                    Your mail app should open with this enquiry.
                  </h3>
                  <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink-soft">
                    It is addressed to the studio. Send it from there, and we will reply if the brief suits the practice.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setFields(empty);
                    }}
                    className="mt-8 inline-flex rounded-full border border-stone-line px-6 py-3 text-sm text-ink transition duration-300 hover:-translate-y-0.5 hover:border-copper hover:text-copper active:scale-[0.98]"
                  >
                    Write another note
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-[11px] tracking-[0.16em] text-ink-soft uppercase">
                        Name
                      </span>
                      <input
                        name="name"
                        autoComplete="name"
                        value={fields.name}
                        onChange={(event) => update("name", event.target.value)}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={fieldClass}
                        placeholder="Your name"
                      />
                      {errors.name ? (
                        <span id="contact-name-error" className="mt-2 block text-sm text-copper">
                          {errors.name}
                        </span>
                      ) : null}
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[11px] tracking-[0.16em] text-ink-soft uppercase">
                        Email
                      </span>
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={fields.email}
                        onChange={(event) => update("email", event.target.value)}
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={fieldClass}
                        placeholder="you@example.com"
                      />
                      {errors.email ? (
                        <span id="contact-email-error" className="mt-2 block text-sm text-copper">
                          {errors.email}
                        </span>
                      ) : null}
                    </label>
                  </div>

                  <label className="mt-5 block">
                    <span className="mb-2 block text-[11px] tracking-[0.16em] text-ink-soft uppercase">
                      Interest
                    </span>
                    <select
                      name="interest"
                      value={fields.interest}
                      onChange={(event) => update("interest", event.target.value)}
                      className={fieldClass}
                    >
                      {contact.interests.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="mt-5 block">
                    <span className="mb-2 block text-[11px] tracking-[0.16em] text-ink-soft uppercase">
                      Message
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      value={fields.message}
                      onChange={(event) => update("message", event.target.value)}
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`${fieldClass} resize-y`}
                      placeholder="The house, the site, and when you hope to begin."
                    />
                    {errors.message ? (
                      <span id="contact-message-error" className="mt-2 block text-sm text-copper">
                        {errors.message}
                      </span>
                    ) : null}
                  </label>

                  <button
                    type="submit"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-copper px-6 py-3 text-sm font-medium tracking-wide text-stone-page transition duration-300 hover:-translate-y-0.5 hover:bg-copper-deep active:scale-[0.98] sm:w-auto"
                  >
                    Send the note
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
