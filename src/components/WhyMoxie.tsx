import { Eyebrow, SectionHeading, Wrap } from './ui'

type Val = boolean | 'partial'
const ROWS: { criterion: string; excel: Val; generic: Val; moxie: Val }[] = [
  { criterion: 'Sintassi di carico reale (RIR, wave, EMOM)', excel: 'partial', generic: false, moxie: true },
  { criterion: 'I dati dell\'atleta tornano al coach', excel: false, generic: false, moxie: true },
  { criterion: 'Readiness misurata oggettivamente', excel: false, generic: 'partial', moxie: true },
  { criterion: 'ACWR con bande di rischio', excel: false, generic: false, moxie: true },
  { criterion: 'Versioning del programma (time machine)', excel: false, generic: false, moxie: true },
  { criterion: 'Non inventa un dato che non capisce', excel: false, generic: false, moxie: true },
]

function Mark({ v, highlight = false }: { v: Val; highlight?: boolean }) {
  if (v === true)
    return (
      <span
        className={`inline-grid h-6 w-6 place-items-center rounded-full text-[0.8rem] font-black ${
          highlight ? 'bg-pop text-pop-ink' : 'bg-ok/15 text-ok'
        }`}
      >
        ✓
      </span>
    )
  if (v === 'partial')
    return <span className="text-[0.78rem] font-bold uppercase text-warn">parziale</span>
  return <span className="text-ink-dim">—</span>
}

export default function WhyMoxie() {
  return (
    <section id="perche" className="border-y border-line-soft bg-paper-deep py-20">
      <Wrap>
        <Eyebrow>Perché Moxie</Eyebrow>
        <SectionHeading>Un confronto onesto con quello che sostituisce</SectionHeading>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="py-3 pr-4 font-display text-[0.8rem] font-bold uppercase tracking-wide text-ink-dim">
                  Criterio
                </th>
                <th className="px-4 py-3 text-center font-display text-[0.8rem] font-bold uppercase tracking-wide text-ink-dim">
                  Excel + WhatsApp
                </th>
                <th className="px-4 py-3 text-center font-display text-[0.8rem] font-bold uppercase tracking-wide text-ink-dim">
                  App fitness generiche
                </th>
                <th className="rounded-t-xl bg-panel px-4 py-3 text-center font-display text-[0.8rem] font-black uppercase tracking-wide text-pop">
                  Moxie
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.criterion} className="border-b border-line-soft">
                  <td className="py-4 pr-4 text-[0.92rem] text-ink-soft">{r.criterion}</td>
                  <td className="px-4 py-4 text-center">
                    <Mark v={r.excel} />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <Mark v={r.generic} />
                  </td>
                  <td className="bg-panel px-4 py-4 text-center">
                    <Mark v={r.moxie} highlight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Wrap>
    </section>
  )
}
