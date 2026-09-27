import { MapPinned, BrainCircuit, BellRing, Store } from 'lucide-react'
import Reveal from './Reveal'

const features = [
  {
    icon: MapPinned,
    color: 'text-rose-400 bg-rose-500/15 group-hover:bg-rose-500/25',
    ring: 'group-hover:ring-rose-500/30',
    title: 'Geo-Fencing Detection',
    desc: 'Detects when customers enter or exit a predefined store area in real-time.',
  },
  {
    icon: BrainCircuit,
    color: 'text-mint-400 bg-mint-500/15 group-hover:bg-mint-500/25',
    ring: 'group-hover:ring-mint-500/30',
    title: 'AI-Based Recommendations',
    desc: 'Uses purchase history and the Apriori algorithm to generate personalized offers.',
  },
  {
    icon: BellRing,
    color: 'text-amber-400 bg-amber-500/15 group-hover:bg-amber-500/25',
    ring: 'group-hover:ring-amber-500/30',
    title: 'Real-Time Notifications',
    desc: 'Sends instant offers via Firebase Cloud Messaging (FCM).',
  },
  {
    icon: Store,
    color: 'text-violet-400 bg-violet-500/15 group-hover:bg-violet-500/25',
    ring: 'group-hover:ring-violet-500/30',
    title: 'POS Integration',
    desc: 'Analyzes transaction data to identify buying patterns and improve offer relevance.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-pad py-24">
      <Reveal className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Key <span className="text-rose-500">Features</span>
        </h2>
        <p className="text-white/50">Everything you need for a smarter retail experience</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map(({ icon: Icon, color, ring, title, desc }, i) => (
          <Reveal key={title} delay={i * 90}>
            <div className={`group card h-full p-6 ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15 ${ring}`}>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${color}`}>
                <Icon size={20} />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
