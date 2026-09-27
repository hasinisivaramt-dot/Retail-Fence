import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserPlus } from 'lucide-react'
import AuthLayout from './AuthLayout'
import {
  Field,
  TextInput,
  ChipMultiSelect,
  ToggleInput,
} from '../../components/form/FormControls'
import OtpField from '../../components/form/OtpField'
import { useAuth } from '../../context/AuthContext'

const categories = ['Supermarket', 'Fashion', 'Electronics', 'Restaurants', 'Pharmacy']

export default function CustomerSignup() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    dob: '',
    password: '',
    confirmPassword: '',
    categories: [],
    favoriteStores: '',
    locationServices: true,
    offerNotifications: true,
  })
  const [otpVerified, setOtpVerified] = useState(false)
  const [error, setError] = useState('')

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (!otpVerified) {
      setError('Please verify your email / phone with the OTP first.')
      return
    }
    try {
      register('customer', form)
      navigate('/dashboard/customer')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AuthLayout title="Create Customer Account" subtitle="Get personalized offers wherever you shop" wide>
      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-xs uppercase tracking-wide text-rose-400">Personal Details</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" required>
              <TextInput value={form.fullName} onChange={(e) => update('fullName', e.target.value)} required />
            </Field>
            <Field label="Email Address" required>
              <TextInput type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required />
            </Field>
            <Field label="Mobile Number" required>
              <TextInput type="tel" value={form.mobile} onChange={(e) => update('mobile', e.target.value)} required />
            </Field>
            <Field label="Date of Birth" hint="optional">
              <TextInput type="date" value={form.dob} onChange={(e) => update('dob', e.target.value)} />
            </Field>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs uppercase tracking-wide text-rose-400">Account</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Password" required>
              <TextInput
                type="password"
                value={form.password}
                onChange={(e) => update('password', e.target.value)}
                required
              />
            </Field>
            <Field label="Confirm Password" required>
              <TextInput
                type="password"
                value={form.confirmPassword}
                onChange={(e) => update('confirmPassword', e.target.value)}
                required
              />
            </Field>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs uppercase tracking-wide text-rose-400">Preferences</h3>
          <Field label="Preferred Shopping Categories" hint="optional">
            <ChipMultiSelect
              options={categories}
              value={form.categories}
              onChange={(v) => update('categories', v)}
            />
          </Field>
          <Field label="Favorite Stores" hint="optional, comma separated">
            <TextInput
              value={form.favoriteStores}
              onChange={(e) => update('favoriteStores', e.target.value)}
              placeholder="FreshMart, UrbanThreads…"
            />
          </Field>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs uppercase tracking-wide text-rose-400">Location & Notifications</h3>
          <ToggleInput
            checked={form.locationServices}
            onChange={(v) => update('locationServices', v)}
            label="Enable Location Services (required for geo-fencing offers)"
          />
          <ToggleInput
            checked={form.offerNotifications}
            onChange={(v) => update('offerNotifications', v)}
            label="Enable Offer Notifications"
          />
        </section>

        <section className="space-y-3">
          <h3 className="text-xs uppercase tracking-wide text-rose-400">Verification</h3>
          <OtpField verified={otpVerified} onVerified={setOtpVerified} />
        </section>

        {error && <p className="text-sm text-rose-400">{error}</p>}

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 hover:bg-rose-600 transition-all duration-300 hover:-translate-y-0.5 px-6 py-3 font-semibold shadow-glow"
        >
          <UserPlus size={16} /> Create Account
        </button>

        <p className="text-center text-sm text-white/40">
          Already have an account?{' '}
          <Link to="/login/customer" className="text-rose-400 hover:text-rose-300">
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
