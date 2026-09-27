import { Crown, TrendingUp, TrendingDown, Gift } from 'lucide-react'
import SectionCard from '../../components/customer/SectionCard'
import { loyalty } from '../../data/customerMock'

export default function LoyaltyRewards() {
  const tierProgress = ((loyalty.currentTierIndex + 0.6) / loyalty.tiers.length) * 100

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">Loyalty & Rewards</h1>
        <p className="text-sm text-white/45">Track your tier progress and redeem your points.</p>
      </div>

      <SectionCard>
        <div className="flex items-center gap-4 mb-6">
          <span className="w-14 h-14 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center">
            <Crown size={26} />
          </span>
          <div>
            <p className="text-lg font-bold">{loyalty.level} Member</p>
            <p className="text-2xl font-bold text-amber-400">{loyalty.points.toLocaleString()} points</p>
          </div>
        </div>

        <div className="relative h-2 rounded-full bg-white/10 overflow-hidden mb-2">
          <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500" style={{ width: `${tierProgress}%` }} />
        </div>
        <div className="flex justify-between text-xs text-white/40 mb-1">
          {loyalty.tiers.map((t, i) => (
            <span key={t} className={i <= loyalty.currentTierIndex ? 'text-white/70' : ''}>{t}</span>
          ))}
        </div>
        <p className="text-xs text-white/40">{loyalty.pointsToNext} points to {loyalty.nextLevel}</p>
      </SectionCard>

      <div className="grid lg:grid-cols-2 gap-5">
        <SectionCard title="Points History">
          <div className="space-y-3">
            {loyalty.history.map((h) => (
              <div key={h.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2.5">
                  {h.sign === '+' ? (
                    <TrendingUp size={14} className="text-mint-400" />
                  ) : (
                    <TrendingDown size={14} className="text-rose-400" />
                  )}
                  <div>
                    <p>{h.label}</p>
                    <p className="text-xs text-white/30">{h.date}</p>
                  </div>
                </div>
                <span className={h.sign === '+' ? 'text-mint-400' : 'text-rose-400'}>
                  {h.sign}{h.points}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-white/5 text-center">
            <div>
              <p className="text-sm font-bold">{loyalty.earned.toLocaleString()}</p>
              <p className="text-xs text-white/40">Earned</p>
            </div>
            <div>
              <p className="text-sm font-bold">{loyalty.redeemed.toLocaleString()}</p>
              <p className="text-xs text-white/40">Redeemed</p>
            </div>
            <div>
              <p className="text-sm font-bold">{loyalty.available}</p>
              <p className="text-xs text-white/40">Rewards available</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Available Rewards">
          <div className="space-y-3">
            {loyalty.rewards.map((r) => (
              <div key={r.id} className="flex items-center justify-between bg-ink-900/50 border border-white/5 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <Gift size={15} className="text-rose-400" />
                  <div>
                    <p className="text-sm">{r.label}</p>
                    <p className="text-xs text-white/40">{r.cost} points</p>
                  </div>
                </div>
                <button
                  disabled={loyalty.points < r.cost}
                  className="text-xs font-semibold rounded-full bg-rose-500 hover:bg-rose-600 disabled:bg-white/10 disabled:text-white/30 transition-colors px-4 py-1.5"
                >
                  Redeem
                </button>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
