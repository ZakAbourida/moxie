import { Eyebrow, Wrap } from './ui'
import { useLanguage } from '../i18n/context'

function Column({ title, tag, items, accent }: { title: string; tag: string; items: string[]; accent: string }) {
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
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: accent }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Roles() {
  const { t } = useLanguage()
  const r = t.roles

  return (
    <section id="ruoli" className="py-20">
      <Wrap>
        <Eyebrow>{r.eyebrow}</Eyebrow>
        <h2 className="font-display max-w-[620px] text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
          {r.h2}
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Column title={r.coach.title} tag={r.coach.tag} items={r.coach.items} accent="linear-gradient(135deg,#f2622a,#c1449c)" />
          <Column title={r.athlete.title} tag={r.athlete.tag} items={r.athlete.items} accent="linear-gradient(135deg,#c1449c,#8b3bff)" />
        </div>
      </Wrap>
    </section>
  )
}
