import { Quote } from 'lucide-react'
import siteConfig from '../siteConfig'
import useReveal from '../hooks/useReveal'
import FlowLine from './FlowLine'

export default function Testimonials() {
  const [ref, isVisible] = useReveal(0.1)

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-medium">
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-navy text-balance">
            O que dizem os pacientes
          </h2>
          <FlowLine className="max-w-[160px] mx-auto my-6" />
        </div>

        <div
          ref={ref}
          className={`mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          {siteConfig.testimonialsPlaceholders.map((n) => (
            <div
              key={n}
              className="rounded-xl2 border border-dashed border-navy/15 bg-stone/40 p-8 flex flex-col items-start gap-4"
            >
              <Quote size={22} className="text-gold/60" strokeWidth={1.4} />
              <p className="text-navy/50 text-sm italic leading-relaxed">
                Depoimento real do paciente — inserir aqui.
              </p>
              <span className="text-xs uppercase tracking-widest text-navy/30">
                Nome do paciente
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-navy/40 italic">
          * Substituir por depoimentos reais em{' '}
          <code className="not-italic">src/siteConfig.js</code>. Nenhum depoimento foi inventado.
        </p>
      </div>
    </section>
  )
}
