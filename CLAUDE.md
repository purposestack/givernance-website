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

## Sibling repositories

This project depends on design references that live in a separate repository.

| Repo | Purpose | GitHub |
|------|---------|--------|
| `givernance` (main repo) | Architecture specs, design identity, mockups, draft components | `purposestack/givernance` |
| `givernance-website` (this repo) | Marketing website implementation | `purposestack/givernance-website` |

### Design reference files (in `givernance` repo)

- `docs/ideas/marketing/draft.js` — Full homepage component (source of truth for content + layout)
- `docs/ideas/marketing/campaign-visuals.md` — Taglines and visual concepts
- `docs/11-design-identity.md` — Complete design system spec
- `docs/design/` — 86 interactive HTML mockups

### Cross-repo context rule

Agent definitions must **never hardcode absolute paths** to sibling repos. Local directory layouts vary between contributors.

When the orchestrator invokes a subagent that needs cross-repo files, it **must inject the resolved paths as context** in the agent prompt. Example:

```
The main givernance repo is located at: {resolved_path}
Read the design reference from: {resolved_path}/docs/11-design-identity.md
```

The orchestrator resolves these paths from its own environment (e.g. the working directories it was started with, or by asking the user). Agents reference sibling repos by name (`givernance` repo) and relative paths (`docs/11-design-identity.md`), never by absolute path.

## Issue tracker

Issues #1–#7 in this repo define the full implementation plan. Work sequentially: #2 → #3 → #4 → #5 → #6 → #7.

## Implementation workflow

Every issue follows this pipeline. The orchestrator (Claude Code main conversation) drives the process and invokes agents in order.

### Step 1 — Understand
- Read the GitHub issue and its comments
- Read relevant design references from the `givernance` repo (orchestrator resolves paths and injects them into agent prompts)
- Identify acceptance criteria

### Step 2 — Build
- Invoke the `nextjs-developer` agent with the issue context and resolved cross-repo paths
- The agent implements, runs `pnpm build` and `pnpm eslint src/`, and fixes any errors before declaring done

### Step 3 — Audit
- Invoke the `accessibility-auditor` agent on the changed code
- It fixes issues directly and reports what it found
- If the issue scope touches SEO/i18n, also invoke `seo-i18n-specialist`

### Step 4 — Review
- Invoke the `code-reviewer` agent on the full diff (`git diff main...HEAD`)
- It checks code quality, design token compliance, a11y, i18n, responsive, performance
- It also verifies implementation against the design reference (draft.js / design-identity.md)
- Fix any Critical or Important findings before proceeding

### Step 5 — Ship
- Verify the Definition of Done (see below)
- Commit, push, create PR linking the issue

### Parallelisation guidance
- Steps 1 is always first (need context for everything else)
- Step 2 is the main work
- Step 3 and 4 can run in parallel after step 2
- Step 5 only after 3 and 4 are clean

## Definition of Done (pre-PR gate)

A PR must not be created until **all** of these pass:

- [ ] `pnpm build` succeeds with zero errors
- [ ] `pnpm eslint src/` passes with zero errors
- [ ] Zero inline `style={{}}` in any `.tsx` file (grep verification)
- [ ] `accessibility-auditor` agent has run and all Critical/Important issues are resolved
- [ ] `code-reviewer` agent has run and all Critical/Important findings are fixed
- [ ] All acceptance criteria from the GitHub issue are met
- [ ] Design token usage verified — no hardcoded hex colours, font families, or shadows
