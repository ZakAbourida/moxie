import { Wrap } from './ui'
import { useLanguage } from '../i18n/context'

export default function Problem() {
  const { t } = useLanguage()
  const p = t.problem

  return (
    <section className="border-y border-line-soft bg-paper-deep py-20">
      <Wrap>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="font-display mb-6 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ink-dim">
              {p.label}
            </div>
            <div className="flex flex-col items-start gap-2">
              {p.tools.map((tool, i) => (
                <div key={tool} className="flex flex-col items-start">
                  <div className="rounded-lg border border-line bg-panel px-4 py-2.5 font-display text-sm font-bold text-ink-soft">
                    {tool}
                  </div>
                  {i < p.tools.length - 1 && (
                    <div className="ml-5 my-1 flex flex-col items-center gap-0.5">
                      <span className="h-1.5 w-px bg-line" />
                      <span className="h-1.5 w-px bg-line opacity-60" />
                    </div>
                  )}
                </div>
              ))}
              <div className="ml-5 my-1 flex flex-col items-center gap-0.5">
                <span className="h-1.5 w-px bg-alarm/40" />
                <span className="h-1.5 w-px bg-alarm/30" />
              </div>
              <div className="rounded-lg border border-alarm/30 bg-alarm/8 px-4 py-2.5 font-display text-sm font-bold text-alarm">
                {p.disconnected}
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
              {p.h2a}
              <br />
              <span className="text-ink-dim">{p.h2b}</span>
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">{p.body}</p>
            <div className="mt-8 flex items-center gap-3">
              <span
                className="h-px flex-1 max-w-[48px]"
                style={{ background: 'linear-gradient(90deg, var(--color-grad1), var(--color-grad3))' }}
              />
              <span className="font-display text-lg font-black uppercase text-ink">{p.cta}</span>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
