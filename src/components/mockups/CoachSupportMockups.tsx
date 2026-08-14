import { BrowserFrame } from "./Frame"

const EXERCISES = [
  {
    name: "Back Squat (High Bar)",
    group: "Squat",
    tags: ["Palestra", "Gambe", "Bilanciere"],
  },
  {
    name: "A-Skip",
    group: "Sprint & conditioning",
    tags: ["Campo", "Pliometria", "Whole body"],
  },
  {
    name: "90/90 Hip Switch",
    group: "Mobilità & prehab",
    tags: ["Mobilità", "Rotazione", "Unilaterale"],
  },
]

export function ExerciseLibraryMockup() {
  return (
    <BrowserFrame title="moxie · exercise library — 172 esercizi">
      <div className="grid gap-3 border-b border-line-soft p-4 sm:grid-cols-4">
        {["Tipo", "Target", "Pattern", "Attrezzatura"].map((filter, i) => (
          <div
            key={filter}
            className={`rounded-lg border px-3 py-2 ${
              i === 1 ? "border-pop/35 bg-pop/10" : "border-line-soft bg-panel"
            }`}
          >
            <span className="block text-[0.52rem] uppercase tracking-wide text-ink-dim">
              {filter}
            </span>
            <strong className="font-display mt-0.5 block text-[0.66rem] text-ink-soft">
              {["Palestra · Campo", "Gambe", "Accosciata", "Bilanciere"][i]}
            </strong>
          </div>
        ))}
      </div>
      <div className="space-y-2 p-4">
        {EXERCISES.map((exercise, i) => (
          <div
            key={exercise.name}
            className="rounded-xl border border-line-soft bg-panel p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="font-display text-[0.72rem] font-black text-ink">
                  {exercise.name}
                </span>
                <span className="mt-0.5 block text-[0.54rem] uppercase tracking-wide text-ink-dim">
                  {exercise.group}
                </span>
              </div>
              <span className="font-display text-[0.56rem] font-bold text-pop">
                0{i + 1}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {exercise.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-paper-deep px-2 py-1 text-[0.5rem] uppercase text-ink-dim"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  )
}

const FEEDBACK = [
  {
    athlete: "Marco LaMacchina",
    type: "Sessione completata",
    note: "RPE 7 · Più fluido del previsto.",
    color: "text-ok",
  },
  {
    athlete: "Luca RedFlag",
    type: "Segnalazione dolore",
    note: "Fastidio posteriore · 3/5.",
    color: "text-alarm",
  },
  {
    athlete: "Simone Overachiever",
    type: "Check-in wellness",
    note: "Fatica alta · sonno 2/5.",
    color: "text-warn",
  },
]

export function FeedbackCenterMockup() {
  return (
    <BrowserFrame title="moxie · feedback center — inbox intelligente">
      <div className="flex items-center justify-between gap-3 border-b border-line-soft p-4">
        <div className="flex gap-2">
          <span className="rounded-full bg-pop px-3 py-1 font-display text-[0.55rem] font-bold uppercase text-pop-ink">
            Tutti
          </span>
          <span className="rounded-full border border-line px-3 py-1 text-[0.55rem] uppercase text-ink-dim">
            Non letti 3
          </span>
        </div>
        <span className="text-[0.55rem] uppercase text-ink-dim">Filtri</span>
      </div>
      <div className="space-y-2 p-4">
        {FEEDBACK.map((item, i) => (
          <div
            key={item.athlete}
            className={`flex gap-3 rounded-xl border p-3 ${
              i === 1
                ? "border-alarm/25 bg-alarm/5"
                : "border-line-soft bg-panel"
            }`}
          >
            <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-gradient-to-br from-grad1 to-grad2 font-display text-[0.55rem] font-black text-white">
              {item.athlete
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex justify-between gap-2">
                <span className="truncate text-[0.7rem] font-bold text-ink">
                  {item.athlete}
                </span>
                <span className="text-[0.5rem] text-ink-dim">{i + 1}h fa</span>
              </div>
              <span
                className={`mt-0.5 block font-display text-[0.55rem] font-bold uppercase ${item.color}`}
              >
                {item.type}
              </span>
              <p className="mt-1 text-[0.62rem] text-ink-dim">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
    </BrowserFrame>
  )
}

export function CoachContextMockup() {
  return (
    <div className="grid min-w-0 gap-6 lg:grid-cols-[0.86fr_1.14fr]">
      <article className="overflow-hidden rounded-2xl border border-pop/20 bg-panel">
        <div className="border-b border-line-soft bg-pop/5 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-pop font-display text-[0.58rem] font-black text-pop-ink">
              01
            </span>
            <div>
              <h3 className="font-display text-sm font-black uppercase text-ink">
                Calendario della stagione
              </h3>
              <p className="mt-0.5 text-[0.62rem] text-ink-dim">
                Quando accadono sedute, test e gare.
              </p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-display text-xs font-black uppercase text-ink">
                Agosto
              </span>
              <span className="ml-2 text-[0.58rem] text-ink-dim">
                Vista mese
              </span>
            </div>
            <span className="rounded-lg bg-pop px-2 py-1 text-[0.55rem] font-bold text-pop-ink">
              Oggi · 14
            </span>
          </div>
          <div className="mt-4 grid grid-cols-7 gap-1">
            {Array.from({ length: 28 }, (_, i) => (
              <span
                key={i}
                className={`relative h-7 rounded ${
                  [3, 4, 8, 10, 11, 17, 18, 24].includes(i)
                    ? "bg-paper-deep"
                    : "bg-panel-2"
                }`}
              >
                {[3, 8, 10, 17, 24].includes(i) && (
                  <i className="absolute bottom-1 left-1 right-1 h-1 rounded bg-warn" />
                )}
                {[4, 11, 18].includes(i) && (
                  <i className="absolute bottom-1 left-1 right-1 h-1 rounded bg-pop" />
                )}
              </span>
            ))}
          </div>
          <div className="mt-3 flex gap-3 text-[0.52rem] uppercase text-ink-dim">
            <span>
              <i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-warn" />
              Forza
            </span>
            <span>
              <i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-pop" />
              Campo
            </span>
          </div>
        </div>
      </article>
      <article className="rounded-2xl border border-violet/25 bg-[radial-gradient(circle_at_100%_0%,rgba(193,68,156,0.12),transparent_48%),var(--color-panel)]">
        <div className="border-b border-violet/15 bg-violet/5 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-violet font-display text-[0.58rem] font-black text-white">
              02
            </span>
            <div>
              <h3 className="font-display text-sm font-black uppercase text-ink">
                Pagina dedicata all’atleta
              </h3>
              <p className="mt-0.5 text-[0.62rem] text-ink-dim">
                Chi è, come sta e quale percorso sta seguendo.
              </p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-grad1 to-grad2 font-display text-xs font-black text-white">
              ML
            </span>
            <div>
              <span className="font-display block text-sm font-black text-ink">
                Marco LaMacchina
              </span>
              <span className="text-[0.58rem] text-ink-dim">
                Lancio del Disco · Attivo
              </span>
            </div>
            <span className="ml-auto rounded-full border border-violet/30 px-2.5 py-1 text-[0.5rem] font-bold uppercase text-violet-soft">
              Profilo
            </span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              ["90%", "Readiness"],
              ["100%", "Compliance"],
              ["0.74", "ACWR"],
            ].map(([v, l], i) => (
              <div key={l} className="rounded-lg bg-paper-deep p-2.5">
                <strong
                  className={`font-display block text-sm ${
                    i === 0 ? "text-ok" : i === 2 ? "text-warn" : "text-ink"
                  }`}
                >
                  {v}
                </strong>
                <span className="text-[0.48rem] uppercase text-ink-dim">
                  {l}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-violet/15 bg-paper-deep px-3 py-2">
            <span className="text-[0.52rem] uppercase text-ink-dim">
              Programma attivo
            </span>
            <strong className="mt-1 block text-[0.68rem] text-ink-soft">
              Fase Agonistica · Sett. 5/6
            </strong>
          </div>
        </div>
      </article>
    </div>
  )
}
