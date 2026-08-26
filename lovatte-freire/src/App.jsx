import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Specialties from './components/Specialties'
import LaserHairRemoval from './components/LaserHairRemoval'
import Journey from './components/Journey'
import Gallery from './components/Gallery'
import BeforeAfter from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import LaserGalleryPage from './pages/LaserGalleryPage'
import DentalGalleryPage from './pages/DentalGalleryPage'

// Roteamento leve baseado em hash — sem dependências extras e sem precisar
// configurar rewrites no servidor (funciona em qualquer hospedagem estática).
// Rotas dedicadas: #/fotos/depilacao-a-laser e #/fotos/antes-e-depois.
// Âncoras normais da página (#inicio, #sobre, etc.) continuam funcionando
// normalmente, pois não começam com "#/".
function getRouteFromHash() {
  const hash = window.location.hash
  if (hash.startsWith('#/fotos/depilacao-a-laser')) return 'laser-gallery'
  if (hash.startsWith('#/fotos/antes-e-depois')) return 'dental-gallery'
  return 'home'
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash())

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (route !== 'home') {
      window.scrollTo({ top: 0 })
    }
  }, [route])

  if (route === 'laser-gallery') return <LaserGalleryPage />
  if (route === 'dental-gallery') return <DentalGalleryPage />

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* H1 único da página está dentro do Hero */}
        <Hero />
        <TrustBar />
        <About />
        <Specialties />
        <LaserHairRemoval />
        <Journey />
        <Gallery />
        <BeforeAfter />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
