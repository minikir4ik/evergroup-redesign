"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";

/* ═══════════════════════════════════════════════
 * SVG Icons for the Features Grid
 * ═══════════════════════════════════════════════ */

function MonitorIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z"
      />
    </svg>
  );
}

function UserCheckIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

function ShieldExclamationIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.572-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
      />
    </svg>
  );
}

function ChartBarIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
      />
    </svg>
  );
}

function DocumentTextIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
}

function ArrowPathIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M21.015 4.356v4.992"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
 * Feature Data
 * ═══════════════════════════════════════════════ */

const features = [
  {
    title: "Real-time Monitoring",
    description:
      "Continuous surveillance of transactions and customer activities with instant alerts.",
    Icon: MonitorIcon,
  },
  {
    title: "KYC Automation",
    description:
      "Streamline customer verification with automated identity checks and document processing.",
    Icon: UserCheckIcon,
  },
  {
    title: "AML Screening",
    description:
      "Screen transactions against global watchlists and sanctions databases in real-time.",
    Icon: ShieldExclamationIcon,
  },
  {
    title: "Risk Scoring",
    description:
      "AI-powered risk assessment models that adapt to your institution's profile.",
    Icon: ChartBarIcon,
  },
  {
    title: "Regulatory Reporting",
    description:
      "Generate compliance reports for regulators with one click. Always audit-ready.",
    Icon: DocumentTextIcon,
  },
  {
    title: "Pipeline Management",
    description:
      "Track compliance workflows from initiation to resolution with full visibility.",
    Icon: ArrowPathIcon,
  },
];

/* ═══════════════════════════════════════════════
 * Transaction Table Data
 * ═══════════════════════════════════════════════ */

const transactions = [
  {
    id: "TXN-00482A",
    entity: "Meridian Capital Ltd",
    type: "KYC",
    risk: "Low",
    date: "2026-03-26",
    status: "Cleared",
  },
  {
    id: "TXN-00481B",
    entity: "Northfield Holdings",
    type: "AML",
    risk: "Medium",
    date: "2026-03-26",
    status: "Review",
  },
  {
    id: "TXN-00480C",
    entity: "Atlas Ventures AG",
    type: "PEP",
    risk: "High",
    date: "2026-03-25",
    status: "Flagged",
  },
  {
    id: "TXN-00479D",
    entity: "Pacific Trade Corp",
    type: "AML",
    risk: "Low",
    date: "2026-03-25",
    status: "Cleared",
  },
  {
    id: "TXN-00478E",
    entity: "Summit Financial Inc",
    type: "KYC",
    risk: "Low",
    date: "2026-03-24",
    status: "Cleared",
  },
  {
    id: "TXN-00477F",
    entity: "Redstone Partners",
    type: "AML",
    risk: "Medium",
    date: "2026-03-24",
    status: "Review",
  },
];

/* ═══════════════════════════════════════════════
 * How It Works Steps
 * ═══════════════════════════════════════════════ */

const steps = [
  {
    number: 1,
    title: "Configure Rules",
    description:
      "Define compliance rules, thresholds, and risk parameters tailored to your regulatory environment.",
  },
  {
    number: 2,
    title: "Connect Data Sources",
    description:
      "Integrate your transaction systems, customer databases, and third-party watchlists seamlessly.",
  },
  {
    number: 3,
    title: "Monitor & Alert",
    description:
      "CRC continuously monitors activity and triggers instant alerts when anomalies are detected.",
  },
  {
    number: 4,
    title: "Report & Audit",
    description:
      "Generate audit-ready reports for regulators with a single click. Full traceability guaranteed.",
  },
];

/* ═══════════════════════════════════════════════
 * Helper Components
 * ═══════════════════════════════════════════════ */

function RiskBadge({ level }: { level: string }) {
  const colorMap: Record<string, string> = {
    Low: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Medium: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    High: "bg-red-500/10 text-red-400 border-red-500/20",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${colorMap[level] ?? "text-slate-400"}`}
    >
      {level}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    Cleared: "text-emerald-400",
    Review: "text-amber-400",
    Flagged: "text-red-400",
  };
  return (
    <span
      className={`text-xs font-medium ${colorMap[status] ?? "text-slate-400"}`}
    >
      {status}
    </span>
  );
}

/* ═══════════════════════════════════════════════
 * CRC Product Page
 * ═══════════════════════════════════════════════ */

export default function CRCPage() {
  return (
    <>
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs tracking-widest uppercase text-blue-400 font-semibold">
                Compliance
              </p>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white mt-4">
                Compliance Risk Control
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed">
                Automate regulatory compliance, monitor risk in real-time, and
                stay ahead of every audit.
              </p>
              <a
                href="mailto:ask@evergroup.tech"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg mt-8 inline-block transition-colors"
              >
                Get Started
              </a>
            </div>
          </ScrollReveal>

          {/* ─── Dashboard Mockup ─── */}
          <ScrollReveal delay={200}>
            <div className="mt-16 w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-hidden">
              {/* Top bar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-white text-sm font-semibold">
                  CRC Dashboard
                </h2>
                <div className="flex gap-1">
                  {["Overview", "Monitoring", "Reports", "Alerts"].map(
                    (tab, i) => (
                      <button
                        key={tab}
                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                          i === 0
                            ? "bg-blue-600 text-white"
                            : "text-slate-400 hover:text-white hover:bg-slate-800"
                        }`}
                      >
                        {tab}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Main panels */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                {/* Left: Risk Score Gauge */}
                <div className="bg-slate-800/50 rounded-lg p-6 flex flex-col items-center justify-center">
                  <div className="relative w-32 h-32">
                    {/* Background ring */}
                    <svg
                      className="w-32 h-32 -rotate-90"
                      viewBox="0 0 120 120"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth="10"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={`${87 * 3.14} ${100 * 3.14}`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-black text-white font-mono">
                        87
                      </span>
                      <span className="text-xs text-slate-400">/100</span>
                    </div>
                  </div>
                  <span className="text-emerald-400 text-sm font-semibold mt-3">
                    Low Risk
                  </span>
                  <span className="text-slate-500 text-xs mt-1">
                    Last Assessment: 2 hours ago
                  </span>
                </div>

                {/* Right: KPI Cards */}
                <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                  {[
                    {
                      label: "KYC Verified",
                      value: "2,847",
                      color: "text-blue-400",
                    },
                    {
                      label: "Active Alerts",
                      value: "3",
                      color: "text-amber-400",
                    },
                    {
                      label: "Reports Filed",
                      value: "156",
                      color: "text-emerald-400",
                    },
                    {
                      label: "Compliance Rate",
                      value: "99.2%",
                      color: "text-violet-400",
                    },
                  ].map((kpi) => (
                    <div
                      key={kpi.label}
                      className="bg-slate-800/50 rounded-lg p-4"
                    >
                      <p className="text-xs text-slate-400">{kpi.label}</p>
                      <p
                        className={`text-2xl font-black font-mono mt-1 ${kpi.color}`}
                      >
                        {kpi.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transaction Monitoring Table */}
              <div className="bg-slate-800/50 rounded-lg p-4 overflow-x-auto">
                <p className="text-xs text-slate-400 font-semibold mb-3 uppercase tracking-wider">
                  Transaction Monitoring
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs text-slate-500 border-b border-slate-700/50">
                      <th className="pb-2 pr-4 font-medium">ID</th>
                      <th className="pb-2 pr-4 font-medium">Entity</th>
                      <th className="pb-2 pr-4 font-medium">Type</th>
                      <th className="pb-2 pr-4 font-medium">Risk Level</th>
                      <th className="pb-2 pr-4 font-medium">Date</th>
                      <th className="pb-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx) => (
                      <tr
                        key={tx.id}
                        className="border-b border-slate-700/30 last:border-0"
                      >
                        <td className="py-2.5 pr-4 font-mono text-xs text-slate-300">
                          {tx.id}
                        </td>
                        <td className="py-2.5 pr-4 text-xs text-white">
                          {tx.entity}
                        </td>
                        <td className="py-2.5 pr-4">
                          <span className="text-xs font-medium text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">
                            {tx.type}
                          </span>
                        </td>
                        <td className="py-2.5 pr-4">
                          <RiskBadge level={tx.risk} />
                        </td>
                        <td className="py-2.5 pr-4 font-mono text-xs text-slate-400">
                          {tx.date}
                        </td>
                        <td className="py-2.5">
                          <StatusBadge status={tx.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Features Grid ─── */}
      <section className="py-24 lg:py-32 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs tracking-widest uppercase text-blue-400 font-semibold text-center">
              Features
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white text-center mt-4">
              Built for compliance teams
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 80}>
                <div className="bg-transparent border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
                  <feature.Icon />
                  <h3 className="text-lg font-semibold text-white mt-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 lg:py-32 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs tracking-widest uppercase text-blue-400 font-semibold text-center">
              Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white text-center mt-4">
              How it works
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-5 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-slate-800" />

            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 120}>
                <div className="relative text-center lg:text-left">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold relative z-10">
                    {step.number}
                  </div>
                  <h3 className="text-white font-semibold text-lg mt-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 lg:py-32 bg-[#0a0f1e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="border border-slate-800 rounded-2xl p-12 lg:p-20 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                Ready to automate compliance?
              </h2>
              <p className="text-lg text-slate-400 mt-6">
                Get in touch to see how CRC can transform your compliance
                operations.
              </p>
              <a
                href="mailto:ask@evergroup.tech"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg mt-8 inline-block transition-colors"
              >
                Get Started
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
