import { useSearchParams } from 'react-router-dom'
import { Filter } from 'lucide-react'
import SectionCard from '../../components/customer/SectionCard'
import OfferCard from '../../components/customer/OfferCard'
import { offers, coupons } from '../../data/customerMock'

const tabs = [
  { key: 'recommended', label: 'Recommended' },
  { key: 'nearby', label: 'Nearby' },
  { key: 'trending', label: 'Trending' },
  { key: 'saved', label: 'Saved' },
  { key: 'expiring', label: 'Expiring Soon' },
  { key: 'used', label: 'Used' },
  { key: 'expired', label: 'Expired' },
]

const filterChips = ['Category', 'Distance', 'Discount', 'Store', 'Price', 'Expiry']

function offersFor(tab) {
  switch (tab) {
    case 'recommended':
      return offers.filter((o) => o.recommended).length ? offers.filter((o) => o.recommended) : offers
    case 'nearby':
      return [...offers].sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
    case 'trending':
      return [...offers].reverse()
    case 'expiring':
      return offers
    default:
      return []
  }
}

export default function SmartOffers() {
  const [params, setParams] = useSearchParams()
  const active = params.get('tab') || 'recommended'
  const list = offersFor(active)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">Smart Offers</h1>
        <p className="text-sm text-[#765345]/70">AI-curated offers based on your habits and location.</p>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-[#ead9ca] pb-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setParams({ tab: t.key })}
            className={`text-sm rounded-full px-4 py-2 transition-colors ${
              active === t.key ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'text-[#6b4737]/70 hover:text-[#3b2418] border border-transparent'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-[#8b6654]/70 flex items-center gap-1.5"><Filter size={12} /> Filter by</span>
        {filterChips.map((f) => (
          <span key={f} className="text-xs border border-[#e4cfc0] text-[#765345]/70 rounded-full px-3 py-1.5">
            {f}
          </span>
        ))}
      </div>

      {(active === 'used' || active === 'expired') && (
        <SectionCard>
          <div className="space-y-2">
            {(active === 'used' ? coupons.used : coupons.expired).map((c) => (
              <div key={c.code} className="flex items-center justify-between text-sm bg-[#fffaf5]/80 border border-[#ead9ca] rounded-xl px-4 py-3">
                <div>
                  <p className="font-mono text-xs text-[#6b4737]/70">{c.code}</p>
                  <p>{c.offer} · {c.store}</p>
                </div>
                <span className="text-xs text-[#8b6654]/70">Expiry {c.expiry}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {active === 'saved' && (
        <SectionCard>
          <p className="text-sm text-[#765345]/65 py-8 text-center">
            No saved offers yet — tap the heart on any offer to save it here.
          </p>
        </SectionCard>
      )}

      {list.length > 0 && (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {list.map((o) => (
            <OfferCard key={o.id} offer={o} showReasons />
          ))}
        </div>
      )}
    </div>
  )
}
