"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden" style={{ backgroundColor: "#0f0f0f" }}>
      <div className="absolute inset-0 bg-animated-grid" />
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(106, 191, 75, 0.08) 0%, transparent 70%)" }} />

          <ScrollAnimation delay={0.1}>
            <h1
              className="relative text-6xl lg:text-8xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "#ffffff", lineHeight: 1 }}
            >
              Enterprise FinTech<br />Infrastructure
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p className="mt-8 max-w-2xl mx-auto" style={{ fontSize: "18px", lineHeight: 1.8, color: "#999999" }}>
              Compliance, payments, and fare collection systems built for financial institutions and transport operators.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="flex gap-4 mt-10 justify-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-full font-medium transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
                style={{ backgroundColor: "#6abf4b", color: "#000000" }}
              >
                Get Started
              </button>
              <a
                href="#products"
                className="px-8 py-3.5 rounded-full font-medium border transition-all duration-200 hover:translate-y-[-2px]"
                style={{ borderColor: "#2a2a2a", color: "#ffffff" }}
              >
                See Products
              </a>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.4} className="mt-20 hidden md:block">
          <div
            className="relative mx-auto max-w-5xl rounded-xl overflow-hidden"
            style={{
              border: "1px solid #2a2a2a",
              background: "#1a1a1a",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6), 0 0 80px rgba(106,191,75,0.06)",
              transform: "perspective(2000px) rotateX(2deg)",
            }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid #2a2a2a" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
              </div>
              <div className="flex-1 mx-8 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#252525", maxWidth: "340px" }}>
                <span style={{ fontSize: "12px", color: "#777777", fontFamily: "var(--font-mono)" }}>app.evergroup.tech</span>
              </div>
            </div>

            <div className="p-6 lg:p-8">
              {/* Tab row */}
              <div className="flex gap-6 mb-8">
                {["Overview", "Transactions", "Compliance", "Settings"].map((tab, i) => (
                  <span
                    key={tab}
                    className="text-sm font-medium pb-2"
                    style={{
                      color: i === 0 ? "#ffffff" : "#777777",
                      borderBottom: i === 0 ? "2px solid #6abf4b" : "none",
                    }}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              {/* Row 1 — 4 stat cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Platform Uptime", value: "99.9%", sub: "+0.0%", subColor: "#6abf4b" },
                  { label: "Partner Companies", value: "700+", sub: "Active across CIS & UAE", subColor: "#777777" },
                  { label: "Compliance Checks", value: "50+", sub: "Data sources integrated", subColor: "#777777" },
                  { label: "Active Drivers", value: "100,000", sub: "Momentum Pay network", subColor: "#777777" },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg p-4" style={{ border: "1px solid #2a2a2a", background: "#141414" }}>
                    <p style={{ fontSize: "12px", color: "#777777" }}>{m.label}</p>
                    <p className="text-xl font-bold mt-1" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{m.value}</p>
                    <p style={{ fontSize: "11px", marginTop: "4px", color: m.subColor }}>{m.sub}</p>
                  </div>
                ))}
              </div>

              {/* Row 2 — Bar chart */}
              <div className="rounded-lg p-5 mb-6" style={{ border: "1px solid #2a2a2a", background: "#141414" }}>
                <p className="mb-4" style={{ fontSize: "12px", color: "#777777", fontFamily: "var(--font-mono)" }}>Transaction Volume &mdash; Last 7 Days</p>
                <div className="flex items-end gap-2" style={{ height: "80px" }}>
                  {[45, 68, 52, 80, 62, 74, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-colors"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 6 ? "#6abf4b" : "#2a2a2a",
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Today"].map((d) => (
                    <span key={d} className="flex-1 text-center" style={{ fontSize: "10px", color: "#555555", fontFamily: "var(--font-mono)" }}>{d}</span>
                  ))}
                </div>
              </div>

              {/* Row 3 — Activity feed */}
              <div className="hidden sm:block rounded-lg overflow-hidden mb-6" style={{ border: "1px solid #2a2a2a" }}>
                <div className="grid grid-cols-4 gap-4 px-4 py-2" style={{ fontSize: "12px", color: "#777777", borderBottom: "1px solid #2a2a2a", fontFamily: "var(--font-mono)" }}>
                  <span>Type</span><span>Status</span><span>Region</span><span>Time</span>
                </div>
                {[
                  { type: "KYC Verification", status: "Passed", region: "Central Asia", time: "2 min ago" },
                  { type: "Fare Collection", status: "Processed", region: "Uzbekistan", time: "5 min ago" },
                  { type: "Contractor Payout", status: "Settled", region: "CIS Network", time: "12 min ago" },
                ].map((row, i) => (
                  <div
                    key={row.type}
                    className="grid grid-cols-4 gap-4 px-4 py-3 text-sm"
                    style={{ borderBottom: i < 2 ? "1px solid #2a2a2a" : "none" }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", color: "#999999", fontSize: "13px" }}>{row.type}</span>
                    <span className="flex items-center gap-1.5">
                      <span style={{ color: "#6abf4b", fontSize: "13px", fontFamily: "var(--font-mono)" }}>&#10003;</span>
                      <span
                        className="inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{ backgroundColor: "rgba(106,191,75,0.15)", color: "#6abf4b" }}
                      >
                        {row.status}
                      </span>
                    </span>
                    <span style={{ color: "#777777", fontSize: "13px" }}>{row.region}</span>
                    <span style={{ color: "#555555", fontSize: "13px", fontFamily: "var(--font-mono)" }}>{row.time}</span>
                  </div>
                ))}
              </div>

              {/* Row 4 — Mini stat pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  "CRC System: 50+ data sources integrated",
                  "Momentum Pay: 100,000 active drivers",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full px-4 py-1.5"
                    style={{ fontSize: "12px", fontFamily: "var(--font-mono)", color: "#999999", backgroundColor: "#141414", border: "1px solid #2a2a2a" }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
