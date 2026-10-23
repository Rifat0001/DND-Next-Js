import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/ui/Container";
import { footerNav, siteConfig } from "@/data/site";
import { toTelLink } from "@/lib/utils";
import type { NavLink } from "@/types";

import Logo from "./Logo";

// fill = orange shape, stroke (text colour) = white inner lines
const iconClass = "size-4 shrink-0 fill-brand text-white";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-[13px] font-semibold tracking-wide text-ink/70 uppercase">
      {children}
    </h3>
  );
}

function FooterLinks({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-brand">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="border-t border-line bg-surface text-[15px]">
      <Container className="grid gap-12 pt-14 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-[280px]">
          <Logo showText={false} />
          <p className="mt-5 font-display text-base font-bold">{siteConfig.name}</p>
          <p className="mt-2 leading-normal text-body">
            Specialist rain-to-drain infrastructure solutions. Engineering, supply and
            project delivery support.
          </p>
        </div>

        <FooterLinks title="Solutions" links={footerNav.solutions} />
        <FooterLinks title="Company" links={footerNav.company} />

        <div>
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-4 space-y-2">
            {contact.phones.map((phone) => (
              <li key={phone.number}>
                <a
                  href={toTelLink(phone.number)}
                  className="flex items-center gap-2.5 transition-colors hover:text-brand"
                >
                  <Phone className="size-4 shrink-0 fill-brand text-brand" aria-hidden />
                  {phone.number} ({phone.label})
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 break-all transition-colors hover:text-brand"
              >
                <Mail className={iconClass} aria-hidden />
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className={iconClass} aria-hidden />
              <address className="not-italic">{contact.address}</address>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className={iconClass} aria-hidden />
              {contact.hours}
            </li>
          </ul>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-2 border-t border-line py-5 font-mono text-xs text-body sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>35+ Years · Trusted Infrastructure</p>
        </div>
      </Container>
    </footer>
  );
}
