import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export const metadata = {
  title: "Insights | GeddesGoing",
  description:
    "Practical insights on AI strategy, implementation, and training for Wisconsin businesses.",
};

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4">
            Insights
          </h1>
          <p className="text-lg text-[var(--color-text-muted)]">
            Practical thoughts on AI for Wisconsin businesses. No hype, just what works.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group flex flex-col h-full p-6 lg:p-8 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {post.category}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                {post.title}
              </h2>

              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                  <Clock size={14} />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-[var(--color-primary)]">
                  Read more <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 border border-[var(--color-border)]">
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-text)] mb-3">
              Stay in the loop
            </h2>
            <p className="text-[var(--color-text-muted)] mb-6">
              Get practical AI insights delivered to your inbox. No spam, just what Wisconsin business owners need to know.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}