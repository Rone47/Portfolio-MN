import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <p className="section-heading mb-3">{eyebrow}</p>
      <Heading className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</Heading>
      {subtitle && <p className="mt-4 leading-relaxed text-muted">{subtitle}</p>}
    </div>
  );
}
