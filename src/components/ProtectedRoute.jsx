import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const LOGIN_ROUTE = {
  customer: '/login/customer',
  retailer: '/login/retailer',
  admin: '/login/admin',
}

/**
 * Gatekeeps a route to a single role. Not authenticated -> bounce to
 * that portal's login. Authenticated as the wrong role -> bounce to
 * portal selection. Approval-gated roles (retailer) are handled inside
 * their own dashboard, since "pending" / "rejected" still need to see
 * a status screen rather than being redirected away.
 */
export default function ProtectedRoute({ role, children }) {
  const { user, ready } = useAuth()

  if (!ready) return null

  if (!user) return <Navigate to={LOGIN_ROUTE[role]} replace />
  if (user.role !== role) return <Navigate to="/get-started" replace />

  return children
}
