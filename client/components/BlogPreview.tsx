import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/api";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export default async function BlogPreview() {
  const posts = (await getBlogPosts()).slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <Section id="blog">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Writing" title="From the blog" />
        <Link
          href="/blog"
          className="mb-14 inline-flex items-center gap-1 text-sm text-muted hover:text-ink"
        >
          Read all posts <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post._id} delay={i * 0.08}>
            <Link href={`/blog/${post.slug}`} className="glass-card block h-full p-6 hover:shadow-glow">
              <p className="font-mono text-xs text-accent-red">
                {new Date(post.published_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-2 font-semibold text-ink">{post.title}</h3>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
