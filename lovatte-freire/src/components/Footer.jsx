import { Instagram, MessageCircle } from 'lucide-react'
import siteConfig from '../siteConfig'

const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep text-cream/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-lg text-cream">{siteConfig.clinicName}</p>
          <p className="mt-2 text-sm">
            {siteConfig.city} - {siteConfig.state}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cream/40 mb-4">Links rápidos</p>
          <ul className="space-y-2 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold-light transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cream/40 mb-4">Contato</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={siteConfig.phone.href} className="hover:text-gold-light transition-colors">
                {siteConfig.phone.display}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold-light transition-colors"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagram.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold-light transition-colors"
              >
                <Instagram size={15} /> {siteConfig.instagram.handle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cream/40 mb-4">Aviso</p>
          <p className="text-xs leading-relaxed text-cream/40">
            As informações deste site têm caráter geral e não substituem uma avaliação
            odontológica presencial. Nenhum resultado de tratamento é garantido.
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/35">
          <p>
            © {year} {siteConfig.clinicName}. Todos os direitos reservados.
          </p>
          <p>Guapimirim - RJ</p>
        </div>
      </div>
    </footer>
  )
}
