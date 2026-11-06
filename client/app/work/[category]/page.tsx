import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioProjects from "@/components/PortfolioProjects";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getWorkCategory, WORK_CATEGORIES } from "@/lib/portfolio";

export function generateStaticParams() {
  return WORK_CATEGORIES.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getWorkCategory(slug);
  return {
    title: category ? `${category.title} — Byrone Aketch` : "Work — Byrone Aketch",
    description: category?.description,
  };
}

export default async function WorkCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getWorkCategory(slug);

  if (!category) notFound();

  return (
    <Section className="pt-10 sm:pt-16">
      <SectionHeading
        eyebrow={category.eyebrow}
        title={category.title}
        subtitle={category.description}
        as="h1"
      />
      <PortfolioProjects projects={category.projects} />
      {category.note && (
        <p className="mt-5 text-sm leading-relaxed text-muted">{category.note}</p>
      )}
    </Section>
  );
}
