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
      className="relative py-32 border-t overflow-hidden"
      style={{ borderColor: "var(--color-border-subtle)" }}
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <h2
            className="text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to modernize your infrastructure?
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <button
            onClick={scrollToContact}
            className="mt-10 px-10 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-on-accent)",
              fontFamily: "var(--font-body)",
            }}
          >
            Get Started
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
}
