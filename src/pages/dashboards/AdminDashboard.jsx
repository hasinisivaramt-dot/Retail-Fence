import { useEffect, useState } from 'react'
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Users,
  Store,
  Activity,
  Server,
  Cpu,
  Database,
  UserCog,
} from 'lucide-react'
import DashboardShell from './DashboardShell'
import { useAuth } from '../../context/AuthContext'
import { Field, TextInput, SelectInput, ChipMultiSelect } from '../../components/form/FormControls'

const TABS = ['Retailer Approvals', 'Customers', 'System Health', 'Add Admin']
const adminRoles = ['Super Admin', 'Platform Admin', 'Support Admin', 'Operations Admin']
const permissionOptions = ['Approve Retailers', 'Manage Customers', 'System Config', 'View Analytics', 'Manage Admins']

export default function AdminDashboard() {
  const { listByRole, updateUserStatus, addAdmin } = useAuth()
  const [tab, setTab] = useState(TABS[0])
  const [retailers, setRetailers] = useState([])
  const [customers, setCustomers] = useState([])

  function refresh() {
    setRetailers(listByRole('retailer'))
    setCustomers(listByRole('customer'))
  }

  useEffect(refresh, [])

  const pending = retailers.filter((r) => r.status === 'pending')
  const decided = retailers.filter((r) => r.status !== 'pending')

  return (
    <DashboardShell accent="violet" roleLabel="Admin">
      <div className="flex items-center gap-2 text-violet-400 text-sm mb-2">
        <ShieldCheck size={16} /> Admin Portal
      </div>
      <h1 className="text-2xl font-bold mb-1">System Overview</h1>
      <p className="text-white/50 mb-8">Approve retailers, manage customers, and monitor system health.</p>

      <div className="grid sm:grid-cols-3 gap-5 mb-8">
        <SummaryCard icon={Clock} label="Pending Approvals" value={pending.length} tone="amber" />
        <SummaryCard icon={Store} label="Active Retailers" value={retailers.filter((r) => r.status === 'active' || r.status === 'approved').length} tone="mint" />
        <SummaryCard icon={Users} label="Registered Customers" value={customers.length} tone="rose" />
      </div>

      <div className="flex flex-wrap gap-2 mb-6 border-b border-white/5 pb-2">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-sm rounded-full px-4 py-2 transition-colors ${
              tab === t ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40' : 'text-white/50 hover:text-white border border-transparent'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Retailer Approvals' && (
        <RetailerApprovals pending={pending} decided={decided} onDecide={(id, status) => { updateUserStatus(id, status); refresh() }} />
      )}
      {tab === 'Customers' && <CustomerList customers={customers} />}
      {tab === 'System Health' && <SystemHealth />}
      {tab === 'Add Admin' && <AddAdminForm addAdmin={addAdmin} />}
    </DashboardShell>
  )
}

function SummaryCard({ icon: Icon, label, value, tone }) {
  const toneMap = {
    amber: 'bg-amber-500/15 text-amber-400',
    mint: 'bg-mint-500/15 text-mint-400',
    rose: 'bg-rose-500/15 text-rose-400',
  }
  return (
    <div className="card p-5 flex items-center gap-4">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${toneMap[tone]}`}>
        <Icon size={19} />
      </div>
      <div>
        <p className="text-lg font-bold">{value}</p>
        <p className="text-xs text-white/50">{label}</p>
      </div>
    </div>
  )
}

function RetailerApprovals({ pending, decided, onDecide }) {
  const [reasons, setReasons] = useState({})

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-semibold mb-4">Awaiting review ({pending.length})</h2>
        {pending.length === 0 && <p className="text-sm text-white/40">Nothing pending — you're all caught up.</p>}
        <div className="space-y-3">
          {pending.map((r) => (
            <div key={r.id} className="card p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-medium">{r.storeName || 'Unnamed store'}</p>
                  <p className="text-xs text-white/50">{r.storeCategory} · {r.city}, {r.state}</p>
                  <p className="text-xs text-white/40 mt-1">{r.fullName} · {r.email}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                  <input
                    value={reasons[r.id] || ''}
                    onChange={(e) => setReasons((s) => ({ ...s, [r.id]: e.target.value }))}
                    placeholder="Reason if rejecting…"
                    className="text-xs rounded-lg bg-ink-900/70 border border-white/10 px-3 py-2 outline-none focus:border-white/25"
                  />
                  <button
                    onClick={() => onDecide(r.id, 'approved')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full bg-mint-500 hover:bg-mint-400 text-ink-950 px-4 py-2 transition-colors"
                  >
                    <CheckCircle2 size={13} /> Approve
                  </button>
                  <button
                    onClick={() => onDecide(r.id, 'rejected')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full border border-rose-500/40 text-rose-300 hover:border-rose-500/70 px-4 py-2 transition-colors"
                  >
                    <XCircle size={13} /> Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {decided.length > 0 && (
        <div>
          <h2 className="font-semibold mb-4 text-white/70">Decision history</h2>
          <div className="space-y-2">
            {decided.map((r) => (
              <div key={r.id} className="flex items-center justify-between text-sm bg-ink-900/50 border border-white/5 rounded-xl px-4 py-3">
                <span>{r.storeName || r.fullName}</span>
                <span className={`text-xs flex items-center gap-1 ${r.status === 'approved' ? 'text-mint-400' : 'text-rose-400'}`}>
                  {r.status === 'approved' ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                  {r.status === 'approved' ? 'Approved' : 'Rejected'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function CustomerList({ customers }) {
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-white/40 border-b border-white/5">
            <th className="px-5 py-3 font-medium">Name</th>
            <th className="px-5 py-3 font-medium">Email</th>
            <th className="px-5 py-3 font-medium">Mobile</th>
            <th className="px-5 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 && (
            <tr>
              <td colSpan={4} className="px-5 py-8 text-center text-white/40">
                No customers registered yet.
              </td>
            </tr>
          )}
          {customers.map((c) => (
            <tr key={c.id} className="border-b border-white/5 last:border-0">
              <td className="px-5 py-3">{c.fullName}</td>
              <td className="px-5 py-3 text-white/60">{c.email}</td>
              <td className="px-5 py-3 text-white/60">{c.mobile}</td>
              <td className="px-5 py-3">
                <span className="text-xs text-mint-400 bg-mint-500/10 border border-mint-500/25 rounded-full px-2.5 py-1">
                  Active
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SystemHealth() {
  const metrics = [
    { icon: Server, label: 'API Uptime', value: '99.98%' },
    { icon: Cpu, label: 'Avg. Response Time', value: '142 ms' },
    { icon: Database, label: 'Geo-Fence Events / hr', value: '2,340' },
    { icon: Activity, label: 'Active Sessions', value: '186' },
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {metrics.map(({ icon: Icon, label, value }) => (
        <div key={label} className="card p-5">
          <div className="w-10 h-10 rounded-lg bg-violet-500/15 text-violet-400 flex items-center justify-center mb-3">
            <Icon size={17} />
          </div>
          <p className="text-lg font-bold">{value}</p>
          <p className="text-xs text-white/50">{label}</p>
        </div>
      ))}
      <p className="sm:col-span-2 lg:col-span-4 text-xs text-white/30">
        Illustrative metrics — wire this panel up to real monitoring (uptime checks, APM, queue depth) in production.
      </p>
    </div>
  )
}

function AddAdminForm({ addAdmin }) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    adminRole: '',
    password: '',
    confirmPassword: '',
    permissions: [],
    accountStatus: 'active',
  })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (form.password !== form.confirmPassword) return setError('Passwords do not match.')
    try {
      addAdmin(form)
      setMessage(`${form.fullName} added as ${form.adminRole}.`)
      setError('')
      setForm({ fullName: '', email: '', mobile: '', adminRole: '', password: '', confirmPassword: '', permissions: [], accountStatus: 'active' })
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="card p-6 max-w-2xl">
      <div className="flex items-center gap-2 mb-1">
        <UserCog size={18} className="text-violet-400" />
        <h2 className="font-semibold">Add Admin — Internal Only</h2>
      </div>
      <p className="text-xs text-white/40 mb-6">
        Admin accounts have no public sign-up. Provision new accounts here as a Super Admin or Platform Admin.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Full Name" required>
            <TextInput value={form.fullName} onChange={(e) => update('fullName', e.target.value)} required />
          </Field>
          <Field label="Email" required>
            <TextInput type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required />
          </Field>
          <Field label="Mobile Number" required>
            <TextInput type="tel" value={form.mobile} onChange={(e) => update('mobile', e.target.value)} required />
          </Field>
          <Field label="Admin Role" required>
            <SelectInput options={adminRoles} value={form.adminRole} onChange={(e) => update('adminRole', e.target.value)} required />
          </Field>
          <Field label="Password / Temporary Password" required>
            <TextInput type="password" value={form.password} onChange={(e) => update('password', e.target.value)} required />
          </Field>
          <Field label="Confirm Password" required>
            <TextInput type="password" value={form.confirmPassword} onChange={(e) => update('confirmPassword', e.target.value)} required />
          </Field>
        </div>

        <Field label="Permissions" required>
          <ChipMultiSelect options={permissionOptions} value={form.permissions} onChange={(v) => update('permissions', v)} />
        </Field>

        <Field label="Account Status" required>
          <SelectInput options={['active', 'inactive']} value={form.accountStatus} onChange={(e) => update('accountStatus', e.target.value)} required />
        </Field>

        {error && <p className="text-sm text-rose-400">{error}</p>}
        {message && <p className="text-sm text-mint-400">{message}</p>}

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-violet-500 hover:bg-violet-400 transition-all duration-300 hover:-translate-y-0.5 px-6 py-3 font-semibold shadow-[0_0_60px_-15px_rgba(139,92,246,0.5)]"
        >
          <UserCog size={16} /> Create Admin Account
        </button>
      </form>
    </div>
  )
}
