import { Check, Zap, ImageIcon } from 'lucide-react'
import siteConfig from '../siteConfig'
import useReveal from '../hooks/useReveal'
import FlowLine from './FlowLine'

export default function LaserHairRemoval() {
  const [refText, textVisible] = useReveal(0.2)
  const [refVisual, visualVisible] = useReveal(0.2)
  const { eyebrow, title, description, benefits, areasNote } = siteConfig.laserHairRemoval

  return (
    <section id="depilacao-a-laser" className="py-24 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div ref={refText} className={`reveal ${textVisible ? 'is-visible' : ''}`}>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-light font-medium">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-cream text-balance">
            {title}
          </h2>
          <FlowLine className="max-w-[160px] my-6" />
          <p className="text-cream/60 leading-relaxed text-lg">{description}</p>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={2.5} className="text-gold-light" />
                </span>
                <span className="text-cream/75 text-sm leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-cream/35 italic">* {areasNote}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy-deep text-sm font-semibold px-8 py-4 rounded-full shadow-soft hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300"
            >
              Agendar avaliação
            </a>
            <a
              href="#/fotos/depilacao-a-laser"
              className="inline-flex items-center justify-center gap-2 border border-cream/25 text-cream text-sm font-medium px-8 py-4 rounded-full hover:border-gold hover:text-gold-light transition-all duration-300"
            >
              <ImageIcon size={18} strokeWidth={1.8} />
              Ver fotos
            </a>
          </div>
        </div>

        <div ref={refVisual} className={`reveal ${visualVisible ? 'is-visible' : ''}`}>
          <div className="relative rounded-xl2 overflow-hidden aspect-[4/3] bg-navy-light/40 border border-cream/10 flex items-center justify-center">
            {/* SUBSTITUIR: foto real do espaço/equipamento utilizado */}
            <svg
              viewBox="0 0 400 300"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="laserGoldLine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#D4B483" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#B8935F" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <g stroke="url(#laserGoldLine)" strokeWidth="1.2" fill="none" opacity="0.8">
                <path d="M-20 60 C 120 20, 220 100, 420 50" />
                <path d="M-20 250 C 140 290, 260 210, 420 260" />
              </g>
            </svg>
            <div className="relative flex flex-col items-center gap-3 text-cream/40 text-center px-8">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center">
                <Zap size={20} strokeWidth={1.6} className="text-gold-light" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em]">Espaço reservado</p>
              <p className="font-display text-lg text-cream/55">Foto real do ambiente/equipamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
