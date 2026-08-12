import type { ReactNode } from 'react'
import { Wrap } from './ui'
import ProgramBuilderMockup from './mockups/ProgramBuilderMockup'
import CommandCenterMockup from './mockups/CommandCenterMockup'
import DashboardMockup from './mockups/DashboardMockup'
import WellnessMockup from './mockups/WellnessMockup'
import { useLanguage } from '../i18n/context'

const MOCKUPS: ReactNode[] = [
  <ProgramBuilderMockup />,
  <CommandCenterMockup />,
  <DashboardMockup />,
  <WellnessMockup />,
]

export default function FeatureRows() {
  const { t } = useLanguage()

  return (
    <section className="py-20">
      <Wrap>
        <div className="space-y-24">
          {t.featureRows.map((row, i) => {
            const flip = i % 2 === 1
            return (
              <div key={row.title} className="grid items-center gap-10 lg:grid-cols-2">
                <div className={flip ? 'lg:order-2' : ''}>
                  <div className="mb-3 flex items-center font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
                    <span className="mr-2.5 h-3 w-3 rounded bg-gradient-to-br from-grad1 to-grad3" />
                    {row.eyebrow}
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase leading-tight text-ink sm:text-3xl">
                    {row.title}
                  </h3>
                  <p className="mt-4 text-ink-soft">{row.body}</p>
                  {row.quote && (
                    <p className="mt-5 border-l-2 border-pop pl-4 text-[0.95rem] italic text-ink-dim">
                      {row.quote}
                    </p>
                  )}
                </div>
                <div className={flip ? 'lg:order-1' : ''}>{MOCKUPS[i]}</div>
              </div>
            )
          })}
        </div>
      </Wrap>
    </section>
  )
}
