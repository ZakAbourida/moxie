import type { ReactNode } from 'react'

export function GradientDot({ className = 'h-3 w-3' }: { className?: string }) {
  return <span className={`flex-none rounded bg-gradient-to-br from-grad1 to-grad3 ${className}`} />
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center font-display text-[0.74rem] font-bold uppercase tracking-[0.14em] text-pop">
      <GradientDot className="mr-2.5 h-3 w-3" />
      {children}
    </div>
  )
}

export function SectionHeading({
  children,
  className = 'max-w-[620px]',
  onDark = false,
}: {
  children: ReactNode
  className?: string
  onDark?: boolean
}) {
  return (
    <h2
      className={`font-display text-3xl font-black uppercase leading-tight sm:text-4xl ${
        onDark ? 'text-pop-ink' : 'text-ink'
      } ${className}`}
    >
      {children}
    </h2>
  )
}

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-wide text-ink-soft ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-pop" />
      {children}
    </span>
  )
}

export function Card({
  children,
  className = '',
  padding = 'p-6 sm:p-8',
}: {
  children: ReactNode
  className?: string
  padding?: string
}) {
  return (
    <div className={`rounded-2xl border border-line-soft bg-panel ${padding} ${className}`}>
      {children}
    </div>
  )
}

const WRAP_SIZE = {
  sm: 'max-w-[760px]',
  md: 'max-w-[880px]',
  lg: 'max-w-[1120px]',
} as const

export function Wrap({
  children,
  narrow = false,
  size,
  className = '',
}: {
  children: ReactNode
  narrow?: boolean
  size?: keyof typeof WRAP_SIZE
  className?: string
}) {
  const width = WRAP_SIZE[size ?? (narrow ? 'sm' : 'lg')]
  return (
    <div className={`mx-auto px-5 sm:px-8 ${width} ${className}`}>
      {children}
    </div>
  )
}
