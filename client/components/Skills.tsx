import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TECHNOLOGY_GROUPS } from "@/lib/portfolio";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Technology areas"
        title="A toolkit across the stack"
        subtitle="Areas and tools from software development, security practice, infrastructure, and operations."
      />
      <p className="mb-6 max-w-3xl text-sm text-muted">
        This list is a portfolio map, not a proficiency ranking. Keep tools here only when you can demonstrate or explain them; hands-on lab work is presented separately from professional experience.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {TECHNOLOGY_GROUPS.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05}>
            <div className="glass-card p-6">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-muted">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-white px-3 py-1.5 text-sm text-ink/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
