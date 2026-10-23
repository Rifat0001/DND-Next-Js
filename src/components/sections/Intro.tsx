import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { intro } from "@/data/home";

export default function Intro() {
  return (
    <section aria-labelledby="intro-title" className="border-b border-line py-20">
      <Container className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div className="lg:max-w-[488px]">
          <SectionTitle
            subtitle={intro.subtitle}
            title={intro.title}
            highlight={intro.highlight}
            id="intro-title"
          />
        </div>

        <div className="space-y-4 leading-normal text-body">
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
