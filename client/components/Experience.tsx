import { getEducation, getExperience } from "@/lib/api";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

type TimelineEntry = {
  id: string | number;
  period: string;
  title: string;
  organization: string;
  location?: string | null;
  description: string;
};

function formatRange(start: string, end: string | null) {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return `${fmt(start)} — ${end ? fmt(end) : "Present"}`;
}

const CV_EXPERIENCE: TimelineEntry[] = [
  {
    id: "education-coordinator",
    period: "Oct 2025 — Present",
    title: "Education Coordinator",
    organization: "Vapor Ministries · Gichagi Center",
    location: "Ngong, Kenya",
    description:
      "Coordinate education programmes, budgets, school and vendor relationships, and student records.",
  },
  {
    id: "category-leader",
    period: "Sep 2021 — Present",
    title: "Category Leader · U8, U10, U14 & U16",
    organization: "Vapor Ministries · Gichagi Center",
    location: "Ngong, Kenya",
    description:
      "Lead youth mentorship and sports activities, coordinating participants, coaches, safety, and equipment.",
  },
  {
    id: "security-crew-member",
    period: "Aug 2021 — Sep 2025",
    title: "Security Crew Member",
    organization: "Vapor Ministries · Gichagi Center",
    location: "Ngong, Kenya",
    description:
      "Supported site security through access control, patrols, incident logging, and emergency readiness.",
  },
];

const CV_EDUCATION: TimelineEntry[] = [
  {
    id: "bachelor-bbit",
    period: "Ongoing",
    title: "Bachelor of Business Information Technology",
    organization: "The Management University of Africa",
    location: "Nairobi, Kenya",
    description: "",
  },
  {
    id: "diploma-bbit",
    period: "Completed Dec 2024",
    title: "Diploma in Business Information Technology",
    organization: "The Management University of Africa",
    location: "Nairobi, Kenya",
    description: "",
  },
  {
    id: "cybersecurity-certificate",
    period: "Completed Apr 2025",
    title: "Cybersecurity Analyst / SOC Analyst Certificate",
    organization: "CyberShujaa",
    location: "Nairobi, Kenya",
    description: "",
  },
  {
    id: "full-stack-bootcamp",
    period: "Completed Jun 2023",
    title: "Full Stack Software Engineering Bootcamp",
    organization: "Moringa School",
    location: "Nairobi, Kenya",
    description: "",
  },
];

export default async function Experience() {
  const [experienceData, educationData] = await Promise.all([getExperience(), getEducation()]);
  const experience: TimelineEntry[] = experienceData
    .filter((item) => item.company !== "Your Company / Freelance")
    .map((item) => ({
      id: item.id,
      period: formatRange(item.start_date, item.end_date),
      title: item.role,
      organization: item.company,
      location: item.location,
      description: item.description,
    }));
  const education: TimelineEntry[] = educationData
    .filter((item) => item.school !== "Your School")
    .map((item) => ({
      id: item.id,
      period: formatRange(item.start_date, item.end_date),
      title: [item.degree, item.field].filter(Boolean).join(", "),
      organization: item.school,
      description: item.description,
    }));
  const displayedExperience = experience.length ? experience : CV_EXPERIENCE;
  const displayedEducation = education.length ? education : CV_EDUCATION;

  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I've worked & studied" />

      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-muted">
            Experience
          </h3>
          <div className="relative space-y-8 border-l border-border pl-8">
            {displayedExperience.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08} className="relative">
                <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-accent-red shadow-glow" />
                <p className="font-mono text-xs text-accent-red">
                  {item.period}
                </p>
                <h4 className="mt-1 font-semibold text-ink">{item.title}</h4>
                <p className="text-sm text-muted">
                  {item.organization}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-muted">
            Education
          </h3>
          <div className="relative space-y-8 border-l border-border pl-8">
            {displayedEducation.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08} className="relative">
                <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-accent-red shadow-glow" />
                <p className="font-mono text-xs text-accent-red">
                  {item.period}
                </p>
                <h4 className="mt-1 font-semibold text-ink">{item.title}</h4>
                <p className="text-sm text-muted">
                  {item.organization}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
                {item.description && <p className="mt-2 text-sm text-muted">{item.description}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
