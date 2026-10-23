import Image from "next/image";
import { ArrowRight } from "lucide-react";

import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import Counter from "@/components/ui/Counter";
import { hero, heroStats } from "@/data/home";
import { siteConfig } from "@/data/site";

function Dot() {
  return <span aria-hidden className="size-2 shrink-0 rounded-full bg-brand" />;
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <Image
        src={hero.image}
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-black/65 to-black/40"
      />

      <Container className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-end gap-6 pt-28 pb-14 md:pb-20">
        <Image
          src={siteConfig.logoMark}
          alt=""
          width={1024}
          height={496}
          className="h-auto w-25 drop-shadow-[0_0_16px_rgb(255_255_255/0.5)]"
        />

        <p className="flex items-center gap-2 font-mono text-[11px] tracking-[2px] text-white/80 uppercase">
          <Dot />
          {hero.subtitle}
        </p>

        <h1 className="max-w-[713px] text-[44px] leading-[1.1] font-extrabold sm:text-6xl lg:text-[65px] xl:text-7xl">
          {hero.title.before}
          <span className="text-brand">{hero.title.highlight}</span>
          {hero.title.after}
        </h1>

        <p className="max-w-[650px] text-base leading-normal font-light text-white/85 sm:text-lg xl:text-xl">
          {hero.description}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
          <ButtonLink href="#contact">
            Talk to an Expert
            <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink href="#solutions" variant="outline-light">
            Explore the Rain-to-Drain Journey
          </ButtonLink>
        </div>

        <p className="flex items-center gap-2 font-mono text-xs tracking-[1px] text-white/80 uppercase">
          <Dot />
          {hero.footnote}
        </p>

        <dl className="grid w-full max-w-[600px] grid-cols-3 gap-6 border-t border-white/20 pt-5">
          {heroStats.map((stat) => (
            // dt comes first for screen readers, flex-col-reverse puts the number on top
            <div key={stat.label} className="flex flex-col-reverse gap-2">
              <dt className="font-mono text-[10px] text-white/60 uppercase sm:text-xs">
                {stat.label}
              </dt>
              <dd className="font-display text-2xl font-semibold sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
