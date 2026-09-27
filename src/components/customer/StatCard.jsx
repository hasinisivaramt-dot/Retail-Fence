export default function StatCard({ icon: Icon, iconBg, label, value, sub, trend }) {
  return (
    <div className="card-premium p-4 sm:p-5 group hover:-translate-y-1 transition-all duration-500 hover:border-[#c9794e]/35">
      <div className="flex items-start justify-between gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg} ring-1 ring-[#ead9ca]`}><Icon size={18}/></div>
        <span className="text-[9px] uppercase tracking-widest text-[#9b7561]/65">LIVE</span>
      </div>
      <p className="text-xl sm:text-2xl font-display font-semibold leading-tight truncate mt-4">{value}</p>
      <p className="text-[11px] uppercase tracking-wider text-[#8b6654]/70 mt-1">{label}</p>
      {(sub || trend) && <p className="text-[11px] mt-2 flex items-center gap-1.5"><span className="text-[#7f9d70]">{trend}</span><span className="text-[#8b6654]/65">{sub}</span></p>}
      <div className="mt-4 h-px bg-gradient-to-r from-[#b85f37]/30 via-[#7b4b68]/10 to-transparent"/>
    </div>
  )
}
