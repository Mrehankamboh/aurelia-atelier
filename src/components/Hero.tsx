import { hero, stats } from "@/content/site";
import Button from "./Button";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import HeroBackdrop from "./hero/HeroBackdrop";
import HeroVisual from "./hero/HeroVisual";
import TextRise from "./TextRise";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-16 md:pt-[72px]">
      <HeroBackdrop />
      <Container className="relative grid items-center gap-10 py-14 sm:py-20 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-16">
        <div>
          <Eyebrow>
            <TextRise text={hero.eyebrow} delay={160} />
          </Eyebrow>
          <h1 className="mt-5 max-w-xl font-display text-[3.15rem] leading-[0.96] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem]">
            <TextRise text={hero.titleLead} delay={280} />
            <TextRise text={hero.titleAccent} delay={460} className="mt-1 text-copper italic" />
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft md:text-lg">
            <TextRise text={hero.body} delay={620} />
          </p>
          <div className="load-in mt-8 flex flex-wrap gap-3 [animation-delay:780ms]">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <dl className="load-in mt-8 grid max-w-md grid-cols-3 gap-x-4 border-t border-stone-line pt-5 [animation-delay:900ms]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-[1.7rem] leading-none tracking-tight text-ink">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-[11px] tracking-[0.14em] text-ink-soft uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="load-in [animation-delay:360ms]">
          <HeroVisual
            kicker={hero.card.kicker}
            title={hero.card.title}
            detail={hero.card.detail}
          />
        </div>
      </Container>
    </section>
  );
}
