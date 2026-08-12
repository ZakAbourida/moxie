import { Wrap, Eyebrow } from './ui'
import { useLanguage } from '../i18n/context'

const SIGNALS_STATIC = [
  { values: ['72', '64', '51'], trend: 'down' as const, color: 'var(--color-alarm)' },
  { values: ['↑', '↑↑', '↑↑↑'], trend: 'up' as const, color: 'var(--color-warn)' },
  { values: ['68%', '61%', '52%'], trend: 'down' as const, color: 'var(--color-warn)' },
  { values: ['98%', '94%', '87%'], trend: 'down' as const, color: 'var(--color-alarm)' },
]

export default function DecisionMaking() {
  const { t } = useLanguage()
  const dm = t.decisionMaking

  return (
    <section className="border-y border-line-soft bg-paper-deep py-20">
      <Wrap>
        <Eyebrow>{dm.eyebrow}</Eyebrow>
        <h2 className="font-display mb-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
          {dm.h2a}
          <br />
          <span className="text-ink-dim">{dm.h2b}</span>
        </h2>
        <p className="mb-12 max-w-[520px] text-ink-soft">{dm.subtitle}</p>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <div className="font-display mb-4 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-dim">
              {dm.signalsLabel}
            </div>
            <div className="space-y-3">
              {SIGNALS_STATIC.map((sig, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl border border-line-soft bg-panel px-5 py-4">
                  <div className="font-display text-sm font-bold text-ink-soft">{dm.actions[i] ? dm.actions[i].label : ''}</div>
                  <div className="flex items-center gap-2">
                    {sig.values.map((v, vi) => (
                      <span key={vi} className="font-display text-sm font-black tabular-nums" style={{ color: sig.color, opacity: 0.5 + vi * 0.25 }}>
                        {v}
                      </span>
                    ))}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: sig.color }} className="ml-1">
                      {sig.trend === 'down'
                        ? <path d="M3 4l4 6 4-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        : <path d="M3 10l4-6 4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      }
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display mb-4 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-dim">
              {dm.actionsLabel}
            </div>
            <div className="space-y-3">
              {dm.actions.map((action, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-ok/20 bg-ok/5 px-5 py-4">
                  <div
                    className="font-display mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full text-[0.65rem] font-black text-paper"
                    style={{ background: 'var(--color-ok)' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-ink">{action.label}</div>
                    <div className="mt-0.5 text-[0.75rem] text-ink-dim">{action.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[0.78rem] text-ink-dim">{dm.footer}</p>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
