"use client";

import { useState } from "react";
import { faqs } from "@/content/site";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span
      className={`relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 group-hover:border-copper ${
        open ? "border-copper bg-copper text-stone-page" : "border-stone-line bg-stone-page text-ink"
      }`}
      aria-hidden="true"
    >
      <span className="absolute h-px w-3.5 bg-current" />
      <span
        className={`absolute h-3.5 w-px bg-current transition duration-300 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-28 py-24 md:py-32 lg:py-36">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.25rem]">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-ink-soft">
              Six answers we give before a project begins. Anything else, we would rather discuss on the site.
            </p>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((item, index) => {
                const isOpen = open === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <div
                    key={item.question}
                    className={`rounded-2xl border transition duration-300 ${
                      isOpen
                        ? "border-copper/30 bg-stone-raised"
                        : "border-stone-line bg-stone-page hover:border-copper/40"
                    }`}
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        className="group flex w-full items-center gap-4 px-4 py-4 text-left sm:gap-5 sm:px-6 sm:py-5"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? -1 : index)}
                      >
                        <span className="w-7 shrink-0 text-xs tracking-[0.16em] text-copper">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-display text-lg tracking-[-0.02em] text-ink sm:text-xl md:text-2xl">
                          {item.question}
                        </span>
                        <PlusMinus open={isOpen} />
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      aria-hidden={!isOpen}
                      inert={!isOpen}
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-4 pb-5 pl-[3.75rem] text-[16px] leading-relaxed text-ink-soft sm:pr-20 sm:pb-6 sm:pl-[4.5rem] sm:text-[17px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
