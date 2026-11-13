import { studio } from "@/content/site";

export function LogoMark({ className = "h-10 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 90" className={className} aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d="M40 2 74 88H6Zm0 22L26 88h28Z" />
      <path fill="var(--copper)" d="M24 52h32l4 18H20Z" />
    </svg>
  );
}

export default function Logo({ size = "header" }: { size?: "header" | "footer" }) {
  const footer = size === "footer";

  return (
    <span className={`inline-flex items-center ${footer ? "gap-4" : "gap-2.5"}`}>
      <LogoMark className={footer ? "h-14 w-12 shrink-0" : "h-10 w-9 shrink-0"} />
      <span className="flex flex-col items-center leading-none">
        <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em]">
          <span
            className={`load-line inline-block ${
              footer
                ? "font-display text-4xl leading-none tracking-[-0.04em]"
                : "font-display text-[1.4rem] leading-none tracking-[-0.04em]"
            }`}
            style={{ animationDelay: "120ms" }}
          >
            {studio.name}
          </span>
        </span>
        <span className={`inline-block overflow-hidden ${footer ? "mt-2" : "mt-1.5"}`}>
          <span
            className={`load-line inline-block font-medium tracking-[0.32em] text-copper uppercase ${
              footer ? "text-[11px]" : "text-[8px]"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Atelier
          </span>
        </span>
      </span>
    </span>
  );
}
