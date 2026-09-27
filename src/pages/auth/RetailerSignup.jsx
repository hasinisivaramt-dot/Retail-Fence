import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserPlus, LocateFixed } from 'lucide-react'
import AuthLayout from './AuthLayout'
import {
  Field,
  TextInput,
  TextArea,
  SelectInput,
  CheckboxInput,
  FileInput,
} from '../../components/form/FormControls'
import OtpField from '../../components/form/OtpField'
import { useAuth } from '../../context/AuthContext'

const storeCategories = ['Supermarket', 'Fashion Retail', 'Electronics', 'Restaurant / Cafe', 'Pharmacy', 'Other']
const states = [
  'Telangana', 'Andhra Pradesh', 'Karnataka', 'Tamil Nadu', 'Maharashtra',
  'Delhi', 'Gujarat', 'West Bengal', 'Kerala', 'Punjab', 'Rajasthan', 'Uttar Pradesh',
]
const posOptions = ['Yes', 'No']

export default function RetailerSignup() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    storeName: '',
    storeCategory: '',
    businessAddress: '',
    city: '',
    state: '',
    postalCode: '',
    storeContact: '',
    openingTime: '',
    closingTime: '',
    storeImage: '',
    storeDescription: '',
    latitude: '',
    longitude: '',
    geoFenceRadius: '',
    businessLicense: '',
    businessRegNumber: '',
    posAvailable: '',
    posDetails: '',
    acceptTerms: false,
  })
  const [otpVerified, setOtpVerified] = useState(false)
  const [error, setError] = useState('')
  const [locating, setLocating] = useState(false)

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function detectLocation() {
    setLocating(true)
    if (!navigator.geolocation) {
      update('latitude', '17.3850')
      update('longitude', '78.4867')
      setLocating(false)
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        update('latitude', pos.coords.latitude.toFixed(5))
        update('longitude', pos.coords.longitude.toFixed(5))
        setLocating(false)
      },
      () => {
        update('latitude', '17.3850')
        update('longitude', '78.4867')
        setLocating(false)
      }
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (form.password !== form.confirmPassword) return setError('Passwords do not match.')
    if (!form.acceptTerms) return setError('Please accept the Terms & Conditions.')
    if (!otpVerified) return setError('Please verify your email / phone with the OTP first.')
    try {
      register('retailer', form)
      navigate('/dashboard/retailer')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AuthLayout title="Retailer Registration" subtitle="One store, one business — tell us about it" accent="mint" wide>
      <form onSubmit={handleSubmit} className="space-y-8">
        <section className="space-y-4">
          <h3 className="text-xs uppercase tracking-wide text-mint-400">Owner Details</h3>
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
            <div />
            <Field label="Password" required>
              <TextInput type="password" value={form.password} onChange={(e) => update('password', e.target.value)} required />
            </Field>
            <Field label="Confirm Password" required>
              <TextInput type="password" value={form.confirmPassword} onChange={(e) => update('confirmPassword', e.target.value)} required />
            </Field>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs uppercase tracking-wide text-mint-400">Business Details</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Business / Store Name" required>
              <TextInput value={form.storeName} onChange={(e) => update('storeName', e.target.value)} required />
            </Field>
            <Field label="Store Category" required>
              <SelectInput options={storeCategories} value={form.storeCategory} onChange={(e) => update('storeCategory', e.target.value)} required />
            </Field>
            <Field label="Business Address" required>
              <TextInput value={form.businessAddress} onChange={(e) => update('businessAddress', e.target.value)} required />
            </Field>
            <Field label="City" required>
              <TextInput value={form.city} onChange={(e) => update('city', e.target.value)} required />
            </Field>
            <Field label="State" required>
              <SelectInput options={states} value={form.state} onChange={(e) => update('state', e.target.value)} required />
            </Field>
            <Field label="Postal Code" required>
              <TextInput inputMode="numeric" value={form.postalCode} onChange={(e) => update('postalCode', e.target.value)} required />
            </Field>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs uppercase tracking-wide text-mint-400">Store Details</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Store Contact Number" required>
              <TextInput type="tel" value={form.storeContact} onChange={(e) => update('storeContact', e.target.value)} required />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Opening Time" required>
                <TextInput type="time" value={form.openingTime} onChange={(e) => update('openingTime', e.target.value)} required />
              </Field>
              <Field label="Closing Time" required>
                <TextInput type="time" value={form.closingTime} onChange={(e) => update('closingTime', e.target.value)} required />
              </Field>
            </div>
            <Field label="Store Image / Logo" hint="optional">
              <FileInput fileName={form.storeImage} onChange={(name) => update('storeImage', name)} />
            </Field>
            <Field label="Store Description" hint="optional">
              <TextArea value={form.storeDescription} onChange={(e) => update('storeDescription', e.target.value)} />
            </Field>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs uppercase tracking-wide text-mint-400">Location</h3>
          <div className="grid sm:grid-cols-3 gap-4 items-end">
            <Field label="Store Latitude" hint="auto / GPS">
              <TextInput value={form.latitude} readOnly placeholder="—" />
            </Field>
            <Field label="Store Longitude" hint="auto / GPS">
              <TextInput value={form.longitude} readOnly placeholder="—" />
            </Field>
            <button
              type="button"
              onClick={detectLocation}
              disabled={locating}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-mint-500/40 text-mint-300 hover:border-mint-500/70 transition-colors px-4 py-2.5 text-sm disabled:opacity-50"
            >
              <LocateFixed size={15} /> {locating ? 'Detecting…' : 'Detect Location'}
            </button>
          </div>
          <Field label="Geo-Fence Radius" hint="meters" required>
            <TextInput
              type="number"
              min="50"
              value={form.geoFenceRadius}
              onChange={(e) => update('geoFenceRadius', e.target.value)}
              placeholder="e.g. 150"
              required
            />
          </Field>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs uppercase tracking-wide text-mint-400">Business Verification</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Business Registration / License" hint="required for verification">
              <FileInput fileName={form.businessLicense} onChange={(name) => update('businessLicense', name)} />
            </Field>
            <Field label="Business ID / Registration Number" hint="required">
              <TextInput value={form.businessRegNumber} onChange={(e) => update('businessRegNumber', e.target.value)} />
            </Field>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xs uppercase tracking-wide text-mint-400">POS</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="POS System Available" required>
              <SelectInput options={posOptions} value={form.posAvailable} onChange={(e) => update('posAvailable', e.target.value)} required />
            </Field>
            <Field label="POS Integration Details" hint="optional">
              <TextInput value={form.posDetails} onChange={(e) => update('posDetails', e.target.value)} />
            </Field>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-xs uppercase tracking-wide text-mint-400">Verification</h3>
          <OtpField verified={otpVerified} onVerified={setOtpVerified} />
          <CheckboxInput
            checked={form.acceptTerms}
            onChange={(v) => update('acceptTerms', v)}
            label="I accept the Terms & Conditions"
          />
        </section>

        {error && <p className="text-sm text-rose-400">{error}</p>}

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-mint-500 hover:bg-mint-400 text-ink-950 transition-all duration-300 hover:-translate-y-0.5 px-6 py-3 font-semibold shadow-[0_0_60px_-15px_rgba(63,214,138,0.45)]"
        >
          <UserPlus size={16} /> Submit for Approval
        </button>

        <p className="text-center text-sm text-white/40">
          Already registered?{' '}
          <Link to="/login/retailer" className="text-mint-400 hover:text-mint-300">
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
