"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-dot-grid opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-24 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollAnimation delay={0.1}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.95]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Software That
              <br />
              Powers Finance.
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p
              className="text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Compliance, payments, fare collection, and custom systems —
              built for teams that move fast.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="flex gap-4 mt-10 justify-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-full font-medium transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-on-accent)",
                }}
              >
                Get Started
              </button>
              <a
                href="#products"
                className="px-8 py-3.5 rounded-full font-medium border transition-all duration-200 hover:translate-y-[-2px]"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}
              >
                See Products
              </a>
            </div>
          </ScrollAnimation>
        </div>

        {/* Dashboard mockup — the hero visual */}
        <ScrollAnimation delay={0.4} className="mt-20">
          <div
            className="relative mx-auto max-w-5xl rounded-xl overflow-hidden"
            style={{
              border: "1px solid var(--color-border)",
              background: "var(--color-surface)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 80px rgba(79,110,247,0.08)",
              transform: "perspective(2000px) rotateX(2deg)",
            }}
          >
            {/* Window chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: "1px solid var(--color-border)" }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-border)" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-border)" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-border)" }} />
              </div>
              <div
                className="flex-1 mx-8 h-6 rounded-full"
                style={{ backgroundColor: "var(--color-surface-raised)", maxWidth: "300px" }}
              />
            </div>

            {/* Dashboard content */}
            <div className="p-6 lg:p-8">
              {/* Top nav tabs */}
              <div className="flex gap-6 mb-8">
                {["Overview", "Transactions", "Analytics", "Settings"].map((tab, i) => (
                  <span
                    key={tab}
                    className="text-sm font-medium pb-2"
                    style={{
                      color: i === 0 ? "var(--color-text)" : "var(--color-text-muted)",
                      borderBottom: i === 0 ? "2px solid var(--color-accent)" : "none",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              {/* Metric cards row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Total Volume", value: "$2,847,392", change: "+12.4%" },
                  { label: "Active Users", value: "1,284", change: "+8.1%" },
                  { label: "Success Rate", value: "99.7%", change: "+0.3%" },
                  { label: "Avg. Latency", value: "42ms", change: "-15%" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg p-4"
                    style={{ border: "1px solid var(--color-border)", background: "var(--color-surface-raised)" }}
                  >
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{m.label}</p>
                    <p className="text-xl font-bold mt-1" style={{ fontFamily: "var(--font-mono)" }}>{m.value}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--color-accent)" }}>{m.change}</p>
                  </div>
                ))}
              </div>

              {/* Chart area */}
              <div
                className="rounded-lg p-6 mb-6"
                style={{ border: "1px solid var(--color-border)", background: "var(--color-surface-raised)" }}
              >
                <div className="flex items-end justify-between h-32 gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{
                      height: `${h}%`,
                      backgroundColor: i === 11 ? "var(--color-accent)" : "var(--color-border)",
                      transition: "height 0.3s ease",
                    }} />
                  ))}
                </div>
              </div>

              {/* Table preview */}
              <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
                <div
                  className="grid grid-cols-4 gap-4 px-4 py-2 text-xs"
                  style={{ color: "var(--color-text-muted)", borderBottom: "1px solid var(--color-border)", fontFamily: "var(--font-mono)" }}
                >
                  <span>Transaction</span><span>Amount</span><span>Status</span><span>Date</span>
                </div>
                {[
                  { tx: "TXN-4829", amt: "$12,400", status: "Completed", date: "Mar 27" },
                  { tx: "TXN-4828", amt: "$8,920", status: "Processing", date: "Mar 27" },
                  { tx: "TXN-4827", amt: "$34,100", status: "Completed", date: "Mar 26" },
                ].map((row) => (
                  <div
                    key={row.tx}
                    className="grid grid-cols-4 gap-4 px-4 py-3 text-sm"
                    style={{ borderBottom: "1px solid var(--color-border)" }}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>{row.tx}</span>
                    <span style={{ fontFamily: "var(--font-mono)" }}>{row.amt}</span>
                    <span>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: row.status === "Completed" ? "rgba(79,110,247,0.15)" : "rgba(100,116,139,0.15)",
                          color: row.status === "Completed" ? "var(--color-accent)" : "var(--color-text-muted)",
                        }}
                      >
                        {row.status}
                      </span>
                    </span>
                    <span style={{ color: "var(--color-text-muted)" }}>{row.date}</span>
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
