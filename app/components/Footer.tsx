"use client";

import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "CRC", href: "/crc" },
  { label: "Momentum Pay", href: "/momentumpay" },
  { label: "Fare Collection", href: "/farecollection" },
  { label: "Custom Software", href: "/csd" },
  { label: "Privacy Policy", href: "/privacy_policy" },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#0f0f0f" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Link href="/">
            <Image src="/logos/evergroup-logo.png" alt="EVERGROUP" width={160} height={32} className="h-8 w-auto" />
          </Link>
          <nav className="flex flex-wrap items-center gap-6">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm transition-colors" style={{ color: "#666666" }}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: "#2a2a2a" }}>
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p style={{ fontSize: "11px", color: "#666666" }}>&copy; 2026 Evergroup FZCO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
