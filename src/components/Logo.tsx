type LogoMarkProps = {
  size?: number
  className?: string
}

export function LogoMark({ size = 32, className = '' }: LogoMarkProps) {
  const id = `moxie-wave-${size}`
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="12" fill="#151313" />
      <rect
        x="0.6"
        y="0.6"
        width="46.8"
        height="46.8"
        rx="11.4"
        stroke="#ffffff"
        strokeOpacity="0.08"
      />
      <defs>
        <linearGradient id={id} x1="6" y1="24" x2="42" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F2622A" />
          <stop offset="0.5" stopColor="#C1449C" />
          <stop offset="1" stopColor="#8B3BFF" />
        </linearGradient>
      </defs>
      <path
        d="M6 25.5 L14 25.5 L18 15 L23 33 L28 20.5 L31.5 25.5 L38 25.5"
        stroke={`url(#${id})`}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="39.5" cy="25.5" r="3.4" fill="#F2622A" />
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
            Elite Performance
          </span>
        )}
      </div>
    </div>
  )
}
