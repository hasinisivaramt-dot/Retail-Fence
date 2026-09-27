import { Clock, XCircle, CheckCircle2, Footprints, Percent, Megaphone, Store } from 'lucide-react'
import DashboardShell from './DashboardShell'
import { useAuth } from '../../context/AuthContext'

export default function RetailerDashboard() {
  const { user } = useAuth()

  if (user.status === 'pending') {
    return (
      <DashboardShell accent="mint" roleLabel="Retailer">
        <StatusScreen
          icon={Clock}
          tone="text-amber-400 bg-amber-500/10 border-amber-500/25"
          title="Account Pending Approval"
          desc="Your retailer registration is being reviewed by the administrator. You'll be able to access the Retailer Portal once it's approved."
        />
      </DashboardShell>
    )
  }

  if (user.status === 'rejected') {
    return (
      <DashboardShell accent="mint" roleLabel="Retailer">
        <StatusScreen
          icon={XCircle}
          tone="text-rose-400 bg-rose-500/10 border-rose-500/25"
          title="Registration Rejected"
          desc={user.rejectionReason || 'Business verification could not be completed. Please contact support to resubmit your details.'}
        />
      </DashboardShell>
    )
  }

  return (
    <DashboardShell accent="mint" roleLabel="Retailer">
      <div className="flex items-center gap-2 text-mint-400 text-sm mb-2">
        <CheckCircle2 size={16} /> Account Approved
      </div>
      <h1 className="text-2xl font-bold mb-1">{user.storeName || 'Your Store'}</h1>
      <p className="text-white/50 mb-8">Welcome to the Smart Geo-Offer Retailer Portal.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {[
          { icon: Footprints, label: 'Store Visits', value: '1.2K', delta: '↑ 32%' },
          { icon: Megaphone, label: 'Offers Redeemed', value: '320', delta: '↑ 18%' },
          { icon: Store, label: 'Total Sales', value: '₹48K', delta: '↑ 29%' },
          { icon: Percent, label: 'Conversion Rate', value: '24%', delta: '↑ 6%' },
        ].map(({ icon: Icon, label, value, delta }) => (
          <div key={label} className="card p-5">
            <div className="w-10 h-10 rounded-lg bg-mint-500/15 text-mint-400 flex items-center justify-center mb-3">
              <Icon size={17} />
            </div>
            <p className="text-lg font-bold">{value}</p>
            <p className="text-xs text-white/50">{label}</p>
            <p className="text-xs text-mint-400 mt-1">{delta}</p>
          </div>
        ))}
      </div>

      <div className="card p-6">
        <h2 className="font-semibold mb-4">Store Details</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <Detail label="Category" value={user.storeCategory} />
          <Detail label="Address" value={`${user.businessAddress || ''}, ${user.city || ''}`} />
          <Detail label="Hours" value={user.openingTime && user.closingTime ? `${user.openingTime} – ${user.closingTime}` : '—'} />
          <Detail label="Geo-Fence Radius" value={user.geoFenceRadius ? `${user.geoFenceRadius} m` : '—'} />
          <Detail label="POS Integrated" value={user.posAvailable || '—'} />
          <Detail label="Contact" value={user.storeContact || '—'} />
        </div>
      </div>
    </DashboardShell>
  )
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-white/40 text-xs mb-1">{label}</p>
      <p className="text-white/80">{value || '—'}</p>
    </div>
  )
}

function StatusScreen({ icon: Icon, tone, title, desc }) {
  return (
    <div className="max-w-lg mx-auto text-center py-16">
      <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center border mb-5 ${tone}`}>
        <Icon size={24} />
      </div>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
