import FloatingCard from "./FloatingCard";

type Tone = "stone" | "dark" | "copper";

type Volume = {
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  tone: Tone;
};

const tones: Record<Tone, { top: string; left: string; right: string }> = {
  stone: { top: "#F7F1E8", left: "#D9C7B4", right: "#B7A48F" },
  dark: { top: "#3A342F", left: "#2A2623", right: "#1A1816" },
  copper: { top: "#C4896A", left: "#7C4630", right: "#5E3424" },
};

const volumes: Volume[] = [
  { x: 0, y: 0, z: 0, w: 210, d: 156, h: 12, tone: "stone" },
  { x: 18, y: 16, z: 12, w: 108, d: 86, h: 70, tone: "stone" },
  { x: 128, y: 20, z: 12, w: 62, d: 54, h: 40, tone: "stone" },
  { x: 136, y: 82, z: 12, w: 44, d: 48, h: 78, tone: "dark" },
  { x: 26, y: 108, z: 12, w: 92, d: 14, h: 42, tone: "copper" },
];

const COS = Math.cos(Math.PI / 6);
const SIN = 0.5;

function project(x: number, y: number, z: number) {
  return [(x - y) * COS + 230, (x + y) * SIN - z + 86];
}

function points(corners: [number, number, number][]) {
  return corners
    .map(([x, y, z]) => {
      const [px, py] = project(x, y, z);
      return `${px.toFixed(1)},${py.toFixed(1)}`;
    })
    .join(" ");
}

function Massing() {
  const ordered = [...volumes].sort((a, b) => a.x + a.y - (b.x + b.y));

  return (
    <svg
      viewBox="0 0 460 360"
      className="hero-model h-auto w-full"
      aria-hidden="true"
    >
      <ellipse cx="230" cy="268" rx="150" ry="28" fill="rgba(196,137,106,0.16)" />
      {ordered.map((volume) => {
        const { x, y, z, w, d, h, tone } = volume;
        const color = tones[tone];
        const top = points([
          [x, y, z + h],
          [x + w, y, z + h],
          [x + w, y + d, z + h],
          [x, y + d, z + h],
        ]);
        const south = points([
          [x, y + d, z],
          [x + w, y + d, z],
          [x + w, y + d, z + h],
          [x, y + d, z + h],
        ]);
        const east = points([
          [x + w, y, z],
          [x + w, y + d, z],
          [x + w, y + d, z + h],
          [x + w, y, z + h],
        ]);

        return (
          <g key={`${x}-${y}-${z}`}>
            <polygon points={south} fill={color.left} />
            <polygon points={east} fill={color.right} />
            <polygon points={top} fill={color.top} />
          </g>
        );
      })}
    </svg>
  );
}

export default function HeroVisual({
  kicker,
  title,
  detail,
}: {
  kicker: string;
  title: string;
  detail: string;
}) {
  return (
    <figure className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#161311] px-4 pt-5 pb-6 shadow-[0_30px_70px_rgba(28,25,23,0.16)] sm:px-6">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(196,137,106,0.28),transparent_58%)]"
          aria-hidden="true"
        />
        <div className="relative flex items-center justify-between px-2 text-[11px] tracking-[0.18em] text-white/45 uppercase">
          <span>Plate 04</span>
          <span>Lisbon</span>
        </div>
        <div className="relative">
          <Massing />
        </div>
      </div>
      <div className="rise absolute bottom-4 left-4 [animation-delay:520ms] sm:bottom-7 sm:left-7">
        <div className="hero-float">
          <FloatingCard kicker={kicker} title={title} detail={detail} />
        </div>
      </div>
    </figure>
  );
}
