import { Wrap } from "./ui"
import { useLanguage } from "../i18n/context"
import { topicTranslations } from "../i18n/topicTranslations"
import DashboardMockup from "./mockups/DashboardMockup"
import { AthleteWeekMockup } from "./mockups/AthletePortalMockups"

function CoachPreview() {
  return (
    <div
      className="relative h-[350px] overflow-hidden rounded-2xl border border-pop/15 bg-paper-deep sm:h-[390px]"
      aria-hidden="true"
    >
      <div className="absolute inset-x-4 top-5 sm:inset-x-6">
        <DashboardMockup />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper-deep via-paper-deep/85 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 sm:left-6 sm:right-6">
        {["Roster", "Program Builder", "Analyser"].map((label, i) => (
          <span
            key={label}
            className={`rounded-lg border px-2 py-2 text-center font-display text-[0.52rem] font-bold uppercase tracking-wide backdrop-blur ${
              i === 0
                ? "border-pop/40 bg-pop/15 text-pop"
                : "border-line bg-paper/85 text-ink-soft"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

function EngineeringPreview() {
  return (
    <div
      className="relative flex min-h-[310px] items-center overflow-hidden rounded-2xl border border-line-soft bg-paper-deep p-7 sm:p-9"
      aria-hidden="true"
    >
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet/10 blur-3xl" />
      <div className="w-full font-mono text-[0.78rem] leading-8 text-ink-dim sm:text-[0.86rem]">
        <div>
          <span className="mr-5 select-none text-ink-dim/40">01</span>
          <span className="text-pop">const</span> moxie = {"{"}
        </div>
        <div>
          <span className="mr-5 select-none text-ink-dim/40">02</span>
          &nbsp;&nbsp;product: <span className="text-ok">'real'</span>,
        </div>
        <div>
          <span className="mr-5 select-none text-ink-dim/40">03</span>
          &nbsp;&nbsp;users: <span className="text-violet-soft">20</span>,
        </div>
        <div>
          <span className="mr-5 select-none text-ink-dim/40">04</span>
          &nbsp;&nbsp;roles: [<span className="text-pop">'coach'</span>,{" "}
          <span className="text-violet-soft">'athlete'</span>],
        </div>
        <div>
          <span className="mr-5 select-none text-ink-dim/40">05</span>
          &nbsp;&nbsp;tested: <span className="text-ok">true</span>
        </div>
        <div>
          <span className="mr-5 select-none text-ink-dim/40">06</span>
          {"}"}
        </div>
      </div>
    </div>
  )
}

export function TopicIndex() {
  const { lang } = useLanguage()
  const tx = topicTranslations[lang]
  const coach = tx.topics.find((topic) => topic.id === "coach")!
  const programming = tx.topics.find((topic) => topic.id === "programmazione")!
  const monitoring = tx.topics.find((topic) => topic.id === "monitoraggio")!
  const athlete = tx.topics.find((topic) => topic.id === "atleta")!
  const engineering = tx.topics.find((topic) => topic.id === "engineering")!

  return (
    <section id="esplora" className="py-20 sm:py-24">
      <Wrap>
        <div className="max-w-[720px]">
          <div className="font-display mb-4 text-[0.74rem] font-bold uppercase tracking-[0.14em] text-pop">
            {tx.home.topicsEyebrow}
          </div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-ink sm:text-5xl">
            {tx.home.topicsTitle}
          </h2>
          <p className="mt-5 max-w-[620px] text-ink-soft">
            {tx.home.topicsBody}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-2xl border border-pop/20 bg-panel p-6 md:col-span-2 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-grad1 via-grad2 to-grad3 opacity-80" />
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs font-black text-pop">
                    {coach.n}
                  </span>
                  <span className="font-display text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-dim">
                    {coach.eyebrow}
                  </span>
                </div>
                <a href="#/coach" className="group">
                  <h3 className="font-display mt-3 text-3xl font-black uppercase text-ink sm:text-4xl">
                    {coach.title}
                  </h3>
                  <p className="mt-3 max-w-[520px] text-ink-soft">
                    {coach.short}
                  </p>
                  <span className="font-display mt-6 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-pop">
                    {tx.common.discover}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </div>
              <div>
                <CoachPreview />
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <a
                    href="#/programmazione"
                    className="group rounded-xl border border-line-soft bg-paper-deep/80 px-4 py-3 transition-colors hover:border-pop/40"
                  >
                    <span className="font-display text-[0.68rem] font-black uppercase text-ink">
                      {programming.title}
                    </span>
                    <span className="ml-2 text-pop transition-transform group-hover:translate-x-1">
                      →
                    </span>
                    <span className="mt-1 block text-[0.62rem] text-ink-dim">
                      Program Builder V3
                    </span>
                  </a>
                  <a
                    href="#/monitoraggio"
                    className="group rounded-xl border border-line-soft bg-paper-deep/80 px-4 py-3 transition-colors hover:border-pop/40"
                  >
                    <span className="font-display text-[0.68rem] font-black uppercase text-ink">
                      Analyser Center
                    </span>
                    <span className="ml-2 text-pop transition-transform group-hover:translate-x-1">
                      →
                    </span>
                    <span className="mt-1 block text-[0.62rem] text-ink-dim">
                      {monitoring.title}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <a
            href="#/atleta"
            className="group relative overflow-hidden rounded-2xl border border-violet/20 bg-panel p-6 transition-all hover:-translate-y-1 hover:border-violet/35 sm:p-7"
          >
            <div className="relative h-[310px] overflow-hidden rounded-2xl border border-violet/20 bg-[radial-gradient(circle_at_50%_20%,rgba(193,68,156,0.25),transparent_55%),var(--color-paper-deep)]">
              <div className="absolute inset-x-0 top-5 mx-auto w-[270px] origin-top scale-[0.77]">
                <AthleteWeekMockup />
              </div>
              <span className="absolute right-4 top-4 rounded-full border border-violet/30 bg-paper/80 px-3 py-1 font-display text-[0.55rem] font-bold uppercase tracking-wide text-violet-soft backdrop-blur">
                Week · Progress · Wellness
              </span>
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-3">
                <span className="font-display text-xs font-black text-violet-soft">
                  {athlete.n}
                </span>
                <span className="font-display text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-dim">
                  {athlete.eyebrow}
                </span>
              </div>
              <h3 className="font-display mt-2 text-2xl font-black uppercase text-ink">
                {athlete.title}
              </h3>
              <p className="mt-2 text-[0.9rem] text-ink-soft">
                {athlete.short}
              </p>
              <span className="font-display mt-5 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-violet-soft">
                {tx.common.discover}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </a>

          <a
            href="#/engineering"
            className="group relative overflow-hidden rounded-2xl border border-line-soft bg-panel p-6 transition-all hover:-translate-y-1 hover:border-violet/30 sm:p-7"
          >
            <EngineeringPreview />
            <div className="mt-8">
              <div className="flex items-center gap-3">
                <span className="font-display text-xs font-black text-pop">
                  {engineering.n}
                </span>
                <span className="font-display text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-dim">
                  {engineering.eyebrow}
                </span>
              </div>
              <h3 className="font-display mt-2 text-2xl font-black uppercase text-ink">
                {engineering.title}
              </h3>
              <p className="mt-2 text-[0.9rem] text-ink-soft">
                {engineering.short}
              </p>
              <span className="font-display mt-5 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-pop">
                {tx.common.discover}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </a>
        </div>
      </Wrap>
    </section>
  )
}

export function ProjectStory() {
  const { lang } = useLanguage()
  const tx = topicTranslations[lang]
  return (
    <section className="border-y border-line-soft bg-paper-deep py-20">
      <Wrap>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <div>
            <div className="font-display mb-4 text-[0.74rem] font-bold uppercase tracking-[0.14em] text-pop">
              {tx.home.projectEyebrow}
            </div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
              {tx.home.projectTitle}
            </h2>
            <p className="mt-5 text-ink-soft">{tx.home.projectBody}</p>
            <a
              href="#/engineering"
              className="font-display mt-7 inline-flex items-center gap-2 rounded-full border border-pop/40 bg-pop/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-pop transition-colors hover:bg-pop/20"
            >
              {tx.home.engineeringCta} →
            </a>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft sm:grid-cols-3">
            {tx.home.projectStats.map((stat) => (
              <div key={stat.label} className="bg-panel p-6">
                <div className="font-display text-4xl font-black text-ink">
                  {stat.value}
                </div>
                <div className="mt-2 text-[0.78rem] uppercase tracking-wide text-ink-dim">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  )
}
