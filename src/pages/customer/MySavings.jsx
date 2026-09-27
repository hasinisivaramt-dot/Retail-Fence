import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { Wallet, Tag, Percent, Trophy } from 'lucide-react'
import SectionCard from '../../components/customer/SectionCard'
import { savingsByMonth, savingsStats } from '../../data/customerMock'

export default function MySavings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">My Savings</h1>
        <p className="text-sm text-white/45">How much Smart Geo-Offer has saved you.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Stat icon={Wallet} label="Total Saved" value={`₹${savingsStats.totalSaved.toLocaleString()}`} />
        <Stat icon={Tag} label="Offers Redeemed" value={savingsStats.offersRedeemed} />
        <Stat icon={Percent} label="Avg. Discount" value={savingsStats.avgDiscount} />
        <Stat icon={Trophy} label="Best Saving" value={`₹${savingsStats.bestSaving}`} />
      </div>

      <SectionCard title="Monthly Savings">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={savingsByMonth} margin={{ left: -20, right: 10, top: 10 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.35)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(255,255,255,0.35)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{ background: '#1b0e17', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, fontSize: 12 }}
                labelStyle={{ color: 'rgba(255,255,255,0.6)' }}
                formatter={(v) => [`₹${v}`, 'Saved']}
              />
              <Line type="monotone" dataKey="savings" stroke="#f5385f" strokeWidth={2.5} dot={{ fill: '#f5385f', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </SectionCard>

      <SectionCard title="Most-Used Offer">
        <p className="text-sm text-white/70">{savingsStats.mostUsedOffer}</p>
      </SectionCard>
    </div>
  )
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="card p-5">
      <div className="w-10 h-10 rounded-lg bg-mint-500/15 text-mint-400 flex items-center justify-center mb-3">
        <Icon size={17} />
      </div>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-xs text-white/45">{label}</p>
    </div>
  )
}
