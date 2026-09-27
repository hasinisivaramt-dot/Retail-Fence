import { ArrowRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section id="get-started" className="section-pad py-20">
      <Reveal className="relative card overflow-hidden p-10 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_120%,rgba(245,56,95,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_-10%,rgba(63,214,138,0.12),transparent_50%)]" />
        <div className="relative max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
            Transform retail with intelligent, location-aware offers.
          </h2>
          <p className="text-white/60">
            Join us in creating smarter, more engaging, and personalized shopping experiences.
          </p>
        </div>
        <div className="relative flex flex-wrap gap-4 shrink-0">
          <Link
            to="/get-started"
            className="group inline-flex items-center gap-2 rounded-full bg-rose-500 hover:bg-rose-600 transition-all duration-300 px-7 py-3.5 font-semibold shadow-glow hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 transition-colors px-7 py-3.5 font-semibold"
          >
            <Github size={18} /> View on GitHub
          </a>
        </div>
      </Reveal>
    </section>
  )
}
