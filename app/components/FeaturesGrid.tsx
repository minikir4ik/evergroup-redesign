"use client";

import ScrollAnimation, { StaggerContainer } from "./ScrollAnimation";

const features = [
  {
    title: "Compliance Risk Management",
    description:
      "Modular compliance risk management system for banks. Covers KYC, transaction monitoring, AML/CFT profiling, digital ID, and rule management.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="#6abf4b" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Contractor Payments",
    description:
      "Payment solution for service aggregators and taxi platforms. Supports fast payouts to large numbers of contractors and helps manage fraud risks and payment support.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="#6abf4b" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Fare Collection",
    description:
      "Automated fare collection system for public transport. Supports NFC, bank cards, transport cards, and cash, with instant data transfer to the system.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="#6abf4b" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M12 8v4" />
        <path d="M8 14h8" />
        <path d="M8 18h8" />
      </svg>
    ),
  },
  {
    title: "Custom Software Development",
    description:
      "Full-cycle software development for financial and enterprise clients. From architecture and development to testing, deployment, and long-term support.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="#6abf4b" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 lg:py-32 border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#141414" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <p className="text-center uppercase" style={{ fontSize: "13px", letterSpacing: "0.25em", fontWeight: 500, color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
            What we build
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.05}>
          <h2 className="text-center mt-4" style={{ fontSize: "52px", fontWeight: 700, fontFamily: "var(--font-display)", color: "#ffffff" }}>
            What we build
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <p className="mt-3 max-w-3xl text-center mx-auto" style={{ fontSize: "18px", lineHeight: 1.8, color: "#999999" }}>
            Evergroup develops and delivers software systems in four core areas: compliance risk management, contractor payments, automated fare collection, and custom software development.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              data-stagger-item
              className="rounded-xl p-8"
              style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a", transition: "all 200ms ease" }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 style={{ fontSize: "22px", fontWeight: 600, fontFamily: "var(--font-display)", color: "#ffffff" }}>
                {feature.title}
              </h3>
              <p className="mt-3" style={{ fontSize: "16px", lineHeight: 1.8, color: "#999999" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
