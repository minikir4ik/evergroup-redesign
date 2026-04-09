"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function TrustBar() {
  return (
    <section className="py-24 lg:py-32 border-t" style={{ borderColor: "#2a2a2a", backgroundColor: "#0f0f0f" }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollAnimation>
          <p className="text-center" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
            Payment Systems
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="flex flex-wrap gap-10 lg:gap-14 items-center justify-center mt-10">
            <Image src="/logos/visa.png" alt="Visa" width={80} height={44} style={{ height: "44px", width: "auto" }} />
            <Image src="/logos/mastercard.png" alt="Mastercard" width={80} height={50} style={{ height: "50px", width: "auto" }} />
            <Image src="/logos/apple-pay.png" alt="Apple Pay" width={80} height={44} style={{ height: "44px", width: "auto" }} />
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded" style={{ backgroundColor: "#1428a0", padding: "5px 10px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#fff", letterSpacing: "2px" }}>SAMSUNG</span>
              </span>
              <span style={{ fontSize: "22px", fontWeight: 300, color: "#fff" }}>Pay</span>
            </div>
            <Image src="/logos/android-pay.png" alt="Android Pay" width={80} height={50} style={{ height: "50px", width: "auto" }} />
            <span style={{ fontSize: "24px", fontWeight: 700, color: "#fff", letterSpacing: "0.5px" }}>
              cipurse<span style={{ fontSize: "10px", verticalAlign: "super", color: "#888" }}>(TM)</span>
            </span>
          </div>
        </ScrollAnimation>

        <div className="my-14" style={{ borderTop: "1px solid #2a2a2a" }} />

        <ScrollAnimation>
          <p className="text-center" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#6abf4b", fontFamily: "var(--font-mono)" }}>
            Technology Partners
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="flex flex-wrap gap-10 lg:gap-16 items-center justify-center mt-10">
            <Image src="/logos/nxp.png" alt="NXP" width={80} height={56} style={{ height: "56px", width: "auto" }} />
            <Image src="/logos/gemalto.png" alt="Gemalto" width={120} height={72} style={{ height: "72px", width: "auto" }} />
            <Image src="/logos/infineon.png" alt="Infineon" width={80} height={48} style={{ height: "48px", width: "auto" }} />
          </div>
          <div className="flex flex-wrap gap-10 lg:gap-16 items-center justify-center mt-10">
            <Image src="/logos/kazintersoft.png" alt="KazInterSoft" width={120} height={40} style={{ height: "40px", width: "auto" }} />
            <Image src="/logos/global-transport.png" alt="Global Transport" width={120} height={48} style={{ height: "48px", width: "auto" }} />
            <Image src="/logos/tezcard.png" alt="Tezcard" width={120} height={56} style={{ height: "56px", width: "auto" }} />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
