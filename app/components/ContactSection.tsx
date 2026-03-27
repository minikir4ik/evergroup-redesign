"use client";

import { useState, FormEvent } from "react";
import ScrollAnimation from "./ScrollAnimation";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-32 border-t"
      style={{ borderColor: "var(--color-border-subtle)" }}
    >
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <ScrollAnimation>
          <p
            className="text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
          >
            Contact
          </p>
          <h2
            className="text-4xl font-bold tracking-tight mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s build together.
          </h2>
        </ScrollAnimation>

        {submitted ? (
          <ScrollAnimation>
            <div
              className="py-16 text-center rounded-lg border"
              style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
            >
              <p
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Thank you for reaching out!
              </p>
              <p style={{ color: "var(--color-text-muted)" }}>
                We&apos;ll get back to you shortly.
              </p>
            </div>
          </ScrollAnimation>
        ) : (
          <ScrollAnimation delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border text-white transition-colors duration-200 focus:outline-none"
                  style={{ borderColor: "var(--color-border)", fontFamily: "var(--font-body)" }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.backgroundColor = "rgba(79,110,247,0.05)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.backgroundColor = "transparent"; }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border text-white transition-colors duration-200 focus:outline-none"
                  style={{ borderColor: "var(--color-border)", fontFamily: "var(--font-body)" }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; e.target.style.backgroundColor = "rgba(79,110,247,0.05)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; e.target.style.backgroundColor = "transparent"; }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border text-white transition-colors duration-200 focus:outline-none resize-none"
                  style={{ borderColor: "var(--color-border)", fontFamily: "var(--font-body)" }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--color-accent)"; (e.target as HTMLTextAreaElement).style.backgroundColor = "rgba(79,110,247,0.05)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--color-border)"; (e.target as HTMLTextAreaElement).style.backgroundColor = "transparent"; }}
                />
              </div>

              <button
                type="submit"
                className="self-start px-10 py-3.5 rounded-full font-medium transition-all duration-200 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-on-accent)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Send Message
              </button>
            </form>
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}
