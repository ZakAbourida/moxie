const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/></filter><rect width='256' height='256' filter='url(#n)' opacity='1'/></svg>`
const GRAIN_URL = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`

type Blob = {
  color: string
  size: string
  position: { top?: string; bottom?: string; left?: string; right?: string }
  animation: string
  duration: string
}

const BLOBS: Blob[] = [
  {
    color: 'rgba(242,98,42,0.42)', // orange, top-left
    size: '80vw',
    position: { top: '-24vw', left: '-20vw' },
    animation: 'aurora-drift-a',
    duration: '38s',
  },
  {
    color: 'rgba(193,68,156,0.36)', // magenta, right
    size: '65vw',
    position: { top: '25vh', right: '-18vw' },
    animation: 'aurora-drift-b',
    duration: '28s',
  },
  {
    color: 'rgba(139,59,255,0.32)', // violet, bottom
    size: '60vw',
    position: { bottom: '-8vw', left: '15vw' },
    animation: 'aurora-drift-c',
    duration: '44s',
  },
]

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {BLOBS.map((b) => (
        <div
          key={b.animation}
          style={{
            position: 'absolute',
            width: b.size,
            height: b.size,
            ...b.position,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 65%)`,
            borderRadius: '50%',
            filter: 'blur(60px)',
            animationName: b.animation,
            animationDuration: b.duration,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
          }}
        />
      ))}
      {/* grain overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: GRAIN_URL,
          backgroundRepeat: 'repeat',
          opacity: 0.055,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  )
}
