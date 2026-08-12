import { BrowserFrame, MockupCard } from './Frame'

const ROSTER = [
  { name: 'Marco LaMacchina', rpe: 72, done: 100, ready: 88, status: 'ATTIVO' },
  { name: 'Simone Overachiever', rpe: 94, done: 100, ready: 61, status: 'ATTIVO' },
  { name: 'Luca RedFlag', rpe: 81, done: 75, ready: 34, status: 'INFORTUNATO' },
  { name: 'Elena Tecnica', rpe: 55, done: 100, ready: 79, status: 'ATTIVO' },
]

function readyColor(v: number) {
  if (v >= 70) return 'var(--color-ok)'
  if (v >= 45) return 'var(--color-warn)'
  return 'var(--color-alarm)'
}

export default function DashboardMockup() {
  return (
    <BrowserFrame title="moxie · roster — lun 12 ago">
      <div className="grid grid-cols-3 gap-3 px-4 py-4">
        {[
          { k: 'Atleti attivi', v: '11', c: 'text-ink' },
          { k: 'Feedback da leggere', v: '3', c: 'text-pop' },
          { k: 'Prossima gara', v: '9 gg', c: 'text-violet-soft' },
        ].map((s) => (
          <MockupCard key={s.k}>
            <div className={`font-display text-2xl font-black ${s.c}`}>{s.v}</div>
            <div className="text-[0.62rem] uppercase tracking-wide text-ink-dim">{s.k}</div>
          </MockupCard>
        ))}
      </div>

      <div className="px-4 pb-2">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-display text-[0.72rem] font-bold uppercase tracking-wide text-ink-soft">
            Panoramica atleti
          </span>
          <div className="flex gap-3 text-[0.6rem]">
            <span className="flex items-center gap-1 text-ink-dim">
              <span className="h-2 w-2 rounded-sm bg-violet" /> RPE
            </span>
            <span className="flex items-center gap-1 text-ink-dim">
              <span className="h-2 w-2 rounded-sm bg-pop" /> Completamento
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2.5 px-4 pb-5">
        {ROSTER.map((a) => (
          <MockupCard key={a.name} className="px-3 py-2.5">
            <div className="mb-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="grid h-7 w-7 place-items-center rounded-full text-[0.6rem] font-bold text-ink"
                  style={{ background: 'linear-gradient(135deg, var(--color-grad2), var(--color-grad3))' }}
                >
                  {a.name.split(' ').map((w) => w[0]).join('')}
                </span>
                <span className="text-[0.74rem] font-semibold text-ink">{a.name}</span>
              </div>
              <span
                className={`rounded px-1.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-wide ${
                  a.status === 'ATTIVO' ? 'bg-ok/15 text-ok' : 'bg-alarm/15 text-alarm'
                }`}
              >
                {a.status}
              </span>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-3">
              <div className="space-y-1">
                <div className="h-1.5 overflow-hidden rounded-full bg-paper">
                  <div className="h-full rounded-full bg-violet" style={{ width: `${a.rpe}%` }} />
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-paper">
                  <div className="h-full rounded-full bg-pop" style={{ width: `${a.done}%` }} />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: readyColor(a.ready) }}
                />
                <span className="w-8 text-right text-[0.7rem] font-semibold text-ink-soft">
                  {a.ready}%
                </span>
              </div>
            </div>
          </MockupCard>
        ))}
      </div>
    </BrowserFrame>
  )
}
