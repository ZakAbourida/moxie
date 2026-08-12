import { useState, type ReactNode } from 'react'
import { Eyebrow, Wrap } from './ui'
import { AcwrChart, LoadSignalChart, EmptyChart } from './CaseCharts'
import { useLanguage } from '../i18n/context'

type Status = 'ok' | 'warn' | 'alarm' | 'neutral'

const STATUS_COLOR: Record<Status, string> = {
  ok: '#46c98a',
  warn: '#e8b93a',
  alarm: '#e5533f',
  neutral: '#6f6862',
}

type CaseStatic = {
  name: string
  dot: string
  chart: ReactNode
  caption: { value: string; status: Status }
}

const CASES_STATIC: CaseStatic[] = [
  {
    name: 'Marco LaMacchina',
    dot: '#46c98a',
    chart: <AcwrChart title="ACWR · ultime 8 settimane" values={[0.95, 1.02, 0.98, 1.05, 1.0, 0.97, 1.03, 1.0]} />,
    caption: { value: '1,00', status: 'ok' },
  },
  {
    name: 'Luca RedFlag',
    dot: '#e5533f',
    chart: <LoadSignalChart title="Tap Test vs baseline neurale" bars={[60, 58, 62, 55, 50, 44, 40, 36]} line={[95, 92, 88, 84, 78, 72, 66, 60]} baseline={80} lineColor="#e5533f" lineLabel="tap" />,
    caption: { value: '−25%', status: 'alarm' },
  },
  {
    name: 'Giulia Fantasma',
    dot: '#6f6862',
    chart: <AcwrChart title="ACWR · il dato si interrompe" values={[0.9, 0.95, 0.88, 0.92, null, null, null, null]} />,
    caption: { value: '18 gg fa', status: 'warn' },
  },
  {
    name: 'Andrea Veterano',
    dot: '#ff8b5a',
    chart: <AcwrChart title="ACWR · il rientro sfonda la soglia" values={[null, null, 0.2, 0.45, 0.8, 1.1, 1.38, 1.59]} />,
    caption: { value: '1,59', status: 'alarm' },
  },
  {
    name: 'Sara Novellina',
    dot: '#b8b0a6',
    chart: <EmptyChart title="Carico & readiness" />,
    caption: { value: '0 gg', status: 'neutral' },
  },
  {
    name: 'Davide Incostante',
    dot: '#e8b93a',
    chart: <LoadSignalChart title="Carico registrato · buchi reali nei log" bars={[70, 0, 55, 0, 0, 62, 0, 48]} line={[65, null, 70, null, null, 60, null, 68]} lineColor="#8b3bff" lineLabel="RPE" />,
    caption: { value: '25%', status: 'alarm' },
  },
  {
    name: 'Simone Overachiever',
    dot: '#c1449c',
    chart: <LoadSignalChart title="Reale vs prescritto" bars={[78, 82, 88, 60, 92, 85, 55, 90]} planned={[55, 58, 60, 40, 62, 58, 38, 60]} line={[85, 88, 90, 82, 92, 89, 84, 91]} lineColor="#c1449c" lineLabel="RPE" />,
    caption: { value: '+30/40%', status: 'warn' },
  },
  {
    name: 'Elena Tecnica',
    dot: '#8b3bff',
    chart: <LoadSignalChart title="Volume ≈ 0, ma l'RPE racconta il lavoro" bars={[12, 8, 14, 10, 9, 13, 11, 10]} line={[72, 78, 70, 80, 76, 74, 79, 77]} lineColor="#8b3bff" lineLabel="RPE" />,
    caption: { value: 'RPE', status: 'neutral' },
  },
  {
    name: 'Federico Tapering',
    dot: '#46c98a',
    chart: <AcwrChart title="ACWR · discesa controllata verso la gara" values={[1.18, 1.12, 1.02, 0.96, 0.9, 0.87, 0.85, 0.83]} />,
    caption: { value: '0,83', status: 'ok' },
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const { t } = useLanguage()
  const cs = t.caseStudies

  const staticC = CASES_STATIC[active]
  const textC = cs.cases[active]

  return (
    <section id="casi" className="border-y border-line-soft bg-paper-deep py-20">
      <Wrap>
        <Eyebrow>{cs.eyebrow}</Eyebrow>
        <h2 className="font-display max-w-[720px] text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
          {cs.h2}
        </h2>
        <p className="mt-4 max-w-[680px] text-ink-soft">{cs.subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {CASES_STATIC.map((c, i) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full border px-3.5 py-2 font-display text-[0.78rem] font-bold transition-colors ${
                i === active ? 'border-transparent bg-panel-2 text-ink' : 'border-line-soft text-ink-dim hover:text-ink-soft'
              }`}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: c.dot }} />
              {c.name.split(' ')[1]}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 rounded-2xl border border-line-soft bg-panel p-6 sm:p-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-display text-[0.7rem] font-bold uppercase tracking-wide"
              style={{ background: `${staticC.dot}22`, color: staticC.dot }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: staticC.dot }} />
              {textC.archetype}
            </span>
            <h3 className="font-display mt-3 text-2xl font-black text-ink">{staticC.name}</h3>
            <p className="text-[0.85rem] text-ink-dim">{textC.persona}</p>
            <p className="mt-4 text-ink-soft">{textC.scenario}</p>

            <div className="mt-5 rounded-xl border border-line-soft bg-paper-deep p-4">
              <div className="mb-1.5 flex items-center font-display text-[0.68rem] font-bold uppercase tracking-wide text-pop">
                <span className="mr-2 h-2.5 w-2.5 rounded bg-gradient-to-br from-grad1 to-grad3" />
                {cs.moxieLabel}
              </div>
              <p className="text-[0.92rem] text-ink-soft">{textC.moxie}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-line-soft bg-paper-deep p-4">
            {staticC.chart}
            <div className="mt-4 flex items-center gap-2.5 border-t border-line-soft pt-4">
              <span className="h-2.5 w-2.5 flex-none rounded-full" style={{ background: STATUS_COLOR[staticC.caption.status] }} />
              <span className="font-display text-xl font-black" style={{ color: STATUS_COLOR[staticC.caption.status] }}>
                {staticC.caption.value}
              </span>
              <span className="text-[0.78rem] uppercase tracking-wide text-ink-dim">{textC.captionLabel}</span>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
