"use client";

import ScrollAnimation, { StaggerContainer } from "./ScrollAnimation";

const whoWeWorkWith = [
  "Banks and financial institutions",
  "Public transport operators and municipal authorities",
  "Taxi aggregators and service platforms",
  "Enterprise clients that need custom software",
];

const whereWeWork = ["UAE", "CIS", "Central Asia"];

const coreFacts = [
  { value: "50+", label: "Data sources used in CRC" },
  { value: "10", label: "Functional blocks in CRC" },
  { value: "700+", label: "Taxi companies in the Momentum Pay network" },
  { value: "100,000", label: "Active taxi drivers" },
  { value: "4", label: "Deployment cities in Fare Collection" },
  { value: "10+", label: "Years of software delivery experience" },
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
            Evergroup is a Dubai-based software company focused on compliance, payments, fare collection, and custom software development. We work with banks, transport operators, service platforms, and enterprise clients across the UAE, CIS, and Central Asia. Our approach is practical: we build production-ready systems, adapt them to client processes, and support delivery from implementation to long-term use.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
          <ScrollAnimation>
            <div
              className="rounded-xl h-full"
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
                Who we work with
              </p>
              <ul className="mt-5 space-y-3">
                {whoWeWorkWith.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: "#6abf4b" }}
                    />
                    <span style={{ fontSize: "16px", lineHeight: 1.7, color: "#bbbbbb" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.05}>
            <div
              className="rounded-xl h-full"
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
                Where we work
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {whereWeWork.map((region) => (
                  <span
                    key={region}
                    className="inline-flex rounded-full"
                    style={{
                      fontSize: "14px",
                      color: "#ffffff",
                      backgroundColor: "#141414",
                      border: "1px solid #2a2a2a",
                      padding: "8px 18px",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.1}>
          <p
            className="uppercase mt-20"
            style={{
              fontSize: "13px",
              letterSpacing: "0.25em",
              fontWeight: 500,
              color: "#6abf4b",
              fontFamily: "var(--font-mono)",
            }}
          >
            Core facts
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {coreFacts.map((fact) => (
            <div
              key={fact.label}
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
                  fontSize: "clamp(40px, 4vw, 52px)",
                  fontWeight: 700,
                  fontFamily: "var(--font-display)",
                  color: "#6abf4b",
                  lineHeight: 1,
                }}
              >
                {fact.value}
              </p>
              <p
                className="mt-5"
                style={{ fontSize: "14px", lineHeight: 1.6, color: "#bbbbbb" }}
              >
                {fact.label}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
