import { ArrowLeft } from 'lucide-react'

export default function PageHeader() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-navy/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <a href="#/" className="flex items-baseline gap-2">
          <span className="font-display text-xl text-navy tracking-tight">
            Lovatte<span className="text-gold mx-1">&amp;</span>Freire
          </span>
          <span className="hidden md:inline text-[0.65rem] uppercase tracking-[0.25em] text-navy/50 font-body">
            Odontologia
          </span>
        </a>
        <a
          href="#/"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy/70 hover:text-navy transition-colors"
        >
          <ArrowLeft size={16} strokeWidth={2} />
          Voltar para o site
        </a>
      </div>
    </header>
  )
}
