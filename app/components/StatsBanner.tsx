"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import ScrollAnimation from "./ScrollAnimation";

const stats = [
  { value: 12, suffix: "M+", label: "Transactions processed", sub: "Across all products and clients" },
  { value: 99.9, suffix: "%", label: "Platform uptime", sub: "Measured over trailing 12 months" },
  { value: 700, suffix: "+", label: "Partner companies", sub: "Taxi operators, banks, and PSPs" },
  { value: 8, suffix: "", label: "Countries served", sub: "Central Asia, Middle East, CIS" },
];

function AnimatedStat({ value, suffix, label, sub }: { value: number; suffix: string; label: string; sub: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const hasTriggered = useRef(false);
  const rafRef = useRef<number | null>(null);

  const animate = useCallback(() => {
    const startTime = performance.now();
    const duration = 1500;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * value);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCurrent(value);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          animate();
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  const display = value % 1 !== 0 ? current.toFixed(1) : Math.round(current);

  return (
    <div ref={ref}>
      <p style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 700, fontFamily: "var(--font-display)", lineHeight: 1, color: "#ffffff" }}>
        {display}{suffix}
      </p>
      <p className="mt-3" style={{ fontSize: "16px", fontWeight: 500, color: "#a0a0a0" }}>{label}</p>
      <p className="mt-1" style={{ fontSize: "11px", color: "#666666" }}>{sub}</p>
    </div>
  );
}

export default function StatsBanner() {
  return (
    <section className="py-16 lg:py-24 border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#0f0f0f" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <p className="uppercase" style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
            By the Numbers
          </p>
          <h2 className="text-5xl mt-4" style={{ fontWeight: 700, fontFamily: "var(--font-display)", color: "#ffffff" }}>
            Proven at Scale
          </h2>
          <p className="mt-3" style={{ fontSize: "16px", lineHeight: 1.7, color: "#a0a0a0" }}>
            Production metrics across all platforms.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={index > 0 ? { borderLeft: "1px solid #2a2a2a", paddingLeft: "32px" } : undefined}
              >
                <AnimatedStat value={stat.value} suffix={stat.suffix} label={stat.label} sub={stat.sub} />
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
