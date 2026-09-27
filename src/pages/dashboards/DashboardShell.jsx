import { Link } from 'react-router-dom'
import { MapPin, LogOut, Sparkles } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import heroStore from '../../assets/hero-store.jpg'

const accentMap = {
  rose: 'text-[#b85f37] bg-[#f9e5d7] border-[#e5c8b7]',
  mint: 'text-[#658456] bg-[#edf4e9] border-[#cbd9c3]',
  violet: 'text-[#7b4b68] bg-[#f1e6f0] border-[#dfcedb]',
}

export default function DashboardShell({ accent = 'rose', roleLabel, children }) {
  const { user, logout } = useAuth()
  return (
    <div className="min-h-screen bg-[#fbf3eb] text-[#3b2418] relative overflow-hidden">
      <div className="pointer-events-none fixed right-0 top-0 w-[620px] h-[620px] opacity-[.055] bg-cover bg-center rounded-bl-[180px]" style={{backgroundImage:`url(${heroStore})`}} />
      <header className="sticky top-0 z-40 bg-[#fffaf5]/92 backdrop-blur-xl border-b border-[#ead9ca] shadow-[0_8px_30px_rgba(91,48,27,.05)]">
        <div className="section-pad h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f2b28e] to-[#b85f37] text-white flex items-center justify-center shadow-glow"><MapPin size={19}/></span>
            <span className="font-display font-bold text-sm sm:text-base text-[#3b2418]">Smart <span className="gradient-text">Geo-Offer</span></span>
            <span className={`hidden sm:inline-flex items-center gap-1 text-xs border rounded-full px-3 py-1.5 ml-1 ${accentMap[accent]}`}><Sparkles size={11}/>{roleLabel}</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right"><p className="text-xs font-semibold text-[#4a2d20]">{user?.fullName || user?.storeName || 'Portal User'}</p><p className="text-[10px] text-[#8b6654]">Smart Geo-Offer {roleLabel}</p></div>
            <button onClick={logout} className="inline-flex items-center gap-1.5 text-sm text-[#6b4737] hover:text-[#8e472d] border border-[#e4cfc0] hover:border-[#c9794e] bg-[#fffaf5] rounded-full px-3.5 py-2 transition-colors"><LogOut size={14}/> Logout</button>
          </div>
        </div>
      </header>
      <main className="section-pad py-8 sm:py-10 relative">{children}</main>
    </div>
  )
}
