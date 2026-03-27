"use client";

import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import { StaggerGrid, StaggerItem } from "../components/ScrollReveal";
import Footer from "../components/Footer";
import RelatedProducts from "../components/RelatedProducts";
import TiltCard from "../components/TiltCard";
import Link from "next/link";

/* ── Data ── */

const features = [
  {
    title: "Contactless Payments",
    desc: "Accept NFC, QR codes, smart cards and mobile wallets with sub-second tap-to-go processing at every gate.",
    icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
  },
  {
    title: "Multi-modal Support",
    desc: "A single platform for buses, metros, trams, ferries and ride-share — one fare engine across every mode.",
    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  },
  {
    title: "Real-time Reconciliation",
    desc: "Every transaction is matched, settled and auditable within seconds — no end-of-day batch runs.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Dynamic Pricing",
    desc: "Time-of-day, zone-based and capped fare rules that adjust automatically to optimise ridership and revenue.",
    icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
  },
  {
    title: "Passenger Analytics",
    desc: "Ridership heatmaps, peak-hour modelling and origin-destination analysis to inform planning decisions.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "System Integration",
    desc: "Open APIs, GTFS feeds and webhook events that plug into your existing ERP, CRM and BI stack.",
    icon: "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875S10.5 3.09 10.5 4.125c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.421 48.421 0 01-4.185-.428.64.64 0 00-.74.528v0c-.09.57.36 1.048.938 1.107 1.385.142 2.787.213 4.194.213s2.809-.071 4.194-.213c.578-.06 1.028-.537.938-1.107v0a.64.64 0 00-.74-.528 48.421 48.421 0 01-4.185.428.64.64 0 01-.657-.643v0z",
  },
];

const steps = [
  {
    num: "01",
    title: "Deploy Hardware",
    desc: "Install validators and readers across your fleet in days, not months.",
  },
  {
    num: "02",
    title: "Tap & Pay",
    desc: "Passengers pay with any contactless method — card, phone or wearable.",
  },
  {
    num: "03",
    title: "Process & Reconcile",
    desc: "Every fare is validated, matched and settled in real time on our cloud.",
  },
  {
    num: "04",
    title: "Report & Optimize",
    desc: "Analytics dashboards surface insights that drive network improvements.",
  },
];

const routeData = [
  { id: "R-101", name: "Downtown Express", ridership: "8,412", revenue: "$20,189", onTime: "96%", status: "Active" },
  { id: "R-205", name: "Airport Shuttle", ridership: "6,831", revenue: "$18,473", onTime: "91%", status: "Active" },
  { id: "R-042", name: "Harbor Line", ridership: "5,209", revenue: "$12,502", onTime: "88%", status: "Delayed" },
  { id: "R-310", name: "University Loop", ridership: "7,144", revenue: "$17,146", onTime: "94%", status: "Active" },
  { id: "R-118", name: "Suburban Rail", ridership: "4,602", revenue: "$11,045", onTime: "85%", status: "Delayed" },
  { id: "R-077", name: "Riverside Tram", ridership: "3,891", revenue: "$9,338", onTime: "97%", status: "Active" },
];

const paymentMethods = ["NFC", "QR Code", "Smart Card", "Mobile Pay"];

export default function FareCollectionPage() {
  return (
    <>
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center bg-[#0a0f1e] overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
        <div className="orb-1 absolute top-[15%] left-[10%] w-[450px] h-[450px] rounded-full bg-cyan-500/[0.07] blur-[100px]" />
        <div className="orb-2 absolute bottom-[10%] right-[5%] w-[550px] h-[550px] rounded-full bg-blue-500/[0.06] blur-[120px]" />
        <div className="orb-3 absolute top-[60%] left-[50%] w-[300px] h-[300px] rounded-full bg-indigo-400/[0.05] blur-[80px]" />
        <div
          className="particle-grid absolute inset-[-60px] opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(148,163,184,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="mb-8 flex justify-center">
              <div className="flex items-center gap-2 text-sm">
                <Link href="/" className="text-slate-500 hover:text-blue-400 transition-colors">Home</Link>
                <span className="text-slate-600">&rarr;</span>
                <span className="text-blue-400">Fare Collection</span>
              </div>
            </nav>

            <ScrollReveal>
              {/* Tag */}
              <div className="inline-block mb-8 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/[0.06]">
                <span className="text-blue-400 text-xs font-semibold tracking-[0.15em] uppercase">
                  Transport
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight">
                Fare Collection
              </h1>

              {/* Subtitle */}
              <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Intelligent fare collection for modern transit networks.
                Contactless, efficient, scalable.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

            {/* ── Dashboard Mockup ── */}
            <ScrollReveal delay={200}>
              <div className="mt-16 max-w-4xl mx-auto rounded-2xl border border-slate-700/50 bg-white/[0.03] backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/30">
                {/* Dashboard header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/40">
                  <span className="text-white font-semibold text-sm">Transit Network</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs font-medium">Live</span>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Big stat */}
                  <div className="text-center">
                    <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      48,293 <span className="text-lg font-medium text-slate-400">rides today</span>
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                      ↑ 12% vs yesterday
                    </span>
                  </div>

                  {/* 4 stat cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { label: "Active Routes", value: "24" },
                      { label: "Avg Fare", value: "$2.40" },
                      { label: "Daily Revenue", value: "$115,903" },
                      { label: "Peak Hour", value: "8:00 AM" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl bg-white/[0.04] border border-slate-700/40 px-4 py-3"
                      >
                        <p className="text-[11px] text-slate-500 uppercase tracking-wider font-medium">
                          {s.label}
                        </p>
                        <p className="mt-1 text-lg font-bold text-white">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Route performance table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-700/40">
                          <th className="pb-3 pr-4 text-[11px] text-slate-500 uppercase tracking-wider font-medium">Route</th>
                          <th className="pb-3 pr-4 text-[11px] text-slate-500 uppercase tracking-wider font-medium">Name</th>
                          <th className="pb-3 pr-4 text-[11px] text-slate-500 uppercase tracking-wider font-medium hidden sm:table-cell">Ridership</th>
                          <th className="pb-3 pr-4 text-[11px] text-slate-500 uppercase tracking-wider font-medium hidden sm:table-cell">Revenue</th>
                          <th className="pb-3 pr-4 text-[11px] text-slate-500 uppercase tracking-wider font-medium hidden md:table-cell">On-Time</th>
                          <th className="pb-3 text-[11px] text-slate-500 uppercase tracking-wider font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {routeData.map((route) => (
                          <tr key={route.id} className="border-b border-slate-800/30 last:border-0">
                            <td className="py-2.5 pr-4 text-slate-400 font-mono text-xs">{route.id}</td>
                            <td className="py-2.5 pr-4 text-white font-medium">{route.name}</td>
                            <td className="py-2.5 pr-4 text-slate-300 hidden sm:table-cell">{route.ridership}</td>
                            <td className="py-2.5 pr-4 text-slate-300 hidden sm:table-cell">{route.revenue}</td>
                            <td className="py-2.5 pr-4 text-slate-300 hidden md:table-cell">{route.onTime}</td>
                            <td className="py-2.5">
                              <span
                                className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                  route.status === "Active"
                                    ? "bg-emerald-500/10 text-emerald-400"
                                    : "bg-amber-500/10 text-amber-400"
                                }`}
                              >
                                {route.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Payment methods row */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    {paymentMethods.map((method) => (
                      <span
                        key={method}
                        className="px-4 py-2 rounded-lg bg-blue-500/[0.08] border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <section className="py-28 lg:py-36 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase">
              Capabilities
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1]">
              Everything you need to collect fares
            </h2>
          </ScrollReveal>

          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <TiltCard>
                  <div className="relative p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/[0.08] transition-all duration-300 h-full bg-white/[0.04] overflow-hidden group">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-blue-600/15 flex items-center justify-center mb-6 group-hover:bg-blue-600/25 transition-colors">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="py-28 lg:py-36 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase">
              Process
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1]">
              How it works
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative">
              {/* Connecting line — desktop only */}
              <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-0.5 bg-slate-700/50" />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
                {steps.map((step, i) => (
                  <div key={step.num} className="relative text-center">
                    {/* Number circle */}
                    <div className="relative z-10 w-[104px] h-[104px] mx-auto">
                      <div className="absolute inset-0 rounded-full bg-blue-600/10" />
                      <div className="absolute inset-3 rounded-full bg-blue-600/20 flex items-center justify-center">
                        <span className="text-2xl font-extrabold text-blue-400">{step.num}</span>
                      </div>
                    </div>

                    {/* Arrow between steps — desktop only */}
                    {i < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-[52px] -right-3 translate-x-1/2 z-20">
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}

                    <div className="mt-6">
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <p className="mt-3 text-slate-400 leading-relaxed text-sm max-w-xs mx-auto">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-24 lg:py-32 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1]">
              Ready to modernize your transit network?
            </h2>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
              Let&apos;s discuss how our fare collection platform can transform
              your passengers&apos; experience.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:ask@evergroup.tech"
                className="group px-9 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/20 text-sm tracking-wide inline-flex items-center gap-2"
              >
                Get Started
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/"
                className="px-9 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-sm tracking-wide"
              >
                Back to Home
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedProducts current="/farecollection" />

      <Footer />
    </>
  );
}
