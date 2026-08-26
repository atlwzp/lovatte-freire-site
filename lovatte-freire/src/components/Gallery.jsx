import { ImagePlus } from 'lucide-react'
import siteConfig from '../siteConfig'
import useReveal from '../hooks/useReveal'
import FlowLine from './FlowLine'

export default function Gallery() {
  const [ref, isVisible] = useReveal(0.1)

  return (
    <section id="estrutura" className="py-24 md:py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-light font-medium">
            Estrutura
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-cream text-balance">
            Um ambiente pensado para o seu conforto
          </h2>
          <FlowLine className="max-w-[160px] mx-auto my-6" />
          <p className="text-cream/50 text-sm">
            Galeria pronta para receber fotos reais da clínica.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          {siteConfig.galleryPlaceholders.map((label, i) => (
            <div
              key={label + i}
              className={`relative rounded-xl2 overflow-hidden border border-cream/10 bg-navy-light/40 flex items-center justify-center ${
                i === 0 ? 'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto' : 'aspect-[4/3]'
              }`}
            >
              <div className="flex flex-col items-center gap-2 text-cream/40">
                <ImagePlus size={22} strokeWidth={1.4} />
                <span className="text-xs uppercase tracking-widest text-center px-4">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
