# Givernance — Marketing Website

The public-facing website for **Givernance**, the GDPR-native CRM built for European nonprofits (2–200 staff).

> *Run your mission. Not your spreadsheets.*

## Purpose

This site sells the value of Givernance to nonprofit decision-makers — fundraising directors, executive directors, and operations leads — who need a calmer alternative to Salesforce complexity.

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 (design tokens from Givernance identity) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Typography | Instrument Serif (headings) + Inter (body) |
| i18n | next-intl (App Router, `[locale]` routing) |
| Deploy | Vercel (EU region) |

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Internationalization

The site is multi-language from the start using `next-intl` with App Router `[locale]` segment routing.

| Language | Code | Priority |
|----------|------|----------|
| English | `en` | P0 — launch |
| French | `fr` | P0 — co-launch |
| German | `de` | P1 — fast follow |
| Dutch | `nl` | P2 |
| Spanish | `es` | P2 |

Translations live in `messages/{locale}.json`. Content is localized, not just translated (e.g. GDPR → RGPD in French, Verein/Stiftung references in German).

## Responsive design

The site is designed for **desktop impact** but must work brilliantly on every device. Not mobile-first — but intentionally designed for each breakpoint.

| Device | Viewport | Layout |
|--------|----------|--------|
| Desktop | 1280px+ | Full experience — side-by-side layouts, dashboard preview, wide grids |
| Laptop | 1024–1279px | Same structure, tighter spacing |
| Tablet | 768–1023px | 2-col grids, hero stacks vertically, simplified previews |
| Mobile | 320–767px | Single column, hamburger nav, text-focused hero, 44px+ touch targets |

## Accessibility

WCAG 2.1 AA compliance is a hard requirement, not a nice-to-have. Lighthouse accessibility target: **100**.

Key commitments:
- Semantic HTML, proper heading hierarchy, ARIA landmarks
- Keyboard-navigable with visible focus indicators
- Color contrast verified (4.5:1 text, 3:1 UI)
- `prefers-reduced-motion` respected — all animations disabled
- Screen-reader tested (VoiceOver)

## Project tracking

Issues are in this repo, structured as a sequential implementation plan:

1. [Project scaffold](../../issues/2) — Next.js + Tailwind + design tokens
2. [Homepage](../../issues/3) — All sections, responsive, animated
3. [Accessibility audit](../../issues/4) — WCAG 2.1 AA compliance
4. [Content & SEO](../../issues/5) — Copy polish, Open Graph, structured data
5. [Deploy pipeline](../../issues/6) — Vercel + CI with Lighthouse gates
6. [Internationalization](../../issues/7) — Multi-language (EN + FR launch, DE/NL/ES follow)

Epic: [#1](../../issues/1)

## Design reference

The design is based on materials in the main [givernance](https://github.com/purposestack/givernance) repo:

- `docs/ideas/marketing/draft.js` — Full homepage React component (content, layout, brand tokens)
- `docs/ideas/marketing/campaign-visuals.md` — Campaign visuals and taglines
- `docs/11-design-identity.md` — Complete design system spec
- `docs/design/` — 86 interactive HTML mockups ([live preview](https://onigam.github.io/givernance/design/))

## License

Proprietary — all rights reserved.
