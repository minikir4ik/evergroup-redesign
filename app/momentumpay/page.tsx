"use client";

import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import { StaggerGrid, StaggerItem } from "../components/ScrollReveal";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

/* ── Feature data ── */
const features = [
  {
    title: "Real-time Processing",
    desc: "Process payments instantly with sub-second confirmation times and zero downtime architecture.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Multi-currency",
    desc: "Accept and settle in 50+ currencies with automatic FX conversion and competitive rates.",
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    title: "Instant Settlement",
    desc: "Funds arrive in merchant accounts within minutes, not days. T+0 settlement as standard.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Merchant Analytics",
    desc: "Real-time dashboards with revenue trends, conversion rates, and customer behavior insights.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "Fraud Detection",
    desc: "ML-powered fraud scoring on every transaction with configurable rules and real-time alerts.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "API-first Integration",
    desc: "RESTful APIs with SDKs for every major platform. Go live in days, not months.",
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  },
];

/* ── How It Works steps ── */
const steps = [
  {
    num: "01",
    title: "Integrate API",
    desc: "Connect your platform using our SDKs and RESTful endpoints. Full sandbox environment included.",
  },
  {
    num: "02",
    title: "Accept Payments",
    desc: "Start accepting cards, wallets, and bank transfers across 50+ currencies worldwide.",
  },
  {
    num: "03",
    title: "Process & Settle",
    desc: "Transactions are authorized, cleared, and settled to your account in real time.",
  },
  {
    num: "04",
    title: "Analyze & Report",
    desc: "Track every metric with live dashboards, automated reports, and exportable data.",
  },
];

/* ── Recent payments table data ── */
const recentPayments = [
  { id: "PAY-7291", merchant: "TechFlow Inc.", amount: "$2,450.00", currency: "USD", method: "Visa ****4821", status: "Settled" },
  { id: "PAY-7290", merchant: "NordBrew GmbH", amount: "\u20AC1,180.50", currency: "EUR", method: "Mastercard ****3319", status: "Settled" },
  { id: "PAY-7289", merchant: "Gulf Logistics", amount: "$8,920.00", currency: "AED", method: "Bank Transfer", status: "Pending" },
  { id: "PAY-7288", merchant: "Skyline SaaS", amount: "$640.00", currency: "USD", method: "Visa ****9012", status: "Settled" },
  { id: "PAY-7287", merchant: "MediTrack EU", amount: "\u20AC3,200.00", currency: "EUR", method: "SEPA Direct", status: "Settled" },
  { id: "PAY-7286", merchant: "Apex Trading", amount: "$12,500.00", currency: "AED", method: "Mastercard ****5567", status: "Processing" },
];

/* ── Bar chart heights (7 days) ── */
const barHeights = [45, 72, 58, 84, 66, 91, 78];
const barDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/* ── Currency badge colors ── */
function currencyBadge(currency: string) {
  switch (currency) {
    case "USD":
      return "bg-blue-500/15 text-blue-400 border-blue-500/20";
    case "EUR":
      return "bg-emerald-500/15 text-emerald-400 border-emerald-500/20";
    case "AED":
      return "bg-amber-500/15 text-amber-400 border-amber-500/20";
    default:
      return "bg-slate-500/15 text-slate-400 border-slate-500/20";
  }
}

/* ── Status badge colors ── */
function statusBadge(status: string) {
  switch (status) {
    case "Settled":
      return "text-emerald-400";
    case "Pending":
      return "text-amber-400";
    case "Processing":
      return "text-blue-400";
    default:
      return "text-slate-400";
  }
}

export default function MomentumPayPage() {
  return (
    <>
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative bg-[#0a0f1e] overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
        <div className="orb-1 absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.07] blur-[100px]" />
        <div className="orb-2 absolute bottom-[10%] left-[0%] w-[600px] h-[600px] rounded-full bg-indigo-500/[0.06] blur-[120px]" />
        <div className="orb-3 absolute top-[40%] left-[30%] w-[350px] h-[350px] rounded-full bg-cyan-400/[0.05] blur-[80px]" />
        <div
          className="particle-grid absolute inset-[-60px] opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(148,163,184,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
          <ScrollReveal>
            {/* Tag */}
            <div className="inline-block mb-8 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/[0.06]">
              <span className="text-blue-400 text-xs font-semibold tracking-[0.15em] uppercase">
                Payments
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Momentum Pay
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Fast, secure payment processing with real-time settlement and
              multi-currency support.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="mailto:ask@evergroup.tech"
                className="group inline-flex items-center gap-2 px-9 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/20 text-sm tracking-wide"
              >
                Get Started
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          {/* ── Dashboard mockup ── */}
          <ScrollReveal delay={200}>
            <div className="mt-16 mx-auto max-w-4xl rounded-2xl border border-slate-700/50 bg-[#0f1629]/80 backdrop-blur-sm shadow-2xl shadow-black/40 overflow-hidden">
              {/* Dashboard header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">Payment Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-emerald-400 text-xs font-medium">Live</span>
                </div>
              </div>

              {/* Balance */}
              <div className="px-6 pt-5 pb-4">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Total Balance</div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">$1,284,930.00</span>
                  <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    +8.3% this month
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-6 pb-5">
                {[
                  { label: "Today\u2019s Volume", value: "$284K" },
                  { label: "Pending", value: "24" },
                  { label: "Settled", value: "1,847" },
                  { label: "Success Rate", value: "99.7%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white/[0.04] border border-slate-700/40 px-4 py-3"
                  >
                    <div className="text-[11px] text-slate-500 font-medium">{stat.label}</div>
                    <div className="text-lg font-bold text-white mt-0.5">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="px-6 pb-5">
                <div className="rounded-xl bg-white/[0.03] border border-slate-700/40 p-4">
                  <div className="text-xs text-slate-500 font-medium mb-4">Last 7 Days Volume</div>
                  <div className="flex items-end gap-2 sm:gap-3 h-28">
                    {barHeights.map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                        <div
                          className="w-full rounded-md bg-blue-500/80 transition-all duration-500 hover:bg-blue-400"
                          style={{ height: `${h}%` }}
                        />
                        <span className="text-[10px] text-slate-600">{barDays[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent payments table */}
              <div className="px-6 pb-6">
                <div className="rounded-xl bg-white/[0.03] border border-slate-700/40 overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-700/40">
                    <span className="text-xs text-slate-500 font-medium">Recent Payments</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-slate-700/30">
                          <th className="px-4 py-2.5 text-[11px] text-slate-500 font-medium">ID</th>
                          <th className="px-4 py-2.5 text-[11px] text-slate-500 font-medium">Merchant</th>
                          <th className="px-4 py-2.5 text-[11px] text-slate-500 font-medium">Amount</th>
                          <th className="px-4 py-2.5 text-[11px] text-slate-500 font-medium">Currency</th>
                          <th className="px-4 py-2.5 text-[11px] text-slate-500 font-medium hidden sm:table-cell">Method</th>
                          <th className="px-4 py-2.5 text-[11px] text-slate-500 font-medium text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentPayments.map((p) => (
                          <tr key={p.id} className="border-b border-slate-700/20 last:border-0 hover:bg-white/[0.02] transition-colors">
                            <td className="px-4 py-2.5 text-xs text-slate-400 font-mono">{p.id}</td>
                            <td className="px-4 py-2.5 text-xs text-white font-medium">{p.merchant}</td>
                            <td className="px-4 py-2.5 text-xs text-white font-semibold">{p.amount}</td>
                            <td className="px-4 py-2.5">
                              <span className={`inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full border ${currencyBadge(p.currency)}`}>
                                {p.currency}
                              </span>
                            </td>
                            <td className="px-4 py-2.5 text-xs text-slate-400 hidden sm:table-cell">{p.method}</td>
                            <td className={`px-4 py-2.5 text-xs font-medium text-right ${statusBadge(p.status)}`}>{p.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <section className="py-28 lg:py-36 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase">
              Capabilities
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1]">
              Everything you need to{" "}
              <span className="text-blue-400">move money</span>
            </h2>
          </ScrollReveal>

          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="group h-full rounded-2xl bg-white/[0.04] border border-slate-700/50 p-8 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/[0.08] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 group-hover:bg-blue-500/15 transition-colors">
                    <svg
                      className="w-6 h-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={f.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="py-28 lg:py-36 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase">
              Process
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1]">
              How it works
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-blue-500/40 via-blue-500/20 to-blue-500/40" />

            <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <StaggerItem key={step.num}>
                  <div className="text-center relative">
                    {/* Step number circle */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mx-auto ring-4 ring-[#0a0f1e]">
                      {step.num}
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <CTASection />

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <Footer />
    </>
  );
}
