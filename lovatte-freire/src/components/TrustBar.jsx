import { HeartHandshake, Sofa, ScanLine, ShieldCheck } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const ITEMS = [
  {
    icon: HeartHandshake,
    title: 'Atendimento personalizado',
    description: 'Cada paciente é ouvido com atenção antes de qualquer decisão.',
  },
  {
    icon: Sofa,
    title: 'Ambiente confortável',
    description: 'Um espaço pensado para deixar sua visita mais tranquila.',
  },
  {
    icon: ScanLine,
    title: 'Tecnologia e precisão',
    description: 'Recursos que apoiam diagnósticos e tratamentos com cuidado.',
  },
  {
    icon: ShieldCheck,
    title: 'Cuidado em todas as etapas',
    description: 'Do primeiro contato ao acompanhamento, sempre com atenção.',
  },
]

export default function TrustBar() {
  const [ref, isVisible] = useReveal(0.15)

  return (
    <section className="border-y border-navy/8 bg-white/60">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 reveal ${
          isVisible ? 'is-visible' : ''
        }`}
      >
        {ITEMS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center">
              <Icon size={20} strokeWidth={1.6} className="text-gold-dark" />
            </div>
            <h3 className="font-display text-base text-navy">{title}</h3>
            <p className="text-sm text-navy/60 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
