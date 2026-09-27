import { Gauge, ShoppingCart, BellRing, Radio } from 'lucide-react'
import Reveal from './Reveal'

const stats = [
  { icon: Gauge, value: '90%', label: 'Higher Customer Engagement' },
  { icon: ShoppingCart, value: '2x', label: 'Increase in Sales Conversion' },
  { icon: BellRing, value: '70%', label: 'More Relevant Offers' },
  { icon: Radio, value: 'Real-Time', label: 'Location-Based Marketing' },
]

export default function ImpactSection() {
  return (
    <section id="impact" className="section-pad py-24 bg-ink-900/40 relative overflow-hidden">
      <div className="absolute -top-24 right-0 w-72 h-72 bg-mint-500/5 blur-3xl rounded-full" />

      <Reveal className="text-center mb-14 relative">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Impact</h2>
        <p className="text-white/50">Creating value for both customers and businesses</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <Reveal key={label} delay={i * 90}>
            <div className="group card h-full p-6 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xl font-bold text-rose-500">{value}</p>
                <p className="text-xs text-white/50">{label}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
