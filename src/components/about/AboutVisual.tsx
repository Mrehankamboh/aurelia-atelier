export default function AboutVisual() {
  return (
    <figure className="group relative h-full min-h-[480px] overflow-hidden rounded-[28px] border border-stone-line bg-[#161311] shadow-[0_24px_60px_rgba(28,25,23,0.12)]">
      <svg
        viewBox="0 0 640 780"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Section drawing of a living room with a tall window toward the ridge."
      >
        <rect width="640" height="780" fill="#161311" />
        <rect x="56" y="64" width="528" height="652" fill="#221c18" />
        <path d="M250 168 L470 652 L150 652 Z" fill="#c4896a" fillOpacity="0.14" />
        <rect x="248" y="168" width="268" height="292" fill="#2c241e" stroke="#f3ebe3" strokeOpacity="0.45" />
        <path d="M248 392 C320 330 390 352 456 300 C500 268 516 292 516 392 V460 H248 Z" fill="#7c4630" fillOpacity="0.55" />
        <path d="M248 420 C310 390 380 410 516 348 V460 H248 Z" fill="#3a2a22" />
        <path d="M248 168 H516 M382 168 V460 M248 314 H516" stroke="#f3ebe3" strokeOpacity="0.35" />
        <rect x="92" y="120" width="36" height="532" fill="#1c1815" stroke="#f3ebe3" strokeOpacity="0.18" />
        <line x1="56" y1="148" x2="584" y2="148" stroke="#f3ebe3" strokeOpacity="0.22" />
        <line x1="56" y1="652" x2="584" y2="652" stroke="#c4896a" />
        <rect x="148" y="560" width="150" height="12" fill="#c4896a" />
        <path d="M164 572 V652 M282 572 V652" stroke="#f3ebe3" strokeOpacity="0.45" />
        <rect x="360" y="500" width="120" height="78" fill="none" stroke="#f3ebe3" strokeOpacity="0.4" />
        <path d="M360 500 H480 M360 526 H480" stroke="#f3ebe3" strokeOpacity="0.25" />
        <rect x="188" y="676" width="300" height="8" fill="#7c4630" fillOpacity="0.7" />
        <circle cx="430" cy="120" r="3" fill="#c4896a" />
        <path d="M430 123 V168" stroke="#c4896a" strokeOpacity="0.7" />
      </svg>
      <figcaption className="absolute bottom-5 left-5 max-w-[220px] rounded-2xl border border-white/10 bg-stone-page/90 px-4 py-3 shadow-lg backdrop-blur-md transition duration-500 group-hover:-translate-y-1">
        <p className="text-[10px] tracking-[0.18em] text-copper uppercase">Current study</p>
        <p className="mt-1 font-display text-lg tracking-[-0.03em] text-ink">House on the ridge</p>
        <p className="text-sm text-ink-soft">Lisbon · Study 04</p>
      </figcaption>
    </figure>
  );
}
