import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import AuthLayout from './AuthLayout'
import { Field, TextInput, CheckboxInput } from '../../components/form/FormControls'
import { useAuth } from '../../context/AuthContext'

export default function RetailerLogin() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    try {
      login(identifier, password, 'retailer')
      navigate('/dashboard/retailer')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AuthLayout title="Retailer Login" subtitle="Manage offers and track store performance" accent="mint">
      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="Email / Mobile Number" required>
          <TextInput
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="owner@yourstore.com"
            required
          />
        </Field>
        <Field label="Password" required>
          <TextInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </Field>

        <div className="flex items-center justify-between">
          <CheckboxInput checked={remember} onChange={setRemember} label="Remember me" />
          <button type="button" className="text-xs text-mint-400 hover:text-mint-300 transition-colors">
            Forgot password?
          </button>
        </div>

        {error && <p className="text-sm text-rose-400">{error}</p>}

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-mint-500 hover:bg-mint-400 text-ink-950 transition-all duration-300 hover:-translate-y-0.5 px-6 py-3 font-semibold shadow-[0_0_60px_-15px_rgba(63,214,138,0.45)]"
        >
          <LogIn size={16} /> Login
        </button>

        <p className="text-center text-sm text-[#765b4b]">
          New retailer?{' '}
          <Link to="/signup/retailer" className="text-mint-400 hover:text-mint-300">
            Register your store
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
