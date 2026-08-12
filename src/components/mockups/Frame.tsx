import type { ReactNode } from 'react'

export function BrowserFrame({
  title = 'moxie · program builder',
  children,
  className = '',
}: {
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-paper-raise shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line-soft bg-panel px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-alarm" />
          <span className="h-3 w-3 rounded-full bg-warn" />
          <span className="h-3 w-3 rounded-full bg-ok" />
        </div>
        <span className="truncate font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-dim">
          {title}
        </span>
      </div>
      <div className="bg-paper-deep">{children}</div>
    </div>
  )
}

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[310px] rounded-[2.4rem] border border-line bg-paper-raise p-2.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
      <div className="overflow-hidden rounded-[2rem] border border-line-soft bg-paper-deep">
        <div className="flex items-center justify-center py-2">
          <span className="h-1.5 w-16 rounded-full bg-line" />
        </div>
        {children}
      </div>
    </div>
  )
}
