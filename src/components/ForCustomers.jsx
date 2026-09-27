import { Check, Tag, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const points = [
  'Relevant offers based on your interests',
  'Instant notifications when you’re nearby',
  'Discover new products and deals',
  'A smarter and more engaging shopping experience',
]

export default function ForCustomers() {
  return (
    <section className="grid lg:grid-cols-2">
      <Reveal className="relative min-h-[340px] bg-gradient-to-br from-ink-800 to-ink-950 flex items-center justify-center p-10 overflow-hidden order-2 lg:order-1">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(245,56,95,0.25),transparent_55%)]" />
        <Sparkles className="absolute top-10 left-12 text-rose-400/30 animate-pulse-slow" size={26} />
        <Sparkles className="absolute bottom-14 right-16 text-mint-400/30 animate-pulse-slow" size={18} style={{ animationDelay: '1.2s' }} />
        <div className="relative flex items-center gap-4 bg-ink-900/80 border border-white/10 rounded-2xl px-6 py-5 shadow-glow animate-float">
          <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center">
            <Tag size={18} />
          </div>
          <div>
            <p className="text-lg font-bold">20% OFF</p>
            <p className="text-xs text-white/50">Just for you, nearby</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} className="section-pad py-16 flex flex-col justify-center order-1 lg:order-2">
        <span className="text-xs tracking-wide text-rose-400 mb-4">For Customers</span>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
          Personalized offers. Better shopping experiences.
        </h2>
        <ul className="space-y-4">
          {points.map((p, i) => (
            <li key={p} className="flex items-start gap-3 text-white/70 transition-transform duration-300 hover:translate-x-1">
              <span className="mt-0.5 w-5 h-5 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0">
                <Check size={12} strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
