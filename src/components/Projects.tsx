import { projects } from "@/content/site";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import ProjectCard from "./projects/ProjectCard";
import Reveal from "./Reveal";

const frames = [
  "min-h-[420px] md:col-span-2 lg:col-span-7 lg:min-h-[540px]",
  "min-h-[320px] lg:col-span-5 lg:min-h-[380px]",
  "min-h-[320px] lg:col-span-5 lg:min-h-[420px]",
  "min-h-[380px] md:col-span-2 lg:col-span-7 lg:min-h-[480px]",
];

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-28 bg-[#0e0c0b] py-24 md:py-32 lg:py-36">
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-0.035em] text-cream sm:text-5xl lg:text-6xl">
            Our Selected Work
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-footer-muted">
            Four houses from the studio’s recent years. Each one was drawn through to the last sample on site.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80} className={frames[index]}>
              <ProjectCard
                id={project.id}
                title={project.title}
                category={project.category}
                place={project.place}
                className="min-h-[inherit]"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
