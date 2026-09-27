import { useState } from 'react'
import { Heart } from 'lucide-react'
import SectionCard from '../../components/customer/SectionCard'
import OfferCard from '../../components/customer/OfferCard'
import { offers, favoriteStoreNames, favoriteProducts, nearbyStores } from '../../data/customerMock'

const tabs = ['Offers', 'Stores', 'Products']

export default function Favorites() {
  const [tab, setTab] = useState('Offers')
  const favoriteStores = nearbyStores.filter((s) => favoriteStoreNames.includes(s.name))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">Favorites</h1>
        <p className="text-sm text-[#765345]/70">Everything you've saved for later.</p>
      </div>

      <div className="flex gap-2 border-b border-[#ead9ca] pb-4">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-sm rounded-full px-4 py-2 transition-colors ${
              tab === t ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'text-[#6b4737]/70 hover:text-[#3b2418] border border-transparent'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Offers' && (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {offers.slice(0, 2).map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      )}

      {tab === 'Stores' && (
        <div className="grid sm:grid-cols-2 gap-4">
          {favoriteStores.map((s) => (
            <SectionCard key={s.id}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-xs text-[#765345]/65">{s.category} · {s.distance}</p>
                </div>
                <Heart size={16} className="text-rose-500 fill-rose-500" />
              </div>
            </SectionCard>
          ))}
        </div>
      )}

      {tab === 'Products' && (
        <div className="grid sm:grid-cols-3 gap-4">
          {favoriteProducts.map((p) => (
            <SectionCard key={p}>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{p}</p>
                <Heart size={16} className="text-rose-500 fill-rose-500" />
              </div>
            </SectionCard>
          ))}
        </div>
      )}
    </div>
  )
}
