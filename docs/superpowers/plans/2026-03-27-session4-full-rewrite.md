# Session 4 — Full Site Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite evergroup.tech from a consulting-style site into a Stripe/Linear-grade software product site with a React Three Fiber 3D hero, GSAP scroll-driven animations, Lenis smooth scroll, and a clean inline contact form.

**Architecture:** Component-based Next.js 16 app. Homepage composed of 8 sections (Navbar, Hero, TrustBar, FeaturesGrid, ProductShowcase, Stats, CTA, Footer). 4 product pages following a shared Stripe-style template. All animations driven by GSAP ScrollTrigger synced with Lenis. 3D hero scene rendered via R3F with scroll-driven camera animation. Design tokens defined as CSS custom properties and extended into Tailwind config.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, React Three Fiber, Three.js, @react-three/drei, @react-three/postprocessing, GSAP (ScrollTrigger), Lenis, Framer Motion (retained for simple transitions only)

**Style:** Corporate Rebel (no-slop-frontend Playbook 6.18) — adapted for dark navy + white + custom blue palette per SESSION4.md

---

## File Map

### Files to CREATE
- `app/globals-tokens.css` — Design tokens (CSS custom properties)
- `app/components/Scene3D.tsx` — R3F Canvas + 3D dashboard model
- `app/components/DashboardModel.tsx` — 3D floating dashboard geometry
- `app/components/CameraRig.tsx` — Scroll-driven camera controller
- `app/components/SmoothScroll.tsx` — Lenis wrapper provider
- `app/components/ScrollAnimation.tsx` — GSAP ScrollTrigger wrapper (replaces ScrollReveal)
- `app/components/ContactSection.tsx` — Inline contact form (replaces ContactForm)
- `app/components/ProductPageLayout.tsx` — Shared product page template

### Files to REWRITE (full replacement)
- `app/globals.css` — Import tokens, grid pattern, reduced-motion, new animations
- `app/layout.tsx` — New fonts (Syne + Epilogue + JetBrains Mono), Lenis wrapper
- `app/page.tsx` — New homepage composition
- `app/components/Hero.tsx` — 3D hero with R3F scene
- `app/components/Navbar.tsx` — Simplified, no consulting language
- `app/components/TrustBar.tsx` — Text-only, no boxes
- `app/components/FeaturesGrid.tsx` — 3 columns, border cards, no shadows
- `app/components/ProductShowcase.tsx` — Alternating rows with real mockups
- `app/components/StatsBanner.tsx` — Giant numbers, horizontal, dividers
- `app/components/CTASection.tsx` — One headline, one button, border-top
- `app/components/Footer.tsx` — 3 columns, blue top border, minimal
- `app/crc/page.tsx` — Stripe-style product page
- `app/momentumpay/page.tsx` — Stripe-style product page
- `app/farecollection/page.tsx` — Stripe-style product page
- `app/csd/page.tsx` — Stripe-style product page

### Files to DELETE
- `app/components/CursorTrail.tsx` — SESSION4 Fix 6: remove cursor effects
- `app/components/TiltCard.tsx` — SESSION4 Fix 6: remove tilt effects
- `app/components/RelatedProducts.tsx` — SESSION4 Fix 4: no related products clutter
- `app/components/HeroSection.tsx` — Unused particle hero (replaced by Hero.tsx)
- `app/components/ScrollReveal.tsx` — Replaced by GSAP ScrollAnimation
- `app/components/ContactForm.tsx` — Replaced by ContactSection
- `app/components/CountUp.tsx` — Inlined into StatsBanner

### Files to KEEP (minor edits only)
- `app/components/Accordion.tsx` — Used in product pages, minor style update
- `app/components/TabSwitcher.tsx` — Used in mockups, minor style update
- `app/template.tsx` — Keep as-is (empty wrapper)
- `app/privacy_policy/page.tsx` — Minor style alignment
- `next.config.ts` — Add transpilePackages for three.js
- `postcss.config.mjs` — Keep as-is
- `tsconfig.json` — Keep as-is

---

## Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install 3D and animation packages**

```bash
cd /Users/kirillrodionov/evergroup-redesign
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing gsap lenis
npm install -D @types/three
```

- [ ] **Step 2: Verify installation**

```bash
node -e "require('three'); require('gsap'); console.log('OK')"
```
Expected: `OK`

- [ ] **Step 3: Update next.config.ts for Three.js transpilation**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
};

export default nextConfig;
```

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json next.config.ts
git commit -m "feat: add three.js, R3F, GSAP, and Lenis dependencies"
```

---

## Task 2: Design Tokens + Global CSS

**Files:**
- Create: `app/globals-tokens.css`
- Rewrite: `app/globals.css`

- [ ] **Step 1: Create design tokens file**

Create `app/globals-tokens.css`:

```css
:root {
  /* === EVERGROUP Design Tokens === */

  /* Colors — Corporate Rebel adapted for navy + blue */
  --color-bg: #0a0f1e;
  --color-surface: #111827;
  --color-surface-raised: #1a2332;
  --color-border: #1e2d40;
  --color-border-subtle: rgba(30, 45, 64, 0.5);
  --color-text: #f0f4f8;
  --color-text-secondary: #94a3b8;
  --color-text-muted: #64748b;
  --color-accent: #4f6ef7;
  --color-accent-hover: #6b8aff;
  --color-accent-muted: #3d5bd4;
  --color-accent-glow: rgba(79, 110, 247, 0.15);
  --color-on-accent: #ffffff;

  /* Typography — Syne (display) + Epilogue (body) + JetBrains Mono (data) */
  --font-display: 'Syne', sans-serif;
  --font-body: 'Epilogue', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Type Scale — dramatic contrast */
  --text-xs: 11px;
  --text-sm: 13px;
  --text-base: 16px;
  --text-md: 18px;
  --text-lg: 24px;
  --text-xl: 32px;
  --text-2xl: 48px;
  --text-3xl: 64px;
  --text-4xl: 96px;

  /* Spacing — 8pt grid */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 100px;

  /* Easing */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Durations */
  --duration-fast: 100ms;
  --duration-base: 200ms;
  --duration-medium: 300ms;
  --duration-slow: 400ms;
}
```

- [ ] **Step 2: Rewrite globals.css**

Replace `app/globals.css` with:

```css
@import "tailwindcss";
@import "./globals-tokens.css";

/* === Theme overrides for Tailwind v4 === */
@theme inline {
  --color-bg: var(--color-bg);
  --color-surface: var(--color-surface);
  --color-surface-raised: var(--color-surface-raised);
  --color-border: var(--color-border);
  --color-text: var(--color-text);
  --color-text-secondary: var(--color-text-secondary);
  --color-text-muted: var(--color-text-muted);
  --color-accent: var(--color-accent);
  --color-accent-hover: var(--color-accent-hover);
  --color-accent-muted: var(--color-accent-muted);
  --color-on-accent: var(--color-on-accent);
  --font-display: var(--font-display);
  --font-body: var(--font-body);
  --font-mono: var(--font-mono);
}

/* === Base === */
html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* === Dot Grid Background (Linear.app style) === */
.bg-dot-grid {
  background-image: radial-gradient(
    circle,
    var(--color-border) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}

/* === Line Grid Background === */
.bg-line-grid {
  background-image:
    linear-gradient(var(--color-border-subtle) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border-subtle) 1px, transparent 1px);
  background-size: 48px 48px;
}

/* === GSAP scroll animation targets === */
.gsap-fade-up {
  opacity: 0;
  transform: translateY(24px);
}

.gsap-fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* === Focus states === */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}

:focus:not(:focus-visible) {
  outline: none;
}

/* === Selection === */
::selection {
  background-color: var(--color-accent);
  color: var(--color-on-accent);
}

/* === Reduced Motion === */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 3: Verify build compiles**

```bash
cd /Users/kirillrodionov/evergroup-redesign && npx next build 2>&1 | tail -5
```
Expected: Build may have component errors (expected — we haven't rewritten them yet), but CSS should compile.

- [ ] **Step 4: Commit**

```bash
git add app/globals-tokens.css app/globals.css
git commit -m "feat: add design token system and rewrite global CSS"
```

---

## Task 3: Layout + Fonts

**Files:**
- Rewrite: `app/layout.tsx`

- [ ] **Step 1: Rewrite layout.tsx with new fonts**

```tsx
import type { Metadata } from "next";
import { Syne, Epilogue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "EVERGROUP — Financial Infrastructure, Reimagined",
  description:
    "Software that powers compliance, payments, fare collection, and custom financial systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${epilogue.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: switch to Syne + Epilogue + JetBrains Mono fonts"
```

---

## Task 4: Lenis Smooth Scroll Provider

**Files:**
- Create: `app/components/SmoothScroll.tsx`

- [ ] **Step 1: Create SmoothScroll wrapper**

```tsx
"use client";

import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 2: Wrap layout body with SmoothScroll**

Update `app/layout.tsx` body:

```tsx
import SmoothScroll from "./components/SmoothScroll";

// ... inside RootLayout return:
<body className="min-h-screen flex flex-col">
  <SmoothScroll>{children}</SmoothScroll>
</body>
```

- [ ] **Step 3: Commit**

```bash
git add app/components/SmoothScroll.tsx app/layout.tsx
git commit -m "feat: add Lenis smooth scroll with GSAP ScrollTrigger sync"
```

---

## Task 5: GSAP ScrollAnimation Component

**Files:**
- Create: `app/components/ScrollAnimation.tsx`
- Delete: `app/components/ScrollReveal.tsx`

- [ ] **Step 1: Create ScrollAnimation component (replaces ScrollReveal)**

```tsx
"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  y = 24,
  duration = 0.4,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.set(el, { opacity: 0, y });

    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [delay, y, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const items = el.querySelectorAll("[data-stagger-item]");

    gsap.set(items, { opacity: 0, y: 24 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Delete ScrollReveal.tsx**

```bash
rm app/components/ScrollReveal.tsx
```

- [ ] **Step 3: Commit**

```bash
git add app/components/ScrollAnimation.tsx
git rm app/components/ScrollReveal.tsx
git commit -m "feat: replace ScrollReveal with GSAP ScrollAnimation"
```

---

## Task 6: Delete Deprecated Components

**Files:**
- Delete: `app/components/CursorTrail.tsx`
- Delete: `app/components/TiltCard.tsx`
- Delete: `app/components/RelatedProducts.tsx`
- Delete: `app/components/HeroSection.tsx`
- Delete: `app/components/ContactForm.tsx`
- Delete: `app/components/CountUp.tsx`

- [ ] **Step 1: Remove all deprecated components**

```bash
cd /Users/kirillrodionov/evergroup-redesign
rm app/components/CursorTrail.tsx
rm app/components/TiltCard.tsx
rm app/components/RelatedProducts.tsx
rm app/components/HeroSection.tsx
rm app/components/ContactForm.tsx
rm app/components/CountUp.tsx
```

- [ ] **Step 2: Commit**

```bash
git rm app/components/CursorTrail.tsx app/components/TiltCard.tsx app/components/RelatedProducts.tsx app/components/HeroSection.tsx app/components/ContactForm.tsx app/components/CountUp.tsx
git commit -m "chore: remove CursorTrail, TiltCard, RelatedProducts, HeroSection, ContactForm, CountUp"
```

---

## Task 7: Navbar Rewrite

**Files:**
- Rewrite: `app/components/Navbar.tsx`

- [ ] **Step 1: Rewrite Navbar**

Specs:
- Fixed top, transparent initially, blurs on scroll (keep current behavior)
- Logo: "EVERGROUP" in font-display, font-bold, tracking-tight
- Desktop links: Products (dropdown), Company, Contact (scrolls to #contact)
- CTA: "Get Started" → scrolls to #contact (NOT mailto)
- Mobile: hamburger → slide-down panel
- Products dropdown: CRC, Momentum Pay, Fare Collection, CSD — links to /crc, /momentumpay, /farecollection, /csd
- NO consulting language
- Use `var(--font-display)` for logo
- Border-bottom: 1px solid var(--color-border-subtle) when scrolled
- All "Contact" / "Get Started" buttons scroll to `#contact` or navigate to `/#contact`

The component should be ~180 lines max (current is 272).

Key code patterns:
```tsx
// Smooth scroll handler
const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault();
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/#contact";
  }
};

// All CTA buttons use scrollToContact
<button onClick={scrollToContact}>Get Started</button>
```

- [ ] **Step 2: Verify all buttons scroll to #contact**

```bash
grep -n "mailto\|ask@evergroup" app/components/Navbar.tsx
```
Expected: No results (zero mailto references)

- [ ] **Step 3: Commit**

```bash
git add app/components/Navbar.tsx
git commit -m "feat: rewrite Navbar — all CTAs scroll to #contact, no mailto"
```

---

## Task 8: 3D Hero Scene — React Three Fiber

**Files:**
- Create: `app/components/DashboardModel.tsx`
- Create: `app/components/CameraRig.tsx`
- Create: `app/components/Scene3D.tsx`
- Rewrite: `app/components/Hero.tsx`

- [ ] **Step 1: Create DashboardModel — floating 3D dashboard panel**

```tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

export default function DashboardModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle idle float
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
  });

  return (
    <group ref={groupRef}>
      {/* Main dashboard panel */}
      <RoundedBox args={[4, 2.4, 0.05]} radius={0.08} smoothness={4}>
        <meshPhysicalMaterial
          color="#111827"
          roughness={0.3}
          metalness={0.1}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          transparent
          opacity={0.95}
        />
      </RoundedBox>

      {/* Screen content glow */}
      <RoundedBox args={[3.8, 2.2, 0.01]} radius={0.06} smoothness={4} position={[0, 0, 0.03]}>
        <meshBasicMaterial color="#0a0f1e" />
      </RoundedBox>

      {/* Header bar */}
      <RoundedBox args={[3.8, 0.15, 0.01]} radius={0.02} smoothness={2} position={[0, 0.95, 0.04]}>
        <meshBasicMaterial color="#1e2d40" />
      </RoundedBox>

      {/* Chart bars */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const height = [0.6, 0.8, 0.5, 1.0, 0.7, 0.9, 0.65][i];
        return (
          <RoundedBox
            key={i}
            args={[0.25, height, 0.01]}
            radius={0.02}
            smoothness={2}
            position={[-1.5 + i * 0.45, -0.3 + height / 2, 0.04]}
          >
            <meshBasicMaterial color={i === 3 ? "#4f6ef7" : "#1e2d40"} />
          </RoundedBox>
        );
      })}

      {/* KPI cards */}
      {[-1.2, 0, 1.2].map((x, i) => (
        <RoundedBox key={i} args={[1.0, 0.4, 0.01]} radius={0.04} smoothness={2} position={[x, 0.55, 0.04]}>
          <meshBasicMaterial color="#1a2332" />
        </RoundedBox>
      ))}

      {/* Accent line */}
      <mesh position={[0, -0.9, 0.04]}>
        <planeGeometry args={[3.8, 0.003]} />
        <meshBasicMaterial color="#4f6ef7" />
      </mesh>

      {/* Bottom glow */}
      <mesh position={[0, -1.5, -0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 3]} />
        <meshBasicMaterial
          color="#4f6ef7"
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}
```

- [ ] **Step 2: Create CameraRig — scroll-driven camera controller**

```tsx
"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function CameraRig() {
  const { camera } = useThree();
  const scrollProgress = useRef(0);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.getElementById("hero"),
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => trigger.kill();
  }, []);

  useFrame(() => {
    const p = scrollProgress.current;

    // Camera moves from front view to slightly above and right as user scrolls
    camera.position.x = THREE.MathUtils.lerp(0, 1.5, p);
    camera.position.y = THREE.MathUtils.lerp(0.3, 1.8, p);
    camera.position.z = THREE.MathUtils.lerp(4, 5, p);

    camera.lookAt(0, 0, 0);
  });

  return null;
}
```

- [ ] **Step 3: Create Scene3D — Canvas wrapper**

```tsx
"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import DashboardModel from "./DashboardModel";
import CameraRig from "./CameraRig";

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.3, 4], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <Suspense fallback={null}>
        <Environment preset="night" />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#4f6ef7" />
        <pointLight position={[0, -2, 2]} intensity={0.3} color="#4f6ef7" />

        <DashboardModel />
        <CameraRig />

        <EffectComposer>
          <Bloom
            intensity={0.4}
            luminanceThreshold={0.8}
            luminanceSmoothing={0.9}
          />
          <Vignette eskil={false} offset={0.1} darkness={0.4} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
```

- [ ] **Step 4: Rewrite Hero.tsx**

```tsx
"use client";

import dynamic from "next/dynamic";
import ScrollAnimation from "./ScrollAnimation";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid opacity-30" />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <ScrollAnimation delay={0}>
            <p
              className="text-xs uppercase tracking-[0.15em] mb-6"
              style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
            >
              Financial Infrastructure
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <h1
              className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.95]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Software That
              <br />
              Powers Finance.
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p
              className="text-lg mt-8 max-w-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Compliance, payments, fare collection, and custom systems —
              built for teams that move fast.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="flex gap-4 mt-10">
              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-full font-medium transition-all duration-200 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-on-accent)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Get Started
              </button>
              <a
                href="#products"
                className="px-8 py-3.5 rounded-full font-medium border transition-all duration-200 hover:translate-y-[-2px]"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-body)",
                }}
              >
                See Products
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Verify build**

```bash
cd /Users/kirillrodionov/evergroup-redesign && npx next build 2>&1 | tail -10
```

- [ ] **Step 6: Commit**

```bash
git add app/components/DashboardModel.tsx app/components/CameraRig.tsx app/components/Scene3D.tsx app/components/Hero.tsx
git commit -m "feat: 3D hero with R3F floating dashboard, scroll-driven camera, bloom"
```

---

## Task 9: TrustBar Rewrite

**Files:**
- Rewrite: `app/components/TrustBar.tsx`

- [ ] **Step 1: Rewrite TrustBar — muted text only, no boxes**

```tsx
"use client";

import ScrollAnimation from "./ScrollAnimation";

const companies = [
  "ACME BANK",
  "METRO TRANSIT",
  "GULF PAY",
  "NEXUS FINANCE",
  "SILK ROAD TECH",
];

export default function TrustBar() {
  return (
    <section className="py-16 border-t border-b" style={{ borderColor: "var(--color-border-subtle)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollAnimation>
          <p
            className="text-center text-sm mb-10"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
          >
            Powering teams across finance, transport, and enterprise
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {companies.map((name) => (
              <span
                key={name}
                className="text-sm tracking-widest font-medium uppercase"
                style={{
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  opacity: 0.5,
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/TrustBar.tsx
git commit -m "feat: rewrite TrustBar — muted text logos, no boxes"
```

---

## Task 10: FeaturesGrid Rewrite

**Files:**
- Rewrite: `app/components/FeaturesGrid.tsx`

- [ ] **Step 1: Rewrite FeaturesGrid — 3 columns, dark border, no shadow**

Specs per SESSION4:
- 3 columns on desktop
- Each card: small icon (blue), bold short title, one sentence max
- Cards: dark border (#1e2d40), no background fill, hover adds subtle blue border glow
- NO shadows, NO heavy styling
- Section label: "CAPABILITIES" in xs uppercase tracking-widest blue text
- Section headline: text-4xl font-bold tracking-tight

Features to show (6 items, but SESSION4 says 3 columns — show all 6 in 2 rows):
1. Compliance Automation — Real-time monitoring and regulatory reporting
2. Payment Processing — Multi-currency settlement and merchant analytics
3. Fare Collection — Contactless transit payments and route optimization
4. Custom Development — Full-cycle engineering for financial systems
5. Risk Intelligence — Automated KYC/AML screening and scoring
6. API Platform — Developer-first integrations and webhooks

Each card should use a simple SVG icon (line icons, not filled). Blue stroke color.

Hover state: `border-color` transitions to `var(--color-accent)`, `box-shadow: 0 0 20px var(--color-accent-glow)`.

- [ ] **Step 2: Commit**

```bash
git add app/components/FeaturesGrid.tsx
git commit -m "feat: rewrite FeaturesGrid — 3col, dark border cards, blue icons"
```

---

## Task 11: ProductShowcase Rewrite

**Files:**
- Rewrite: `app/components/ProductShowcase.tsx`

- [ ] **Step 1: Rewrite ProductShowcase — alternating rows with real UI mockups**

Specs per SESSION4:
- Full width alternating rows
- Left/Right: headline + 2 bullet points + "Learn more" link
- Opposite side: dark UI mockup in rounded container with subtle border and glow
- Mockups must look like REAL software: tables, charts, metrics, badges
- NO stock photo style imagery

4 products with alternating layout (odd = text left / mockup right, even = reversed):

1. **CRC** — "Compliance Risk Control" / "Automated KYC, AML screening, and regulatory reporting in one dashboard." / Bullets: "Real-time transaction monitoring" + "Configurable risk scoring engine" / Link: /crc
2. **Momentum Pay** — "Payment Processing" / "Multi-currency settlement with instant reconciliation." / Bullets: "Real-time processing across 40+ currencies" + "Merchant analytics and fraud detection" / Link: /momentumpay
3. **Fare Collection** — "Transit Fare Systems" / "Contactless payments for modern transit networks." / Bullets: "NFC, QR, and smart card support" + "Route-level revenue analytics" / Link: /farecollection
4. **CSD** — "Custom Software" / "Full-cycle engineering for financial systems." / Bullets: "Cloud-native architecture from day one" + "Dedicated teams with fintech domain expertise" / Link: /csd

Each mockup is a `<div>` styled as a dark dashboard with:
- Border: `1px solid var(--color-border)`
- Border-radius: `var(--radius-lg)`
- Background: `var(--color-surface)`
- Subtle glow: `box-shadow: 0 0 40px var(--color-accent-glow)`
- Contains simplified but realistic UI elements (tables, charts, badges, metrics)

"Learn more" links: `text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]` with arrow icon →

- [ ] **Step 2: Commit**

```bash
git add app/components/ProductShowcase.tsx
git commit -m "feat: rewrite ProductShowcase — alternating rows, real software mockups"
```

---

## Task 12: StatsBanner Rewrite

**Files:**
- Rewrite: `app/components/StatsBanner.tsx`

- [ ] **Step 1: Rewrite StatsBanner — giant numbers, horizontal, dividers**

Specs per SESSION4:
- 4 stats in one clean horizontal row
- Giant numbers (text-6xl, font-black) using `var(--font-display)`
- Small label below in `var(--color-text-muted)`
- Dividers between them (1px vertical line in `var(--color-border)`)
- NO cards or boxes

Stats:
1. 99.9% — Platform Uptime
2. 50M+ — Transactions Processed
3. 200+ — Enterprise Clients
4. 12 — Countries Served

Number animation: Use a simple `useEffect` + `requestAnimationFrame` counter (inline, no CountUp component). Trigger via IntersectionObserver. Duration: 1.5s, ease-out.

- [ ] **Step 2: Commit**

```bash
git add app/components/StatsBanner.tsx
git commit -m "feat: rewrite StatsBanner — giant numbers, horizontal row, dividers"
```

---

## Task 13: CTASection Rewrite

**Files:**
- Rewrite: `app/components/CTASection.tsx`

- [ ] **Step 1: Rewrite CTA — one headline, one button, border-top**

```tsx
"use client";

import ScrollAnimation from "./ScrollAnimation";

export default function CTASection() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-32 border-t"
      style={{ borderColor: "var(--color-border-subtle)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <ScrollAnimation>
          <h2
            className="text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to modernize your infrastructure?
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <button
            onClick={scrollToContact}
            className="mt-10 px-10 py-4 rounded-full font-medium text-lg transition-all duration-200 hover:translate-y-[-2px]"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-on-accent)",
              fontFamily: "var(--font-body)",
            }}
          >
            Get Started
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/CTASection.tsx
git commit -m "feat: rewrite CTA — minimal, one headline, one button"
```

---

## Task 14: ContactSection (Inline Form)

**Files:**
- Create: `app/components/ContactSection.tsx`

- [ ] **Step 1: Create inline contact form**

Specs per SESSION4 Fix 2:
- Name, Email, Message fields
- Send button shows "Thank you for reaching out!" on click — no backend, no email, UI feedback only
- Dark, minimal, Linear-style inputs: dark border, no fill, white text
- Label above each input (not placeholder-as-label)
- Focus: `border-color: var(--color-accent)`
- Section id="contact" for smooth scroll targets

```tsx
"use client";

import { useState, FormEvent } from "react";
import ScrollAnimation from "./ScrollAnimation";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-32 border-t"
      style={{ borderColor: "var(--color-border-subtle)" }}
    >
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <ScrollAnimation>
          <p
            className="text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
          >
            Contact
          </p>
          <h2
            className="text-4xl font-bold tracking-tight mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s build together.
          </h2>
        </ScrollAnimation>

        {submitted ? (
          <ScrollAnimation>
            <div
              className="py-16 text-center rounded-lg border"
              style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
            >
              <p
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Thank you for reaching out!
              </p>
              <p style={{ color: "var(--color-text-muted)" }}>
                We&apos;ll get back to you shortly.
              </p>
            </div>
          </ScrollAnimation>
        ) : (
          <ScrollAnimation delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border text-white transition-colors duration-200 focus:outline-none"
                  style={{
                    borderColor: "var(--color-border)",
                    fontFamily: "var(--font-body)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border text-white transition-colors duration-200 focus:outline-none"
                  style={{
                    borderColor: "var(--color-border)",
                    fontFamily: "var(--font-body)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border text-white transition-colors duration-200 focus:outline-none resize-none"
                  style={{
                    borderColor: "var(--color-border)",
                    fontFamily: "var(--font-body)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                />
              </div>

              <button
                type="submit"
                className="self-start px-10 py-3.5 rounded-full font-medium transition-all duration-200 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-on-accent)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Send Message
              </button>
            </form>
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify no mailto references in new component**

```bash
grep -n "mailto" app/components/ContactSection.tsx
```
Expected: No results

- [ ] **Step 3: Commit**

```bash
git add app/components/ContactSection.tsx
git commit -m "feat: add inline ContactSection — dark form, no mailto, UI feedback"
```

---

## Task 15: Footer Rewrite

**Files:**
- Rewrite: `app/components/Footer.tsx`

- [ ] **Step 1: Rewrite Footer — 3 columns, blue top border, minimal**

Specs per SESSION4:
- 3 columns: Logo+tagline | Navigation | Legal
- Very minimal, `var(--color-text-muted)` text
- Blue top border line: `border-top: 1px solid var(--color-accent)`
- Copyright: "2024 Evergroup FZCO. All rights reserved."
- Navigation links to: /crc, /momentumpay, /farecollection, /csd
- Legal links to: /privacy_policy
- Logo in `var(--font-display)`, tracking-tight

- [ ] **Step 2: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "feat: rewrite Footer — 3 columns, blue top border, minimal"
```

---

## Task 16: Homepage Composition

**Files:**
- Rewrite: `app/page.tsx`

- [ ] **Step 1: Rewrite homepage with new components**

```tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import FeaturesGrid from "./components/FeaturesGrid";
import ProductShowcase from "./components/ProductShowcase";
import StatsBanner from "./components/StatsBanner";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <FeaturesGrid />
      <ProductShowcase />
      <StatsBanner />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/kirillrodionov/evergroup-redesign && npx next build 2>&1 | tail -15
```
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: rewrite homepage composition with all new sections"
```

---

## Task 17: Product Page Template

**Files:**
- Create: `app/components/ProductPageLayout.tsx`

- [ ] **Step 1: Create shared product page layout**

This is the reusable template for all 4 product pages. Specs per SESSION4 Fix 4:
- Hero: product name + one sentence + large UI mockup
- Features: clean icon grid, no heavy cards
- How it works: numbered steps, clean typography
- CTA: minimal, one button, links to /#contact
- NO related products clutter at the bottom
- Breadcrumb: Home > Product Name (subtle, slate-500)

Props interface:
```typescript
interface ProductPageProps {
  name: string;
  tagline: string;
  description: string;
  breadcrumb: string;
  mockup: ReactNode;
  features: Array<{ icon: ReactNode; title: string; description: string }>;
  steps: Array<{ title: string; description: string }>;
}
```

Layout structure:
1. `<Navbar />`
2. Breadcrumb bar (Home → Product Name)
3. Hero section: heading + description + CTA button (left) | mockup (right)
4. Features grid: 3x2 grid of icon + title + description cards (same style as homepage FeaturesGrid)
5. How It Works: numbered steps (01, 02, 03, 04) with clean typography, vertical layout
6. CTA: one headline + one button → /#contact
7. `<ContactSection />`
8. `<Footer />`

All buttons → `/#contact`. No RelatedProducts. No TiltCard. No heavy Framer Motion.

- [ ] **Step 2: Commit**

```bash
git add app/components/ProductPageLayout.tsx
git commit -m "feat: add shared ProductPageLayout template"
```

---

## Task 18: CRC Product Page

**Files:**
- Rewrite: `app/crc/page.tsx`

- [ ] **Step 1: Rewrite CRC page using ProductPageLayout**

Product details:
- Name: "Compliance Risk Control"
- Tagline: "Automated compliance monitoring and risk management."
- Breadcrumb: "CRC"
- Mockup: Dark dashboard with risk score gauge (circular), KYC/AML status badges, transaction monitoring table (5 rows)
- 6 features: Real-time Monitoring, KYC Automation, AML Screening, Risk Scoring, Regulatory Reporting, Pipeline Management
- 4 steps: Connect Data Sources → Configure Rules → Monitor Automatically → Generate Reports

All CTAs → `/#contact`. Remove all consulting language. Remove RelatedProducts import.

- [ ] **Step 2: Verify no mailto or RelatedProducts**

```bash
grep -n "mailto\|RelatedProducts\|TiltCard" app/crc/page.tsx
```
Expected: No results

- [ ] **Step 3: Commit**

```bash
git add app/crc/page.tsx
git commit -m "feat: rewrite CRC page — Stripe-style layout, no consulting clutter"
```

---

## Task 19: Momentum Pay Product Page

**Files:**
- Rewrite: `app/momentumpay/page.tsx`

- [ ] **Step 1: Rewrite MomentumPay page using ProductPageLayout**

Product details:
- Name: "Momentum Pay"
- Tagline: "Multi-currency payment processing with instant settlement."
- Breadcrumb: "Momentum Pay"
- Mockup: Payment dashboard with balance card ($1.2M), 7-day volume bar chart, recent payments table (5 rows with currency badges)
- 6 features: Real-time Processing, Multi-currency, Instant Settlement, Merchant Analytics, Fraud Detection, API-first
- 4 steps: Integrate API → Configure Currencies → Process Payments → Reconcile Instantly

All CTAs → `/#contact`.

- [ ] **Step 2: Commit**

```bash
git add app/momentumpay/page.tsx
git commit -m "feat: rewrite MomentumPay page — Stripe-style layout"
```

---

## Task 20: Fare Collection Product Page

**Files:**
- Rewrite: `app/farecollection/page.tsx`

- [ ] **Step 1: Rewrite FareCollection page using ProductPageLayout**

Product details:
- Name: "Fare Collection"
- Tagline: "Contactless payment systems for modern transit networks."
- Breadcrumb: "Fare Collection"
- Mockup: Transit dashboard with ridership counter (48,293), route performance table (4 rows), payment method badges (NFC, QR, Smart Card, Mobile)
- 6 features: Contactless Payments, Multi-modal Support, Real-time Reconciliation, Dynamic Pricing, Analytics Dashboard, System Integration
- 4 steps: Deploy Hardware → Configure Routes → Collect Fares → Analyze Performance

All CTAs → `/#contact`. Remove RelatedProducts and TiltCard imports.

- [ ] **Step 2: Commit**

```bash
git add app/farecollection/page.tsx
git commit -m "feat: rewrite FareCollection page — Stripe-style layout"
```

---

## Task 21: CSD Product Page

**Files:**
- Rewrite: `app/csd/page.tsx`

- [ ] **Step 1: Rewrite CSD page using ProductPageLayout**

Product details:
- Name: "Custom Software Development"
- Tagline: "Full-cycle engineering for financial systems."
- Breadcrumb: "Custom Software"
- Mockup: Project dashboard with sprint progress bar (68%), features shipped (24), test coverage (94.2%), activity log (4 entries), tech stack badges (TypeScript, React, Node.js, PostgreSQL, AWS, Docker)
- 6 features: Full-cycle Development, Modern Architecture, Cloud-native, Dedicated Teams, Agile Delivery, Long-term Support
- 4 steps: Discovery & Planning → Architecture Design → Iterative Development → Launch & Support

All CTAs → `/#contact`. Remove RelatedProducts import.

- [ ] **Step 2: Commit**

```bash
git add app/csd/page.tsx
git commit -m "feat: rewrite CSD page — Stripe-style layout"
```

---

## Task 22: Privacy Policy Style Alignment

**Files:**
- Modify: `app/privacy_policy/page.tsx`

- [ ] **Step 1: Update privacy policy page to use new design tokens**

- Import Navbar, Footer from new components
- Apply `var(--font-display)` to headings
- Apply `var(--color-text-secondary)` to body text
- Apply `var(--color-border)` to section dividers
- Remove any green colors or consulting language
- Add breadcrumb: Home → Privacy Policy

- [ ] **Step 2: Commit**

```bash
git add app/privacy_policy/page.tsx
git commit -m "feat: align privacy policy with new design system"
```

---

## Task 23: Full Site Audit

**Files:** All

- [ ] **Step 1: Verify zero mailto references across entire codebase**

```bash
grep -rn "mailto\|ask@evergroup" app/ --include="*.tsx" --include="*.ts"
```
Expected: No results

- [ ] **Step 2: Verify zero consulting language**

```bash
grep -rni "family of professionals\|close-knit\|team of experts\|our people" app/ --include="*.tsx"
```
Expected: No results

- [ ] **Step 3: Verify zero green colors**

```bash
grep -rn "green-\|#00ff\|#10b981\|emerald" app/ --include="*.tsx" --include="*.css"
```
Expected: No results

- [ ] **Step 4: Verify deleted components not imported anywhere**

```bash
grep -rn "CursorTrail\|TiltCard\|RelatedProducts\|HeroSection\|ContactForm\|CountUp" app/ --include="*.tsx"
```
Expected: No results (these components are deleted)

- [ ] **Step 5: Verify all buttons point to #contact or /#contact**

```bash
grep -rn "Get Started\|Contact\|Get in Touch\|Let.*work together" app/ --include="*.tsx"
```
Manually verify each result links to #contact or /#contact

- [ ] **Step 6: Build succeeds with zero errors**

```bash
cd /Users/kirillrodionov/evergroup-redesign && npx next build
```
Expected: Build succeeds

- [ ] **Step 7: Commit any remaining fixes**

```bash
git add -A
git commit -m "fix: final audit — zero mailto, zero consulting language, all CTAs correct"
```

---

## Task 24: Dev Server Verification

- [ ] **Step 1: Start dev server**

```bash
cd /Users/kirillrodionov/evergroup-redesign && npm run dev
```

- [ ] **Step 2: Manual verification checklist**

Open http://localhost:3000 and verify:
- [ ] Hero: massive headline, dot grid bg, 3D dashboard with bloom
- [ ] Scrolling causes camera to orbit the 3D dashboard
- [ ] Lenis smooth scroll is active
- [ ] TrustBar: muted text only, no boxes
- [ ] Features: 3 columns, dark border cards, blue icons, glow on hover
- [ ] Products: alternating rows, realistic mockups
- [ ] Stats: giant numbers, horizontal, dividers
- [ ] CTA: one headline, one button
- [ ] Contact form: inline fields, "Thank you" on submit
- [ ] Footer: 3 columns, blue top border
- [ ] All "Get Started" / "Contact" buttons scroll to #contact
- [ ] Mobile: hamburger menu works, all sections stack cleanly
- [ ] No cursor trail, no tilt cards
- [ ] No consulting language
- [ ] Product pages (/crc, /momentumpay, /farecollection, /csd) all load with Stripe-style layout

---

## Summary: Acceptance Criteria Mapping

| SESSION4 Requirement | Task |
|-----|------|
| Fix 1: All buttons → #contact | Tasks 7, 8, 13, 14, 17-21, 23 |
| Fix 2: Inline contact form | Task 14 |
| Fix 3: Stripe/Linear/Notion feel | Tasks 2, 3, 8-16 |
| Fix 4: Product pages | Tasks 17-21 |
| Fix 5: Typography system | Tasks 2, 3 (tokens + fonts) |
| Fix 6: Remove cursor/tilt/consulting | Task 6 |
| Fix 7: Keep smooth scroll/fade/blur | Tasks 4, 5, 7 |
| R3F 3D hero (Option C) | Task 8 |
| Lenis premium scroll | Task 4 |
| GSAP ScrollTrigger | Task 5 |
