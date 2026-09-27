import { useState } from 'react'
import { ShieldCheck, RotateCw } from 'lucide-react'

/**
 * Demo-only OTP step: since there's no backend/SMS/email provider here,
 * the "sent" code is shown on screen instead of dispatched — swap this
 * for a real verification API in production.
 */
export default function OtpField({ verified, onVerified }) {
  const [sent, setSent] = useState(false)
  const [code, setCode] = useState('')
  const [expected, setExpected] = useState('')
  const [error, setError] = useState('')

  function sendOtp() {
    const generated = String(Math.floor(100000 + Math.random() * 900000))
    setExpected(generated)
    setSent(true)
    setError('')
  }

  function verify() {
    if (code === expected) {
      onVerified(true)
      setError('')
    } else {
      setError('Incorrect code. Try again.')
    }
  }

  if (verified) {
    return (
      <div className="flex items-center gap-2 text-sm text-mint-400 bg-mint-500/10 border border-mint-500/25 rounded-xl px-4 py-2.5">
        <ShieldCheck size={16} /> Email / phone verified
      </div>
    )
  }

  return (
    <div className="space-y-2.5">
      {!sent ? (
        <button
          type="button"
          onClick={sendOtp}
          className="text-sm rounded-xl border border-rose-500/40 text-rose-300 px-4 py-2.5 hover:border-rose-500/70 transition-colors"
        >
          Send verification OTP
        </button>
      ) : (
        <>
          <p className="text-xs text-white/40">
            Demo mode — your one-time code is{' '}
            <span className="text-rose-300 font-semibold tracking-wider">{expected}</span>
          </p>
          <div className="flex gap-2">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="6-digit code"
              className="w-40 rounded-xl bg-ink-900/70 border border-white/10 px-4 py-2.5 text-sm tracking-widest outline-none focus:border-rose-500/60"
            />
            <button
              type="button"
              onClick={verify}
              className="text-sm rounded-xl bg-rose-500 hover:bg-rose-600 transition-colors px-4 py-2.5 font-semibold"
            >
              Verify
            </button>
            <button
              type="button"
              onClick={sendOtp}
              className="text-sm rounded-xl border border-white/10 px-3 hover:border-white/25 transition-colors"
              title="Resend"
            >
              <RotateCw size={15} />
            </button>
          </div>
          {error && <p className="text-xs text-rose-400">{error}</p>}
        </>
      )}
    </div>
  )
}
