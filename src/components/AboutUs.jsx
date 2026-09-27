import { MapPin, BrainCircuit, ShoppingBag, BarChart3, Zap, Target } from 'lucide-react'
import Reveal from './Reveal'

const focusAreas = [
  { icon: MapPin, label: 'Location-Aware Engagement' },
  { icon: BrainCircuit, label: 'AI-Powered Recommendations' },
  { icon: ShoppingBag, label: 'Personalized Retail Offers' },
  { icon: BarChart3, label: 'POS Data Intelligence' },
  { icon: Zap, label: 'Real-Time Customer Interaction' },
]

export default function AboutUs() {
  return (
    <section id="about" className="section-pad py-24 relative overflow-hidden">
      <div className="absolute top-1/3 -left-24 w-72 h-72 bg-rose-500/5 blur-3xl rounded-full" />

      <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
        <Reveal>
          <span className="text-xs tracking-wide text-rose-400 mb-4 block">About Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Smarter retail. <span className="text-rose-500">More relevant experiences.</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-5">
            Smart Geo-Offer is an AI-driven retail solution that combines
            Geo-Fencing, customer purchase behavior, and POS data to deliver
            personalized promotional offers in real time.
          </p>
          <p className="text-white/60 leading-relaxed">
            Our platform detects when customers enter a store's geo-fenced
            area, analyzes their previous purchasing patterns using AI, and
            delivers relevant offers directly to their mobile devices. By
            connecting location, intelligence, and retail data, we help
            businesses move beyond generic promotions toward more
            contextual and personalized customer engagement.
          </p>

          <div className="mt-10 card p-6 flex gap-4">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center">
              <Target size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1.5">Our Vision</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                To transform traditional retail marketing into a real-time,
                location-aware, and intelligent experience where the right
                customer receives the right offer at the right place and
                time.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="font-semibold mb-5 text-white/80">What We Focus On</h3>
          <div className="space-y-3">
            {focusAreas.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className="group card p-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-rose-500/15 text-rose-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Icon size={17} />
                </div>
                <span className="text-sm text-white/70">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
