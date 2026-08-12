import { useEffect, useState } from 'react'
import { Wordmark } from './Logo'
import { Badge } from './ui'

const LINKS = [
  { label: 'Prodotto', href: '#prodotto' },
  { label: 'Feature', href: '#feature' },
  { label: 'Casi reali', href: '#casi' },
  { label: 'Ruoli', href: '#ruoli' },
  { label: 'Perché Moxie', href: '#perche' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

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
          {LINKS.map((l) => (
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
          <Badge className="hidden sm:inline-flex">Coach · Atleta</Badge>
        </div>
      </div>
    </nav>
  )
}
