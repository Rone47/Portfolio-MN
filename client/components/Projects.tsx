import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import PortfolioProjects from "@/components/PortfolioProjects";
import { SOFTWARE_PROJECTS } from "@/lib/portfolio";

export default function Projects() {
  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="A few things I've built recently."
        />
        <Link
          href="/projects"
          className="mb-14 inline-flex items-center gap-1 text-sm text-white/60 hover:text-white"
        >
          View all <ArrowRight size={14} />
        </Link>
      </div>

      <Reveal>
        <PortfolioProjects projects={SOFTWARE_PROJECTS} />
      </Reveal>
    </Section>
  );
}
