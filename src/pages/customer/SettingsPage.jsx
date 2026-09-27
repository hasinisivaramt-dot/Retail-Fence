import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { KeyRound, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import SectionCard from '../../components/customer/SectionCard'
import { ToggleInput } from '../../components/form/FormControls'

function ToggleRow({ label, defaultChecked = true }) {
  const [checked, setChecked] = useState(defaultChecked)
  return (
    <div className="flex items-center justify-between py-2.5">
      <span className="text-sm text-white/70">{label}</span>
      <ToggleInput checked={checked} onChange={setChecked} />
    </div>
  )
}

export default function SettingsPage() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">Settings</h1>
        <p className="text-sm text-white/45">Manage your account, location, and notification preferences.</p>
      </div>

      <SectionCard title="Account">
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 text-sm rounded-full border border-white/15 hover:border-white/30 transition-colors px-4 py-2.5">
            Edit Profile
          </button>
          <button className="inline-flex items-center gap-2 text-sm rounded-full border border-white/15 hover:border-white/30 transition-colors px-4 py-2.5">
            <KeyRound size={14} /> Change Password
          </button>
          <button
            onClick={() => { logout(); navigate('/') }}
            className="inline-flex items-center gap-2 text-sm rounded-full border border-rose-500/40 text-rose-300 hover:border-rose-500/70 transition-colors px-4 py-2.5"
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Location">
        <ToggleRow label="Location services" />
        <ToggleRow label="Geo-fencing" />
        <ToggleRow label="Background location" defaultChecked={false} />
      </SectionCard>

      <SectionCard title="Notifications">
        <ToggleRow label="Promotional offers" />
        <ToggleRow label="Geo-fence alerts" />
        <ToggleRow label="Expiry alerts" />
        <ToggleRow label="Rewards" />
      </SectionCard>

      <SectionCard title="Privacy">
        <ToggleRow label="Share location data" />
        <ToggleRow label="Share purchase data" />
        <ToggleRow label="Personalized recommendations" />
      </SectionCard>
    </div>
  )
}
