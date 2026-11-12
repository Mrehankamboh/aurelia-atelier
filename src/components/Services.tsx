import { services } from "@/content/site";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import ServiceCard, { type ServiceVariant } from "./services/ServiceCard";

const presentation: { variant: ServiceVariant; tall?: boolean; layout: string }[] = [
  { variant: "feature", layout: "lg:col-span-7 lg:col-start-1 lg:row-start-1" },
  { variant: "feature", layout: "lg:col-span-5 lg:col-start-8 lg:row-start-1" },
  {
    variant: "stack",
    layout: "lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:row-span-2",
  },
  { variant: "mark", layout: "lg:col-span-4 lg:col-start-5 lg:row-start-2" },
  { variant: "signal", layout: "lg:col-span-4 lg:col-start-5 lg:row-start-3" },
  {
    variant: "feature",
    tall: true,
    layout: "lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:row-span-2",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-[#0e0c0b] py-20 md:py-28 lg:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-3 font-display text-4xl leading-[1.02] tracking-[-0.035em] text-stone-page sm:text-5xl lg:text-6xl">
                The work of a house, kept in one studio.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-footer-muted md:pb-1">
              Six practices, one set of drawings. From the first measured line to the last object placed in the room.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12 md:mt-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-copper/15 blur-3xl"
          />
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
            {services.map((service, index) => {
              const card = presentation[index];
              return (
                <Reveal key={service.title} delay={index * 70} className={`h-full ${card.layout}`}>
                  <ServiceCard
                    title={service.title}
                    summary={service.summary}
                    icon={service.icon}
                    variant={card.variant}
                    tall={card.tall}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
