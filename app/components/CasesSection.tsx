"use client";

import Link from "next/link";
import ScrollAnimation, { StaggerContainer } from "./ScrollAnimation";

const cases = [
  {
    tag: "Compliance",
    title: "CRC System",
    metric: "-60% review time",
    description: "Compliance risk management for a Central Asian bank. Automated screening reduced manual review time by 60%.",
    scale: "Deployed across 3 banks in Central Asia",
    href: "/crc",
  },
  {
    tag: "Payments",
    title: "Momentum Pay",
    metric: "100K active drivers",
    description: "Contractor payment infrastructure for 700+ taxi companies. 100,000 active drivers served daily.",
    scale: "Serving 700+ taxi companies and 100,000 active drivers",
    href: "/momentumpay",
  },
  {
    tag: "Transport",
    title: "Fare Collection",
    metric: "+25% revenue",
    description: "Automated fare collection across national transit networks. NFC, bank cards, and cash accepted.",
    scale: "Deployed across municipal transit networks",
    href: "/farecollection",
  },
  {
    tag: "Software",
    title: "Custom Development",
    metric: "Full-cycle delivery",
    description: "End-to-end software delivery for enterprise financial clients. Architecture through deployment.",
    scale: "End-to-end delivery from architecture to production",
    href: "/csd",
  },
];

export default function CasesSection() {
  return (
    <section className="py-24 lg:py-32 border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#141414" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <p className="uppercase" style={{ fontSize: "13px", letterSpacing: "0.25em", fontWeight: 500, color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
            Cases
          </p>
          <h2 className="mt-4" style={{ fontSize: "52px", fontWeight: 700, fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Selected Engagements
          </h2>
          <p className="mt-3" style={{ fontSize: "18px", lineHeight: 1.8, color: "#b8b8b8" }}>
            Real results from production deployments.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {cases.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              data-stagger-item
              className="group block rounded-xl p-8 transition-all duration-200"
              style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}
            >
              <p style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 500, color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
                {c.tag}
              </p>
              <h3 className="mt-3" style={{ fontSize: "24px", fontWeight: 600, fontFamily: "var(--font-display)", color: "#ffffff" }}>
                {c.title}
              </h3>
              <p className="mt-2" style={{ fontSize: "14px", fontWeight: 600, color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
                {c.metric}
              </p>
              <p className="mt-3" style={{ fontSize: "16px", lineHeight: 1.8, color: "#b8b8b8" }}>
                {c.description}
              </p>
              <p className="mt-2" style={{ fontSize: "13px", color: "#888888", fontStyle: "italic", fontFamily: "var(--font-mono)" }}>
                {c.scale}
              </p>
              <span className="inline-flex items-center gap-2 mt-6 rounded-[6px] border border-[#6abf4b] text-[#6abf4b] group-hover:bg-[#6abf4b] group-hover:text-black transition-colors duration-200" style={{ padding: "10px 20px", fontSize: "15px", fontWeight: 600 }}>
                View case <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </span>
            </Link>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
