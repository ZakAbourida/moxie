# Moxie — Product Landing Page

## Context

The user wants a product landing page for **Moxie**, a dark-themed "coaching OS" for
performance athletes (not a generic fitness app). A detailed brief
(`src/imports/pasted_text/moxie-product-overview.md`) specifies the product, audience
(invite-only: coaches + athletes), full page structure, copy, tone of voice, and a
non-negotiable visual identity. A rough draft (`src/imports/locandina-moxie.html`) exists
but relies on low-res, compressed real screenshots that look grainy. The brief explicitly
asks to **replace those with clean, high-fidelity UI mockups** built in-app using Moxie's
visual language.

The current `src/App.tsx` is the default Vite scaffold placeholder (an interactive dot
grid) with nothing product-related — it will be replaced by the landing page. UI is
entirely in **Italian**.

## Visual identity (from brief — mandatory)

- Always-dark: bg `#131110`/`#151313`, surfaces `#1e1b1b`/`#1a1717`, ink `#f5f1ea`.
- Accent orange `#ff8b5a` (strong `#f2622a`); secondary magenta `#c1449c`, violet `#8b3bff`.
- Gradient signature `#F2622A → #C1449C → #8B3BFF` (logo wave, avatars, glows).
- Type: **Lexend** 700–900 for display/headings (uppercase-ish, tight tracking);
  **Manrope** for body. Both are Google Fonts.
- Semantic status colors: green=ok, yellow=attenzione, red=allarme, grey=neutro/assente.
- No stock icons/emoji — geometric shapes, solid colored badges, dot/traffic-light indicators.

## Approach

Replace the placeholder app with a componentized single-page landing built in
React + Tailwind v4, following the documented structure. Fonts and design tokens wired in
`src/index.css`; sections split into components under `src/components/`.

### Fonts & tokens — `src/index.css`
- Add Google Fonts `@import` for Lexend (700;800;900) and Manrope (400;500;600;700;800)
  as the **first** statement, before `@import 'tailwindcss'` — CSS requires `@import`s
  first. (Verify order works with Tailwind's own import; if conflict, use `<link>` in
  `index.html` instead.)
- Define theme tokens via Tailwind v4 `@theme` (colors: paper, panel, ink, pop, violet,
  grad stops, semantic status) + base `font-family` defaults and a `.display` utility.

### Components — `src/components/`
- `Logo.tsx` — inline SVG: rounded-square dark tile, ECG-style wave stroke with the
  linear gradient + orange end dot; `MoxieWordmark` with optional "ELITE PERFORMANCE".
- `Nav.tsx` — sticky nav: logo+wordmark left, section links center (Prodotto, Feature,
  Casi reali, Ruoli, Perché Moxie), "Coach · Atleta" badge + textual "Chiedi un invito".
- `Hero.tsx` — headline (load known before the athlete feels it), subtitle explaining
  builder↔portal↔data loop, vertical flow diagram (Coach scrive → Atleta esegue → Dati
  tornano), and a **Program Builder mockup** in a browser-chrome window (traffic-light dots).
- `FeatureHighlights.tsx` — 5–6 compact cards (colored icon + title + one line):
  load syntax, "Triforza" Command Center, Tap Test, ACWR risk bands, Command Palette, PWA/push.
- `Manifesto.tsx` — 2–3 large sentences: problem (Excel + WhatsApp, lost data) → solution.
- `FeatureRows.tsx` — alternating text/mockup rows: Program Builder, Command Center/System
  Map, Dashboard & Analyser, Athlete Portal (phone frame). Reuses mockup components below.
- `CaseStudies.tsx` — **9 selectable pills/tabs** (colored archetype dot). Clicking swaps a
  panel: archetype tag, name, persona line, scenario, "cosa mostra Moxie" box, and 3 stat
  tiles (real numbers colored by status). Data as a typed array; all 9 profiles from brief.
- `Roles.tsx` — two columns Coach / Atleta, 6–7 concrete activities each.
- `WhyMoxie.tsx` — honest comparison table: Excel+WhatsApp / generic fitness apps / Moxie
  across criteria (real load syntax, data return to coach, objective readiness, versioning).
  No competitor names.
- `FinalCta.tsx` — solid orange band, invite-only CTA (no public form / no "free trial").
- `Footer.tsx` — minimal: logo, tagline line, no external links.

### Mockup components — `src/components/mockups/`
High-fidelity CSS/JSX (no screenshots):
- `ProgramBuilderMockup` — Excel-like grid: week columns (SETT 1..N, SCARICO/OGGI),
  day rows (LUN..DOM), exercise cells showing real prescription syntax
  (`4x8 @75% r120`, `5@80 · 3@85 · 1@90`, superset `A1/A2`).
- `CommandCenterMockup` — two stylized body silhouettes (front/back) with readiness
  glow (green/yellow/red) — the "Triforza" view.
- `DashboardMockup` — roster stat cards + horizontal RPE/completion bars + readiness bars.
- `WellnessMockup` — phone frame: "Come stai?" 1–5 scale on a red→green bar, Tap Test card.

### App shell — `src/App.tsx`
Compose the sections in order; provide the min-height dark background wrapper.

## Copy & tone
Italian, direct, no corporate-SaaS clichés. Reuse the authentic in-app quotes from the
brief (e.g. "L'app non salva mai un dato che non capisce."). Honest about real scale
(1 coach + colleagues). Never call it a "fitness app"; no pricing, no signup form, no
external links, no competitor names.

## Aesthetic process
Before writing UI, invoke `Skill('make:aesthetic-stance')` and call `create_make_theme`
with a 1–2 sentence request (full-page brief). Apply resulting stance within the mandatory
identity above (identity from the brief takes precedence where they overlap).

## Files
- Replace: `src/App.tsx`
- Edit: `src/index.css` (fonts + `@theme` tokens)
- New: `src/components/*.tsx`, `src/components/mockups/*.tsx`

## Verification
- Vite dev server is already running on `$PORT`; confirm the page renders via preview.
- Visually check: dark theme, Lexend/Manrope loaded, gradient logo wave, all 10 sections
  present, 9 case-study tabs switch content, responsive at mobile width.
- Optionally use `make-verify-bootstrap` / deploy-preview to smoke-test the build.
