import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "CRC — Compliance Risk Control | EVERGROUP",
};

export default function CRCLayout({ children }: { children: ReactNode }) {
  return children;
}
