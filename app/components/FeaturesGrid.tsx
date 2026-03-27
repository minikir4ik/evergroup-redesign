"use client";

import ScrollAnimation, { StaggerContainer } from "./ScrollAnimation";

const features = [
  {
    title: "Compliance Automation",
    description: "Real-time monitoring and regulatory reporting.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Payment Processing",
    description: "Multi-currency settlement and merchant analytics.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Fare Collection",
    description: "Contactless transit payments and route optimization.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M12 8v4" />
        <path d="M8 14h8" />
        <path d="M8 18h8" />
        <circle cx="12" cy="8" r="0.5" fill="var(--color-accent)" />
      </svg>
    ),
  },
  {
    title: "Custom Development",
    description: "Full-cycle engineering for financial systems.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    title: "Risk Intelligence",
    description: "Automated KYC/AML screening and scoring.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  {
    title: "API Platform",
    description: "Developer-first integrations and webhooks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="var(--color-accent)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M4.93 4.93l2.83 2.83" />
        <path d="M16.24 16.24l2.83 2.83" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <p
            className="text-center uppercase"
            style={{
              fontSize: "var(--text-xs)",
              letterSpacing: "0.15em",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            CAPABILITIES
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.05}>
          <h2
            className="text-4xl font-bold tracking-tight text-center mt-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything your financial team needs.
          </h2>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              data-stagger-item
              className="rounded-lg p-8"
              style={{
                border: "1px solid var(--color-border)",
                transition: "all 200ms var(--ease-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.boxShadow = "0 0 20px var(--color-accent-glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm mt-2 leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
