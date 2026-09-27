import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Sparkles, Store } from 'lucide-react'
import SectionCard from '../../components/customer/SectionCard'
import { favoriteCategories, topProducts, insights } from '../../data/customerMock'

export default function ShoppingInsights() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">Shopping Insights</h1>
        <p className="text-sm text-white/45">AI-generated patterns from your purchase history.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <SectionCard title="Favorite Categories">
          <div className="flex items-center gap-6">
            <div className="w-40 h-40 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={favoriteCategories} dataKey="value" nameKey="name" innerRadius={45} outerRadius={70} paddingAngle={3}>
                    {favoriteCategories.map((c) => (
                      <Cell key={c.name} fill={c.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ background: '#1b0e17', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, fontSize: 12 }}
                    formatter={(v, n) => [`${v}%`, n]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2.5">
              {favoriteCategories.map((c) => (
                <div key={c.name} className="flex items-center gap-2 text-sm">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: c.color }} />
                  {c.name} <span className="text-white/40">— {c.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Top Products">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topProducts} margin={{ left: -20 }}>
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.35)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="rgba(255,255,255,0.35)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ background: '#1b0e17', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, fontSize: 12 }}
                  cursor={{ fill: 'rgba(255,255,255,0.04)' }}
                />
                <Bar dataKey="purchases" fill="#f5385f" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <SectionCard title="Most Visited Store">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center">
              <Store size={19} />
            </span>
            <div>
              <p className="font-semibold">{insights.mostVisitedStore}</p>
              <p className="text-xs text-white/40">{insights.mostVisitedCount} visits</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Offer Redemption Rate" className="sm:col-span-1">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0">
              <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                <circle
                  cx="18" cy="18" r="15.5" fill="none" stroke="#3fd68a" strokeWidth="3"
                  strokeDasharray={`${insights.redemptionRate} 100`} strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">{insights.redemptionRate}%</span>
            </div>
            <p className="text-xs text-white/40">of viewed offers redeemed</p>
          </div>
        </SectionCard>

        <SectionCard title="AI Insights" className="sm:col-span-2 lg:col-span-1">
          <ul className="space-y-2.5">
            {insights.aiNotes.map((note) => (
              <li key={note} className="text-xs text-white/60 flex items-start gap-2">
                <Sparkles size={13} className="text-rose-400 shrink-0 mt-0.5" /> {note}
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>
    </div>
  )
}
