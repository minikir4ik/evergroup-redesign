"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

/* ── Product links used in the dropdown ── */
const products = [
  { label: "CRC", href: "/crc", description: "Compliance & Risk Control" },
  { label: "Momentum Pay", href: "/momentumpay", description: "Payment Processing" },
  { label: "Fare Collection", href: "/farecollection", description: "Transit Fare Systems" },
  { label: "CSD", href: "/csd", description: "Custom Software Development" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/80 backdrop-blur-xl border-b border-slate-800/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="text-white text-lg font-bold tracking-tight"
          >
            EVERGROUP
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-8">
            {/* Products dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
                onClick={() => setProductsOpen((prev) => !prev)}
              >
                Products
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  productsOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="w-64 rounded-xl bg-[#0f1629] border border-slate-800/80 shadow-2xl shadow-black/40 p-2">
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 hover:bg-slate-800/50 transition-colors"
                      onClick={() => setProductsOpen(false)}
                    >
                      <span className="text-sm font-medium text-white">
                        {product.label}
                      </span>
                      <span className="text-xs text-slate-400">
                        {product.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Company */}
            <a
              href="/#about"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Company
            </a>

            {/* Contact */}
            <a
              href="mailto:ask@evergroup.tech"
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              Contact
            </a>

            {/* CTA */}
            <a
              href="mailto:ask@evergroup.tech"
              className="ml-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a0f1e]/95 backdrop-blur-xl border-t border-slate-800/50 px-6 py-5 flex flex-col gap-1">
          {/* Products accordion */}
          <button
            className="flex items-center justify-between w-full py-3 text-sm text-slate-300 hover:text-white transition-colors"
            onClick={() => setMobileProductsOpen((prev) => !prev)}
          >
            Products
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                mobileProductsOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              mobileProductsOpen ? "max-h-60" : "max-h-0"
            }`}
          >
            <div className="pl-4 pb-2 flex flex-col gap-1">
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {product.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <a
            href="/#about"
            onClick={() => setMobileOpen(false)}
            className="py-3 text-sm text-slate-300 hover:text-white transition-colors"
          >
            Company
          </a>

          {/* Contact */}
          <a
            href="mailto:ask@evergroup.tech"
            onClick={() => setMobileOpen(false)}
            className="py-3 text-sm text-slate-300 hover:text-white transition-colors"
          >
            Contact
          </a>

          {/* CTA */}
          <a
            href="mailto:ask@evergroup.tech"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
