import { Wrap } from "./ui"
import { useLanguage } from "../i18n/context"

const COLORS = [
  "var(--color-grad1)",
  "var(--color-violet)",
  "var(--color-grad2)",
  "var(--color-grad3)",
]

export default function CoreLoop() {
  const { t } = useLanguage()
  const cl = t.coreLoop

  return (
    <section className="py-20">
      <Wrap>
        <div className="mb-12 text-center">
          <div className="font-display mb-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-pop">
            {cl.eyebrow}
          </div>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-ink sm:text-4xl">
            {cl.h2}
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-ink-soft">
            {cl.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 lg:gap-4">
          {cl.steps.map((step, i) => (
            <div
              key={step.n}
              className="relative flex flex-col gap-4 rounded-2xl border border-line-soft bg-paper-deep p-7"
            >
              {i < cl.steps.length - 1 && (
                <div className="absolute bottom-0 left-1/2 z-10 translate-x-[-50%] translate-y-[calc(50%+1rem)] lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:translate-x-[calc(50%+0.5rem)] lg:translate-y-[-50%]">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-paper shadow-[0_0_16px_rgba(255,139,90,0.2)]"
                    style={{ background: COLORS[i] }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      className="rotate-90 lg:rotate-0"
                    >
                      <path
                        d="M2 6.5h8M7 3l3.5 3.5L7 10"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
              <div
                className="font-display text-[0.78rem] font-black uppercase tracking-[0.18em]"
                style={{ color: COLORS[i] }}
              >
                {step.n}
              </div>
              <div className="font-display text-2xl font-black uppercase text-ink">
                {step.label}
              </div>
              <p className="text-[0.85rem] text-ink-dim leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-ink-faint">
          <span className="font-display text-[0.76rem] font-bold uppercase tracking-[0.12em]">
            {cl.repeat}
          </span>
          <svg
            width="26"
            height="16"
            viewBox="0 0 26 16"
            fill="none"
            className="text-pop"
          >
            <path
              d="M1 8h20M17 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-[0.76rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
            {cl.repeatTo}
          </span>
        </div>
      </Wrap>
    </section>
  )
}
