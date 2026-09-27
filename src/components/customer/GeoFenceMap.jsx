import { MapPin, Navigation } from 'lucide-react'

/**
 * A lightweight, stylized stand-in for a real map — no map SDK/API key
 * wired up in this prototype. Swap for Google Maps / Mapbox in
 * production; the store/geo-fence layout below already matches what
 * a real map would need to render (markers + radius).
 */
export default function GeoFenceMap({ stores = [], showFence = true, height = 'h-64' }) {
  return (
    <div className={`relative w-full ${height} rounded-2xl overflow-hidden border border-white/10 bg-ink-900`}>
      {/* abstract street grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" preserveAspectRatio="none">
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={`${(i + 1) * 12.5}%`} x2="100%" y2={`${(i + 1) * 12.5}%`} stroke="white" strokeWidth="1" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={`${(i + 1) * 10}%`} y1="0" x2={`${(i + 1) * 10}%`} y2="100%" stroke="white" strokeWidth="1" />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(245,56,95,0.10),transparent_60%)]" />

      {/* current location (blue dot) */}
      <span className="absolute left-[22%] top-[68%] -translate-x-1/2 -translate-y-1/2">
        <span className="block w-3.5 h-3.5 rounded-full bg-sky-400 ring-4 ring-sky-400/25" />
      </span>

      {stores.map((s) => (
        <div
          key={s.name}
          className="absolute -translate-x-1/2 -translate-y-full"
          style={{ left: s.x, top: s.y }}
        >
          {s.selected && showFence && (
            <span
              className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 border border-rose-500/30 animate-pulse-slow"
              style={{ width: s.radius || 140, height: s.radius || 140 }}
            />
          )}
          <div className="relative flex flex-col items-center">
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                s.selected ? 'bg-rose-500' : 'bg-ink-800 border border-white/20'
              }`}
            >
              <MapPin size={15} className={s.selected ? 'text-white' : 'text-white/70'} />
            </span>
            <span className="mt-1 text-[10px] bg-ink-950/90 border border-white/10 rounded-md px-1.5 py-0.5 whitespace-nowrap">
              {s.name} · {s.distance}
            </span>
          </div>
        </div>
      ))}

      <span className="absolute bottom-3 right-3 text-[10px] text-white/25 flex items-center gap-1">
        <Navigation size={10} /> Illustrative map — not to scale
      </span>
    </div>
  )
}
