import { Wrap } from './ui'

export default function FinalCta() {
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
              Costruito per coach che ragionano sui dati
            </h2>
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
