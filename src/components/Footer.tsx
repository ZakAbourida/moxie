import { Wrap } from './ui'
import { Wordmark } from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-line-soft py-12">
      <Wrap>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Wordmark tagline />
          <p className="max-w-[380px] text-[0.85rem] text-ink-dim">
            Un coaching OS per atleti di performance. Fatto su misura per come lavora davvero
            un coach di forza e atletica — non un'app fitness da app store.
          </p>
        </div>

        <div className="mt-8 border-t border-line-soft pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-display text-sm font-bold text-ink-soft">Zakaria Abourida</div>
            <a
              href="mailto:abourida63@icloud.com"
              className="text-[0.78rem] text-ink-dim transition-colors hover:text-ink-soft"
            >
              abourida63@icloud.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ZakAbourida"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[0.72rem] font-bold uppercase tracking-[0.1em] text-ink-dim transition-colors hover:text-ink-soft"
            >
              GitHub
            </a>
            <span className="h-3 w-px bg-line-soft" />
            <a
              href="https://www.instagram.com/zakoffthewall/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[0.72rem] font-bold uppercase tracking-[0.1em] text-ink-dim transition-colors hover:text-ink-soft"
            >
              Instagram
            </a>
            <span className="h-3 w-px bg-line-soft" />
            <span className="text-[0.72rem] text-ink-dim">© {new Date().getFullYear()} Moxie</span>
          </div>
        </div>
      </Wrap>
    </footer>
  )
}
