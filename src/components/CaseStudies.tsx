import { useState, type ReactNode } from 'react'
import { Eyebrow, Wrap, SectionHeading, Card, GradientDot } from './ui'
import { AcwrChart, LoadSignalChart, EmptyChart, STATUS_COLOR, type Status } from './CaseCharts'

type Caption = { label: string; value: string; status: Status }

type Case = {
  name: string
  archetype: string
  dot: string // archetype dot color
  persona: string
  scenario: string
  moxie: string
  chart: ReactNode
  caption: Caption
}

const CASES: Case[] = [
  {
    name: 'Marco LaMacchina',
    archetype: 'Il caso pulito',
    dot: '#46c98a',
    persona: 'Lanciatore · Promesse · 6 mesi di storico',
    scenario:
      'Sei mesi su tre programmi in sequenza, ACWR sempre nella sweet spot, TSB in scarico corretto verso la gara, massimali in crescita costante — il grafico che si spera di vedere per ogni atleta.',
    moxie:
      'Quando tutto funziona, il Command Center resta silenzioso: nessun alert, nessuna forzatura.',
    chart: (
      <AcwrChart
        title="ACWR · ultime 8 settimane"
        values={[0.95, 1.02, 0.98, 1.05, 1.0, 0.97, 1.03, 1.0]}
      />
    ),
    caption: { label: 'ACWR nella sweet spot', value: '1,00', status: 'ok' },
  },
  {
    name: 'Luca RedFlag',
    archetype: 'Rischio infortunio',
    dot: '#e5533f',
    persona: 'Juniores · burnout / infortunio in corso',
    scenario:
      "Il carico reale diverge dal prescritto, il check-in di benessere crolla, il Tap Test scende sotto la baseline. L'infortunio, quando arriva, era già stato anticipato dai segnali.",
    moxie:
      "L'alert non aspetta un solo numero fuori soglia: combina RPE, check-in e Tap Test.",
    chart: (
      <LoadSignalChart
        title="Tap Test vs baseline neurale"
        bars={[60, 58, 62, 55, 50, 44, 40, 36]}
        line={[95, 92, 88, 84, 78, 72, 66, 60]}
        baseline={80}
        lineColor="#e5533f"
        lineLabel="tap"
      />
    ),
    caption: { label: 'Tap Test sotto baseline', value: '−25%', status: 'alarm' },
  },
  {
    name: 'Giulia Fantasma',
    archetype: 'Dati stantii',
    dot: '#6f6862',
    persona: 'Allievi · abbandono totale · programma mai chiuso',
    scenario:
      'Un programma scaduto da 18 giorni, mai chiuso da nessuno. Molti sistemi continuerebbero a mostrarlo come "settimana corrente".',
    moxie:
      'Readiness e compliance sono segnalate esplicitamente come stantie: l\'app dice "dati insufficienti" invece di inventare un numero attuale.',
    chart: (
      <AcwrChart
        title="ACWR · il dato si interrompe"
        values={[0.9, 0.95, 0.88, 0.92, null, null, null, null]}
      />
    ),
    caption: { label: 'Ultimo accesso', value: '18 gg fa', status: 'warn' },
  },
  {
    name: 'Andrea Veterano',
    archetype: 'Rientro a rischio',
    dot: '#ff8b5a',
    persona: 'Promesse · rientro dopo 4 mesi di stop',
    scenario:
      'Quattro mesi di stop, poi un rientro con carico deciso contro un cronico quasi a zero: la ricetta classica per una ricaduta.',
    moxie:
      "L'ACWR sale sopra la soglia di rischio prima che il rientro diventi un nuovo infortunio.",
    chart: (
      <AcwrChart
        title="ACWR · il rientro sfonda la soglia"
        values={[null, null, 0.2, 0.45, 0.8, 1.1, 1.38, 1.59]}
      />
    ),
    caption: { label: 'ACWR fuori soglia', value: '1,59', status: 'alarm' },
  },
  {
    name: 'Sara Novellina',
    archetype: 'Stato vuoto',
    dot: '#b8b0a6',
    persona: 'Cadetti · profilo appena creato',
    scenario:
      'Nessun programma, nessuna seduta, nessun check-in: il caso più semplice da rompere per qualsiasi dashboard di analytics.',
    moxie: 'Niente crash, niente grafici inventati: solo uno stato vuoto onesto.',
    chart: <EmptyChart title="Carico & readiness" />,
    caption: { label: 'Storico', value: '0 gg', status: 'neutral' },
  },
  {
    name: 'Davide Incostante',
    archetype: 'Effetto yo-yo',
    dot: '#e8b93a',
    persona: 'Juniores · sessioni pianificate mai registrate',
    scenario:
      'Buchi veri nei log (non sedute segnate "saltate"), check-in di benessere scollegato dai giorni di sessione.',
    moxie:
      'La readiness distingue tra "reale" (misurata) e "stimata" (dedotta): non nasconde l\'incertezza dietro un numero unico.',
    chart: (
      <LoadSignalChart
        title="Carico registrato · buchi reali nei log"
        bars={[70, 0, 55, 0, 0, 62, 0, 48]}
        line={[65, null, 70, null, null, 60, null, 68]}
        lineColor="#8b3bff"
        lineLabel="RPE"
      />
    ),
    caption: { label: 'Compliance', value: '25%', status: 'alarm' },
  },
  {
    name: 'Simone Overachiever',
    archetype: 'Sovraccarico volontario',
    dot: '#c1449c',
    persona: 'Promesse · ignora lo scarico prescritto',
    scenario:
      'Il programma dice scarico, lui lo ignora: tonnellaggio reale 30-40% sopra il prescritto, RPE sempre alto, completamento al 100%.',
    moxie:
      'La compliance al 100% non basta: il confronto pianificato-vs-reale rivela l\'eccesso che una spunta "fatto" non racconterebbe.',
    chart: (
      <LoadSignalChart
        title="Reale vs prescritto"
        bars={[78, 82, 88, 60, 92, 85, 55, 90]}
        planned={[55, 58, 60, 40, 62, 58, 38, 60]}
        line={[85, 88, 90, 82, 92, 89, 84, 91]}
        lineColor="#c1449c"
        lineLabel="RPE"
      />
    ),
    caption: { label: 'Reale vs prescritto', value: '+30/40%', status: 'warn' },
  },
  {
    name: 'Elena Tecnica',
    archetype: 'Metrica giusta',
    dot: '#8b3bff',
    persona: 'Juniores · lanci e salti · focus tecnico',
    scenario:
      'Sedute a tonnellaggio quasi zero per costruzione tecnica: contare i kg direbbe che non si sta allenando.',
    moxie:
      "Per queste discipline il segnale di carico reale è l'RPE, non il volume: l'app non forza una metrica sbagliata sul caso sbagliato.",
    chart: (
      <LoadSignalChart
        title="Volume ≈ 0, ma l'RPE racconta il lavoro"
        bars={[12, 8, 14, 10, 9, 13, 11, 10]}
        line={[72, 78, 70, 80, 76, 74, 79, 77]}
        lineColor="#8b3bff"
        lineLabel="RPE"
      />
    ),
    caption: { label: 'Segnale di carico', value: 'RPE', status: 'neutral' },
  },
  {
    name: 'Federico Tapering',
    archetype: 'Scarico corretto',
    dot: '#46c98a',
    persona: 'Pre-gara · taper progressivo su 4 settimane',
    scenario:
      'Il carico scende in modo calcolato verso la gara, senza far scattare falsi allarmi.',
    moxie:
      "Il TSB resta positivo e l'ACWR non esce mai dalla banda sicura: il sistema riconosce uno scarico voluto da un crollo di carico subito.",
    chart: (
      <AcwrChart
        title="ACWR · discesa controllata verso la gara"
        values={[1.18, 1.12, 1.02, 0.96, 0.9, 0.87, 0.85, 0.83]}
      />
    ),
    caption: { label: 'ACWR in taper', value: '0,83', status: 'ok' },
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const c = CASES[active]

  return (
    <section id="casi" className="border-y border-line-soft bg-paper-deep py-20">
      <Wrap>
        <Eyebrow>Prova sul campo · 9 casistiche estreme</Eyebrow>
        <SectionHeading className="max-w-[720px]">
          Non atleti "tipo" per la demo
        </SectionHeading>
        <p className="mt-4 max-w-[680px] text-ink-soft">
          Abbiamo costruito 9 casistiche estreme apposta per stressare ogni funzione: chi
          fila liscio, chi rischia l'infortunio, chi sparisce, chi mente a se stesso sul
          carico. Ogni caso ha una forma riconoscibile nel grafico.
        </p>

        {/* pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CASES.map((cs, i) => (
            <button
              key={cs.name}
              type="button"
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full border px-3.5 py-2 font-display text-[0.78rem] font-bold transition-colors ${
                i === active
                  ? 'border-transparent bg-panel-2 text-ink'
                  : 'border-line-soft text-ink-dim hover:text-ink-soft'
              }`}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: cs.dot }} />
              {cs.name.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* panel */}
        <Card className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-display text-[0.7rem] font-bold uppercase tracking-wide"
              style={{ background: `${c.dot}22`, color: c.dot }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.dot }} />
              {c.archetype}
            </span>
            <h3 className="font-display mt-3 text-2xl font-black text-ink">{c.name}</h3>
            <p className="text-[0.85rem] text-ink-dim">{c.persona}</p>
            <p className="mt-4 text-ink-soft">{c.scenario}</p>

            <div className="mt-5 rounded-xl border border-line-soft bg-paper-deep p-4">
              <div className="mb-1.5 flex items-center font-display text-[0.68rem] font-bold uppercase tracking-wide text-pop">
                <GradientDot className="mr-2 h-2.5 w-2.5" />
                Cosa mostra Moxie
              </div>
              <p className="text-[0.92rem] text-ink-soft">{c.moxie}</p>
            </div>
          </div>

          {/* chart + caption */}
          <div className="flex flex-col justify-between rounded-xl border border-line-soft bg-paper-deep p-4">
            {c.chart}
            <div className="mt-4 flex items-center gap-2.5 border-t border-line-soft pt-4">
              <span
                className="h-2.5 w-2.5 flex-none rounded-full"
                style={{ background: STATUS_COLOR[c.caption.status] }}
              />
              <span
                className="font-display text-xl font-black"
                style={{ color: STATUS_COLOR[c.caption.status] }}
              >
                {c.caption.value}
              </span>
              <span className="text-[0.78rem] uppercase tracking-wide text-ink-dim">
                {c.caption.label}
              </span>
            </div>
          </div>
        </Card>
      </Wrap>
    </section>
  )
}
