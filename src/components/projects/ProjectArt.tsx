export type ProjectId = "ridge" | "court" | "annex" | "garden";

function RidgeArt() {
  return (
    <svg viewBox="0 0 800 640" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="800" height="640" fill="#241c18" />
      <path d="M0 280 C140 200 260 240 400 170 C540 100 660 140 800 90 V640 H0 Z" fill="#3a2a22" />
      <path d="M0 360 C180 280 340 320 520 250 C660 200 740 230 800 200 V640 H0 Z" fill="#2a211c" />
      <path d="M70 470 V250 H390 V470" fill="#1c1815" stroke="#f3ebe3" strokeOpacity="0.6" />
      <path d="M48 250 H412" stroke="#c4896a" strokeWidth="4" />
      <rect x="110" y="300" width="64" height="48" fill="#c4896a" fillOpacity="0.4" stroke="#e7c3ad" />
      <rect x="200" y="300" width="64" height="48" fill="#c4896a" fillOpacity="0.2" stroke="#e7c3ad" />
      <rect x="292" y="300" width="42" height="170" fill="none" stroke="#f3ebe3" strokeOpacity="0.75" />
      <path d="M420 470 V210 H600 V320 H720 V470" fill="#14110f" stroke="#f3ebe3" strokeOpacity="0.5" />
      <path d="M408 210 H612" stroke="#c4896a" strokeWidth="3" />
      <rect x="470" y="260" width="90" height="40" fill="#7c4630" fillOpacity="0.5" stroke="#e7c3ad" />
    </svg>
  );
}

function CourtArt() {
  return (
    <svg viewBox="0 0 800 640" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="800" height="640" fill="#161311" />
      <rect x="90" y="70" width="620" height="500" fill="#221c18" stroke="#f3ebe3" strokeOpacity="0.2" />
      <rect x="180" y="150" width="440" height="340" fill="#1a1613" stroke="#c4896a" strokeOpacity="0.7" />
      {[210, 280, 350, 420, 490].map((x) => (
        <path key={x} d={`M${x} 150 V210`} stroke="#f3ebe3" strokeOpacity="0.45" />
      ))}
      <circle cx="400" cy="330" r="54" fill="#7c4630" fillOpacity="0.55" />
      <circle cx="400" cy="330" r="18" fill="#e7c3ad" fillOpacity="0.8" />
      <path d="M180 430 H620" stroke="#f3ebe3" strokeOpacity="0.25" />
      <rect x="250" y="250" width="70" height="90" fill="none" stroke="#f3ebe3" strokeOpacity="0.35" />
      <rect x="480" y="250" width="70" height="90" fill="none" stroke="#f3ebe3" strokeOpacity="0.35" />
    </svg>
  );
}

function AnnexArt() {
  return (
    <svg viewBox="0 0 800 640" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="800" height="640" fill="#14110f" />
      <rect x="70" y="180" width="300" height="320" fill="#2a241f" stroke="#f3ebe3" strokeOpacity="0.35" />
      <path d="M70 180 H370" stroke="#e7dfd4" strokeOpacity="0.4" />
      <rect x="120" y="240" width="48" height="70" fill="#1a1613" stroke="#f3ebe3" strokeOpacity="0.3" />
      <rect x="200" y="240" width="48" height="70" fill="#1a1613" stroke="#f3ebe3" strokeOpacity="0.3" />
      <rect x="168" y="380" width="46" height="120" fill="none" stroke="#f3ebe3" strokeOpacity="0.4" />
      <rect x="390" y="250" width="300" height="250" fill="#3a2a22" stroke="#c4896a" />
      <rect x="470" y="310" width="140" height="90" fill="#c4896a" fillOpacity="0.28" stroke="#e7c3ad" />
      <path d="M370 180 V500" stroke="#c4896a" strokeWidth="4" />
    </svg>
  );
}

function GardenArt() {
  return (
    <svg viewBox="0 0 800 640" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="800" height="640" fill="#1c1815" />
      <path d="M0 520 H800" stroke="#c4896a" strokeOpacity="0.8" />
      <path d="M80 520 C80 360 200 300 260 300 C330 300 360 390 360 520" fill="#2a211c" stroke="#e7c3ad" strokeOpacity="0.45" />
      <path d="M300 520 C300 340 430 250 520 250 C620 250 680 380 680 520" fill="#3a2a22" stroke="#c4896a" strokeOpacity="0.55" />
      <rect x="150" y="360" width="220" height="160" fill="#241c18" stroke="#f3ebe3" strokeOpacity="0.4" />
      <path d="M130 360 H390" stroke="#c4896a" strokeWidth="3" />
      <rect x="190" y="400" width="140" height="70" fill="#7c4630" fillOpacity="0.3" stroke="#e7c3ad" />
      <circle cx="560" cy="430" r="36" fill="#7c4630" fillOpacity="0.65" />
      <circle cx="640" cy="470" r="22" fill="#c4896a" fillOpacity="0.45" />
    </svg>
  );
}

const art = {
  ridge: RidgeArt,
  court: CourtArt,
  annex: AnnexArt,
  garden: GardenArt,
};

export default function ProjectArt({ id }: { id: ProjectId }) {
  const Art = art[id];
  return <Art />;
}
