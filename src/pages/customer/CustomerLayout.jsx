import { useState } from 'react'
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'
import { MapPin, Search, Bell, ChevronDown, LayoutDashboard, Navigation, Store, Tag, Ticket, Receipt, Star, PiggyBank, BrainCircuit, Heart, User, Settings, HelpCircle, LogOut, ChevronRight, Sparkles } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { notifications as mockNotifications } from '../../data/customerMock'
import heroStore from '../../assets/hero-store.jpg'

const offerSubLinks=[{label:'Personalized',tab:'recommended'},{label:'Nearby Offers',tab:'nearby'},{label:'Saved Offers',tab:'saved'},{label:'Expiring Soon',tab:'expiring'},{label:'Used Offers',tab:'used'},{label:'Expired Offers',tab:'expired'}]
const navItems=[
 {label:'Dashboard',to:'/dashboard/customer',icon:LayoutDashboard,end:true},
 {label:'Location & Geo-Fence',to:'/dashboard/customer/location',icon:Navigation},
 {label:'Nearby Stores',to:'/dashboard/customer/nearby-stores',icon:Store},
 {label:'Smart Offers',to:'/dashboard/customer/offers',icon:Tag,subLinks:offerSubLinks},
 {label:'My Coupons',to:'/dashboard/customer/coupons',icon:Ticket},
 {label:'Purchase History',to:'/dashboard/customer/purchases',icon:Receipt},
 {label:'Loyalty & Rewards',to:'/dashboard/customer/loyalty',icon:Star},
 {label:'My Savings',to:'/dashboard/customer/savings',icon:PiggyBank},
 {label:'Shopping Insights',to:'/dashboard/customer/insights',icon:BrainCircuit},
 {label:'Favorites',to:'/dashboard/customer/favorites',icon:Heart},
]
const bottomItems=[{label:'Profile',to:'/dashboard/customer/profile',icon:User},{label:'Settings',to:'/dashboard/customer/settings',icon:Settings},{label:'Help & Support',to:'/dashboard/customer/help',icon:HelpCircle}]

export default function CustomerLayout(){
 const {user,logout}=useAuth(); const navigate=useNavigate()
 const [offersOpen,setOffersOpen]=useState(false),[profileOpen,setProfileOpen]=useState(false),[bellOpen,setBellOpen]=useState(false)
 const unread=mockNotifications.filter(n=>n.unread).length
 return <div className="min-h-screen bg-[#fbf3eb] text-[#3b2418] lg:flex">
  <aside className="hidden lg:flex w-[275px] shrink-0 flex-col border-r border-[#ead9ca] bg-[#fffaf5]/92 backdrop-blur-2xl h-screen sticky top-0 shadow-[8px_0_40px_rgba(91,48,27,.05)]">
   <Link to="/" className="flex items-center gap-3 px-6 h-20 shrink-0 border-b border-[#ead9ca]">
    <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f2b28e] to-[#b85f37] flex items-center justify-center text-white shadow-glow"><MapPin size={18}/></span>
    <div><p className="font-display font-semibold text-sm text-[#3b2418]">Smart <span className="gradient-text">Geo-Offer</span></p><p className="text-[10px] uppercase tracking-[.18em] text-[#8b6654] mt-0.5">Customer intelligence</p></div>
   </Link>
   <div className="px-4 py-5">
    <div className="rounded-2xl border border-[#e6cfc0] bg-gradient-to-br from-[#fff4ec] via-[#fffaf5] to-[#f3e6dc] p-4 shadow-[0_12px_35px_rgba(91,48,27,.06)]">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#b85f37]"><Sparkles size={12}/> AI Shopping Mode</div>
      <p className="text-xs text-[#765345] mt-2 leading-relaxed">Personalized signals are active around you.</p>
      <div className="mt-3 flex items-center gap-2 text-[10px] text-[#7f9d70]"><span className="w-1.5 h-1.5 rounded-full bg-[#7f9d70] animate-ping-slow"/> Live</div>
    </div>
   </div>
   <nav className="flex-1 overflow-y-auto px-3 space-y-1">
    {navItems.map(({label,to,icon:Icon,end,subLinks})=><div key={label}>
      <NavLink to={to} end={end} onClick={()=>subLinks&&setOffersOpen(v=>!v)} className={({isActive})=>`relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] transition-all ${isActive?'bg-gradient-to-r from-[#f6dfd0] to-[#fff7f0] text-[#3b2418] border border-[#e5c8b7] shadow-[inset_3px_0_0_#b85f37]':'text-[#765345] hover:text-[#3b2418] hover:bg-[#f7e9df] border border-transparent'}`}><Icon size={16}/><span className="flex-1">{label}</span>{subLinks&&<ChevronDown size={13} className={`transition-transform ${offersOpen?'rotate-180':''}`}/>}</NavLink>
      {subLinks&&offersOpen&&<div className="ml-8 mt-1 space-y-0.5 mb-1">{subLinks.map(s=><button key={s.tab} onClick={()=>navigate(`/dashboard/customer/offers?tab=${s.tab}`)} className="w-full text-left flex items-center gap-1.5 text-[11px] text-[#8b6654] hover:text-[#b85f37] rounded-lg px-3 py-1.5"><ChevronRight size={10}/>{s.label}</button>)}</div>}
    </div>)}
   </nav>
   <div className="px-3 pt-2 pb-4 space-y-1 border-t border-[#ead9ca]">{bottomItems.map(({label,to,icon:Icon})=><NavLink key={label} to={to} className={({isActive})=>`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] ${isActive?'bg-[#f6dfd0] text-[#8e472d]':'text-[#765345] hover:text-[#3b2418] hover:bg-[#f7e9df]'}`}><Icon size={15}/>{label}</NavLink>)}</div>
  </aside>

  <div className="flex-1 min-w-0 relative overflow-hidden">
   <div className="pointer-events-none absolute right-0 top-0 w-[520px] h-[520px] opacity-[.08] bg-cover bg-center rounded-bl-[120px]" style={{backgroundImage:`url(${heroStore})`}}/>
   <header className="sticky top-0 z-40 bg-[#fffaf5]/90 backdrop-blur-2xl border-b border-[#ead9ca] shadow-[0_8px_30px_rgba(91,48,27,.04)]">
    <div className="h-[76px] px-4 sm:px-6 flex items-center gap-4">
      <Link to="/" className="lg:hidden w-9 h-9 rounded-xl bg-gradient-to-br from-[#f2b28e] to-[#b85f37] text-white flex items-center justify-center shadow-glow"><MapPin size={17}/></Link>
      <div className="hidden sm:flex items-center flex-1 max-w-xl relative"><Search size={15} className="absolute left-4 text-[#9b7561]"/><input placeholder="Search offers, products or stores…" className="w-full bg-[#fffaf5] border border-[#e4cfc0] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#3b2418] placeholder:text-[#9b7561] outline-none focus:border-[#c9794e] focus:bg-white transition-all shadow-sm"/></div>
      <div className="flex-1 sm:flex-none"/>
      <div className="hidden md:flex items-center gap-2 text-xs text-[#765345] px-3 py-2 rounded-xl bg-[#fffaf5] border border-[#ead9ca]"><MapPin size={13} className="text-[#b85f37]"/> Hyderabad, Telangana</div>
      <div className="relative"><button onClick={()=>setBellOpen(v=>!v)} className="relative w-10 h-10 rounded-xl border border-[#ead9ca] bg-[#fffaf5] flex items-center justify-center text-[#6b4737] hover:border-[#c9794e] transition-colors"><Bell size={16}/>{unread>0&&<span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#b85f37] text-white text-[9px] flex items-center justify-center font-bold">{unread}</span>}</button>{bellOpen&&<div className="absolute right-0 mt-3 w-80 card-premium p-3 z-50"><p className="text-[10px] uppercase tracking-widest text-[#8b6654] px-2 pb-2">Live notifications</p>{mockNotifications.slice(0,4).map(n=><div key={n.id} className="px-2 py-2.5 rounded-xl hover:bg-[#f7e9df]"><p className="text-xs font-medium text-[#3b2418]">{n.title}</p><p className="text-[11px] text-[#8b6654] mt-0.5">{n.desc}</p></div>)}<Link to="/dashboard/customer/notifications" onClick={()=>setBellOpen(false)} className="block text-center text-xs text-[#b85f37] mt-2 pt-2 border-t border-[#ead9ca]">View All Notifications</Link></div>}</div>
      <div className="relative"><button onClick={()=>setProfileOpen(v=>!v)} className="flex items-center gap-2.5"><span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f4d4c1] to-[#e4b29a] border border-[#dfc2b2] text-[#8e472d] flex items-center justify-center text-sm font-semibold">{(user?.fullName||'U').charAt(0)}</span><span className="hidden sm:block text-xs text-[#6b4737]">Hi, {user?.fullName?.split(' ')[0]||'there'}</span><ChevronDown size={13} className="hidden sm:block text-[#9b7561]"/></button>{profileOpen&&<div className="absolute right-0 mt-3 w-52 card-premium p-1.5 z-50"><Link to="/dashboard/customer/profile" onClick={()=>setProfileOpen(false)} className="flex items-center gap-2 text-sm text-[#6b4737] hover:text-[#3b2418] hover:bg-[#f7e9df] rounded-lg px-3 py-2.5"><User size={14}/>Profile</Link><Link to="/dashboard/customer/settings" onClick={()=>setProfileOpen(false)} className="flex items-center gap-2 text-sm text-[#6b4737] hover:text-[#3b2418] hover:bg-[#f7e9df] rounded-lg px-3 py-2.5"><Settings size={14}/>Settings</Link><button onClick={logout} className="w-full flex items-center gap-2 text-sm text-[#a34d3c] hover:bg-[#fae7e1] rounded-lg px-3 py-2.5"><LogOut size={14}/>Logout</button></div>}</div>
    </div>
   </header>
   <div className="lg:hidden sticky top-[76px] z-30 bg-[#fffaf5]/95 backdrop-blur-xl border-b border-[#ead9ca] overflow-x-auto"><div className="flex gap-2 px-4 py-2.5 min-w-max">{navItems.slice(0,6).map(({label,to,icon:Icon,end})=><NavLink key={label} to={to} end={end} className={({isActive})=>`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[10px] border ${isActive?'bg-[#f6dfd0] text-[#8e472d] border-[#e5c8b7]':'text-[#765345] border-[#ead9ca]'}`}><Icon size={12}/>{label}</NavLink>)}</div></div>
   <main className="section-pad py-6 sm:py-8 relative"><Outlet/></main>
  </div>
 </div>
}
