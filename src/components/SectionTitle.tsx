import type { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-[-0.03em] text-ink md:text-5xl lg:text-[3.5rem]">
      {children}
    </h2>
  );
}
