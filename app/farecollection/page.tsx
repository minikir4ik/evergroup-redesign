import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";

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
      "Accept NFC, QR codes, smart cards, and mobile wallets with sub-second tap-to-go processing.",
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
    title: "Dynamic Pricing",
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
      "Set up zones, fare rules, and dynamic pricing policies through the management console.",
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
  { route: "R-101", ridership: "12,481", revenue: "$29,954", status: "Active" },
  { route: "R-205", ridership: "9,832", revenue: "$23,597", status: "Active" },
  { route: "R-042", ridership: "7,209", revenue: "$17,302", status: "Delayed" },
  { route: "R-310", ridership: "6,144", revenue: "$14,746", status: "Active" },
];

const paymentMethods = ["NFC", "QR Code", "Smart Card", "Mobile Pay"];

/* ── Mockup ── */
const mockup = (
  <div style={{ fontFamily: "var(--font-body)" }}>
    {/* Big number */}
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div
        className="text-3xl font-bold"
        style={{ fontFamily: "var(--font-mono)", lineHeight: 1.2 }}
      >
        48,293
      </div>
      <div
        style={{
          fontSize: "var(--text-sm)",
          color: "var(--color-text-secondary)",
          marginTop: "2px",
        }}
      >
        Today&apos;s Ridership
      </div>
      <span
        style={{
          fontSize: "var(--text-xs)",
          color: "#22c55e",
          fontWeight: 500,
        }}
      >
        +8.2% vs last week
      </span>
    </div>

    {/* 3 stat cards */}
    <div
      className="grid grid-cols-3 gap-3"
      style={{ marginBottom: "var(--space-6)" }}
    >
      {[
        { label: "Revenue", value: "$142,847" },
        { label: "Routes Active", value: "24" },
        { label: "On-time", value: "96.3%" },
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
            <th className="text-left pb-2 pr-4 font-medium">Route</th>
            <th className="text-left pb-2 pr-4 font-medium">Ridership</th>
            <th className="text-left pb-2 pr-4 font-medium">Revenue</th>
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
                    color: r.status === "Active" ? "#22c55e" : "#f59e0b",
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
      tagline="Contactless payment systems for modern transit networks."
      breadcrumb="Fare Collection"
      mockup={mockup}
      features={features}
      steps={steps}
    />
  );
}
