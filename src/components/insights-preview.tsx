"use client";

import Link from "next/link";
import { SectionHeading } from "./section-heading";
import { AnimateIn } from "./animate-in";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export function InsightsPreview() {
  // Show only the first 3 posts on the homepage
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section id="insights" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Insights"
          title="Practical AI thinking for real businesses"
          description="No hype, no jargon walls — just what Wisconsin business owners need to know about AI right now."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {previewPosts.map((post, i) => (
            <AnimateIn key={post.slug} delay={i * 0.1}>
              <Link href={`/insights/${post.slug}`}>
                <div className="h-full flex flex-col p-6 lg:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {post.title}
                  </h3>

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
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--color-border)] text-[var(--color-text)] font-semibold text-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              View All Insights
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
