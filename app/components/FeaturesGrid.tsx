"use client";

import ScrollReveal from "./ScrollReveal";

/* ─── SVG Icon Components ─── */

function ShieldIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
}

function CreditCardIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      className="w-10 h-10 text-blue-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  );
}

/* ─── Feature Data ─── */

const features = [
  {
    title: "Compliance Automation",
    description:
      "Automate KYC, AML, and regulatory reporting with real-time monitoring.",
    Icon: ShieldIcon,
  },
  {
    title: "Instant Payments",
    description:
      "Process transactions in real-time with multi-currency support and instant settlement.",
    Icon: BoltIcon,
  },
  {
    title: "Fare Collection",
    description:
      "Contactless fare systems for modern transit networks, from tap to reconciliation.",
    Icon: CreditCardIcon,
  },
  {
    title: "Custom Development",
    description:
      "Purpose-built financial software, designed and delivered end-to-end.",
    Icon: CodeIcon,
  },
  {
    title: "Risk Management",
    description:
      "Identify, assess, and mitigate financial risk with intelligent scoring models.",
    Icon: ChartIcon,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and dedicated account management.",
    Icon: SupportIcon,
  },
];

/* ─── Component ─── */

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <p className="text-xs tracking-widest uppercase text-blue-400 font-semibold text-center">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white text-center mt-4">
            Everything you need to modernize
          </h2>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 80}>
              <div className="bg-transparent border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
                <feature.Icon />
                <h3 className="text-lg font-semibold text-white mt-4">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
