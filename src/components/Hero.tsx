import { Badge, Wrap } from './ui'
import { WaveIcon } from '../imports/WaveIcon'
import ProgramBuilderMockup from './mockups/ProgramBuilderMockup'

const FLOW = [
  { t: 'Coach scrive', d: 'Il programma nel builder a griglia' },
  { t: 'Atleta esegue', d: 'E registra dal portale sul telefono' },
  { t: 'Dati tornano', d: 'Readiness, fatica e dolore al coach' },
]

const STEP_GRADIENTS = [
  'linear-gradient(135deg, var(--color-grad1), var(--color-grad2))',
  'linear-gradient(135deg, var(--color-grad2), var(--color-grad3))',
  'linear-gradient(135deg, var(--color-grad3), var(--color-grad1))',
]

export default function Hero() {
  return (
    <header id="prodotto" className="relative overflow-hidden pt-16 pb-10 sm:pt-24">
      {/* ambient gradient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(242,98,42,0.35), rgba(193,68,156,0.18), transparent)',
        }}
      />
      <Wrap className="relative">
        <div className="mx-auto max-w-[820px] text-center">
          <WaveIcon height={65} className="mx-auto mb-7" />
          <Badge>Coaching OS · non un'app fitness · per coach e atleti</Badge>
          <h1 className="font-display mt-6 text-4xl font-black uppercase leading-[1.02] text-ink sm:text-6xl">
            Il carico si conosce{' '}
            <span className="bg-gradient-to-r from-grad1 via-grad2 to-grad3 bg-clip-text text-transparent">
              prima
            </span>{' '}
            che l'atleta lo scopra sulla sua pelle.
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-[1.05rem] text-ink-soft">
            Il coach costruisce e adatta i programmi in un editor stile foglio di calcolo.
            L'atleta li esegue e li registra dal telefono. I dati — readiness, fatica,
            dolore — tornano indietro in tempo reale. Il cerchio si chiude.
          </p>
        </div>

        {/* flow diagram */}
        <div className="mx-auto mt-10 flex max-w-[560px] flex-col gap-2">
          {FLOW.map((f, i) => (
            <div key={f.t} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span
                  className="grid h-9 w-9 place-items-center rounded-lg font-display text-sm font-black text-pop-ink"
                  style={{ background: STEP_GRADIENTS[i] }}
                >
                  {i + 1}
                </span>
                {i < FLOW.length - 1 && <span className="my-1 h-4 w-px bg-line" />}
              </div>
              <div className="flex-1 rounded-xl border border-line-soft bg-panel px-4 py-2.5">
                <div className="font-display text-sm font-bold text-ink">{f.t}</div>
                <div className="text-[0.78rem] text-ink-dim">{f.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-[880px]">
          <ProgramBuilderMockup />
        </div>
      </Wrap>
    </header>
  )
}
