import Link from "next/link";

const productLinks = [
  { label: "CRC", href: "/crc" },
  { label: "Momentum Pay", href: "/momentumpay" },
  { label: "Fare Collection", href: "/farecollection" },
  { label: "CSD", href: "/csd" },
];

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Contact", href: "mailto:ask@evergroup.tech" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy_policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Top: Logo + tagline ── */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-white text-lg font-bold tracking-tight"
          >
            EVERGROUP
          </Link>
          <p className="mt-2 text-slate-400 text-sm max-w-xs">
            Financial infrastructure, modernized.
          </p>
        </div>

        {/* ── Middle: Link columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Products */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Products</h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("mailto:") ? (
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom: Divider + copyright ── */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm">
            &copy; 2024 Evergroup FZCO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
