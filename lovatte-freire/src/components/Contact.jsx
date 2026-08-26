import { Phone, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react'
import siteConfig from '../siteConfig'
import useReveal from '../hooks/useReveal'
import FlowLine from './FlowLine'

export default function Contact() {
  const [ref, isVisible] = useReveal(0.15)

  return (
    <section id="contato" className="py-24 md:py-32 bg-stone/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-medium">
            Contato
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-navy text-balance">
            Vamos cuidar do seu sorriso juntos
          </h2>
          <FlowLine className="max-w-[160px] my-6" />
        </div>

        <div ref={ref} className={`mt-14 grid lg:grid-cols-2 gap-10 reveal ${isVisible ? 'is-visible' : ''}`}>
          {/* Informações */}
          <div className="bg-white rounded-xl2 shadow-card border border-navy/5 p-8 md:p-10 space-y-7">
            <div>
              <p className="font-display text-xl text-navy">{siteConfig.clinicName}</p>
              <p className="text-navy/50 text-sm mt-1">
                {siteConfig.city} - {siteConfig.state}
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={19} strokeWidth={1.6} className="text-gold-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-navy/50">Telefone</p>
                <a href={siteConfig.phone.href} className="text-navy font-medium hover:text-gold-dark transition-colors">
                  {siteConfig.phone.display}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle size={19} strokeWidth={1.6} className="text-gold-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-navy/50">WhatsApp</p>
                <a
                  href={siteConfig.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy font-medium hover:text-gold-dark transition-colors"
                >
                  Enviar mensagem
                </a>
                <p className="text-xs text-navy/30 mt-0.5">
                  * número placeholder — substituir em src/siteConfig.js
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram size={19} strokeWidth={1.6} className="text-gold-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-navy/50">Instagram</p>
                <a
                  href={siteConfig.instagram.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy font-medium hover:text-gold-dark transition-colors"
                >
                  {siteConfig.instagram.handle}
                </a>
                <p className="text-xs text-navy/30 mt-0.5">
                  * handle placeholder — confirmar perfil real
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={19} strokeWidth={1.6} className="text-gold-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-navy/50">Endereço</p>
                <p className="text-navy font-medium">{siteConfig.address.line1}</p>
                <p className="text-navy font-medium">{siteConfig.address.line2}</p>
                <p className="text-xs text-navy/30 mt-0.5">
                  * endereço a confirmar com a clínica
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={19} strokeWidth={1.6} className="text-gold-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-navy/50">Horário de atendimento</p>
                {siteConfig.hours.map((h) => (
                  <p key={h.days} className="text-navy font-medium">
                    {h.days}: <span className="font-normal text-navy/60">{h.time}</span>
                  </p>
                ))}
                <p className="text-xs text-navy/30 mt-0.5">
                  * horários a confirmar com a clínica
                </p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-xl2 overflow-hidden shadow-card border border-navy/5 bg-white min-h-[320px] flex items-center justify-center">
            {siteConfig.googleMapsEmbedUrl ? (
              <iframe
                title="Localização da clínica"
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="text-center px-8 py-16">
                <MapPin size={26} strokeWidth={1.4} className="mx-auto text-navy/25" />
                <p className="mt-3 font-display text-navy/50">Mapa a inserir</p>
                <p className="mt-1 text-xs text-navy/35 max-w-xs mx-auto">
                  Assim que o endereço definitivo estiver disponível, adicione o link de
                  incorporação do Google Maps em{' '}
                  <code className="not-italic">googleMapsEmbedUrl</code> no arquivo{' '}
                  <code className="not-italic">src/siteConfig.js</code>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
