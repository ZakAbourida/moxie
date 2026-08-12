import type { ReactNode } from 'react'
import { Wrap } from './ui'
import ProgramBuilderMockup from './mockups/ProgramBuilderMockup'
import CommandCenterMockup from './mockups/CommandCenterMockup'
import DashboardMockup from './mockups/DashboardMockup'
import WellnessMockup from './mockups/WellnessMockup'

type Row = {
  eyebrow: string
  title: string
  body: string
  quote?: string
  mockup: ReactNode
}

const ROWS: Row[] = [
  {
    eyebrow: 'Program Builder V3',
    title: 'Il cuore del prodotto è una griglia',
    body: 'Colonne per le settimane del blocco, righe per i giorni, celle con esercizi e prescrizione in sintassi compatta. Time machine per tornare a versioni precedenti, template, assegnazione a più atleti.',
    mockup: <ProgramBuilderMockup />,
  },
  {
    eyebrow: 'Command Center · System Map',
    title: 'Tre angolazioni sullo stesso atleta',
    body: 'Due sagome corporee — fronte e retro — in tre viste: volume per zona, readiness col glow neurale, salute che incrocia ACWR e dolore riportato. Il Tap Test sotto baseline forza l\'allarme: il dato oggettivo ha sempre la precedenza.',
    quote: '"Tre angolazioni sullo stesso atleta, pensate per uno sguardo rapido prima di aprire il dettaglio."',
    mockup: <CommandCenterMockup />,
  },
  {
    eyebrow: 'Dashboard & Analyser',
    title: 'Chi ha bisogno di te, adesso',
    body: 'Roster con readiness a semaforo, RPE contro completamento, ACWR con bande di rischio, compliance a 7 giorni. Un banner in cima dice quanti atleti sono in alert su quanti totali.',
    quote: '"L\'app non inventa un numero: lascia un buco nel grafico piuttosto che mostrarti un valore falso."',
    mockup: <DashboardMockup />,
  },
  {
    eyebrow: 'Portale atleta · PWA',
    title: 'Scrivi quello che hai fatto, non quello che dovevi fare',
    body: 'Tre tab: Settimana, Progressi, Wellness. Reps, carico e tempo modificabili serie per serie. Il check-in giornaliero e il Tap Test misurano lo stato prima che tu arrivi stanco in palestra — non dopo.',
    quote: '"Un check-in sincero può far scalare o alleggerire un allenamento prima che tu arrivi stanco in palestra."',
    mockup: <WellnessMockup />,
  },
]

export default function FeatureRows() {
  return (
    <section className="py-20">
      <Wrap>
        <div className="space-y-24">
          {ROWS.map((row, i) => {
            const flip = i % 2 === 1
            return (
              <div
                key={row.title}
                className="grid items-center gap-10 lg:grid-cols-2"
              >
                <div className={flip ? 'lg:order-2' : ''}>
                  <div className="mb-3 flex items-center font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
                    <span className="mr-2.5 h-3 w-3 rounded bg-gradient-to-br from-grad1 to-grad3" />
                    {row.eyebrow}
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase leading-tight text-ink sm:text-3xl">
                    {row.title}
                  </h3>
                  <p className="mt-4 text-ink-soft">{row.body}</p>
                  {row.quote && (
                    <p className="mt-5 border-l-2 border-pop pl-4 text-[0.95rem] italic text-ink-dim">
                      {row.quote}
                    </p>
                  )}
                </div>
                <div className={flip ? 'lg:order-1' : ''}>{row.mockup}</div>
              </div>
            )
          })}
        </div>
      </Wrap>
    </section>
  )
}
