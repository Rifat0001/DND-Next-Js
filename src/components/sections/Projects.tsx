import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, projectsIntro } from "@/data/home";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_4px_20px_rgb(0_0_0/0.06)]">
      <div className="group relative h-[260px] overflow-hidden xl:h-[300px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
        />
        <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2 py-1 font-mono text-[11px] tracking-[2px] text-brand uppercase">
          <span aria-hidden className="size-1.5 rounded-full bg-brand" />
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col items-start gap-3 p-[30px]">
        <p className="font-mono text-[10px] font-medium tracking-[2px] text-ink/70 uppercase">
          {project.location} · {project.sector}
        </p>
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-sm leading-normal text-body">{project.summary}</p>

        <Link
          href={`/${project.slug}`}
          aria-label={`Read more about ${project.title}`}
          className="group/link mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-brand hover:underline"
        >
          Read more
          <ArrowRight
            className="size-4 transition-transform group-hover/link:translate-x-1"
            strokeWidth={1.5}
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-mist/60 py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          subtitle={projectsIntro.subtitle}
          title={projectsIntro.title}
          highlight={projectsIntro.highlight}
          highlightColor="muted"
          id="projects-title"
        >
          <p>{projectsIntro.description}</p>
        </SectionHeading>

        <ul className="grid gap-[30px] sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
