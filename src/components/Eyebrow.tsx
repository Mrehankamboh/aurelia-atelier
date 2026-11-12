import type { ReactNode } from "react";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.22em] text-copper">
      {children}
    </p>
  );
}
