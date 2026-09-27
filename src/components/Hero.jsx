import { PlayCircle } from 'lucide-react'
import heroImg from '../assets/hero-store.jpg'

const stats = [
  { value: '90%', label: 'Higher Engagement' },
  { value: '2x', label: 'Sales Conversion' },
  { value: 'Real-Time', label: 'Offer Delivery' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* background photo */}
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-[65%_45%] scale-105"
      />

      {/* dimming + brand-tinted overlay so the text stays legible */}
      <div className="absolute inset-0 bg-ink-950/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/55 to-ink-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-ink-950/20" />
      <div className="absolute -inset-x-20 -bottom-24 h-64 bg-rose-500/10 blur-3xl rounded-full animate-pulse-slow" />

      <div className="relative section-pad w-full py-28">
        <div className="max-w-2xl animate-rise" style={{ animationDelay: '80ms' }}>
          <span className="inline-flex items-center gap-2 text-xs tracking-wide text-rose-300 bg-rose-500/10 border border-rose-500/25 rounded-full px-3 py-1.5 mb-7 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping-slow" />
            AI · Geo-Fencing · Retail POS
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] mb-6 text-balance">
            Turn every store visit into a{' '}
            <span className="bg-gradient-to-r from-rose-400 to-rose-500 bg-clip-text text-transparent">
              smart opportunity.
            </span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-9 max-w-lg">
            Deliver personalized offers based on real-time location and
            purchase behavior, creating timely moments that feel genuinely
            useful.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-full bg-rose-500 hover:bg-rose-600 transition-all duration-300 px-6 py-3.5 font-semibold shadow-glow hover:shadow-[0_0_70px_-10px_rgba(245,56,95,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <PlayCircle size={18} /> Live Demo
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s, i) => (
              <div key={s.label} className="animate-rise" style={{ animationDelay: `${220 + i * 90}ms` }}>
                <div className="text-xl font-bold text-rose-400">{s.value}</div>
                <div className="text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
