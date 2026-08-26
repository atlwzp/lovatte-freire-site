import { CalendarCheck, MessagesSquare, ClipboardList, Smile } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import FlowLine from './FlowLine'

const STEPS = [
  {
    icon: CalendarCheck,
    title: 'Agende sua avaliação',
    description: 'Escolha o melhor horário através do WhatsApp.',
  },
  {
    icon: MessagesSquare,
    title: 'Converse com nossa equipe',
    description: 'Tire suas dúvidas e conte o que você precisa.',
  },
  {
    icon: ClipboardList,
    title: 'Receba seu plano de tratamento',
    description: 'Um caminho claro, pensado para o seu caso.',
  },
  {
    icon: Smile,
    title: 'Cuide do seu sorriso',
    description: 'Acompanhamento próximo em cada etapa.',
  },
]

export default function Journey() {
  const [ref, isVisible] = useReveal(0.1)

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-medium">
            Como funciona
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-navy text-balance">
            Sua experiência, do primeiro contato ao sorriso
          </h2>
          <FlowLine className="max-w-[160px] mx-auto my-6" />
        </div>

        <div
          ref={ref}
          className={`mt-16 relative grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14 reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          {/* Linha conectora — apenas desktop, expressa a sequência real da jornada */}
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {STEPS.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-12 h-12 rounded-full bg-navy flex items-center justify-center shadow-soft">
                <Icon size={20} strokeWidth={1.6} className="text-gold-light" />
              </div>
              <span className="mt-4 text-xs font-medium text-gold-dark tracking-wide">
                Etapa {i + 1}
              </span>
              <h3 className="mt-2 font-display text-lg text-navy">{title}</h3>
              <p className="mt-2 text-sm text-navy/60 leading-relaxed max-w-[220px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
