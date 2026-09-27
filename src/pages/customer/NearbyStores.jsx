import { useState } from 'react'
import SectionCard from '../../components/customer/SectionCard'
import GeoFenceMap from '../../components/customer/GeoFenceMap'
import StoreCard from '../../components/customer/StoreCard'
import { nearbyStores } from '../../data/customerMock'

const categories = ['All', 'Grocery & Essentials', 'Supermarket', 'Daily Needs', 'Groceries']

const mapStores = [
  { name: 'FreshMart', distance: '120 m', x: '48%', y: '42%', selected: true, radius: 140 },
  { name: 'D-Mart', distance: '450 m', x: '20%', y: '22%' },
  { name: 'ValueMart', distance: '800 m', x: '78%', y: '30%' },
  { name: 'Reliance Fresh', distance: '1.2 km', x: '85%', y: '72%' },
]

export default function NearbyStores() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? nearbyStores : nearbyStores.filter((s) => s.category === category)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">Nearby Stores</h1>
        <p className="text-sm text-white/45">Stores around you, sorted by distance.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`text-xs rounded-full px-3.5 py-1.5 border transition-colors ${
              category === c ? 'bg-rose-500/20 border-rose-500/50 text-rose-300' : 'border-white/10 text-white/50 hover:border-white/25'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <SectionCard title="Map View">
          <GeoFenceMap stores={mapStores} height="h-80" />
        </SectionCard>

        <SectionCard title="List View">
          <div className="space-y-3">
            {filtered.map((s) => (
              <StoreCard key={s.id} store={s} />
            ))}
            {filtered.length === 0 && <p className="text-sm text-white/40">No stores in this category nearby.</p>}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
