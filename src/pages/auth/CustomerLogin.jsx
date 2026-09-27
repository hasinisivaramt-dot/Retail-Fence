import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import AuthLayout from './AuthLayout'
import { Field, TextInput, CheckboxInput } from '../../components/form/FormControls'
import { useAuth } from '../../context/AuthContext'

export default function CustomerLogin() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    try {
      login(identifier, password, 'customer')
      navigate('/dashboard/customer')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AuthLayout title="Customer Login" subtitle="Welcome back — pick up your saved offers">
      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="Email / Mobile Number" required>
          <TextInput
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="you@example.com"
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
          <button type="button" className="text-xs text-rose-400 hover:text-rose-300 transition-colors">
            Forgot password?
          </button>
        </div>

        {error && <p className="text-sm text-rose-400">{error}</p>}

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:-translate-y-0.5 px-6 py-3 font-semibold shadow-glow"
        >
          <LogIn size={16} /> Login
        </button>

        <p className="text-center text-sm text-[#765b4b]">
          New here?{' '}
          <Link to="/signup/customer" className="text-rose-400 hover:text-rose-300">
            Create a customer account
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
