"use client";

import { SectionHeading } from "./section-heading";
import { AnimateIn } from "./animate-in";
import { CheckCircle, MapPin, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Business-first, always",
    description:
      "We start with your goals, not the technology. Every recommendation is grounded in ROI and practical outcomes.",
  },
  {
    icon: MapPin,
    title: "Local expertise",
    description:
      "Based in Madison, we understand Wisconsin's business landscape — from manufacturing floors to healthcare systems to Main Street shops.",
  },
  {
    icon: Users,
    title: "Your team matters",
    description:
      "The best AI solution is one your people actually use. We invest in training and change management alongside implementation.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeading
              label="About GeddesGoing"
              title="Practical AI, Wisconsin roots"
              center={false}
            />

            <AnimateIn delay={0.1}>
              <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  I&rsquo;m Sam Geddes, and I started GeddesGoing because I saw too many 
                  Wisconsin businesses getting left behind in the AI wave — not because 
                  they lacked ambition, but because they lacked a practical guide who 
                  spoke their language.
                </p>
                <p>
                  With deep experience in technology consulting and AI implementation, 
                  I&rsquo;ve helped businesses across manufacturing, healthcare, professional 
                  services, and nonprofits turn AI from a buzzword into a competitive advantage.
                </p>
                <p>
                  GeddesGoing is based right here in Madison. We&rsquo;re not a coastal firm 
                  parachuting in — we&rsquo;re your neighbors. We show up in person, we 
                  understand your market, and we stick around to make sure things actually work.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="mt-8 space-y-3">
                {[
                  "Hands-on implementation, not just slide decks",
                  "Plain-English explanations, zero jargon walls",
                  "Solutions that fit your budget and timeline",
                  "Ongoing support after launch",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className="text-[var(--color-accent)] shrink-0"
                    />
                    <span className="text-sm text-[var(--color-text)]">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Value cards */}
          <div className="space-y-6">
            {values.map((value, i) => (
              <AnimateIn key={i} delay={i * 0.1} direction="left">
                <div className="p-6 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-gradient-from)]/10 to-[var(--color-gradient-to)]/10 flex items-center justify-center shrink-0">
                      <value.icon size={20} className="text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text)] mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
