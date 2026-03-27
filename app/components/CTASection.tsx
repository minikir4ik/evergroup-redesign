"use client";

import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0a0f1e]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="border border-slate-800 rounded-2xl p-12 lg:p-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Ready to modernize your financial infrastructure?
            </h2>
            <p className="text-lg text-slate-400 mt-6">
              Get in touch to see how EVERGROUP can transform your operations.
            </p>
            <a
              href="mailto:ask@evergroup.tech"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg mt-8 inline-block transition-colors"
            >
              Get Started
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
