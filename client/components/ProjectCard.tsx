import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";
import { GithubIcon } from "@/components/ui/BrandIcons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card group flex h-full flex-col overflow-hidden p-6 transition-shadow hover:shadow-glow">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <div className="flex items-center gap-3 text-white/40">
          {project.repo_url && (
            <a
              href={project.repo_url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} repository`}
              className="hover:text-white"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {project.project_url && (
            <a
              href={project.project_url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live site`}
              className="hover:text-white"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm text-white/60">{project.summary}</p>

      {project.skills.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill.id}
              className="rounded-full border border-border bg-white/5 px-3 py-1 font-mono text-xs text-white/60"
            >
              {skill.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
