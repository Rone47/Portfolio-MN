import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Byrone Aketch",
  description: "Get in touch with Byrone Aketch about software, security, and infrastructure projects.",
};

export default function ContactPage() {
  return <Contact as="h1" />;
}
