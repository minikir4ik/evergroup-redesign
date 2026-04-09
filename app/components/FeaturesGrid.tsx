"use client";

import ScrollAnimation, { StaggerContainer } from "./ScrollAnimation";

const features = [
  {
    title: "Compliance Automation",
    description: "Real-time monitoring and regulatory reporting. Covers AML, KYC, and sanctions screening across multiple jurisdictions.",
    stat: "50+ data sources",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="#6abf4b" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Payment Processing",
    description: "Multi-currency settlement and merchant analytics. Supports instant payouts to contractors and suppliers worldwide.",
    stat: "50+ currencies",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="#6abf4b" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Fare Collection",
    description: "Contactless transit payments and route optimization. Handles NFC, QR, and bank card acceptance at scale.",
    stat: "48K+ daily rides",
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
    title: "Custom Development",
    description: "Full-cycle engineering for financial systems. From architecture through deployment with dedicated fintech teams.",
    stat: "94% test coverage",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="#6abf4b" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    title: "Risk Intelligence",
    description: "Automated KYC/AML screening and scoring. Integrates with global watchlists and produces audit-ready reports.",
    stat: "1,847 KYC verified",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="#6abf4b" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "API Platform",
    description: "Developer-first integrations and webhooks. Comprehensive SDKs and sandbox environments for rapid prototyping.",
    stat: "<42ms latency",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="#6abf4b" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 lg:py-32 border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#141414" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <p className="text-center uppercase" style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
            Capabilities
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.05}>
          <h2 className="text-center mt-4" style={{ fontSize: "52px", fontWeight: 700, fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Platform Capabilities
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <p className="mt-3 max-w-xl" style={{ fontSize: "18px", lineHeight: 1.8, color: "#a0a0a0" }}>
            Compliance, payments, transit, and engineering -- delivered as production-grade software.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              data-stagger-item
              className="rounded-xl p-8"
              style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a", transition: "all 200ms ease" }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 style={{ fontSize: "24px", fontWeight: 600, fontFamily: "var(--font-display)", color: "#ffffff" }}>
                {feature.title}
              </h3>
              <p className="mt-2" style={{ fontSize: "18px", lineHeight: 1.8, color: "#a0a0a0" }}>
                {feature.description}
              </p>
              <p className="mt-4" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
                {feature.stat}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
