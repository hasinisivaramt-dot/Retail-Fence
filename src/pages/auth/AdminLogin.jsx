import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShieldCheck, LockKeyhole, CheckCircle2 } from 'lucide-react'
import AuthLayout from './AuthLayout'
import { Field, TextInput, CheckboxInput } from '../../components/form/FormControls'
import { useAuth } from '../../context/AuthContext'

const STEPS = ['Credentials', 'OTP / 2FA', 'Dashboard']

export default function AdminLogin() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [rememberDevice, setRememberDevice] = useState(false)
  const [otp, setOtp] = useState('')
  const [expectedOtp, setExpectedOtp] = useState('')
  const [error, setError] = useState('')
  const [verifiedUser, setVerifiedUser] = useState(null)

  function submitCredentials(e) {
    e.preventDefault()
    try {
      // Validate credentials without opening the session yet — the
      // session only opens once 2FA passes.
      const users = JSON.parse(localStorage.getItem('sgo_users')) || []
      const found = users.find((u) => u.role === 'admin' && (u.email === identifier || u.mobile === identifier))
      if (!found || found.password !== password) {
        throw new Error('Invalid admin credentials.')
      }
      setVerifiedUser(found)
      setExpectedOtp(String(Math.floor(100000 + Math.random() * 900000)))
      setError('')
      setStep(1)
    } catch (err) {
      setError(err.message)
    }
  }

  function submitOtp(e) {
    e.preventDefault()
    if (otp !== expectedOtp) {
      setError('Incorrect OTP.')
      return
    }
    login(identifier, password, 'admin')
    setStep(2)
    setTimeout(() => navigate('/dashboard/admin'), 700)
  }

  return (
    <AuthLayout title="Admin Login" subtitle="Restricted access — provisioned accounts only" accent="mint">
      <div className="flex items-center justify-between mb-7 text-xs">
        {STEPS.map((s, i) => (
          <div key={s} className="flex-1 flex items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                i < step
                  ? 'bg-violet-500 border-violet-500'
                  : i === step
                  ? 'border-violet-400 text-violet-300'
                  : 'border-white/15 text-white/30'
              }`}
            >
              {i < step ? <CheckCircle2 size={14} /> : i + 1}
            </div>
            <span className={`ml-2 ${i <= step ? 'text-white/70' : 'text-white/30'}`}>{s}</span>
            {i < STEPS.length - 1 && <span className="flex-1 h-px bg-white/10 mx-2" />}
          </div>
        ))}
      </div>

      {step === 0 && (
        <form onSubmit={submitCredentials} className="space-y-5">
          <Field label="Admin Email / Username" required>
            <TextInput value={identifier} onChange={(e) => setIdentifier(e.target.value)} required />
          </Field>
          <Field label="Password" required>
            <TextInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Field>
          <CheckboxInput checked={rememberDevice} onChange={setRememberDevice} label="Remember this device" />

          {error && <p className="text-sm text-rose-400">{error}</p>}

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-300 hover:-translate-y-0.5 px-6 py-3 font-semibold shadow-[0_0_60px_-15px_rgba(139,92,246,0.5)]"
          >
            <LockKeyhole size={16} /> Continue
          </button>

          <p className="text-center text-xs text-white/30">
            Demo credentials: admin@smartgeooffer.com / Admin@123
          </p>
        </form>
      )}

      {step === 1 && (
        <form onSubmit={submitOtp} className="space-y-5">
          <p className="text-xs text-white/40">
            Two-factor code (demo) —{' '}
            <span className="text-violet-300 font-semibold tracking-wider">{expectedOtp}</span>
          </p>
          <Field label="Enter OTP" required>
            <TextInput
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="6-digit code"
              required
            />
          </Field>

          {error && <p className="text-sm text-rose-400">{error}</p>}

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-300 hover:-translate-y-0.5 px-6 py-3 font-semibold shadow-[0_0_60px_-15px_rgba(139,92,246,0.5)]"
          >
            <ShieldCheck size={16} /> Verify & Continue
          </button>
        </form>
      )}

      {step === 2 && (
        <div className="text-center py-6">
          <CheckCircle2 className="mx-auto text-violet-400 mb-3" size={36} />
          <p className="text-white/70">Verified — opening Admin Dashboard…</p>
        </div>
      )}

      <p className="text-center text-xs text-white/30 mt-6">
        Admin accounts are provisioned internally and have no public sign-up.
      </p>
      <p className="text-center text-sm text-white/40 mt-2">
        <Link to="/get-started" className="text-violet-400 hover:text-violet-300">
          ← Back to portal selection
        </Link>
      </p>
    </AuthLayout>
  )
}
