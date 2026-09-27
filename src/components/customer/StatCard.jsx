export default function StatCard({ icon: Icon, iconBg, label, value, sub, trend }) {
  return (
    <div className="card p-5 flex items-start gap-3.5">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <p className="text-lg font-bold leading-tight truncate">{value}</p>
        <p className="text-xs text-white/45 mt-0.5">{label}</p>
        {(sub || trend) && (
          <p className="text-xs mt-1 flex items-center gap-1.5">
            {trend && <span className="text-mint-400">{trend}</span>}
            {sub && <span className="text-white/35">{sub}</span>}
          </p>
        )}
      </div>
    </div>
  )
}
