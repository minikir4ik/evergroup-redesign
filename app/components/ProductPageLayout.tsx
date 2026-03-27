"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ScrollAnimation, { StaggerContainer } from "./ScrollAnimation";

interface ProductPageProps {
  name: string;
  tagline: string;
  breadcrumb: string;
  mockup: ReactNode;
  features: Array<{ icon: ReactNode; title: string; description: string }>;
  steps: Array<{ title: string; description: string }>;
}

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault();
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#contact";
  }
};

export default function ProductPageLayout({
  name,
  tagline,
  breadcrumb,
  mockup,
  features,
  steps,
}: ProductPageProps) {
  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div
        className="pt-24 pb-4 max-w-7xl mx-auto px-6 lg:px-8"
      >
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
            {breadcrumb}
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <ScrollAnimation>
              <h1
                className="text-5xl lg:text-7xl font-black tracking-tighter"
                style={{
                  fontFamily: "var(--font-display)",
                  lineHeight: 1.1,
                }}
              >
                {name}
              </h1>
              <p
                className="text-lg mt-6"
                style={{
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.65,
                }}
              >
                {tagline}
              </p>
              <button
                onClick={scrollToContact}
                className="mt-8 rounded-full font-medium cursor-pointer"
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
                  e.currentTarget.style.backgroundColor =
                    "var(--color-accent)";
                }}
              >
                Get Started
              </button>
            </ScrollAnimation>

            {/* Right: Mockup */}
            <ScrollAnimation delay={0.15}>
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  border: "1px solid var(--color-border)",
                  background: "var(--color-surface)",
                  boxShadow: "0 0 40px var(--color-accent-glow)",
                  padding: "var(--space-6)",
                }}
              >
                {mockup}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features */}
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
              Features
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Key capabilities
            </h2>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature) => (
              <div
                key={feature.title}
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
                <div className="w-6 h-6" style={{ color: "var(--color-accent)" }}>
                  {feature.icon}
                </div>
                <h3
                  className="font-semibold mt-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
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
              Process
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How it works
            </h2>
          </ScrollAnimation>

          <div className="mt-12 relative" style={{ display: "flex", flexDirection: "column", gap: "var(--space-12)" }}>
            {/* Connecting line */}
            <div
              className="absolute hidden md:block"
              style={{
                left: "15px",
                top: "var(--space-8)",
                bottom: "var(--space-8)",
                width: "1px",
                backgroundColor: "var(--color-border)",
              }}
              aria-hidden="true"
            />

            {steps.map((step, index) => (
              <ScrollAnimation key={step.title} delay={index * 0.08}>
                <div className="flex items-start" style={{ gap: "var(--space-6)" }}>
                  {/* Number badge */}
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "100px",
                      border: "1px solid var(--color-border)",
                      fontSize: "var(--text-xs)",
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-accent)",
                      position: "relative",
                      zIndex: 1,
                      backgroundColor: "var(--color-bg)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm mt-2"
                      style={{
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.65,
                      }}
                    >
                      {step.description}
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
        className="relative py-24 border-t text-center overflow-hidden"
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
