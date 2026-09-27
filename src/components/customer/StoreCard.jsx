import { Star, MapPin, Gift } from 'lucide-react'

const emojiFor = {
  freshmart: '🛒',
  dmart: '🏬',
  valuemart: '🏪',
  'reliance-fresh': '🥦',
}

export default function StoreCard({ store, onView, onDirections }) {
  return (
    <div className="flex items-center gap-4 bg-ink-900/50 border border-white/5 rounded-xl p-3 hover:border-white/15 transition-colors">
      <div className="w-14 h-14 rounded-lg bg-ink-800 flex items-center justify-center text-2xl shrink-0">
        {emojiFor[store.id] || '🏪'}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium truncate">{store.name}</p>
        <p className="text-xs text-white/40 truncate">{store.category}</p>
        <div className="flex items-center gap-3 mt-1 text-xs">
          <span className="text-white/50 flex items-center gap-1"><MapPin size={11} /> {store.distance}</span>
          <span className="text-mint-400">{store.status}</span>
          {store.offers != null && (
            <span className="text-rose-400 flex items-center gap-1"><Gift size={11} /> {store.offers} offers</span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end gap-1.5 shrink-0">
        {store.rating && (
          <span className="text-xs text-amber-400 flex items-center gap-1">
            <Star size={11} fill="currentColor" strokeWidth={0} /> {store.rating}
          </span>
        )}
        <button
          onClick={() => onView?.(store)}
          className="text-xs rounded-full border border-white/15 hover:border-rose-500/50 hover:text-rose-300 px-3 py-1.5 transition-colors"
        >
          View
        </button>
      </div>
    </div>
  )
}
