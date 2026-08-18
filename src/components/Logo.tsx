import { useId } from 'react'
import {
  LOGOTYPE_PATHS,
  LOGOTYPE_VIEWBOX,
  MARK_DOT,
  MARK_PATH,
  MARK_SKEW,
  MARK_VIEWBOX,
} from './brandPaths'

/**
 * Il marchio Moxie. Referenza normativa: `docs/brand/BRAND.md` §3 in MoxieApp.
 *
 *   · `logotype` — la parola "moxie" corsiva, in tracciati. Dice il nome.
 *   · `mark`     — la m corsiva con il pallino Ember. Dice il concetto, e copre
 *                  tutti gli usi quadrati e piccoli: favicon, avatar, badge.
 *
 * Sotto i 28px il logotipo si sfalda (i tratti sottili di Yellowtail spariscono):
 * lì si usa `mark`. I tracciati arrivano da `brandPaths.ts`, generato dagli asset
 * in `docs/assets/brand/` — non si editano a mano, non si ridisegna il segno.
 */

type LogoForm = 'logotype' | 'mark'

type LogoProps = {
  height?: number
  className?: string
  /** Default `logotype`. Usa `mark` per quadrati e taglie sotto i 28px. */
  form?: LogoForm
  /** `bone` = tinta unita chiara; default gradiente del marchio. */
  tone?: 'gradient' | 'bone' | 'currentColor'
}

/** Altezza minima del logotipo, vedi BRAND.md §3. */
export const LOGOTYPE_MIN_HEIGHT = 28

const parseViewBox = (vb: string) => {
  const [x, y, w, h] = vb.split(' ').map(Number)
  return { x, y, w, h }
}

export function Logo({
  height = 28,
  className = '',
  form = 'logotype',
  tone = 'gradient',
}: LogoProps) {
  const gradientId = useId()
  const box = parseViewBox(form === 'mark' ? MARK_VIEWBOX : LOGOTYPE_VIEWBOX)
  const width = Math.round(height * (box.w / box.h))

  if (import.meta.env.DEV && form === 'logotype' && height < LOGOTYPE_MIN_HEIGHT) {
    console.warn(
      `[Logo] logotipo a ${height}px: sotto ${LOGOTYPE_MIN_HEIGHT}px i tratti sottili spariscono. Usa form="mark".`
    )
  }

  const fill =
    tone === 'gradient' ? `url(#${gradientId})` : tone === 'bone' ? '#F3EFE9' : 'currentColor'
  // Il pallino resta Ember anche in gradiente: è il colore del marchio, non un accento.
  const dotFill = tone === 'gradient' || tone === 'bone' ? '#F2622A' : 'currentColor'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={form === 'mark' ? MARK_VIEWBOX : LOGOTYPE_VIEWBOX}
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Moxie"
    >
      {tone === 'gradient' && (
        <defs>
          {/* Ancorato allo spazio del disegno: il gradiente attraversa il marchio una
              volta sola. In objectBoundingBox ogni lettera rifarebbe il giro completo
              arancio→viola sul proprio riquadro. */}
          <linearGradient
            id={gradientId}
            gradientUnits="userSpaceOnUse"
            x1={box.x}
            y1={box.y}
            x2={box.x + box.w}
            y2={box.y + box.h * 0.6}
          >
            <stop offset="0%" stopColor="#F2622A" />
            <stop offset="52%" stopColor="#C1449C" />
            <stop offset="100%" stopColor="#8B3BFF" />
          </linearGradient>
        </defs>
      )}

      {form === 'mark' ? (
        <g transform={`skewX(${MARK_SKEW})`}>
          <path d={MARK_PATH} fill={fill} />
          <circle cx={MARK_DOT.cx} cy={MARK_DOT.cy} r={MARK_DOT.r} fill={dotFill} />
        </g>
      ) : (
        LOGOTYPE_PATHS.map((d, i) => <path key={i} d={d} fill={fill} />)
      )}
    </svg>
  )
}

/**
 * Lockup: simbolo + logotipo affiancati.
 *
 * Due decisioni che non si vedono nel risultato ma lo tengono in piedi:
 *
 *  · **Un solo gradiente.** La rampa attraversa l'intero blocco e i due glifi ne
 *    ricevono una fetta ciascuno, calcolata dalla loro posizione. Due <Logo>
 *    affiancati darebbero due rampe arancio→viola complete — lo stesso errore
 *    dell'export objectBoundingBox, vedi BRAND.md §3.
 *
 *  · **Si allineano gli inchiostri, non i riquadri.** Il viewBox del simbolo ha
 *    ~16 unità di aria sopra e sotto, quello del logotipo zero: centrare i box
 *    fa galleggiare il simbolo sopra la linea di base. I valori qui sotto sono
 *    misurati per rasterizzazione dai tracciati, non stimati a occhio.
 */

/** Estensione reale dell'inchiostro, in unità del rispettivo viewBox. */
const MARK_INK = { top: 41.9, bottom: 212.6, left: 0.4, right: 350.8 }
const LOGO_INK = { top: 0, bottom: 161.5, right: 532.7 }

/** Altezza del simbolo in rapporto a quella del logotipo, inchiostro su inchiostro. */
const LOCKUP_MARK_RATIO = 0.88
/** Aria fra i due, in unità del logotipo (~l'occhiello della "o", BRAND.md §3). */
const LOCKUP_GAP = 42

export function Lockup({ height = 30, className = '' }: { height?: number; className?: string }) {
  const logoGradient = useId()
  const markGradient = useId()

  const s = ((LOGO_INK.bottom - LOGO_INK.top) * LOCKUP_MARK_RATIO) / (MARK_INK.bottom - MARK_INK.top)
  // Linea di base condivisa: il fondo dell'inchiostro del simbolo cade su quello del logotipo.
  const markTy = LOGO_INK.bottom - s * MARK_INK.bottom
  const markTx = -s * MARK_INK.left
  const logoX = s * (MARK_INK.right - MARK_INK.left) + LOCKUP_GAP

  const top = Math.min(0, markTy + s * MARK_INK.top)
  const W = logoX + LOGO_INK.right
  const H = LOGO_INK.bottom - top

  // `height` è l'altezza del LOGOTIPO, non del riquadro: così cambiare la taglia
  // del simbolo non rimpicciolisce la parola, e la soglia dei 28px di §3 continua
  // a misurare ciò che davvero si sfalda.
  const unit = height / (LOGO_INK.bottom - LOGO_INK.top)

  if (import.meta.env.DEV && height < LOGOTYPE_MIN_HEIGHT) {
    console.warn(
      `[Lockup] logotipo a ${height}px: sotto ${LOGOTYPE_MIN_HEIGHT}px i tratti sottili spariscono. Usa <Logo form="mark" />.`
    )
  }

  const stops = (
    <>
      <stop offset="0%" stopColor="#F2622A" />
      <stop offset="52%" stopColor="#C1449C" />
      <stop offset="100%" stopColor="#8B3BFF" />
    </>
  )

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 ${top.toFixed(1)} ${W.toFixed(1)} ${H.toFixed(1)}`}
      width={Math.round(W * unit)}
      height={Math.round(H * unit)}
      className={className}
      role="img"
      aria-label="Moxie"
    >
      <defs>
        {/* Le due fette della stessa rampa [0, W], riportate nello spazio utente di
            ogni glifo: per il simbolo global_x = markTx + s · x_locale. */}
        <linearGradient
          id={markGradient}
          gradientUnits="userSpaceOnUse"
          x1={-markTx / s}
          y1={0}
          x2={(W - markTx) / s}
          y2={0}
        >
          {stops}
        </linearGradient>
        <linearGradient
          id={logoGradient}
          gradientUnits="userSpaceOnUse"
          x1={-logoX}
          y1={0}
          x2={W - logoX}
          y2={0}
        >
          {stops}
        </linearGradient>
      </defs>

      <g transform={`translate(${markTx.toFixed(2)},${markTy.toFixed(2)}) scale(${s.toFixed(5)})`}>
        <g transform={`skewX(${MARK_SKEW})`}>
          <path d={MARK_PATH} fill={`url(#${markGradient})`} />
          {/* Il pallino resta Ember pieno: è il colore del marchio, non uno stop. */}
          <circle cx={MARK_DOT.cx} cy={MARK_DOT.cy} r={MARK_DOT.r} fill="#F2622A" />
        </g>
      </g>
      <g transform={`translate(${logoX.toFixed(2)},0)`}>
        {LOGOTYPE_PATHS.map((d, i) => (
          <path key={i} d={d} fill={`url(#${logoGradient})`} />
        ))}
      </g>
    </svg>
  )
}

/** Alias per gli usi quadrati e piccoli. */
export function LogoMark({ size = 32, className = '' }: { size?: number; className?: string }) {
  return <Logo form="mark" height={size} className={className} />
}

type WordmarkProps = {
  /** Aggiunge il descrittore sotto il logotipo. Uno solo, vedi BRAND.md §2. */
  tagline?: boolean
  className?: string
}

/**
 * Logotipo + descrittore. Il nome non si compone più in Lexend: il logotipo È il
 * nome (BRAND.md §5). Lexend resta il carattere dell'interfaccia.
 */
export function Wordmark({ tagline = false, className = '' }: WordmarkProps) {
  return (
    <div className={`flex flex-col items-start leading-none ${className}`}>
      <Lockup height={30} />
      {tagline && (
        <span className="mt-2 block font-display text-[0.5rem] font-bold uppercase tracking-[0.28em] text-ink-dim">
          Coaching OS
        </span>
      )}
    </div>
  )
}
