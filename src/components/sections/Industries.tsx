import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries, industriesIntro } from "@/data/home";
import type { Industry } from "@/types";

function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;

  return (
    <li className="group flex flex-col gap-5 rounded-[10px] border border-brand/40 bg-white p-[30px] transition-shadow hover:shadow-lg">
      {industry.isCore && (
        <span className="self-end rounded-full bg-brand/10 px-2.5 py-0.5 font-mono text-[11px] tracking-[2px] text-brand uppercase">
          Core
        </span>
      )}

      <div className="mb-2.5 flex items-center justify-between">
        <Icon className="size-10 text-brand" strokeWidth={1.5} aria-hidden />
        <p className="text-[10px] font-medium tracking-[1px] text-ink/70 uppercase">
          {industry.sector}
        </p>
      </div>

      <div className="space-y-1">
        <h3 className="text-[26px] leading-tight font-bold sm:text-3xl">
          {industry.title}
        </h3>
        <p className="text-sm text-body">{industry.description}</p>
      </div>

      <Link
        href="#projects"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-brand transition-colors hover:text-ink"
      >
        View related case study
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </li>
  );
}

export default function Industries() {
  return (
    <section aria-labelledby="industries-title" className="bg-mist/60 py-20 md:py-28">
      <Container>
        <SectionHeading
          subtitle={industriesIntro.subtitle}
          title={industriesIntro.title}
          id="industries-title"
        >
          <p>{industriesIntro.description}</p>
        </SectionHeading>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.sector} industry={industry} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
