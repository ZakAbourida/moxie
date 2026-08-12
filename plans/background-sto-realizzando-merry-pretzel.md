# Moxie — Ristrutturazione narrativa landing page

## Context

La landing attuale funziona come catalogo di feature (feature → grafico → feature → grafico). Il documento di revisione identifica il problema centrale: il messaggio che passa è "Moxie ha tante funzionalità" invece di "Moxie cambia il modo in cui un coach prende decisioni." La ristrutturazione introduce tre livelli narrativi chiari: **Problema → Sistema → Prova**.

## Struttura target (ordine sezioni in App.tsx)

```
01 Hero                  (esistente, invariato)
02 Problem               ← nuova
03 CoreLoop              ← nuova (sostituisce concettualmente il loop nel Hero)
04 FeatureHighlights     (esistente, invariato)
05 FeatureRows           (esistente, invariato)
06 DecisionMaking        ← nuova
07 AcwrDemo              (esistente, invariato)
08 CaseStudies           (esistente, invariato)
09 Roles                 (esistente, invariato)
10 Manifesto             (esistente, spostato dopo i contenuti di prodotto)
11 WhyMoxie              (esistente, tabella riscritta → workflow-based)
12 GettingStarted        ← nuova
13 FinalCta              (esistente, invariato)
Footer
```

StatsBand viene **rimossa** (numeri deboli, rischio di sembrare metriche inventate).

## Nuovi componenti

### `src/components/Problem.tsx`
Sezione breve, alta intensità visiva. Due colonne:
- Sinistra: lista di strumenti frammentati (Excel · Sheets · WhatsApp · Note · Screenshot) con frecce verso il basso che convergono su "Decisioni disconnesse"
- Destra: headline **"Your coaching is already data-driven. Your tools aren't."** + una riga **"Moxie connects them."**
- Stile: `bg-paper-deep`, bordi hairline, testo `font-display`, nessun mockup pesante — l'effetto è tutto nella struttura visiva del problema.

### `src/components/CoreLoop.tsx`
Sezione che eleva il loop a "tesi del prodotto":
- 4 step orizzontali (desktop) / verticali (mobile): **Plan → Execute → Measure → Adapt**
- Ogni step ha numero, label grande `font-display`, una riga di descrizione
- Sotto: indicatore che il ciclo si ripete (freccia circolare o testo "e poi ricomincia")
- Il loop diventa il framework concettuale con cui leggere tutto il resto della pagina.
- Pattern stile: simile al flow nel Hero ma più grande e autonomo.

### `src/components/DecisionMaking.tsx`
Sezione "From data to coaching decision" — la più importante tra le nuove:
- Headline: **"Moxie non raccoglie dati. Li rende utilizzabili."**
- Scenario concreto: Readiness 72 → 64 → 51, Training Load ↑, Sleep ↓, Performance ↓
- Output: 4 azioni raccomandate al coach (testo, non AI automatica): "Riduci volume" / "Mantieni intensità" / "Sposta sessione tecnica" / "Rivaluta dopo 48h"
- Visual: layout a due colonne — sinistra i segnali (badge colorati stile readiness), destra le decisioni (lista con bullet gradient)
- Colori: usa `--color-alarm` per readiness in calo, `--color-ok` per le azioni raccomandate

### `src/components/GettingStarted.tsx`
Micro-sezione prima di FinalCta:
- Headline: **"Da zero a Moxie in tre passi"**
- 3 step inline: **Crea gli atleti → Costruisci il programma → Inizia a raccogliere dati**
- Stile minimalista: numeri grandi `font-display`, testo breve, nessun bordo pesante
- Riduce l'attrito pre-CTA

## Modifiche a componenti esistenti

### `src/components/WhyMoxie.tsx`
Riscrivi la tabella con righe **workflow-based** invece di feature-based:

| Workflow | Excel + WhatsApp | App generiche | Moxie |
|---|---|---|---|
| Programmazione | ✓ | ✓ | ✓ |
| Atleta ↔ coach | manuale | parziale | nativo |
| Storico allenamenti | manuale | ✓ | ✓ |
| Readiness oggettiva | manuale | parziale | ✓ |
| Analisi workload | manuale | parziale | ✓ |
| Decisioni di coaching | manuale | — | core |

I valori `true/false/partial` diventano `'native' | 'manual' | 'partial' | true | false` con rendering testuale più descrittivo.

### `src/App.tsx`
- Rimuovi import/uso di `StatsBand`
- Aggiungi import/uso dei 4 nuovi componenti
- Applica ordine sezioni come da struttura target sopra

## File modificati / creati

- **Nuovi**: `src/components/Problem.tsx`, `src/components/CoreLoop.tsx`, `src/components/DecisionMaking.tsx`, `src/components/GettingStarted.tsx`
- **Modificati**: `src/App.tsx` (ordine + import), `src/components/WhyMoxie.tsx` (tabella workflow)
- **Eliminati**: `src/components/StatsBand.tsx` (rimosso dall'uso e poi il file)
- **Invariati**: Hero, FeatureHighlights, FeatureRows, AcwrDemo, CaseStudies, Roles, Manifesto, FinalCta, Footer

## Verifica

- Il dev server Vite è già in esecuzione con hot reload
- Scorrere la landing dall'alto: la narrativa deve seguire Problema → Sistema → Prova
- Mobile < 768px: CoreLoop e DecisionMaking collassano in colonna
- WhyMoxie: la tabella deve restare leggibile su mobile (overflow-x-auto già presente)
- Nessun riferimento a `Integrations` o `StatsBand` rimasto in App.tsx
