import { useState } from 'react'
import SectionCard from '../../components/customer/SectionCard'
import { recentPurchases } from '../../data/customerMock'

const stores = ['All Stores', ...new Set(recentPurchases.map((p) => p.store))]

export default function PurchaseHistory() {
  const [store, setStore] = useState('All Stores')
  const list = store === 'All Stores' ? recentPurchases : recentPurchases.filter((p) => p.store === store)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold mb-1">Purchase History</h1>
          <p className="text-sm text-white/45">Every transaction, with the offer that applied.</p>
        </div>
        <select
          value={store}
          onChange={(e) => setStore(e.target.value)}
          className="bg-ink-900/70 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-rose-500/40"
        >
          {stores.map((s) => (
            <option key={s} value={s} className="bg-ink-900">{s}</option>
          ))}
        </select>
      </div>

      <SectionCard>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="text-left text-white/40 border-b border-white/5">
                <th className="py-3 pr-4 font-medium">Store</th>
                <th className="py-3 pr-4 font-medium">Products</th>
                <th className="py-3 pr-4 font-medium">Date</th>
                <th className="py-3 pr-4 font-medium">Offer Used</th>
                <th className="py-3 font-medium text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {list.map((p) => (
                <tr key={p.id} className="border-b border-white/5 last:border-0">
                  <td className="py-3.5 pr-4 font-medium">{p.store}</td>
                  <td className="py-3.5 pr-4 text-white/60">{p.product}</td>
                  <td className="py-3.5 pr-4 text-white/40 text-xs">{p.date}</td>
                  <td className="py-3.5 pr-4">
                    <span className="text-xs font-mono text-rose-300">{p.offerUsed}</span>
                  </td>
                  <td className="py-3.5 text-right">
                    <p className="font-semibold">₹{p.amount}</p>
                    <p className="text-xs text-mint-400">-₹{p.discount} saved</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  )
}
