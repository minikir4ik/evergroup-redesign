"use client";

import Link from "next/link";

const navLinks = [
  { label: "CRC", href: "/crc" },
  { label: "Momentum Pay", href: "/momentumpay" },
  { label: "Fare Collection", href: "/farecollection" },
  { label: "Custom Software", href: "/csd" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy_policy" },
];

export default function Footer() {
  return (
    <footer
      className="py-16 border-t"
      style={{ borderColor: "var(--color-accent)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo + Tagline */}
          <div>
            <p
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              EVERGROUP
            </p>
            <p
              className="mt-2 text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              Software that powers finance.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3
              className="text-xs uppercase tracking-widest mb-4"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-text-muted)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3
              className="text-xs uppercase tracking-widest mb-4"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "var(--color-text-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-text-muted)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 mt-8 border-t"
          style={{ borderColor: "var(--color-border-subtle)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            &copy; 2025 Evergroup FZCO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
