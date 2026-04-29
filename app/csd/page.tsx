"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollAnimation, { StaggerContainer } from "../components/ScrollAnimation";

const facts = [
  { value: "10+", label: "Years of experience" },
  { value: "IS360", label: "Full lifecycle framework" },
  { value: "Domains", label: "BPM, AML, Billing" },
  { value: "Technologies", label: "C#/.NET, Python, Flutter, React, Azure" },
];

const whyChoose = [
  {
    title: "360 approach",
    description:
      "From concept to delivery and ongoing support, we cover the full lifecycle through the IS360 framework.",
  },
  {
    title: "Domain expertise",
    description:
      "We have practical experience in niche fintech and enterprise systems, including BPM, AML, and Billing.",
  },
  {
    title: "A-class team",
    description:
      "10+ years of experience in software engineering and enterprise digital transformation.",
  },
];

const technicalCapabilities = [
  {
    category: "Mobile",
    items: "Custom iOS and Android apps, Native and cross-platform solutions, Flutter",
  },
  { category: "Backend", items: "C#, .NET, .NET Core, Python" },
  { category: "Frontend", items: "Vue.js, React, HTML5" },
  { category: "Cloud & Infrastructure", items: "Microsoft Azure" },
  { category: "Databases", items: "Microsoft SQL, Oracle SQL, PostgreSQL" },
  { category: "Domain Systems", items: "BPM, AML, Billing" },
];

const is360Phases = [
  "Consulting & Prototyping",
  "UI/UX Design",
  "Application Development",
  "Automated QA & Testing",
  "Integration & Management",
  "Maintenance & Support",
];

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault();
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#contact";
  }
};

export default function CSDPage() {
  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-6 lg:px-8">
        <nav
          className="flex items-center"
          style={{ gap: "var(--space-2)", fontSize: "var(--text-sm)" }}
        >
          <Link
            href="/"
            style={{
              color: "var(--color-text-muted)",
              transition: "color var(--duration-base) var(--ease-smooth)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-text-muted)")
            }
          >
            Home
          </Link>
          <span style={{ color: "var(--color-border)" }} aria-hidden="true">
            &rarr;
          </span>
          <span style={{ color: "var(--color-text-muted)" }}>
            Custom Software
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <h1
              className="text-5xl lg:text-7xl font-black tracking-tighter"
              style={{ fontFamily: "var(--font-display)", lineHeight: 1.1 }}
            >
              Custom Software Development
            </h1>
            <p
              className="text-xl lg:text-2xl mt-6"
              style={{
                color: "var(--color-text)",
                lineHeight: 1.4,
                fontFamily: "var(--font-display)",
              }}
            >
              Software development services for innovative ideas and complex
              business systems.
            </p>
            <p
              className="text-lg mt-6 max-w-3xl"
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: 1.65,
              }}
            >
              We help partners turn ideas into production-ready software and
              deliver real business value through full-cycle custom software
              development services.
            </p>
          </ScrollAnimation>

          {/* Facts bar */}
          <ScrollAnimation delay={0.1}>
            <div
              className="grid grid-cols-2 md:grid-cols-4 mt-12"
              style={{ gap: "var(--space-4)" }}
            >
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg"
                  style={{
                    border: "1px solid var(--color-border)",
                    padding: "var(--space-5)",
                  }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-accent)",
                      lineHeight: 1.2,
                    }}
                  >
                    {fact.value}
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <button
              onClick={scrollToContact}
              className="mt-10 rounded-full font-medium cursor-pointer"
              style={{
                padding: "var(--space-3) var(--space-8)",
                backgroundColor: "var(--color-accent)",
                color: "var(--color-on-accent)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                transition:
                  "transform var(--duration-base) var(--ease-spring), background-color var(--duration-base) var(--ease-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.backgroundColor =
                  "var(--color-accent-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "var(--color-accent)";
              }}
            >
              Get Started
            </button>
          </ScrollAnimation>
        </div>
      </section>

      {/* What we deliver */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p
              className="text-xs uppercase mb-3"
              style={{
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Services
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What we deliver
            </h2>
            <p
              className="text-xl mt-6"
              style={{ color: "var(--color-text)", lineHeight: 1.6 }}
            >
              We offer a full cycle of application design, integration, and
              management services. Whether it is a customer-facing app or an
              enterprise-class solution, Evergroup supports the process from
              ideation and concept to delivery and ongoing support.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why choose Evergroup */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p
              className="text-xs uppercase mb-3"
              style={{
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Why Us
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why choose Evergroup
            </h2>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                data-stagger-item
                className="rounded-lg"
                style={{
                  border: "1px solid var(--color-border)",
                  padding: "var(--space-8)",
                  transition:
                    "border-color var(--duration-base) var(--ease-smooth), box-shadow var(--duration-base) var(--ease-smooth)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.boxShadow =
                    "0 0 24px var(--color-accent-glow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <h3
                  className="font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-accent)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm mt-3"
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technical capabilities */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p
              className="text-xs uppercase mb-3"
              style={{
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Technologies
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Technical capabilities
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {technicalCapabilities.map((group) => (
              <ScrollAnimation key={group.category}>
                <div
                  className="rounded-lg"
                  style={{
                    border: "1px solid var(--color-border)",
                    padding: "var(--space-6)",
                  }}
                >
                  <h3
                    className="font-semibold text-sm"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {group.category}
                  </h3>
                  <p
                    className="text-sm mt-2"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {group.items}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* IS360 Framework */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <p
                className="text-xs uppercase mb-3"
                style={{
                  letterSpacing: "0.15em",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Framework
              </p>
              <h2
                className="text-4xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                IS360 Framework
              </h2>
              <p
                className="text-sm mt-4"
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                Our proprietary IS360 framework provides complete lifecycle
                coverage — from initial concept through architecture,
                development, testing, deployment, and ongoing support. It
                ensures consistent quality delivery and predictable outcomes
                for complex software projects.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {is360Phases.map((phase) => (
                  <div
                    key={phase}
                    className="rounded-lg flex items-center"
                    style={{
                      border: "1px solid var(--color-border)",
                      padding: "var(--space-3) var(--space-4)",
                    }}
                  >
                    <span
                      className="shrink-0 mr-2"
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "100px",
                        backgroundColor: "var(--color-accent)",
                      }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {phase}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 border-t text-center"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to get started?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <button
              onClick={scrollToContact}
              className="mt-10 rounded-full font-medium cursor-pointer"
              style={{
                padding: "var(--space-3) var(--space-8)",
                backgroundColor: "var(--color-accent)",
                color: "var(--color-on-accent)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                transition:
                  "transform var(--duration-base) var(--ease-spring), background-color var(--duration-base) var(--ease-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.backgroundColor =
                  "var(--color-accent-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "var(--color-accent)";
              }}
            >
              Contact Us
            </button>
          </ScrollAnimation>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
