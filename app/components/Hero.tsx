"use client";

import dynamic from "next/dynamic";
import ScrollAnimation from "./ScrollAnimation";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-30" />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <ScrollAnimation delay={0}>
            <p
              className="text-xs uppercase tracking-[0.15em] mb-6"
              style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
            >
              Financial Infrastructure
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <h1
              className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.95]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Software That
              <br />
              Powers Finance.
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p
              className="text-lg mt-8 max-w-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Compliance, payments, fare collection, and custom systems —
              built for teams that move fast.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="flex gap-4 mt-10">
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-full font-medium transition-all duration-200 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-on-accent)",
                  fontFamily: "var(--font-body)",
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
                  fontFamily: "var(--font-body)",
                }}
              >
                See Products
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
