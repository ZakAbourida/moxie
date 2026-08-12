import { Wrap } from './ui'
import { useLanguage } from '../i18n/context'

export default function Manifesto() {
  const { t } = useLanguage()
  const m = t.manifesto

  return (
    <section className="border-y border-line-soft bg-paper-deep py-24">
      <Wrap narrow>
        <p className="font-display text-2xl font-bold leading-snug text-ink sm:text-[2rem]">
          {m.p1a}{' '}
          <span className="text-ink-dim">{m.p1excel}</span>{' '}
          {m.p1mid}{' '}
          <span className="text-ink-dim">{m.p1whatsapp}</span>{' '}
          {m.p1b}
        </p>
        <p className="mt-6 font-display text-2xl font-bold leading-snug text-ink sm:text-[2rem]">
          {m.p2a}{' '}
          <span className="bg-gradient-to-r from-grad1 via-grad2 to-grad3 bg-clip-text text-transparent">
            {m.p2b}
          </span>
          {m.p2c}
        </p>
        <p className="mt-8 text-ink-soft">{m.p3}</p>
      </Wrap>
    </section>
  )
}
