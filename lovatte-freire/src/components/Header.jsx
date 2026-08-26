import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import siteConfig from '../siteConfig'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Depilação a laser', href: '#depilacao-a-laser' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Antes e depois', href: '#antes-e-depois' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#inicio" className="flex items-baseline gap-2 group" aria-label="Página inicial">
          <span className="font-display text-xl md:text-2xl tracking-tight text-navy">
            Lovatte<span className="text-gold mx-1">&amp;</span>Freire
          </span>
          <span className="hidden md:inline text-[0.65rem] uppercase tracking-[0.25em] text-navy/50 font-body">
            Odontologia
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/80 hover:text-navy transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={siteConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-cream text-sm font-medium px-6 py-3 rounded-full shadow-soft hover:bg-navy-light hover:shadow-lg transition-all duration-300"
          >
            Agendar avaliação
          </a>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          className="lg:hidden text-navy"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-cream transition-all duration-500 ease-out ${
          menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ paddingTop: '5.5rem' }}
      >
        <nav className="flex flex-col items-center gap-8 pt-10" aria-label="Navegação mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-xl font-display text-navy"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-4 inline-flex items-center gap-2 bg-navy text-cream text-base font-medium px-8 py-4 rounded-full shadow-soft"
          >
            Agendar avaliação
          </a>
        </nav>
      </div>
    </header>
  )
}
