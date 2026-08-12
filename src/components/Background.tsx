const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/></filter><rect width='256' height='256' filter='url(#n)' opacity='1'/></svg>`
const GRAIN_URL = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* blob 1 — orange, top-left */}
      <div
        style={{
          position: 'absolute',
          width: '80vw',
          height: '80vw',
          top: '-24vw',
          left: '-20vw',
          background: 'radial-gradient(circle, rgba(242,98,42,0.42) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animationName: 'aurora-drift-a',
          animationDuration: '38s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate',
        }}
      />
      {/* blob 2 — magenta, right */}
      <div
        style={{
          position: 'absolute',
          width: '65vw',
          height: '65vw',
          top: '25vh',
          right: '-18vw',
          background: 'radial-gradient(circle, rgba(193,68,156,0.36) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animationName: 'aurora-drift-b',
          animationDuration: '28s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate',
        }}
      />
      {/* blob 3 — violet, bottom */}
      <div
        style={{
          position: 'absolute',
          width: '60vw',
          height: '60vw',
          bottom: '-8vw',
          left: '15vw',
          background: 'radial-gradient(circle, rgba(139,59,255,0.32) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animationName: 'aurora-drift-c',
          animationDuration: '44s',
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate',
        }}
      />
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
