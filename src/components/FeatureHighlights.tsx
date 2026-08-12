import { Eyebrow, Wrap } from './ui'
import { useLanguage } from '../i18n/context'

const ACCENTS = ['#c1449c', '#8b3bff', '#ff8b5a', '#c1449c', '#8b3bff']

export default function FeatureHighlights() {
  const { t } = useLanguage()
  const fh = t.featureHighlights

  return (
    <section id="feature" className="py-20">
      <Wrap>
        <Eyebrow>{fh.eyebrow}</Eyebrow>
        <h2 className="font-display max-w-[620px] text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
          {fh.h2}
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className="group relative overflow-hidden rounded-2xl border border-line-soft bg-panel p-6 lg:col-span-2 lg:row-span-1">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-[0.14] blur-2xl transition-opacity group-hover:opacity-25"
              style={{ background: 'linear-gradient(135deg,#f2622a,#8b3bff)' }}
            />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ink-dim">
                  {fh.f01eyebrow}
                </span>
                <h3 className="font-display mt-1.5 text-xl font-black text-ink">{fh.f01title}</h3>
                <p className="mt-1.5 max-w-[300px] text-[0.9rem] text-ink-soft">{fh.f01body}</p>
              </div>
            </div>
            <div className="relative mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {fh.syntax.map((s) => (
                <div key={s.code} className="rounded-lg border border-line-soft bg-paper-deep px-3 py-2.5">
                  <code className="font-display block text-[0.82rem] font-bold tracking-tight text-pop">{s.code}</code>
                  <span className="mt-0.5 block text-[0.62rem] uppercase tracking-wide text-ink-dim">{s.note}</span>
                </div>
              ))}
            </div>
          </article>

          {fh.features.map((f, i) => (
            <article key={f.title} className="group relative overflow-hidden rounded-2xl border border-line-soft bg-panel p-5 transition-colors hover:border-line">
              <span
                className="absolute left-0 top-5 h-0 w-[3px] rounded-full transition-all duration-300 group-hover:h-[calc(100%-2.5rem)]"
                style={{ background: ACCENTS[i] }}
              />
              <div className="pl-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-sm font-black" style={{ color: ACCENTS[i] }}>{f.n}</span>
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
