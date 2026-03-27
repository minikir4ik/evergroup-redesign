"use client";

import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid var(--color-border)",
              transition:
                "border-color var(--duration-medium) var(--ease-smooth)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--color-accent-muted)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--color-border)")
            }
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center gap-4 p-6 text-left cursor-pointer"
            >
              <span
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                style={{
                  fontSize: "var(--text-sm)",
                  backgroundColor: "var(--color-accent-glow)",
                  color: "var(--color-accent)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="flex-1 font-semibold text-lg"
                style={{ color: "var(--color-text)" }}
              >
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                style={{
                  color: "var(--color-text-muted)",
                  transition:
                    "transform var(--duration-medium) var(--ease-smooth)",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"}`}
              style={{
                transition:
                  "max-height var(--duration-medium) var(--ease-smooth)",
              }}
            >
              <div
                className="px-6 pb-6 pl-20 leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
