import { Check, Footprints, ShoppingCart, Activity, Percent } from 'lucide-react'
import Reveal from './Reveal'

const points = [
  'Target the right customers at the right time',
  'Increase footfall and sales conversion',
  'Data-driven insights from POS transactions',
  'Reduce irrelevant promotions and improve ROI',
]

const metrics = [
  { icon: Footprints, label: 'Footfall', value: '↑ 90%' },
  { icon: ShoppingCart, label: 'Sales', value: '↑ 2x' },
  { icon: Activity, label: 'Engagement', value: '↑ 85%' },
  { icon: Percent, label: 'Offer Conversion', value: '↑ 70%' },
]

export default function ForRetailers() {
  return (
    <section className="grid lg:grid-cols-2 bg-ink-900/40">
      <Reveal className="section-pad py-16 flex flex-col justify-center order-2 lg:order-1">
        <span className="text-xs tracking-wide text-rose-400 mb-4">For Retailers</span>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
          Smarter marketing. Higher sales.
        </h2>
        <ul className="space-y-4">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-white/70 transition-transform duration-300 hover:translate-x-1">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0">
                <Check size={12} strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120} className="relative min-h-[340px] flex items-center justify-center p-10 order-1 lg:order-2 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_40%,rgba(63,214,138,0.2),transparent_55%)]" />
        <div className="relative card w-full max-w-xs p-5 animate-float" style={{ animationDelay: '0.5s' }}>
          {metrics.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Icon size={16} className="text-mint-400" /> {label}
              </div>
              <span className="text-sm font-semibold text-mint-400">{value}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
