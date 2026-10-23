import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { pillars, whyDnd } from "@/data/home";
import { padNumber } from "@/lib/utils";

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          subtitle={whyDnd.subtitle}
          title={whyDnd.title}
          highlight={whyDnd.highlight}
          id="why-title"
        >
          {whyDnd.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </SectionHeading>

        <ol className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className="flex min-h-64 flex-col justify-between bg-white p-8 transition-colors hover:bg-surface sm:p-10"
            >
              <span className="font-mono text-sm text-body">
                / {padNumber(index + 1)}
              </span>
              <div>
                <h3 className="text-2xl font-semibold">
                  {pillar.title}
                  <span className="text-brand">.</span>
                </h3>
                <p className="mt-3 leading-relaxed text-body">{pillar.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
