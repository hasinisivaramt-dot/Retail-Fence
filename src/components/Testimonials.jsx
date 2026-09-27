import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal'

const testimonials = [
  {
    quote: 'The offers are so relevant and useful. I love getting discounts when I’m near my favorite store!',
    name: 'Sneha R.',
    role: 'Customer',
  },
  {
    quote: 'It has significantly increased our store footfall and sales. A must-have solution for modern retail!',
    name: 'Rohit M.',
    role: 'Store Owner',
  },
  {
    quote: 'The real-time notifications and personalized offers make shopping so much better!',
    name: 'Aditi K.',
    role: 'Customer',
  },
]

export default function Testimonials() {
  return (
    <section className="section-pad py-24">
      <Reveal className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          What People <span className="text-rose-500">Say</span>
        </h2>
        <p className="text-white/50">Feedback from users and retailers</p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map(({ quote, name, role }, i) => (
          <Reveal key={name} delay={i * 110}>
            <div className="group card h-full p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-white/15">
              <Quote className="absolute -top-2 -right-2 text-white/5 group-hover:text-rose-500/10 transition-colors" size={72} />
              <div className="flex gap-0.5 mb-4 text-amber-400 relative">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-6 relative">“{quote}”</p>
              <div className="flex items-center gap-3 relative">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center text-sm font-semibold text-rose-300">
                  {name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="text-xs text-white/40">{role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
