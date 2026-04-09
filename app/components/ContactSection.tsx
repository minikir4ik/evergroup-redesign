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
    <section id="contact" className="py-24 lg:py-32 border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#0f0f0f" }}>
      <div className="max-w-2xl mx-auto px-6">
        <ScrollAnimation>
          <p className="uppercase" style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
            Contact
          </p>
          <h2 className="mt-4" style={{ fontSize: "52px", fontWeight: 700, fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Get in Touch
          </h2>
          <p className="mt-3" style={{ fontSize: "18px", lineHeight: 1.8, color: "#a0a0a0" }}>
            Tell us about your project and we&apos;ll be in touch within one business day.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="flex flex-col gap-6 mt-8 mb-12">
            <div>
              <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#6abf4b", fontFamily: "var(--font-mono)" }}>Phone</p>
              <a href="tel:+97142160718" className="text-lg font-medium" style={{ color: "#ffffff" }}>+971 4 216 07 18</a>
            </div>
            <div>
              <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#6abf4b", fontFamily: "var(--font-mono)" }}>Email</p>
              <a href="mailto:ask@evergroup.tech" className="text-lg font-medium" style={{ color: "#ffffff" }}>ask@evergroup.tech</a>
            </div>
            <div>
              <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#6abf4b", fontFamily: "var(--font-mono)" }}>Address</p>
              <p className="text-lg font-medium" style={{ color: "#ffffff", lineHeight: 1.5 }}>Dubai Silicon Oasis, DDP, Building A4, Dubai, United Arab Emirates</p>
            </div>
          </div>
        </ScrollAnimation>

        {submitted ? (
          <ScrollAnimation>
            <div className="py-16 text-center rounded-lg border" style={{ borderColor: "#2a2a2a", background: "#1a1a1a" }}>
              <p className="text-2xl font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>Thank you for reaching out!</p>
              <p style={{ color: "#666666" }}>We&apos;ll get back to you shortly.</p>
            </div>
          </ScrollAnimation>
        ) : (
          <ScrollAnimation delay={0.2}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="font-medium" style={{ fontSize: "15px", color: "#a0a0a0" }}>Name</label>
                  <input
                    id="name" name="name" type="text" required
                    className="w-full px-4 py-3 rounded-lg bg-transparent border"
                    style={{ borderColor: "#2a2a2a", color: "#ffffff", fontFamily: "var(--font-body)" }}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="font-medium" style={{ fontSize: "15px", color: "#a0a0a0" }}>Company</label>
                  <input
                    id="company" name="company" type="text" required
                    className="w-full px-4 py-3 rounded-lg bg-transparent border"
                    style={{ borderColor: "#2a2a2a", color: "#ffffff", fontFamily: "var(--font-body)" }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="font-medium" style={{ fontSize: "15px", color: "#a0a0a0" }}>Email</label>
                <input
                  id="email" name="email" type="email" required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border"
                  style={{ borderColor: "#2a2a2a", color: "#ffffff", fontFamily: "var(--font-body)" }}
                />
              </div>

              <div>
                <label htmlFor="message" className="font-medium" style={{ fontSize: "15px", color: "#a0a0a0" }}>Message</label>
                <textarea
                  id="message" name="message" rows={5} required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border resize-none"
                  style={{ borderColor: "#2a2a2a", color: "#ffffff", fontFamily: "var(--font-body)" }}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-full font-medium transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
                style={{ backgroundColor: "#6abf4b", color: "#000000", fontFamily: "var(--font-body)", fontSize: "16px", minHeight: "48px" }}
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
