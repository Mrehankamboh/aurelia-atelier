import { principles, stats } from "@/content/site";
import AboutVisual from "./about/AboutVisual";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-stone-raised py-24 md:py-32 lg:py-36">
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:col-start-2 lg:row-start-1">
            <Eyebrow>The studio</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.02] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.5rem]">
              A small practice for houses that are meant to last.
            </h2>
          </Reveal>

          <Reveal delay={80} className="lg:col-start-2 lg:row-start-2">
            <div className="max-w-xl space-y-4 text-[17px] leading-relaxed text-ink-soft">
              <p>
                Aurelia Atelier is a private studio for architecture and interiors, based in Lisbon. We work with families here and across Europe, and we stay small enough that the people who draw the house also walk the site.
              </p>
              <p>
                The work is the whole house: the plan, the rooms, the materials, and the last objects placed in them. Few commissions, a short palette, and drawings that remain with the building until it is finished.
              </p>
            </div>
            <ul className="mt-8 max-w-xl border-t border-stone-line">
              {principles.map((principle) => (
                <li key={principle.title} className="border-b border-stone-line py-4">
                  <h3 className="font-display text-xl tracking-[-0.02em] text-ink">{principle.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{principle.summary}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="h-full lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <AboutVisual />
          </Reveal>
        </div>

        <Reveal delay={140}>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-line pt-8 lg:mt-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-5xl tracking-[-0.04em] text-ink sm:text-6xl">{stat.value}</dd>
                <dt className="mt-2 text-xs tracking-[0.16em] text-ink-soft uppercase">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
