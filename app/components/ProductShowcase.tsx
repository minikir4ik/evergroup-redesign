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
    gray: { backgroundColor: "rgba(102,102,102,0.15)", color: "#777777" },
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
          { value: "50+", label: "Data Sources" },
          { value: "10", label: "Modules" },
          { value: "24/7", label: "Monitoring" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg px-3 py-2.5 text-center" style={{ backgroundColor: "#141414" }}>
            <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{s.value}</p>
            <p style={{ fontSize: "13px", color: "#777777" }} className="mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #2a2a2a" }}>
        <div className="grid grid-cols-3 px-3 py-1.5" style={{ backgroundColor: "#141414" }}>
          {["Module", "Type", "Status"].map((h) => (
            <span key={h} style={{ fontSize: "13px", color: "#777777", fontFamily: "var(--font-mono)" }}>{h}</span>
          ))}
        </div>
        {[
          { module: "KYC Module", type: "Verification", variant: "green" as const },
          { module: "Transaction Monitoring", type: "Screening", variant: "green" as const },
          { module: "AML/CFT Profile", type: "Compliance", variant: "amber" as const },
          { module: "Client Digital ID", type: "Identity", variant: "green" as const },
        ].map((row, i) => (
          <div key={row.module} className="grid grid-cols-3 px-3 py-2" style={{ borderBottom: i < 3 ? "1px solid #2a2a2a" : "none" }}>
            <span className="text-xs" style={{ color: "#999999" }}>{row.module}</span>
            <span className="text-xs" style={{ color: "#777777" }}>{row.type}</span>
            <span><Badge text="Active" variant={row.variant} /></span>
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
          { value: "1.9x", label: "Attract" },
          { value: "-28%", label: "Turnover" },
          { value: "74%", label: "Motivate" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg px-3 py-2.5 text-center" style={{ backgroundColor: "#141414" }}>
            <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{s.value}</p>
            <p style={{ fontSize: "13px", color: "#777777" }} className="mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #2a2a2a" }}>
        <div className="grid grid-cols-3 px-3 py-1.5" style={{ backgroundColor: "#141414" }}>
          {["Metric", "Value", "Status"].map((h) => (
            <span key={h} style={{ fontSize: "13px", color: "#777777", fontFamily: "var(--font-mono)" }}>{h}</span>
          ))}
        </div>
        {[
          { metric: "Taxi Companies", value: "700+", variant: "green" as const },
          { metric: "Active Drivers", value: "100,000", variant: "green" as const },
          { metric: "Fraud Detection", value: "Real-time", variant: "green" as const },
          { metric: "Contractor Support", value: "24/7", variant: "gray" as const },
        ].map((row, i) => (
          <div key={row.metric} className="grid grid-cols-3 px-3 py-2" style={{ borderBottom: i < 3 ? "1px solid #2a2a2a" : "none" }}>
            <span className="text-xs" style={{ color: "#999999" }}>{row.metric}</span>
            <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{row.value}</span>
            <span><Badge text="Active" variant={row.variant} /></span>
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
          { value: "+25%", label: "Profit Increase" },
          { value: "3", label: "Cities Live" },
          { value: "4", label: "Payment Types" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg px-3 py-2.5 text-center" style={{ backgroundColor: "#141414" }}>
            <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{s.value}</p>
            <p style={{ fontSize: "13px", color: "#777777" }} className="mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden mb-4" style={{ border: "1px solid #2a2a2a" }}>
        <div className="grid grid-cols-3 px-3 py-1.5" style={{ backgroundColor: "#141414" }}>
          {["Deployment", "Country", "Status"].map((h) => (
            <span key={h} style={{ fontSize: "13px", color: "#777777", fontFamily: "var(--font-mono)" }}>{h}</span>
          ))}
        </div>
        {[
          { city: "Samarkand", country: "Uzbekistan", variant: "green" as const },
          { city: "Ferghana", country: "Uzbekistan", variant: "green" as const },
          { city: "Vinnitsa", country: "Ukraine", variant: "green" as const },
        ].map((row, i) => (
          <div key={row.city} className="grid grid-cols-3 px-3 py-2" style={{ borderBottom: i < 2 ? "1px solid #2a2a2a" : "none" }}>
            <span className="text-xs" style={{ color: "#999999" }}>{row.city}</span>
            <span className="text-xs" style={{ color: "#777777" }}>{row.country}</span>
            <span><Badge text="Live" variant={row.variant} /></span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Badge text="NFC" variant="green" />
        <Badge text="Bank Cards" variant="green" />
        <Badge text="Transport Cards" variant="green" />
        <Badge text="Cash" variant="gray" />
      </div>
    </MockupShell>
  );
}

function CSDMockup() {
  return (
    <MockupShell>
      <div className="mb-4">
        <p className="text-xs mb-3" style={{ color: "#777777", fontFamily: "var(--font-mono)" }}>Tech Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {["C#/.NET", "Python", "iOS", "Android", "Flutter", "Vue.js", "React", "Azure"].map((tech) => (
            <span key={tech} className="inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium" style={{ backgroundColor: "#141414", color: "#999999", border: "1px solid #2a2a2a" }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { value: "10+", label: "Years" },
          { value: "IS360", label: "Framework" },
          { value: "Full", label: "Lifecycle" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg px-3 py-2.5 text-center" style={{ backgroundColor: "#141414" }}>
            <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{s.value}</p>
            <p style={{ fontSize: "13px", color: "#777777" }} className="mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #2a2a2a" }}>
        <div className="grid grid-cols-3 px-3 py-1.5" style={{ backgroundColor: "#141414" }}>
          {["Domain", "Stack", "Status"].map((h) => (
            <span key={h} style={{ fontSize: "13px", color: "#777777", fontFamily: "var(--font-mono)" }}>{h}</span>
          ))}
        </div>
        {[
          { domain: "BPM Systems", stack: "C#/.NET", variant: "green" as const },
          { domain: "AML Platforms", stack: "Python", variant: "green" as const },
          { domain: "Billing Engines", stack: "Azure", variant: "green" as const },
          { domain: "Mobile Apps", stack: "Flutter", variant: "gray" as const },
        ].map((row, i) => (
          <div key={row.domain} className="grid grid-cols-3 px-3 py-2" style={{ borderBottom: i < 3 ? "1px solid #2a2a2a" : "none" }}>
            <span className="text-xs" style={{ color: "#999999" }}>{row.domain}</span>
            <span className="text-xs" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{row.stack}</span>
            <span><Badge text="Active" variant={row.variant} /></span>
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
    intro: "CRC connects to 50+ government and public data sources and covers key compliance processes, including KYC, transaction monitoring, AML/CFT profiling, digital ID, and rule management.",
    bullets: ["50+ government and public data sources integrated", "Compliant with National Central Bank methodology"],
    link: "/crc",
    mockup: <CRCMockup />,
  },
  {
    name: "Momentum Pay",
    subtitle: "Payment Processing",
    description: "Fast contractor payments at scale. 700+ taxi companies. 100,000 active drivers.",
    intro: "Momentum Pay helps large platforms pay contractors faster, manage fraud risks, and support drivers on payment issues.",
    bullets: ["1.9x higher job application rate with daily pay", "28% reduction in contractor turnover"],
    link: "/momentumpay",
    mockup: <MomentumPayMockup />,
  },
  {
    name: "Fare Collection",
    subtitle: "Transit Fare Systems",
    description: "End-to-end automated fare collection for public transport networks.",
    intro: "Automated fare collection system for public transport. Supports NFC, bank cards, transport cards, and cash, with instant data transfer to the system.",
    bullets: ["NFC, bank cards, transport cards, and cash acceptance", "Turnkey implementation with +25% profit increase"],
    link: "/farecollection",
    mockup: <FareCollectionMockup />,
  },
  {
    name: "CSD",
    subtitle: "Custom Software",
    description: "Full-cycle software development for financial and enterprise clients.",
    intro: "Full-cycle software development for financial and enterprise clients. From architecture and development to testing, deployment, and long-term support.",
    bullets: ["Full lifecycle: architecture, development, testing, deployment", "Domain expertise in BPM, AML, and Billing systems"],
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
          <p className="mt-3 text-center max-w-3xl mx-auto" style={{ fontSize: "18px", lineHeight: 1.8, color: "#999999" }}>
            Four core offerings for finance, transport, and enterprise clients.
          </p>
        </ScrollAnimation>

        {products.map((product, index) => {
          const isOdd = index % 2 === 0;
          const isCSD = product.name === "CSD";
          return (
            <div key={product.name}>
              {isCSD && (
                <ScrollAnimation>
                  <div
                    className="mt-16 lg:mt-24 pt-16 lg:pt-24 text-center"
                    style={{ borderTop: "1px solid #2a2a2a" }}
                  >
                    <p
                      className="uppercase"
                      style={{
                        fontSize: "13px",
                        letterSpacing: "0.25em",
                        fontWeight: 500,
                        color: "#6abf4b",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      Engineering Services
                    </p>
                    <h2
                      className="mt-4"
                      style={{
                        fontSize: "52px",
                        fontWeight: 700,
                        fontFamily: "var(--font-display)",
                        color: "#ffffff",
                        lineHeight: 1.1,
                      }}
                    >
                      Custom Software Development
                    </h2>
                    <p
                      className="mt-4 max-w-2xl mx-auto"
                      style={{ fontSize: "18px", lineHeight: 1.8, color: "#999999" }}
                    >
                      Beyond our core products, we deliver full-cycle software engineering for financial institutions and enterprise clients.
                    </p>
                  </div>
                </ScrollAnimation>
              )}
              <div
                className={index > 0 ? "py-16 lg:py-24" : "pt-16 lg:pt-24"}
                style={index > 0 && !isCSD ? { borderTop: "1px solid #2a2a2a" } : undefined}
              >
              <ScrollAnimation>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={!isOdd ? "lg:order-last" : ""}>
                    <h3 className="text-5xl lg:text-6xl" style={{ fontWeight: 700, fontFamily: "var(--font-display)", color: "#ffffff" }}>
                      {product.name}
                      <span className="block font-normal mt-1" style={{ fontSize: "16px", color: "#777777" }}>
                        {product.subtitle}
                      </span>
                    </h3>
                    <p className="mt-4" style={{ fontSize: "17px", lineHeight: 1.8, color: "#999999" }}>
                      {product.description}
                    </p>
                    <p className="mt-3" style={{ fontSize: "17px", lineHeight: 1.8, color: "#999999" }}>
                      {product.intro}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {product.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#6abf4b" }} />
                          <span style={{ fontSize: "16px", lineHeight: 1.8, color: "#999999" }}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={product.link} scroll={true} className="group/btn mt-6 inline-flex items-center gap-2 rounded-[6px] border border-[#6abf4b] text-[#6abf4b] hover:bg-[#6abf4b] hover:text-black transition-colors duration-200" style={{ padding: "10px 20px", fontSize: "15px", fontWeight: 600 }}>
                      Learn more <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">&rarr;</span>
                    </Link>
                  </div>
                  <div className={!isOdd ? "lg:order-first" : ""}>
                    {product.mockup}
                  </div>
                </div>
              </ScrollAnimation>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
