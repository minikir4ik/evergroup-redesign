"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

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
        backgroundColor: "#0f0f0f",
        borderBottom: "1px solid #2a2a2a",
        backdropFilter: "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image src="/logos/evergroup-logo.png" alt="EVERGROUP" width={160} height={32} className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div ref={dropRef} className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button
                className="flex items-center gap-1 cursor-pointer"
                style={{ fontSize: "15px", fontWeight: 500, color: "#888888", transition: "color 200ms ease" }}
                onClick={() => setDropOpen((p) => !p)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
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
                  transition: "opacity 200ms ease, transform 200ms ease",
                }}
              >
                <div className="rounded-[12px]" style={{ background: "#141414", border: "1px solid #2a2a2a", padding: "12px", width: "320px", boxShadow: "0 8px 40px rgba(0,0,0,0.6)" }}>
                  {products.map((p, i) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setDropOpen(false)}
                      className="flex flex-col transition-colors duration-100 border-l-2 border-l-transparent hover:border-l-[#6abf4b] hover:bg-[#1a1a1a]"
                      style={{ padding: "16px 20px", borderBottom: i < products.length - 1 ? "1px solid #2a2a2a" : "none" }}
                    >
                      <span style={{ fontSize: "17px", fontWeight: 700, color: "#ffffff" }}>{p.label}</span>
                      <span style={{ fontSize: "14px", color: "#888888" }}>{p.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <a href="#" style={{ fontSize: "15px", fontWeight: 500, color: "#888888", transition: "color 200ms ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}>Company</a>
            <a href="#contact" onClick={scrollToContact} style={{ fontSize: "15px", fontWeight: 500, color: "#888888", transition: "color 200ms ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}>Contact</a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="rounded-full cursor-pointer ml-2"
              style={{ padding: "8px 24px", fontSize: "13px", fontWeight: 500, backgroundColor: "#6abf4b", color: "#000000" }}
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden p-3 -mr-3 cursor-pointer"
            style={{ color: "#ffffff" }}
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

      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: mobileOpen ? "28rem" : "0",
          opacity: mobileOpen ? 1 : 0,
          transition: "max-height 300ms ease, opacity 300ms ease",
        }}
      >
        <div style={{ backgroundColor: "rgba(15,15,15,0.95)", backdropFilter: "blur(16px)", borderTop: "1px solid #2a2a2a", padding: "24px" }} className="flex flex-col" role="menu">
          <button
            className="flex items-center justify-between w-full cursor-pointer"
            style={{ padding: "12px 0", fontSize: "16px", color: "#b8b8b8" }}
            onClick={() => setMobileDropOpen((p) => !p)}
            aria-expanded={mobileDropOpen}
          >
            Products
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropOpen ? "rotate-180" : ""}`} />
          </button>

          <div className="overflow-hidden" style={{ maxHeight: mobileDropOpen ? "15rem" : "0", transition: "max-height 200ms ease" }}>
            <div className="flex flex-col" style={{ paddingLeft: "16px", paddingBottom: "8px", gap: "4px" }}>
              {products.map((p) => (
                <Link key={p.href} href={p.href} onClick={() => setMobileOpen(false)} style={{ padding: "8px 0", fontSize: "13px", color: "#888888" }} role="menuitem">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          <a href="#" onClick={() => setMobileOpen(false)} style={{ padding: "12px 0", fontSize: "16px", color: "#b8b8b8" }} role="menuitem">Company</a>
          <a href="#contact" onClick={(e) => { scrollToContact(e); setMobileOpen(false); }} style={{ padding: "12px 0", fontSize: "16px", color: "#b8b8b8" }} role="menuitem">Contact</a>

          <a
            href="#contact"
            onClick={(e) => { scrollToContact(e); setMobileOpen(false); }}
            className="rounded-full text-center"
            style={{ marginTop: "12px", padding: "12px 24px", fontSize: "13px", fontWeight: 500, backgroundColor: "#6abf4b", color: "#000000" }}
            role="menuitem"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
