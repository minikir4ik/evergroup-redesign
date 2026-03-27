"use client";

import { useState, type ReactNode } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

export default function TabSwitcher({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex gap-2 mb-10">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="px-8 py-3.5 rounded-xl font-semibold tracking-wide cursor-pointer"
            style={{
              fontSize: "var(--text-sm)",
              backgroundColor:
                active === i ? "var(--color-accent)" : "var(--color-surface)",
              color:
                active === i
                  ? "var(--color-on-accent)"
                  : "var(--color-text-secondary)",
              boxShadow:
                active === i
                  ? "0 8px 24px var(--color-accent-glow)"
                  : "none",
              transition:
                "background-color var(--duration-base) var(--ease-smooth), color var(--duration-base) var(--ease-smooth), box-shadow var(--duration-base) var(--ease-smooth)",
            }}
            onMouseEnter={(e) => {
              if (active !== i) {
                e.currentTarget.style.backgroundColor =
                  "var(--color-surface-raised)";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== i) {
                e.currentTarget.style.backgroundColor =
                  "var(--color-surface)";
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        style={{
          transition:
            "opacity var(--duration-medium) var(--ease-smooth)",
        }}
      >
        {tabs[active].content}
      </div>
    </div>
  );
}
