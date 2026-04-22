"use client";

import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { label: "CRC", href: "/crc" },
  { label: "Momentum Pay", href: "/momentumpay" },
  { label: "Fare Collection", href: "/farecollection" },
];

const serviceLinks = [
  { label: "Custom Software Development", href: "/csd" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy_policy" },
];

const groupLabelStyle = {
  fontSize: "11px",
  letterSpacing: "0.2em",
  fontWeight: 600,
  color: "#6abf4b",
  fontFamily: "var(--font-mono)",
} as const;

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#0f0f0f" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-10">
          <Link href="/" scroll={true}>
            <Image src="/logos/evergroup-logo.png" alt="EVERGROUP" width={160} height={32} className="h-8 w-auto" />
          </Link>
          <div className="flex flex-wrap items-start gap-10 md:gap-14">
            <div className="flex flex-col gap-3">
              <p className="uppercase" style={groupLabelStyle}>Products</p>
              <nav className="flex flex-col gap-2">
                {productLinks.map((link) => (
                  <Link key={link.href} href={link.href} scroll={true} className="transition-colors" style={{ fontSize: "15px", color: "#999999" }}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-3">
              <p className="uppercase" style={groupLabelStyle}>Services</p>
              <nav className="flex flex-col gap-2">
                {serviceLinks.map((link) => (
                  <Link key={link.href} href={link.href} scroll={true} className="transition-colors" style={{ fontSize: "15px", color: "#999999" }}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-3">
              <p className="uppercase" style={groupLabelStyle}>Legal</p>
              <nav className="flex flex-col gap-2">
                {legalLinks.map((link) => (
                  <Link key={link.href} href={link.href} scroll={true} className="transition-colors" style={{ fontSize: "15px", color: "#999999" }}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: "#2a2a2a" }}>
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p style={{ fontSize: "13px", color: "#999999" }}>&copy; 2026 Evergroup FZCO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
