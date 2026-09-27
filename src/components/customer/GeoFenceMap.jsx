import { useMemo, useState } from 'react'
import { MapPin, Navigation, Crosshair, Radio, LocateFixed } from 'lucide-react'

const DEFAULT = { lat: 17.3850, lon: 78.4867 }
function bbox(lat, lon) { const d=.018; return `${lon-d},${lat-d},${lon+d},${lat+d}` }
export default function GeoFenceMap({ stores=[], showFence=true, height='h-64' }) {
 const [pos,setPos]=useState(DEFAULT); const [live,setLive]=useState(false)
 const src=useMemo(()=>`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox(pos.lat,pos.lon))}&layer=mapnik&marker=${pos.lat}%2C${pos.lon}`,[pos])
 const locate=()=>{ if(!navigator.geolocation)return; navigator.geolocation.getCurrentPosition(p=>{setPos({lat:p.coords.latitude,lon:p.coords.longitude});setLive(true)}) }
 const selected=stores.find(s=>s.selected)||stores[0]
 return <div className={`relative w-full ${height} rounded-3xl overflow-hidden border border-[#e4cfc0] bg-[#f3e7dd] shadow-inner`}>
   <iframe title="OpenStreetMap geo-fence view" src={src} className="absolute inset-0 w-full h-full border-0" loading="lazy"/>
   <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#fffaf5]/25 via-transparent to-[#fffaf5]/10"/>
   {showFence && selected && <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-2 border-[#b85f37]/60 bg-[#b85f37]/8 shadow-[0_0_50px_rgba(184,95,55,.16)] animate-pulse-slow pointer-events-none"/>}
   <div className="absolute top-3 left-3 flex items-center gap-2 text-[9px] uppercase tracking-widest text-[#8e472d] bg-[#fffaf5]/92 border border-[#e4cfc0] rounded-full px-2.5 py-1.5 backdrop-blur-xl shadow-sm"><Radio size={10} className="animate-pulse"/> {live?'Live GPS':'Geo-fence map'}</div>
   <button onClick={locate} className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-[#fffaf5]/95 border border-[#e4cfc0] text-[#b85f37] flex items-center justify-center shadow-sm hover:bg-white" title="Use my GPS"><LocateFixed size={15}/></button>
   {selected && <div className="absolute bottom-3 left-3 bg-[#fffaf5]/95 border border-[#e4cfc0] rounded-xl px-3 py-2 shadow-lg"><div className="flex items-center gap-1.5 text-xs font-semibold text-[#3b2418]"><MapPin size={12} className="text-[#b85f37]"/>{selected.name}</div><p className="text-[10px] text-[#8b6654] mt-0.5">{selected.distance} · offer zone active</p></div>}
   <div className="absolute bottom-3 right-3 text-[9px] text-[#765345] bg-[#fffaf5]/85 rounded-full px-2 py-1 border border-[#e4cfc0] flex items-center gap-1"><Navigation size={9}/> OpenStreetMap</div>
 </div>
}
