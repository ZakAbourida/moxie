import { useEffect, useState } from "react"
import { Wordmark } from "./Logo"
import { useLanguage } from "../i18n/context"
import { topicTranslations } from "../i18n/topicTranslations"

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, lang, setLang } = useLanguage()
  const tx = topicTranslations[lang]
  const coach = tx.topics.find((topic) => topic.id === "coach")!
  const athlete = tx.topics.find((topic) => topic.id === "atleta")!
  const engineering = tx.topics.find((topic) => topic.id === "engineering")!
  const primaryLinks = [
    { id: coach.id, title: coach.title, href: "#/coach" },
    { id: athlete.id, title: athlete.title, href: "#/atleta" },
    { id: engineering.id, title: engineering.title, href: "#/engineering" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-line backdrop-blur-xl transition-all ${
        scrolled ? "bg-paper/92 py-2.5" : "bg-paper/70 py-4"
      }`}
    >
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-5 px-5 sm:px-8">
        <a
          href="#/"
          className="group"
          aria-label="Moxie home"
          onClick={() => setMobileOpen(false)}
        >
          <Wordmark />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {primaryLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="font-display text-[0.82rem] font-bold text-ink-faint transition-colors hover:text-ink"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://app.usemoxie.workers.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-pop/40 bg-pop/10 px-3 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-wide text-pop transition-colors hover:border-pop hover:bg-pop/20 sm:flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pop" />
            {tx.common.reserved}
          </a>

          <button
            onClick={() => setLang(lang === "it" ? "en" : "it")}
            className="rounded-full border border-line bg-panel px-3 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-wide text-ink-soft transition-colors hover:border-pop hover:text-ink"
            aria-label="Switch language"
          >
            {t.nav.langLabel}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-8 w-8 place-items-center rounded-full border border-line bg-panel text-ink-soft lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="text-lg leading-none">
              {mobileOpen ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-line-soft bg-paper/98 px-5 pb-5 pt-4 lg:hidden">
          <div className="mx-auto grid max-w-[1160px] gap-2">
            {primaryLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-line-soft bg-panel px-4 py-3 font-display text-sm font-bold text-ink-soft"
              >
                {link.title}
              </a>
            ))}
            <a
              href="https://app.usemoxie.workers.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-xl bg-pop px-4 py-3 text-center font-display text-xs font-black uppercase tracking-wide text-pop-ink"
            >
              {tx.common.reserved}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
