import { Link } from 'react-router-dom'
import {
  Compass,
  MapPinned,
  Crown,
  Wallet,
  Tag,
  Heart,
  Navigation2,
  Clock,
  CheckCircle2,
  Circle,
  Car,
  Bell,
  CheckCircle,
  Star,
  Gift,
  Ticket,
  ArrowRight,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import SectionCard from '../../components/customer/SectionCard'
import StatCard from '../../components/customer/StatCard'
import GeoFenceMap from '../../components/customer/GeoFenceMap'
import OfferCard from '../../components/customer/OfferCard'
import StoreCard from '../../components/customer/StoreCard'
import heroImg from '../../assets/hero-store.jpg'
import {
  summary,
  nearbyStores,
  geoFenceStore,
  geoFenceTimeline,
  offers,
  notifications,
  recentPurchases,
  loyalty,
  savingsStats,
  favoriteProducts,
  favoriteStoreNames,
  coupons,
} from '../../data/customerMock'

const mapStores = [
  { name: 'FreshMart', distance: '120 m', x: '48%', y: '42%', selected: true, radius: 140 },
  { name: 'ValueMart', distance: '800 m', x: '78%', y: '30%' },
  { name: 'D-Mart', distance: '450 m', x: '20%', y: '20%' },
]

export default function DashboardHome() {
  const { user } = useAuth()
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening'
  const firstName = user?.fullName?.split(' ')[0] || 'there'

  return (
    <div className="space-y-6">
      {/* welcome + summary */}
      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-5">
        <div className="relative rounded-2xl overflow-hidden min-h-[220px] flex items-end">
          <img src={heroImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/60 to-ink-950/10" />
          <div className="relative p-7">
            <p className="text-sm text-rose-300 mb-1">{greeting},</p>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{firstName}! 👋</h1>
            <p className="text-sm text-white/60 max-w-sm mb-5">
              Discover personalized offers, nearby stores and smarter shopping experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/dashboard/customer/offers"
                className="inline-flex items-center gap-2 rounded-full bg-rose-500 hover:bg-rose-600 transition-all px-5 py-2.5 text-sm font-semibold hover:-translate-y-0.5"
              >
                <Tag size={15} /> Explore Offers
              </Link>
              <Link
                to="/dashboard/customer/nearby-stores"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 transition-colors px-5 py-2.5 text-sm font-semibold"
              >
                <Compass size={15} /> Find Nearby Stores
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3.5">
          <StatCard icon={Crown} iconBg="bg-amber-500/15 text-amber-400" value={summary.loyaltyPoints.toLocaleString()} label={`${summary.loyaltyLevel} Member`} trend={`${summary.pointsToNext} to ${summary.nextLevel}`} />
          <StatCard icon={Wallet} iconBg="bg-mint-500/15 text-mint-400" value={`₹${summary.totalSavings.toLocaleString()}`} label="Total Savings" trend={`↑ ${summary.savingsChangePct}%`} sub="this month" />
          <StatCard icon={Tag} iconBg="bg-rose-500/15 text-rose-400" value={summary.offersRedeemed} label="Offers Redeemed" trend={`↑ ${summary.offersChangePct}%`} sub="this month" />
          <StatCard icon={Heart} iconBg="bg-violet-500/15 text-violet-400" value={summary.favoriteStores} label="Favorite Stores" sub="saved" />
        </div>
      </div>

      {/* location + nearby + directions */}
      <div className="grid lg:grid-cols-3 gap-5">
        <SectionCard title="Your Current Location" viewAllTo="/dashboard/customer/location" className="lg:col-span-1">
          <GeoFenceMap stores={mapStores} height="h-48" />
          <div className="mt-4 flex items-center gap-2 bg-mint-500/10 border border-mint-500/25 rounded-xl px-3.5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-mint-400 shrink-0" />
            <p className="text-xs text-mint-300">
              You're inside the offer zone! Personalized offers available at {geoFenceStore.name}.
            </p>
          </div>
          <div className="mt-4 space-y-2">
            {geoFenceTimeline.slice(0, 4).map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-xs">
                {t.done ? <CheckCircle2 size={13} className="text-mint-400 shrink-0" /> : <Circle size={13} className="text-white/20 shrink-0" />}
                <span className={t.done ? 'text-white/60' : 'text-white/30'}>{t.label}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Nearby Stores" viewAllTo="/dashboard/customer/nearby-stores">
          <div className="space-y-2.5">
            {nearbyStores.slice(0, 3).map((s) => (
              <StoreCard key={s.id} store={s} />
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Directions">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-11 h-11 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0">
              <Navigation2 size={19} />
            </span>
            <div>
              <p className="font-medium text-sm">{geoFenceStore.name}</p>
              <p className="text-xs text-white/45">{geoFenceStore.distance} away</p>
            </div>
          </div>
          <div className="flex gap-4 mb-4 text-sm">
            <span className="flex items-center gap-1.5 text-white/60"><Car size={14} /> 4 min</span>
            <span className="flex items-center gap-1.5 text-white/60"><MapPinned size={14} /> 1.2 km</span>
          </div>
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors px-5 py-2.5 text-sm font-semibold">
            Get Directions <ArrowRight size={14} />
          </button>
        </SectionCard>
      </div>

      {/* offers + purchases/notifications */}
      <div className="grid lg:grid-cols-[1fr_320px] gap-5">
        <SectionCard title="Personalized Offers For You" viewAllTo="/dashboard/customer/offers">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {offers.map((o, i) => (
              <OfferCard key={o.id} offer={o} showReasons={i === 0} />
            ))}
          </div>
        </SectionCard>

        <div className="space-y-5">
          <SectionCard title="Recent Purchases" viewAllTo="/dashboard/customer/purchases">
            <div className="space-y-3">
              {recentPurchases.slice(0, 3).map((p) => (
                <div key={p.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium">{p.store}</p>
                    <p className="text-xs text-white/40">{p.product}</p>
                  </div>
                  <span className="text-rose-300 font-medium">₹{p.amount}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Notifications" viewAllTo="/dashboard/customer/notifications">
            <div className="space-y-3">
              {notifications.slice(0, 3).map((n) => (
                <div key={n.id} className="flex gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0">
                    {n.icon === 'CheckCircle2' ? <CheckCircle size={13} /> : n.icon === 'Star' ? <Star size={13} /> : <Bell size={13} />}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium truncate">{n.title}</p>
                    <p className="text-xs text-white/40 truncate">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>

      {/* loyalty / savings / favorites / coupons */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <SectionCard title="Loyalty Preview" viewAllTo="/dashboard/customer/loyalty">
          <p className="text-sm font-semibold text-amber-400 mb-1">{loyalty.level} Member</p>
          <p className="text-xl font-bold mb-3">{loyalty.points.toLocaleString()} pts</p>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-2">
            <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500" style={{ width: '78%' }} />
          </div>
          <p className="text-xs text-white/40">{loyalty.pointsToNext} points to {loyalty.nextLevel}</p>
        </SectionCard>

        <SectionCard title="Savings Preview" viewAllTo="/dashboard/customer/savings">
          <p className="text-xl font-bold text-mint-400 mb-1">₹{savingsStats.totalSaved.toLocaleString()}</p>
          <p className="text-xs text-white/40 mb-3">saved this month</p>
          <p className="text-xs text-white/50">Best saving: <span className="text-white/80">₹{savingsStats.bestSaving}</span></p>
          <p className="text-xs text-white/50">Offers redeemed: <span className="text-white/80">{savingsStats.offersRedeemed}</span></p>
        </SectionCard>

        <SectionCard title="Favorites" viewAllTo="/dashboard/customer/favorites">
          <p className="text-xs text-white/40 mb-1.5">Products</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {favoriteProducts.map((p) => (
              <span key={p} className="text-xs bg-rose-500/10 text-rose-300 border border-rose-500/20 rounded-full px-2.5 py-1">{p}</span>
            ))}
          </div>
          <p className="text-xs text-white/40 mb-1.5">Stores</p>
          <div className="flex flex-wrap gap-1.5">
            {favoriteStoreNames.map((s) => (
              <span key={s} className="text-xs bg-white/5 text-white/60 border border-white/10 rounded-full px-2.5 py-1">{s}</span>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Active Coupons" viewAllTo="/dashboard/customer/coupons">
          {coupons.active.slice(0, 1).map((c) => (
            <div key={c.code}>
              <p className="text-xs font-mono text-rose-300 mb-1.5">{c.code}</p>
              <p className="text-sm font-medium mb-1">{c.offer}</p>
              <p className="text-xs text-white/40 mb-3">{c.store} · Valid until {c.expiry}</p>
              <button className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors py-2 text-xs font-semibold">
                <Ticket size={13} /> Redeem
              </button>
            </div>
          ))}
        </SectionCard>
      </div>

      <div className="flex items-center gap-2 text-xs text-white/25 justify-center">
        <Gift size={13} /> Illustrative demo data — wire this dashboard up to your offers, loyalty, and POS services in production.
      </div>
    </div>
  )
}
