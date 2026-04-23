"use client";

import {
  Map,
  Code,
  Zap,
  MessageSquare,
  GraduationCap,
  HeadphonesIcon,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { AnimateIn } from "./animate-in";

const services = [
  {
    icon: Map,
    title: "AI Strategy & Roadmap Development",
    description:
      "We assess your operations, identify the highest-impact AI opportunities, and build a phased roadmap that aligns with your budget and goals. No guesswork — just a clear plan to move forward.",
    features: ["Opportunity assessment", "ROI modeling", "Phased implementation plan"],
  },
  {
    icon: Code,
    title: "Custom AI Solution Development & Integration",
    description:
      "From intelligent document processing to predictive analytics, we design and build AI solutions that plug into your existing systems and workflows seamlessly.",
    features: ["Custom model development", "API integrations", "Legacy system compatibility"],
  },
  {
    icon: Zap,
    title: "AI Automation & Workflow Optimization",
    description:
      "Eliminate repetitive tasks and streamline operations with intelligent automation. We identify bottlenecks and deploy AI-powered workflows that save time and reduce errors.",
    features: ["Process automation", "Intelligent routing", "Error reduction"],
  },
  {
    icon: MessageSquare,
    title: "Generative AI Implementation",
    description:
      "Deploy chatbots, content generation tools, and AI assistants that actually work for your business. We handle the setup, fine-tuning, and guardrails so your team can focus on results.",
    features: ["Custom chatbots", "Content automation", "AI assistants"],
  },
  {
    icon: GraduationCap,
    title: "AI Training & Team Enablement",
    description:
      "Your team is your greatest asset. We deliver hands-on workshops and training programs that give your people the confidence and skills to leverage AI tools effectively.",
    features: ["Custom workshops", "Prompt engineering", "Hands-on labs"],
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing AI Advisory & Support",
    description:
      "AI doesn't stop after launch. Our retainer plans keep your solutions optimized, your team supported, and your strategy evolving as technology advances.",
    features: ["Monthly strategy calls", "Priority support", "Continuous optimization"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[var(--color-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="AI services built for real businesses"
          description="We don't sell silver bullets. We deliver practical AI solutions tailored to your industry, your team, and your bottom line."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimateIn key={i} delay={i * 0.08}>
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/5 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-gradient-from)]/10 to-[var(--color-gradient-to)]/10 flex items-center justify-center mb-5 group-hover:from-[var(--color-gradient-from)]/20 group-hover:to-[var(--color-gradient-to)]/20 transition-colors">
                  <service.icon
                    size={24}
                    className="text-[var(--color-primary)]"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
