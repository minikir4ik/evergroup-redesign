"use client";

import Link from "next/link";
import ScrollAnimation, { StaggerContainer } from "./ScrollAnimation";

const cases = [
  {
    tag: "Compliance",
    title: "CRC System",
    metric: "-60% review time",
    description: "Compliance risk management for a Central Asian bank. Automated screening reduced manual review time by 60%.",
    href: "/crc",
  },
  {
    tag: "Payments",
    title: "Momentum Pay",
    metric: "100K active drivers",
    description: "Contractor payment infrastructure for 700+ taxi companies. 100,000 active drivers served daily.",
    href: "/momentumpay",
  },
  {
    tag: "Transport",
    title: "Fare Collection",
    metric: "+25% revenue",
    description: "Automated fare collection across national transit networks. NFC, bank cards, and cash accepted.",
    href: "/farecollection",
  },
  {
    tag: "Software",
    title: "Custom Development",
    metric: "47 features shipped",
    description: "End-to-end software delivery for enterprise financial clients. Architecture through deployment.",
    href: "/csd",
  },
];

export default function CasesSection() {
  return (
    <section className="py-16 lg:py-24 border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#141414" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <p className="uppercase" style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
            Cases
          </p>
          <h2 className="text-5xl mt-4" style={{ fontWeight: 700, fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Selected Engagements
          </h2>
          <p className="mt-3" style={{ fontSize: "16px", lineHeight: 1.7, color: "#a0a0a0" }}>
            Real results from production deployments.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {cases.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              data-stagger-item
              className="block rounded-xl p-6 transition-all duration-200"
              style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}
            >
              <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 500, color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
                {c.tag}
              </p>
              <h3 className="mt-3" style={{ fontSize: "20px", fontWeight: 600, fontFamily: "var(--font-display)", color: "#ffffff" }}>
                {c.title}
              </h3>
              <p className="mt-2" style={{ fontSize: "13px", fontWeight: 600, color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
                {c.metric}
              </p>
              <p className="mt-3" style={{ fontSize: "16px", lineHeight: 1.7, color: "#a0a0a0" }}>
                {c.description}
              </p>
              <span className="inline-block mt-6 text-sm font-medium" style={{ color: "#6abf4b" }}>
                View case &rarr;
              </span>
            </Link>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
