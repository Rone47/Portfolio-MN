import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Byrone Aketch — Software, Security & Infrastructure",
  description:
    "Portfolio of Byrone Aketch across software engineering, cybersecurity, infrastructure, systems administration, and DevOps.",
  metadataBase: new URL("https://byroneaketch.dev"),
  openGraph: {
    title: "Byrone Aketch — Software, Security & Infrastructure",
    description:
      "Portfolio of Byrone Aketch across software engineering, cybersecurity, infrastructure, systems administration, and DevOps.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative min-h-screen bg-ink-900 font-sans antialiased text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
