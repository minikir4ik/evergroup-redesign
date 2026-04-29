import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fare Collection — Automated Fare Systems | EVERGROUP",
};

export default function FareCollectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
