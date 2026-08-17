import { Wrap } from "./ui"
import { useLanguage } from "../i18n/context"
import { topicTranslations } from "../i18n/topicTranslations"

export default function FinalCta() {
  const { t, lang } = useLanguage()
  const cta = t.finalCta
  const tx = topicTranslations[lang]

  return (
    <section className="py-20">
      <Wrap>
        <div className="relative overflow-hidden rounded-3xl bg-pop px-6 py-16 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              background:
                "radial-gradient(closest-side at 80% 20%, #8b3bff, transparent), radial-gradient(closest-side at 15% 90%, #c1449c, transparent)",
            }}
          />
          <div className="relative">
            <h2 className="font-display mx-auto max-w-[620px] text-3xl font-black uppercase leading-tight text-pop-ink sm:text-4xl">
              {cta.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[1.05rem] font-medium text-pop-ink/80">
              {cta.body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#/engineering"
                className="font-display inline-flex items-center gap-2 rounded-full bg-pop-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-pop transition-opacity hover:opacity-90"
              >
                {tx.home.engineeringCta}
              </a>
              <a
                href="https://app.usemoxie.workers.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display inline-flex items-center gap-2 rounded-full border border-pop-ink/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-pop-ink transition-colors hover:bg-pop-ink/10"
              >
                {tx.common.reserved}
              </a>
            </div>
            <span className="font-display mt-4 block text-[0.7rem] font-bold uppercase tracking-wide text-pop-ink/60">
              {tx.common.status}
            </span>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
