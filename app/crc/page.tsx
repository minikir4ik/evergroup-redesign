"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollAnimation, { StaggerContainer } from "../components/ScrollAnimation";
import Accordion from "../components/Accordion";

const factsPills = [
  "50+ data sources",
  "10 functional blocks",
  "KYC",
  "AML/CFT",
  "Monitoring",
  "Digital ID",
  "Rule Management",
];

const capabilities = [
  {
    title: "KYC Module",
    description:
      "Collects and updates client and counterparty information from 50+ government and public data sources, including financial, tax, legal, and regulatory databases.",
  },
  {
    title: "Transaction Monitoring",
    description:
      "Integrates with remote and core banking systems and checks transfers, turnover, cash withdrawal, taxes paid, and related activity indicators.",
  },
  {
    title: "Rule Management",
    description:
      "Allows teams to review, enable, disable, and adjust risk rules and indicators.",
  },
];

const functionalBlocks = [
  {
    title: "KYC module (know-your-client)",
    content:
      "Requests and gathers information from 50+ sources including Central Bank, Federal Tax Service, Federal Antimonopoly Service, Federal Migration Service, National Supreme Court of Arbitration, Ministry of Justice, UN Security Council. Defines financial monitoring information, change notifications, and current profile maintenance.",
  },
  {
    title: "Application processing pipeline",
    content:
      "Automates business processes and controls all operations. Tracks documents, participant notifications, remote banking service blocking, operation limits, manual processing selection, event logging, and stage timing controls.",
  },
  {
    title: "Financial Monitoring Employee's Desk",
    content:
      "Client card with account information, counterparty statements, and transaction data. Tools for remote banking services, operation limits, white/black lists, exceptions, and payment amounts. Queue viewing and client assignment.",
  },
  {
    title: "Transaction monitoring and verification module",
    content:
      "Integrates with banking services to check transfers and transactions. Analyzes monetary aggregates including cash withdrawals, tax payments, debit/credit turnover, and entrepreneur transfers.",
  },
  {
    title: "Document request and video conference call module",
    content:
      "Document request interface, client personal accounts with Q&A, chat functionality, system integration for notifications, and video conference scheduling.",
  },
  {
    title: "External statement reception and analysis module",
    content:
      "Processes account statements via remote banking in ERP, CRM, SRM, MRP formats with automatic analysis capabilities.",
  },
  {
    title: "AML and CFT Profile",
    content:
      "Records automated and manual client checks with complete action history. Stores requests, documents, correspondence, video conferences, and reports.",
  },
  {
    title: "Client Digital ID Module",
    content:
      "Integrates with remote banking and document systems. Receives digital fingerprints via cookies, evercookies, Fingerprint JS, and proprietary technology to identify shell companies.",
  },
  {
    title: "Rule Management module",
    content:
      "View existing rules and statistics. Enable or disable rules and adjust changing indicators.",
  },
  {
    title: "Compliance Protection module",
    content:
      "Client-facing service assessing account blocking risks based on 17 criteria. Provides detailed reports and performance recommendations to offset system expenses.",
  },
];

const monitoringAreas = [
  "Cash-out via individuals, executive documents, and labor dispute commissions",
  "Cash-out via radial transits through individual entrepreneurs",
  "Monitoring scenarios aligned with bank compliance processes",
  "Transit operations via legal entities",
  "Merchants, payment agents, and travel agencies",
  "E-wallets and mobile carriers",
  "VAT evasion schemes",
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

export default function CRCPage() {
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
          <span style={{ color: "var(--color-text-muted)" }}>CRC</span>
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
              Compliance Risk Control
            </h1>
            <p
              className="text-xl lg:text-2xl mt-6"
              style={{
                color: "var(--color-text)",
                lineHeight: 1.4,
                fontFamily: "var(--font-display)",
              }}
            >
              Modular compliance risk management system for banks.
            </p>
            <p
              className="text-lg mt-6 max-w-3xl"
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: 1.65,
              }}
            >
              CRC is built as a module constructor and adapted to each bank
              process. It combines KYC, transaction monitoring, AML/CFT
              profiling, document requests, digital ID, rule management, and
              compliance reporting in one system.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <div
              className="flex flex-wrap mt-10"
              style={{ gap: "var(--space-3)" }}
            >
              {factsPills.map((pill) => (
                <span
                  key={pill}
                  style={{
                    padding: "var(--space-2) var(--space-4)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "100px",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {pill}
                </span>
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

      {/* Intro */}
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
            <p
              className="text-xl"
              style={{
                color: "var(--color-text)",
                lineHeight: 1.6,
              }}
            >
              CRC helps banks automate verification, strengthen compliance
              control, and reduce manual workload without losing visibility into
              client and transaction risk. The system is designed to support
              bank-specific processes and can be adapted to the structure and
              requirements of each organization.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Key Capabilities (3) */}
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

      {/* What CRC Monitors */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "var(--color-border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                Monitoring
              </p>
              <h2
                className="text-4xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What CRC monitors
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
                {monitoringAreas.map((area) => (
                  <li
                    key={area}
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
                        fontSize: "var(--text-sm)",
                        lineHeight: 1.65,
                      }}
                    >
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 10 Functional Blocks */}
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
              Architecture
            </p>
            <h2
              className="text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              10 Functional Blocks
            </h2>
          </ScrollAnimation>
          <div className="mt-12">
            <Accordion items={functionalBlocks} />
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
