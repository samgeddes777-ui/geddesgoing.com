"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, TrendingUp, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-bg)] to-[var(--color-bg-alt)]" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--color-text) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-sm font-medium text-[var(--color-primary)] mb-8"
          >
            <MapPin size={14} />
            Based in Madison, WI &middot; Serving all of Wisconsin
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            AI that drives{" "}
            <span className="gradient-text">real results</span>{" "}
            for your business
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl leading-relaxed"
          >
            We help Madison and Wisconsin businesses identify high-ROI AI opportunities, 
            build custom solutions, and train teams — with a practical, business-first 
            approach that skips the hype and delivers outcomes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-[var(--color-primary)]/25"
            >
              Book a Free 30-min Discovery Call
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border-2 border-[var(--color-border)] text-[var(--color-text)] font-semibold text-base hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              See Our Services
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 flex flex-wrap gap-6 lg:gap-10"
          >
            {[
              { icon: Sparkles, text: "Custom AI Solutions" },
              { icon: TrendingUp, text: "Measurable ROI Focus" },
              { icon: Shield, text: "Enterprise-Grade Security" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-sm text-[var(--color-text-muted)]"
              >
                <item.icon size={18} className="text-[var(--color-accent)]" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
