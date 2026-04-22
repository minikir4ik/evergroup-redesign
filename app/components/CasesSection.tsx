"use client";

import Link from "next/link";
import ScrollAnimation, { StaggerContainer } from "./ScrollAnimation";

type CaseStudy = {
  tag: string;
  title: string;
  problem: string;
  built: string;
  resultMetric: string;
  resultDetail: string;
  where: string;
  href: string;
};

const cases: CaseStudy[] = [
  {
    tag: "Compliance",
    title: "Compliance Risk Management System",
    problem:
      "Financial institutions in Central Asia faced growing regulatory pressure with manual compliance processes that could not scale to meet Central Bank requirements.",
    built:
      "A modular compliance platform with 10 functional blocks including KYC, AML/CFT profiling, transaction monitoring, and client digital ID — integrated with 50+ government and regulatory data sources.",
    resultMetric: "−60% manual review time",
    resultDetail:
      "Automated screening now processes thousands of clients against Central Bank, Tax Service, and UN Security Council databases daily.",
    where: "Deployed across banks in Central Asia",
    href: "/crc",
  },
  {
    tag: "Payments",
    title: "Momentum Pay — Contractor Payment Infrastructure",
    problem:
      "Taxi aggregators and service platforms struggled to pay thousands of contractors daily across multiple currencies, with high fraud risk and no real-time settlement.",
    built:
      "An instant contractor payment platform with ML-based fraud scoring, multi-currency settlement, and a driver-facing app for real-time earnings tracking and card payouts.",
    resultMetric: "700+ companies · 100,000 drivers",
    resultDetail:
      "1.9x increase in contractor job applications for companies using daily pay. 28% reduction in turnover.",
    where: "CIS markets, Russia, Central Asia",
    href: "/momentumpay",
  },
  {
    tag: "Transport",
    title: "Automated Fare Collection System",
    problem:
      "Public transport operators lacked accurate revenue accounting, subsidy control, and modern payment acceptance — relying on cash with no data visibility.",
    built:
      "A fully automated fare collection system compatible with NFC, bank cards, transport cards, and cash. One centralized server processes all payment types with instant data transfer.",
    resultMetric: "+25% operator profits",
    resultDetail:
      "Deployed across municipal networks in Samarkand, Ferghana, Vinnitsa, and Kokshetau.",
    where: "Municipal transit networks in Uzbekistan and Ukraine",
    href: "/farecollection",
  },
  {
    tag: "Software",
    title: "Custom Software Development",
    problem:
      "Financial institutions and enterprise clients needed complex software — BPM systems, AML platforms, billing engines — but lacked the specialized fintech engineering expertise to build them.",
    built:
      "Full-cycle software delivery using the IS360 framework — from architecture and ideation through development, QA, deployment, and ongoing support. Delivered across iOS, Android, web, and cloud platforms.",
    resultMetric: "10+ years of domain expertise",
    resultDetail:
      "End-to-end delivery across fintech, transport, and enterprise sectors. Deep specialization in BPM, AML, and billing systems.",
    where: "Financial institutions across UAE, Central Asia, and CIS",
    href: "/csd",
  },
];

export default function CasesSection() {
  return (
    <section className="py-24 lg:py-32 border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#141414" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <p className="uppercase" style={{ fontSize: "13px", letterSpacing: "0.25em", fontWeight: 500, color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
            Cases
          </p>
          <h2 className="mt-4" style={{ fontSize: "52px", fontWeight: 700, fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Selected Engagements
          </h2>
          <p className="mt-3" style={{ fontSize: "18px", lineHeight: 1.8, color: "#999999" }}>
            Real results from production deployments.
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {cases.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              scroll={true}
              data-stagger-item
              className="group flex flex-col rounded-xl transition-all duration-200 hover:border-[#6abf4b]/40"
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid #2a2a2a",
                padding: "40px",
                minHeight: "480px",
              }}
            >
              <p
                className="uppercase"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.25em",
                  fontWeight: 600,
                  color: "#6abf4b",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {c.tag}
              </p>

              <h3
                className="mt-4"
                style={{
                  fontSize: "26px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  fontFamily: "var(--font-display)",
                  color: "#ffffff",
                }}
              >
                {c.title}
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <p
                    className="uppercase"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      fontWeight: 600,
                      color: "#777777",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    The Problem
                  </p>
                  <p className="mt-1.5" style={{ fontSize: "15px", lineHeight: 1.7, color: "#bbbbbb" }}>
                    {c.problem}
                  </p>
                </div>

                <div>
                  <p
                    className="uppercase"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      fontWeight: 600,
                      color: "#777777",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    What Was Built
                  </p>
                  <p className="mt-1.5" style={{ fontSize: "15px", lineHeight: 1.7, color: "#bbbbbb" }}>
                    {c.built}
                  </p>
                </div>
              </div>

              <div
                className="mt-6 rounded-lg"
                style={{
                  backgroundColor: "rgba(106,191,75,0.06)",
                  border: "1px solid rgba(106,191,75,0.18)",
                  padding: "18px 20px",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#6abf4b",
                    fontFamily: "var(--font-mono)",
                    lineHeight: 1.3,
                  }}
                >
                  {c.resultMetric}
                </p>
                <p className="mt-1.5" style={{ fontSize: "14px", lineHeight: 1.7, color: "#bbbbbb" }}>
                  {c.resultDetail}
                </p>
              </div>

              <div className="mt-auto pt-6">
                <p
                  style={{
                    fontSize: "13px",
                    color: "#777777",
                    fontStyle: "italic",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {c.where}
                </p>

                <span
                  className="inline-flex items-center gap-2 mt-5 rounded-[6px] border border-[#6abf4b] text-[#6abf4b] group-hover:bg-[#6abf4b] group-hover:text-black transition-colors duration-200"
                  style={{ padding: "10px 20px", fontSize: "15px", fontWeight: 600 }}
                >
                  View case <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
