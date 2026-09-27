import { Clock, XCircle, CheckCircle2, Footprints, Percent, Megaphone, Store, MapPin, ArrowUpRight, Sparkles } from 'lucide-react'
import DashboardShell from './DashboardShell'
import { useAuth } from '../../context/AuthContext'
import heroStore from '../../assets/hero-store.jpg'

export default function RetailerDashboard() {
  const { user } = useAuth()
  if (user.status === 'pending') return <DashboardShell accent="mint" roleLabel="Retailer"><StatusScreen icon={Clock} tone="text-[#9b6d1e] bg-[#fbf0d9] border-[#ead7a8]" title="Account Pending Approval" desc="Your retailer registration is being reviewed by the administrator. You'll be able to access the Retailer Portal once it's approved." /></DashboardShell>
  if (user.status === 'rejected') return <DashboardShell accent="mint" roleLabel="Retailer"><StatusScreen icon={XCircle} tone="text-[#a34d3c] bg-[#fae7e1] border-[#e6c0b5]" title="Registration Rejected" desc={user.rejectionReason || 'Business verification could not be completed. Please contact support to resubmit your details.'} /></DashboardShell>

  return <DashboardShell accent="mint" roleLabel="Retailer">
    <section className="relative overflow-hidden rounded-[2rem] border border-[#e4cfc0] bg-[#fffaf5] shadow-[0_24px_70px_rgba(91,48,27,.10)] p-7 sm:p-9 mb-8 min-h-[285px]">
      <img src={heroStore} alt="Retail store and geo-fence" className="absolute right-0 top-0 w-[48%] h-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf5] via-[#fffaf5]/94 to-transparent"/>
      <div className="relative max-w-2xl">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[.18em] text-[#658456] bg-[#edf4e9] border border-[#cbd9c3] rounded-full px-3 py-1.5"><CheckCircle2 size={14}/> Account approved</div>
        <h1 className="text-3xl sm:text-4xl font-bold mt-4 text-[#3b2418]">{user.storeName || 'Your Store'}</h1>
        <p className="text-[#6b4737] mt-2 max-w-xl">Your Retailer Portal brings store traffic, offers, geo-fence activity and sales intelligence together.</p>
        <div className="flex flex-wrap gap-3 mt-6"><button className="inline-flex items-center gap-2 rounded-xl bg-[#658456] text-white px-4 py-3 text-sm font-semibold shadow-[0_15px_35px_rgba(101,132,86,.24)]"><Sparkles size={15}/> Create Smart Offer</button><div className="inline-flex items-center gap-2 rounded-xl border border-[#e4cfc0] bg-[#fffaf5] px-4 py-3 text-sm text-[#6b4737]"><MapPin size={15} className="text-[#b85f37]"/>{user.city || 'Your store location'}</div></div>
      </div>
    </section>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {[
        { icon: Footprints, label: 'Store Visits', value: '1.2K', delta: '↑ 32%', tone:'text-[#b85f37] bg-[#f9e5d7]' },
        { icon: Megaphone, label: 'Offers Redeemed', value: '320', delta: '↑ 18%', tone:'text-[#7b4b68] bg-[#f1e6f0]' },
        { icon: Store, label: 'Total Sales', value: '₹48K', delta: '↑ 29%', tone:'text-[#658456] bg-[#edf4e9]' },
        { icon: Percent, label: 'Conversion Rate', value: '24%', delta: '↑ 6%', tone:'text-[#9b6d1e] bg-[#fbf0d9]' },
      ].map(({ icon: Icon, label, value, delta, tone }) => <div key={label} className="card p-5 hover:-translate-y-1 transition-transform"><div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${tone}`}><Icon size={18}/></div><p className="text-2xl font-bold text-[#3b2418]">{value}</p><p className="text-xs text-[#765345] mt-1">{label}</p><p className="text-xs text-[#658456] mt-2 font-semibold">{delta} this period</p></div>)}
    </div>

    <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-5">
      <div className="card p-6"><div className="flex items-center justify-between mb-5"><div><p className="text-xs uppercase tracking-widest text-[#8b6654]">Store profile</p><h2 className="font-semibold text-xl mt-1">Business details</h2></div><ArrowUpRight size={17} className="text-[#b85f37]"/></div><div className="grid sm:grid-cols-2 gap-4 text-sm"><Detail label="Category" value={user.storeCategory}/><Detail label="Address" value={`${user.businessAddress || ''}, ${user.city || ''}`}/><Detail label="Hours" value={user.openingTime && user.closingTime ? `${user.openingTime} – ${user.closingTime}` : '—'}/><Detail label="Geo-Fence Radius" value={user.geoFenceRadius ? `${user.geoFenceRadius} m` : '—'}/><Detail label="POS Integrated" value={user.posAvailable || '—'}/><Detail label="Contact" value={user.storeContact || '—'}/></div></div>
      <div className="relative overflow-hidden rounded-3xl min-h-[260px] border border-[#e4cfc0] shadow-[0_20px_50px_rgba(91,48,27,.08)]"><img src={heroStore} alt="Geo-fence retail activity" className="absolute inset-0 w-full h-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#3b2418]/75 via-[#3b2418]/10 to-transparent"/><div className="absolute left-5 bottom-5 text-white"><p className="text-[10px] uppercase tracking-[.2em] text-[#f9d6bd]">Live store intelligence</p><p className="font-semibold text-lg mt-1">Your geo-fence is ready</p><p className="text-xs text-white/80 mt-1">Monitor footfall and activate location-aware offers.</p></div></div>
    </div>
  </DashboardShell>
}
function Detail({ label, value }) { return <div className="rounded-2xl bg-[#fff7f0] border border-[#ead9ca] p-4"><p className="text-[#8b6654] text-xs mb-1">{label}</p><p className="text-[#4a2d20] font-medium">{value || '—'}</p></div> }
function StatusScreen({ icon: Icon, tone, title, desc }) { return <div className="max-w-xl mx-auto text-center py-20"><div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center border mb-5 ${tone}`}><Icon size={26}/></div><h1 className="text-2xl font-bold mb-2">{title}</h1><p className="text-[#6b4737] text-sm leading-relaxed">{desc}</p></div> }
