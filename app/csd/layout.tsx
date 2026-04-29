import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Custom Software Development | EVERGROUP",
};

export default function CSDLayout({ children }: { children: ReactNode }) {
  return children;
}
