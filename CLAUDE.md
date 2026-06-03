# Givernance Marketing Website — CLAUDE.md

## What is this

The public marketing website for **Givernance**, a GDPR-native CRM built for European nonprofits (2–200 staff). This site speaks to nonprofit decision-makers — fundraising directors, executive directors, operations leads — and sells the value of switching from Salesforce complexity to a calmer, purpose-built system.

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, TypeScript strict) |
| Styling | Tailwind CSS v4 — **zero inline styles** (see ADR in issue #2) |
| Animation | CSS keyframes / transitions (no animation library); respect `prefers-reduced-motion` |
| Icons | Lucide React |
| Typography | Sora (headings/display), Manrope (body), IBM Plex Mono (labels) — via `next/font/google` |
| i18n | next-intl with `[locale]` App Router routing |
| Deploy | Vercel (EU region) |

## Design tokens

All colors, shadows, radii, and fonts are defined as Tailwind tokens in `src/app/globals.css` (`@theme`). Never use inline `style={{}}` or hardcoded hex values.

The dynamic-animation components are the documented exceptions where computed/runtime style values are unavoidable: `typewriter.tsx`, `live-dashboard.tsx`, `home/hero.tsx` (wave timing), and `opengraph-image.tsx` (built with `next/og`, which requires inline styles).

### Colors

Colours are oklch-based. Tokens are defined in `globals.css`.

Brand palette:
- `cream` (oklch 0.965 0.012 86 — page background)
- `sage-light` (oklch 0.945 0.035 178), `sage-mid` (oklch 0.777 0.113 173)
- `deep` (oklch 0.545 0.115 178), `ink` (oklch 0.215 0.020 200 — foreground text)
- `ember` (oklch 0.708 0.158 22 — accent)

Accessibility-tuned variants (for verified contrast):
- `deep-text` (#107472), `deep-section` (#084e46), `ember-text` (#b52e29)

Semantic aliases:
- `background` → `cream`, `foreground` → `ink`
- `card` (oklch 0.985 0.008 84), `card-foreground` → `ink`
- `border` (deep @ 16% alpha), `input` (deep @ 22% alpha), `muted` (oklch 0.48 0.025 178)

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
| `consistency-content-guardian` | Content consistency — translation alignment, no hardcoded strings, label length |

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

### Step 4b — Content consistency gate
- **Mandatory** when the change touches content, labels, translations, pages, or adds a language
- Invoke the `consistency-content-guardian` agent on the current working tree
- It verifies: all locale files have identical key sets, no hardcoded strings in TSX, no orphan/missing keys, label length limits, terminology rules
- Any **Critical** finding blocks the commit — fix before proceeding
- This agent's protocol evolves: when new consistency rules are discovered, update the agent definition

### Step 5 — Ship
- Verify the Definition of Done (see below)
- Commit, push, create PR linking the issue

### Parallelisation guidance
- Step 1 is always first (need context for everything else)
- Step 2 is the main work
- Step 3, 4, and 4b can run in parallel after step 2
- Step 5 only after 3, 4, and 4b are clean

## Definition of Done (pre-PR gate)

A PR must not be created until **all** of these pass:

- [ ] `pnpm build` succeeds with zero errors
- [ ] `pnpm eslint src/` passes with zero errors
- [ ] Zero inline `style={{}}` in any `.tsx` file (grep verification)
- [ ] `accessibility-auditor` agent has run and all Critical/Important issues are resolved
- [ ] `code-reviewer` agent has run and all Critical/Important findings are fixed
- [ ] `consistency-content-guardian` agent has run (if content/labels/translations changed) with zero Critical findings
- [ ] All acceptance criteria from the GitHub issue are met
- [ ] Design token usage verified — no hardcoded hex colours, font families, or shadows

## Memory

After completing any significant implementation (shipping a PR, adding a new pattern, discovering a convention), **proactively save relevant context to memory** so future conversations can pick up where this one left off. This includes:

- Updated issue progress (which issues/PRs are done)
- New architectural patterns or conventions introduced
- Tech stack changes (new dependencies, version bumps)
- Lessons learned from audit/review findings that apply broadly

Do not wait to be asked — update memory as part of the Ship step.
