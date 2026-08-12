import { useState, useMemo } from 'react'
import { AcwrChart } from './CaseCharts'
import { Eyebrow } from './ui'
import { useLanguage } from '../i18n/context'

const INIT = [62, 70, 58, 75]

function acwr(weeks: number[]): number {
  const acute = weeks[3]
  const chronic = weeks.reduce((a, b) => a + b, 0) / weeks.length
  return chronic === 0 ? 0 : acute / chronic
}

export default function AcwrDemo() {
  const [weeks, setWeeks] = useState(INIT)
  const { t } = useLanguage()
  const ad = t.acwrDemo

  const ratio = useMemo(() => acwr(weeks), [weeks])

  const v = useMemo(() => {
    if (ratio === 0) return { ...ad.verdicts.zero, color: '#6f6862', bg: 'rgba(111,104,98,0.12)' }
    if (ratio > 1.5 || ratio < 0.6) return { ...ad.verdicts.danger, color: '#e5533f', bg: 'rgba(229,83,63,0.10)' }
    if (ratio > 1.3 || ratio < 0.8) return { ...ad.verdicts.warn, color: '#e8b93a', bg: 'rgba(232,185,58,0.10)' }
    return { ...ad.verdicts.ok, color: '#46c98a', bg: 'rgba(70,201,138,0.10)' }
  }, [ratio, ad])

  const chartValues = useMemo(() => {
    const series: (number | null)[] = []
    for (let i = 1; i <= weeks.length; i++) {
      const slice = weeks.slice(0, i)
      if (i < 2) { series.push(null); continue }
      const a = slice[slice.length - 1]
      const c = slice.reduce((acc, x) => acc + x, 0) / slice.length
      series.push(c === 0 ? null : parseFloat((a / c).toFixed(2)))
    }
    return series
  }, [weeks])

  return (
    <section className="py-20">
      <div className="relative border-y border-line-soft" style={{ background: 'rgba(139,59,255,0.04)' }}>
        <div className="mx-auto max-w-[1120px] px-5 sm:px-8 py-16">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>{ad.eyebrow}</Eyebrow>
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">{ad.h2}</h2>
            </div>
            <p className="max-w-sm text-[0.85rem] text-ink-dim">{ad.subtitle}</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
            <div className="space-y-6">
              {weeks.map((val, i) => (
                <div key={i}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink-dim">
                      {ad.weekLabels[i]}
                    </span>
                    <span
                      className="font-display text-sm font-bold tabular-nums"
                      style={{ color: i === 3 ? 'var(--color-pop)' : 'var(--color-ink-soft)' }}
                    >
                      {val} <span className="text-ink-dim font-normal">{ad.unit}</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={val}
                    onChange={(e) => {
                      const next = [...weeks]
                      next[i] = Number(e.target.value)
                      setWeeks(next)
                    }}
                    className="w-full accent-pop h-1.5 rounded-full"
                    aria-label={ad.weekLabels[i]}
                  />
                </div>
              ))}

              <div
                className="mt-4 rounded-2xl px-6 py-5"
                style={{ background: v.bg, border: `1px solid ${v.color}28` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-display text-[0.65rem] font-bold uppercase tracking-[0.12em]" style={{ color: v.color }}>
                      {ad.verdictLabel}
                    </div>
                    <div className="font-display mt-0.5 text-xl font-black text-ink">{v.label}</div>
                    {v.sub && <div className="mt-1 text-[0.76rem] text-ink-dim">{v.sub}</div>}
                  </div>
                  <div className="font-display text-5xl font-black tabular-nums leading-none" style={{ color: v.color }}>
                    {ratio.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <AcwrChart values={chartValues} title={ad.chartTitle} />
              <p className="mt-4 text-[0.75rem] text-ink-dim">{ad.footerNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
