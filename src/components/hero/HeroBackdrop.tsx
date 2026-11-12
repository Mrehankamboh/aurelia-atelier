export default function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="hero-orb-a absolute -top-28 -right-16 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(124,70,48,0.2),transparent_68%)]" />
      <div className="hero-orb-b absolute -bottom-24 -left-24 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(28,25,23,0.08),transparent_70%)]" />
      <div className="hero-grid absolute inset-[-20%] bg-[linear-gradient(to_right,rgba(28,25,23,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(28,25,23,0.05)_1px,transparent_1px)] bg-size-[72px_72px] [mask-image:radial-gradient(circle_at_70%_42%,black,transparent_70%)]" />
      <div className="hero-ring absolute top-[18%] right-[6%] hidden h-72 w-72 rounded-full border border-copper/25 lg:block" />
    </div>
  );
}
