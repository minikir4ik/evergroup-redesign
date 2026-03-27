"use client";

import ScrollReveal from "./ScrollReveal";

const companies = [
  "ACME BANK",
  "METRO TRANSIT",
  "GULF PAY",
  "NEXUS FINANCE",
  "SILK ROAD TECH",
];

export default function TrustBar() {
  return (
    <section className="border-t border-b border-slate-800/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm text-slate-500 uppercase tracking-widest text-center">
            Trusted by teams in finance, transport, and enterprise
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-8 flex flex-wrap items-center justify-evenly gap-8">
            {companies.map((name) => (
              <span
                key={name}
                className="text-slate-600 font-semibold text-sm tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
