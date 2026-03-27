"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const products = [
  { label: "CRC", desc: "Compliance Risk Control", href: "/crc" },
  { label: "Momentum Pay", desc: "Payment Processing", href: "/momentumpay" },
  { label: "Fare Collection", desc: "Transit Fare Systems", href: "/farecollection" },
  { label: "CSD", desc: "Custom Software", href: "/csd" },
];

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault();
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#contact";
  }
};

const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "background-color var(--duration-medium) var(--ease-smooth), border-color var(--duration-medium) var(--ease-smooth)",
        backgroundColor: scrolled ? "rgba(10,15,30,0.8)" : "transparent",
        borderBottom: `1px solid ${scrolled ? "var(--color-border-subtle)" : "transparent"}`,
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto" style={{ padding: "0 var(--space-6)" }}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold tracking-tight text-xl"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-text)" }}
          >
            EVERGROUP
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center" style={{ gap: "var(--space-8)" }}>
            {/* Products dropdown */}
            <div ref={dropRef} className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button
                className="flex items-center cursor-pointer"
                style={{ gap: "var(--space-1)", fontSize: "var(--text-sm)", color: "var(--color-text-secondary)", transition: "color var(--duration-base) var(--ease-smooth)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                onClick={() => setDropOpen((p) => !p)}
                aria-expanded={dropOpen}
              >
                Products
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                style={{
                  opacity: dropOpen ? 1 : 0,
                  transform: `translateX(-50%) translateY(${dropOpen ? "0" : "-4px"})`,
                  pointerEvents: dropOpen ? "auto" : "none",
                  transition: "opacity var(--duration-base) var(--ease-smooth), transform var(--duration-base) var(--ease-smooth)",
                }}
              >
                <div
                  className="w-64 rounded-lg"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", padding: "var(--space-2)" }}
                >
                  {products.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setDropOpen(false)}
                      className="flex flex-col rounded-md"
                      style={{ padding: "var(--space-3) var(--space-3)", transition: "background-color var(--duration-fast) var(--ease-smooth)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-surface-raised)")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      <span style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--color-text)" }}>{p.label}</span>
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)" }}>{p.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#"
              style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)", transition: "color var(--duration-base) var(--ease-smooth)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
            >
              Company
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              style={{ fontSize: "var(--text-sm)", color: "var(--color-text-secondary)", transition: "color var(--duration-base) var(--ease-smooth)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="rounded-full cursor-pointer"
              style={{
                marginLeft: "var(--space-2)",
                padding: "var(--space-2) var(--space-6)",
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                backgroundColor: "var(--color-accent)",
                color: "var(--color-on-accent)",
                transition: "transform var(--duration-base) var(--ease-spring), background-color var(--duration-base) var(--ease-smooth)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.backgroundColor = "var(--color-accent-hover)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.backgroundColor = "var(--color-accent)"; }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2 cursor-pointer"
            style={{ color: "var(--color-text)" }}
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "28rem" : "0",
          opacity: mobileOpen ? 1 : 0,
          transition: "max-height var(--duration-medium) var(--ease-smooth), opacity var(--duration-medium) var(--ease-smooth)",
        }}
      >
        <div style={{ backgroundColor: "rgba(10,15,30,0.95)", backdropFilter: "blur(16px)", borderTop: "1px solid var(--color-border-subtle)", padding: "var(--space-6)" }} className="flex flex-col" role="menu">
          <button
            className="flex items-center justify-between w-full cursor-pointer"
            style={{ padding: "var(--space-3) 0", fontSize: "var(--text-sm)", color: "var(--color-text-secondary)", transition: "color var(--duration-base) var(--ease-smooth)" }}
            onClick={() => setMobileDropOpen((p) => !p)}
            aria-expanded={mobileDropOpen}
          >
            Products
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropOpen ? "rotate-180" : ""}`} />
          </button>

          <div className="overflow-hidden" style={{ maxHeight: mobileDropOpen ? "15rem" : "0", transition: "max-height var(--duration-base) var(--ease-smooth)" }}>
            <div className="flex flex-col" style={{ paddingLeft: "var(--space-4)", paddingBottom: "var(--space-2)", gap: "var(--space-1)" }}>
              {products.map((p) => (
                <Link key={p.href} href={p.href} onClick={() => setMobileOpen(false)} style={{ padding: "var(--space-2) 0", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", transition: "color var(--duration-base) var(--ease-smooth)" }} role="menuitem">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          <a href="#" onClick={() => setMobileOpen(false)} style={{ padding: "var(--space-3) 0", fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }} role="menuitem">Company</a>

          <a href="#contact" onClick={(e) => { scrollToContact(e); setMobileOpen(false); }} style={{ padding: "var(--space-3) 0", fontSize: "var(--text-sm)", color: "var(--color-text-secondary)" }} role="menuitem">Contact</a>

          <a
            href="#contact"
            onClick={(e) => { scrollToContact(e); setMobileOpen(false); }}
            className="rounded-full text-center"
            style={{ marginTop: "var(--space-3)", padding: "var(--space-3) var(--space-6)", fontSize: "var(--text-sm)", fontWeight: 500, backgroundColor: "var(--color-accent)", color: "var(--color-on-accent)" }}
            role="menuitem"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
