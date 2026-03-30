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
| Deploy | Vercel (EU region) |

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Accessibility

WCAG 2.1 AA compliance is a hard requirement, not a nice-to-have. Lighthouse accessibility target: **100**.

## Project tracking

Issues are in this repo, structured as a sequential implementation plan:

1. [Project scaffold](../../issues/2) — Next.js + Tailwind + design tokens
2. [Homepage](../../issues/3) — All sections, responsive, animated
3. [Accessibility audit](../../issues/4) — WCAG 2.1 AA compliance
4. [Content & SEO](../../issues/5) — Copy polish, Open Graph, structured data
5. [Deploy pipeline](../../issues/6) — Vercel + CI with Lighthouse gates

Epic: [#1](../../issues/1)

## Design reference

The design is based on materials in the main [givernance](https://github.com/onigam/givernance) repo:

- `docs/ideas/marketing/draft.js` — Full homepage React component (content, layout, brand tokens)
- `docs/ideas/marketing/campaign-visuals.md` — Campaign visuals and taglines
- `docs/11-design-identity.md` — Complete design system spec
- `docs/design/` — 86 interactive HTML mockups ([live preview](https://onigam.github.io/givernance/design/))

## License

Proprietary — all rights reserved.
