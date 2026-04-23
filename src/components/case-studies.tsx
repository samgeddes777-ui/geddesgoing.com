"use client";

import { SectionHeading } from "./section-heading";
import { AnimateIn } from "./animate-in";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    slug: "midwest-manufacturing",
    category: "Manufacturing",
    title: "AI-Powered Quality Control for Midwest Manufacturer",
    challenge: "A 50-year-old precision parts manufacturer in Dane County was experiencing 12% defect rates and manual inspection bottlenecks.",
    result: "Implemented computer vision system that reduced defects by 78% and cut inspection time by 60%.",
    metrics: [
      { value: "78%", label: "Defect reduction" },
      { value: "60%", label: "Faster inspection" },
      { value: "$340K", label: "Annual savings" },
    ],
  },
  {
    slug: "madison-healthcare",
    category: "Healthcare",
    title: "Patient Intake Automation for Madison Practice",
    challenge: "A growing healthcare practice was spending 25+ hours weekly on manual data entry and appointment scheduling.",
    result: "Deployed AI-powered intake system with NLP document processing and intelligent scheduling.",
    metrics: [
      { value: "25hrs", label: "Saved weekly" },
      { value: "92%", label: "Accuracy rate" },
      { value: "3x", label: "Faster onboarding" },
    ],
  },
  {
    slug: "wi-nonprofit",
    category: "Nonprofit",
    title: "Grant Writing AI Assistant for Wisconsin Nonprofit",
    challenge: "A statewide nonprofit needed to increase grant applications but had limited administrative capacity.",
    result: "Built custom AI assistant that drafts grant proposals and manages application pipelines.",
    metrics: [
      { value: "5x", label: "More applications" },
      { value: "$2.1M", label: "Funding secured" },
      { value: "80%", label: "Time saved" },
    ],
  },
  {
    slug: "professional-services",
    category: "Professional Services",
    title: "Intelligent Document Processing for Law Firm",
    challenge: "A mid-sized law firm in Madison was drowning in contract review and due diligence work.",
    result: "Implemented AI contract analysis system with risk flagging and automated summarization.",
    metrics: [
      { value: "70%", label: "Faster review" },
      { value: "45%", label: "Cost reduction" },
      { value: "99%", label: "Accuracy" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[var(--color-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Work"
          title="Real results for Wisconsin businesses"
          description="Every business is unique. Here are examples of how we&apos;ve helped local organizations turn AI into competitive advantage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <Link href={`/case-studies/${study.slug}`}>
                <div className="h-full p-6 lg:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 group cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      {study.category}
                    </span>
                    <ArrowUpRight size={18} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                  </div>

                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">
                    {study.challenge}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[var(--color-border)]">
                    {study.metrics.map((metric, j) => (
                      <div key={j}>
                        <div className="text-xl lg:text-2xl font-bold gradient-text">
                          {metric.value}
                        </div>
                        <div className="text-xs text-[var(--color-text-muted)]">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}