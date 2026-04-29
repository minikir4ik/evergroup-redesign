import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Momentum Pay — Instant Contractor Payments | EVERGROUP",
};

export default function MomentumPayLayout({ children }: { children: ReactNode }) {
  return children;
}
