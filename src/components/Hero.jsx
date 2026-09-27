import { ArrowRight, PlayCircle, Sparkles, MapPin, Navigation2, Radio, Store } from 'lucide-react'

const stats = [
  { value: '50K+', label: 'Happy Customers' }, { value: '1.2K+', label: 'Partner Stores' }, { value: '85%', label: 'Offer Redemption Rate' }, { value: '4.8★', label: 'User Rating' },
]

export default function Hero() {
  return <section id="home" className="relative overflow-hidden pt-24 bg-[radial-gradient(circle_at_78%_18%,rgba(255,194,153,.55),transparent_30%),linear-gradient(180deg,#fff8f1,#fbf3eb)]">
    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,.95),transparent_35%)]"/>
    <div className="relative section-pad w-full max-w-[1450px] mx-auto py-12 lg:py-16">
      <div className="grid lg:grid-cols-[.76fr_1.24fr] gap-9 xl:gap-14 items-center">
        <div className="max-w-xl animate-rise">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.16em] text-[#8e472d] bg-[#fff4e9] border border-[#e5c9b5] rounded-full px-3.5 py-2 mb-6 shadow-sm"><Sparkles size={13}/> AI-powered retail intelligence</span>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.6rem] font-semibold leading-[.98] tracking-[-.055em] text-[#332117] mb-6">The Right Offer.<br/>At the <span className="text-[#8e472d]">Right Place.</span><br/>At the <span className="text-[#b85f37]">Right Time.</span></h1>
          <p className="text-base sm:text-lg text-[#765f52] leading-relaxed max-w-xl mb-7">Smart Geo-Offer combines AI, Geo-Fencing, POS data and real-time notifications to deliver personalized offers when you're near your favorite stores.</p>
          <div className="flex flex-wrap gap-3 mb-9"><a href="#features" className="group inline-flex items-center gap-2 rounded-xl bg-[#7d3f29] text-white px-5 py-3.5 font-semibold shadow-glow hover:-translate-y-1 transition-all">Explore Smart Offers <ArrowRight size={17}/></a><a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-[#b99078] bg-white/65 px-5 py-3.5 font-semibold text-[#57382a] hover:bg-white transition-all"><PlayCircle size={17}/> Watch Demo</a></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{stats.map(s=><div key={s.label} className="rounded-2xl border border-[#ead7ca] bg-white/60 backdrop-blur-xl p-3.5 shadow-sm"><div className="text-lg font-semibold text-[#8e472d]">{s.value}</div><div className="text-[9px] uppercase tracking-wider text-[#967a6b] mt-1">{s.label}</div></div>)}</div>
        </div>
        <div id="demo" className="relative animate-rise" style={{animationDelay:'120ms'}}>
          <div className="absolute -inset-5 rounded-[2.3rem] bg-[#c7774e]/10 blur-2xl"/>
          <div className="relative overflow-hidden rounded-[2rem] border-[5px] border-white/80 shadow-[0_35px_90px_rgba(99,54,32,.22)] bg-[#2a1a12] aspect-[16/9]">
            <video className="w-full h-full object-cover" autoPlay muted loop playsInline poster="/assets/smart-geo-offer-reference.png"><source src="/assets/geo-offer-gps-demo.mp4" type="video/mp4"/></video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#25150e]/20 via-transparent to-white/5 pointer-events-none"/>
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#3a2117]/75 text-white backdrop-blur-md px-3 py-1.5 text-[10px] font-semibold"><Radio size={12} className="text-[#ffad78] animate-pulse"/> GPS NETWORK LIVE</div>
            <div className="absolute right-5 bottom-5 rounded-2xl bg-white/90 backdrop-blur-xl px-4 py-3 shadow-xl text-[#3b2418]"><div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#8e472d]"><Store size={12}/> Nearby store</div><div className="font-semibold mt-1">FreshMart · 120 m</div><div className="text-xs text-[#7e685a] mt-1">20% OFF · Coffee + Biscuits</div></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/80 backdrop-blur-xl shadow-2xl flex items-center justify-center text-[#7d3f29] border border-white"><PlayCircle size={34}/></div>
          </div>
          <div className="absolute -bottom-6 -left-4 sm:-left-8 rounded-2xl bg-white/90 border border-[#e4cdbd] backdrop-blur-xl px-4 py-3 shadow-xl animate-float"><div className="text-[10px] uppercase tracking-widest text-[#967263]">Personalized offer</div><div className="font-semibold text-[#3b2418] mt-1">20% OFF · 86% match</div><div className="text-xs text-[#8a7162] mt-1 flex items-center gap-1"><Navigation2 size={11}/> You're inside the geo-fence</div></div>
          <div className="absolute -top-4 right-4 rounded-2xl bg-[#fff7f0]/92 border border-[#e4cdbd] backdrop-blur-xl px-4 py-3 shadow-xl animate-drift"><div className="text-[10px] text-[#8e472d] font-semibold">AI RECOMMENDATION</div><div className="text-sm font-semibold text-[#3b2418] mt-1">Coffee + Biscuits</div></div>
        </div>
      </div>
    </div>
  </section>
}
