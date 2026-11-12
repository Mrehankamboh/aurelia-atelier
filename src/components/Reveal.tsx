"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function mostlyVisible(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  if (rect.height === 0) return false;
  const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  return visible / rect.height >= 0.16;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || mostlyVisible(el)) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal${shown ? " is-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
