import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/BrandIcons";

export default function PortfolioProjects({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal key={project.title} delay={index * 0.07} className="h-full">
          <article className="group flex h-full flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-glow motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-ink sm:text-xl">{project.title}</h3>
              {(project.deployment || project.liveUrl) && (
                <span className="shrink-0 rounded-full border border-[#d6e5d7] bg-[#eff7ef] px-3 py-1 font-mono text-[0.65rem] text-[#356044] sm:text-xs">
                  {project.deployment ?? "Live"}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ink/75">
              {project.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-accent-red" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            {project.technologies && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-ink-900 px-3 py-1 font-mono text-[0.65rem] text-muted sm:text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            )}
            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent-red transition-colors hover:text-ink"
                  >
                    Visit live project <ExternalLink size={15} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-ink"
                  >
                    <GithubIcon size={15} /> GitHub profile
                  </a>
                )}
              </div>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
