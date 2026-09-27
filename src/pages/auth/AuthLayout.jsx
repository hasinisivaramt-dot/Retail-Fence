import { Link } from 'react-router-dom'
import { MapPin, ArrowLeft } from 'lucide-react'
import heroImg from '../../assets/hero-store.jpg'

export default function AuthLayout({ title, subtitle, accent = 'rose', children, wide = false }) {
  const ring = accent === 'mint' ? 'focus-within:border-mint-500/60' : ''

  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-ink-950/88" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/95 via-ink-950/75 to-ink-950/95" />

      <div className="relative section-pad flex items-center justify-between h-24">
        <Link to="/" className="flex items-center gap-2.5">
          <MapPin className="text-rose-500" size={22} strokeWidth={2.5} />
          <span className="font-display font-bold">
            Smart <span className="text-rose-500">Geo-Offer</span>
          </span>
        </Link>
        <Link
          to="/get-started"
          className="group inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
          Back to Portals
        </Link>
      </div>

      <div className="relative section-pad pb-20 flex justify-center">
        <div className={`w-full ${wide ? 'max-w-2xl' : 'max-w-md'}`}>
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h1>
            {subtitle && <p className="text-sm text-white/50">{subtitle}</p>}
          </div>
          <div className={`card p-7 sm:p-9 ${ring}`}>{children}</div>
        </div>
      </div>
    </div>
  )
}
