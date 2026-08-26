import useReveal from '../hooks/useReveal'
import FlowLine from './FlowLine'

export default function About() {
  const [refText, textVisible] = useReveal(0.2)
  const [refImg, imgVisible] = useReveal(0.2)

  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div
          ref={refImg}
          className={`order-2 lg:order-1 reveal ${imgVisible ? 'is-visible' : ''}`}
        >
          <div className="relative rounded-xl2 overflow-hidden shadow-card aspect-[4/3] bg-stone flex items-center justify-center border border-navy/8">
            {/* SUBSTITUIR: foto real da recepção/estrutura da clínica */}
            <div className="text-center px-8">
              <p className="text-xs uppercase tracking-[0.25em] text-navy/40">
                Espaço reservado
              </p>
              <p className="mt-2 font-display text-lg text-navy/50">
                Foto real da clínica
              </p>
            </div>
          </div>
        </div>

        <div ref={refText} className={`order-1 lg:order-2 reveal ${textVisible ? 'is-visible' : ''}`}>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-medium">
            Sobre a clínica
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-navy leading-tight text-balance">
            Cuidado que começa pelo atendimento
          </h2>
          <FlowLine className="max-w-[160px] my-6" />
          <p className="text-navy/70 leading-relaxed text-lg">
            Na Lovatte &amp; Freire Odontologia, cada paciente é recebido de forma
            individualizada, buscando oferecer uma experiência confortável e um
            atendimento focado em suas necessidades.
          </p>
          <p className="mt-4 text-navy/70 leading-relaxed text-lg">
            Acreditamos que o cuidado com o sorriso começa muito antes da cadeira
            odontológica — começa na forma como cada pessoa é acolhida.
          </p>
        </div>
      </div>
    </section>
  )
}
