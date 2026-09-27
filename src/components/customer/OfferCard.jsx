import { useState } from 'react'
import { Heart, Sparkles, CheckCircle2 } from 'lucide-react'

const categoryImg = {
  'offer-coffee': '☕',
  'offer-milk': '🥛',
  'offer-fruits': '🍎',
  'offer-snacks': '🍟',
}

export default function OfferCard({ offer, showReasons = false, onRedeem }) {
  const [saved, setSaved] = useState(false)
  const [redeemed, setRedeemed] = useState(false)

  return (
    <div className="group card overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15">
      <div className="relative h-32 bg-gradient-to-br from-ink-800 to-ink-900 flex items-center justify-center text-5xl">
        {categoryImg[offer.id] || '🎁'}
        <span className="absolute top-3 left-3 text-xs font-bold bg-rose-500 rounded-full px-2.5 py-1">
          {offer.discount}
        </span>
        <button
          onClick={() => setSaved((v) => !v)}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-ink-950/70 flex items-center justify-center transition-colors hover:bg-ink-950"
        >
          <Heart size={14} className={saved ? 'text-rose-500 fill-rose-500' : 'text-white/70'} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1">{offer.name}</h3>
        <p className="text-xs text-white/45 mb-2">{offer.store} · {offer.distance}</p>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-sm font-bold text-rose-400">₹{offer.price}</span>
          <span className="text-xs text-white/30 line-through">₹{offer.original}</span>
        </div>

        {offer.tag && (
          <p className="text-xs text-mint-400 flex items-center gap-1 mb-3">
            <Sparkles size={11} /> {offer.tag}
          </p>
        )}

        {showReasons && (
          <div className="mb-3 border-t border-white/5 pt-3">
            <p className="text-xs text-white/40 mb-1.5">Why this offer?</p>
            <ul className="space-y-1">
              {offer.reasons.map((r) => (
                <li key={r} className="text-xs text-white/60 flex items-center gap-1.5">
                  <CheckCircle2 size={11} className="text-mint-400 shrink-0" /> {r}
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-[11px] text-white/30 mb-3">Valid till {offer.expiry}</p>

        <button
          onClick={() => {
            setRedeemed(true)
            onRedeem?.(offer)
          }}
          disabled={redeemed}
          className="w-full rounded-full bg-rose-500 hover:bg-rose-600 disabled:bg-mint-500 disabled:text-ink-950 transition-colors text-sm font-semibold py-2"
        >
          {redeemed ? 'Redeemed ✓' : 'Redeem Now'}
        </button>
      </div>
    </div>
  )
}
