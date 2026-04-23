import { blogPosts, getBlogPost } from "@/lib/blog-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-to-HTML conversion
  const contentHtml = post.content
    .split("\n")
    .map((line) => {
      if (line.startsWith("## ")) {
        return `<h2 class="text-2xl font-bold text-[var(--color-text)] mt-8 mb-4">${line.replace("## ", "")}</h2>`;
      }
      if (line.startsWith("### ")) {
        return `<h3 class="text-xl font-semibold text-[var(--color-text)] mt-6 mb-3">${line.replace("### ", "")}</h3>`;
      }
      if (line.startsWith("- [ ] ")) {
        return `<div class="flex items-start gap-2 my-2"><input type="checkbox" disabled class="mt-1.5" /><span class="text-[var(--color-text-muted)]">${line.replace("- [ ] ", "")}</span></div>`;
      }
      if (line.startsWith("- ")) {
        return `<li class="text-[var(--color-text-muted)] ml-4 my-1">${line.replace("- ", "")}</li>`;
      }
      if (line.match(/^\d+\. /)) {
        return `<li class="text-[var(--color-text-muted)] ml-4 my-1 list-decimal">${line.replace(/^\d+\. /, "")}</li>`;
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return `<p class="font-semibold text-[var(--color-text)] my-3">${line.replace(/\*\*/g, "")}</p>`;
      }
      if (line.trim() === "") {
        return "";
      }
      return `<p class="text-[var(--color-text-muted)] leading-relaxed my-3">${line}</p>`;
    })
    .join("");

  return (
    <div className="pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Insights
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="text-[var(--color-text-muted)] mb-4">
            Questions about this topic? Let's talk.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </article>
    </div>
  );
}