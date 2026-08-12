import { useId, useState } from 'react'
import { STATUS_COLOR } from '../CaseCharts'
import { BrowserFrame, MockupCard } from './Frame'

type View = 'volume' | 'readiness' | 'salute'

const VIEWS: { id: View; label: string }[] = [
  { id: 'volume', label: 'Volume' },
  { id: 'readiness', label: 'Readiness' },
  { id: 'salute', label: 'Salute' },
]

// SVG gradient ids are built from these colors below, so they must stay plain
// hex strings (not CSS var()/color-mix()) — url(#glow-var(...)) would break.
const VOLUME_COLOR = '#c1449c'

// glow color per view
const GLOW: Record<View, { color: string; label: string; sub: string }> = {
  volume: { color: VOLUME_COLOR, label: 'Tonnellaggio zona', sub: 'Gambe · alto carico' },
  readiness: { color: STATUS_COLOR.warn, label: 'Neural Demand 62', sub: 'Da monitorare · stima' },
  salute: { color: STATUS_COLOR.ok, label: 'ACWR 1,00', sub: 'Sweet spot · nessun dolore' },
}

function Body({ color }: { color: string }) {
  const gradientId = useId()
  return (
    <svg viewBox="0 0 60 130" className="h-32 w-auto" aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.55" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="30" cy="60" rx="34" ry="60" fill={`url(#${gradientId})`} />
      <g fill="#241f1f" stroke={color} strokeOpacity="0.85" strokeWidth="1.4">
        <circle cx="30" cy="12" r="8" />
        <path d="M22 21 h16 l4 22 -6 3 -2 -14 v18 l4 44 -7 1 -3 -40 -3 40 -7 -1 4 -44 v-18 l-2 14 -6 -3 z" />
      </g>
    </svg>
  )
}

export default function CommandCenterMockup() {
  const [view, setView] = useState<View>('readiness')
  const g = GLOW[view]

  return (
    <BrowserFrame title="moxie · quick review roster — command center">
      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-line-soft px-4 py-2.5 text-[0.65rem]">
        {['-2gg', '-1gg', 'Oggi', '+1gg', '+2gg'].map((d, i) => (
          <span
            key={d}
            className={`rounded-md px-2 py-1 font-display font-bold uppercase tracking-wide ${
              i === 2 ? 'bg-pop text-pop-ink' : 'text-ink-dim'
            }`}
          >
            {d}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 px-4 py-3">
        {VIEWS.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setView(v.id)}
            className={`rounded-full px-3 py-1.5 font-display text-[0.72rem] font-bold uppercase tracking-wide transition-colors ${
              view === v.id
                ? 'bg-panel-2 text-ink'
                : 'text-ink-dim hover:text-ink-soft'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 px-4 pb-5 sm:grid-cols-2">
        {['Luca RedFlag', 'Marco LaMacchina'].map((athlete, idx) => {
          const color = idx === 0 && view === 'readiness' ? STATUS_COLOR.alarm : g.color
          const label =
            idx === 0 && view === 'readiness'
              ? 'Tap Test < baseline'
              : g.label
          const sub =
            idx === 0 && view === 'readiness' ? 'Allarme · dato oggettivo' : g.sub
          return (
            <MockupCard key={athlete}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[0.75rem] font-semibold text-ink">{athlete}</span>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: color, boxShadow: `0 0 8px ${color}` }}
                />
              </div>
              <div className="flex items-end justify-center gap-1">
                <Body color={color} />
                <Body color={color} />
              </div>
              <div className="mt-2 text-center">
                <div className="font-display text-[0.72rem] font-bold" style={{ color }}>
                  {label}
                </div>
                <div className="text-[0.62rem] text-ink-dim">{sub}</div>
              </div>
            </MockupCard>
          )
        })}
      </div>
    </BrowserFrame>
  )
}
