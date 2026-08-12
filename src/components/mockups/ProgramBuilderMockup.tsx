import { BrowserFrame } from './Frame'

type Cell = { name: string; rx: string; tag?: string } | null

const DAYS = ['LUN', 'MAR', 'MER', 'GIO']
const WEEKS = [
  { label: 'SETT 1', note: '' },
  { label: 'SETT 2', note: 'OGGI' },
  { label: 'SETT 3', note: 'SCARICO' },
]

const GRID: Cell[][] = [
  [
    { name: 'Back Squat (High Bar)', rx: '4x8 @75% r120', tag: 'A1' },
    { name: 'Back Squat (High Bar)', rx: '5@80 · 3@85 · 1@90' },
    { name: 'Back Squat (High Bar)', rx: '3x5 @65% r90', tag: 'scarico' },
  ],
  [
    { name: 'Panca Piana', rx: '5x5 @80% r3', tag: 'A1' },
    { name: 'Panca Piana', rx: '4x6 @rir2' },
    null,
  ],
  [
    { name: 'Stacco da Terra', rx: '4x3 @85% r180' },
    { name: 'Balzi in Basso', rx: 'emom 10x3' },
    { name: 'Mobilità + Core', rx: '3x8 @rpe6' },
  ],
  [
    null,
    { name: 'Military Press', rx: '1x max @rpe9', tag: 'top set' },
    null,
  ],
]

export default function ProgramBuilderMockup() {
  return (
    <BrowserFrame title="moxie · program builder v3 — marco lamacchina">
      <div className="flex flex-wrap items-center gap-2 border-b border-line-soft px-4 py-3 text-[0.7rem]">
        <span className="rounded-md bg-ok/15 px-2 py-1 font-display font-bold uppercase tracking-wide text-ok">
          In corso
        </span>
        <span className="text-ink-soft">Blocco Forza · 8 settimane</span>
        <span className="ml-auto hidden gap-1.5 sm:flex">
          {['Blocco', 'Template', 'Oggi', 'Metadati'].map((b) => (
            <span key={b} className="rounded-md border border-line px-2 py-1 text-ink-dim">
              {b}
            </span>
          ))}
          <span className="rounded-md bg-pop px-2.5 py-1 font-bold text-pop-ink">Salva</span>
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr>
              <th className="w-14 border-b border-r border-line-soft bg-panel px-2 py-2" />
              {WEEKS.map((w) => (
                <th
                  key={w.label}
                  className="border-b border-r border-line-soft bg-panel px-3 py-2 align-top"
                >
                  <div className="font-display text-[0.7rem] font-bold uppercase tracking-wide text-ink-soft">
                    {w.label}
                  </div>
                  {w.note && (
                    <div
                      className={`mt-0.5 text-[0.6rem] font-bold uppercase tracking-wide ${
                        w.note === 'OGGI' ? 'text-pop' : 'text-violet'
                      }`}
                    >
                      {w.note}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DAYS.map((day, r) => (
              <tr key={day}>
                <td className="border-b border-r border-line-soft bg-panel px-2 py-3 text-center font-display text-[0.62rem] font-bold uppercase tracking-wide text-ink-dim">
                  {day}
                </td>
                {GRID.map((col, c) => {
                  const cell = col[r]
                  return (
                    <td
                      key={c}
                      className="border-b border-r border-line-soft px-2 py-2 align-top"
                    >
                      {cell ? (
                        <div className="rounded-md border border-line-soft bg-panel px-2 py-1.5">
                          <div className="flex items-center gap-1.5">
                            {cell.tag && (
                              <span className="rounded bg-violet-full/20 px-1 py-0.5 text-[0.55rem] font-bold uppercase text-violet-soft">
                                {cell.tag}
                              </span>
                            )}
                            <span className="truncate text-[0.68rem] font-semibold text-ink">
                              {cell.name}
                            </span>
                          </div>
                          <code className="mt-1 block font-display text-[0.66rem] font-semibold tracking-tight text-pop">
                            {cell.rx}
                          </code>
                        </div>
                      ) : (
                        <div className="h-full min-h-[2.4rem] rounded-md border border-dashed border-line-soft/60" />
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BrowserFrame>
  )
}
