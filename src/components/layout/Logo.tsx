import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

type LogoProps = {
  showText?: boolean;
};

export default function Logo({ showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={siteConfig.logo}
        alt=""
        width={44}
        height={44}
        className="size-11 rounded-lg object-contain"
        loading="eager"
      />

      {showText && (
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="text-sm font-semibold">DND Construction Technicals FZE</span>
          <span className="text-[11px] font-medium tracking-[0.2em] text-brand uppercase">
            {siteConfig.tagline}
          </span>
        </span>
      )}
    </Link>
  );
}
