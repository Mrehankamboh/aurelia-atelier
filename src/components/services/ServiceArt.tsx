export type ServiceIconName =
  | "house"
  | "interior"
  | "material"
  | "heritage"
  | "garden"
  | "furnishing";

function FrameDots() {
  return (
    <span className="flex items-center gap-1.5" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
    </span>
  );
}

function ElevationArt() {
  return (
    <div className="relative h-full min-h-44">
      <div className="absolute inset-x-5 top-4 bottom-3 overflow-hidden rounded-2xl border border-white/10 bg-[#1c1815] shadow-[0_24px_50px_rgba(0,0,0,0.35)] transition duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-3 border-b border-white/10 px-3.5 py-2">
          <FrameDots />
          <span className="mx-auto rounded-full bg-white/5 px-3 py-0.5 text-[10px] tracking-wide text-white/35">
            house.aurelia
          </span>
        </div>
        <svg viewBox="0 0 420 150" className="h-[calc(100%-34px)] w-full" aria-hidden="true">
          <line x1="28" y1="126" x2="392" y2="126" stroke="#e7dfd4" strokeOpacity="0.28" />
          <path d="M64 126 V72 H248 V126" fill="#7c4630" fillOpacity="0.08" stroke="#f3ebe3" strokeWidth="1.2" />
          <path d="M248 126 V96 H348 V126" fill="#7c4630" fillOpacity="0.12" stroke="#f3ebe3" strokeWidth="1.2" />
          <path d="M52 72 H260" stroke="#c4896a" strokeWidth="1.6" />
          <rect x="88" y="88" width="34" height="24" fill="#c4896a" fillOpacity="0.28" stroke="#e7c3ad" />
          <rect x="138" y="88" width="34" height="24" fill="#c4896a" fillOpacity="0.14" stroke="#e7c3ad" strokeOpacity="0.7" />
          <rect x="192" y="88" width="26" height="38" fill="none" stroke="#f3ebe3" strokeOpacity="0.75" />
          <rect x="272" y="104" width="48" height="16" fill="#c4896a" fillOpacity="0.22" stroke="#e7c3ad" />
          <path d="M118 126 V108 H142 V126" fill="none" stroke="#f3ebe3" strokeOpacity="0.45" />
        </svg>
      </div>
    </div>
  );
}

function BoardsArt() {
  return (
    <div className="relative h-full min-h-48">
      <div className="service-float absolute top-7 left-[10%] w-[38%] -rotate-12 rounded-2xl border border-white/10 bg-[#2a221c] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition duration-500 group-hover:-translate-y-1 group-hover:-rotate-6">
        <p className="text-[10px] tracking-[0.16em] text-white/40 uppercase">Plan</p>
        <svg viewBox="0 0 120 72" className="mt-2 w-full" aria-hidden="true">
          <rect x="4" y="4" width="112" height="64" rx="4" fill="none" stroke="#e7dfd4" strokeOpacity="0.35" />
          <path d="M4 28 H116 M48 4 V68 M80 28 V68" stroke="#c4896a" strokeOpacity="0.8" />
        </svg>
      </div>
      <div className="service-float-late absolute top-5 left-[36%] w-[40%] rotate-6 rounded-2xl border border-white/10 bg-[#1a1613] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.4)] transition duration-500 group-hover:-translate-y-2">
        <div className="flex items-center justify-between">
          <FrameDots />
          <span className="text-[10px] text-copper">Stair</span>
        </div>
        <svg viewBox="0 0 140 78" className="mt-2 w-full" aria-hidden="true">
          <path d="M12 66 H36 V52 H58 V38 H82 V24 H108 V12" fill="none" stroke="#f3ebe3" strokeWidth="1.4" />
          <path d="M12 66 V12" stroke="#c4896a" strokeOpacity="0.5" />
        </svg>
      </div>
      <div className="absolute top-10 right-[8%] w-[28%] rotate-3 rounded-2xl border border-copper/30 bg-[#3a2a22] px-3 py-4 text-center shadow-[0_16px_30px_rgba(124,70,48,0.25)] transition duration-500 group-hover:translate-x-1">
        <p className="font-display text-2xl text-stone-page">A4</p>
        <p className="mt-1 text-[10px] tracking-[0.14em] text-white/50 uppercase">Oak</p>
      </div>
    </div>
  );
}

function NestArt() {
  return (
    <div className="relative mx-auto h-52 w-full max-w-[240px]">
      {[0, 1, 2, 3, 4].map((step) => (
        <span
          key={step}
          aria-hidden="true"
          className="absolute rounded-[28px] border border-white/12 transition duration-500 group-hover:border-copper/40"
          style={{ inset: step * 18 }}
        />
      ))}
      <span
        aria-hidden="true"
        className="absolute inset-[78px] rounded-2xl bg-copper shadow-[0_0_36px_rgba(124,70,48,0.55)] transition duration-500 group-hover:scale-110"
      />
    </div>
  );
}

function MarkArt() {
  return (
    <div className="relative h-full min-h-44">
      <span className="absolute top-6 left-8 h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
      <span className="absolute top-12 right-10 h-1 w-1 rounded-full bg-copper/80" aria-hidden="true" />
      <span className="absolute bottom-8 left-14 h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-28 w-14 -translate-x-[78%] -translate-y-[58%] rotate-[28deg] rounded-full bg-gradient-to-b from-[#f0d2c0] to-[#7c4630] shadow-[0_0_42px_rgba(196,137,106,0.45)] transition duration-500 group-hover:-translate-x-[96%] group-hover:rotate-[22deg]"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-28 w-12 -translate-x-[8%] -translate-y-[42%] rotate-[28deg] rounded-full bg-gradient-to-b from-[#a56b52] to-[#2a1c16] transition duration-500 group-hover:translate-x-[8%]"
      />
    </div>
  );
}

function RadarArt() {
  return (
    <svg viewBox="0 0 280 120" className="h-28 w-full" aria-hidden="true">
      {[28, 48, 68, 88, 108].map((radius) => (
        <path
          key={radius}
          d={`M${140 - radius} 118 A ${radius} ${radius} 0 0 1 ${140 + radius} 118`}
          fill="none"
          stroke="#c4896a"
          strokeOpacity={radius === 68 ? 0.85 : 0.28}
        />
      ))}
      <circle cx="140" cy="118" r="3" fill="#e7c3ad" />
      <circle cx="92" cy="86" r="2.5" fill="#f3ebe3" />
      <circle cx="168" cy="62" r="2.5" fill="#c4896a" />
      <circle cx="206" cy="96" r="2" fill="#f3ebe3" fillOpacity="0.7" />
      <path d="M140 118 L168 62" stroke="#e7c3ad" strokeOpacity="0.7" />
    </svg>
  );
}

function SheetArt() {
  const lines = [
    ["room", "living, south light"],
    ["stone", "limestone, honed"],
    ["timber", "oak, fumed"],
    ["textile", "linen 04"],
    ["metal", "brass, unlacquered"],
  ];

  return (
    <div className="relative h-full min-h-48">
      <div className="absolute inset-x-4 top-4 bottom-2 overflow-hidden rounded-2xl border border-white/10 bg-[#120f0d] shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-3 border-b border-white/10 px-3.5 py-2.5">
          <FrameDots />
          <span className="text-[10px] tracking-wide text-white/35">schedule.01</span>
        </div>
        <div className="space-y-1.5 px-4 py-3 font-mono text-[11px] leading-relaxed">
          {lines.map(([key, value]) => (
            <p key={key}>
              <span className="text-[#c4896a]">{key}</span>{" "}
              <span className="text-white/75">{value}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const art = {
  house: ElevationArt,
  interior: BoardsArt,
  material: NestArt,
  heritage: MarkArt,
  garden: RadarArt,
  furnishing: SheetArt,
};

export default function ServiceArt({ name }: { name: ServiceIconName }) {
  const Art = art[name];
  return <Art />;
}
