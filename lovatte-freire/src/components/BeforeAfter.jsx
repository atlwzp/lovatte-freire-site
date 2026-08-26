import siteConfig from '../siteConfig'
import BeforeAfterCard from './BeforeAfterCard'

export default function BeforeAfter() {
  return (
    <section id="antes-e-depois" className="py-12 bg-stone/60">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display text-navy">Resultados que falam por si</h2>
          <p className="text-sm text-navy/60 mt-2">Arraste o controle para comparar.</p>
        </div>

        {/* Grid limitado a no máximo 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {siteConfig.beforeAfterCases.map((item, index) => (
            <BeforeAfterCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
