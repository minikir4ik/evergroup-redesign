import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";

export const metadata: Metadata = {
  title: "Custom Software Development | EVERGROUP",
};

/* ── Icon helper ── */
const Icon = ({ d }: { d: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

/* ── Features ── */
const features = [
  {
    icon: <Icon d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />,
    title: "Full-cycle Development",
    description:
      "From initial concept through architecture, development, testing, and deployment. We own the entire lifecycle.",
  },
  {
    icon: <Icon d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L21.75 16.5 12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />,
    title: "Modern Architecture",
    description:
      "Microservices, event-driven systems, and clean API design. Software that scales with your growth.",
  },
  {
    icon: <Icon d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />,
    title: "Cloud-native",
    description:
      "Built for the cloud from day one. Auto-scaling, container orchestration, and infrastructure-as-code.",
  },
  {
    icon: <Icon d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />,
    title: "Dedicated Teams",
    description:
      "Senior engineers, architects, and product managers embedded in your workflow. A true extension of your team.",
  },
  {
    icon: <Icon d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" />,
    title: "Agile Delivery",
    description:
      "Two-week sprints, continuous integration, and transparent progress tracking. Results early and often.",
  },
  {
    icon: <Icon d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />,
    title: "Long-term Support",
    description:
      "Post-launch monitoring, performance optimization, and feature iteration. We stay with your product.",
  },
];

/* ── Steps ── */
const steps = [
  {
    title: "Discovery & Planning",
    description:
      "We map your business processes, identify technical requirements, and define a clear project roadmap.",
  },
  {
    title: "Architecture Design",
    description:
      "System architecture, data models, API contracts, and UX wireframes, all validated before code is written.",
  },
  {
    title: "Iterative Development",
    description:
      "Agile sprints with continuous integration, automated testing, and regular demos every two weeks.",
  },
  {
    title: "Launch & Support",
    description:
      "Staged deployments, production monitoring, and ongoing optimization.",
  },
];

/* ── Activity log ── */
const activity = [
  { time: "14:32", text: "Production deployment completed" },
  { time: "14:18", text: "Code review approved" },
  { time: "13:55", text: "Full test suite passed" },
  { time: "12:22", text: "Sprint review completed" },
];

const techStack = ["C#/.NET", "Python", "Flutter", "React", "Vue.js", "Azure", "PostgreSQL", "Oracle SQL"];

/* ── Mockup ── */
const mockup = (
  <div style={{ fontFamily: "var(--font-body)" }}>
    {/* IS360 Framework */}
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div className="flex items-center justify-between" style={{ marginBottom: "var(--space-2)" }}>
        <span
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            fontFamily: "var(--font-display)",
          }}
        >
          IS360 Framework
        </span>
        <span
          style={{
            fontSize: "var(--text-xs)",
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Full Lifecycle
        </span>
      </div>
      <div
        className="rounded-full overflow-hidden"
        style={{
          height: "6px",
          backgroundColor: "var(--color-surface-raised)",
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "var(--color-accent)",
          }}
        />
      </div>
    </div>

    {/* 3 stat cards */}
    <div
      className="grid grid-cols-3 gap-3"
      style={{ marginBottom: "var(--space-6)" }}
    >
      {[
        { label: "Experience", value: "10+ yrs" },
        { label: "Domains", value: "BPM/AML" },
        { label: "Platforms", value: "6+" },
      ].map((s) => (
        <div
          key={s.label}
          className="rounded-lg"
          style={{
            background: "var(--color-surface-raised)",
            padding: "var(--space-3)",
          }}
        >
          <div
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
            }}
          >
            {s.label}
          </div>
          <div
            className="font-bold mt-1"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-md)",
            }}
          >
            {s.value}
          </div>
        </div>
      ))}
    </div>

    {/* Activity log */}
    <div style={{ marginBottom: "var(--space-6)" }}>
      <div
        style={{
          fontSize: "var(--text-xs)",
          color: "var(--color-text-muted)",
          marginBottom: "var(--space-3)",
          fontWeight: 500,
        }}
      >
        Recent Activity
      </div>
      {activity.map((entry, i) => (
        <div
          key={i}
          className="flex items-center"
          style={{
            gap: "var(--space-3)",
            padding: "var(--space-2) 0",
            borderTop:
              i > 0 ? "1px solid var(--color-border-subtle)" : "none",
          }}
        >
          <span
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-mono)",
              width: "40px",
              flexShrink: 0,
            }}
          >
            {entry.time}
          </span>
          <span
            className="shrink-0"
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "100px",
              backgroundColor: "var(--color-accent)",
            }}
          />
          <span
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--color-text-secondary)",
            }}
          >
            {entry.text}
          </span>
        </div>
      ))}
    </div>

    {/* Tech stack badges */}
    <div className="flex flex-wrap" style={{ gap: "var(--space-2)" }}>
      {techStack.map((tech) => (
        <span
          key={tech}
          className="rounded-full"
          style={{
            padding: "var(--space-1) var(--space-3)",
            fontSize: "var(--text-xs)",
            fontWeight: 500,
            backgroundColor: "var(--color-surface-raised)",
            color: "var(--color-text-secondary)",
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default function CSDPage() {
  return (
    <ProductPageLayout
      name="Custom Software Development"
      tagline="Full-cycle engineering for financial systems."
      breadcrumb="Custom Software"
      mockup={mockup}
      features={features}
      steps={steps}
    />
  );
}
