import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Menu, X, ArrowUpRight } from 'lucide-react'

const links = ['Home', 'Features', 'How It Works', 'AI']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const onScroll=()=>setScrolled(window.scrollY>20); onScroll(); window.addEventListener('scroll',onScroll); return()=>window.removeEventListener('scroll',onScroll) },[])
  const id = (s) => s.toLowerCase().replace(/\s+/g,'-')
  return <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 pt-3">
    <nav className={`max-w-[1450px] mx-auto h-16 sm:h-[70px] rounded-2xl px-4 sm:px-6 flex items-center justify-between transition-all duration-500 ${scrolled?'glass-nav shadow-xl shadow-[#6d4127]/10':'bg-white/45 border border-white/70 backdrop-blur-md'}`}>
      <a href="#home" className="flex items-center gap-2.5 shrink-0 group">
        <span className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#c9784e] to-[#7e3f28] text-white flex items-center justify-center shadow-glow group-hover:rotate-6 transition-transform"><MapPin size={19} strokeWidth={2.5}/></span>
        <span className="font-display font-bold tracking-tight text-[#3b2418]">Smart <span className="gradient-text">Geo-Offer</span></span>
      </a>
      <ul className="hidden lg:flex items-center gap-9 text-[13px] text-[#5f4638]">
        {links.map((link,i)=><li key={link} className="relative group"><a href={`#${id(link)}`} className={`transition-colors hover:text-[#8e472d] ${i===0?'text-[#8e472d]':''}`}>{link}</a><span className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-[#a95232] transition-all duration-300 ${i===0?'w-full':'w-0 group-hover:w-full'}`}/></li>)}
      </ul>
      <div className="hidden sm:flex items-center gap-2"><Link to="/get-started" className="text-sm text-[#5d4335] hover:text-[#8e472d] px-3 py-2">Login</Link><Link to="/get-started" className="group inline-flex items-center gap-2 rounded-xl bg-[#7d3f29] text-white px-4 py-2.5 text-sm font-semibold shadow-glow hover:bg-[#65321f] hover:-translate-y-0.5 transition-all">Get Started <ArrowUpRight size={15}/></Link></div>
      <button onClick={()=>setOpen(v=>!v)} className="lg:hidden w-10 h-10 rounded-xl glass-nav flex items-center justify-center text-[#4d3021]">{open?<X size={18}/>:<Menu size={18}/>}</button>
    </nav>
    <div className={`lg:hidden max-w-[1450px] mx-auto mt-2 overflow-hidden transition-all duration-500 ${open?'max-h-96 opacity-100':'max-h-0 opacity-0'}`}><div className="glass-nav rounded-2xl p-4">{links.map(link=><a key={link} href={`#${id(link)}`} onClick={()=>setOpen(false)} className="block py-3 text-sm text-[#5f4638]">{link}</a>)}<Link to="/get-started" className="mt-2 block text-center rounded-xl bg-[#7d3f29] text-white py-3 font-semibold">Get Started</Link></div></div>
  </header>
}
