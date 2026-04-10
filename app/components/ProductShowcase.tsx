"use client";

import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

function MockupShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-6 overflow-hidden" style={{ border: "1px solid #2a2a2a", backgroundColor: "#1a1a1a", boxShadow: "0 0 40px rgba(106,191,75,0.06)" }}>
      <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: "1px solid #2a2a2a" }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#6abf4b", opacity: 0.5 }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#333" }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#333" }} />
        <div className="flex-1" />
        <div className="h-2 w-20 rounded" style={{ backgroundColor: "#2a2a2a" }} />
      </div>
      {children}
    </div>
  );
}

function Badge({ text, variant = "green" }: { text: string; variant?: "green" | "gray" | "amber" | "red" }) {
  const styles = {
    green: { backgroundColor: "rgba(106,191,75,0.15)", color: "#6abf4b" },
    gray: { backgroundColor: "rgba(102,102,102,0.15)", color: "#888888" },
    amber: { backgroundColor: "rgba(245,158,11,0.15)", color: "#f59e0b" },
    red: { backgroundColor: "rgba(239,68,68,0.15)", color: "#ef4444" },
  };
  return (
    <span className="inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold" style={styles[variant]}>
      {text}
    </span>
  );
}

function CRCMockup() {
  return (
    <MockupShell>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { value: "1,847", label: "Screened" },
          { value: "23", label: "Flagged" },
          { value: "1,824", label: "Cleared" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg px-3 py-2.5 text-center" style={{ backgroundColor: "#141414" }}>
            <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{s.value}</p>
            <p style={{ fontSize: "13px", color: "#888888" }} className="mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #2a2a2a" }}>
        <div className="grid grid-cols-4 px-3 py-1.5" style={{ backgroundColor: "#141414" }}>
          {["Client", "Score", "Risk", "Flag"].map((h) => (
            <span key={h} style={{ fontSize: "13px", color: "#888888", fontFamily: "var(--font-mono)" }}>{h}</span>
          ))}
        </div>
        {[
          { client: "Apex Holdings", score: "92", risk: "Low", riskVariant: "green" as const, flag: "None" },
          { client: "Quantum Finance", score: "54", risk: "Med", riskVariant: "amber" as const, flag: "PEP" },
          { client: "Nova Trading", score: "28", risk: "High", riskVariant: "red" as const, flag: "Sanctions" },
          { client: "DeltaCorp", score: "87", risk: "Low", riskVariant: "green" as const, flag: "None" },
        ].map((row, i) => (
          <div key={row.client} className="grid grid-cols-4 px-3 py-2" style={{ borderBottom: i < 3 ? "1px solid #2a2a2a" : "none" }}>
            <span className="text-xs" style={{ color: "#b8b8b8" }}>{row.client}</span>
            <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{row.score}</span>
            <span><Badge text={row.risk} variant={row.riskVariant} /></span>
            <span className="text-xs" style={{ color: "#888888" }}>{row.flag}</span>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

function MomentumPayMockup() {
  return (
    <MockupShell>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { value: "$1.28M", label: "Volume", sub: "24h" },
          { value: "99.7%", label: "Success" },
          { value: "0.8s", label: "Avg Time" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg px-3 py-2.5 text-center" style={{ backgroundColor: "#141414" }}>
            <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{s.value}</p>
            <p style={{ fontSize: "13px", color: "#888888" }} className="mt-0.5">{s.label}{s.sub && <span> / {s.sub}</span>}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #2a2a2a" }}>
        <div className="grid grid-cols-4 px-3 py-1.5" style={{ backgroundColor: "#141414" }}>
          {["Recipient", "Amount", "CCY", "Status"].map((h) => (
            <span key={h} style={{ fontSize: "13px", color: "#888888", fontFamily: "var(--font-mono)" }}>{h}</span>
          ))}
        </div>
        {[
          { recipient: "TechFlow Inc", amount: "$12,400", ccy: "USD", status: "Settled", variant: "green" as const },
          { recipient: "Berlin Motors", amount: "EUR8,750", ccy: "EUR", status: "Settled", variant: "green" as const },
          { recipient: "Dubai Retail", amount: "AED 84K", ccy: "AED", status: "Processing", variant: "gray" as const },
          { recipient: "Yandex Go", amount: "RUB2.1M", ccy: "RUB", status: "Settled", variant: "green" as const },
        ].map((row, i) => (
          <div key={row.recipient} className="grid grid-cols-4 px-3 py-2" style={{ borderBottom: i < 3 ? "1px solid #2a2a2a" : "none" }}>
            <span className="text-xs" style={{ color: "#b8b8b8" }}>{row.recipient}</span>
            <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{row.amount}</span>
            <span className="text-xs" style={{ color: "#888888" }}>{row.ccy}</span>
            <span><Badge text={row.status} variant={row.variant} /></span>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

function FareCollectionMockup() {
  return (
    <MockupShell>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { value: "48,293", label: "Rides Today" },
          { value: "24", label: "Routes" },
          { value: "$115K", label: "Revenue" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg px-3 py-2.5 text-center" style={{ backgroundColor: "#141414" }}>
            <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{s.value}</p>
            <p style={{ fontSize: "13px", color: "#888888" }} className="mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden mb-4" style={{ border: "1px solid #2a2a2a" }}>
        <div className="grid grid-cols-4 px-3 py-1.5" style={{ backgroundColor: "#141414" }}>
          {["Route", "Rides", "Revenue", "Load"].map((h) => (
            <span key={h} style={{ fontSize: "13px", color: "#888888", fontFamily: "var(--font-mono)" }}>{h}</span>
          ))}
        </div>
        {[
          { route: "Metro Line A", rides: "12,847", revenue: "$30.8K", load: "94%" },
          { route: "Bus Route 42", rides: "8,291", revenue: "$19.9K", load: "71%" },
          { route: "Express Rail B", rides: "15,104", revenue: "$36.3K", load: "88%" },
          { route: "Tram Line 7", rides: "6,430", revenue: "$15.4K", load: "62%" },
        ].map((row, i) => (
          <div key={row.route} className="grid grid-cols-4 px-3 py-2" style={{ borderBottom: i < 3 ? "1px solid #2a2a2a" : "none" }}>
            <span className="text-xs" style={{ color: "#b8b8b8" }}>{row.route}</span>
            <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{row.rides}</span>
            <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{row.revenue}</span>
            <span><Badge text={row.load} variant="green" /></span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Badge text="NFC" variant="gray" />
        <Badge text="QR" variant="green" />
        <Badge text="Smart Card" variant="green" />
        <Badge text="Cash" variant="gray" />
      </div>
    </MockupShell>
  );
}

function CSDMockup() {
  return (
    <MockupShell>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs" style={{ color: "#b8b8b8" }}>Sprint 14 -- Payment Gateway</span>
          <span className="text-xs font-semibold" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>73%</span>
        </div>
        <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#2a2a2a" }}>
          <div className="h-full rounded-full" style={{ width: "73%", backgroundColor: "#6abf4b" }} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { value: "47", label: "Shipped" },
          { value: "98.2%", label: "Tests" },
          { value: "24", label: "Deploys" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg px-3 py-2.5 text-center" style={{ backgroundColor: "#141414" }}>
            <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{s.value}</p>
            <p style={{ fontSize: "13px", color: "#888888" }} className="mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #2a2a2a" }}>
        <div className="grid grid-cols-4 px-3 py-1.5" style={{ backgroundColor: "#141414" }}>
          {["Task", "Owner", "Status", "ETA"].map((h) => (
            <span key={h} style={{ fontSize: "13px", color: "#888888", fontFamily: "var(--font-mono)" }}>{h}</span>
          ))}
        </div>
        {[
          { task: "Auth service v2.4", owner: "AK", status: "Deployed", variant: "green" as const, eta: "Done" },
          { task: "Rate limiter", owner: "VR", status: "In Review", variant: "gray" as const, eta: "Apr 2" },
          { task: "Settlement engine", owner: "NK", status: "In Dev", variant: "gray" as const, eta: "Apr 5" },
          { task: "Load testing", owner: "AK", status: "Queued", variant: "gray" as const, eta: "Apr 7" },
        ].map((row, i) => (
          <div key={row.task} className="grid grid-cols-4 px-3 py-2" style={{ borderBottom: i < 3 ? "1px solid #2a2a2a" : "none" }}>
            <span className="text-xs" style={{ color: "#b8b8b8" }}>{row.task}</span>
            <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{row.owner}</span>
            <span><Badge text={row.status} variant={row.variant} /></span>
            <span className="text-xs" style={{ color: "#888888" }}>{row.eta}</span>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

const products = [
  {
    name: "CRC",
    subtitle: "Compliance Risk Control",
    description: "Automate compliance. Reduce risk. Stay ahead of regulation.",
    intro: "CRC is a compliance risk management platform that automates screening, monitoring, and reporting for regulated financial institutions. It connects to 50+ data sources to deliver real-time risk intelligence and audit-ready documentation.",
    bullets: ["Real-time transaction monitoring", "Configurable risk scoring engine"],
    link: "/crc",
    mockup: <CRCMockup />,
  },
  {
    name: "Momentum Pay",
    subtitle: "Payment Processing",
    description: "Instant contractor payments at scale. Multi-currency. Fraud-resistant.",
    intro: "Momentum Pay is a payment processing engine built for high-volume contractor and supplier payouts. It handles multi-currency settlement, fraud detection, and reconciliation in a single integrated platform.",
    bullets: ["Real-time settlement in 50+ currencies", "ML-powered fraud scoring on every transaction"],
    link: "/momentumpay",
    mockup: <MomentumPayMockup />,
  },
  {
    name: "Fare Collection",
    subtitle: "Transit Fare Systems",
    description: "End-to-end automated fare collection for public transport networks.",
    intro: "Fare Collection is an automated fare management system for public transport operators and municipalities. It supports contactless payments, route-level analytics, and real-time revenue tracking across entire transit networks.",
    bullets: ["NFC, QR, and smart card acceptance", "Route-level revenue analytics"],
    link: "/farecollection",
    mockup: <FareCollectionMockup />,
  },
  {
    name: "CSD",
    subtitle: "Custom Software",
    description: "Full-cycle software development for financial and enterprise clients.",
    intro: "CSD is a custom software development service for banks, PSPs, and enterprise financial clients. Dedicated engineering teams deliver cloud-native solutions from architecture design through production deployment.",
    bullets: ["Cloud-native architecture from day one", "Dedicated engineering teams with fintech expertise"],
    link: "/csd",
    mockup: <CSDMockup />,
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 lg:py-32 border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#0f0f0f" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <p className="text-center uppercase" style={{ fontSize: "13px", letterSpacing: "0.25em", fontWeight: 500, color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
            Products
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.05}>
          <h2 className="text-center mt-4" style={{ fontSize: "52px", fontWeight: 700, fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Product Suite
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <p className="mt-3 text-center" style={{ fontSize: "18px", lineHeight: 1.8, color: "#b8b8b8" }}>
            Four products, one platform.
          </p>
        </ScrollAnimation>

        {products.map((product, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div
              key={product.name}
              className={index > 0 ? "py-16 lg:py-24" : "pt-16 lg:pt-24"}
              style={index > 0 ? { borderTop: "1px solid #2a2a2a" } : undefined}
            >
              <ScrollAnimation>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={!isOdd ? "lg:order-last" : ""}>
                    <h3 className="text-5xl lg:text-6xl" style={{ fontWeight: 700, fontFamily: "var(--font-display)", color: "#ffffff" }}>
                      {product.name}
                      <span className="block font-normal mt-1" style={{ fontSize: "16px", color: "#888888" }}>
                        {product.subtitle}
                      </span>
                    </h3>
                    <p className="mt-4" style={{ fontSize: "17px", lineHeight: 1.8, color: "#b8b8b8" }}>
                      {product.description}
                    </p>
                    <p className="mt-3" style={{ fontSize: "17px", lineHeight: 1.8, color: "#b8b8b8" }}>
                      {product.intro}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {product.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#6abf4b" }} />
                          <span style={{ fontSize: "16px", lineHeight: 1.8, color: "#b8b8b8" }}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={product.link} className="group/btn mt-6 inline-flex items-center gap-2 rounded-[6px] border border-[#6abf4b] text-[#6abf4b] hover:bg-[#6abf4b] hover:text-black transition-colors duration-200" style={{ padding: "10px 20px", fontSize: "15px", fontWeight: 600 }}>
                      Learn more <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
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
