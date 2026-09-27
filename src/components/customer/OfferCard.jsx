import { useState } from 'react'
import { Heart, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const categoryImg = {'offer-coffee':'☕','offer-milk':'🥛','offer-fruits':'🍎','offer-snacks':'🍟'}

export default function OfferCard({ offer, showReasons=false, onRedeem }) {
  const [saved,setSaved]=useState(false), [redeemed,setRedeemed]=useState(false)
  return (
    <div className="group card-premium overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#c9794e]/40">
      <div className="relative h-40 bg-[radial-gradient(circle_at_50%_20%,rgba(184,95,55,.18),transparent_45%),linear-gradient(135deg,#fff1e7,#f5e5d9)] flex items-center justify-center text-6xl">
        <div className="absolute w-28 h-28 rounded-full border border-[#b85f37]/15 animate-pulse-slow"/>
        <span className="relative drop-shadow-[0_0_20px_rgba(79,195,255,.25)] group-hover:scale-110 transition-transform duration-500">{categoryImg[offer.id] || '🎁'}</span>
        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#b85f37] to-[#d17b51] rounded-full px-2.5 py-1 shadow-glow">{offer.discount}</span>
        <button onClick={()=>setSaved(v=>!v)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#fffaf5]/85 border border-[#e4cfc0] backdrop-blur-md flex items-center justify-center hover:bg-[#f4e3d6] transition-colors">
          <Heart size={14} className={saved?'text-pink-400 fill-pink-400':'text-[#5b392b]/75'}/>
        </button>
        <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest text-cyan-200/80 bg-cyan-400/10 border border-cyan-300/15 rounded-full px-2 py-1">AI matched</span>
      </div>
      <div className="p-4.5 p-5">
        <div className="flex items-start justify-between gap-3">
          <div><h3 className="font-semibold text-sm">{offer.name}</h3><p className="text-xs text-[#765345]/65 mt-1">{offer.store} · {offer.distance}</p></div>
          <ArrowUpRight size={15} className="text-[#9b7561]/65 group-hover:text-[#b85f37] transition-colors"/>
        </div>
        <div className="flex items-baseline gap-2 my-3"><span className="text-base font-bold text-[#b85f37]">₹{offer.price}</span><span className="text-xs text-[#9b7561]/65 line-through">₹{offer.original}</span></div>
        {offer.tag && <p className="text-xs text-[#7b4b68] flex items-center gap-1 mb-3"><Sparkles size={11}/>{offer.tag}</p>}
        {showReasons && <div className="mb-3 border-t border-[#ead9ca] pt-3"><p className="text-[10px] uppercase tracking-wider text-[#8b6654]/65 mb-2">Why this offer?</p><ul className="space-y-1.5">{offer.reasons.map(r=><li key={r} className="text-xs text-[#6b4737]/75 flex items-center gap-1.5"><CheckCircle2 size={11} className="text-[#b85f37] shrink-0"/>{r}</li>)}</ul></div>}
        <p className="text-[10px] text-[#9b7561]/65 mb-3">Valid till {offer.expiry}</p>
        <button onClick={()=>{setRedeemed(true);onRedeem?.(offer)}} disabled={redeemed} className="w-full rounded-xl bg-gradient-to-r from-[#b85f37] to-[#d17b51] hover:from-sky-400 hover:to-blue-500 disabled:from-cyan-400 disabled:to-cyan-500 disabled:text-ink-950 transition-all py-2.5 text-xs font-semibold shadow-glow hover:-translate-y-0.5">{redeemed?'Redeemed ✓':'Redeem Offer →'}</button>
      </div>
    </div>
  )
}
