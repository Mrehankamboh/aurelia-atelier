import { hero, stats } from "@/content/site";
import Button from "./Button";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import HeroBackdrop from "./hero/HeroBackdrop";
import HeroVisual from "./hero/HeroVisual";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-16 md:pt-[72px]"
    >
      <HeroBackdrop />
      <Container className="relative grid items-center gap-10 py-14 sm:py-20 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-16">
        <div>
          <div className="rise">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </div>
          <h1 className="rise mt-5 max-w-xl font-display text-[3.15rem] leading-[0.96] tracking-[-0.04em] text-ink [animation-delay:80ms] sm:text-6xl lg:text-[4.75rem] xl:text-[5.25rem]">
            <span className="block">{hero.titleLead}</span>
            <span className="mt-1 block text-copper italic">{hero.titleAccent}</span>
          </h1>
          <p className="rise mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft [animation-delay:160ms] md:text-lg">
            {hero.body}
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3 [animation-delay:240ms]">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <dl className="rise mt-8 grid max-w-md grid-cols-3 gap-x-4 border-t border-stone-line pt-5 [animation-delay:320ms]">
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
        <div className="rise [animation-delay:180ms]">
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
