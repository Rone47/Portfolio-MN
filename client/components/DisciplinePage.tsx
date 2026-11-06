import type { ReactNode } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import PortfolioProjects from "@/components/PortfolioProjects";
import type { PortfolioProject } from "@/lib/portfolio";

type DisciplineSection = {
  title: string;
  description: string;
  items: string[];
};

export default function DisciplinePage({
  eyebrow,
  title,
  subtitle,
  sections,
  projects,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections?: DisciplineSection[];
  projects?: PortfolioProject[];
  children?: ReactNode;
}) {
  return (
    <Section className="pt-16">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} as="h1" />
      {sections && (
        <div className="mb-16 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="glass-card p-6">
              <h2 className="font-semibold text-white">{section.title}</h2>
              <p className="mt-2 text-sm text-white/60">{section.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {section.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
      {children}
      {projects && <PortfolioProjects projects={projects} />}
    </Section>
  );
}
