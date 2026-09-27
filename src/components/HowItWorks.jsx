import { LogIn, Cpu, Send, LogOut, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
  {
    icon: LogIn,
    ring: 'ring-mint-500/40 text-mint-400',
    badge: 'bg-mint-500',
    title: 'Customer Enters Geo-Fenced Area',
    desc: 'System detects the user entering the store zone.',
  },
  {
    icon: Cpu,
    ring: 'ring-sky-500/40 text-sky-400',
    badge: 'bg-sky-500',
    title: 'AI Analyzes Data',
    desc: 'Analyzes purchase history using the Apriori algorithm.',
  },
  {
    icon: Send,
    ring: 'ring-violet-500/40 text-violet-400',
    badge: 'bg-violet-500',
    title: 'Personalized Offer Sent',
    desc: 'Relevant offers are delivered via push notification.',
  },
  {
    icon: LogOut,
    ring: 'ring-rose-500/40 text-rose-400',
    badge: 'bg-rose-500',
    title: 'Customer Exits Area',
    desc: 'System detects exit and stops active offers.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad py-24">
      <Reveal className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          How It <span className="text-rose-500">Works</span>
        </h2>
        <p className="text-white/50">From location detection to personalized offers — in real time</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map(({ icon: Icon, ring, badge, title, desc }, i) => (
          <Reveal key={title} delay={i * 100}>
            <div className="group relative card h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ring-4 ${ring} bg-white/5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={22} />
                </div>
                <span className={`w-6 h-6 rounded-full ${badge} text-xs font-bold flex items-center justify-center`}>
                  {i + 1}
                </span>
              </div>
              <h3 className="font-semibold mb-2 leading-snug">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{desc}</p>

              {i < steps.length - 1 && (
                <span className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 text-white/20">
                  <ArrowRight size={16} />
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
