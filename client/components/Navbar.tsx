"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-border bg-paper/95 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-paper"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4"
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

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-paper px-4 pb-5 pt-2 shadow-lg sm:px-6 lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-accent-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Let&apos;s talk
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
