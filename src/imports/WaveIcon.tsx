import { useId } from 'react'

interface WaveIconProps {
  height?: number
  className?: string
}

export function WaveIcon({ height = 40, className }: WaveIconProps) {
  const waveId = useId()
  // viewBox cropped to the wave glyph only (from the full Moxie logo)
  const width = Math.round(height * (357 / 172))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 357 172"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <linearGradient id={waveId} x1="0" y1="0" x2="1" y2="0.15">
          <stop offset="0%" stopColor="#F2622A" />
          <stop offset="52%" stopColor="#C1449C" />
          <stop offset="100%" stopColor="#8B3BFF" />
        </linearGradient>
      </defs>
      <g transform="translate(0,-8)">
        <path
          d="M12,150 C42,150 50,32 82,32 C114,32 118,158 150,158 C182,158 186,74 218,74 C250,74 244,166 276,166 C308,166 302,26 338,26"
          fill="none"
          stroke={`url(#${waveId})`}
          strokeWidth={24}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={338} cy={26} r={19} fill="#F2622A" />
      </g>
    </svg>
  )
}
