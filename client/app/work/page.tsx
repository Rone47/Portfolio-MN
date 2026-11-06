import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import ServiceGrid from "@/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Work — Byrone Aketch",
  description: "Explore software, SOC, infrastructure, and DevOps projects by Byrone Aketch.",
};

export default function WorkPage() {
  return (
    <Section className="pt-10 sm:pt-16">
      <SectionHeading
        eyebrow="Work"
        title="Explore my work."
        subtitle="Choose an area to see the projects and experience relevant to it."
        as="h1"
      />
      <ServiceGrid />
    </Section>
  );
}
