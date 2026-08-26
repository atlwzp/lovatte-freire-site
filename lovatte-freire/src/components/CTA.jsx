import { MessageCircle } from 'lucide-react'
import siteConfig from '../siteConfig'
import useReveal from '../hooks/useReveal'

export default function CTA() {
  const [ref, isVisible] = useReveal(0.2)

  return (
    <section className="relative py-24 md:py-32 bg-navy overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-glow" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-3xl mx-auto px-6 text-center reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        <h2 className="font-display text-3xl md:text-4xl text-cream text-balance">
          Pronto para cuidar melhor do seu sorriso?
        </h2>
        <p className="mt-5 text-cream/60 text-lg leading-relaxed">
          Entre em contato com a Lovatte &amp; Freire Odontologia e agende sua avaliação.
        </p>
        <a
          href={siteConfig.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 bg-gold text-navy-deep text-sm font-semibold px-9 py-4 rounded-full shadow-soft hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300"
        >
          <MessageCircle size={18} strokeWidth={2} />
          Falar pelo WhatsApp
        </a>
      </div>
    </section>
  )
}
