import { ArrowRight, MessageCircle } from 'lucide-react'
import siteConfig from '../siteConfig'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Fundo decorativo sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-32 w-[36rem] h-[36rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[28rem] h-[28rem] rounded-full bg-navy/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div className="animate-fadeUp">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold-dark font-medium mb-6">
            Guapimirim · Rio de Janeiro
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-navy text-balance">
            Seu sorriso merece um cuidado especial.
          </h1>
          <p className="mt-6 text-lg text-navy/70 leading-relaxed max-w-xl">
            Na Lovatte &amp; Freire Odontologia, você encontra atendimento odontológico com
            cuidado, tecnologia e atenção em cada detalhe.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-navy text-cream text-sm font-medium px-8 py-4 rounded-full shadow-soft hover:bg-navy-light hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle size={18} strokeWidth={2} />
              Agendar avaliação
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 border border-navy/20 text-navy text-sm font-medium px-8 py-4 rounded-full hover:border-gold hover:text-gold-dark transition-all duration-300"
            >
              Conheça a clínica
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Imagem / visual */}
        <div className="relative">
          <div className="relative rounded-xl2 overflow-hidden shadow-soft aspect-[4/5] bg-gradient-to-br from-navy to-navy-deep">
            {/* Composição abstrata elegante — SUBSTITUIR por foto real da clínica ou da equipe */}
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroGoldLine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#D4B483" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#B8935F" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <g stroke="url(#heroGoldLine)" strokeWidth="1.4" fill="none" opacity="0.85">
                <path d="M-20 90 C 120 40, 220 140, 420 70" />
                <path d="M-20 180 C 140 130, 240 230, 420 160" />
                <path d="M-20 420 C 140 470, 260 380, 420 440" />
              </g>
              <circle cx="300" cy="150" r="70" fill="#FFFFFF" opacity="0.04" />
              <circle cx="90" cy="380" r="110" fill="#D4B483" opacity="0.06" />
            </svg>

            <div className="absolute inset-0 flex items-end p-8">
              <div className="text-cream/80">
                <p className="font-display text-xl italic text-cream">
                  “Cuidado que começa pelo atendimento.”
                </p>
                <p className="mt-3 text-[0.7rem] uppercase tracking-[0.25em] text-cream/40">
                  Espaço reservado — substituir por foto real da clínica
                </p>
              </div>
            </div>
          </div>

          {/* Selo flutuante */}
          <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-cream rounded-xl2 shadow-card px-6 py-5 items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-gold/15 flex items-center justify-center">
              <span className="font-display text-gold-dark text-lg">L&amp;F</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-navy leading-tight">Atendimento</p>
              <p className="text-sm font-semibold text-navy leading-tight">individualizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
