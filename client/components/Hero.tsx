"use client";

import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const STACK = ["Software", "Cybersecurity", "Infrastructure", "DevOps"];

export default function Hero() {
  return (
    <section id="home" className="px-3 pb-8 pt-3 sm:px-6 sm:pb-12 sm:pt-5">
      <div
        className="hero-panel relative mx-auto flex min-h-[min(760px,calc(100svh-5rem))] max-w-6xl flex-col justify-between overflow-hidden rounded-[1.75rem] px-5 py-9 shadow-glow sm:min-h-[620px] sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-16 lg:py-14"
        aria-label="Introduction"
      >
        <div className="pointer-events-none absolute -right-32 -top-36 h-80 w-80 rounded-full border border-white/10 sm:h-[30rem] sm:w-[30rem]" aria-hidden />
        <div className="pointer-events-none absolute -bottom-56 right-10 h-96 w-96 rounded-full bg-white/[0.035] blur-3xl" aria-hidden />

        <div className="relative z-10 flex items-center gap-2 text-xs font-medium text-white/75 sm:text-sm">
          <Sparkles size={15} className="text-[#efb79f]" />
          Software · Security · Infrastructure
        </div>

        <div className="relative z-10 mt-16 max-w-4xl sm:mt-12">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#efb79f] sm:text-sm sm:tracking-[0.28em]">
            Byrone Aketch · Software Engineer
          </p>
          <h1 className="max-w-4xl text-[clamp(2.8rem,10vw,6.8rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-white">
            Building technology that works{" "}
            <span className="text-[#efb79f]">for people.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-8 sm:text-lg">
            I design and develop software, explore cybersecurity, and manage
            infrastructure to help build secure, dependable digital systems.
          </p>
        </div>

        <div className="relative z-10 mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/work" className="btn-primary justify-center">
              Explore my work <ArrowRight size={16} />
            </Link>
            <Link href="/#contact" className="btn-secondary justify-center">
              Let&apos;s connect
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-white/55 sm:justify-end sm:text-sm">
            {STACK.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
          <Link href="/#about" className="hidden items-center gap-2 text-sm text-white/70 hover:text-white sm:inline-flex">
            Discover more <ArrowDown size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
