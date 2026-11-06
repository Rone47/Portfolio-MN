import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/api";
import { Section } from "@/components/ui/Section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  return { title: post ? `${post.title} — Byrone Aketch` : "Post not found" };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  return (
    <Section className="max-w-3xl pt-16">
      <p className="font-mono text-xs text-accent-red">
        {new Date(post.published_at).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{post.title}</h1>

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

      <div className="mt-10 whitespace-pre-line leading-relaxed text-ink/75">
        {post.content}
      </div>
    </Section>
  );
}
