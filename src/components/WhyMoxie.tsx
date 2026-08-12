import { Eyebrow, Wrap } from './ui'
import { useLanguage } from '../i18n/context'

type Val = 'core' | 'native' | 'yes' | 'partial' | 'manual' | 'no' | 'excel-win'

const ROWS_DATA: { excel: Val; generic: Val; moxie: Val }[] = [
  { excel: 'excel-win', generic: 'no', moxie: 'partial' },
  { excel: 'excel-win', generic: 'excel-win', moxie: 'partial' },
  { excel: 'yes', generic: 'yes', moxie: 'yes' },
  { excel: 'manual', generic: 'partial', moxie: 'native' },
  { excel: 'manual', generic: 'yes', moxie: 'yes' },
  { excel: 'manual', generic: 'partial', moxie: 'yes' },
  { excel: 'manual', generic: 'partial', moxie: 'yes' },
  { excel: 'manual', generic: 'no', moxie: 'core' },
]

function Cell({ v, labels }: { v: Val; labels: { core: string; native: string; excelWin: string; partial: string; manual: string } }) {
  switch (v) {
    case 'core':
      return <span className="inline-flex items-center rounded-full px-3 py-1 font-display text-[0.68rem] font-black uppercase tracking-wide" style={{ background: '#ff8b5a', color: '#151313' }}>{labels.core}</span>
    case 'native':
      return <span className="inline-flex items-center rounded-full px-3 py-1 font-display text-[0.68rem] font-black uppercase tracking-wide" style={{ background: 'rgba(70,201,138,0.18)', color: '#46c98a' }}>{labels.native}</span>
    case 'excel-win':
      return <span className="inline-flex items-center rounded-full px-3 py-1 font-display text-[0.68rem] font-black uppercase tracking-wide" style={{ background: 'rgba(70,201,138,0.18)', color: '#46c98a' }}>✓ {labels.excelWin}</span>
    case 'yes':
      return <span className="inline-grid h-6 w-6 place-items-center rounded-full text-[0.8rem] font-black" style={{ background: 'rgba(70,201,138,0.14)', color: '#46c98a' }}>✓</span>
    case 'partial':
      return <span className="font-display text-[0.72rem] font-bold uppercase text-warn">{labels.partial}</span>
    case 'manual':
      return <span className="font-display text-[0.72rem] font-bold uppercase text-ink-dim">{labels.manual}</span>
    case 'no':
      return <span className="text-ink-dim">—</span>
  }
}

function MoxieCell({ v, labels }: { v: Val; labels: { core: string; native: string; excelWin: string; partial: string; manual: string } }) {
  if (v === 'yes') return <span className="inline-grid h-6 w-6 place-items-center rounded-full text-[0.8rem] font-black" style={{ background: '#ff8b5a', color: '#151313' }}>✓</span>
  return <Cell v={v} labels={labels} />
}

export default function WhyMoxie() {
  const { t } = useLanguage()
  const wm = t.whyMoxie
  const labels = { core: wm.core, native: wm.native, excelWin: wm.excelWin, partial: wm.partial, manual: wm.manual }

  return (
    <section id="perche" className="border-y border-line-soft bg-paper-deep py-20">
      <Wrap>
        <Eyebrow>{wm.eyebrow}</Eyebrow>
        <h2 className="font-display max-w-[680px] text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
          {wm.h2}
        </h2>
        <p className="mt-3 max-w-[520px] text-ink-soft text-[0.92rem]">{wm.subtitle}</p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="py-3 pr-4 font-display text-[0.8rem] font-bold uppercase tracking-wide text-ink-dim">{wm.colWorkflow}</th>
                <th className="px-4 py-3 text-center font-display text-[0.8rem] font-bold uppercase tracking-wide text-ink-dim">{wm.colExcel}</th>
                <th className="px-4 py-3 text-center font-display text-[0.8rem] font-bold uppercase tracking-wide text-ink-dim">{wm.colGeneric}</th>
                <th className="rounded-t-xl bg-panel px-4 py-3 text-center font-display text-[0.8rem] font-black uppercase tracking-wide text-pop">{wm.colMoxie}</th>
              </tr>
            </thead>
            <tbody>
              {ROWS_DATA.map((r, i) => (
                <tr key={i} className="border-b border-line-soft">
                  <td className="py-4 pr-4 text-[0.92rem] text-ink-soft">{wm.rows[i]}</td>
                  <td className="px-4 py-4 text-center"><Cell v={r.excel} labels={labels} /></td>
                  <td className="px-4 py-4 text-center"><Cell v={r.generic} labels={labels} /></td>
                  <td className="bg-panel px-4 py-4 text-center"><MoxieCell v={r.moxie} labels={labels} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Wrap>
    </section>
  )
}
