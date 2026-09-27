import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SectionCard({ title, viewAllTo, className = '', children, actions }) {
  return (
    <div className={`card p-6 ${className}`}>
      {(title || viewAllTo || actions) && (
        <div className="flex items-center justify-between mb-5">
          {title && <h2 className="font-semibold">{title}</h2>}
          <div className="flex items-center gap-3">
            {actions}
            {viewAllTo && (
              <Link
                to={viewAllTo}
                className="text-xs text-rose-400 hover:text-rose-300 transition-colors inline-flex items-center gap-1"
              >
                View All <ArrowRight size={12} />
              </Link>
            )}
          </div>
        </div>
      )}
      {children}
    </div>
  )
}
