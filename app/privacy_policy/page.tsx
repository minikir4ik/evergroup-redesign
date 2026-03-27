import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — MoneyRun App | EVERGROUP",
  description:
    "Privacy Policy for MoneyRun App Users. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="bg-[#0a0f1e] pt-32 pb-12 text-center">
        <p className="text-xs tracking-widest uppercase text-blue-400">
          LEGAL
        </p>
        <h1 className="mt-4 text-4xl lg:text-5xl font-black tracking-tight text-white">
          Privacy Policy
        </h1>
      </section>

      {/* ═══════════════════ CONTENT ═══════════════════ */}
      <section className="bg-[#0a0f1e] pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Introduction */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Introduction
          </h2>
          <p className="text-slate-400 leading-relaxed">
            This Privacy Policy explains how Evergroup FZCO
            (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
            collects, uses, and protects information from users of the
            MoneyRun mobile application (&ldquo;App&rdquo;). By using the
            App, you agree to the collection and use of information in
            accordance with this policy.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            We are committed to protecting your privacy and ensuring the
            security of any personal information you provide. This policy
            applies to all users of the MoneyRun App and describes our
            practices regarding data collection, use, and disclosure.
          </p>

          {/* Information We Collect */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Information that MoneyRun Collects
          </h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            When you use the MoneyRun App, we may collect the following
            types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Financial information necessary for payment processing (bank card details, e-wallet identifiers)</li>
            <li>Transaction data (payment history, amounts, timestamps, recipients)</li>
            <li>Device information (device type, operating system, unique device identifiers)</li>
            <li>Usage data (how you interact with the App, features used, session duration)</li>
            <li>Location data (if you grant permission, to facilitate location-based services)</li>
            <li>Communication data (messages or requests sent through the App&#8217;s support features)</li>
          </ul>

          {/* How We Use Information */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            How We Use Information
          </h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-400">
            <li>To provide, operate, and maintain the MoneyRun App and its core payment services</li>
            <li>To process transactions, send transaction confirmations, and provide related customer support</li>
            <li>To verify your identity and prevent fraud, unauthorized transactions, and other illegal activities</li>
            <li>To comply with applicable legal and regulatory obligations, including anti-money laundering (AML) and know-your-customer (KYC) requirements</li>
            <li>To improve and personalize your experience with the App</li>
            <li>To communicate with you about updates, security alerts, and support-related messages</li>
            <li>To analyze usage patterns and trends to improve the functionality and performance of our services</li>
          </ul>
          <p className="mt-4 text-slate-400 leading-relaxed">
            We do not sell your personal information to third parties. We
            may share information with trusted partners and service
            providers who assist us in operating the App, provided they
            agree to keep your information secure and confidential.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Contact
          </h2>
          <p className="text-slate-400 leading-relaxed">
            If you have any questions or concerns about this Privacy
            Policy, please contact us:
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-white font-semibold">
              Evergroup FZCO
            </p>
            <p className="text-slate-400">
              Dubai Silicon Oasis, DDP,
              <br />
              Building A4, office 004,
              <br />
              Dubai, UAE
            </p>
            <p className="mt-2">
              <a
                href="https://evergroup.tech"
                className="text-blue-400 hover:text-blue-300 transition-colors"
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
