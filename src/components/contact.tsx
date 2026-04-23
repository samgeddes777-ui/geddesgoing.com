"use client";

import { useState } from "react";
import { SectionHeading } from "./section-heading";
import { AnimateIn } from "./animate-in";
import { Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  "AI Strategy & Roadmap",
  "Custom AI Development",
  "Workflow Automation",
  "Generative AI Implementation",
  "Team Training",
  "Ongoing Advisory",
  "Not Sure Yet",
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Using Formspree for simple form handling
    // Replace FORMSPREE_ID with your actual Formspree ID
    try {
      const response = await fetch("https://formspree.io/f/FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            <SectionHeading
              label="Get in Touch"
              title="Ready to put AI to work?"
              description="Let's talk about how AI can help your business. Schedule a free 30-minute discovery call — no obligation, just a conversation."
              center={false}
            />

            <AnimateIn delay={0.1}>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-text)]">Location</h4>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">
                      Madison, WI &middot; Serving all of Wisconsin and remote
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-text)]">Email</h4>
                    <a
                      href="mailto:sam@geddesgoing.com"
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      sam@geddesgoing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-text)]">Phone</h4>
                    <a
                      href="tel:+16085551234"
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      (608) 555-1234
                    </a>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Calendly embed placeholder */}
            <AnimateIn delay={0.2}>
              <div className="mt-10 p-6 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-border)]">
                <h4 className="font-medium text-[var(--color-text)] mb-2">
                  Prefer to book directly?
                </h4>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">
                  Schedule a time that works for you.
                </p>
                <a
                  href="https://calendly.com/YOUR_CALENDLY_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg border-2 border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  View Available Times
                </a>
              </div>
            </AnimateIn>

            {/* Embedded map */}
            <AnimateIn delay={0.25}>
              <div className="mt-6 rounded-2xl overflow-hidden border border-[var(--color-border)] h-48 bg-[var(--color-bg-alt)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184374.33363754543!2d-89.6009952!3d43.0730517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5237f5e3d1e3c7c7%3A0x5e5e5e5e5e5e5e5e!2sMadison%2C%20WI!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Madison, WI location"
                />
              </div>
            </AnimateIn>
          </div>

          {/* Right: Form */}
          <AnimateIn>
            <div className="p-6 lg:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)]">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--color-text-muted)]">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-[var(--color-primary)] hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, company: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      value={formState.service}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, service: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-colors resize-none"
                      placeholder="Tell me about your business and what you're looking to accomplish..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}