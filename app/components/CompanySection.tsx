"use client";

import ScrollAnimation, { StaggerContainer } from "./ScrollAnimation";

const facts = [
  {
    label: "Where we operate",
    body: "UAE (Dubai Silicon Oasis), Central Asia, CIS markets, Middle East",
  },
  {
    label: "Who we work with",
    body: "Banks and financial institutions, Public transport operators and municipal authorities, Taxi aggregators and service platforms, Enterprise clients requiring custom software",
  },
  {
    label: "Our approach",
    body: "We work as a boutique engineering partner — small enough to stay focused on your project, experienced enough to deliver production-grade systems. Every engagement runs through our IS360 framework: from discovery and architecture through to deployment and long-term support.",
  },
];

const stats = [
  { value: "10+", label: "Years of domain expertise" },
  { value: "4", label: "Core product systems" },
  { value: "700+", label: "Partner companies" },
  { value: "3", label: "Regions served (UAE, CIS, Central Asia)" },
];

export default function CompanySection() {
  return (
    <section
      className="py-24 lg:py-32 border-t"
      style={{ borderColor: "#2a2a2a", backgroundColor: "#0f0f0f" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <p
            className="uppercase"
            style={{
              fontSize: "13px",
              letterSpacing: "0.25em",
              fontWeight: 500,
              color: "#6abf4b",
              fontFamily: "var(--font-mono)",
            }}
          >
            About Evergroup
          </p>
          <h2
            className="mt-4"
            style={{
              fontSize: "52px",
              fontWeight: 700,
              fontFamily: "var(--font-display)",
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Built on trust. Delivered with precision.
          </h2>
          <p
            className="mt-5 max-w-3xl"
            style={{ fontSize: "18px", lineHeight: 1.8, color: "#999999" }}
          >
            We are a Dubai-based software company specializing in compliance, payments, and transport technology for financial institutions and enterprise clients across the CIS, Central Asia, and the Middle East.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          <StaggerContainer className="flex flex-col gap-6">
            {facts.map((fact) => (
              <div
                key={fact.label}
                data-stagger-item
                className="rounded-xl"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  padding: "28px 32px",
                }}
              >
                <p
                  className="uppercase"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.25em",
                    fontWeight: 600,
                    color: "#6abf4b",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {fact.label}
                </p>
                <p
                  className="mt-3"
                  style={{ fontSize: "16px", lineHeight: 1.75, color: "#bbbbbb" }}
                >
                  {fact.body}
                </p>
              </div>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-2 gap-5 content-start">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-stagger-item
                className="rounded-xl flex flex-col justify-between"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  padding: "32px",
                  minHeight: "180px",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(44px, 5vw, 56px)",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    color: "#6abf4b",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-5"
                  style={{ fontSize: "14px", lineHeight: 1.6, color: "#bbbbbb" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
