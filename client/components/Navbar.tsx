"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  BriefcaseBusiness,
  Home,
  Mail,
  Menu,
  UserRound,
  X,
} from "lucide-react";

const LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#about", label: "About", icon: UserRound },
  { href: "/work", label: "Work", icon: BriefcaseBusiness },
  { href: "/#experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        open
          ? "border-border bg-paper shadow-sm"
          : scrolled
            ? "border-border bg-paper/95 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-paper"
      }`}
    >
      <nav
        className="relative z-50 mx-auto flex max-w-6xl items-center justify-between gap-4 bg-paper px-4 py-3 sm:px-6 sm:py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="shrink-0 font-mono text-lg font-bold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent-red">BA</span>.dev
        </Link>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
          {LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-ink/70 transition-colors hover:text-accent-red"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="btn-primary hidden px-5 py-2.5 lg:inline-flex"
        >
          Let&apos;s talk
        </Link>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-red lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-x-0 bottom-0 top-[4.25rem] z-10 bg-ink/25 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-x-0 bottom-0 top-[4.25rem] z-20 overflow-y-auto overscroll-contain border-t border-border bg-paper px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 shadow-2xl lg:hidden sm:px-6"
              initial={reduceMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
            >
              <div className="mx-auto w-full max-w-lg">
                <div className="mb-5 flex items-end justify-between px-1">
                  <div>
                    <p className="section-heading mb-1">Navigation</p>
                    <p className="text-sm text-muted">Find your way around.</p>
                  </div>
                  <span className="pb-0.5 font-mono text-xs tracking-widest text-muted/70">
                    MENU / 05
                  </span>
                </div>

                <ul className="grid gap-2">
                  {LINKS.map((link, index) => {
                    const Icon = link.icon;
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : link.href === "/work"
                          ? pathname.startsWith("/work")
                          : link.href === "/contact" && pathname === "/contact";

                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={`group flex min-h-14 items-center gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-200 active:scale-[0.99] ${
                            isActive
                              ? "border-accent-red/20 bg-white shadow-sm"
                              : "border-transparent bg-white/55 hover:border-border hover:bg-white"
                          }`}
                        >
                          <span className="w-6 font-mono text-xs text-accent-red/70">
                            0{index + 1}
                          </span>
                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                              isActive
                                ? "bg-accent-red text-white"
                                : "bg-paper text-muted group-hover:bg-accent-red/10 group-hover:text-accent-red"
                            }`}
                          >
                            <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                          </span>
                          <span className="flex-1 text-[1.05rem] font-semibold tracking-tight text-ink">
                            {link.label}
                          </span>
                          {isActive && (
                            <span className="mr-1 h-1.5 w-1.5 rounded-full bg-accent-red" />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-4 min-h-14 w-full justify-between px-5"
                >
                  <span>Have a project in mind?</span>
                  <span className="flex items-center gap-2">
                    Let&apos;s talk <ArrowDownRight size={17} aria-hidden="true" />
                  </span>
                </Link>
                <p className="mt-5 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted/65">
                  Software · Security · Infrastructure
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
