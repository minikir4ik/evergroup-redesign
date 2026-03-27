import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | EVERGROUP",
  description:
    "Privacy Policy for MoneyRun App Users. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 pb-4 max-w-7xl mx-auto px-6 lg:px-8">
        <nav
          className="flex items-center"
          style={{ gap: "var(--space-2)", fontSize: "var(--text-sm)" }}
        >
          <Link
            href="/"
            className="breadcrumb-link"
          >
            Home
          </Link>
          <span style={{ color: "var(--color-border)" }} aria-hidden="true">
            &rarr;
          </span>
          <span style={{ color: "var(--color-text-muted)" }}>
            Privacy Policy
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p
            className="text-xs uppercase mb-3"
            style={{
              letterSpacing: "0.15em",
              color: "var(--color-accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            LEGAL
          </p>
          <h1
            className="text-4xl lg:text-5xl font-black tracking-tighter"
            style={{
              fontFamily: "var(--font-display)",
              lineHeight: 1.1,
            }}
          >
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Introduction */}
          <h2
            className="text-2xl font-bold tracking-tight mt-12 mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Introduction
          </h2>
          <p
            className="leading-relaxed"
            style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}
          >
            This Privacy Policy explains how Evergroup FZCO
            (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
            collects, uses, and protects information from users of the
            MoneyRun mobile application (&ldquo;App&rdquo;). By using the
            App, you agree to the collection and use of information in
            accordance with this policy.
          </p>
          <p
            className="mt-4 leading-relaxed"
            style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}
          >
            We are committed to protecting your privacy and ensuring the
            security of any personal information you provide. This policy
            applies to all users of the MoneyRun App and describes our
            practices regarding data collection, use, and disclosure.
          </p>

          {/* Divider */}
          <hr
            className="my-12"
            style={{ borderColor: "var(--color-border)", borderTopWidth: "1px" }}
          />

          {/* Information We Collect */}
          <h2
            className="text-2xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Information that MoneyRun Collects
          </h2>
          <p
            className="leading-relaxed mb-4"
            style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}
          >
            When you use the MoneyRun App, we may collect the following
            types of information:
          </p>
          <ul
            className="list-disc pl-6 space-y-2"
            style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}
          >
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Financial information necessary for payment processing (bank card details, e-wallet identifiers)</li>
            <li>Transaction data (payment history, amounts, timestamps, recipients)</li>
            <li>Device information (device type, operating system, unique device identifiers)</li>
            <li>Usage data (how you interact with the App, features used, session duration)</li>
            <li>Location data (if you grant permission, to facilitate location-based services)</li>
            <li>Communication data (messages or requests sent through the App&#8217;s support features)</li>
          </ul>

          {/* Divider */}
          <hr
            className="my-12"
            style={{ borderColor: "var(--color-border)", borderTopWidth: "1px" }}
          />

          {/* How We Use Information */}
          <h2
            className="text-2xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How We Use Information
          </h2>
          <p
            className="leading-relaxed mb-4"
            style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}
          >
            We use the information we collect for the following purposes:
          </p>
          <ul
            className="list-disc pl-6 space-y-2"
            style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}
          >
            <li>To provide, operate, and maintain the MoneyRun App and its core payment services</li>
            <li>To process transactions, send transaction confirmations, and provide related customer support</li>
            <li>To verify your identity and prevent fraud, unauthorized transactions, and other illegal activities</li>
            <li>To comply with applicable legal and regulatory obligations, including anti-money laundering (AML) and know-your-customer (KYC) requirements</li>
            <li>To improve and personalize your experience with the App</li>
            <li>To communicate with you about updates, security alerts, and support-related messages</li>
            <li>To analyze usage patterns and trends to improve the functionality and performance of our services</li>
          </ul>
          <p
            className="mt-4 leading-relaxed"
            style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}
          >
            We do not sell your personal information to third parties. We
            may share information with trusted partners and service
            providers who assist us in operating the App, provided they
            agree to keep your information secure and confidential.
          </p>

          {/* Divider */}
          <hr
            className="my-12"
            style={{ borderColor: "var(--color-border)", borderTopWidth: "1px" }}
          />

          {/* Contact */}
          <h2
            className="text-2xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact
          </h2>
          <p
            className="leading-relaxed"
            style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}
          >
            If you have any questions or concerns about this Privacy
            Policy, please contact us:
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-semibold">
              Evergroup FZCO
            </p>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Dubai Silicon Oasis, DDP,
              <br />
              Building A4, office 004,
              <br />
              Dubai, UAE
            </p>
            <p className="mt-2">
              <a
                href="https://evergroup.tech"
                className="privacy-link"
              >
                https://evergroup.tech
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
