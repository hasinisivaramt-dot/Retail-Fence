import { useReveal } from '../hooks/useReveal'

/**
 * Wraps children in a fade + rise transition that triggers once,
 * when scrolled into view. `delay` (ms) staggers items in a grid.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, shown] = useReveal()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '700ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      {children}
    </div>
  )
}
