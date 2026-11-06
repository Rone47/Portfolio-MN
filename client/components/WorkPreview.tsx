import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import PortfolioProjects from "@/components/PortfolioProjects";
import ServiceGrid from "@/components/ServiceGrid";
import { SOFTWARE_PROJECTS } from "@/lib/portfolio";

export default function WorkPreview() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Work"
        title="A mix of services and real-world projects."
        subtitle="Software, cybersecurity, infrastructure, and DevOps—in one place."
      />
      <ServiceGrid />

      <div className="mt-16 sm:mt-20">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-heading mb-2">Selected projects</p>
            <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              A few things I&apos;ve worked on
            </h3>
          </div>
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent-red hover:text-ink"
          >
            Explore all work <ArrowRight size={16} />
          </Link>
        </div>
        <PortfolioProjects projects={SOFTWARE_PROJECTS} />
      </div>
    </Section>
  );
}
