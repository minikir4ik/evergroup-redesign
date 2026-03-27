"use client";

import Link from "next/link";
import ScrollAnimation, { StaggerContainer } from "./ScrollAnimation";

const cases = [
  {
    tag: "Compliance",
    title: "CRC System",
    description:
      "Deployed compliance risk management for a Central Asian financial institution. Reduced manual review time by 60%.",
    href: "/crc",
  },
  {
    tag: "Payments",
    title: "Momentum Pay",
    description:
      "Built instant contractor payment infrastructure for 700+ taxi companies and 100,000 active drivers.",
    href: "/momentumpay",
  },
  {
    tag: "Transport",
    title: "Fare Collection",
    description:
      "Implemented automated fare collection across public transit networks. Compatible with NFC, bank cards, and cash.",
    href: "/farecollection",
  },
  {
    tag: "Software",
    title: "Custom Development",
    description:
      "Full-cycle software development for enterprise clients — from ideation through deployment and ongoing support.",
    href: "/csd",
  },
];

export default function CasesSection() {
  return (
    <section className="py-24 lg:py-32 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollAnimation>
          <p
            className="uppercase mb-4"
            style={{
              fontSize: "var(--text-xs)",
              letterSpacing: "0.15em",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Cases
          </p>
          <h2
            className="text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What we&apos;ve built
          </h2>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {cases.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              data-stagger-item
              className="group block rounded-xl p-8 transition-all duration-200"
              style={{
                border: "1px solid var(--color-border)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(79,110,247,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <p
                className="text-xs uppercase font-medium tracking-widest"
                style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
              >
                {c.tag}
              </p>
              <h3
                className="text-2xl font-bold mt-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {c.title}
              </h3>
              <p
                className="text-sm mt-3 leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {c.description}
              </p>
              <span
                className="inline-block text-sm mt-6 font-medium transition-colors duration-200"
                style={{ color: "var(--color-accent)" }}
              >
                View case &rarr;
              </span>
            </Link>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
