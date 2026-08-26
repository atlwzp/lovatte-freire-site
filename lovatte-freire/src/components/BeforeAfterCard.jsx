import { useState, useRef } from 'react'
import { MoveHorizontal } from 'lucide-react'

export default function BeforeAfterCard({ item }) {
  const [value, setValue] = useState(50)
  const containerRef = useRef(null)

  const beforeImg = item?.beforeImage || '/antes1.png'
  const afterImg = item?.afterImage || '/depois1.png'

  const handleMove = (clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setValue((x / rect.width) * 100)
  }

  return (
    <div className="bg-white rounded-xl shadow-card border border-navy/5 overflow-hidden w-full">
      <div
        ref={containerRef}
        // aspectRatio + overflow em style inline: garante o recorte
        // independentemente de qualquer configuração/cache do Tailwind.
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          overflow: 'hidden',
          cursor: 'ew-resize',
          touchAction: 'none',
          userSelect: 'none',
        }}
        onMouseMove={(e) => { if (e.buttons === 1) handleMove(e.clientX) }}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* Imagem DEPOIS (fundo) */}
        <img
          src={afterImg}
          alt="Depois"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            pointerEvents: 'none',
          }}
        />

        {/* Imagem ANTES (recorte com clipPath) */}
        <img
          src={beforeImg}
          alt="Antes"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            pointerEvents: 'none',
            clipPath: `polygon(0 0, ${value}% 0, ${value}% 100%, 0 100%)`,
          }}
        />

        {/* Linha divisória */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-md pointer-events-none"
          style={{ left: `${value}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-navy flex items-center justify-center shadow-lg">
            <MoveHorizontal size={16} />
          </div>
        </div>

        {/* Controle acessível (teclado + toque preciso) */}
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label={`Comparar antes e depois — ${item?.label || 'caso'}`}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>

      <div className="p-4">
        <h3 className="font-display text-base text-navy">{item?.label || 'Caso'}</h3>
        <p className="text-xs text-navy/60">{item?.treatment || 'Tratamento'}</p>
      </div>
    </div>
  )
}
