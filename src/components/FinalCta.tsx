import { SectionHeading, Wrap } from './ui'

export default function FinalCta() {
  return (
    <section className="py-20">
      <Wrap>
        <div className="relative overflow-hidden rounded-3xl bg-pop px-6 py-16 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              background:
                'radial-gradient(closest-side at 80% 20%, var(--color-grad3), transparent), radial-gradient(closest-side at 15% 90%, var(--color-grad2), transparent)',
            }}
          />
          <div className="relative">
            <SectionHeading className="mx-auto max-w-[620px]" onDark>
              Costruito per coach che ragionano sui dati
            </SectionHeading>
            <p className="mx-auto mt-4 max-w-[520px] text-[1.05rem] font-medium text-pop-ink/80">
              Niente app generiche, niente fogli di calcolo sparsi. Moxie è uno strumento
              professionale fatto per chi allena ad alto livello — e vuole capire davvero
              cosa succede ai propri atleti.
            </p>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
