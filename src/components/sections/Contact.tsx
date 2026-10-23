import { Mail, Phone } from "lucide-react";

import Container from "@/components/ui/Container";
import Subtitle from "@/components/ui/Subtitle";
import SectionBackground from "@/components/ui/SectionBackground";
import { contactIntro, team } from "@/data/home";
import { toTelLink } from "@/lib/utils";
import type { TeamMember } from "@/types";

function ContactLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-2.5 break-all text-body transition-colors hover:text-brand"
      >
        {icon}
        {children}
      </a>
    </li>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <li className="rounded-[10px] border border-[#d9dfe5] bg-white p-6 shadow-[0_4px_20px_rgb(0_0_0/0.04)] transition-colors hover:border-brand/40">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-brand/15 text-brand">
          <Phone className="size-5" strokeWidth={1.5} aria-hidden />
        </span>
        <div>
          <h3 className="text-lg leading-none font-bold">{member.name}</h3>
          <p className="mt-1.5 font-mono text-xs text-ink/70">{member.role}</p>
        </div>
      </div>

      <ul className="mt-5 space-y-1.5 text-[13px] xl:text-sm">
        {member.phones.map((phone) => (
          <ContactLink
            key={phone}
            href={toTelLink(phone)}
            icon={<Phone className="size-3.5 shrink-0 fill-current" aria-hidden />}
          >
            {phone}
          </ContactLink>
        ))}
        <ContactLink
          href={`mailto:${member.email}`}
          icon={<Mail className="size-3.5 shrink-0" aria-hidden />}
        >
          {member.email}
        </ContactLink>
      </ul>
    </li>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-white py-[100px]"
    >
      <SectionBackground variant="contact" />

      <Container className="flex flex-col items-center text-center">
        <Subtitle>{contactIntro.subtitle}</Subtitle>

        <h2
          id="contact-title"
          className="mt-5 text-4xl leading-[1.2] font-bold sm:text-5xl lg:text-[50px] xl:text-6xl"
        >
          {contactIntro.title}
          <span className="block text-body">{contactIntro.highlight}</span>
        </h2>

        <p className="mt-5 max-w-[600px] leading-normal text-body">
          {contactIntro.description}
        </p>

        <ul className="mt-10 grid w-full gap-5 text-left md:grid-cols-3 lg:w-[90%] xl:w-4/5">
          {team.map((member) => (
            <TeamCard key={member.email} member={member} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
