"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function CTASection() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative py-20 sm:py-28 lg:py-32 border-t overflow-hidden"
      style={{ borderColor: "var(--color-border-subtle)" }}
    >

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <h2
            className="font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 6vw, 60px)", lineHeight: 1.15 }}
          >
            Ready to modernize your infrastructure?
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <button
            onClick={scrollToContact}
            className="mt-8 sm:mt-10 w-full sm:w-auto px-10 py-4 rounded-full font-medium transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-on-accent)",
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              minHeight: "48px",
            }}
          >
            Get Started
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
}
