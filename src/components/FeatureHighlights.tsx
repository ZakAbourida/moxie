import { Eyebrow, SectionHeading, Wrap } from './ui'

const SYNTAX = [
  { code: '4x8 @75% r120', note: '4 serie · 8 rip · 75% · rec 2′' },
  { code: '5@80 · 3@85 · 1@90', note: 'wave loading' },
  { code: '4x6 @rir2', note: 'reps in riserva' },
  { code: 'emom 10x3', note: 'ogni minuto' },
  { code: '1x max @rpe9', note: 'top set' },
  { code: 'A1 / A2', note: 'superset' },
]

const FEATURES = [
  {
    n: '02',
    title: 'Command Center "Triforza"',
    body: 'Tre angolazioni sullo stesso atleta — volume, readiness, salute — prima di aprire il dettaglio.',
    accent: 'var(--color-violet)',
  },
  {
    n: '03',
    title: 'Tap Test neuromotorio',
    body: 'Non ti chiede come ti senti: misura una risposta del sistema nervoso, 10 secondi di tap.',
    accent: 'var(--color-violet-full)',
  },
  {
    n: '04',
    title: 'ACWR a bande di rischio',
    body: 'Sweet spot, attenzione, allarme. E se mancano dati lascia un buco: non inventa un numero.',
    accent: 'var(--color-pop)',
  },
  {
    n: '05',
    title: 'Command Palette (Cmd+K)',
    body: 'Scorciatoie da tastiera per un uso quotidiano senza mouse. Alt+numero per navigare.',
    accent: 'var(--color-violet)',
  },
  {
    n: '06',
    title: 'Push & PWA installabile',
    body: 'Una notifica quando il coach carica o modifica una seduta. In home screen, senza store.',
    accent: 'var(--color-violet-full)',
  },
]

export default function FeatureHighlights() {
  return (
    <section id="feature" className="py-20">
      <Wrap>
        <Eyebrow>Funzioni distintive</Eyebrow>
        <SectionHeading>Non feature da brochure. Cose che un coach usa ogni giorno.</SectionHeading>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {/* Marquee: load syntax spans two columns */}
          <article className="group relative overflow-hidden rounded-2xl border border-line-soft bg-panel p-6 lg:col-span-2 lg:row-span-1">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-[0.14] blur-2xl transition-opacity group-hover:opacity-25"
              style={{ background: 'linear-gradient(135deg, var(--color-grad1), var(--color-grad3))' }}
            />
            <div className="relative">
              <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ink-dim">
                01 — La feature che nessun altro parla la tua lingua
              </span>
              <h3 className="font-display mt-1.5 text-xl font-black text-ink">
                Sintassi di carico reale
              </h3>
              <p className="mt-1.5 max-w-[300px] text-[0.9rem] text-ink-soft">
                Come scrive davvero un coach — non menu a tendina, ma prescrizione in una riga.
              </p>
            </div>

            <div className="relative mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {SYNTAX.map((s) => (
                <div
                  key={s.code}
                  className="rounded-lg border border-line-soft bg-paper-deep px-3 py-2.5"
                >
                  <code className="font-display block text-[0.82rem] font-bold tracking-tight text-pop">
                    {s.code}
                  </code>
                  <span className="mt-0.5 block text-[0.62rem] uppercase tracking-wide text-ink-dim">
                    {s.note}
                  </span>
                </div>
              ))}
            </div>
          </article>

          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-line-soft bg-panel p-5 transition-colors hover:border-line"
            >
              <span
                className="absolute left-0 top-5 h-0 w-[3px] rounded-full transition-all duration-300 group-hover:h-[calc(100%-2.5rem)]"
                style={{ background: f.accent }}
              />
              <div className="pl-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className="font-display text-sm font-black"
                    style={{ color: f.accent }}
                  >
                    {f.n}
                  </span>
                  <span className="h-px flex-1 bg-line-soft" />
                </div>
                <h3 className="font-display mt-3 text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-[0.9rem] text-ink-soft">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
