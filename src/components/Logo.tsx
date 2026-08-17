import { useId } from 'react'

type LogoMarkProps = {
  size?: number
  className?: string
}

// Forma icona del marchio: stessa geometria di public/favicon.svg e della
// variante iconOnly nell'app (viewBox 512, onda in translate(76,158)).
// Il tracciato dell'onda è quello canonico — vedi docs/brand/BRAND.md in MoxieApp.
export function LogoMark({ size = 32, className = '' }: LogoMarkProps) {
  const waveId = useId()
  const bgId = useId()
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={waveId} x1="0" y1="0" x2="1" y2="0.15">
          <stop offset="0%" stopColor="#F2622A" />
          <stop offset="52%" stopColor="#C1449C" />
          <stop offset="100%" stopColor="#8B3BFF" />
        </linearGradient>
        <radialGradient id={bgId} cx="30%" cy="20%" r="90%">
          <stop offset="0%" stopColor="#1C1917" />
          <stop offset="100%" stopColor="#131110" />
        </radialGradient>
      </defs>
      <rect width="512" height="512" rx="112" fill={`url(#${bgId})`} />
      <g transform="translate(76,158)">
        <path
          d="M12,150 C42,150 50,32 82,32 C114,32 118,158 150,158 C182,158 186,74 218,74 C250,74 244,166 276,166 C308,166 302,26 338,26"
          stroke={`url(#${waveId})`}
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="338" cy="26" r="19" fill="#F2622A" />
      </g>
    </svg>
  )
}

type WordmarkProps = {
  tagline?: boolean
  className?: string
}

export function Wordmark({ tagline = false, className = '' }: WordmarkProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={30} />
      <div className="leading-none">
        <span className="font-display text-[1rem] font-black uppercase tracking-tight text-ink">
          Moxie
        </span>
        {tagline && (
          <span className="mt-0.5 block font-display text-[0.5rem] font-bold uppercase tracking-[0.28em] text-ink-dim">
            Coaching OS
          </span>
        )}
      </div>
    </div>
  )
}
