import { Star, MapPin, Gift, ArrowUpRight } from 'lucide-react'

const emojiFor={freshmart:'🛒',dmart:'🏬',valuemart:'🏪','reliance-fresh':'🥦'}

export default function StoreCard({store,onView,onDirections}){
 return <div className="group flex items-center gap-3.5 bg-[#fffaf5]/75 border border-[#ead9ca] rounded-2xl p-3 hover:border-[#c9794e]/35 hover:bg-white transition-all duration-300 hover:-translate-y-0.5">
  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#f9e5d7] to-[#f1e6f0] border border-[#ead9ca] flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">{emojiFor[store.id]||'🏪'}<span className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-[#7f9d70] shadow-cyan"/></div>
  <div className="min-w-0 flex-1"><p className="text-sm font-medium truncate">{store.name}</p><p className="text-xs text-[#8b6654]/70 truncate mt-0.5">{store.category}</p><div className="flex items-center gap-3 mt-1.5 text-[10px]"><span className="text-[#765345]/70 flex items-center gap-1"><MapPin size={10}/>{store.distance}</span><span className="text-[#658456]">{store.status}</span>{store.offers!=null&&<span className="text-[#b85f37] flex items-center gap-1"><Gift size={10}/>{store.offers} offers</span>}</div></div>
  <div className="flex flex-col items-end gap-1.5 shrink-0">{store.rating&&<span className="text-[10px] text-[#b58b37] flex items-center gap-1"><Star size={10} fill="currentColor" strokeWidth={0}/>{store.rating}</span>}<button onClick={()=>onView?.(store)} className="text-[10px] rounded-lg border border-[#e4cfc0] hover:border-[#c9794e]/40 hover:text-[#8e472d] px-2.5 py-1.5 transition-colors flex items-center gap-1">View<ArrowUpRight size={10}/></button></div>
 </div>
}
