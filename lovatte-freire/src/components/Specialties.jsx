import { Sparkles } from 'lucide-react'
import siteConfig from '../siteConfig'
import useReveal from '../hooks/useReveal'
import FlowLine from './FlowLine'

export default function Specialties() {
  const [ref, isVisible] = useReveal(0.1)

  return (
    <section id="especialidades" className="py-24 md:py-32 bg-stone/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-medium">
            Especialidades
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-navy text-balance">
            Tratamentos pensados para cada fase do seu sorriso
          </h2>
          <FlowLine className="max-w-[160px] mx-auto my-6" />
          <p className="text-navy/60 text-sm">{siteConfig.specialtiesNote}</p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          {siteConfig.specialties.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-xl2 p-8 shadow-card border border-navy/5 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-navy/5 group-hover:bg-gold/15 flex items-center justify-center transition-colors duration-300">
                <Sparkles size={18} strokeWidth={1.6} className="text-gold-dark" />
              </div>
              <h3 className="mt-5 font-display text-lg text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-navy/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-navy/40 italic">
          * Itens de exemplo — editar em <code className="not-italic">src/siteConfig.js</code>{' '}
          conforme os tratamentos realmente oferecidos.
        </p>
      </div>
    </section>
  )
}
