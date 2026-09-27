import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Features', 'How it Works', 'Impact', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-950/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="section-pad flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2 shrink-0 group">
          <MapPin className="text-rose-500 transition-transform group-hover:-rotate-12" size={22} strokeWidth={2.5} />
          <span className="font-display font-bold text-lg">
            Smart <span className="text-rose-500">Geo-Offer</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9 text-sm text-white/70">
          {links.map((link, i) => (
            <li key={link} className="relative group">
              <a
                href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                className={`transition-colors hover:text-white ${i === 0 ? 'text-white' : ''}`}
              >
                {link}
              </a>
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-rose-500 transition-all duration-300 ${
                  i === 0 ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </li>
          ))}
        </ul>

        <Link
          to="/get-started"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:-translate-y-0.5 px-5 py-2.5 text-sm font-semibold shadow-glow"
        >
          Get Started <span aria-hidden>→</span>
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-white/15"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-ink-950/95 backdrop-blur-md border-b border-white/10 ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <ul className="section-pad py-4 flex flex-col gap-4 text-sm text-white/70">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                onClick={() => setOpen(false)}
                className="block hover:text-white transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
