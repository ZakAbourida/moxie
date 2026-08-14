import { Wrap } from "./ui"
import { useLanguage } from "../i18n/context"
import { topicTranslations } from "../i18n/topicTranslations"
import ProgramBuilderMockup from "./mockups/ProgramBuilderMockup"
import CommandCenterMockup from "./mockups/CommandCenterMockup"
import DashboardMockup from "./mockups/DashboardMockup"
import WellnessMockup from "./mockups/WellnessMockup"
import AnalyserMockup from "./mockups/AnalyserMockup"
import {
  AthleteProgressMockup,
  AthleteWeekMockup,
} from "./mockups/AthletePortalMockups"
import {
  CoachContextMockup,
  ExerciseLibraryMockup,
  FeedbackCenterMockup,
} from "./mockups/CoachSupportMockups"
import DecisionMaking from "./DecisionMaking"
import AcwrDemo from "./AcwrDemo"
import CaseStudies from "./CaseStudies"
import ScienceTrust from "./ScienceTrust"

export type TopicId = "coach" | "programmazione" | "monitoraggio" | "atleta" | "engineering"

function TopicHero({ id }: { id: TopicId }) {
  const { lang } = useLanguage()
  const tx = topicTranslations[lang]
  const topic = tx.topics.find((item) => item.id === id)!
  const coachTone =
    id === "coach" || id === "programmazione" || id === "monitoraggio"
  const athleteTone = id === "atleta"
  const engineeringTone = id === "engineering"
  return (
    <header className="relative overflow-hidden border-b border-line-soft pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div
        className={`pointer-events-none absolute -right-40 -top-48 h-[560px] w-[700px] rounded-full blur-3xl ${
          athleteTone
            ? "bg-gradient-to-br from-grad2/30 via-grad3/25 to-grad2/10"
            : coachTone
              ? "bg-gradient-to-br from-grad1/35 via-pop/20 to-grad2/10"
              : engineeringTone
                ? "bg-gradient-to-br from-ok/30 via-ok/15 to-transparent"
                : "bg-gradient-to-br from-grad1/20 via-grad2/10 to-grad3/20"
        }`}
        aria-hidden="true"
      />
      <Wrap className="relative">
        <a
          href="#/"
          className="font-display mb-10 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-dim transition-colors hover:text-ink"
        >
          ← {tx.common.backHome}
        </a>
        <div className="max-w-[860px]">
          <div
            className={`font-display mb-4 text-[0.74rem] font-bold uppercase tracking-[0.14em] ${
              athleteTone
                ? "text-violet-soft"
                : engineeringTone
                  ? "text-ok"
                  : "text-pop"
            }`}
          >
            {topic.n} · {topic.eyebrow}
          </div>
          <h1 className="font-display text-4xl font-black uppercase leading-[1.02] text-ink sm:text-6xl">
            {topic.hero}
          </h1>
          <p className="mt-6 max-w-[680px] text-[1.05rem] text-ink-soft sm:text-lg">
            {topic.intro}
          </p>
        </div>
      </Wrap>
    </header>
  )
}

function Pillars({
  items,
  tone = "pop",
}: {
  items: { title: string; body: string }[]
  tone?: "pop" | "violet"
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft md:grid-cols-3">
      {items.map((item, i) => (
        <article key={item.title} className="bg-panel p-7">
          <span
            className={`font-display text-xs font-black ${
              tone === "violet" ? "text-violet-soft" : "text-pop"
            }`}
          >
            0{i + 1}
          </span>
          <h3 className="font-display mt-4 text-xl font-black uppercase text-ink">
            {item.title}
          </h3>
          <p className="mt-3 text-[0.9rem] text-ink-soft">{item.body}</p>
        </article>
      ))}
    </div>
  )
}

function TopicNext({ current, nextId }: { current: TopicId; nextId?: TopicId }) {
  const { lang } = useLanguage()
  const tx = topicTranslations[lang]
  const index = tx.topics.findIndex((topic) => topic.id === current)
  const next = nextId
    ? tx.topics.find((topic) => topic.id === nextId)!
    : tx.topics[(index + 1) % tx.topics.length]
  return (
    <section className="py-20">
      <Wrap>
        <a
          href={`#/${next.id}`}
          className={`group block rounded-3xl p-8 sm:p-12 ${
            current === "atleta"
              ? "bg-gradient-to-r from-grad2 to-grad3 text-white"
              : current === "coach"
                ? "bg-gradient-to-r from-grad1 to-pop text-pop-ink"
                : "bg-pop text-pop-ink"
          }`}
        >
          <div className="font-display text-xs font-bold uppercase tracking-[0.14em] opacity-60">
            {tx.common.explore} · {next.n}
          </div>
          <div className="mt-3 flex items-end justify-between gap-5">
            <h2 className="font-display text-3xl font-black uppercase sm:text-5xl">
              {next.title}
            </h2>
            <span className="text-3xl transition-transform group-hover:translate-x-2">
              →
            </span>
          </div>
        </a>
      </Wrap>
    </section>
  )
}

function CoachPage() {
  const { lang } = useLanguage()
  const tx = topicTranslations[lang]
  const c = tx.coach

  return (
    <>
      <TopicHero id="coach" />
      <section className="border-b border-line-soft py-20">
        <Wrap>
          <div className="max-w-[760px]">
            <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
              {c.workflowEyebrow}
            </div>
            <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
              {c.workflowTitle}
            </h2>
            <p className="mt-4 text-ink-soft">{c.workflowBody}</p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-4 lg:gap-4">
            {c.workflowSteps.map((step, i) => (
              <article
                key={step.n}
                className="relative rounded-2xl border border-line-soft bg-panel p-6"
              >
                {i < c.workflowSteps.length - 1 && (
                  <span className="absolute bottom-0 left-1/2 z-10 grid h-8 w-8 -translate-x-1/2 translate-y-[calc(50%+1rem)] place-items-center rounded-full border-4 border-paper bg-pop font-display text-sm font-black text-pop-ink lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:translate-x-[calc(50%+0.5rem)] lg:-translate-y-1/2">
                    →
                  </span>
                )}
                <span className="font-display text-sm font-black text-pop">
                  {step.n}
                </span>
                <h3 className="font-display mt-4 text-lg font-black uppercase text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.88rem] text-ink-soft">{step.body}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>
      <section className="py-20 sm:py-24">
        <Wrap>
          <div className="grid min-w-0 gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div className="min-w-0">
              <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
                {c.builderEyebrow}
              </div>
              <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                {c.builderTitle}
              </h2>
              <p className="mt-5 text-ink-soft">{c.builderBody}</p>
              <a
                href="#/programmazione"
                className="font-display mt-7 inline-flex rounded-full border border-pop/40 bg-pop/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-pop transition-colors hover:bg-pop/20"
              >
                {c.builderCta} →
              </a>
            </div>
            <div className="min-w-0">
              <ProgramBuilderMockup />
            </div>
          </div>
        </Wrap>
      </section>
      <section className="border-y border-line-soft bg-paper-deep py-20 sm:py-24">
        <Wrap>
          <div className="grid min-w-0 gap-12 lg:grid-cols-[1.28fr_0.72fr] lg:items-center">
            <div className="order-2 min-w-0 lg:order-1">
              <AnalyserMockup />
            </div>
            <div className="order-1 min-w-0 lg:order-2">
              <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
                {c.analyserEyebrow}
              </div>
              <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                {c.analyserTitle}
              </h2>
              <p className="mt-5 text-ink-soft">{c.analyserBody}</p>
              <a
                href="#/monitoraggio"
                className="font-display mt-7 inline-flex rounded-full border border-pop/40 bg-pop/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-pop transition-colors hover:bg-pop/20"
              >
                {c.analyserCta} →
              </a>
            </div>
          </div>
        </Wrap>
      </section>
      <section className="py-20 sm:py-24">
        <Wrap>
          <div className="grid min-w-0 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
                {c.libraryEyebrow}
              </div>
              <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                {c.libraryTitle}
              </h2>
              <p className="mt-5 text-ink-soft">{c.libraryBody}</p>
            </div>
            <div className="min-w-0">
              <ExerciseLibraryMockup />
            </div>
          </div>
        </Wrap>
      </section>
      <section className="border-y border-line-soft bg-paper-deep py-20 sm:py-24">
        <Wrap>
          <div className="grid min-w-0 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="order-2 min-w-0 lg:order-1">
              <FeedbackCenterMockup />
            </div>
            <div className="order-1 lg:order-2">
              <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
                {c.feedbackEyebrow}
              </div>
              <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                {c.feedbackTitle}
              </h2>
              <p className="mt-5 text-ink-soft">{c.feedbackBody}</p>
            </div>
          </div>
        </Wrap>
      </section>
      <section className="py-20 sm:py-24">
        <Wrap>
          <div className="max-w-[720px]">
            <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
              {c.contextEyebrow}
            </div>
            <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
              {c.contextTitle}
            </h2>
            <p className="mt-4 text-ink-soft">{c.contextBody}</p>
          </div>
          <div className="mt-10">
            <CoachContextMockup />
          </div>
        </Wrap>
      </section>
      <section className="border-y border-line-soft bg-paper-deep py-20 sm:py-24">
        <Wrap>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
                {c.paletteEyebrow}
              </div>
              <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                {c.paletteTitle}
              </h2>
              <p className="mt-5 text-ink-soft">{c.paletteBody}</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-pop/25 bg-panel shadow-[0_24px_80px_-35px_rgba(242,98,42,0.65)]">
              <div className="flex items-center gap-3 border-b border-line-soft px-5 py-4">
                <span className="text-pop">⌕</span>
                <span className="flex-1 text-sm text-ink-dim">
                  {c.paletteHint}
                </span>
                <kbd className="rounded border border-line bg-paper-deep px-2 py-1 font-display text-[0.62rem] text-ink-soft">
                  ESC
                </kbd>
              </div>
              <div className="p-2">
                {c.paletteItems.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                      i === 0 ? "bg-pop/10" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold text-ink-soft">
                      {item.label}
                    </span>
                    <kbd className="rounded-md border border-line bg-paper-deep px-2.5 py-1 font-display text-[0.62rem] font-bold text-pop">
                      {item.keys}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Wrap>
      </section>
      <TopicNext current="coach" nextId="atleta" />
    </>
  )
}

function ProgrammingPage() {
  const { t, lang } = useLanguage()
  const tx = topicTranslations[lang]
  return (
    <>
      <TopicHero id="programmazione" />
      <section className="py-20">
        <Wrap>
          <ProgramBuilderMockup />
          <div className="mt-12">
            <Pillars items={tx.programming.pillars} />
          </div>
        </Wrap>
      </section>
      <section className="border-y border-line-soft bg-paper-deep py-20">
        <Wrap>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
                {t.featureHighlights.f01eyebrow}
              </div>
              <h2 className="font-display mt-3 text-3xl font-black uppercase text-ink">
                {t.featureHighlights.f01title}
              </h2>
              <p className="mt-4 text-ink-soft">
                {t.featureHighlights.f01body}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {t.featureHighlights.syntax.map((s) => (
                <div
                  key={s.code}
                  className="rounded-xl border border-line-soft bg-panel p-4"
                >
                  <code className="font-display text-sm font-bold text-pop">
                    {s.code}
                  </code>
                  <span className="mt-2 block text-[0.68rem] uppercase tracking-wide text-ink-dim">
                    {s.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>
      <section className="py-20">
        <Wrap narrow>
          <h2 className="font-display text-3xl font-black uppercase text-ink">
            {tx.programming.flowTitle}
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            {tx.programming.flowBody}
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {t.hero.flow.map((step, i) => (
              <div
                key={step.t}
                className="rounded-xl border border-line-soft bg-panel p-5"
              >
                <span className="font-display text-xs font-black text-pop">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-3 font-black uppercase text-ink">
                  {step.t}
                </h3>
                <p className="mt-1 text-sm text-ink-dim">{step.d}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>
      <TopicNext current="programmazione" />
    </>
  )
}

function MonitoringPage() {
  const { lang } = useLanguage()
  const tx = topicTranslations[lang]
  return (
    <>
      <TopicHero id="monitoraggio" />
      <section className="py-20">
        <Wrap>
          <div className="grid min-w-0 gap-8 lg:grid-cols-2">
            <CommandCenterMockup />
            <DashboardMockup />
          </div>
          <div className="mt-12 rounded-2xl border border-line-soft bg-panel p-7 sm:p-10">
            <h2 className="font-display text-2xl font-black uppercase text-ink">
              {tx.monitoring.plainTitle}
            </h2>
            <p className="mt-4 max-w-[760px] text-ink-soft">
              {tx.monitoring.plainBody}
            </p>
          </div>
        </Wrap>
      </section>
      <DecisionMaking />
      <AcwrDemo />
      <CaseStudies />
      <ScienceTrust />
      <TopicNext current="monitoraggio" />
    </>
  )
}

function AthletePage() {
  const { lang } = useLanguage()
  const tx = topicTranslations[lang]
  const a = tx.athlete
  return (
    <>
      <TopicHero id="atleta" />
      <section className="py-20 sm:py-24">
        <Wrap>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <AthleteWeekMockup />
            <div>
              <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-violet-soft">
                {a.weekEyebrow}
              </div>
              <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                {a.weekTitle}
              </h2>
              <p className="mt-5 text-ink-soft">{a.weekBody}</p>
              <div className="mt-8">
                <Pillars items={a.principles} />
              </div>
            </div>
          </div>
        </Wrap>
      </section>
      <section className="border-y border-line-soft bg-paper-deep py-20 sm:py-24">
        <Wrap>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-violet-soft">
                {a.realityEyebrow}
              </div>
              <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                {a.realityTitle}
              </h2>
              <p className="mt-5 text-ink-soft">{a.realityBody}</p>
            </div>
            <div className="rounded-2xl border border-violet/25 bg-panel p-5">
              <div className="flex items-center justify-between border-b border-line-soft pb-4">
                <div>
                  <span className="font-display text-xs font-black text-ink">
                    Back Squat · Serie 2/3
                  </span>
                  <span className="mt-1 block text-[0.68rem] text-ink-dim">
                    Prescritto 3 reps · 100 kg
                  </span>
                </div>
                <span className="rounded-full bg-violet/15 px-3 py-1 text-[0.6rem] font-bold uppercase text-violet-soft">
                  In corso
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  ["Ripetizioni", "3"],
                  ["Carico reale", "102,5 kg"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-paper-deep p-4">
                    <span className="text-[0.62rem] uppercase text-ink-dim">
                      {label}
                    </span>
                    <strong className="font-display mt-2 block text-2xl text-ink">
                      {value}
                    </strong>
                    <div className="mt-3 flex gap-2">
                      <button
                        type="button"
                        className="h-8 flex-1 rounded bg-panel text-ink-soft"
                      >
                        −
                      </button>
                      <button
                        type="button"
                        className="h-8 flex-1 rounded bg-violet text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-dashed border-violet/30 p-4 text-sm text-ink-dim">
                Nota per il coach: “Più fluido del previsto.”
              </div>
            </div>
          </div>
        </Wrap>
      </section>
      <section className="py-20 sm:py-24">
        <Wrap>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-violet-soft">
                {a.progressEyebrow}
              </div>
              <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                {a.progressTitle}
              </h2>
              <p className="mt-5 text-ink-soft">{a.progressBody}</p>
            </div>
            <div className="order-1 lg:order-2">
              <AthleteProgressMockup />
            </div>
          </div>
        </Wrap>
      </section>
      <section className="border-y border-line-soft bg-paper-deep py-20 sm:py-24">
        <Wrap>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <WellnessMockup />
            <div>
              <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-violet-soft">
                {a.wellnessEyebrow}
              </div>
              <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                {a.wellnessTitle}
              </h2>
              <p className="mt-5 text-ink-soft">{a.wellnessBody}</p>
            </div>
          </div>
        </Wrap>
      </section>
      <TopicNext current="atleta" />
    </>
  )
}

function EngineeringPage() {
  const { lang } = useLanguage()
  const tx = topicTranslations[lang]
  const e = tx.engineering
  return (
    <>
      <TopicHero id="engineering" />
      <section className="py-20">
        <Wrap>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-display text-3xl font-black uppercase leading-tight text-ink">
                {e.stackTitle}
              </h2>
              <p className="mt-5 text-ink-soft">{e.stackBody}</p>
            </div>
            <div className="rounded-2xl border border-line-soft bg-panel p-6 font-mono text-sm leading-7 text-ink-dim">
              <div>
                <span className="text-ok">browser</span> / React 19 + TypeScript
              </div>
              <div className="pl-5">├─ coach workspace</div>
              <div className="pl-5">├─ athlete PWA</div>
              <div className="pl-5">└─ domain engine</div>
              <div>
                <span className="text-violet">data</span> / Supabase +
                PostgreSQL
              </div>
              <div className="pl-5">├─ auth + row level security</div>
              <div className="pl-5">├─ transactional RPCs</div>
              <div className="pl-5">└─ versioned programs</div>
              <div>
                <span className="text-ok">verify</span> / unit + RLS + E2E
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {e.layers.map((layer) => (
              <article
                key={layer.n}
                className="rounded-2xl border border-line-soft bg-panel p-6"
              >
                <span className="font-display text-xs font-black text-ok">
                  {layer.n}
                </span>
                <h3 className="font-display mt-4 text-lg font-black uppercase text-ink">
                  {layer.title}
                </h3>
                <p className="mt-3 text-[0.88rem] text-ink-soft">
                  {layer.body}
                </p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>
      <section className="border-y border-line-soft bg-paper-deep py-20 sm:py-24">
        <Wrap>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-violet-soft">
                {e.securityEyebrow}
              </div>
              <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
                {e.securityTitle}
              </h2>
              <p className="mt-5 text-ink-soft">{e.securityBody}</p>
            </div>
            <div className="relative grid gap-6 sm:grid-cols-4 sm:gap-3">
              {e.securityFlow.map((step, i) => (
                <div
                  key={step}
                  className="relative rounded-xl border border-line-soft bg-panel p-4"
                >
                  <span
                    className={`font-display text-[0.6rem] font-black ${
                      i === e.securityFlow.length - 1
                        ? "text-ok"
                        : "text-violet-soft"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <strong className="font-display mt-4 block text-[0.72rem] font-black uppercase text-ink">
                    {step}
                  </strong>
                  {i < e.securityFlow.length - 1 && (
                    <span className="absolute -bottom-5 left-1/2 z-10 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border border-line bg-paper text-xs text-ink-dim sm:-right-5 sm:bottom-auto sm:left-auto sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>
      <section className="py-20 sm:py-24">
        <Wrap>
          <div className="max-w-[760px]">
            <div className="font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ok">
              {e.verificationEyebrow}
            </div>
            <h2 className="font-display mt-3 text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
              {e.verificationTitle}
            </h2>
            <p className="mt-5 text-ink-soft">{e.verificationBody}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {e.verificationItems.map((item, i) => (
              <article
                key={item.label}
                className="rounded-2xl border border-line-soft bg-panel p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-black uppercase text-ok">
                    {item.label}
                  </span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      i === 0 ? "bg-pop" : i === 1 ? "bg-violet" : "bg-ok"
                    }`}
                  />
                </div>
                <h3 className="font-display mt-5 text-lg font-black uppercase text-ink">
                  {item.value}
                </h3>
                <p className="mt-3 text-[0.88rem] text-ink-soft">{item.note}</p>
              </article>
            ))}
          </div>
        </Wrap>
      </section>
      <section className="border-y border-line-soft bg-paper-deep py-24">
        <Wrap narrow>
          <p className="font-display text-3xl font-black leading-tight text-ink sm:text-4xl">
            {e.principle}
          </p>
        </Wrap>
      </section>
    </>
  )
}

export default function TopicPage({ id }: { id: TopicId }) {
  if (id === "coach") return <CoachPage />
  if (id === "programmazione") return <ProgrammingPage />
  if (id === "monitoraggio") return <MonitoringPage />
  if (id === "atleta") return <AthletePage />
  return <EngineeringPage />
}
