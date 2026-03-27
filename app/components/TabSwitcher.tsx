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
            className={`px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 cursor-pointer ${
              active === i
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="transition-all duration-300">{tabs[active].content}</div>
    </div>
  );
}
