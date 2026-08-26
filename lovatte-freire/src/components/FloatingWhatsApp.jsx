import { MessageCircle } from 'lucide-react'
import siteConfig from '../siteConfig'

export default function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsapp.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="lg:hidden fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-navy shadow-soft flex items-center justify-center active:scale-95 transition-transform"
    >
      <MessageCircle size={24} className="text-gold-light" strokeWidth={2} />
    </a>
  )
}
