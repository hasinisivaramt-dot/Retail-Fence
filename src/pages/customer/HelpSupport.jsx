import { useState } from 'react'
import { ChevronDown, Tag, MapPin, CreditCard, RotateCw, Mail } from 'lucide-react'
import SectionCard from '../../components/customer/SectionCard'
import { Field, TextInput, TextArea, SelectInput } from '../../components/form/FormControls'

const faqs = [
  { q: 'How does geo-fencing detect when I enter a store?', a: 'Your device shares location with the Smart Geo-Offer app, which checks it against each partner store\'s geo-fence radius. When you cross into that radius, an entry event fires and offers are generated for you.' },
  { q: 'Why didn\'t I receive an offer at a nearby store?', a: 'Make sure location services and notifications are enabled in Settings. Offers are also personalized — a store may simply not have one matching your preferences right now.' },
  { q: 'How do I redeem a coupon at checkout?', a: 'Open the offer or coupon and tap Redeem — this shows a QR code / redemption code the store\'s POS can scan or enter directly.' },
  { q: 'Can I use Smart Geo-Offer without a POS-integrated store?', a: 'Yes — some offers can be shown to staff manually if the store doesn\'t have POS integration yet.' },
]

const quickLinks = [
  { icon: Tag, label: 'Report an offer issue' },
  { icon: RotateCw, label: 'Redemption problem' },
  { icon: MapPin, label: 'Location problem' },
  { icon: CreditCard, label: 'Payment / POS problem' },
]

export default function HelpSupport() {
  const [open, setOpen] = useState(0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">Help & Support</h1>
        <p className="text-sm text-[#765345]/70">Answers to common questions, or reach out directly.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map(({ icon: Icon, label }) => (
          <button key={label} className="card p-5 text-left hover:border-[#dfc8b7] transition-colors">
            <Icon size={18} className="text-rose-400 mb-3" />
            <p className="text-sm font-medium">{label}</p>
          </button>
        ))}
      </div>

      <SectionCard title="Frequently Asked Questions">
        <div className="divide-y divide-white/5">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="text-sm font-medium pr-4">{f.q}</span>
                <ChevronDown size={16} className={`shrink-0 text-[#765345]/65 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <p className="text-sm text-[#6b4737]/70 leading-relaxed pb-4">{f.a}</p>}
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Contact Support">
        <form className="space-y-4 max-w-lg" onSubmit={(e) => e.preventDefault()}>
          <Field label="Topic">
            <SelectInput options={['Offer issue', 'Redemption problem', 'Location problem', 'Payment / POS problem', 'Something else']} placeholder="Select a topic" />
          </Field>
          <Field label="Message">
            <TextArea placeholder="Tell us what happened…" />
          </Field>
          <button className="inline-flex items-center gap-2 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors px-6 py-2.5 text-sm font-semibold">
            <Mail size={14} /> Send Message
          </button>
        </form>
      </SectionCard>
    </div>
  )
}
