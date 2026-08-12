import { useState } from 'react'
import { PhoneFrame } from './Frame'

const DIMS = [
  { key: 'SONNO', q: 'Come hai dormito?', lo: 'Pessimo', hi: 'Ottimo' },
  { key: 'ENERGIA', q: 'Quanta energia hai?', lo: 'A terra', hi: 'Carico' },
  { key: 'MUSCOLI', q: 'Come senti i muscoli?', lo: 'Doloranti', hi: 'Freschi' },
  { key: 'UMORE', q: "Com'è l'umore?", lo: 'Giù', hi: 'Su' },
  { key: 'STRESS', q: 'Quanto sei sereno?', lo: 'Stressato', hi: 'Sereno' },
]

export default function WellnessMockup() {
  const [step, setStep] = useState(1)
  const [pick, setPick] = useState<number | null>(4)
  const dim = DIMS[step - 1]

  const choose = (n: number) => {
    setPick(n)
    setTimeout(() => {
      setStep((s) => (s >= DIMS.length ? 1 : s + 1))
      setPick(null)
    }, 320)
  }

  return (
    <PhoneFrame>
      <div className="px-5 pb-6 pt-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="font-display text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-dim">
            {step}/5 · {dim.key}
          </span>
          <span className="text-[0.62rem] text-ok">+0.3 vs media</span>
        </div>
        <div className="mb-5 flex gap-1">
          {DIMS.map((_, i) => (
            <span
              key={i}
              className={`h-1 flex-1 rounded-full ${i < step ? 'bg-pop' : 'bg-line'}`}
            />
          ))}
        </div>

        <h4 className="font-display text-lg font-black leading-tight text-ink">
          Come stai?
        </h4>
        <p className="mb-6 text-[0.72rem] text-ink-dim">Pochi secondi, nessun giudizio.</p>

        <p className="mb-3 text-[0.9rem] font-semibold text-ink-soft">{dim.q}</p>

        <div className="mb-2 flex gap-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => choose(n)}
              className={`h-10 flex-1 rounded-lg font-display text-sm font-bold transition-transform ${
                pick === n ? 'scale-105 text-pop-ink' : 'text-ink'
              }`}
              style={{
                background:
                  pick === n
                    ? undefined
                    : `linear-gradient(135deg, rgba(229,83,63,${0.15 + n * 0.03}), rgba(70,201,138,${
                        n * 0.05
                      }))`,
                backgroundColor: pick === n ? '#ff8b5a' : undefined,
              }}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="flex justify-between text-[0.6rem] text-ink-dim">
          <span>{dim.lo}</span>
          <span>{dim.hi}</span>
        </div>

        <div className="mt-6 rounded-xl border border-line-soft bg-panel px-3 py-3">
          <div className="mb-1 font-display text-[0.62rem] font-bold uppercase tracking-wide text-violet-soft">
            Test Neuromotorio
          </div>
          <div className="flex items-end justify-between">
            <span className="font-display text-2xl font-black text-ink">58</span>
            <span className="text-[0.62rem] text-ink-dim">tap · ultimo picco</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper">
            <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-grad1 via-grad2 to-grad3" />
          </div>
          <div className="mt-1 text-[0.58rem] text-ink-dim">86% della baseline 14gg</div>
        </div>
      </div>
    </PhoneFrame>
  )
}
