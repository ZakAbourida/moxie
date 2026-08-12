import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center font-display text-[0.74rem] font-bold uppercase tracking-[0.14em] text-pop">
      <span className="mr-2.5 h-3 w-3 flex-none rounded bg-gradient-to-br from-grad1 to-grad3" />
      {children}
    </div>
  )
}

export function Wrap({
  children,
  narrow = false,
  className = '',
}: {
  children: ReactNode
  narrow?: boolean
  className?: string
}) {
  return (
    <div
      className={`mx-auto px-5 sm:px-8 ${narrow ? 'max-w-[760px]' : 'max-w-[1120px]'} ${className}`}
    >
      {children}
    </div>
  )
}
