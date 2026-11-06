"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { sendContactMessage } from "@/lib/api";
import { SOCIAL_LINKS } from "@/lib/portfolio";

type Status = "idle" | "sending" | "sent" | "error";

const CONTACT_LINKS = [
  {
    label: "WhatsApp",
    detail: "+254 719 174 450",
    href: "https://wa.me/254719174450?text=Hi%20Byrone%2C%20I%27d%20like%20to%20talk%20about%20a%20project.",
    icon: MessageCircle,
  },
  {
    label: "Email",
    detail: "ryanbyrone47@gmail.com",
    href: "mailto:ryanbyrone47@gmail.com",
    icon: Mail,
  },
];

export default function Contact({ as = "h2" }: { as?: "h1" | "h2" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const reduceMotion = useReducedMotion();
  const Heading = as;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    try {
      await sendContactMessage({
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        subject: String(form.get("subject") ?? ""),
        message: String(form.get("message") ?? ""),
      });
      setStatus("sent");
      formEl.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Couldn't send your message. Please try WhatsApp or email instead.");
    }
  }

  return (
    <Section id="contact">
      <div className="grid overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-glow md:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
          className="relative isolate overflow-hidden bg-[#401f21] px-5 py-9 text-white sm:px-8 sm:py-12 lg:px-11 lg:py-14"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full border border-white/10"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={reduceMotion ? undefined : { duration: 36, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-20 -z-10 h-64 w-64 rounded-full bg-[#9c4a3e]/35 blur-3xl"
            animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.55, 0.85, 0.55] }}
            transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <p className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#efb79f]">
            <Sparkles size={14} /> Contact
          </p>
          <Heading className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build something meaningful.
          </Heading>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
            Have an idea, a project, or an opportunity? Tell me what you&apos;re working on and let&apos;s find a good way forward.
          </p>

          <div className="mt-8 space-y-3">
            {CONTACT_LINKS.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.12 * index }}
                whileHover={reduceMotion ? undefined : { x: 4 }}
                className="group flex min-h-16 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3 transition-colors hover:border-white/25 hover:bg-white/10 sm:gap-4 sm:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0c2ae]/15 text-[#f0c2ae]">
                  <item.icon size={19} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-white/55">{item.label}</span>
                  <span className="block break-all text-sm font-medium text-white sm:text-base">{item.detail}</span>
                </span>
                <ArrowUpRight size={17} className="shrink-0 text-white/45 transition-colors group-hover:text-white" />
              </motion.a>
            ))}
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/55">
            <MapPin size={15} /> Nairobi, Kenya · Available remotely
          </p>
          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-white/50">
              Find me online
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center rounded-full border border-white/15 px-4 text-sm text-white/75 transition-colors hover:border-white/35 hover:bg-white/10 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.12, ease: "easeOut" }}
          className="p-5 sm:p-8 lg:p-11"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-red">Send a message</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">What can I help with?</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Share a few details and I&apos;ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink/80">Name</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="min-h-12 w-full rounded-xl border border-border bg-paper px-4 py-3 text-base text-ink outline-none transition-shadow placeholder:text-muted/70 focus:border-accent-red focus:ring-4 focus:ring-accent-red/10"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink/80">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-h-12 w-full rounded-xl border border-border bg-paper px-4 py-3 text-base text-ink outline-none transition-shadow placeholder:text-muted/70 focus:border-accent-red focus:ring-4 focus:ring-accent-red/10"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink/80">Subject</label>
              <input
                id="subject"
                name="subject"
                className="min-h-12 w-full rounded-xl border border-border bg-paper px-4 py-3 text-base text-ink outline-none transition-shadow placeholder:text-muted/70 focus:border-accent-red focus:ring-4 focus:ring-accent-red/10"
                placeholder="What would you like to discuss?"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/80">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="min-h-32 w-full resize-y rounded-xl border border-border bg-paper px-4 py-3 text-base text-ink outline-none transition-shadow placeholder:text-muted/70 focus:border-accent-red focus:ring-4 focus:ring-accent-red/10"
                placeholder="Tell me a little about it..."
              />
            </div>

            <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center sm:w-auto">
              {status === "sending" ? "Sending..." : "Send message"}
              <Send size={16} />
            </button>
            {status === "sent" && (
              <p role="status" className="text-sm font-medium text-emerald-700">Thanks for reaching out. Your message has been sent.</p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm font-medium text-red-700">{errorMsg}</p>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
