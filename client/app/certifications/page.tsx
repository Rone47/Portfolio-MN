import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SOCIAL_LINKS } from "@/lib/portfolio";

export const metadata: Metadata = { title: "Certifications — Byrone Aketch" };

export default function CertificationsPage() {
  return (
    <Section className="pt-16">
      <SectionHeading
        eyebrow="Certifications & learning"
        title="Credentials and practical learning"
        subtitle="Credentials will be listed with their issuer, date, and verification link. No certification details have been supplied yet."
        as="h1"
      />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="glass-card p-6">
          <h2 className="font-semibold text-ink">Certifications</h2>
          <p className="mt-3 text-sm text-muted">
            No credentials are published here yet. Add verified certification details when available; practical projects and labs are listed separately.
          </p>
        </div>
        <div className="glass-card p-6">
          <h2 className="font-semibold text-ink">Practice platforms</h2>
          <p className="mt-3 text-sm text-muted">
            Lab profiles and write-ups can be linked here once the personal profile URLs are known.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            {SOCIAL_LINKS.map((social) => (
              <Link key={social.label} href={social.href} target="_blank" rel="noreferrer" className="text-accent-red hover:text-ink">
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
