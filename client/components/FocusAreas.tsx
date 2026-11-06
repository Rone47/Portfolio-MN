import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PILLARS } from "@/lib/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export default function FocusAreas() {
  return (
    <Section id="focus-areas">
      <SectionHeading
        eyebrow="What I do"
        title="Four connected technical pillars"
        subtitle="I aim to build, secure, deploy, monitor, and maintain complete systems."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {PILLARS.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 0.06}>
            <Link href={pillar.href} className="glass-card block h-full p-6 transition-shadow hover:shadow-glow">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <ArrowUpRight size={18} className="shrink-0 text-accent-cyan" />
              </div>
              <p className="mt-3 text-sm text-white/60">{pillar.description}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
