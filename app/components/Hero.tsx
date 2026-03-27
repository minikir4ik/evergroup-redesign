"use client";

import ScrollReveal from "./ScrollReveal";

/* ── Fake transaction data for the dashboard mockup ── */
const transactions = [
  { date: "Mar 25", desc: "Wire — Apex Holdings", amount: "+$84,200.00", status: "Completed", color: "bg-emerald-500/20 text-emerald-400" },
  { date: "Mar 24", desc: "ACH — NovaPay Settle", amount: "+$12,750.00", status: "Completed", color: "bg-emerald-500/20 text-emerald-400" },
  { date: "Mar 24", desc: "Refund — TXN-90812", amount: "-$1,340.00", status: "Pending", color: "bg-yellow-500/20 text-yellow-400" },
  { date: "Mar 23", desc: "Wire — Meridian Fund", amount: "+$250,000.00", status: "Completed", color: "bg-emerald-500/20 text-emerald-400" },
  { date: "Mar 22", desc: "Card — Fleet Fuel Co.", amount: "-$4,892.30", status: "Pending", color: "bg-yellow-500/20 text-yellow-400" },
];

/* ── Sparkline SVG (simple upward trend) ── */
function Sparkline() {
  return (
    <svg viewBox="0 0 120 32" className="w-full h-8" preserveAspectRatio="none">
      <path
        d="M0 28 L8 24 L16 26 L24 20 L32 22 L40 16 L48 18 L56 12 L64 14 L72 8 L80 10 L88 6 L96 8 L104 4 L112 6 L120 2"
        fill="none"
        stroke="url(#sparkGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── Dashboard mockup ── */
function DashboardMockup() {
  return (
    <div
      className="mt-16 w-full"
      style={{
        transform: "perspective(2000px) rotateX(5deg)",
        transformOrigin: "bottom",
      }}
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        {/* ── Top tab bar ── */}
        <div className="flex items-center gap-1 border-b border-slate-800 px-6 pt-4">
          <button className="px-4 py-2 text-sm font-medium text-white border-b-2 border-blue-500 -mb-px">
            Overview
          </button>
          <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-300 -mb-px">
            Transactions
          </button>
          <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-300 -mb-px">
            Reports
          </button>
        </div>

        {/* ── Body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-0">
          {/* Left column — stats */}
          <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-slate-800 p-6 space-y-6">
            {/* Balance card */}
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Total Balance</p>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  $2,847,392.50
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  +12.5%
                </span>
              </div>
              <div className="mt-4">
                <Sparkline />
              </div>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Revenue</p>
                <p className="text-lg font-bold text-white">$1.2M</p>
                <p className="text-xs text-emerald-400 mt-1">+8.3% MoM</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Compliance</p>
                <p className="text-lg font-bold text-white">99.7%</p>
                <p className="text-xs text-emerald-400 mt-1">All clear</p>
              </div>
            </div>
          </div>

          {/* Right column — transactions table */}
          <div className="lg:col-span-2 p-6">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Recent Transactions</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-slate-500 text-xs uppercase tracking-wider">
                    <th className="pb-3 pr-4 font-medium">Date</th>
                    <th className="pb-3 pr-4 font-medium">Description</th>
                    <th className="pb-3 pr-4 font-medium text-right">Amount</th>
                    <th className="pb-3 font-medium text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, i) => (
                    <tr
                      key={i}
                      className="border-t border-slate-800/70"
                    >
                      <td className="py-3 pr-4 text-slate-400 whitespace-nowrap">{tx.date}</td>
                      <td className="py-3 pr-4 text-slate-300 whitespace-nowrap">{tx.desc}</td>
                      <td className="py-3 pr-4 text-white font-medium text-right whitespace-nowrap">
                        {tx.amount}
                      </td>
                      <td className="py-3 text-right">
                        <span
                          className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${tx.color}`}
                        >
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Hero section ── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <ScrollReveal>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white">
            Build Financial
            <br />
            Infrastructure
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="mt-6 text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
            Software that powers compliance, payments, and transit systems — built
            for teams that move fast.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ask@evergroup.tech"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a
              href="#products"
              className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              See Products
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={350}>
          <DashboardMockup />
        </ScrollReveal>
      </div>
    </section>
  );
}
