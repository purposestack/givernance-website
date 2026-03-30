# Givernance Marketing Website — CLAUDE.md

## What is this

The public marketing website for **Givernance**, a GDPR-native CRM built for European nonprofits (2–200 staff). This site speaks to nonprofit decision-makers — fundraising directors, executive directors, operations leads — and sells the value of switching from Salesforce complexity to a calmer, purpose-built system.

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, TypeScript strict) |
| Styling | Tailwind CSS v4 — **zero inline styles** (see ADR in issue #2) |
| Animation | Framer Motion (respect `prefers-reduced-motion`) |
| Icons | Lucide React |
| Typography | Instrument Serif (headings), Inter (body) — via `next/font` |
| i18n | next-intl with `[locale]` App Router routing |
| Deploy | Vercel (EU region) |

## Design tokens

All colors, shadows, radii, and fonts are defined as Tailwind tokens. Never use inline `style={{}}` or hardcoded hex values.

### Colors
- `primary` (#2E7D5E), `primary-light` (#4CAF82), `primary-dark` (#1A5240)
- `primary-hover` (#267052), `primary-50` (#E8F5EE)
- `navy` (#1E293B)
- `bg` (#FAFAF8), `paper` (#FFFFFF), `soft` (#F2F0EC)
- `border` (#E4E0D9), `text` (#1C1B19), `muted` (#6B6760)

## Conventions

- **Project name**: Givernance (capital G)
- **Terminology**: NPO (nonprofit organization), not NGO
- **GDPR** in English, **RGPD** in French
- **en-GB spelling** in English content (organisation, colour)
- **File naming**: kebab-case for files, PascalCase for components
- **No dead code**: don't comment out code, delete it

## Accessibility (hard requirement)

WCAG 2.1 AA minimum. Lighthouse accessibility target: **100**.
- Semantic HTML, proper heading hierarchy, ARIA landmarks
- Keyboard-navigable, screen-reader tested
- Color contrast: 4.5:1 text, 3:1 large text/UI
- `prefers-reduced-motion` disables all animations
- Touch targets ≥ 44px

## i18n

- Launch languages: English (`en`, default), French (`fr`)
- Fast follow: German (`de`), Dutch (`nl`), Spanish (`es`)
- All strings in `messages/{locale}.json` — zero hardcoded text
- Localize, don't just translate

## Responsive

Desktop-first, but works brilliantly everywhere:
- Desktop 1280px+ | Tablet 768–1023px | Mobile 320–767px
- No horizontal scroll at any viewport

## Agents

| Agent | Purpose |
|-------|---------|
| `nextjs-developer` | Primary builder — scaffold, pages, components, styling, animations, i18n |
| `accessibility-auditor` | WCAG 2.1 AA audit and fixes |
| `seo-i18n-specialist` | SEO metadata, Open Graph, structured data, translations |
| `code-reviewer` | PR review — quality, a11y, tokens, i18n, responsive, performance |

## Design reference (in `purposestack/givernance` repo)

- `docs/ideas/marketing/draft.js` — Full homepage component (source of truth for content + layout)
- `docs/ideas/marketing/campaign-visuals.md` — Taglines and visual concepts
- `docs/11-design-identity.md` — Complete design system spec
- `docs/design/` — 86 interactive HTML mockups

## Issue tracker

Issues #1–#7 in this repo define the full implementation plan. Work sequentially: #2 → #3 → #4 → #5 → #6 → #7.
