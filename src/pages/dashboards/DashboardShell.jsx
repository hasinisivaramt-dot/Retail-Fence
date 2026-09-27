import { Link } from 'react-router-dom'
import { MapPin, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const accentMap = {
  rose: 'text-rose-500',
  mint: 'text-mint-400',
  violet: 'text-violet-400',
}

export default function DashboardShell({ accent = 'rose', roleLabel, children }) {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-ink-950">
      <header className="sticky top-0 z-40 bg-ink-950/90 backdrop-blur-md border-b border-white/5">
        <div className="section-pad h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <MapPin className="text-rose-500" size={20} strokeWidth={2.5} />
            <span className="font-display font-bold text-sm sm:text-base">
              Smart <span className="text-rose-500">Geo-Offer</span>
            </span>
            <span className={`hidden sm:inline text-xs border border-white/10 rounded-full px-2.5 py-1 ml-2 ${accentMap[accent]}`}>
              {roleLabel}
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm text-white/50">
              {user?.fullName || user?.email}
            </span>
            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/25 rounded-full px-3.5 py-2 transition-colors"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="section-pad py-10">{children}</main>
    </div>
  )
}
