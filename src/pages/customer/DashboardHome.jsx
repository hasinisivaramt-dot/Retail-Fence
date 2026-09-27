import { Link } from 'react-router-dom'
import heroStore from '../../assets/hero-store.jpg'
import { Compass, MapPinned, Crown, Wallet, Tag, Heart, Navigation2, CheckCircle2, Circle, Car, Bell, CheckCircle, Star, Gift, Ticket, ArrowRight, Sparkles, Zap, Radio, TrendingUp } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import SectionCard from '../../components/customer/SectionCard'
import StatCard from '../../components/customer/StatCard'
import GeoFenceMap from '../../components/customer/GeoFenceMap'
import OfferCard from '../../components/customer/OfferCard'
import StoreCard from '../../components/customer/StoreCard'
import {
 summary, nearbyStores, geoFenceStore, geoFenceTimeline, offers, notifications, recentPurchases, loyalty, savingsStats, favoriteProducts, favoriteStoreNames, coupons,
} from '../../data/customerMock'

const mapStores=[{name:'FreshMart',distance:'120 m',x:'48%',y:'42%',selected:true,radius:150},{name:'ValueMart',distance:'800 m',x:'78%',y:'30%'},{name:'D-Mart',distance:'450 m',x:'20%',y:'20%'}]

export default function DashboardHome(){
 const {user}=useAuth()
 const hour=new Date().getHours()
 const greeting=hour<12?'Good Morning':hour<17?'Good Afternoon':'Good Evening'
 const firstName=user?.fullName?.split(' ')[0]||'there'
 const directions=()=>window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(geoFenceStore.name)}`,'_blank','noopener,noreferrer')
 return <div className="space-y-6">
  <section className="relative overflow-hidden rounded-[2rem] border border-[#e4cfc0] bg-[#fffaf5] shadow-[0_24px_70px_rgba(91,48,27,.10)] min-h-[310px]">
   <img src={heroStore} alt="Smart Geo-Offer store and geo-fence" className="absolute inset-y-0 right-0 w-[48%] h-full object-cover" />
   <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf5] via-[#fffaf5]/95 to-[#fffaf5]/15" />
   <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(190,91,52,.16),transparent_34%)]" />
   <div className="relative z-10 max-w-2xl p-7 sm:p-9 lg:p-10">
    <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.2em] text-[#b85f37] bg-[#f9e5d7] border border-[#e7c7b4] rounded-full px-3 py-1.5"><Radio size={12} className="animate-pulse"/> Personal AI active</div>
    <p className="text-sm text-[#8e5a43] mt-5 mb-1">{greeting},</p>
    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#3b2418]">{firstName}! <span className="text-[#b85f37]">👋</span></h1>
    <p className="text-sm text-[#6b4737] max-w-xl mt-3 mb-6 leading-relaxed">Your AI-powered shopping intelligence is watching for relevant offers around you.</p>
    <div className="flex flex-wrap gap-3"><Link to="/dashboard/customer/offers" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#b85f37] to-[#d17b51] text-white px-4 py-3 text-sm font-semibold shadow-glow hover:-translate-y-0.5 transition-all"><Tag size={15}/>Explore Offers<ArrowRight size={14}/></Link><Link to="/dashboard/customer/nearby-stores" className="inline-flex items-center gap-2 rounded-xl bg-[#fffaf5]/90 border border-[#dec5b5] px-4 py-3 text-sm font-semibold text-[#5b392b] hover:text-[#8e472d] hover:bg-white transition-all"><Compass size={15}/>Nearby Stores</Link></div>
   </div>
   <div className="absolute right-[12%] top-[22%] hidden lg:block w-52 h-52 rounded-full border border-white/60 shadow-[0_0_0_18px_rgba(255,255,255,.10),0_0_0_42px_rgba(255,255,255,.06)] animate-pulse-slow" />
   <div className="absolute right-[18%] top-[36%] hidden lg:flex w-20 h-20 rounded-full bg-[#fffaf5]/90 border border-[#ead9ca] shadow-xl backdrop-blur items-center justify-center flex-col"><MapPinned className="text-[#b85f37]" size={23}/><span className="text-[8px] uppercase tracking-widest text-[#8b6654] mt-1">Geo-fence</span><span className="text-xs font-semibold text-[#3b2418]">LIVE</span></div>
   <div className="absolute right-[7%] top-[17%] hidden lg:block rounded-xl bg-[#fffaf5]/95 border border-[#ead9ca] px-3 py-2 shadow-lg animate-float"><div className="text-[9px] text-[#b85f37]">ENTRY DETECTED</div><div className="text-xs font-semibold mt-1 text-[#3b2418]">FreshMart</div></div>
  </section>

  <div className="grid grid-cols-2 xl:grid-cols-4 gap-3.5">
   <StatCard icon={Crown} iconBg="bg-amber-400/10 text-amber-300" value={summary.loyaltyPoints.toLocaleString()} label={`${summary.loyaltyLevel} Member`} trend={`${summary.pointsToNext} to ${summary.nextLevel}`}/>
   <StatCard icon={Wallet} iconBg="bg-cyan-400/10 text-[#7f9d70]" value={`₹${summary.totalSavings.toLocaleString()}`} label="Total Savings" trend={`↑ ${summary.savingsChangePct}%`} sub="this month"/>
   <StatCard icon={Tag} iconBg="bg-sky-400/10 text-sky-300" value={summary.offersRedeemed} label="Offers Redeemed" trend={`↑ ${summary.offersChangePct}%`} sub="this month"/>
   <StatCard icon={Heart} iconBg="bg-violet-400/10 text-[#9a6a85]" value={summary.favoriteStores} label="Favorite Stores" sub="saved"/>
  </div>

  <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-5">
   <SectionCard title="Your Geo-Fence" viewAllTo="/dashboard/customer/location">
    <div className="grid xl:grid-cols-[1.2fr_.8fr] gap-5">
     <GeoFenceMap stores={mapStores} height="h-64" />
     <div className="flex flex-col justify-center">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#7f9d70]">
       <span className="w-2 h-2 rounded-full bg-[#7f9d70] animate-ping-slow" />
       Inside offer zone
      </div>
      <h3 className="text-xl font-semibold mt-3">{geoFenceStore.name}</h3>
      <p className="text-xs text-[#765345]/65 mt-1">
       {geoFenceStore.distance} away · personalized offers available
      </p>
      <div className="mt-5 space-y-2.5">
       {geoFenceTimeline.slice(0, 4).map((t) => (
        <div key={t.label} className="flex items-center gap-2 text-xs">
         {t.done ? (
          <CheckCircle2 size={13} className="text-[#7f9d70]" />
         ) : (
          <Circle size={13} className="text-[#9b7561]/55" />
         )}
         <span className={t.done ? 'text-[#5b392b]/75' : 'text-[#9b7561]/65'}>
          {t.label}
         </span>
        </div>
       ))}
      </div>
      <button
       onClick={directions}
       className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#c5d2ba] bg-[#edf4e9] text-[#658456] py-2.5 text-xs font-semibold hover:bg-[#e4efdf] transition-colors"
      >
       <Navigation2 size={13} />
       Get Directions
       <ArrowRight size={13} />
      </button>
     </div>
    </div>
   </SectionCard>
   <SectionCard title="Nearby Stores" viewAllTo="/dashboard/customer/nearby-stores"><div className="space-y-2.5">{nearbyStores.slice(0,3).map(s=><StoreCard key={s.id} store={s}/>)}</div></SectionCard>
  </div>

  <SectionCard title="AI Recommended For You" viewAllTo="/dashboard/customer/offers"><div className="flex items-center gap-2 text-[10px] uppercase tracking-[.18em] text-[#9a6a85] mb-4"><Sparkles size={12}/> Based on your purchase intelligence</div><div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">{offers.map((o,i)=><OfferCard key={o.id} offer={o} showReasons={i===0}/>)}</div></SectionCard>

  <div className="grid lg:grid-cols-[1fr_320px] gap-5">
   <SectionCard title="Shopping Intelligence"><div className="grid sm:grid-cols-3 gap-3"><div className="rounded-2xl bg-[#fff7f0] border border-[#ead9ca] p-4"><TrendingUp size={17} className="text-[#b85f37]"/><p className="text-2xl font-semibold mt-4 text-[#3b2418]">+18%</p><p className="text-[10px] uppercase tracking-wider text-[#8b6654] mt-1">Savings trend</p></div><div className="rounded-2xl bg-[#fff7f0] border border-[#ead9ca] p-4"><Zap size={17} className="text-[#7b4b68]"/><p className="text-2xl font-semibold mt-4 text-[#3b2418]">86%</p><p className="text-[10px] uppercase tracking-wider text-[#8b6654] mt-1">AI relevance</p></div><div className="rounded-2xl bg-[#fff7f0] border border-[#ead9ca] p-4"><Star size={17} className="text-[#b58b37]"/><p className="text-2xl font-semibold mt-4 text-[#3b2418]">Gold</p><p className="text-[10px] uppercase tracking-wider text-[#8b6654] mt-1">Loyalty tier</p></div></div></SectionCard>
   <SectionCard title="Notifications" viewAllTo="/dashboard/customer/notifications"><div className="space-y-3">{notifications.slice(0,3).map(n=><div key={n.id} className="flex gap-2.5"><span className="w-8 h-8 rounded-xl bg-[#f9e5d7] text-[#b85f37] flex items-center justify-center shrink-0">{n.icon==='CheckCircle2'?<CheckCircle size={13}/>:n.icon==='Star'?<Star size={13}/>:<Bell size={13}/>}</span><div className="min-w-0"><p className="text-xs font-medium truncate text-[#3b2418]">{n.title}</p><p className="text-[11px] text-[#8b6654] truncate mt-0.5">{n.desc}</p></div></div>)}</div></SectionCard>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
   <SectionCard title="Loyalty" viewAllTo="/dashboard/customer/loyalty"><p className="text-sm font-semibold text-[#9b6d1e]">{loyalty.level} Member</p><p className="text-2xl font-semibold mt-1 text-[#3b2418]">{loyalty.points.toLocaleString()} pts</p><div className="h-1.5 rounded-full bg-[#ead9ca] overflow-hidden mt-4"><div className="h-full bg-gradient-to-r from-[#d1a34c] to-[#b85f37] rounded-full" style={{width:'78%'}}/></div><p className="text-[11px] text-[#8b6654] mt-2">{loyalty.pointsToNext} points to {loyalty.nextLevel}</p></SectionCard>
   <SectionCard title="Savings" viewAllTo="/dashboard/customer/savings"><p className="text-2xl font-semibold text-[#b85f37]">₹{savingsStats.totalSaved.toLocaleString()}</p><p className="text-[11px] text-[#8b6654] mt-1">saved this month</p><p className="text-xs text-[#6b4737] mt-4">Best saving: <span className="text-[#3b2418] font-semibold">₹{savingsStats.bestSaving}</span></p></SectionCard>
   <SectionCard title="Favorites" viewAllTo="/dashboard/customer/favorites"><p className="text-[10px] uppercase tracking-wider text-[#9b7561] mb-2">Products</p><div className="flex flex-wrap gap-1.5">{favoriteProducts.map(p=><span key={p} className="text-[10px] bg-[#f1e6f0] text-[#7b4b68] border border-[#dfcedb] rounded-full px-2.5 py-1">{p}</span>)}</div><p className="text-[10px] uppercase tracking-wider text-[#9b7561] mt-4 mb-2">Stores</p><div className="flex flex-wrap gap-1.5">{favoriteStoreNames.map(s=><span key={s} className="text-[10px] bg-[#fff7f0] text-[#765345] border border-[#ead9ca] rounded-full px-2.5 py-1">{s}</span>)}</div></SectionCard>
   <SectionCard title="Active Coupon" viewAllTo="/dashboard/customer/coupons">{coupons.active.slice(0,1).map(c=><div key={c.code}><p className="text-xs font-mono text-[#b85f37]">{c.code}</p><p className="text-sm font-medium mt-2 text-[#3b2418]">{c.offer}</p><p className="text-[11px] text-[#8b6654] mt-1 mb-4">{c.store} · {c.expiry}</p><Link to="/dashboard/customer/coupons" className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#f9e5d7] border border-[#e5c8b7] py-2.5 text-xs font-semibold text-[#8e472d] hover:bg-[#f4daca] transition-all"><Ticket size={13}/>Redeem</Link></div>)}</SectionCard>
  </div>
  <div className="flex items-center gap-2 text-[10px] text-[#a48776] justify-center"><Gift size={12}/> Illustrative demo data — connect production offers, loyalty and POS services as needed.</div>
 </div>
}
