import { useEffect, useState } from 'react'
import { Wordmark } from './Logo'
import { useLanguage } from '../i18n/context'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { t, lang, setLang } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-line backdrop-blur-xl transition-all ${
        scrolled ? 'bg-paper/92 py-2.5' : 'bg-paper/70 py-4'
      }`}
    >
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-5 px-5 sm:px-8">
        <a href="#top" className="group">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-[0.82rem] font-bold text-ink-faint transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-line bg-panel px-3 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-wide text-ink-soft sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-pop" />
            {t.nav.badge}
          </span>

          <button
            onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
            className="rounded-full border border-line bg-panel px-3 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-wide text-ink-soft transition-colors hover:border-pop hover:text-ink"
            aria-label="Switch language"
          >
            {t.nav.langLabel}
          </button>
        </div>
      </div>
    </nav>
  )
}
