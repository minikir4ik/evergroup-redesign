import type { Metadata } from "next";
import { Epilogue, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "EVERGROUP — Compliance, Payments & Fare Collection Systems",
  description:
    "Dubai-based software company building compliance risk management, payment infrastructure, and automated fare collection systems for financial institutions and transport operators across CIS, Central Asia, and the Middle East.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <ScrollToTop />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
