import { useState } from 'react'
import { Wrap, Eyebrow } from './ui'
import { useLanguage } from '../i18n/context'

export default function ScienceTrust() {
  const [open, setOpen] = useState<number | null>(null)
  const { t } = useLanguage()
  const st = t.scienceTrust

  return (
    <section className="border-y border-line-soft py-16">
      <Wrap>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>{st.eyebrow}</Eyebrow>
            <h2 className="font-display text-2xl font-black uppercase leading-tight text-ink sm:text-3xl">
              {st.h2}
            </h2>
          </div>
          <p className="max-w-[360px] text-[0.83rem] text-ink-dim">{st.subtitle}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {st.concepts.map((c, i) => (
            <div key={c.term} className="overflow-hidden rounded-xl border border-line-soft bg-panel-2">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <div>
                  <span className="font-display text-base font-black text-ink">{c.term}</span>
                  <span className="ml-2 font-display text-[0.72rem] font-bold text-ink-dim">{c.full}</span>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="flex-none text-ink-dim transition-transform"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {open === i && (
                <div className="space-y-3 border-t border-line-soft px-5 pb-5 pt-4">
                  <p className="text-[0.85rem] leading-relaxed text-ink-soft">{c.desc}</p>
                  {c.caveat && (
                    <p className="border-l-2 border-pop/40 pl-3 text-[0.78rem] italic text-ink-dim">
                      {c.caveat}
                    </p>
                  )}
                  <p className="font-display text-[0.72rem] text-ink-dim">
                    {st.refLabel} {c.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
