"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import ScrollAnimation from "./ScrollAnimation";

const stats = [
  { value: 99.9, suffix: "%", label: "Platform Uptime" },
  { value: 50, suffix: "M+", label: "Transactions Processed" },
  { value: 200, suffix: "+", label: "Enterprise Clients" },
  { value: 12, suffix: "", label: "Countries Served" },
];

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
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
    <div ref={ref} className="text-center">
      <p
        className="text-6xl font-black"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {display}
        {suffix}
      </p>
      <p
        className="text-sm mt-2"
        style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function StatsBanner() {
  return (
    <section
      className="py-24 border-t border-b"
      style={{ borderColor: "var(--color-border-subtle)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center justify-center"
              >
                {index > 0 && (
                  <div
                    className="hidden lg:block h-16 mr-auto"
                    style={{
                      borderLeft: "1px solid var(--color-border)",
                    }}
                  />
                )}
                <div className={index > 0 ? "lg:flex-1" : "flex-1"}>
                  <AnimatedStat
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
