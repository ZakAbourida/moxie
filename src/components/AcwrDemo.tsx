import { useState, useMemo } from 'react'
import { AcwrChart, STATUS_COLOR, getAcwrStatus, type Status } from './CaseCharts'
import { Wrap, Eyebrow } from './ui'

const INIT = [62, 70, 58, 75]

function acwr(weeks: number[]): number {
  const acute = weeks[3]
  const chronic = weeks.reduce((a, b) => a + b, 0) / weeks.length
  return chronic === 0 ? 0 : acute / chronic
}

const VERDICT_LABEL: Record<Status, string> = {
  neutral: 'muovi gli slider',
  alarm: 'Spike pericoloso',
  warn: 'Rischio in salita',
  ok: 'Zona ottimale',
}

function verdict(ratio: number): { label: string; color: string; bg: string } {
  const status: Status = ratio === 0 ? 'neutral' : getAcwrStatus(ratio)
  const color = STATUS_COLOR[status]
  return { label: VERDICT_LABEL[status], color, bg: `${color}1f` }
}

const WEEK_LABELS = ['Sett. –4', 'Sett. –3', 'Sett. –2', 'Sett. pianif.']

export default function AcwrDemo() {
  const [weeks, setWeeks] = useState(INIT)

  const ratio = useMemo(() => acwr(weeks), [weeks])
  const v = verdict(ratio)

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
    <section className="border-y border-line-soft bg-paper-deep py-20">
      <Wrap>
        <Eyebrow>Demo interattiva · ACWR</Eyebrow>
        <h2 className="font-display mb-3 text-3xl font-bold text-ink sm:text-4xl">
          Vedi il rischio muoversi in tempo reale
        </h2>
        <p className="mb-12 max-w-xl text-ink-soft">
          {"L'ACWR (Acute:Chronic Workload Ratio) misura quanto il carico della settimana corrente si discosta dalla media storica. Muovi gli slider e osserva il verdetto cambiare."}
        </p>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
          {/* controls */}
          <div className="space-y-7">
            {weeks.map((val, i) => (
              <div key={i}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-dim">
                    {WEEK_LABELS[i]}
                  </span>
                  <span
                    className="font-display text-sm font-bold"
                    style={{ color: i === 3 ? 'var(--color-pop)' : 'var(--color-ink-soft)' }}
                  >
                    {val}
                    <span className="text-ink-dim"> UA</span>
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
                  aria-label={WEEK_LABELS[i]}
                />
              </div>
            ))}
          </div>

          {/* chart + verdict */}
          <div className="space-y-5">
            <AcwrChart values={chartValues} title="ACWR simulato" />

            <div
              className="flex items-center justify-between rounded-lg px-5 py-4"
              style={{ background: v.bg, border: `1px solid ${v.color}22` }}
            >
              <div>
                <div
                  className="font-display text-[0.68rem] font-bold uppercase tracking-[0.12em]"
                  style={{ color: v.color }}
                >
                  Verdetto
                </div>
                <div className="font-display mt-0.5 text-xl font-bold text-ink">{v.label}</div>
              </div>
              <div
                className="font-display text-4xl font-extrabold tabular-nums"
                style={{ color: v.color }}
              >
                {ratio.toFixed(2)}
              </div>
            </div>

            <p className="text-[0.78rem] text-ink-dim">
              Sweet spot ACWR: 0.8 – 1.3. Sopra 1.5 o sotto 0.6 il rischio infortuni aumenta significativamente.
            </p>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
