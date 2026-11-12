type FloatingCardProps = {
  kicker: string;
  title: string;
  detail: string;
  className?: string;
};

export default function FloatingCard({
  kicker,
  title,
  detail,
  className = "",
}: FloatingCardProps) {
  return (
    <aside
      className={`w-[min(100%,230px)] rounded-2xl border border-stone-line bg-stone-page/90 p-4 shadow-[0_16px_40px_rgba(28,25,23,0.12)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-copper" aria-hidden="true" />
        <p className="text-[11px] font-medium tracking-[0.18em] text-copper uppercase">
          {kicker}
        </p>
      </div>
      <p className="mt-2 font-display text-xl tracking-[-0.02em] text-ink">
        {title}
      </p>
      <p className="mt-1 text-sm text-ink-soft">{detail}</p>
    </aside>
  );
}
