import ServiceArt, { type ServiceIconName } from "./ServiceArt";

export type ServiceVariant = "feature" | "stack" | "mark" | "signal";

type ServiceCardProps = {
  title: string;
  summary: string;
  icon: ServiceIconName;
  variant: ServiceVariant;
  tall?: boolean;
};

function Glow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -top-16 left-1/2 h-40 w-56 -translate-x-1/2 rounded-full bg-copper/25 blur-3xl transition duration-500 group-hover:bg-copper/40"
    />
  );
}

function LearnMore() {
  return (
    <span className="mt-5 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-[13px] text-stone-page transition duration-300 group-hover:border-copper group-hover:bg-copper">
      Learn more
    </span>
  );
}

export default function ServiceCard({ title, summary, icon, variant, tall = false }: ServiceCardProps) {
  const shell =
    "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#161311] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-1 hover:border-copper/50 hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)] focus-visible:ring-2 focus-visible:ring-stone-page/80";

  if (variant === "mark") {
    return (
      <a href="#contact" className={`${shell} min-h-[220px]`}>
        <Glow />
        <div className="relative min-h-44 flex-1">
          <ServiceArt name={icon} />
        </div>
        <span className="relative px-6 pb-6">
          <h3 className="font-display text-2xl tracking-[-0.03em] text-stone-page">{title}</h3>
        </span>
      </a>
    );
  }

  if (variant === "signal") {
    return (
      <a href="#contact" className={`${shell} min-h-[230px] p-6 sm:p-7`}>
        <Glow />
        <h3 className="relative font-display text-2xl tracking-[-0.03em] text-stone-page">{title}</h3>
        <p className="relative mt-2 max-w-xs text-sm leading-relaxed text-footer-muted">{summary}</p>
        <div className="relative mt-auto pt-4">
          <ServiceArt name={icon} />
        </div>
      </a>
    );
  }

  if (variant === "stack") {
    return (
      <a href="#contact" className={`${shell} min-h-[420px] p-6 sm:p-7`}>
        <Glow />
        <h3 className="relative font-display text-[1.7rem] tracking-[-0.03em] text-stone-page">{title}</h3>
        <p className="relative mt-2 max-w-xs text-sm leading-relaxed text-footer-muted">{summary}</p>
        <LearnMore />
        <div className="relative mt-auto pt-8">
          <ServiceArt name={icon} />
        </div>
      </a>
    );
  }

  return (
    <a href="#contact" className={`${shell} min-h-[340px]`}>
      <Glow />
      <div className={`relative ${tall ? "min-h-56 flex-1" : "h-48 sm:h-52"}`}>
        <ServiceArt name={icon} />
      </div>
      <div className="relative flex flex-1 flex-col px-6 pt-2 pb-6 sm:px-7 sm:pb-7">
        <h3 className="font-display text-[1.7rem] leading-tight tracking-[-0.03em] text-stone-page">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-footer-muted">{summary}</p>
        <LearnMore />
      </div>
    </a>
  );
}
