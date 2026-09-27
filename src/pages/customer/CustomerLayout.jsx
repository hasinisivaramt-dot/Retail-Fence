import { useState } from 'react'
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'
import {
  MapPin,
  Search,
  Bell,
  ChevronDown,
  LayoutDashboard,
  Navigation,
  Store,
  Tag,
  Ticket,
  Receipt,
  Star,
  PiggyBank,
  BrainCircuit,
  Heart,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Gift,
  ChevronRight,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { notifications as mockNotifications } from '../../data/customerMock'

const offerSubLinks = [
  { label: 'Personalized', tab: 'recommended' },
  { label: 'Nearby Offers', tab: 'nearby' },
  { label: 'Saved Offers', tab: 'saved' },
  { label: 'Expiring Soon', tab: 'expiring' },
  { label: 'Used Offers', tab: 'used' },
  { label: 'Expired Offers', tab: 'expired' },
]

const navItems = [
  { label: 'Dashboard', to: '/dashboard/customer', icon: LayoutDashboard, end: true },
  { label: 'Location & Geo-Fence', to: '/dashboard/customer/location', icon: Navigation },
  { label: 'Nearby Stores', to: '/dashboard/customer/nearby-stores', icon: Store },
  { label: 'Smart Offers', to: '/dashboard/customer/offers', icon: Tag, subLinks: offerSubLinks },
  { label: 'My Coupons', to: '/dashboard/customer/coupons', icon: Ticket },
  { label: 'Purchase History', to: '/dashboard/customer/purchases', icon: Receipt },
  { label: 'Loyalty & Rewards', to: '/dashboard/customer/loyalty', icon: Star },
  { label: 'My Savings', to: '/dashboard/customer/savings', icon: PiggyBank },
  { label: 'Shopping Insights', to: '/dashboard/customer/insights', icon: BrainCircuit },
  { label: 'Favorites', to: '/dashboard/customer/favorites', icon: Heart },
]

const bottomItems = [
  { label: 'Profile', to: '/dashboard/customer/profile', icon: User },
  { label: 'Settings', to: '/dashboard/customer/settings', icon: Settings },
  { label: 'Help & Support', to: '/dashboard/customer/help', icon: HelpCircle },
]

export default function CustomerLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [offersOpen, setOffersOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [bellOpen, setBellOpen] = useState(false)
  const unread = mockNotifications.filter((n) => n.unread).length

  return (
    <div className="min-h-screen bg-ink-950 lg:flex">
      {/* sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-white/5 bg-ink-900/40 h-screen sticky top-0">
        <Link to="/" className="flex items-center gap-2.5 px-6 h-20 shrink-0">
          <MapPin className="text-rose-500" size={22} strokeWidth={2.5} />
          <div>
            <p className="font-display font-bold text-sm leading-tight">
              Smart <span className="text-rose-500">Geo-Offer</span>
            </p>
            <p className="text-[11px] text-white/35 leading-tight">Customer Portal</p>
          </div>
        </Link>

        <nav className="flex-1 overflow-y-auto px-3 space-y-1">
          {navItems.map(({ label, to, icon: Icon, end, subLinks }) => (
            <div key={label}>
              <NavLink
                to={to}
                end={end}
                onClick={() => subLinks && setOffersOpen((v) => !v)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                    isActive
                      ? 'bg-rose-500/15 text-rose-300 border border-rose-500/25'
                      : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                  }`
                }
              >
                <Icon size={16} className="shrink-0" />
                <span className="flex-1">{label}</span>
                {subLinks && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${offersOpen ? 'rotate-180' : ''}`}
                  />
                )}
              </NavLink>

              {subLinks && offersOpen && (
                <div className="ml-8 mt-1 space-y-0.5 mb-1">
                  {subLinks.map((s) => (
                    <button
                      key={s.tab}
                      onClick={() => navigate(`/dashboard/customer/offers?tab=${s.tab}`)}
                      className="w-full text-left flex items-center gap-1.5 text-xs text-white/45 hover:text-rose-300 rounded-lg px-3 py-1.5 transition-colors"
                    >
                      <ChevronRight size={11} /> {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="px-3 pt-2 pb-3 space-y-1 border-t border-white/5">
          {bottomItems.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-colors ${
                  isActive
                    ? 'bg-rose-500/15 text-rose-300 border border-rose-500/25'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                }`
              }
            >
              <Icon size={16} /> {label}
            </NavLink>
          ))}
        </div>

        <div className="m-3 mt-1 p-4 rounded-xl bg-gradient-to-br from-rose-500/15 to-transparent border border-rose-500/20">
          <p className="text-xs font-semibold mb-1 flex items-center gap-1.5">
            <Gift size={13} className="text-rose-400" /> Invite Friends
          </p>
          <p className="text-[11px] text-white/45 mb-3 leading-relaxed">
            Earn 100 points for each friend who joins.
          </p>
          <button className="w-full text-xs font-semibold rounded-full bg-rose-500 hover:bg-rose-600 transition-colors py-2">
            Invite Now
          </button>
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        {/* header */}
        <header className="sticky top-0 z-40 bg-ink-950/90 backdrop-blur-md border-b border-white/5">
          <div className="h-20 px-4 sm:px-6 flex items-center gap-4">
            <div className="hidden sm:flex items-center flex-1 max-w-md relative">
              <Search size={15} className="absolute left-3.5 text-white/30" />
              <input
                placeholder="Search offers, products or stores…"
                className="w-full bg-ink-900/70 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-sm outline-none focus:border-rose-500/40 transition-colors"
              />
            </div>

            <div className="flex-1 sm:flex-none" />

            <button className="hidden md:flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors shrink-0">
              <MapPin size={14} className="text-rose-500" /> Hyderabad, Telangana
              <ChevronDown size={13} />
            </button>

            <div className="relative shrink-0">
              <button
                onClick={() => setBellOpen((v) => !v)}
                className="relative w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-white/25 transition-colors"
              >
                <Bell size={15} />
                {unread > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[10px] flex items-center justify-center font-bold">
                    {unread}
                  </span>
                )}
              </button>
              {bellOpen && (
                <div className="absolute right-0 mt-2 w-72 card p-3 shadow-xl z-50">
                  <p className="text-xs text-white/40 px-2 pb-2">Notifications</p>
                  {mockNotifications.slice(0, 4).map((n) => (
                    <div key={n.id} className="px-2 py-2 rounded-lg hover:bg-white/5 transition-colors">
                      <p className="text-xs font-medium">{n.title}</p>
                      <p className="text-xs text-white/40">{n.desc}</p>
                    </div>
                  ))}
                  <Link
                    to="/dashboard/customer/notifications"
                    onClick={() => setBellOpen(false)}
                    className="block text-center text-xs text-rose-400 hover:text-rose-300 mt-2 pt-2 border-t border-white/5"
                  >
                    View All Notifications
                  </Link>
                </div>
              )}
            </div>

            <div className="relative shrink-0">
              <button onClick={() => setProfileOpen((v) => !v)} className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center text-sm font-semibold">
                  {(user?.fullName || 'U').charAt(0)}
                </span>
                <span className="hidden sm:block text-sm text-white/70">
                  Hi, {user?.fullName?.split(' ')[0] || 'there'}
                </span>
                <ChevronDown size={13} className="hidden sm:block text-white/40" />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 card p-1.5 shadow-xl z-50">
                  <Link
                    to="/dashboard/customer/profile"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2 transition-colors"
                  >
                    <User size={14} /> Profile
                  </Link>
                  <Link
                    to="/dashboard/customer/settings"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2 transition-colors"
                  >
                    <Settings size={14} /> Settings
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-2 text-sm text-rose-400 hover:bg-rose-500/10 rounded-lg px-3 py-2 transition-colors"
                  >
                    <LogOut size={14} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="section-pad py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
