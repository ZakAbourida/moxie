import { Wrap } from './ui'

export default function Manifesto() {
  return (
    <section className="border-y border-line-soft bg-paper-deep py-24">
      <Wrap narrow>
        <p className="font-display text-2xl font-bold leading-snug text-ink sm:text-[2rem]">
          Nato da un coach per sostituire i propri{' '}
          <span className="text-ink-dim">fogli Excel</span> e i{' '}
          <span className="text-ink-dim">gruppi WhatsApp</span> — dove i dati si
          perdevano tra uno screenshot e l'altro.
        </p>
        <p className="mt-6 font-display text-2xl font-bold leading-snug text-ink sm:text-[2rem]">
          Moxie{' '}
          <span className="bg-gradient-to-r from-grad1 via-grad2 to-grad3 bg-clip-text text-transparent">
            chiude il cerchio
          </span>
          : il programma, l'esecuzione e la risposta dell'atleta nello stesso posto.
        </p>
        <p className="mt-8 text-ink-soft">
          Oggi in produzione, usato ogni giorno su atleti reali.
        </p>
      </Wrap>
    </section>
  )
}
