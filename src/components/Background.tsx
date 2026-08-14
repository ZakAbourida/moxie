const GRAIN_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/></filter><rect width='256' height='256' filter='url(#n)' opacity='1'/></svg>`
const GRAIN_URL = `url("data:image/svg+xml,${encodeURIComponent(GRAIN_SVG)}")`

type BackgroundTone = "default" | "coach" | "athlete" | "engineering"

const TONES: Record<BackgroundTone, { a: string; b: string; c: string }> = {
  default: {
    a: "rgba(242,98,42,0.42)",
    b: "rgba(193,68,156,0.36)",
    c: "rgba(139,59,255,0.32)",
  },
  coach: {
    a: "rgba(242,98,42,0.56)",
    b: "rgba(255,139,90,0.28)",
    c: "rgba(193,68,156,0.16)",
  },
  athlete: {
    a: "rgba(193,68,156,0.46)",
    b: "rgba(139,59,255,0.44)",
    c: "rgba(242,98,42,0.14)",
  },
  engineering: {
    a: "rgba(70,201,138,0.42)",
    b: "rgba(40,145,104,0.32)",
    c: "rgba(70,201,138,0.2)",
  },
}

export default function Background({
  tone = "default",
}: {
  tone?: BackgroundTone
}) {
  const colors = TONES[tone]
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden transition-opacity duration-700"
      aria-hidden="true"
    >
      {/* blob 1 — orange, top-left */}
      <div
        style={{
          position: "absolute",
          width: "80vw",
          height: "80vw",
          top: "-24vw",
          left: "-20vw",
          background: `radial-gradient(circle, ${colors.a} 0%, transparent 65%)`,
          borderRadius: "50%",
          filter: "blur(60px)",
          animationName: "aurora-drift-a",
          animationDuration: "38s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
        }}
      />
      {/* blob 2 — magenta, right */}
      <div
        style={{
          position: "absolute",
          width: "65vw",
          height: "65vw",
          top: "25vh",
          right: "-18vw",
          background: `radial-gradient(circle, ${colors.b} 0%, transparent 65%)`,
          borderRadius: "50%",
          filter: "blur(60px)",
          animationName: "aurora-drift-b",
          animationDuration: "28s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
        }}
      />
      {/* blob 3 — violet, bottom */}
      <div
        style={{
          position: "absolute",
          width: "60vw",
          height: "60vw",
          bottom: "-8vw",
          left: "15vw",
          background: `radial-gradient(circle, ${colors.c} 0%, transparent 65%)`,
          borderRadius: "50%",
          filter: "blur(60px)",
          animationName: "aurora-drift-c",
          animationDuration: "44s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
        }}
      />
      {/* grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: GRAIN_URL,
          backgroundRepeat: "repeat",
          opacity: 0.055,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  )
}
