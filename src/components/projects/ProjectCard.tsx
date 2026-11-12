import ProjectArt, { type ProjectId } from "./ProjectArt";

type ProjectCardProps = {
  id: ProjectId;
  title: string;
  category: string;
  place: string;
  className?: string;
};

export default function ProjectCard({ id, title, category, place, className = "" }: ProjectCardProps) {
  return (
    <a
      href="#contact"
      className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-[28px] bg-[#161311] focus-visible:ring-2 focus-visible:ring-ink ${className}`}
    >
      <div className="absolute inset-0 transition duration-700 ease-out group-hover:scale-105">
        <ProjectArt id={id} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d] via-[#120f0d]/25 to-transparent" />
      <div className="relative flex items-end justify-between gap-4 p-6 sm:p-7">
        <div>
          <p className="text-[11px] tracking-[0.18em] text-[#e7c3ad] uppercase">
            {category}
            <span className="text-white/40"> · {place}</span>
          </p>
          <h3 className="mt-2 font-display text-3xl tracking-[-0.03em] text-stone-page sm:text-4xl">{title}</h3>
        </div>
        <span className="mb-1 inline-flex shrink-0 items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-stone-page backdrop-blur-sm transition duration-300 group-hover:border-copper group-hover:bg-copper">
          View project
        </span>
      </div>
    </a>
  );
}
