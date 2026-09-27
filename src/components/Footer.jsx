import { MapPin, Github, Linkedin, Mail } from 'lucide-react'

const links = ['Home', 'About', 'Features', 'How it Works', 'Impact', 'Contact']

export default function Footer() {
  return (
    <footer className="section-pad py-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <a href="#home" className="flex items-center gap-2 mb-1 group w-fit">
          <MapPin className="text-rose-500 transition-transform group-hover:-rotate-12" size={18} />
          <span className="font-display font-bold">
            Smart <span className="text-rose-500">Geo-Offer</span>
          </span>
        </a>
        <p className="text-xs text-white/40">AI-powered geo-fencing solution for smarter retail experiences.</p>
      </div>

      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-white transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        {[Github, Linkedin, Mail].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-rose-500/40 hover:text-rose-400 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </footer>
  )
}
