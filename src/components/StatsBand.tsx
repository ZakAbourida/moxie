import { Wrap } from './ui'

const STATS = [
  { value: '12+', label: 'sintassi di carico supportate' },
  { value: '40+', label: 'segnali readiness raccoglibili' },
  { value: '104', label: 'settimane di storico versionato' },
  { value: '1', label: 'coach → atleta, loop chiuso' },
]

export default function StatsBand() {
  return (
    <div className="border-y border-line-soft">
      <Wrap>
        <div className="grid grid-cols-2 divide-x divide-line-soft sm:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={i} className="px-6 py-8 first:pl-0 last:pr-0 sm:px-10">
              <div
                className="font-display text-4xl font-extrabold leading-none"
                style={{
                  background: 'linear-gradient(135deg, var(--color-grad1), var(--color-grad3))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </div>
              <div className="mt-1.5 font-display text-[0.68rem] font-bold uppercase tracking-[0.12em] text-ink-dim">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </div>
  )
}
