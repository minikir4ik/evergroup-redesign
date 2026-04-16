"use client";

import ScrollAnimation from "./ScrollAnimation";

const stats = [
  { value: "50M+", label: "Transactions processed", sub: "Across all products and clients" },
  { value: "99.9%", label: "Platform uptime", sub: "Measured over trailing 12 months" },
  { value: "700+", label: "Partner companies", sub: "Taxi operators, banks, and PSPs" },
  { value: "12", label: "Countries served", sub: "Central Asia, Middle East, CIS" },
];

export default function StatsBanner() {
  return (
    <section className="py-24 lg:py-32 border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#0f0f0f" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <p className="uppercase" style={{ fontSize: "13px", letterSpacing: "0.25em", fontWeight: 500, color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
            By the Numbers
          </p>
          <h2 className="mt-4" style={{ fontSize: "52px", fontWeight: 700, fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Proven at Scale
          </h2>
          <p className="mt-3" style={{ fontSize: "18px", lineHeight: 1.8, color: "#999999" }}>
            Production metrics across all platforms.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={index > 0 ? { borderLeft: "1px solid #2a2a2a", paddingLeft: "32px" } : undefined}
              >
                <p style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 700, fontFamily: "var(--font-display)", lineHeight: 1, color: "#ffffff" }}>
                  {stat.value}
                </p>
                <p className="mt-3" style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.8, color: "#999999" }}>{stat.label}</p>
                <p className="mt-1" style={{ fontSize: "13px", color: "#777777" }}>{stat.sub}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
