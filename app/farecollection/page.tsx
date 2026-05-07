"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";

const facts = [
  { value: "+25%", label: "Profit increase for transport enterprises" },
  { value: "NFC / Bank cards / Transport cards / Cash", label: "Accepted payment methods" },
  { value: "4", label: "Deployment cities" },
  { value: "Turnkey", label: "Implementation and support" },
];

const audiences = [
  {
    title: "Transport enterprises",
    description:
      "Increase profit by reducing the cost of revenue collection and organizing accurate payment accounting without data loss.",
  },
  {
    title: "Administration",
    description:
      "Release additional funds from the budget, improve transport service quality, and keep transport enterprise income under control.",
  },
  {
    title: "Regional integrators",
    description:
      "Expand the list of services, including passenger accounting and accurate statistics for schedules and tariff management.",
  },
];

const deployments = [
  {
    city: "Samarkand",
    description:
      "In collaboration with TezCard, we simplified the fare collection process in local public transport in Samarkand.",
  },
  {
    city: "Ferghana",
    description:
      "After successful implementation in Samarkand, TezCard decided to work with us to upgrade the fare collection system in Ferghana as well.",
  },
  {
    city: "Vinnitsa",
    description:
      "Supported by Vinnitsa municipality, we equipped trams, trolley buses, and buses with contactless validators and introduced the Vinnitsa Citizen Card for easier fare payments.",
  },
  {
    city: "Kokshetau",
    description:
      "Revenue collected after the new fare collection system launch helped Kokshetau municipality subsidize transport enterprises and start renovation of the bus fleet.",
  },
];

const advantages = [
  { title: "Simple", description: "No additional equipment installation required." },
  { title: "Profitable", description: "No obligatory supplier payments." },
  { title: "Independent", description: "Turnkey implementation and support provided." },
  { title: "Centralized", description: "Single server for all passenger payment types." },
  { title: "Convenient", description: "Passenger receives a ticket showing balance, time, and fare." },
  { title: "Flexible", description: "Accounting system adjustable for specific conditions." },
];

const timeline = [
  { time: "Start", title: "Processing center", description: "Organization of the processing center." },
  { time: "1 month", title: "Vehicle equipping", description: "Equipping vehicles with validators and readers." },
  { time: "2 months", title: "System issuance", description: "System issue and cards replenishment organization." },
  { time: "3 months", title: "Launch", description: "Setup, commissioning, and trial operation." },
];

const paymentMethods = [
  "NFC",
  "Bank cards",
  "Transport cards",
  "Cash",
];

const partners = [
  "TezCard",
  "KazInterSoft",
  "NXP",
  "Gemalto",
  "Infineon",
];

const guarantees = [
  "System implementation in 2-3 months",
  "System maintenance services",
  "Consultations at each stage toward successful results",
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

export default function FareCollectionPage() {
  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Fare Collection
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h1
              className="font-black tracking-tighter"
              style={{ fontFamily: "var(--font-display)", lineHeight: 1.1, fontSize: "clamp(28px, 7vw, 80px)" }}
            >
              Fare Collection
            </h1>
            <p
              className="text-xl lg:text-2xl mt-6"
              style={{
                color: "var(--color-text)",
                lineHeight: 1.4,
                fontFamily: "var(--font-display)",
              }}
            >
              Automated fare collection system for public transport.
            </p>
            <p
              className="text-lg mt-6 max-w-3xl"
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: 1.65,
              }}
            >
              This is not only electronic or non-cash payment. It is fully
              automated payment accounting with instant data transfer to the
              system.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <div
              className="grid grid-cols-2 lg:grid-cols-4 mt-10 sm:mt-12"
              style={{ gap: "var(--space-3)" }}
            >
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg"
                  style={{
                    border: "1px solid var(--color-border)",
                    padding: "12px",
                  }}
                >
                  <div
                    className="font-bold"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-accent)",
                      fontSize: "clamp(14px, 3.5vw, 20px)",
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
              className="mt-10 w-full sm:w-auto rounded-full font-medium cursor-pointer"
              style={{
                padding: "var(--space-3) var(--space-8)",
                backgroundColor: "var(--color-accent)",
                color: "var(--color-on-accent)",
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                minHeight: "48px",
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

      {/* Who it is for */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <p
              className="text-xs uppercase mb-3"
              style={{
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Audience
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.15 }}
            >
              Who it is for
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {audiences.map((item) => (
              <ScrollAnimation key={item.title}>
                <div
                  className="rounded-lg h-full"
                  style={{
                    border: "1px solid var(--color-border)",
                    padding: "var(--space-8)",
                  }}
                >
                  <h3
                    className="font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
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
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Deployments */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <p
              className="text-xs uppercase mb-3"
              style={{
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Deployments
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.15 }}
            >
              Live implementations
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {deployments.map((item) => (
              <ScrollAnimation key={item.city}>
                <div
                  className="rounded-lg h-full"
                  style={{
                    border: "1px solid var(--color-border)",
                    padding: "var(--space-6)",
                  }}
                >
                  <h3
                    className="font-semibold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.city}
                  </h3>
                  <p
                    className="text-sm mt-2"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* System stands out */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <p
              className="text-xs uppercase mb-3"
              style={{
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Advantages
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.15 }}
            >
              System stands out for being
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {advantages.map((item) => (
              <ScrollAnimation key={item.title}>
                <div
                  className="rounded-lg h-full"
                  style={{
                    border: "1px solid var(--color-border)",
                    padding: "var(--space-6)",
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
                    className="text-sm mt-2"
                    style={{
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation timeline */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <p
              className="text-xs uppercase mb-3"
              style={{
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Timeline
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.15 }}
            >
              What to expect after purchase
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
            {timeline.map((item) => (
              <ScrollAnimation key={item.time}>
                <div
                  className="flex items-start"
                  style={{ gap: "var(--space-4)" }}
                >
                  <span
                    className="shrink-0 rounded-full font-medium"
                    style={{
                      padding: "var(--space-1) var(--space-3)",
                      fontSize: "var(--text-xs)",
                      fontFamily: "var(--font-mono)",
                      backgroundColor: "var(--color-surface-raised)",
                      color: "var(--color-accent)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.time}
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

      {/* Payment methods */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <p
              className="text-xs uppercase mb-3"
              style={{
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Payments
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.15 }}
            >
              Accepted payment methods
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <div
              className="flex flex-wrap mt-10"
              style={{ gap: "var(--space-3)" }}
            >
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  style={{
                    padding: "var(--space-3) var(--space-6)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "100px",
                    fontSize: "var(--text-base)",
                    color: "var(--color-text)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {method}
                </span>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Technology partners */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <p
              className="text-xs uppercase mb-3"
              style={{
                letterSpacing: "0.15em",
                color: "var(--color-accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Partners
            </p>
            <h2
              className="font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.15 }}
            >
              Technology partners
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <div
              className="flex flex-wrap mt-10"
              style={{ gap: "var(--space-3)" }}
            >
              {partners.map((partner) => (
                <span
                  key={partner}
                  style={{
                    padding: "var(--space-3) var(--space-6)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "100px",
                    fontSize: "var(--text-base)",
                    color: "var(--color-text)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {partner}
                </span>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* We guarantee */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollAnimation>
              <p
                className="text-xs uppercase mb-3"
                style={{
                  letterSpacing: "0.15em",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Guarantee
              </p>
              <h2
                className="font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.15 }}
              >
                We guarantee
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                }}
              >
                {guarantees.map((item) => (
                  <li
                    key={item}
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
                    <span
                      style={{
                        color: "var(--color-text-secondary)",
                        fontSize: "var(--text-base)",
                        lineHeight: 1.65,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 border-t text-center"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <h2
              className="font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.15 }}
            >
              Ready to deploy fare collection?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <button
              onClick={scrollToContact}
              className="mt-10 w-full sm:w-auto rounded-full font-medium cursor-pointer"
              style={{
                padding: "var(--space-3) var(--space-8)",
                backgroundColor: "var(--color-accent)",
                color: "var(--color-on-accent)",
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                minHeight: "48px",
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
