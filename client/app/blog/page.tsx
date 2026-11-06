import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/api";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Blog — Byrone Aketch" };

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <Section className="pt-16">
      <SectionHeading eyebrow="Writing" title="Blog" as="h1" />

      {posts.length === 0 ? (
        <p className="text-muted">
          Technical write-ups will appear here as they are ready to publish.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post._id} delay={(i % 6) * 0.06}>
              <Link href={`/blog/${post.slug}`}               className="glass-card block h-full p-6 hover:shadow-glow">
                <p className="font-mono text-xs text-accent-red">
                  {new Date(post.published_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                {post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-white px-3 py-1 font-mono text-xs text-muted"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
