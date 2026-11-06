import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PILLARS } from "@/lib/portfolio";

export default function ServiceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {PILLARS.map((pillar, index) => (
        <Link
          key={pillar.id}
          href={pillar.href}
          className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow motion-reduce:transform-none motion-reduce:transition-none sm:p-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-xs text-accent-red">
              0{index + 1}
            </span>
            <ArrowUpRight size={18} className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-red" />
          </div>
          <h3 className="text-lg font-semibold text-ink sm:text-xl">{pillar.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
        </Link>
      ))}
    </div>
  );
}
