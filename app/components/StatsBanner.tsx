"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";

/* ─── Stat Data ─── */

const stats = [
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 50, suffix: "M+", label: "Transactions Processed" },
  { value: 200, suffix: "+", label: "Enterprise Clients" },
  { value: 12, suffix: "", label: "Countries Served" },
];

/* ─── Animated Counter Hook ─── */

function useCountUp(
  end: number,
  duration: number = 2000,
): [number, (start: boolean) => void] {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef<number | null>(null);

  const trigger = useCallback(
    (start: boolean) => {
      if (!start) return;

      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(eased * end);

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setCurrent(end);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    },
    [end, duration],
  );

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return [current, trigger];
}

/* ─── Single Stat Component ─── */

function AnimatedStat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [current, trigger] = useCountUp(value);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setTimeout(() => trigger(true), delay);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [trigger, delay]);

  // Format: use 1 decimal for 99.9, integers for everything else
  const display = value % 1 !== 0 ? current.toFixed(1) : Math.round(current);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl lg:text-5xl font-black text-white">
        {display}
        {suffix}
      </p>
      <p className="text-sm text-slate-400 mt-2">{label}</p>
    </div>
  );
}

/* ─── Component ─── */

export default function StatsBanner() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 150}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
