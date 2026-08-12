type Status = 'ok' | 'warn' | 'alarm' | 'neutral'

const STATUS_COLOR: Record<Status, string> = {
  ok: '#46c98a',
  warn: '#e8b93a',
  alarm: '#e5533f',
  neutral: '#6f6862',
}

const W = 360
const H = 190
const PAD = { t: 16, r: 14, b: 24, l: 30 }
const IW = W - PAD.l - PAD.r
const IH = H - PAD.t - PAD.b

function Shell({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <figure className="m-0">
      <figcaption className="mb-2 font-display text-[0.66rem] font-bold uppercase tracking-[0.14em] text-ink-dim">
        {title}
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={title}>
        {children}
      </svg>
    </figure>
  )
}

/* ---------- ACWR chart with risk bands ---------- */

const Y_MIN = 0.4
const Y_MAX = 1.8
const yScale = (v: number) => PAD.t + IH - ((v - Y_MIN) / (Y_MAX - Y_MIN)) * IH
const xScale = (i: number, n: number) => PAD.l + (n <= 1 ? 0 : (i / (n - 1)) * IW)

// risk bands: green sweet spot 0.8–1.3, yellow 0.6–0.8 & 1.3–1.5, red outside
const BANDS: { from: number; to: number; color: string }[] = [
  { from: 1.5, to: Y_MAX, color: 'rgba(229,83,63,0.14)' },
  { from: 1.3, to: 1.5, color: 'rgba(232,185,58,0.13)' },
  { from: 0.8, to: 1.3, color: 'rgba(70,201,138,0.16)' },
  { from: 0.6, to: 0.8, color: 'rgba(232,185,58,0.13)' },
  { from: Y_MIN, to: 0.6, color: 'rgba(229,83,63,0.14)' },
]

export function AcwrChart({
  values,
  title,
}: {
  values: (number | null)[]
  title: string
}) {
  const n = values.length
  // build contiguous segments (skip nulls -> gap)
  const segments: { i: number; v: number }[][] = []
  let cur: { i: number; v: number }[] = []
  values.forEach((v, i) => {
    if (v == null) {
      if (cur.length) segments.push(cur)
      cur = []
    } else {
      cur.push({ i, v })
    }
  })
  if (cur.length) segments.push(cur)

  const lastReal = [...values].reverse().findIndex((v) => v != null)
  const gapStart = lastReal === -1 ? -1 : n - 1 - lastReal

  return (
    <Shell title={title}>
      {/* bands */}
      {BANDS.map((b, i) => (
        <rect
          key={i}
          x={PAD.l}
          y={yScale(b.to)}
          width={IW}
          height={yScale(b.from) - yScale(b.to)}
          fill={b.color}
        />
      ))}
      {/* sweet-spot guide lines */}
      {[0.8, 1.3].map((v) => (
        <line
          key={v}
          x1={PAD.l}
          x2={PAD.l + IW}
          y1={yScale(v)}
          y2={yScale(v)}
          stroke="rgba(70,201,138,0.4)"
          strokeDasharray="3 3"
          strokeWidth="1"
        />
      ))}
      {/* y labels */}
      {[0.6, 1.0, 1.5].map((v) => (
        <text
          key={v}
          x={PAD.l - 6}
          y={yScale(v) + 3}
          textAnchor="end"
          className="fill-ink-dim"
          style={{ fontSize: 9 }}
        >
          {v.toFixed(1)}
        </text>
      ))}
      {/* gap marker */}
      {gapStart >= 0 && gapStart < n - 1 && (
        <g>
          <line
            x1={xScale(gapStart, n)}
            x2={xScale(n - 1, n)}
            y1={PAD.t + IH / 2}
            y2={PAD.t + IH / 2}
            stroke="#6f6862"
            strokeDasharray="2 4"
            strokeWidth="1.5"
          />
          <text
            x={(xScale(gapStart, n) + xScale(n - 1, n)) / 2}
            y={PAD.t + IH / 2 - 8}
            textAnchor="middle"
            className="fill-ink-dim"
            style={{ fontSize: 9, fontStyle: 'italic' }}
          >
            dati insufficienti
          </text>
        </g>
      )}
      {/* line segments */}
      {segments.map((seg, si) => (
        <polyline
          key={si}
          fill="none"
          stroke="#f5f1ea"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={seg.map((p) => `${xScale(p.i, n)},${yScale(p.v)}`).join(' ')}
        />
      ))}
      {/* points */}
      {values.map((v, i) =>
        v == null ? null : (
          <circle
            key={i}
            cx={xScale(i, n)}
            cy={yScale(v)}
            r={i === gapStart ? 3.5 : 2.5}
            fill={
              v > 1.5 || v < 0.6
                ? STATUS_COLOR.alarm
                : v > 1.3 || v < 0.8
                  ? STATUS_COLOR.warn
                  : STATUS_COLOR.ok
            }
          />
        ),
      )}
    </Shell>
  )
}

/* ---------- Load vs signal chart (bars + line, optional baseline) ---------- */

export function LoadSignalChart({
  title,
  bars,
  planned,
  line,
  baseline,
  lineColor = '#c1449c',
  lineLabel,
}: {
  title: string
  bars: number[] // 0..100 real volume
  planned?: number[] // 0..100 prescribed volume (drawn as outline)
  line?: (number | null)[] // 0..100 secondary signal (RPE / Tap Test)
  baseline?: number // 0..100 baseline for the line
  lineColor?: string
  lineLabel?: string
}) {
  const n = bars.length
  const bw = (IW / n) * 0.55
  const gap = (IW / n) * 0.45
  const barX = (i: number) => PAD.l + i * (bw + gap) + gap / 2
  const vY = (v: number) => PAD.t + IH - (v / 100) * IH

  return (
    <Shell title={title}>
      {/* baseline for signal */}
      {baseline != null && (
        <g>
          <line
            x1={PAD.l}
            x2={PAD.l + IW}
            y1={vY(baseline)}
            y2={vY(baseline)}
            stroke="#6f6862"
            strokeDasharray="3 3"
            strokeWidth="1"
          />
          <text
            x={PAD.l + IW}
            y={vY(baseline) - 4}
            textAnchor="end"
            className="fill-ink-dim"
            style={{ fontSize: 8.5, fontStyle: 'italic' }}
          >
            baseline
          </text>
        </g>
      )}
      {/* prescribed outlines */}
      {planned?.map((p, i) => (
        <rect
          key={`p${i}`}
          x={barX(i) - 1}
          y={vY(p)}
          width={bw + 2}
          height={PAD.t + IH - vY(p)}
          fill="none"
          stroke="#6f6862"
          strokeWidth="1"
          strokeDasharray="2 2"
          rx="2"
        />
      ))}
      {/* real bars */}
      {bars.map((b, i) => {
        const over = planned && b > (planned[i] ?? 0) + 4
        return (
          <rect
            key={`b${i}`}
            x={barX(i)}
            y={vY(b)}
            width={bw}
            height={Math.max(0, PAD.t + IH - vY(b))}
            rx="2"
            fill={over ? '#e8b93a' : '#ff8b5a'}
            opacity={b === 0 ? 0.25 : 0.9}
          />
        )
      })}
      {/* missing markers */}
      {bars.map((b, i) =>
        b === 0 ? (
          <text
            key={`m${i}`}
            x={barX(i) + bw / 2}
            y={PAD.t + IH - 4}
            textAnchor="middle"
            className="fill-ink-dim"
            style={{ fontSize: 9 }}
          >
            ·
          </text>
        ) : null,
      )}
      {/* signal line */}
      {line && (
        <>
          <polyline
            fill="none"
            stroke={lineColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={line
              .map((v, i) =>
                v == null ? null : `${barX(i) + bw / 2},${vY(v)}`,
              )
              .filter(Boolean)
              .join(' ')}
          />
          {line.map((v, i) =>
            v == null ? null : (
              <circle
                key={`l${i}`}
                cx={barX(i) + bw / 2}
                cy={vY(v)}
                r="2.2"
                fill={lineColor}
              />
            ),
          )}
        </>
      )}
      {/* legend */}
      <g style={{ fontSize: 8.5 }}>
        <rect x={PAD.l} y={H - 12} width="8" height="8" rx="2" fill="#ff8b5a" />
        <text x={PAD.l + 12} y={H - 5} className="fill-ink-dim">
          reale
        </text>
        {planned && (
          <>
            <rect
              x={PAD.l + 52}
              y={H - 12}
              width="8"
              height="8"
              rx="2"
              fill="none"
              stroke="#6f6862"
              strokeDasharray="2 2"
            />
            <text x={PAD.l + 64} y={H - 5} className="fill-ink-dim">
              prescritto
            </text>
          </>
        )}
        {lineLabel && (
          <>
            <line
              x1={PAD.l + (planned ? 128 : 52)}
              x2={PAD.l + (planned ? 140 : 64)}
              y1={H - 8}
              y2={H - 8}
              stroke={lineColor}
              strokeWidth="2"
            />
            <text x={PAD.l + (planned ? 144 : 68)} y={H - 5} className="fill-ink-dim">
              {lineLabel}
            </text>
          </>
        )}
      </g>
    </Shell>
  )
}

/* ---------- Honest empty state ---------- */

export function EmptyChart({ title }: { title: string }) {
  return (
    <Shell title={title}>
      <rect
        x={PAD.l}
        y={PAD.t}
        width={IW}
        height={IH}
        rx="8"
        fill="none"
        stroke="#322d2c"
        strokeDasharray="5 5"
      />
      <text
        x={W / 2}
        y={H / 2 - 4}
        textAnchor="middle"
        className="fill-ink-soft"
        style={{ fontSize: 12, fontWeight: 700 }}
      >
        Nessun dato
      </text>
      <text
        x={W / 2}
        y={H / 2 + 14}
        textAnchor="middle"
        className="fill-ink-dim"
        style={{ fontSize: 9.5, fontStyle: 'italic' }}
      >
        niente grafici inventati — solo uno stato vuoto onesto
      </text>
    </Shell>
  )
}
