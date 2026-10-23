import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { partners, partnersIntro } from "@/data/partners";
import type { Partner } from "@/types";

/** "https://www.ejco.com/" -> "www.ejco.com" */
const displayUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <li className="flex flex-col items-start gap-3 bg-white p-[30px] transition-colors hover:bg-surface last:odd:sm:col-span-2">
      <p className="flex w-full items-center justify-between text-[10px] text-brand uppercase">
        {partner.stage}
        <ArrowUpRight className="size-4" aria-hidden />
      </p>

      <h3 className="text-[28px] leading-[1.2] font-bold xl:text-3xl">{partner.name}</h3>
      <p className="text-sm text-body">{partner.category}</p>

      <a
        href={partner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b border-transparent text-xs font-medium text-brand transition-colors hover:border-brand"
      >
        {displayUrl(partner.website)}
      </a>

      <Link
        href={`/partners/${partner.slug}`}
        aria-label={`Read more about ${partner.name}`}
        className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-brand transition-colors hover:text-ink"
      >
        Read More
        <ArrowRight className="size-3.5" aria-hidden />
      </Link>
    </li>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="py-20 md:py-[100px]"
    >
      <Container className="flex flex-col gap-12 lg:flex-row lg:gap-[50px]">
        <div className="lg:w-[35%]">
          <SectionTitle
            subtitle={partnersIntro.subtitle}
            title={partnersIntro.title}
            id="partners-title"
          />
          <p className="mt-6 leading-normal text-body">{partnersIntro.description}</p>
        </div>

        {/* gap-px + grey bg = 1px divider lines between cards */}
        <ul className="grid gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 lg:w-[65%]">
          {partners.map((partner) => (
            <PartnerCard key={partner.slug} partner={partner} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
