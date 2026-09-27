import { useState } from 'react'
import { MapPin, Gift, Star, CheckCircle, Bell, Clock } from 'lucide-react'
import SectionCard from '../../components/customer/SectionCard'
import { notifications } from '../../data/customerMock'

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'offers', label: 'Offers' },
  { key: 'geo-fence', label: 'Geo-Fence' },
  { key: 'rewards', label: 'Rewards' },
  { key: 'purchase', label: 'Purchases' },
]

const iconMap = { MapPin, Gift, Star, CheckCircle2: CheckCircle, Clock }

export default function NotificationsPage() {
  const [tab, setTab] = useState('all')
  const list = tab === 'all' ? notifications : notifications.filter((n) => n.type === tab)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">Notifications</h1>
        <p className="text-sm text-[#765345]/70">Offers, geo-fence events, rewards, and purchases.</p>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-[#ead9ca] pb-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`text-sm rounded-full px-4 py-2 transition-colors ${
              tab === t.key ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'text-[#6b4737]/70 hover:text-[#3b2418] border border-transparent'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <SectionCard>
        <div className="divide-y divide-white/5">
          {list.map((n) => {
            const Icon = iconMap[n.icon] || Bell
            return (
              <div key={n.id} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
                <span className="w-9 h-9 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0">
                  <Icon size={15} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{n.title}</p>
                  <p className="text-xs text-[#765345]/70">{n.desc}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {n.unread && <span className="w-2 h-2 rounded-full bg-rose-500" />}
                  <span className="text-xs text-[#8b6654]/65">{n.time}</span>
                </div>
              </div>
            )
          })}
          {list.length === 0 && <p className="text-sm text-[#765345]/65 py-6 text-center">Nothing here yet.</p>}
        </div>
      </SectionCard>
    </div>
  )
}
