"use client";

import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

/* ─── Mockup sub-components ─── */

function MockupShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-6 overflow-hidden"
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-xl)",
        backgroundColor: "var(--color-surface)",
        boxShadow: "0 0 40px var(--color-accent-glow)",
      }}
    >
      {/* Header bar */}
      <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: "1px solid var(--color-border)" }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--color-accent-muted)", opacity: 0.5 }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--color-border)" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--color-border)" }} />
        <div className="flex-1" />
        <div className="h-2 w-20 rounded" style={{ backgroundColor: "var(--color-border)" }} />
      </div>
      {children}
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg px-3 py-2.5 text-center" style={{ backgroundColor: "var(--color-surface-raised)" }}>
      <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-mono)" }}>{value}</p>
      <p className="mt-0.5" style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>{label}</p>
    </div>
  );
}

function TableRow({ cells, isLast }: { cells: React.ReactNode[]; isLast?: boolean }) {
  return (
    <div
      className="flex items-center justify-between px-3 py-2"
      style={{ borderBottom: isLast ? "none" : "1px solid var(--color-border)" }}
    >
      {cells.map((cell, i) => (
        <span key={i} className="text-xs" style={{ color: i === 0 ? "var(--color-text-secondary)" : "var(--color-text-muted)", fontFamily: i > 0 ? "var(--font-mono)" : undefined }}>
          {cell}
        </span>
      ))}
    </div>
  );
}

function Badge({ text, variant = "default" }: { text: string; variant?: "default" | "success" | "warning" | "danger" }) {
  const colors = {
    default: { bg: "var(--color-accent-glow)", color: "var(--color-accent)" },
    success: { bg: "rgba(34,197,94,0.15)", color: "var(--color-accent)" },
    warning: { bg: "rgba(100,116,139,0.15)", color: "var(--color-text-muted)" },
    danger: { bg: "rgba(100,116,139,0.15)", color: "var(--color-text-muted)" },
  };
  const c = colors[variant];
  return (
    <span className="inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: c.bg, color: c.color }}>
      {text}
    </span>
  );
}

/* ─── CRC Mockup ─── */
function CRCMockup() {
  return (
    <MockupShell>
      {/* Risk gauge */}
      <div className="flex items-center justify-center mb-4">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" strokeWidth="6" style={{ stroke: "var(--color-border)" }} />
            <circle cx="50" cy="50" r="40" fill="none" strokeWidth="6" strokeLinecap="round" strokeDasharray={`${87 * 2.51} ${251 - 87 * 2.51}`} style={{ stroke: "var(--color-accent)" }} />
          </svg>
          <span className="text-lg font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}>87</span>
        </div>
      </div>
      {/* Status badges */}
      <div className="flex justify-center gap-2 mb-4">
        <Badge text="Low Risk" variant="success" />
        <Badge text="All Clear" variant="success" />
      </div>
      {/* Table */}
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
        <div className="px-3 py-1.5" style={{ backgroundColor: "var(--color-surface-raised)" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Recent Screenings</span>
        </div>
        <TableRow cells={["Apex Holdings", "Low", "Cleared"]} />
        <TableRow cells={["Quantum Finance", "Med", "Review"]} />
        <TableRow cells={["Nova Trading", "High", "Flagged"]} isLast />
      </div>
    </MockupShell>
  );
}

/* ─── Momentum Pay Mockup ─── */
function MomentumPayMockup() {
  return (
    <MockupShell>
      {/* Balance card */}
      <div className="rounded-lg px-4 py-3 mb-4" style={{ backgroundColor: "var(--color-surface-raised)" }}>
        <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Total Balance</p>
        <p className="text-xl font-bold" style={{ fontFamily: "var(--font-mono)" }}>$1,284,930</p>
      </div>
      {/* Bar chart */}
      <div className="flex items-end gap-1.5 h-16 mb-4 px-2">
        {[40, 65, 55, 80, 70, 90, 75].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              backgroundColor: i === 5 ? "var(--color-accent)" : "var(--color-border)",
            }}
          />
        ))}
      </div>
      {/* Payments table */}
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
        <div className="px-3 py-1.5" style={{ backgroundColor: "var(--color-surface-raised)" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Recent Payments</span>
        </div>
        <TableRow cells={["TechFlow Inc", "$12,400", "USD"]} />
        <TableRow cells={["Berlin Motors", "\u20AC8,750", "EUR"]} />
        <TableRow cells={["Dubai Retail", "$23,100", "AED"]} isLast />
      </div>
    </MockupShell>
  );
}

/* ─── Fare Collection Mockup ─── */
function FareCollectionMockup() {
  return (
    <MockupShell>
      {/* Ridership counter */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <MetricCard label="Rides Today" value="48,293" />
        <MetricCard label="Active Routes" value="24" />
        <MetricCard label="Revenue" value="$115K" />
      </div>
      {/* Route table */}
      <div className="rounded-lg overflow-hidden mb-4" style={{ border: "1px solid var(--color-border)" }}>
        <div className="px-3 py-1.5" style={{ backgroundColor: "var(--color-surface-raised)" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Routes</span>
        </div>
        <TableRow cells={["Metro Line A", "12,847", "$30.8K"]} />
        <TableRow cells={["Bus Route 42", "8,291", "$19.9K"]} />
        <TableRow cells={["Express Rail B", "15,104", "$36.3K"]} isLast />
      </div>
      {/* Payment badges */}
      <div className="flex gap-2">
        <Badge text="NFC" />
        <Badge text="QR" />
        <Badge text="Smart Card" />
      </div>
    </MockupShell>
  );
}

/* ─── CSD Mockup ─── */
function CSDMockup() {
  return (
    <MockupShell>
      {/* Sprint progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>Sprint 14</span>
          <span className="text-xs font-semibold" style={{ fontFamily: "var(--font-mono)" }}>73%</span>
        </div>
        <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: "var(--color-border)" }}>
          <div className="h-full rounded-full" style={{ width: "73%", backgroundColor: "var(--color-accent)" }} />
        </div>
      </div>
      {/* Features */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <MetricCard label="Shipped" value="47" />
        <MetricCard label="Tests Pass" value="98.2%" />
        <MetricCard label="Deploys" value="24" />
      </div>
      {/* Activity log */}
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
        <div className="px-3 py-1.5" style={{ backgroundColor: "var(--color-surface-raised)" }}>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>Activity</span>
        </div>
        {[
          { action: "Deployed auth-service v2.4.1", time: "2m ago" },
          { action: "Merged PR #847 \u2014 Rate limiter", time: "14m ago" },
          { action: "Deployed payment-gw v3.1.0", time: "38m ago" },
        ].map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-2"
            style={{ borderBottom: i < 2 ? "1px solid var(--color-border)" : "none" }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--color-accent)" }} />
            <span className="text-xs truncate" style={{ color: "var(--color-text-secondary)" }}>{a.action}</span>
            <span className="text-xs ml-auto shrink-0" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}>{a.time}</span>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

/* ─── Product Data ─── */
const products = [
  {
    name: "CRC",
    subtitle: "Compliance Risk Control",
    description: "Automated KYC, AML screening, and regulatory reporting in one dashboard.",
    bullets: ["Real-time transaction monitoring", "Configurable risk scoring engine"],
    link: "/crc",
    mockup: <CRCMockup />,
  },
  {
    name: "Momentum Pay",
    subtitle: "Payment Processing",
    description: "Multi-currency settlement with instant reconciliation.",
    bullets: ["Real-time processing across 40+ currencies", "Merchant analytics and fraud detection"],
    link: "/momentumpay",
    mockup: <MomentumPayMockup />,
  },
  {
    name: "Fare Collection",
    subtitle: "Transit Fare Systems",
    description: "Contactless payments for modern transit networks.",
    bullets: ["NFC, QR, and smart card support", "Route-level revenue analytics"],
    link: "/farecollection",
    mockup: <FareCollectionMockup />,
  },
  {
    name: "CSD",
    subtitle: "Custom Software",
    description: "Full-cycle engineering for financial systems.",
    bullets: ["Cloud-native architecture from day one", "Dedicated teams with fintech domain expertise"],
    link: "/csd",
    mockup: <CSDMockup />,
  },
];

/* ─── Main Component ─── */
export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <p
            className="text-center uppercase"
            style={{
              fontSize: "var(--text-xs)",
              letterSpacing: "0.15em",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            PRODUCTS
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.05}>
          <h2
            className="text-4xl font-bold tracking-tight text-center mt-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Four products. One platform.
          </h2>
        </ScrollAnimation>

        {products.map((product, index) => {
          const isOdd = index % 2 === 0; // 0-indexed: first (0) is "odd" row visually
          return (
            <div
              key={product.name}
              className={index > 0 ? "py-24" : "pt-24"}
              style={index > 0 ? { borderTop: "1px solid var(--color-border-subtle)" } : undefined}
            >
              <ScrollAnimation>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Text side */}
                  <div className={!isOdd ? "lg:order-last" : ""}>
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {product.name}
                      <span
                        className="block text-base font-normal mt-1"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {product.subtitle}
                      </span>
                    </h3>
                    <p
                      className="text-base mt-4"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {product.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {product.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ backgroundColor: "var(--color-accent)" }}
                          />
                          <span style={{ color: "var(--color-text-secondary)" }}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={product.link}
                      className="mt-6 inline-flex items-center gap-1 font-medium transition-colors duration-200"
                      style={{ color: "var(--color-accent)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-accent-hover)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-accent)"; }}
                    >
                      Learn more
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>

                  {/* Mockup side */}
                  <div className={!isOdd ? "lg:order-first" : ""}>
                    {product.mockup}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          );
        })}
      </div>
    </section>
  );
}
