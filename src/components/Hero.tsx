import { Wrap } from "./ui"
import { WaveIcon } from "../imports/WaveIcon"
import ProgramBuilderMockup from "./mockups/ProgramBuilderMockup"
import { useLanguage } from "../i18n/context"
import { topicTranslations } from "../i18n/topicTranslations"

export default function Hero() {
  const { t, lang } = useLanguage()
  const h = t.hero
  const tx = topicTranslations[lang]

  return (
    <header
      id="prodotto"
      className="relative overflow-hidden pt-16 pb-10 sm:pt-24"
    >
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(242,98,42,0.35), rgba(193,68,156,0.18), transparent)",
        }}
      />
      <Wrap className="relative">
        <div className="mx-auto max-w-[820px] text-center">
          <WaveIcon height={65} className="mx-auto mb-7" />
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-wide text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-pop" />
            {h.badge}
          </span>
          <h1 className="font-display mt-6 text-4xl font-black uppercase leading-[1.02] text-ink sm:text-6xl">
            {h.h1Pre}{" "}
            <span className="bg-gradient-to-r from-grad1 via-grad2 to-grad3 bg-clip-text text-transparent">
              {h.h1Grad}
            </span>{" "}
            {h.h1Post}
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-[1.05rem] text-ink-soft">
            {h.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#esplora"
              className="font-display inline-flex rounded-full bg-pop px-6 py-3 text-sm font-black uppercase tracking-wide text-pop-ink transition-transform hover:-translate-y-0.5"
            >
              {tx.common.explore}
            </a>
            <a
              href="https://app.usemoxie.workers.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display inline-flex rounded-full border border-line bg-panel px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink-soft transition-colors hover:border-pop/50 hover:text-ink"
            >
              {tx.common.reserved}
            </a>
          </div>
          <div className="mx-auto mt-5 max-w-[560px] text-[0.75rem] text-ink-dim">
            <span className="font-display font-bold uppercase tracking-wide text-pop">
              {tx.common.beta}
            </span>
            <span className="mx-2 text-line">·</span>
            {tx.common.betaDetail}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[560px] flex-col gap-2">
          {h.flow.map((f, i) => (
            <div key={f.t} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span
                  className="grid h-9 w-9 place-items-center rounded-lg font-display text-sm font-black text-pop-ink"
                  style={{
                    background: `linear-gradient(135deg, ${["#f2622a", "#c1449c", "#8b3bff"][i]}, ${["#c1449c", "#8b3bff", "#f2622a"][i]})`,
                  }}
                >
                  {i + 1}
                </span>
                {i < h.flow.length - 1 && (
                  <span className="my-1 h-4 w-px bg-line" />
                )}
              </div>
              <div className="flex-1 rounded-xl border border-line-soft bg-panel px-4 py-2.5">
                <div className="font-display text-sm font-bold text-ink">
                  {f.t}
                </div>
                <div className="text-[0.78rem] text-ink-dim">{f.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-[880px]">
          <ProgramBuilderMockup />
        </div>
      </Wrap>
    </header>
  )
}
