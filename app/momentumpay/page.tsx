"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollAnimation, { StaggerContainer } from "../components/ScrollAnimation";

const facts = [
  { value: "1.9x", label: "Higher job application rate with daily pay" },
  { value: "28%", label: "Reduction in contractor turnover" },
  { value: "74%", label: "Users more motivated to come to work" },
  { value: "700+", label: "Taxi companies" },
  { value: "100,000", label: "Active taxi drivers" },
];

const capabilities = [
  {
    title: "Fast contractor payments",
    description:
      "Supports payouts to large numbers of contractors who may receive more than one order per day.",
  },
  {
    title: "Fraud risk management",
    description: "Helps aggregators manage fraud risks on the contractor side.",
  },
  {
    title: "Driver app",
    description:
      "Contractors can track orders and payment history and transfer money to debit cards, credit cards, or e-wallets.",
  },
];

const impactStats = [
  {
    value: "1.9x",
    label: "Attract",
    description: "Higher job application rate with daily pay",
  },
  {
    value: "28%",
    label: "Retain",
    description: "Reduction in contractor turnover",
  },
  {
    value: "74%",
    label: "Motivate",
    description: "Users more motivated to come to work",
  },
];

const networkStats = [
  { value: "700+", label: "Taxi companies" },
  { value: "100,000", label: "Active taxi drivers" },
];

const workflowSteps = [
  {
    step: "01",
    title: "Sign agreements",
    description:
      "Momentum signs agreements with taxi service aggregators. Contractors receive payments from Momentum while aggregators transfer payments to Momentum.",
  },
  {
    step: "02",
    title: "Contractors install the app",
    description:
      "Contractors install the app to track orders, payment history, and transfer money to cards or e-wallets.",
  },
  {
    step: "03",
    title: "Commission model",
    description:
      "Momentum takes commission payments from taxi companies or contractors.",
  },
];

const driverAdvantages = [
  {
    title: "Earnings available sooner",
    description:
      "Earnings are available to drivers sooner than the next pay statement.",
  },
  {
    title: "Send to a debit card",
    description:
      "Most drivers and delivery partners can use Momentum once they complete their first trip. All they need is a debit card.",
  },
  {
    title: "Instant payments",
    description: "Drivers get earnings when they want them by cashing out instantly.",
  },
  {
    title: "Automatic fast clearing",
    description: "Automatic and fast clearing of all payments without delays.",
  },
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

export default function MomentumPayPage() {
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
          <span style={{ color: "var(--color-text-muted)" }}>Momentum Pay</span>
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
              Momentum Pay
            </h1>
            <p
              className="text-xl lg:text-2xl mt-6"
              style={{
                color: "var(--color-text)",
                lineHeight: 1.4,
                fontFamily: "var(--font-display)",
              }}
            >
              Instant payment solution for service aggregators and taxi platforms.
            </p>
            <p
              className="text-lg mt-6 max-w-3xl"
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: 1.65,
              }}
            >
              Momentum Pay helps large platforms pay contractors faster, manage
              fraud risks, and support drivers on payment issues.
            </p>
          </ScrollAnimation>

          {/* Facts bar */}
          <ScrollAnimation delay={0.1}>
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12"
              style={{
                gap: "var(--space-4)",
              }}
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

      {/* What Momentum Pay solves */}
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
              Overview
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Momentum Pay solves
            </h2>
            <p
              className="text-xl mt-6"
              style={{
                color: "var(--color-text)",
                lineHeight: 1.6,
              }}
            >
              Service platforms and taxi aggregators often need to pay large
              numbers of contractors every day. This creates pressure around
              payout speed, fraud risk, support requests, and contractor
              retention. Momentum Pay helps organize this process in a way that
              is faster, clearer, and easier for both the platform and the
              contractor.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Key capabilities (3) */}
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
              Capabilities
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Key capabilities
            </h2>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
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
                    fontSize: "var(--text-lg)",
                  }}
                >
                  {cap.title}
                </h3>
                <p
                  className="text-sm mt-3"
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {cap.description}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Impact */}
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
              Impact
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Proven results
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {impactStats.map((stat) => (
              <ScrollAnimation key={stat.label}>
                <div
                  className="rounded-lg text-center"
                  style={{
                    border: "1px solid var(--color-border)",
                    padding: "var(--space-8)",
                  }}
                >
                  <div
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-semibold mt-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.label}
                  </div>
                  <p
                    className="text-sm mt-2"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {stat.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Current Network */}
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
              Network
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Current network
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {networkStats.map((stat) => (
              <ScrollAnimation key={stat.label}>
                <div
                  className="rounded-lg"
                  style={{
                    border: "1px solid var(--color-border)",
                    padding: "var(--space-8)",
                  }}
                >
                  <div
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm mt-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* How Momentum Works */}
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
              Workflow
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How Momentum works
            </h2>
          </ScrollAnimation>
          <div
            className="mt-12"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-8)",
            }}
          >
            {workflowSteps.map((item) => (
              <ScrollAnimation key={item.step}>
                <div
                  className="flex items-start"
                  style={{ gap: "var(--space-4)" }}
                >
                  <span
                    className="shrink-0 font-bold"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-accent)",
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h3
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm mt-1"
                      style={{
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages for Drivers */}
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
              Benefits
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Advantages for drivers
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {driverAdvantages.map((item) => (
              <ScrollAnimation key={item.title}>
                <div
                  className="flex items-start"
                  style={{ gap: "var(--space-3)" }}
                >
                  <span
                    className="mt-2 shrink-0"
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "100px",
                      backgroundColor: "var(--color-accent)",
                    }}
                  />
                  <div>
                    <h3
                      className="font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm mt-1"
                      style={{
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.65,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
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
