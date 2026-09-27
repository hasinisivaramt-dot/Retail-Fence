import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import SectionCard from '../../components/customer/SectionCard'
import { Field, TextInput, ToggleInput } from '../../components/form/FormControls'

export default function ProfilePage() {
  const { user } = useAuth()
  const [locationServices, setLocationServices] = useState(user?.locationServices ?? true)
  const [offerNotifications, setOfferNotifications] = useState(user?.offerNotifications ?? true)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">Profile</h1>
        <p className="text-sm text-white/45">Your personal details and shopping preferences.</p>
      </div>

      <SectionCard>
        <div className="flex items-center gap-4 mb-6">
          <span className="w-16 h-16 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center text-xl font-bold shrink-0">
            {(user?.fullName || 'U').charAt(0)}
          </span>
          <div>
            <p className="font-semibold text-lg">{user?.fullName}</p>
            <p className="text-xs text-white/40">{user?.email}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Full Name">
            <TextInput value={user?.fullName || ''} readOnly />
          </Field>
          <Field label="Email Address">
            <TextInput value={user?.email || ''} readOnly />
          </Field>
          <Field label="Mobile Number">
            <TextInput value={user?.mobile || ''} readOnly />
          </Field>
          <Field label="Date of Birth">
            <TextInput value={user?.dob || '—'} readOnly />
          </Field>
        </div>
      </SectionCard>

      <SectionCard title="Shopping Preferences">
        <div>
          <p className="text-xs text-white/40 mb-1.5">Preferred Categories</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {(user?.categories?.length ? user.categories : ['Not set']).map((c) => (
              <span key={c} className="text-xs bg-rose-500/10 text-rose-300 border border-rose-500/20 rounded-full px-2.5 py-1">{c}</span>
            ))}
          </div>
          <p className="text-xs text-white/40 mb-1.5">Favorite Stores</p>
          <p className="text-sm text-white/70">{user?.favoriteStores || 'Not set'}</p>
        </div>
      </SectionCard>

      <SectionCard title="Location">
        <div className="space-y-4">
          <ToggleInput checked={locationServices} onChange={setLocationServices} label="Location permission" />
          <ToggleInput checked={offerNotifications} onChange={setOfferNotifications} label="Geo-fencing permission (offer notifications)" />
        </div>
      </SectionCard>
    </div>
  )
}
