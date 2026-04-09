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
            <p className="mt-8 max-w-2xl mx-auto" style={{ fontSize: "18px", lineHeight: 1.8, color: "#a0a0a0" }}>
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

        <ScrollAnimation delay={0.4} className="mt-20">
          <div
            className="relative mx-auto max-w-5xl rounded-xl overflow-hidden"
            style={{
              border: "1px solid #2a2a2a",
              background: "#1a1a1a",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6), 0 0 80px rgba(106,191,75,0.06)",
              transform: "perspective(2000px) rotateX(2deg)",
            }}
          >
            <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid #2a2a2a" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#333" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#333" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#333" }} />
              </div>
              <div className="flex-1 mx-8 h-6 rounded-full" style={{ backgroundColor: "#252525", maxWidth: "300px" }} />
            </div>

            <div className="p-6 lg:p-8">
              <div className="flex gap-6 mb-8">
                {["Overview", "Transactions", "Analytics", "Settings"].map((tab, i) => (
                  <span
                    key={tab}
                    className="text-sm font-medium pb-2"
                    style={{
                      color: i === 0 ? "#ffffff" : "#666666",
                      borderBottom: i === 0 ? "2px solid #6abf4b" : "none",
                    }}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Total Volume", value: "$2,847,392", change: "+12.4%" },
                  { label: "Active Users", value: "1,284", change: "+8.1%" },
                  { label: "Success Rate", value: "99.7%", change: "+0.3%" },
                  { label: "Avg. Latency", value: "42ms", change: "-15%" },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg p-4" style={{ border: "1px solid #2a2a2a", background: "#141414" }}>
                    <p style={{ fontSize: "13px", color: "#666666" }}>{m.label}</p>
                    <p className="text-xl font-bold mt-1" style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{m.value}</p>
                    <p style={{ fontSize: "13px", color: "#6abf4b" }} className="mt-1">{m.change}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg p-6 mb-6" style={{ border: "1px solid #2a2a2a", background: "#141414" }}>
                <div className="flex items-end justify-between h-32 gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{
                      height: `${h}%`,
                      backgroundColor: i === 11 ? "#6abf4b" : "#2a2a2a",
                    }} />
                  ))}
                </div>
              </div>

              <div className="hidden sm:block rounded-lg overflow-hidden" style={{ border: "1px solid #2a2a2a" }}>
                <div className="grid grid-cols-4 gap-4 px-4 py-2" style={{ fontSize: "13px", color: "#666666", borderBottom: "1px solid #2a2a2a", fontFamily: "var(--font-mono)" }}>
                  <span>Transaction</span><span>Amount</span><span>Status</span><span>Date</span>
                </div>
                {[
                  { tx: "TXN-4829", amt: "$12,400", status: "Completed", date: "Mar 27" },
                  { tx: "TXN-4828", amt: "$8,920", status: "Processing", date: "Mar 27" },
                  { tx: "TXN-4827", amt: "$34,100", status: "Completed", date: "Mar 26" },
                ].map((row, i) => (
                  <div
                    key={row.tx}
                    className="grid grid-cols-4 gap-4 px-4 py-3 text-sm"
                    style={{ borderBottom: i < 2 ? "1px solid #2a2a2a" : "none" }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", color: "#a0a0a0" }}>{row.tx}</span>
                    <span style={{ fontFamily: "var(--font-mono)", color: "#ffffff" }}>{row.amt}</span>
                    <span>
                      <span
                        className="inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{
                          backgroundColor: row.status === "Completed" ? "rgba(106,191,75,0.15)" : "rgba(102,102,102,0.15)",
                          color: row.status === "Completed" ? "#6abf4b" : "#666666",
                        }}
                      >
                        {row.status}
                      </span>
                    </span>
                    <span style={{ color: "#666666" }}>{row.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
