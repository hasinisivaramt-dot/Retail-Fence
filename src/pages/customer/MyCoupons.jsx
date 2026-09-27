import { useState } from 'react'
import { QrCode, CheckCircle2, XCircle, Clock } from 'lucide-react'
import SectionCard from '../../components/customer/SectionCard'
import { coupons } from '../../data/customerMock'

const tabs = [
  { key: 'active', label: 'Active', icon: Clock, tone: 'text-rose-300' },
  { key: 'used', label: 'Used', icon: CheckCircle2, tone: 'text-mint-400' },
  { key: 'expired', label: 'Expired', icon: XCircle, tone: 'text-white/40' },
]

export default function MyCoupons() {
  const [tab, setTab] = useState('active')
  const list = coupons[tab]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">My Coupons</h1>
        <p className="text-sm text-white/45">All your saved offer codes in one place.</p>
      </div>

      <div className="flex gap-2 border-b border-white/5 pb-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`text-sm rounded-full px-4 py-2 flex items-center gap-1.5 transition-colors ${
              tab === t.key ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'text-white/50 hover:text-white border border-transparent'
            }`}
          >
            <t.icon size={13} /> {t.label} ({coupons[t.key].length})
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((c) => (
          <SectionCard key={c.code}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-mono text-xs text-rose-300 mb-1">{c.code}</p>
                <p className="text-sm font-semibold">{c.offer}</p>
                <p className="text-xs text-white/40">{c.store}</p>
              </div>
              <QrCode size={28} className="text-white/20 shrink-0" />
            </div>
            <p className="text-xs text-white/35 mb-3">Valid until {c.expiry}</p>
            {tab === 'active' ? (
              <button className="w-full rounded-full bg-rose-500 hover:bg-rose-600 transition-colors text-xs font-semibold py-2">
                Redeem →
              </button>
            ) : (
              <span className={`inline-flex items-center gap-1.5 text-xs ${tab === 'used' ? 'text-mint-400' : 'text-white/35'}`}>
                {tab === 'used' ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                {tab === 'used' ? 'Redeemed' : 'Expired'}
              </span>
            )}
          </SectionCard>
        ))}
        {list.length === 0 && <p className="text-sm text-white/40">Nothing here yet.</p>}
      </div>
    </div>
  )
}
