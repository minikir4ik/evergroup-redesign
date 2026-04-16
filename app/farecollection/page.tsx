import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import ScrollAnimation from "../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Fare Collection — Transit Fare Systems | EVERGROUP",
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
    icon: <Icon d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />,
    title: "Contactless Payments",
    description:
      "Accept NFC, QR codes, smart cards, and mobile wallets with fast tap-to-go processing.",
  },
  {
    icon: <Icon d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L21.75 16.5 12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />,
    title: "Multi-modal Support",
    description:
      "A single platform for buses, metros, trams, ferries, and ride-share across every mode.",
  },
  {
    icon: <Icon d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" />,
    title: "Real-time Reconciliation",
    description:
      "Every transaction is matched, settled, and auditable within seconds. No end-of-day batch runs.",
  },
  {
    icon: <Icon d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z M6 6h.008v.008H6V6z" />,
    title: "Flexible Fare Rules",
    description:
      "Time-of-day, zone-based, and capped fare rules that adjust automatically to optimize ridership.",
  },
  {
    icon: <Icon d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />,
    title: "Analytics Dashboard",
    description:
      "Ridership heatmaps, peak-hour modeling, and origin-destination analysis for planning decisions.",
  },
  {
    icon: <Icon d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875S10.5 3.09 10.5 4.125c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.421 48.421 0 01-4.185-.428.64.64 0 00-.74.528v0c-.09.57.36 1.048.938 1.107 1.385.142 2.787.213 4.194.213s2.809-.071 4.194-.213c.578-.06 1.028-.537.938-1.107v0a.64.64 0 00-.74-.528 48.421 48.421 0 01-4.185.428.64.64 0 01-.657-.643v0z" />,
    title: "System Integration",
    description:
      "Open APIs, GTFS feeds, and webhook events that plug into your existing ERP and BI stack.",
  },
];

/* ── Steps ── */
const steps = [
  {
    title: "Deploy Hardware",
    description:
      "Install validators and readers across your fleet in days, not months.",
  },
  {
    title: "Configure Routes",
    description:
      "Set up zones and fare rules through the management console.",
  },
  {
    title: "Collect Fares",
    description:
      "Passengers pay with any contactless method. Every fare is validated and settled in real time.",
  },
  {
    title: "Analyze Performance",
    description:
      "Analytics dashboards surface insights that drive network improvements and revenue optimization.",
  },
];

/* ── Route data ── */
const routes = [
  { route: "Samarkand", ridership: "Active", revenue: "NFC + Cards", status: "Active" },
  { route: "Ferghana", ridership: "Active", revenue: "NFC + Cards", status: "Active" },
  { route: "Vinnitsa", ridership: "Active", revenue: "Cards + Cash", status: "Active" },
];

const paymentMethods = ["NFC", "QR Code", "Smart Card", "Mobile Pay"];

/* ── Mockup ── */
const mockup = (
  <div style={{ fontFamily: "var(--font-body)" }}>
    {/* Key metric */}
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div
        className="text-3xl font-bold"
        style={{ fontFamily: "var(--font-mono)", lineHeight: 1.2 }}
      >
        +25%
      </div>
      <div
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--color-text-secondary)",
          marginTop: "2px",
        }}
      >
        Profit Increase for Transport Enterprises
      </div>
      <span
        style={{
          fontSize: "var(--text-xs)",
          color: "var(--color-accent)",
          fontWeight: 500,
        }}
      >
        Revenue growth + cost reduction
      </span>
    </div>

    {/* 3 stat cards */}
    <div
      className="grid grid-cols-3 gap-3"
      style={{ marginBottom: "var(--space-6)" }}
    >
      {[
        { label: "Cities Live", value: "3" },
        { label: "Payment Types", value: "4" },
        { label: "Partners", value: "NXP, Infineon" },
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

    {/* Route performance table */}
    <div className="overflow-x-auto" style={{ marginBottom: "var(--space-6)" }}>
      <table className="w-full" style={{ fontSize: "var(--text-xs)" }}>
        <thead>
          <tr
            style={{
              borderBottom: "1px solid var(--color-border)",
              color: "var(--color-text-muted)",
            }}
          >
            <th className="text-left pb-2 pr-4 font-medium">City</th>
            <th className="text-left pb-2 pr-4 font-medium">Network</th>
            <th className="text-left pb-2 pr-4 font-medium">Payments</th>
            <th className="text-left pb-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((r) => (
            <tr
              key={r.route}
              style={{
                borderBottom: "1px solid var(--color-border-subtle)",
              }}
            >
              <td
                className="py-2 pr-4"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-text)",
                }}
              >
                {r.route}
              </td>
              <td className="py-2 pr-4" style={{ color: "var(--color-text)" }}>
                {r.ridership}
              </td>
              <td className="py-2 pr-4" style={{ color: "var(--color-text)" }}>
                {r.revenue}
              </td>
              <td className="py-2">
                <span
                  style={{
                    color: r.status === "Active" ? "var(--color-accent)" : "var(--color-text-muted)",
                    fontWeight: 500,
                  }}
                >
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Payment method badges */}
    <div className="flex flex-wrap" style={{ gap: "var(--space-2)" }}>
      {paymentMethods.map((method) => (
        <span
          key={method}
          className="rounded-full"
          style={{
            padding: "var(--space-1) var(--space-3)",
            fontSize: "var(--text-xs)",
            fontWeight: 500,
            backgroundColor: "var(--color-surface-raised)",
            color: "var(--color-text-secondary)",
          }}
        >
          {method}
        </span>
      ))}
    </div>
  </div>
);

export default function FareCollectionPage() {
  return (
    <ProductPageLayout
      name="Fare Collection"
      tagline="Automatic fare collection system is not just electronic or non-cash payment. This is 100% automated payment accounting with instant data transfer to the system."
      breadcrumb="Fare Collection"
      mockup={mockup}
      features={features}
      steps={steps}
    >
      {/* Section 1 — System Stands Out */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Advantages
            </p>
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              System stands out for being
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Simple", description: "No additional equipment installation required" },
              { title: "Profitable", description: "No obligatory supplier payments" },
              { title: "Independent", description: "Turnkey implementation and support provided" },
              { title: "Centralized", description: "Single server for all passenger payment types" },
              { title: "Convenient", description: "Passenger receives ticket showing balance, time, and fare" },
              { title: "Flexible", description: "Accounting system adjustable for specific conditions" },
            ].map((item) => (
              <ScrollAnimation key={item.title}>
                <div className="rounded-lg" style={{ border: "1px solid var(--color-border)", padding: "var(--space-6)" }}>
                  <h3 className="font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)" }}>{item.title}</h3>
                  <p className="text-sm mt-2" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Deployments */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Deployments
            </p>
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Live implementations
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              { city: "Samarkand, Uzbekistan", description: "Simplified fare collection with TezCard partnership" },
              { city: "Ferghana, Uzbekistan", description: "Upgraded system following Samarkand success" },
              { city: "Vinnitsa, Ukraine", description: "Equipped all trams, trolleybuses, and buses with validators. Issued citizen card." },
              { city: "Kokshetau, Kazakhstan", description: "Revenue enabled municipal subsidies and bus fleet renovation" },
            ].map((item) => (
              <ScrollAnimation key={item.city}>
                <div className="rounded-lg" style={{ border: "1px solid var(--color-border)", padding: "var(--space-6)" }}>
                  <h3 className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>{item.city}</h3>
                  <p className="text-sm mt-2" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Implementation Timeline */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Timeline
            </p>
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              What to expect after purchase
            </h2>
          </ScrollAnimation>
          <div className="mt-12" style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
            {[
              { time: "Start", title: "Processing Center", description: "Organization of processing center" },
              { time: "1 month", title: "Vehicle Equipping", description: "Equipping vehicles with validators and readers" },
              { time: "2 months", title: "System Issuance", description: "System issue and cards replenishment organization" },
              { time: "3 months", title: "Launch", description: "Setup, commissioning, and trial operation" },
            ].map((item) => (
              <ScrollAnimation key={item.time}>
                <div className="flex items-start" style={{ gap: "var(--space-4)" }}>
                  <span className="shrink-0 rounded-full font-medium" style={{ padding: "var(--space-1) var(--space-3)", fontSize: "var(--text-xs)", fontFamily: "var(--font-mono)", backgroundColor: "var(--color-surface-raised)", color: "var(--color-accent)", whiteSpace: "nowrap" }}>{item.time}</span>
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

      {/* Section 4 — Guarantees */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollAnimation>
              <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
                Guarantee
              </p>
              <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                We guarantee
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <ul style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                {[
                  "System implementation in 2-3 months",
                  "System maintenance services",
                  "Consultations at each stage toward successful results",
                ].map((item) => (
                  <li key={item} className="flex items-start" style={{ gap: "var(--space-3)" }}>
                    <span className="mt-2 shrink-0" style={{ width: "6px", height: "6px", borderRadius: "100px", backgroundColor: "var(--color-accent)" }} />
                    <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--text-sm)", lineHeight: 1.65 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Section 5 — Target Audience */}
      <section className="py-24 border-t" style={{ borderColor: "var(--color-border-subtle)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <p className="text-xs uppercase mb-3" style={{ letterSpacing: "0.15em", color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>
              Audience
            </p>
            <h2 className="text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Who benefits
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Transport Enterprises", description: "Increase profits by reducing revenue collection costs and organizing accurate payment accounting without data loss." },
              { title: "Administration", description: "Release additional budget funds, improve service quality, and maintain control over enterprise income." },
              { title: "Regional Integrators", description: "Sell wider range of services including passenger accounting and provide statistics for scheduling and tariff management." },
            ].map((item) => (
              <ScrollAnimation key={item.title}>
                <div className="rounded-lg" style={{ border: "1px solid var(--color-border)", padding: "var(--space-8)" }}>
                  <h3 className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="text-sm mt-3" style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
