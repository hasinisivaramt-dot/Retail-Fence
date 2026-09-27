import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SectionCard({ title, viewAllTo, className='', children, actions }) {
  return (
    <section className={`card-premium p-5 sm:p-6 group ${className}`}>
      <div className="absolute -right-20 -top-24 w-48 h-48 rounded-full bg-[#b85f37]/5 blur-3xl group-hover:bg-[#b85f37]/10 transition-all duration-700"/>
      {(title || viewAllTo || actions) && (
        <div className="relative flex items-center justify-between mb-5">
          {title && <h2 className="font-display font-semibold tracking-tight">{title}</h2>}
          <div className="flex items-center gap-3">
            {actions}
            {viewAllTo && <Link to={viewAllTo} className="text-xs text-[#b85f37] hover:text-[#8e472d] inline-flex items-center gap-1 transition-colors">View All <ArrowRight size={12}/></Link>}
          </div>
        </div>
      )}
      <div className="relative">{children}</div>
    </section>
  )
}
