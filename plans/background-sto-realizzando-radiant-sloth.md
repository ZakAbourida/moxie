# Moxie — Sfondo dinamico + nuove sezioni prodotto

## Context

La landing page product di Moxie ("coaching OS" per atleti) è completa e funzionante, tema sempre scuro (`#131110`), gradiente firma arancio→magenta→viola, font Lexend/Manrope, copy italiano diretto. Due esigenze:

1. **Lo sfondo è troppo statico** — attualmente è un colore piatto (`bg-paper` = `#131110`) con solo glow radiali locali per sezione (Hero, FinalCta, FeatureHighlights). Manca vita/movimento di fondo pagina.
2. **Elevare il potenziale percepito del prodotto** — mostrare meglio le funzionalità con nuovi contenuti.

Decisioni prese con l'utente:
- Sfondo: implementare **entrambi** gli approcci — **A) aurora animata + grana** e **C) glow legato allo scroll** — con un piccolo interruttore per confrontarli dal vivo e decidere quale tenere.
- Nuove sezioni: **Demo ACWR interattiva** (slider dal vivo), **banda numeri/metriche**, **integrazioni/ecosistema**.

Nessuna libreria di animazione è installata; si resta su CSS keyframes + minimal JS (pattern già usato in `Nav.tsx`). Nessuna dipendenza nuova.

## Vincoli / pattern da riusare

- Layout sezioni: usare `Wrap` ed `Eyebrow` da `src/components/ui.tsx`; ricalcare il pattern sezione (`border-y border-line-soft bg-paper-deep py-20`) visto in `WhyMoxie.tsx`.
- Gradiente firma via classi `from-grad1 via-grad2 to-grad3` o token `--color-grad1/2/3` (già in `index.css`).
- La demo ACWR **riusa il componente `AcwrChart`** già esistente in `src/components/CaseCharts.tsx` (bande di rischio, scale, verdetto colore) — nessuna riscrittura del grafico.
- Rispettare `prefers-reduced-motion` (blocco già presente in `index.css:79` che neutralizza le animazioni — le nuove keyframes ne ereditano il comportamento).
- Export default per i componenti; virgolette doppie per stringhe con apostrofi.

## 1. Sfondo dinamico (A + C, confrontabili)

**Nuovo file `src/components/Background.tsx`** — layer `fixed inset-0 -z-10 pointer-events-none` montato una volta dentro il root di `App.tsx`, con prop `mode: "aurora" | "scroll"`.

- **Aurora (A):** 2–3 blob `radial-gradient` con i colori firma (grad1/2/3) a bassa opacità e `blur-3xl`, animati con nuove keyframes `@keyframes aurora-drift` (traslazione/scala lente, ~24–40s, `ease-in-out infinite alternate`) da aggiungere in `src/index.css`. Sopra, un layer **grana**: SVG `feTurbulence` (fractalNoise) come `background-image` data-URI, `opacity ~0.05`, `mix-blend-mode: overlay` — texture fissa, non anima.
- **Scroll glow (C):** un glow radiale la cui **posizione/tinta segue lo scroll**. `App.tsx` (o il Background) registra un listener scroll (throttled con `requestAnimationFrame`, stesso pattern di `Nav.tsx`) che scrive una CSS var `--scrollp` (0→1) sul root; il glow usa `top`/hue calcolati da quella var. Nessun ricalcolo di layout, solo transform/opacity.

**Interruttore di confronto:** piccolo controllo `fixed bottom-4 right-4 z-50` (pill in `bg-panel border-line`, testo `font-display` uppercase) con stato `useState<"aurora"|"scroll">` in `App.tsx`, passato a `<Background mode={...} />`. Permette all'utente di flippare dal vivo. Nota nel piano: **è temporaneo** — una volta scelto, si rimuove l'interruttore e si tiene un solo `mode`.

**File toccati:** nuovo `src/components/Background.tsx`; `src/App.tsx` (montare Background + stato/interruttore + eventuale scroll listener); `src/index.css` (keyframes `aurora-drift`, eventuale `@property --scrollp`). Il root resta `bg-paper` come fallback dietro il layer.

## 2. Demo ACWR interattiva — `src/components/AcwrDemo.tsx`

Sezione nuova che rende tangibile il concetto ACWR (già citato in copy/grafici) con interazione dal vivo.

- 4 slider (carico settimanale ultime 4 settimane, 0–100) in stato React. Calcolo onesto: `ACWR = settimana corrente / media(4 settimane)`; l'utente muove uno slider "settimana pianificata" e vede l'ACWR aggiornarsi.
- Verdetto dal vivo con le stesse soglie di `CaseCharts` (sweet spot 0.8–1.3, giallo 0.6–0.8 & 1.3–1.5, rosso fuori): badge colore + microcopy ("zona ottimale" / "rischio in salita" / "spike pericoloso").
- Visualizzazione: **riuso di `AcwrChart`** passando la serie ACWR calcolata dagli slider, così il grafico con bande reagisce al movimento.
- Layout `Wrap` + `Eyebrow`, griglia asimmetrica (controlli a sinistra, grafico+verdetto a destra), responsive < ~1000px in colonna.

## 3. Banda numeri/metriche — `src/components/StatsBand.tsx`

Striscia compatta (non full section pesante) con 3–4 metriche oneste e contestuali (es. "sintassi di carico supportate", "segnali readiness raccolti", "settimane di storico versionato"), stile `font-display` grande + label `text-ink-dim` uppercase, separatori hairline. Coerente col tono "onesto" del prodotto (niente numeri gonfiati/inventati — se non abbiamo dati reali, metriche di capability, non di trazione).

## 4. Integrazioni / ecosistema — `src/components/Integrations.tsx`

Griglia "cosa alimenta Moxie": sorgenti dati/wearable (es. Garmin, Whoop, Apple Health, Polar, pedane di forza/force plates, import CSV, Google Sheets). Card hairline con nome + una riga di ruolo ("readiness da HRV", "carico da GPS", ecc.). Coerente col loop "i dati tornano al coach". Marchi resi come **etichette testuali/monogrammi** (no loghi proprietari), in linea con lo stile sobrio della pagina.

## 5. Ordine sezioni in `App.tsx`

```
Hero
FeatureHighlights
StatsBand          ← nuova
Manifesto
FeatureRows
AcwrDemo           ← nuova
CaseStudies
Roles
Integrations       ← nuova
WhyMoxie
FinalCta
```
`<Background />` montato come primo figlio del root; interruttore di confronto in fondo.

## File

- Nuovi: `src/components/Background.tsx`, `src/components/AcwrDemo.tsx`, `src/components/StatsBand.tsx`, `src/components/Integrations.tsx`
- Modificati: `src/App.tsx` (import/ordine/Background/interruttore), `src/index.css` (keyframes aurora + eventuale `@property`)
- Riusati senza modifiche: `src/components/CaseCharts.tsx` (`AcwrChart`), `src/components/ui.tsx` (`Wrap`, `Eyebrow`)

## Verifica

- Il dev server Vite è già in esecuzione (`$PORT`, hot reload); controllo visivo nel pannello di anteprima.
- Sfondo: flippare l'interruttore aurora↔scroll; verificare che l'aurora si muova lentamente, la grana sia sottile, e il glow segua lo scroll senza scatti/jank; testo mantiene contrasto AA sopra lo sfondo.
- Demo ACWR: muovere gli slider → ACWR e verdetto/colore aggiornano in tempo reale; il grafico riusa le bande corrette.
- Responsive: restringere < ~1000px, le nuove sezioni collassano in colonna.
- `prefers-reduced-motion`: con motion ridotto, aurora/scroll-glow si fermano (ereditato dal blocco esistente).
- Nessuna menzione di "invito" reintrodotta.
```
