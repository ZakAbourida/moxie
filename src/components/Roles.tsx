import { Eyebrow, Wrap } from './ui'

const COACH = [
  'Costruire programmi nel builder a griglia con sintassi di carico reale',
  'Duplicare, esportare in Excel/PDF, salvare come template',
  'Aprire il Command Center per il triage rapido del roster',
  'Leggere il Feedback Center: note post-seduta, RPE, fatica, dolore',
  'Analizzare ACWR, readiness·TSB e compliance nell\'Analyser',
  'Gestire la libreria esercizi con famiglie di varianti',
  'Navigare tutto da tastiera con la Command Palette (Cmd+K)',
]

const ATHLETE = [
  'Vedere la seduta del giorno con volume, serie e RPE',
  'Registrare reps, carico e tempo — anche diversi dal prescritto',
  'Spuntare esercizi e serie fatte, aggiungerne o toglierne',
  'Fare il check-in di benessere: 5 dimensioni, scala 1-5',
  'Eseguire il Tap Test neuromotorio, minimo 2 tentativi',
  'Segnalare un infortunio o un fastidio direttamente dalla seduta',
  'Installare il portale come app e ricevere notifiche push',
]

function Column({
  title,
  tag,
  items,
  accent,
}: {
  title: string
  tag: string
  items: string[]
  accent: string
}) {
  return (
    <div className="rounded-2xl border border-line-soft bg-panel p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <span
          className="grid h-10 w-10 place-items-center rounded-xl font-display text-sm font-black text-pop-ink"
          style={{ background: accent }}
        >
          {title[0]}
        </span>
        <div>
          <div className="font-display text-lg font-black uppercase text-ink">{title}</div>
          <div className="text-[0.72rem] uppercase tracking-wide text-ink-dim">{tag}</div>
        </div>
      </div>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-[0.92rem] text-ink-soft">
            <span
              className="mt-2 h-1.5 w-1.5 flex-none rounded-full"
              style={{ background: accent }}
            />
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Roles() {
  return (
    <section id="ruoli" className="py-20">
      <Wrap>
        <Eyebrow>Attività per ruolo</Eyebrow>
        <h2 className="font-display max-w-[620px] text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
          Due pubblici, già addetti ai lavori
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Column
            title="Coach"
            tag="Desktop-first"
            items={COACH}
            accent="linear-gradient(135deg,#f2622a,#c1449c)"
          />
          <Column
            title="Atleta"
            tag="Portale mobile · PWA"
            items={ATHLETE}
            accent="linear-gradient(135deg,#c1449c,#8b3bff)"
          />
        </div>
      </Wrap>
    </section>
  )
}
