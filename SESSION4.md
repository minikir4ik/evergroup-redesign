# Session 4 — Final Polish Prompt

## Goal
Make the site feel like Stripe, Linear, and Notion — a software product company, not a consulting firm.

## Fix 1 — Buttons
ALL "Get Started", "Contact", "Get in Touch", "Let's work together" buttons across the entire site must smooth scroll to #contact on the homepage (or link to /#contact from product pages). NONE of them should open mailto or go to an external link. No exceptions.

## Fix 2 — Contact Section
Replace the mailto form with a clean inline contact section:
- Name, Email, Message fields
- Send button that shows "Thank you for reaching out!" on click — no backend, no email sending, just UI feedback
- Styled dark, minimal, Linear-style inputs (dark border, no fill, white text)

## Fix 3 — Make it feel like Stripe/Linear/Notion

### Hero
- Background: pure #0a0f1e with a subtle dot grid or line grid overlay (like Linear.app) — pure CSS, no canvas
- Headline: max 5 words, massive, font-black, tracking-tight
- Example: "Financial Infrastructure. Reimagined." or "Software That Powers Finance."
- Subtitle: one short sentence, slate-400
- Two buttons: primary blue filled + ghost outlined
- Below headline: a large realistic dark dashboard mockup, slightly tilted with perspective, centered, with a subtle glow underneath it

### Trust Bar
- "Powering teams across finance, transport, and enterprise"
- Muted text logos, no boxes or badges

### Features Grid
- 3 columns, very minimal
- Each card: small icon (blue), bold short title, one sentence max
- Cards: dark border (#1e2d40), no background fill, hover adds a subtle blue border glow
- NO shadows, NO heavy styling

### Product Showcase
- Full width alternating rows
- Left/Right: headline + 2 bullet points + "Learn more" link
- Opposite side: dark UI mockup in a rounded container with subtle border and glow
- Mockups must look like REAL software: tables, charts, metrics, badges
- NO stock photo style imagery

### Stats
- 4 stats in one clean horizontal row
- Giant numbers (text-6xl, font-black)
- Small label below in slate-400
- Dividers between them
- NO cards or boxes

### CTA
- Full width dark section
- One bold headline
- One blue button
- Subtle border top

### Footer
- 3 columns: Logo+tagline | Navigation | Legal
- Very minimal, slate-600 text
- Blue top border line

## Fix 4 — Product Pages
Each product page should feel like a Stripe product page:
- Hero: product name + one sentence + large UI mockup
- Features: clean icon grid, no heavy cards
- How it works: numbered steps, clean typography
- CTA: minimal, one button, links to /#contact
- NO related products clutter at the bottom
- Breadcrumb: Home → Product Name (subtle, slate-500)

## Fix 5 — Typography System
Apply consistently across ALL pages:
- Page titles: text-6xl lg:text-8xl font-black tracking-tighter
- Section headlines: text-4xl font-bold tracking-tight
- Body: text-base text-slate-400 leading-relaxed
- Labels: text-xs uppercase tracking-widest text-blue-400
- Links: text-blue-400 hover:text-blue-300

## Fix 6 — Remove These Immediately
- Any remaining cursor effects
- Any heavy Framer Motion page transitions
- Any consulting-style language ("family of professionals", "close-knit team")
- Any green colors (leftover from original Tilda site)
- Any gradient divider divs that look jarring
- Tilt card effects (too distracting)

## Fix 7 — Keep These
- Smooth scroll
- Fade-in on scroll (subtle, fast — 0.4s max)
- Navbar blur on scroll
- Dark navy + white + blue only

## Acceptance Criteria
- A stranger understands what EVERGROUP does in 5 seconds
- Feels like buying software, not hiring consultants
- Every button works correctly (no mailto)
- Mobile looks clean
- Deploys to Vercel with zero errors
