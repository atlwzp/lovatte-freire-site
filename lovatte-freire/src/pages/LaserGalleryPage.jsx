import { ImagePlus, MessageCircle } from 'lucide-react'
import siteConfig from '../siteConfig'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import FlowLine from '../components/FlowLine'
import useReveal from '../hooks/useReveal'

export default function LaserGalleryPage() {
  const [ref, isVisible] = useReveal(0.1)
  const { title, intro, photos } = siteConfig.laserGalleryPage

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
            className={`mt-14 max-w-5xl mx-auto px-6 lg:px-10 grid sm:grid-cols-2 gap-6 reveal ${
              isVisible ? 'is-visible' : ''
            }`}
          >
            {photos.map((label, i) => (
              <div
                key={i}
                className="relative rounded-xl2 overflow-hidden aspect-[4/3] bg-stone border border-navy/8 flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-2 text-navy/35 text-center px-6">
                  <ImagePlus size={22} strokeWidth={1.4} />
                  <span className="text-xs uppercase tracking-widest">{label}</span>
                </div>
              </div>
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
            * Substituir por fotos reais em{' '}
            <code className="not-italic">src/siteConfig.js</code> →{' '}
            <code className="not-italic">laserGalleryPage.photos</code>, apontando cada
            item para a imagem correspondente.
          </p>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
