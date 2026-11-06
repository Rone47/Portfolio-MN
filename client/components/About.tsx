import { existsSync } from "node:fs";
import { join } from "node:path";
import { Download } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TECHNOLOGY_GROUPS } from "@/lib/portfolio";

const CV_FILE_NAME = "Byrone-Aketch-CV.pdf";

export default function About() {
  const hasCv = existsSync(join(process.cwd(), "public", CV_FILE_NAME));

  return (
    <Section id="about">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <SectionHeading eyebrow="A little about me" title="Curious by nature. Practical by design." />
          <p className="text-sm leading-relaxed text-muted">
            Nairobi-based and open to remote opportunities.
          </p>
        </div>
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I&apos;m Byrone Aketch, a software engineer interested in how
              digital products are built and what it takes to keep them secure
              and dependable.
            </p>
            <p>
              I currently coordinate education programmes at Vapor Ministries,
              bringing experience in programme operations, digital records, and
              stakeholder coordination alongside my technical background.
            </p>
            <p>
              I hold a Diploma in Business Information Technology and am
              continuing toward a bachelor&apos;s degree. My additional training
              includes cybersecurity analysis and full-stack software
              engineering.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {TECHNOLOGY_GROUPS.slice(0, 4).flatMap((group) => group.items.slice(0, 3)).map((item) => (
                <span key={item} className="rounded-full border border-border bg-white/70 px-3 py-1.5 text-xs font-medium text-ink/75">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <div className="glass-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="section-heading mb-2">CV</p>
            <h3 className="text-xl font-semibold text-ink">A concise overview of my experience</h3>
            {!hasCv && (
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Add your PDF as <code>{CV_FILE_NAME}</code> in <code>client/public/</code> to enable downloads.
              </p>
            )}
          </div>
          {hasCv && (
            <a href={`/${CV_FILE_NAME}`} download className="btn-primary shrink-0 justify-center">
              Download CV <Download size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
