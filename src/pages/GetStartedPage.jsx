import { Link } from 'react-router-dom'
import {
  MapPin,
  ArrowLeft,
  ArrowRight,
  User,
  Store,
  ShieldCheck,
  Gift,
  MapPinned,
  Bell,
  Wallet,
  Star,
  Settings,
  BarChart3,
  Users,
  Megaphone,
  TrendingUp,
  ClipboardCheck,
  Activity,
  UserCog,
} from 'lucide-react'
import heroImg from '../assets/hero-store.jpg'
import Reveal from '../components/Reveal'

const customerPerks = [
  { icon: Gift, label: 'Get personalized offers' },
  { icon: MapPinned, label: 'Find nearby stores on map' },
  { icon: Bell, label: 'Receive real-time notifications' },
  { icon: Wallet, label: 'Redeem offers at POS' },
  { icon: Star, label: 'Earn rewards & track savings' },
]

const retailerPerks = [
  { icon: Settings, label: 'Create & manage offers' },
  { icon: BarChart3, label: 'View customer analytics' },
  { icon: Users, label: 'Monitor store footfall' },
  { icon: Store, label: 'Manage store details' },
  { icon: Megaphone, label: 'Run targeted promotions' },
]

const adminPerks = [
  { icon: ClipboardCheck, label: 'Approve retailer registrations' },
  { icon: Users, label: 'Manage customer accounts' },
  { icon: Activity, label: 'Maintain system health' },
  { icon: UserCog, label: 'Provision internal admin accounts' },
]

const stats = [
  { icon: Users, title: 'Smarter Customers', desc: 'Personalized experiences' },
  { icon: Store, title: 'Growing Businesses', desc: 'Higher engagement' },
  { icon: MapPin, title: 'Location Intelligence', desc: 'Real-time offers' },
  { icon: TrendingUp, title: 'Better Retail Ecosystem', desc: 'More value for everyone' },
]

export default function GetStartedPage() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-ink-950/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/95 via-ink-950/70 to-ink-950/95" />

      <div className="relative section-pad flex items-center justify-between h-24 shrink-0">
        <div className="flex items-center gap-2.5">
          <MapPin className="text-rose-500" size={24} strokeWidth={2.5} />
          <div>
            <p className="font-display font-bold leading-tight">
              Smart <span className="text-rose-500">Geo-Offer</span>
            </p>
            <p className="text-xs text-[#765b4b] leading-tight">
              Smarter shopping starts around you
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="group inline-flex items-center gap-1.5 text-sm text-rose-400 hover:text-rose-300 transition-colors"
        >
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>

      <div className="relative section-pad flex-1 flex flex-col items-center justify-center py-14">
        <Reveal className="text-center max-w-2xl mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Welcome to <span className="text-rose-500">Smart Geo-Offer</span>
          </h1>
          <p className="text-lg text-[#4b3326] mb-3">Choose your portal to continue</p>
          <p className="text-sm text-[#765b4b] leading-relaxed">
            Personalized offers for smarter shopping experiences — for
            customers, retailers, and platform admins. Select your portal to
            log in or create an account.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          <Reveal delay={80}>
            <PortalCard
              accent="rose"
              icon={User}
              title="Customer Portal"
              desc="Discover nearby stores, get personalized offers, and enjoy smarter shopping experiences."
              perks={customerPerks}
              primaryLabel="Login as Customer"
              primaryTo="/login/customer"
              secondaryLabel="Sign Up as Customer"
              secondaryTo="/signup/customer"
            />
          </Reveal>

          <Reveal delay={160}>
            <PortalCard
              accent="mint"
              icon={Store}
              title="Retailer Portal"
              desc="Manage offers, monitor customer engagement, and grow your business with location-based insights."
              perks={retailerPerks}
              primaryLabel="Login as Retailer"
              primaryTo="/login/retailer"
              secondaryLabel="Sign Up as Retailer"
              secondaryTo="/signup/retailer"
            />
          </Reveal>

          <Reveal delay={240}>
            <PortalCard
              accent="violet"
              icon={ShieldCheck}
              title="Admin Portal"
              desc="Approve retailers, manage customers, and maintain system health — internal access only."
              perks={adminPerks}
              primaryLabel="Login as Admin"
              primaryTo="/login/admin"
              note="Provisioned internally — no public sign-up"
            />
          </Reveal>
        </div>
      </div>

      <Reveal delay={320} className="relative section-pad pb-10">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {stats.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0">
                <Icon size={17} />
              </div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-[#765b4b]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  )
}

function PortalCard({ accent, icon: Icon, title, desc, perks, primaryLabel, primaryTo, secondaryLabel, secondaryTo, note }) {
  const themes = {
    rose: {
      border: 'border-rose-500/25 hover:border-rose-500/45',
      glow: 'hover:shadow-[0_0_60px_-15px_rgba(245,56,95,0.35)]',
      iconBg: 'bg-rose-500/20 text-rose-400',
      bullet: 'text-rose-400',
      primary: 'bg-rose-500 hover:bg-rose-600 shadow-glow',
      secondary: 'border-rose-500/40 hover:border-rose-500/70 text-rose-300',
      wash: 'bg-[radial-gradient(circle_at_30%_0%,rgba(245,56,95,0.12),transparent_60%)]',
    },
    mint: {
      border: 'border-mint-500/25 hover:border-mint-500/45',
      glow: 'hover:shadow-[0_0_60px_-15px_rgba(63,214,138,0.35)]',
      iconBg: 'bg-mint-500/20 text-mint-400',
      bullet: 'text-mint-400',
      primary: 'bg-mint-500 hover:bg-mint-400 text-ink-950 shadow-[0_0_60px_-15px_rgba(63,214,138,0.45)]',
      secondary: 'border-mint-500/40 hover:border-mint-500/70 text-mint-300',
      wash: 'bg-[radial-gradient(circle_at_70%_0%,rgba(63,214,138,0.12),transparent_60%)]',
    },
    violet: {
      border: 'border-violet-500/25 hover:border-violet-500/45',
      glow: 'hover:shadow-[0_0_60px_-15px_rgba(139,92,246,0.35)]',
      iconBg: 'bg-violet-500/20 text-violet-400',
      bullet: 'text-violet-400',
      primary: 'bg-violet-500 hover:bg-violet-400 shadow-[0_0_60px_-15px_rgba(139,92,246,0.45)]',
      secondary: 'border-violet-500/40 hover:border-violet-500/70 text-violet-300',
      wash: 'bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.12),transparent_60%)]',
    },
  }
  const theme = themes[accent]

  return (
    <div
      className={`relative card h-full p-8 border transition-all duration-300 hover:-translate-y-1.5 ${theme.border} ${theme.glow}`}
    >
      <div className={`absolute inset-0 rounded-2xl pointer-events-none ${theme.wash}`} />

      <div className="relative flex flex-col items-center text-center h-full">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${theme.iconBg}`}>
          <Icon size={28} />
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-[#765b4b] leading-relaxed mb-6 max-w-xs">{desc}</p>

        <ul className="w-full space-y-3 mb-8 text-left">
          {perks.map(({ icon: PerkIcon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm text-[#4b3326]">
              <PerkIcon size={16} className={`shrink-0 ${theme.bullet}`} />
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-auto w-full">
          <Link
            to={primaryTo}
            className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 ${secondaryTo ? 'mb-3' : ''} ${theme.primary}`}
          >
            {primaryLabel} <ArrowRight size={16} />
          </Link>
          {secondaryTo && (
            <Link
              to={secondaryTo}
              className={`w-full block rounded-full border px-6 py-3 font-semibold transition-colors duration-300 ${theme.secondary}`}
            >
              {secondaryLabel}
            </Link>
          )}
          {note && <p className="text-xs text-[#765b4b] mt-3">{note}</p>}
        </div>
      </div>
    </div>
  )
}
