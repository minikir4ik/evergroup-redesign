"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

/* ─── Check icon ───────────────────────────────── */
function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ─── Status dot (green pulsing) ───────────────── */
function StatusDot({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      {label}
    </span>
  );
}

/* ─── Risk level badge ─────────────────────────── */
function RiskBadge({ level }: { level: "Low" | "Medium" | "High" }) {
  const colors = {
    Low: "bg-emerald-500/20 text-emerald-400",
    Medium: "bg-amber-500/20 text-amber-400",
    High: "bg-red-500/20 text-red-400",
  };
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${colors[level]}`}
    >
      {level}
    </span>
  );
}

/* ─── Payment status badge ─────────────────────── */
function PaymentStatus({ status }: { status: "Completed" | "Pending" }) {
  const color =
    status === "Completed"
      ? "bg-emerald-500/20 text-emerald-400"
      : "bg-amber-500/20 text-amber-400";
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${color}`}
    >
      {status}
    </span>
  );
}

/* ─── Transit status badge ─────────────────────── */
function TransitStatus({ status }: { status: "Active" | "Delayed" }) {
  const color =
    status === "Active"
      ? "bg-emerald-500/20 text-emerald-400"
      : "bg-amber-500/20 text-amber-400";
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${color}`}
    >
      {status}
    </span>
  );
}

/* ═══════════════════════════════════════════════════
 * MOCKUP 1 — CRC Compliance Dashboard
 * ═══════════════════════════════════════════════════ */
function CRCMockup() {
  const transactions = [
    { id: "TXN-4821", entity: "Apex Holdings Ltd", risk: "Low" as const, status: "Cleared" },
    { id: "TXN-4822", entity: "Quantum Finance AG", risk: "Medium" as const, status: "Review" },
    { id: "TXN-4823", entity: "Nova Trading Co", risk: "High" as const, status: "Flagged" },
    { id: "TXN-4824", entity: "Meridian Capital", risk: "Low" as const, status: "Cleared" },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-semibold text-white">Risk Overview</h4>
        <StatusDot label="All Clear" />
      </div>

      {/* Risk score gauge */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative flex h-28 w-28 items-center justify-center">
          {/* Circular background */}
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              className="text-slate-800"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${87 * 2.64} ${264 - 87 * 2.64}`}
              className="text-emerald-400"
            />
          </svg>
          <div className="text-center">
            <span className="font-mono text-3xl font-bold text-emerald-400">87</span>
            <p className="text-[10px] text-slate-400">Low Risk</p>
          </div>
        </div>
      </div>

      {/* Metric cards */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        {[
          { label: "KYC Verified", value: "2,847" },
          { label: "Alerts Today", value: "3" },
          { label: "Reports Filed", value: "156" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-lg bg-slate-800/50 px-3 py-2.5 text-center"
          >
            <p className="font-mono text-sm font-semibold text-slate-200">{m.value}</p>
            <p className="mt-0.5 text-[10px] text-slate-500">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Transaction table */}
      <div className="overflow-hidden rounded-lg border border-slate-800">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-800/30">
              <th className="px-3 py-2 font-medium text-slate-500">ID</th>
              <th className="px-3 py-2 font-medium text-slate-500">Entity</th>
              <th className="px-3 py-2 font-medium text-slate-500">Risk</th>
              <th className="px-3 py-2 font-medium text-slate-500 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b border-slate-800/50 last:border-0">
                <td className="px-3 py-2 font-mono text-slate-400">{t.id}</td>
                <td className="px-3 py-2 text-slate-300">{t.entity}</td>
                <td className="px-3 py-2">
                  <RiskBadge level={t.risk} />
                </td>
                <td className="px-3 py-2 text-right text-slate-400">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 * MOCKUP 2 — Momentum Pay Dashboard
 * ═══════════════════════════════════════════════════ */
function MomentumPayMockup() {
  const payments = [
    { merchant: "TechFlow Inc", amount: "$12,400.00", currency: "USD", status: "Completed" as const },
    { merchant: "Berlin Motors GmbH", amount: "€8,750.00", currency: "EUR", status: "Completed" as const },
    { merchant: "Dubai Retail LLC", amount: "$23,100.00", currency: "AED", status: "Pending" as const },
    { merchant: "Nordic Systems AB", amount: "€5,320.00", currency: "EUR", status: "Completed" as const },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white">Payment Overview</h4>
      </div>

      {/* Balance */}
      <div className="mb-6">
        <p className="font-mono text-3xl font-bold text-white tracking-tight">
          $1,284,930.00
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
            <svg className="mr-0.5 h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L13 10.414V17a1 1 0 11-2 0v-6.586l-1.293 1.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0112 7z"
                clipRule="evenodd"
              />
            </svg>
            +8.3% this month
          </span>
          <span className="text-[10px] text-slate-500">Total Balance</span>
        </div>
      </div>

      {/* Summary cards */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-slate-800/50 px-4 py-3">
          <p className="text-[10px] text-slate-500">Pending</p>
          <p className="mt-0.5 font-mono text-lg font-semibold text-amber-400">24</p>
        </div>
        <div className="rounded-lg bg-slate-800/50 px-4 py-3">
          <p className="text-[10px] text-slate-500">Settled</p>
          <p className="mt-0.5 font-mono text-lg font-semibold text-emerald-400">1,847</p>
        </div>
      </div>

      {/* Recent payments table */}
      <div className="overflow-hidden rounded-lg border border-slate-800">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-800/30">
              <th className="px-3 py-2 font-medium text-slate-500">Merchant</th>
              <th className="px-3 py-2 font-medium text-slate-500">Amount</th>
              <th className="px-3 py-2 font-medium text-slate-500">Currency</th>
              <th className="px-3 py-2 font-medium text-slate-500 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.merchant} className="border-b border-slate-800/50 last:border-0">
                <td className="px-3 py-2 text-slate-300">{p.merchant}</td>
                <td className="px-3 py-2 font-mono text-slate-200">{p.amount}</td>
                <td className="px-3 py-2">
                  <span className="inline-flex rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">
                    {p.currency}
                  </span>
                </td>
                <td className="px-3 py-2 text-right">
                  <PaymentStatus status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 * MOCKUP 3 — Fare Collection Dashboard
 * ═══════════════════════════════════════════════════ */
function FareCollectionMockup() {
  const routes = [
    { route: "Metro Line A", ridership: "12,847", revenue: "$30,833", status: "Active" as const },
    { route: "Bus Route 42", ridership: "8,291", revenue: "$19,898", status: "Active" as const },
    { route: "Express Rail B", ridership: "15,104", revenue: "$36,250", status: "Delayed" as const },
    { route: "Tram Line 7", ridership: "12,051", revenue: "$28,922", status: "Active" as const },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-semibold text-white">Transit Network</h4>
        <StatusDot label="Live" />
      </div>

      {/* Big stat */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <p className="font-mono text-3xl font-bold text-white tracking-tight">48,293</p>
          <span className="text-sm text-slate-400">rides today</span>
        </div>
        <div className="mt-1.5 flex items-center gap-1">
          <svg className="h-3.5 w-3.5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs text-emerald-400 font-medium">+12.4% vs yesterday</span>
        </div>
      </div>

      {/* Metric cards */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        {[
          { label: "Active Routes", value: "24" },
          { label: "Avg Fare", value: "$2.40" },
          { label: "Revenue", value: "$115,903" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-lg bg-slate-800/50 px-3 py-2.5 text-center"
          >
            <p className="font-mono text-sm font-semibold text-slate-200">{m.value}</p>
            <p className="mt-0.5 text-[10px] text-slate-500">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Route table */}
      <div className="overflow-hidden rounded-lg border border-slate-800">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-800/30">
              <th className="px-3 py-2 font-medium text-slate-500">Route</th>
              <th className="px-3 py-2 font-medium text-slate-500">Ridership</th>
              <th className="px-3 py-2 font-medium text-slate-500">Revenue</th>
              <th className="px-3 py-2 font-medium text-slate-500 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((r) => (
              <tr key={r.route} className="border-b border-slate-800/50 last:border-0">
                <td className="px-3 py-2 text-slate-300">{r.route}</td>
                <td className="px-3 py-2 font-mono text-slate-400">{r.ridership}</td>
                <td className="px-3 py-2 font-mono text-slate-200">{r.revenue}</td>
                <td className="px-3 py-2 text-right">
                  <TransitStatus status={r.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 * MOCKUP 4 — CSD Project Dashboard
 * ═══════════════════════════════════════════════════ */
function CSDMockup() {
  const activity = [
    { action: "Deployed auth-service v2.4.1", time: "2 min ago", author: "CI/CD" },
    { action: "Merged PR #847 — API rate limiter", time: "14 min ago", author: "A. Chen" },
    { action: "Deployed payment-gateway v3.1.0", time: "38 min ago", author: "CI/CD" },
    { action: "Merged PR #845 — DB migration fix", time: "1 hr ago", author: "M. Silva" },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-semibold text-white">Project Dashboard</h4>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-blue-400">
          Sprint 14
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-slate-400">Sprint Progress</span>
          <span className="font-mono text-xs font-semibold text-white">73%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
            style={{ width: "73%" }}
          />
        </div>
      </div>

      {/* Metric cards */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        {[
          { label: "Features", value: "47", sub: "shipped" },
          { label: "Tests", value: "98.2%", sub: "pass" },
          { label: "Deploys", value: "24", sub: "today" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-lg bg-slate-800/50 px-3 py-2.5 text-center"
          >
            <p className="font-mono text-sm font-semibold text-slate-200">
              {m.value}
            </p>
            <p className="mt-0.5 text-[10px] text-slate-500">
              {m.label}: {m.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Activity log */}
      <div className="overflow-hidden rounded-lg border border-slate-800">
        <div className="border-b border-slate-800 bg-slate-800/30 px-3 py-2">
          <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
            Recent Activity
          </span>
        </div>
        <div className="divide-y divide-slate-800/50">
          {activity.map((a, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs text-slate-300">{a.action}</p>
                <p className="text-[10px] text-slate-500">
                  {a.author} &middot; {a.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 * PRODUCT DATA
 * ═══════════════════════════════════════════════════ */
interface Product {
  tag: string;
  headline: string;
  bullets: string[];
  link: string;
  mockup: React.ReactNode;
}

const products: Product[] = [
  {
    tag: "Compliance",
    headline: "CRC",
    bullets: [
      "Real-time regulatory monitoring",
      "Automated KYC/AML workflows",
      "Risk scoring and alerts dashboard",
    ],
    link: "/crc",
    mockup: <CRCMockup />,
  },
  {
    tag: "Payments",
    headline: "Momentum Pay",
    bullets: [
      "Instant multi-currency settlement",
      "Real-time transaction tracking",
      "Comprehensive merchant analytics",
    ],
    link: "/momentumpay",
    mockup: <MomentumPayMockup />,
  },
  {
    tag: "Transport",
    headline: "Fare Collection",
    bullets: [
      "Contactless tap-and-go payments",
      "Multi-modal transit support",
      "Real-time fare reconciliation",
    ],
    link: "/farecollection",
    mockup: <FareCollectionMockup />,
  },
  {
    tag: "Software",
    headline: "Custom Dev",
    bullets: [
      "Full-cycle product development",
      "Modern architecture and cloud-native",
      "Dedicated engineering teams",
    ],
    link: "/csd",
    mockup: <CSDMockup />,
  },
];

/* ═══════════════════════════════════════════════════
 * PRODUCT SECTION (single row)
 * ═══════════════════════════════════════════════════ */
function ProductSection({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const isEven = index % 2 === 1; // 0-indexed, so second item (index 1) is "even" visually

  return (
    <div className="py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text side */}
            <div className={isEven ? "lg:order-last" : ""}>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                {product.tag}
              </span>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-white lg:text-4xl">
                {product.headline}
              </h3>
              <ul className="mt-6 space-y-3">
                {product.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-slate-400">
                    <CheckIcon />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={product.link}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-400 transition-colors hover:text-blue-300"
              >
                Learn more
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Mockup side */}
            <div className={isEven ? "lg:order-first" : ""}>
              {product.mockup}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
 * MAIN EXPORT
 * ═══════════════════════════════════════════════════ */
export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 lg:py-32">
      {/* Section header */}
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Products
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Built for financial teams
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Four products. One platform. Complete coverage.
          </p>
        </div>
      </ScrollReveal>

      {/* Product rows */}
      {products.map((product, i) => (
        <ProductSection key={product.headline} product={product} index={i} />
      ))}
    </section>
  );
}
