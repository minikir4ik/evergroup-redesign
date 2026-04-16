import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import ScrollAnimation from "../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Momentum Pay — Payment Processing | EVERGROUP",
};

/* ── Icon helper ── */
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
    icon: <Icon d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
    title: "Real-time Processing",
    description:
      "Process payments with fast confirmation times and high-availability architecture.",
  },
  {
    icon: <Icon d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />,
    title: "Multi-currency",
    description:
      "Accept and settle in 50+ currencies with automatic FX conversion and competitive rates.",
  },
  {
    icon: <Icon d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
    title: "Instant Settlement",
    description:
      "Funds arrive in merchant accounts quickly with streamlined settlement processing.",
  },
  {
    icon: <Icon d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />,
    title: "Merchant Analytics",
    description:
      "Real-time dashboards with revenue trends, conversion rates, and customer behavior insights.",
  },
  {
    icon: <Icon d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.572-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />,
    title: "Fraud Detection",
    description:
      "ML-powered fraud scoring on every transaction with configurable rules and real-time alerts.",
  },
  {
    icon: <Icon d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />,
    title: "API-first",
    description:
      "RESTful APIs with SDKs for every major platform. Straightforward integration process.",
  },
];

/* ── Steps ── */
const steps = [
  {
    title: "Integrate API",
    description:
      "Connect your platform using our SDKs and RESTful endpoints. Full sandbox environment included.",
  },
  {
    title: "Configure Currencies",
    description:
      "Set up your supported currencies, FX rules, and settlement preferences in minutes.",
  },
  {
    title: "Process Payments",
    description:
      "Start accepting cards, wallets, and bank transfers across 50+ currencies worldwide.",
  },
  {
    title: "Reconcile Instantly",
    description:
      "Transactions are authorized, cleared, and settled to your account in real time.",
  },
];

/* ── Payment data ── */
const recentPayments = [
  { merchant: "Taxi Aggregator", amount: "Instant", currency: "USD", status: "Settled" },
  { merchant: "Delivery Platform", amount: "Instant", currency: "EUR", status: "Settled" },
  { merchant: "Ride-Share Network", amount: "Instant", currency: "GBP", status: "Pending" },
  { merchant: "Cleaning Service", amount: "Instant", currency: "AED", status: "Settled" },
];

const barHeights = [40, 65, 50, 85, 55, 95, 70];

function currencyColor(c: string) {
  if (c === "USD") return "var(--color-accent)";
  if (c === "EUR") return "var(--color-accent)";
  if (c === "GBP") return "var(--color-text-muted)";
  return "var(--color-text-muted)";
}

function statusColor(s: string) {
  if (s === "Pending") return "var(--color-text-muted)";
  return "var(--color-accent)";
}

/* ── Mockup ── */
const mockup = (
  <div style={{ fontFamily: "var(--font-body)" }}>
    {/* Key metrics */}
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div
        className="text-3xl font-bold"
        style={{ fontFamily: "var(--font-mono)", lineHeight: 1.2 }}
      >
        100,000
      </div>
      <span
        style={{
          fontSize: "var(--text-xs)",
          color: "var(--color-accent)",
          fontWeight: 500,
        }}
      >
        Active drivers across 700+ taxi companies
      </span>
    </div>

    {/* 3 stat cards */}
    <div
      className="grid grid-cols-3 gap-3"
      style={{ marginBottom: "var(--space-6)" }}
    >
      {[
        { label: "Attract", value: "1.9x" },
        { label: "Retain", value: "-28%" },
        { label: "Motivate", value: "74%" },
      ].map((s) => (
        <div
          key={s.label}
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
            {s.label}
          </div>
          <div
            className="font-bold mt-1"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
            }}
          >
            {s.value}
          </div>
        </div>
      ))}
    </div>

    {/* Bar chart */}
    <div
      className="flex items-end"
      style={{
        gap: "var(--space-2)",
        height: "80px",
        marginBottom: "var(--space-6)",
      }}
    >
      {barHeights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${h}%`,
            backgroundColor:
              h === 95
                ? "var(--color-accent)"
                : "var(--color-surface-raised)",
            transition:
              "background-color var(--duration-base) var(--ease-smooth)",
          }}
        />
      ))}
    </div>

    {/* Recent payments table */}
    <div className="overflow-x-auto">
      <table className="w-full" style={{ fontSize: "var(--text-xs)" }}>
        <thead>
          <tr
            style={{
              borderBottom: "1px solid var(--color-border)",
              color: "var(--color-text-muted)",
            }}
          >
            <th className="text-left pb-2 pr-4 font-medium">Service Type</th>
            <th className="text-left pb-2 pr-4 font-medium">Payout</th>
            <th className="text-left pb-2 pr-4 font-medium">Currency</th>
            <th className="text-left pb-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentPayments.map((p) => (
            <tr
              key={p.merchant}
              style={{
                borderBottom: "1px solid var(--color-border-subtle)",
              }}
            >
              <td
                className="py-2 pr-4"
                style={{ color: "var(--color-text)" }}
              >
                {p.merchant}
              </td>
              <td
                className="py-2 pr-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text)",
                }}
              >
                {p.amount}
              </td>
              <td className="py-2 pr-4">
                <span
                  className="inline-block rounded-full"
                  style={{
                    padding: "1px 8px",
                    fontSize: "var(--text-xs)",
                    color: currencyColor(p.currency),
                    border: `1px solid ${currencyColor(p.currency)}33`,
                    backgroundColor: `${currencyColor(p.currency)}15`,
                  }}
                >
                  {p.currency}
                </span>
              </td>
              <td className="py-2">
                <span style={{ color: statusColor(p.status), fontWeight: 500 }}>
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function MomentumPayPage() {
  return (
    <ProductPageLayout
      name="Momentum Pay"
      tagline="Take care of your contractors and your business. Pay regular orders to a large number of contractors with fraud protection and instant settlement."
      breadcrumb="Momentum Pay"
      mockup={mockup}
      features={features}
      steps={steps}
    >
      {/* Impact Stats */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Impact
            </p>
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Proven results
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { value: "1.9x", label: "Attract", description: "People more likely to apply for daily pay jobs" },
              { value: "28%", label: "Retain", description: "Reduction in human turnover" },
              { value: "74%", label: "Motivate", description: "Users more motivated to come to work" },
            ].map((stat) => (
              <ScrollAnimation key={stat.label}>
                <div className="rounded-lg text-center" style={{ border: "1px solid var(--color-border)", padding: "var(--space-8)" }}>
                  <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}>{stat.value}</div>
                  <div className="font-semibold mt-2" style={{ fontFamily: "var(--font-display)" }}>{stat.label}</div>
                  <p className="text-sm mt-2" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{stat.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Who It Helps */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Use Cases
            </p>
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Who it helps
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              { title: "Service Aggregators", description: "Manage and provide immediate payments to contractors across taxi, cleaning, delivery, and other service categories." },
              { title: "Taxi Aggregators", description: "Find reliable drivers with fast payment infrastructure. Support sub-aggregator work with small taxi parks and individual drivers." },
            ].map((item) => (
              <ScrollAnimation key={item.title}>
                <div className="rounded-lg" style={{ border: "1px solid var(--color-border)", padding: "var(--space-8)" }}>
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="text-sm mt-3" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Current Network */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Network
            </p>
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Current network
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { value: "700", label: "Taxi companies" },
              { value: "100,000", label: "Active taxi drivers" },
              { value: "200", label: "Acquisition agents" },
              { value: "100+", label: "Market partners" },
            ].map((stat) => (
              <ScrollAnimation key={stat.label}>
                <div className="rounded-lg" style={{ border: "1px solid var(--color-border)", padding: "var(--space-6)" }}>
                  <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}>{stat.value}</div>
                  <div className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* How Momentum Works */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Workflow
            </p>
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              How Momentum works
            </h2>
          </ScrollAnimation>
          <div className="mt-12" style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
            {[
              { step: "01", title: "Sign Agreements", description: "Momentum signs agreements with taxi service aggregators. Contractors receive payments from Momentum while aggregators transfer payments to Momentum." },
              { step: "02", title: "Contractors Install App", description: "Contractors install the app to track orders, payment history, and transfer money to cards or e-wallets." },
              { step: "03", title: "Commission Model", description: "Momentum takes commission payments from taxi companies or contractors." },
            ].map((item) => (
              <ScrollAnimation key={item.step}>
                <div className="flex items-start" style={{ gap: "var(--space-4)" }}>
                  <span className="shrink-0 font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontSize: "var(--text-sm)" }}>{item.step}</span>
                  <div>
                    <h3 className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                    <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{item.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages for Drivers */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Benefits
            </p>
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Advantages for drivers
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              { title: "Earnings Available Sooner", description: "Your earnings are available to you sooner than next week's pay statement." },
              { title: "Send to Debit Card", description: "Most drivers and delivery partners can use Momentum once you complete your first trip. All you need is a debit card." },
              { title: "Instant Payments", description: "Get your earnings when you want them by cashing out instantly." },
              { title: "Automatic Fast Clearing", description: "Automatic and fast clearing of all payments without delays." },
            ].map((item) => (
              <ScrollAnimation key={item.title}>
                <div className="flex items-start" style={{ gap: "var(--space-3)" }}>
                  <span className="mt-2 shrink-0" style={{ width: "6px", height: "6px", borderRadius: "100px", backgroundColor: "var(--color-accent)" }} />
                  <div>
                    <h3 className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                    <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{item.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
