import useReveal from '../hooks/useReveal'

/**
 * Elemento de assinatura visual do site: uma linha dourada fluida que se
 * desenha suavemente, inspirada nos perfis de luz de LED reais da
 * recepção da clínica. Usada como divisor entre seções.
 */
export default function FlowLine({ className = '', flip = false }) {
  const [ref, isVisible] = useReveal(0.4)

  return (
    <div
      ref={ref}
      className={`flow-line ${isVisible ? 'is-visible' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 24"
        className={`w-full h-6 ${flip ? 'scale-y-[-1]' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0 12 C 80 2, 140 22, 200 12 S 320 2, 400 12"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B8935F" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4B483" stopOpacity="1" />
            <stop offset="100%" stopColor="#B8935F" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
