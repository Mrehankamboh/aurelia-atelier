"use client";

import { useEffect, useRef, useState } from "react";
import { nav } from "@/content/site";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const header = headerRef.current;
    const panel = panelRef.current;
    const button = menuButtonRef.current;
    const links = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>("a, button"))
      : [];
    const focusable = button ? [button, ...links] : links;
    links[0]?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      if (header?.contains(document.activeElement)) button?.focus();
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-300 ${
          solid
            ? "border-b border-stone-line bg-stone-page/95 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
      <Container className="flex h-16 items-center justify-between md:h-[72px]">
        <a
          href="#top"
          aria-label="Aurelia Atelier"
          className="text-ink transition duration-300 hover:text-copper"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors duration-200 hover:text-copper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href="#contact" size="sm">
              Book a consultation
            </Button>
          </div>
        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition duration-200 ${
                open ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-ink transition duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition duration-200 ${
                open ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </span>
        </button>
        </div>
      </Container>
      </div>

      <div
        id="mobile-nav"
        ref={panelRef}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label="Primary"
        inert={!open}
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-stone-page transition duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <Container className="flex h-full flex-col gap-8 py-10">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-4xl tracking-[-0.03em] text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            href="#contact"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Book a consultation
          </Button>
        </Container>
      </div>
    </header>
  );
}
