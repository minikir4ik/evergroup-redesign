"use client";

import ScrollAnimation from "./ScrollAnimation";

const companies = [
  "ACME BANK",
  "METRO TRANSIT",
  "GULF PAY",
  "NEXUS FINANCE",
  "SILK ROAD TECH",
];

export default function TrustBar() {
  return (
    <section className="py-16 border-t border-b" style={{ borderColor: "var(--color-border-subtle)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollAnimation>
          <p
            className="text-center text-sm mb-10"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
          >
            Powering teams across finance, transport, and enterprise
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {companies.map((name) => (
              <span
                key={name}
                className="text-sm tracking-widest font-medium uppercase"
                style={{
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  opacity: 0.5,
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
