import { MessageCircle } from 'lucide-react'
import siteConfig from '../siteConfig'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import FlowLine from '../components/FlowLine'
import BeforeAfterCard from '../components/BeforeAfterCard'
import useReveal from '../hooks/useReveal'

export default function DentalGalleryPage() {
  const [ref, isVisible] = useReveal(0.1)
  const { title, intro } = siteConfig.dentalGalleryPage

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader />

      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-medium">
              Galeria
            </span>
            <h1 className="mt-4 font-display text-3xl md:text-4xl text-navy text-balance">
              {title}
            </h1>
            <FlowLine className="max-w-[160px] mx-auto my-6" />
            <p className="text-navy/60 max-w-xl mx-auto">{intro}</p>
          </div>

          <div
            ref={ref}
            className={`mt-14 max-w-4xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 gap-6 reveal ${
              isVisible ? 'is-visible' : ''
            }`}
          >
            {siteConfig.beforeAfterCases.map((item) => (
              <BeforeAfterCard key={item.label} item={item} />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-navy text-cream text-sm font-medium px-8 py-4 rounded-full shadow-soft hover:bg-navy-light hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle size={18} strokeWidth={2} />
              Agendar avaliação
            </a>
          </div>

          <p className="mt-8 text-center text-xs text-navy/40 italic max-w-xl mx-auto px-6">
            * Substituir por fotos e casos reais em{' '}
            <code className="not-italic">src/siteConfig.js</code> →{' '}
            <code className="not-italic">beforeAfterCases</code> (adicione quantos casos
            quiser). Publique apenas com autorização por escrito do paciente. Resultados
            variam de pessoa para pessoa e não são garantidos.
          </p>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
