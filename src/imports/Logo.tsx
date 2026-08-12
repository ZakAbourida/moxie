import { useId } from 'react'

interface LogoProps {
    height?: number
    className?: string
}

export function Logo({ height = 28, className }: LogoProps) {
    const waveId = useId()
    const xId = useId()
    const width = Math.round(height * (720 / 160))

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 720 160"
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
                <linearGradient id={xId} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F2622A" />
                    <stop offset="100%" stopColor="#8B3BFF" />
                </linearGradient>
            </defs>

            <g transform="translate(0,-4) scale(0.62)">
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

            <text
                x={238}
                y={104}
                fontFamily="Lexend, sans-serif"
                fontWeight={900}
                fontSize={72}
                letterSpacing={3}
                fill="#F3EFE9"
            >
                MO<tspan fill={`url(#${xId})`}>X</tspan>IE
            </text>
        </svg>
    )
}
