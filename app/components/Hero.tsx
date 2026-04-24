"use client";

import ScrollAnimation, { StaggerContainer } from "./ScrollAnimation";

const glanceCards = [
  {
    title: "CRC",
    body: "50+ data sources / 10 functional blocks for compliance risk management",
  },
  {
    title: "Momentum Pay",
    body: "700+ taxi companies / 100,000 active drivers in the current network",
  },
  {
    title: "Fare Collection",
    body: "Deployed in Samarkand, Ferghana, Vinnitsa, and Kokshetau / Automated fare accounting with instant data transfer",
  },
  {
    title: "Custom Software Development",
    body: "10+ years of software delivery experience / Financial and enterprise systems",
  },
];

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative overflow-hidden" style={{ backgroundColor: "#0f0f0f" }}>
      <div className="absolute inset-0 bg-animated-grid" />
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(106, 191, 75, 0.08) 0%, transparent 70%)" }} />

          <ScrollAnimation delay={0.1}>
            <h1
              className="relative text-6xl lg:text-8xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "#ffffff", lineHeight: 1 }}
            >
              Enterprise FinTech<br />Infrastructure
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p className="mt-8 max-w-2xl mx-auto" style={{ fontSize: "18px", lineHeight: 1.8, color: "#999999" }}>
              Compliance, payment, and fare collection systems for banks, transport operators, service platforms, and enterprise clients. Built and delivered from Dubai for clients across the UAE, CIS, and Central Asia.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="flex gap-4 mt-10 justify-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-full font-medium transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
                style={{ backgroundColor: "#6abf4b", color: "#000000" }}
              >
                Get Started
              </button>
              <a
                href="#products"
                className="px-8 py-3.5 rounded-full font-medium border transition-all duration-200 hover:translate-y-[-2px]"
                style={{ borderColor: "#2a2a2a", color: "#ffffff" }}
              >
                See Products
              </a>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.4} className="mt-20">
          <p
            className="text-center uppercase"
            style={{
              fontSize: "13px",
              letterSpacing: "0.25em",
              fontWeight: 500,
              color: "#6abf4b",
              fontFamily: "var(--font-mono)",
            }}
          >
            At a glance
          </p>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 max-w-4xl mx-auto">
            {glanceCards.map((card) => (
              <div
                key={card.title}
                data-stagger-item
                className="rounded-xl"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  padding: "28px 32px",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    fontFamily: "var(--font-display)",
                    color: "#6abf4b",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-3"
                  style={{ fontSize: "15px", lineHeight: 1.7, color: "#ffffff" }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </ScrollAnimation>
      </div>
    </section>
  );
}
