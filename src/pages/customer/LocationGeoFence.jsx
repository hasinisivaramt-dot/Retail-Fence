import { LocateFixed, CheckCircle2, Circle, MapPin } from 'lucide-react'
import SectionCard from '../../components/customer/SectionCard'
import GeoFenceMap from '../../components/customer/GeoFenceMap'
import { geoFenceStore, geoFenceTimeline } from '../../data/customerMock'

const mapStores = [
  { name: 'FreshMart', distance: '120 m', x: '48%', y: '42%', selected: true, radius: 160 },
  { name: 'ValueMart', distance: '800 m', x: '78%', y: '30%' },
  { name: 'D-Mart', distance: '450 m', x: '20%', y: '20%' },
  { name: 'Reliance Fresh', distance: '1.2 km', x: '85%', y: '70%' },
]

export default function LocationGeoFence() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-1">Location & Geo-Fence</h1>
        <p className="text-sm text-[#765345]/70">Real-time detection of stores and offer zones around you.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <SectionCard title="Current Location">
          <div className="space-y-3 text-sm">
            <Row label="Coordinates" value="17.3850° N, 78.4867° E" />
            <Row label="Accuracy" value="± 8 meters" />
            <Row label="Location services" value="Enabled" tone="mint" />
          </div>
          <button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full border border-rose-500/40 text-rose-300 hover:border-rose-500/70 transition-colors px-4 py-2.5 text-sm">
            <LocateFixed size={15} /> Refresh Location
          </button>
        </SectionCard>

        <SectionCard title="Geo-Fence Map" className="lg:col-span-2">
          <GeoFenceMap stores={mapStores} height="h-72" />
          <div className="mt-4 flex items-center gap-2 bg-mint-500/10 border border-mint-500/25 rounded-xl px-3.5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-mint-400 shrink-0" />
            <p className="text-xs text-mint-300">
              🟢 Inside — you're within {geoFenceStore.name}'s geo-fence ({geoFenceStore.distance}).
            </p>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Activity Timeline">
        <div className="space-y-4">
          {geoFenceTimeline.map((t, i) => (
            <div key={t.label} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                {t.done ? (
                  <CheckCircle2 size={16} className="text-mint-400" />
                ) : (
                  <Circle size={16} className="text-[#9b7561]/55" />
                )}
                {i < geoFenceTimeline.length - 1 && (
                  <span className={`w-px h-6 ${t.done ? 'bg-mint-500/30' : 'bg-[#ead9ca]/45'}`} />
                )}
              </div>
              <div className="pb-1">
                <p className={`text-sm ${t.done ? 'text-[#4a2d20]/90' : 'text-[#8b6654]/70'}`}>{t.label}</p>
                <p className="text-xs text-[#8b6654]/65">{t.time}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}

function Row({ label, value, tone }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[#765345]/70 flex items-center gap-1.5"><MapPin size={13} /> {label}</span>
      <span className={tone === 'mint' ? 'text-mint-400' : 'text-[#4a2d20]/90'}>{value}</span>
    </div>
  )
}
