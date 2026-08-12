import { Wrap } from './ui'
import { useLanguage } from '../i18n/context'

const COLORS = ['var(--color-grad1)', 'var(--color-violet)', 'var(--color-grad2)', 'var(--color-grad3)']

export default function CoreLoop() {
  const { t } = useLanguage()
  const cl = t.coreLoop

  return (
    <section className="py-20">
      <Wrap>
        <div className="mb-12 text-center">
          <div className="font-display mb-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
            {cl.eyebrow}
          </div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
            {cl.h2}
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-ink-soft">{cl.subtitle}</p>
        </div>

        <div className="grid gap-px bg-line-soft sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-line-soft">
          {cl.steps.map((step, i) => (
            <div key={step.n} className="relative bg-paper-deep p-7 flex flex-col gap-4">
              {i < cl.steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                  <div
                    className="h-5 w-5 rounded-full border-2 border-paper-deep flex items-center justify-center"
                    style={{ background: COLORS[i] }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M2 4h4M4 2l2 2-2 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              )}
              <div className="font-display text-[0.65rem] font-black uppercase tracking-[0.18em]" style={{ color: COLORS[i] }}>
                {step.n}
              </div>
              <div className="font-display text-2xl font-black uppercase text-ink">{step.label}</div>
              <p className="text-[0.85rem] text-ink-dim leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-ink-dim">
          <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.12em]">{cl.repeat}</span>
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" className="text-ink-dim">
            <path d="M1 7h15M13 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.12em]">{cl.repeatTo}</span>
        </div>
      </Wrap>
    </section>
  )
}
