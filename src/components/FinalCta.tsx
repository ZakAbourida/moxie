import { Wrap } from './ui'
import { useLanguage } from '../i18n/context'

export default function FinalCta() {
  const { t } = useLanguage()
  const cta = t.finalCta

  return (
    <section className="py-20">
      <Wrap>
        <div className="relative overflow-hidden rounded-3xl bg-pop px-6 py-16 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              background:
                'radial-gradient(closest-side at 80% 20%, #8b3bff, transparent), radial-gradient(closest-side at 15% 90%, #c1449c, transparent)',
            }}
          />
          <div className="relative">
            <h2 className="font-display mx-auto max-w-[620px] text-3xl font-black uppercase leading-tight text-pop-ink sm:text-4xl">
              {cta.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[1.05rem] font-medium text-pop-ink/80">
              {cta.body}
            </p>
            <div className="mt-8 flex flex-col items-center gap-2">
              <a
                href="https://app.usemoxie.workers.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display inline-flex items-center gap-2 rounded-full bg-pop-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-pop transition-opacity hover:opacity-90"
              >
                {cta.ctaButton}
              </a>
              <span className="font-display text-[0.7rem] font-bold uppercase tracking-wide text-pop-ink/60">
                {cta.betaNote}
              </span>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
