import { caseStudies, getCaseStudy } from "@/lib/case-study-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, TrendingDown, TrendingUp, Clock, Users, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  
  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: study.title,
    description: study.subtitle,
  };
}

const metricIcons = [TrendingDown, TrendingUp, Clock, Users];

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Work
        </Link>

        <header className="mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
            {study.category}
          </span>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-[var(--color-text)] mb-3">
            {study.title}
          </h1>
          
          <p className="text-xl text-[var(--color-text-muted)]">
            {study.subtitle}
          </p>
        </header>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {study.metrics.map((metric, i) => {
            const Icon = metricIcons[i] || TrendingUp;
            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)]"
              >
                <Icon size={20} className="text-[var(--color-accent)] mb-2" />
                <div className="text-2xl lg:text-3xl font-bold gradient-text">
                  {metric.value}
                </div>
                <div className="text-sm text-[var(--color-text-muted)]">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Challenge */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">The Challenge</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            {study.challenge}
          </p>
        </section>

        {/* Approach */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">Our Approach</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            {study.approach}
          </p>
        </section>

        {/* Result */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">The Result</h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            {study.result}
          </p>
        </section>

        {/* Testimonial */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 border border-[var(--color-border)] mb-12">
          <svg
            className="w-8 h-8 text-[var(--color-primary)] mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
          </svg>
          <blockquote className="text-lg text-[var(--color-text)] italic mb-4">
            &ldquo;{study.testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-gradient-from)] to-[var(--color-gradient-to)]" />
            <div>
              <div className="font-medium text-[var(--color-text)] text-sm">
                {study.testimonial.author}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">
                {study.testimonial.company}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-border)]">
          <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
            Have a similar challenge?
          </h3>
          <p className="text-[var(--color-text-muted)] mb-6">
            Let's discuss how AI can help your business.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </article>
    </div>
  );
}