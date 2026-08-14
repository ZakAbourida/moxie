import { PhoneFrame } from "./Frame"

export function AthleteWeekMockup() {
  return (
    <PhoneFrame>
      <div className="px-4 pb-5 pt-3">
        <div className="flex items-center justify-between">
          <h4 className="font-display text-base font-black text-ink">
            Ciao, Marco
          </h4>
          <span className="grid h-7 w-7 place-items-center rounded-full border border-violet/40 bg-violet/15 text-[0.6rem] font-bold text-violet-soft">
            MA
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            className="grid h-7 w-7 place-items-center rounded-lg bg-panel text-ink-dim"
            aria-label="Settimana precedente"
          >
            ‹
          </button>
          <span className="font-display text-xs font-black text-ink">
            10–16 Ago
          </span>
          <button
            type="button"
            className="grid h-7 w-7 place-items-center rounded-lg bg-panel text-ink-dim"
            aria-label="Settimana successiva"
          >
            ›
          </button>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1">
          {["10", "11", "12", "13", "14", "15", "16"].map((day, i) => (
            <div
              key={day}
              className={`rounded-lg py-2 text-center ${
                i === 4 ? "bg-violet text-white" : "bg-panel"
              }`}
            >
              <span className="block text-[0.48rem] uppercase text-ink-dim">
                {["L", "M", "M", "G", "V", "S", "D"][i]}
              </span>
              <span className="font-display text-[0.68rem] font-black">
                {day}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-violet/25 bg-panel p-4">
          <span className="font-display text-[0.55rem] font-bold uppercase tracking-wide text-violet-soft">
            Fase agonistica · Palestra
          </span>
          <h5 className="font-display mt-2 text-sm font-black text-ink">
            Back Squat (High Bar)
          </h5>
          <p className="mt-1 text-[0.68rem] text-ink-dim">3×3 · 100 kg</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              ["1", "Esercizi"],
              ["3", "Serie"],
              ["900", "kg"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-lg bg-paper-deep p-2 text-center">
                <strong className="font-display block text-sm text-ink">
                  {v}
                </strong>
                <span className="text-[0.48rem] uppercase text-ink-dim">
                  {l}
                </span>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="font-display mt-4 w-full rounded-lg bg-violet py-2 text-[0.65rem] font-black uppercase text-white"
          >
            Inizia
          </button>
        </div>
        <div className="mt-5 grid grid-cols-3 border-t border-line-soft pt-3 text-center font-display text-[0.52rem] font-bold uppercase">
          <span className="text-violet-soft">Settimana</span>
          <span className="text-ink-dim">Progressi</span>
          <span className="text-ink-dim">Wellness</span>
        </div>
      </div>
    </PhoneFrame>
  )
}

export function AthleteProgressMockup() {
  return (
    <PhoneFrame>
      <div className="px-4 pb-5 pt-3">
        <div className="font-display text-[0.58rem] font-bold uppercase tracking-[0.14em] text-violet-soft">
          I tuoi progressi
        </div>
        <h4 className="font-display mt-1 text-lg font-black text-ink">
          Il lavoro lascia una traccia.
        </h4>
        <div className="mt-5 rounded-xl border border-line-soft bg-panel p-4">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[0.55rem] uppercase text-ink-dim">
                Readiness
              </span>
              <strong className="font-display mt-1 block text-2xl text-ok">
                90%
              </strong>
            </div>
            <span className="rounded-full bg-ok/15 px-2 py-1 text-[0.52rem] font-bold text-ok">
              +6 vs media
            </span>
          </div>
          <div className="mt-4 flex h-20 items-end gap-2">
            {[45, 58, 52, 70, 64, 78, 90].map((v, i) => (
              <span
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-grad2 to-grad3"
                style={{ height: `${v}%`, opacity: 0.45 + i * 0.07 }}
              />
            ))}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-line-soft bg-panel p-3">
            <span className="text-[0.52rem] uppercase text-ink-dim">
              Sessioni
            </span>
            <strong className="font-display mt-1 block text-xl text-ink">
              18
            </strong>
            <span className="text-[0.52rem] text-ok">94% completate</span>
          </div>
          <div className="rounded-xl border border-line-soft bg-panel p-3">
            <span className="text-[0.52rem] uppercase text-ink-dim">
              e1RM Squat
            </span>
            <strong className="font-display mt-1 block text-xl text-ink">
              132
            </strong>
            <span className="text-[0.52rem] text-violet-soft">kg · +4.5%</span>
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-line-soft bg-panel p-3">
          <div className="flex justify-between text-[0.55rem] uppercase text-ink-dim">
            <span>Carico settimanale</span>
            <span className="text-ok">stabile</span>
          </div>
          <svg viewBox="0 0 240 70" className="mt-2 w-full" aria-hidden="true">
            <polyline
              points="4,58 42,46 80,50 118,31 156,37 194,21 236,26"
              fill="none"
              stroke="#c1449c"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="mt-5 grid grid-cols-3 border-t border-line-soft pt-3 text-center font-display text-[0.52rem] font-bold uppercase">
          <span className="text-ink-dim">Settimana</span>
          <span className="text-violet-soft">Progressi</span>
          <span className="text-ink-dim">Wellness</span>
        </div>
      </div>
    </PhoneFrame>
  )
}
