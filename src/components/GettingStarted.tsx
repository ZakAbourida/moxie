import { Wrap } from './ui'
import { useLanguage } from '../i18n/context'

export default function GettingStarted() {
  const { t } = useLanguage()
  const gs = t.gettingStarted

  return (
    <section className="py-16">
      <Wrap>
        <div className="rounded-2xl border border-line-soft bg-paper-deep px-8 py-12">
          <div className="mb-8 text-center">
            <div className="font-display mb-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
              {gs.eyebrow}
            </div>
            <h2 className="font-display text-2xl font-black uppercase text-ink sm:text-3xl">
              {gs.h2}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line-soft">
            {gs.steps.map((step) => (
              <div key={step.n} className="flex flex-col items-center text-center sm:px-8">
                <div
                  className="font-display mb-3 text-4xl font-black"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-grad1), var(--color-grad3))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {step.n}
                </div>
                <div className="font-display mb-2 text-base font-black uppercase text-ink">
                  {step.label}
                </div>
                <p className="text-[0.82rem] text-ink-dim">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  )
}
