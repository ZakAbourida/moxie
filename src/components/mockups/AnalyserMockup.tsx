import { useLanguage } from "../../i18n/context"
import { topicTranslations } from "../../i18n/topicTranslations"
import { BrowserFrame } from "./Frame"

const ROWS = [
  {
    initials: "LR",
    name: "Luca RedFlag",
    program: "Intensificazione",
    acwr: "0.79",
    ready: "+7.9",
    compliance: 75,
    color: "#e8b93a",
    alert: true,
  },
  {
    initials: "SO",
    name: "Simone Overachiever",
    program: "Mantenimento",
    acwr: "1.53",
    ready: "−15.6",
    compliance: 100,
    color: "#e5533f",
  },
  {
    initials: "ML",
    name: "Marco LaMacchina",
    program: "Fase Agonistica",
    acwr: "0.74",
    ready: "+6.1",
    compliance: 100,
    color: "#e8b93a",
  },
  {
    initials: "ET",
    name: "Elena Tecnica",
    program: "Tecnica Lanci",
    acwr: "0.86",
    ready: "+3",
    compliance: 100,
    color: "#46c98a",
  },
]

export default function AnalyserMockup() {
  const { lang } = useLanguage()
  const content = topicTranslations[lang].coach.analyserMockup

  return (
    <BrowserFrame title={content.title}>
      <div className="flex items-center justify-between gap-4 overflow-x-auto border-b border-line-soft px-4 py-3">
        <span className="font-display whitespace-nowrap text-[0.62rem] font-black uppercase tracking-wide text-alarm">
          {content.alert}
        </span>
        <div className="flex gap-1">
          {content.tabs.map((tab, i) => (
            <span
              key={tab}
              className={`rounded-md px-3 py-1.5 font-display text-[0.65rem] font-bold uppercase tracking-wide ${
                i === 0 ? "bg-pop text-pop-ink" : "text-ink-dim"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto p-4">
        <div className="min-w-[560px] overflow-hidden rounded-xl border border-line-soft bg-panel">
          <div className="grid grid-cols-[1.35fr_1.1fr_0.55fr_0.65fr_0.8fr] gap-3 border-b border-line-soft px-4 py-2.5">
            {content.headers.map((header) => (
              <span
                key={header}
                className="font-display text-[0.56rem] font-bold uppercase tracking-wide text-ink-dim"
              >
                {header}
              </span>
            ))}
          </div>
          {ROWS.map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-[1.35fr_1.1fr_0.55fr_0.65fr_0.8fr] items-center gap-3 border-b border-line-soft px-4 py-3 last:border-0 ${
                row.alert ? "bg-alarm/5" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-violet/30 font-display text-[0.58rem] font-black text-ink">
                  {row.initials}
                </span>
                <span className="truncate text-[0.68rem] font-bold text-ink">
                  {row.name}
                </span>
              </div>
              <span className="truncate text-[0.64rem] text-ink-soft">
                {row.program}
              </span>
              <span
                className="font-display text-sm font-black"
                style={{ color: row.color }}
              >
                {row.acwr}
              </span>
              <span className="font-display text-xs font-black text-ink">
                {row.ready}
              </span>
              <div className="flex items-center gap-2">
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-paper">
                  <span
                    className="block h-full rounded-full bg-ok"
                    style={{ width: `${row.compliance}%` }}
                  />
                </span>
                <span className="font-display w-7 text-right text-[0.62rem] font-bold text-ink-soft">
                  {row.compliance}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}
