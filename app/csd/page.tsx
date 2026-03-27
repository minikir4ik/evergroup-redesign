"use client";

import Navbar from "../components/Navbar";
import ScrollReveal, { StaggerGrid, StaggerItem } from "../components/ScrollReveal";
import Footer from "../components/Footer";
import RelatedProducts from "../components/RelatedProducts";
import Link from "next/link";

/* ── Feature data ── */
const features = [
  {
    title: "Full-cycle Development",
    desc: "From initial concept through architecture, development, testing, and deployment — we own the entire lifecycle so you can focus on your business.",
    icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
  },
  {
    title: "Modern Architecture",
    desc: "Microservices, event-driven systems, and clean API design. We build software that scales with your growth and adapts to changing requirements.",
    icon: "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L21.75 16.5 12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3",
  },
  {
    title: "Cloud-native Infrastructure",
    desc: "Built for the cloud from day one. Auto-scaling, container orchestration, and infrastructure-as-code for reliable, cost-efficient operations.",
    icon: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z",
  },
  {
    title: "Dedicated Teams",
    desc: "Senior engineers, architects, and product managers embedded in your workflow. Not outsourcing — a true extension of your team.",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    title: "Agile Delivery",
    desc: "Two-week sprints, continuous integration, and transparent progress tracking. You see results early and often, not after months of silence.",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
  },
  {
    title: "Ongoing Support",
    desc: "Post-launch monitoring, performance optimization, and feature iteration. We stay with your product long after the first release.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182",
  },
];

/* ── How it works steps ── */
const steps = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We map your business processes, identify technical requirements, and define a clear project roadmap with milestones and deliverables.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    desc: "System architecture, data models, API contracts, and UX wireframes — everything is designed and validated before a single line of code is written.",
  },
  {
    step: "03",
    title: "Build & Test",
    desc: "Agile sprints with continuous integration, automated testing, and regular demos. You see working software every two weeks.",
  },
  {
    step: "04",
    title: "Deploy & Support",
    desc: "Zero-downtime deployments, production monitoring, and ongoing optimization. We stay with your product and keep it running at peak performance.",
  },
];

/* ── Activity log entries ── */
const activityLog = [
  { time: "14:32", text: "Deployed payment-service v2.4.1" },
  { time: "14:18", text: "Merged PR #847: Add multi-currency support" },
  { time: "13:55", text: "Test suite passed: 1,247 tests" },
  { time: "13:40", text: "Security scan completed — 0 vulnerabilities" },
  { time: "12:22", text: "Deployed auth-service v3.1.0" },
  { time: "11:58", text: "Code review approved: API rate limiting" },
];

const techBadges = ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS", "Docker"];

export default function CSDPage() {
  return (
    <>
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center bg-[#0a0f1e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.07] blur-[100px]" />
        <div className="absolute bottom-[15%] right-[0%] w-[600px] h-[600px] rounded-full bg-indigo-500/[0.06] blur-[120px]" />
        <div className="absolute top-[50%] left-[40%] w-[350px] h-[350px] rounded-full bg-cyan-400/[0.05] blur-[80px]" />
        <div
          className="absolute inset-[-60px] opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(148,163,184,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — copy */}
            <ScrollReveal>
              <div className="inline-block mb-6 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/[0.06]">
                <span className="text-blue-400 text-xs font-semibold tracking-[0.15em] uppercase">
                  Software
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                Custom Software Development
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
                Purpose-built software for financial institutions. From concept
                to deployment and beyond.
              </p>

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

            {/* Right — dashboard mockup */}
            <ScrollReveal delay={200}>
              <div className="rounded-2xl bg-[#0f1629] border border-slate-800/80 shadow-2xl shadow-black/40 overflow-hidden">
                {/* Dashboard header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/70" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      Project Dashboard
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
                    Sprint 14
                  </span>
                </div>

                <div className="p-6 space-y-5">
                  {/* Progress bar */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400 font-medium">
                        Sprint Progress
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        73%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                        style={{ width: "73%" }}
                      />
                    </div>
                  </div>

                  {/* Stat cards */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Features Shipped", value: "47" },
                      { label: "Test Coverage", value: "98.2%" },
                      { label: "Deploys Today", value: "24" },
                      { label: "Team Size", value: "12" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl bg-white/[0.03] border border-slate-700/40 p-4"
                      >
                        <div className="text-xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Activity log */}
                  <div>
                    <div className="text-xs text-slate-400 font-medium mb-3">
                      Recent Activity
                    </div>
                    {activityLog.map((entry, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 py-2 border-t border-slate-800/40 first:border-t-0"
                      >
                        <span className="text-xs text-slate-500 font-mono w-11 shrink-0">
                          {entry.time}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                        <span className="text-sm text-slate-300 truncate">
                          {entry.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium"
                      >
                        {badge}
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
          <ScrollReveal className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase">
              Capabilities
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1]">
              Everything you need to{" "}
              <span className="text-blue-400">ship great software</span>
            </h2>
          </ScrollReveal>

          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="bg-white/[0.04] rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/[0.08] transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
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
                        d={feature.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="py-28 lg:py-36 bg-[#0a0f1e]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-xs tracking-[0.2em] uppercase">
              Process
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1]">
              How it works
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 120}>
                  <div className="flex gap-8 items-start">
                    {/* Step number */}
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                      <span className="text-blue-400 text-sm font-bold font-mono">
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pb-2">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-24 lg:py-32 bg-[#0a0f1e]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1]">
              Let&apos;s build something great
            </h2>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
              Tell us about your project and we&apos;ll put together a team and
              a plan tailored to your goals.
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <Link
                href="/"
                className="px-9 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-sm tracking-wide"
              >
                Back to Home
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedProducts current="/csd" />

      <Footer />
    </>
  );
}
