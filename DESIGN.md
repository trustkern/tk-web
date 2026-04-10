# TrustKern marketing site — design & implementation notes

## 1. Homepage structure (implemented)

| # | Section | File anchor |
|---|---------|-------------|
| 1 | Hero | `#hero-heading` |
| 2 | Trusted-value strip | `.strip` |
| 3 | Problem | `#problem` |
| 4 | Solution | `#solution` |
| 5 | How it works | `#how-it-works` |
| 6 | Why TrustKern | `#why` |
| 7 | Capabilities | `#features` |
| 8 | Industries | `#industries` |
| 9 | Security preview | `#security-preview` |
| 10 | Deployment | `#deployment` |
| 11 | CTA | `#cta` |
| 12 | Footer | `footer` |

**Subpages:** `architecture.html`, `use-cases.html`, `security.html`, `contact.html` (`#demo` for demo form).

---

## 2. SEO

| Field | Value |
|-------|--------|
| **Page title** | TrustKern — Secure infrastructure for industrial IoT, from device to cloud |
| **Meta description** | Hardware-rooted identity and gateway-blind end-to-end encryption for industrial telemetry. Built for regulated, sovereignty-sensitive, and critical deployments across Europe. |

Subpages have tailored titles/descriptions in `<title>` and `<meta name="description">`.

**Suggested additions (production):** `canonical` link, `og:title`, `og:description`, `og:image` (static OG image, no stock fake office photo), `twitter:card`, `favicon.ico` + `apple-touch-icon`.

---

## 3. Navigation & CTA labels

| Role | Label |
|------|--------|
| Nav | Architecture · Use cases · Security · Contact |
| Primary CTA | Book a demo |
| Secondary | Talk to us · See architecture |
| Footer | Same + Imprint · Privacy Policy (placeholders) |

---

## 4. Visual direction (section by section)

| Section | Visual tone | Notes |
|---------|-------------|--------|
| Hero | Dark canvas, single diagram | SVG: device → mesh → **gateway dashed / locked** → cloud; teal particles on ciphertext path; amber outline on gateway = “verify only”. Replace with WebGL/Canvas later only if performance budget allows. |
| Strip | Minimal, one strong line | No icons; optional very subtle horizontal gradient (implemented). |
| Problem | Card grid, no icons | Typography-led; cards on hover get teal border glow (restrained). |
| Solution | Elevated background | Slight `#111820` lift to separate from problem. |
| How it works | Step strip | Could become horizontal scroll-snap on mobile; arrows hidden &lt;768px. |
| Why | Editorial list | Em-dash bullets; no checkmark icons (avoids “SaaS checklist” cliché). |
| Features | 3-column cards | Optional: monoline icons later — keep abstract, not illustrative mascots. |
| Industries | 6 tiles | Same card system; no stock photos. |
| Security preview | Muted panel | Serious copy; no badges. |
| Deployment | Text-forward | Map or region graphic only if sourced/licensed. |
| CTA | Radial teal glow | Single focal band; primary + ghost buttons. |

**Global:** Deep navy/black (`#0a0e14`), teal accent (`#2dd4bf`), soft gray text hierarchy. Outfit for headlines, DM Sans for body — European, technical, not playful.

---

## 5. Components & layout

- **Header:** Fixed, blur backdrop, border-bottom.
- **Buttons:** Primary (teal fill), Ghost (outline + hover glow).
- **Cards:** `border` + hover `border-color` shift; no heavy shadows.
- **Flow:** Flex column → row at 768px; arrows between steps on desktop only.
- **Reveal:** IntersectionObserver adds `.is-visible`; disabled for `prefers-reduced-motion`.
- **Hero SVG:** Inline for zero HTTP; swap for optimized static asset if needed.

---

## 6. Responsive behavior

- **&lt;900px:** Nav hidden; hamburger toggles `.mobile-nav.is-open`; body scroll lock when open.
- **Typography:** `clamp()` on headlines; readable base ~17px.
- **Grids:** 1 col → 2 col (640px) → 3 col features (900px).
- **Touch:** Buttons min ~44px visual target with padding.
- **Motion:** Respect `prefers-reduced-motion` for reveal and SVG stroke animation (consider removing SMIL `animate` if you add a CSS toggle).

---

## 7. Framer / Webflow–style implementation hints

- **Framer:** Use a single dark frame; global color styles; sticky nav with scroll variant (slightly denser); sections as stacks with 96–120px gap; duplicate hero diagram as Framer vector or Lottie only if motion is subtle.
- **Webflow:** CMS for “Legal” pages later; form block on `contact` with action URL; embed Calendly/Cal.com in place of placeholder form if preferred.
- **Next.js / Vite (future):** Split CSS into CSS Modules or Tailwind tokens matching `variables.css`; lazy-load below-fold imagery; add `next/head` or `@vueuse/head` for SEO.

---

## 8. Accessibility checklist

- Skip link, landmark roles, focus-visible styles.
- Hero diagram has `role="img"` + `aria-label` describing encryption flow.
- Form labels associated on contact page.
- Color contrast: teal on dark for small text — body copy uses `#94a3b8` on `#0a0e14` (verify with APCA or WCAG tool before launch).

---

## 9. Local preview

```bash
cd tk-web && python3 -m http.server 8080
# open http://localhost:8080
```

---

## 10. Copy ownership

All homepage and subpage copy is original for TrustKern positioning; align final legal lines (Imprint, Privacy) with counsel before production.
