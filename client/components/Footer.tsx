import Link from "next/link";
import { ArrowUp, ExternalLink, Mail, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#f0e9df]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-7 text-center text-sm text-muted sm:px-6 md:flex-row md:justify-between md:text-left">
        <p>
          © {new Date().getFullYear()} <span className="font-medium text-ink">Byrone Aketch</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <Link href="https://wa.me/254719174450" className="inline-flex min-h-11 items-center gap-2 hover:text-accent-red">
            <MessageCircle size={16} /> WhatsApp
          </Link>
          <Link href="mailto:ryanbyrone47@gmail.com" className="inline-flex min-h-11 items-center gap-2 hover:text-accent-red">
            <Mail size={16} /> Get in touch
          </Link>
          <Link href="/#home" className="inline-flex min-h-11 items-center gap-2 hover:text-accent-red">
            Back to top <ArrowUp size={16} />
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 hover:text-accent-red"
            >
              {social.label} <ExternalLink size={13} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
