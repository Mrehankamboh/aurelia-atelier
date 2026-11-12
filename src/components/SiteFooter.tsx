"use client";

import { useLayoutEffect, useRef } from "react";
import { footer, services, studio } from "@/content/site";
import Container from "./Container";

const linkClass =
  "text-sm text-footer-muted transition duration-300 hover:text-cream focus-visible:outline-cream";

function ColumnTitle({ children }: { children: string }) {
  return (
    <h2 className="text-[11px] tracking-[0.18em] text-copper uppercase">{children}</h2>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17" cy="7" r="0.8" fill="currentColor" />
      </svg>
    );
  }

  if (label === "Pinterest") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10.5 18.5 C11 15 10 13.5 10 13.5 C10 13.5 9.2 12.2 10.2 10.8 C11.2 9.4 13.2 9.6 13.6 11.2 C14 12.8 13.2 14.2 13.2 14.2 L12.2 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 11 V17 M8 8.5 V8.6 M12 17 V13.2 C12 11.8 13.2 11 14.4 11 C15.6 11 16.5 11.8 16.5 13.2 V17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const footerEl = footerRef.current;
    const spacer = spacerRef.current;
    const inner = innerRef.current;
    if (!footerEl || !spacer || !inner) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const layout = () => {
      const height = footerEl.offsetHeight;
      const fits = height > 0 && height < window.innerHeight - 32;
      footerEl.classList.toggle("is-pinned", fits);
      spacer.style.height = fits ? `${height}px` : "0px";
    };

    const onScroll = () => {
      if (reduced || !footerEl.classList.contains("is-pinned")) {
        inner.style.transform = "";
        return;
      }
      const height = footerEl.offsetHeight;
      const remaining = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      const progress = height === 0 ? 1 : Math.min(1, Math.max(0, (height - remaining) / height));
      inner.style.transform = `translate3d(0, ${(1 - progress) * 36}px, 0)`;
    };

    layout();
    onScroll();

    const observer = new ResizeObserver(() => {
      layout();
      onScroll();
    });
    observer.observe(footerEl);
    window.addEventListener("resize", layout);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", layout);
      window.removeEventListener("scroll", onScroll);
      footerEl.classList.remove("is-pinned");
      spacer.style.height = "0px";
      inner.style.transform = "";
    };
  }, []);

  return (
    <>
      <div ref={spacerRef} aria-hidden="true" />
      <footer ref={footerRef} className="footer-reveal bg-footer text-footer-muted">
        <div ref={innerRef}>
          <Container className="py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <a
              href="#top"
              className="font-display text-4xl tracking-[-0.03em] text-cream transition duration-300 hover:text-copper"
            >
              {studio.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{footer.intro}</p>
          </div>

          <nav className="lg:col-span-2" aria-label="Footer">
            <ColumnTitle>Studio</ColumnTitle>
            <ul className="mt-5 space-y-3">
              {footer.links.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Services">
            <ColumnTitle>Services</ColumnTitle>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a href="#services" className={linkClass}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-3">
            <ColumnTitle>Contact</ColumnTitle>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`mailto:${studio.email}`} className={linkClass}>
                  {studio.email}
                </a>
              </li>
              <li className="leading-relaxed">{studio.address}</li>
            </ul>
            <ul className="mt-6 flex gap-3">
              {footer.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream transition duration-300 hover:-translate-y-0.5 hover:border-copper hover:bg-copper hover:text-stone-page focus-visible:outline-cream"
                  >
                    <SocialIcon label={item.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {studio.year} {studio.legal}
          </p>
          <p>{studio.note}</p>
        </div>
          </Container>
        </div>
      </footer>
    </>
  );
}
