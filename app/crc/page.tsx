import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import ScrollAnimation from "../components/ScrollAnimation";
import Accordion from "../components/Accordion";

export const metadata: Metadata = {
  title: "CRC — Compliance Risk Control | EVERGROUP",
};

/* ── Icon helpers ── */
const Icon = ({ d }: { d: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

/* ── Features ── */
const features = [
  {
    icon: <Icon d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
    title: "Transaction Monitoring",
    description:
      "Integrates with remote and core banking services. Checks incoming and outgoing transfer aggregates and performed transactions.",
  },
  {
    icon: <Icon d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />,
    title: "KYC Automation",
    description:
      "Streamline customer verification with automated identity checks and document processing.",
  },
  {
    icon: <Icon d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />,
    title: "AML Screening",
    description:
      "Screen transactions against global watchlists and sanctions databases in real-time.",
  },
  {
    icon: <Icon d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
    title: "Risk Scoring",
    description:
      "Automated risk assessment that gathers data from 50+ sources including Central Bank, Federal Tax Service, and UN Security Council.",
  },
  {
    icon: <Icon d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />,
    title: "Regulatory Reporting",
    description:
      "Generate compliance reports for regulators with one click. Always audit-ready.",
  },
  {
    icon: <Icon d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />,
    title: "Application Processing",
    description:
      "Track compliance workflows from initiation to resolution. Logs all events and controls timing of each stage.",
  },
];

/* ── Steps ── */
const steps = [
  {
    title: "Connect Data Sources",
    description:
      "Integrate your transaction systems, customer databases, and third-party watchlists seamlessly.",
  },
  {
    title: "Configure Compliance Rules",
    description:
      "Define thresholds, risk parameters, and regulatory requirements tailored to your environment.",
  },
  {
    title: "Monitor Automatically",
    description:
      "CRC continuously monitors activity and triggers instant alerts when anomalies are detected.",
  },
  {
    title: "Generate Reports",
    description:
      "Produce audit-ready reports for regulators with a single click. Full traceability guaranteed.",
  },
];

/* ── Transaction data ── */
const transactions = [
  { entity: "KYC Module", type: "Verification", risk: "Low", status: "Active" },
  { entity: "Transaction Monitoring", type: "AML", risk: "Medium", status: "Screening" },
  { entity: "AML/CFT Profile", type: "Compliance", risk: "Low", status: "Active" },
  { entity: "Client Digital ID", type: "Identity", risk: "Low", status: "Active" },
];

function riskColor(level: string) {
  if (level === "High") return "var(--color-text-muted)";
  if (level === "Medium") return "var(--color-text-muted)";
  return "var(--color-accent)";
}

function statusColor(status: string) {
  if (status === "Screening") return "var(--color-text-muted)";
  return "var(--color-accent)";
}

/* ── Mockup ── */
const mockup = (
  <div style={{ fontFamily: "var(--font-body)" }}>
    {/* Header bar with tabs */}
    <div
      className="flex items-center"
      style={{
        gap: "var(--space-4)",
        paddingBottom: "var(--space-4)",
        borderBottom: "1px solid var(--color-border)",
        marginBottom: "var(--space-6)",
        fontSize: "var(--text-sm)",
      }}
    >
      {["Overview", "Alerts", "Reports"].map((tab, i) => (
        <span
          key={tab}
          style={{
            color: i === 0 ? "var(--color-accent)" : "var(--color-text-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
          }}
        >
          {tab}
        </span>
      ))}
    </div>

    {/* Risk score gauge + metrics row */}
    <div className="flex flex-col sm:flex-row items-center" style={{ gap: "var(--space-6)", marginBottom: "var(--space-6)" }}>
      {/* Risk score circle */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="flex items-center justify-center"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "100px",
            border: "4px solid",
            borderColor: "var(--color-text-muted)",
          }}
        >
          <span
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            72
          </span>
        </div>
        <span
          className="mt-2"
          style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}
        >
          Risk Score
        </span>
      </div>

      {/* 3 metric cards */}
      <div className="grid grid-cols-3 gap-3 flex-1 w-full">
        {[
          { label: "KYC Verified", value: "1,847" },
          { label: "Active Alerts", value: "23" },
          { label: "Reports Filed", value: "156" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-lg"
            style={{
              background: "var(--color-surface-raised)",
              padding: "var(--space-3)",
            }}
          >
            <div
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--color-text-muted)",
              }}
            >
              {m.label}
            </div>
            <div
              className="font-bold mt-1"
              style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-md)" }}
            >
              {m.value}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Transaction monitoring table */}
    <div className="overflow-x-auto">
      <table className="w-full" style={{ fontSize: "var(--text-xs)" }}>
        <thead>
          <tr
            style={{
              borderBottom: "1px solid var(--color-border)",
              color: "var(--color-text-muted)",
            }}
          >
            <th className="text-left pb-2 pr-4 font-medium">Module</th>
            <th className="text-left pb-2 pr-4 font-medium">Type</th>
            <th className="text-left pb-2 pr-4 font-medium">Priority</th>
            <th className="text-left pb-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr
              key={tx.entity}
              style={{ borderBottom: "1px solid var(--color-border-subtle)" }}
            >
              <td className="py-2 pr-4" style={{ color: "var(--color-text)" }}>
                {tx.entity}
              </td>
              <td
                className="py-2 pr-4"
                style={{
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {tx.type}
              </td>
              <td className="py-2 pr-4">
                <span
                  className="inline-block rounded-full"
                  style={{
                    padding: "1px 8px",
                    fontSize: "var(--text-xs)",
                    color: riskColor(tx.risk),
                    border: `1px solid ${riskColor(tx.risk)}33`,
                    backgroundColor: `${riskColor(tx.risk)}15`,
                  }}
                >
                  {tx.risk}
                </span>
              </td>
              <td className="py-2">
                <span style={{ color: statusColor(tx.status), fontWeight: 500 }}>
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/* ── Functional Blocks ── */
const functionalBlocks = [
  { title: "KYC Module", content: "Requests and gathers information from 50+ sources including Central Bank, Federal Tax Service, Federal Antimonopoly Service, Federal Migration Service, National Supreme Court of Arbitration, Ministry of Justice, UN Security Council. Defines financial monitoring information, change notifications, and current profile maintenance." },
  { title: "Application Processing Pipeline", content: "Automates business processes and controls all operations. Tracks documents, participant notifications, remote banking service blocking, operation limits, manual processing selection, event logging, and stage timing controls." },
  { title: "Financial Monitoring Employee's Desk", content: "Client card with account information, counterparty statements, and transaction data. Tools for remote banking services, operation limits, white/black lists, exceptions, and payment amounts. Queue viewing and client assignment." },
  { title: "Transaction Monitoring and Verification", content: "Integrates with banking services to check transfers and transactions. Analyzes monetary aggregates including cash withdrawals, tax payments, debit/credit turnover, and entrepreneur transfers." },
  { title: "Document Request and Video Conference Module", content: "Document request interface, client personal accounts with Q&A, chat functionality, system integration for notifications, and video conference scheduling." },
  { title: "External Statement Reception and Analysis", content: "Processes account statements via remote banking in ERP, CRM, SRM, MRP formats with automatic analysis capabilities." },
  { title: "AML and CFT Profile", content: "Records automated and manual client checks with complete action history. Stores requests, documents, correspondence, video conferences, and reports." },
  { title: "Client Digital ID Module", content: "Integrates with remote banking and document systems. Receives digital fingerprints via cookies, evercookies, Fingerprint JS, and proprietary technology to identify shell companies." },
  { title: "Rule Management Module", content: "View existing rules and statistics. Enable or disable rules and adjust changing indicators." },
  { title: "Compliance Protection Module", content: "Client-facing service assessing account blocking risks based on 17 criteria. Provides detailed reports and performance recommendations to offset system expenses." },
];

/* ── Monitoring Areas ── */
const monitoringAreas = [
  "Cash-out via individuals, executive documents, and labor dispute commissions",
  "Cash-out via radial transits through individual entrepreneurs",
  "National Central Bank methodology compliance",
  "Transit operations via legal entities",
  "Merchants, payment agents, and travel agencies",
  "E-wallets and mobile carriers",
  "VAT evasion schemes",
];

/* ── Value Props ── */
const valueProps = [
  { title: "Automated Verification", description: "Automated verification process across 50+ data sources" },
  { title: "Full Compliance", description: "Full regulatory compliance with National Central Bank methodology" },
  { title: "Service Level", description: "Increased service levels through streamlined processes" },
  { title: "Client Retention", description: "Reliable clients are not forced to leave" },
];

export default function CRCPage() {
  return (
    <ProductPageLayout
      name="Compliance Risk Control"
      tagline="The CRC system is a compromise between the Regulator and your client — offering automated verification, full regulatory compliance, increased service levels, and retention of reliable clients."
      breadcrumb="CRC"
      mockup={mockup}
      features={features}
      steps={steps}
    >
      {/* Value Propositions */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Value
            </p>
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              What CRC delivers
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {valueProps.map((prop) => (
              <ScrollAnimation key={prop.title}>
                <div className="rounded-lg" style={{ border: "1px solid var(--color-border)", padding: "var(--space-6)" }}>
                  <h3 className="font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}>{prop.title}</h3>
                  <p className="text-sm mt-2" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{prop.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* What CRC Monitors */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollAnimation>
              <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
                Monitoring
              </p>
              <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                What CRC monitors
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                {monitoringAreas.map((area) => (
                  <li key={area} className="flex items-start" style={{ gap: "var(--space-3)" }}>
                    <span className="mt-2 shrink-0" style={{ width: "6px", height: "6px", borderRadius: "100px", backgroundColor: "var(--color-accent)" }} />
                    <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--text-sm)", lineHeight: 1.65 }}>{area}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 10 Functional Blocks */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Architecture
            </p>
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              10 Functional Blocks
            </h2>
          </ScrollAnimation>
          <div className="mt-12">
            <Accordion items={functionalBlocks} />
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
