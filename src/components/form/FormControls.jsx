export function Field({ label, required, hint, children }) {
  return (
    <label className="block">
      <span className="text-sm text-white/70 mb-1.5 flex items-center gap-1.5">
        {label}
        {required && <span className="text-rose-400">*</span>}
        {hint && <span className="text-xs text-white/35 font-normal">({hint})</span>}
      </span>
      {children}
    </label>
  )
}

const baseInput =
  'w-full rounded-xl bg-ink-900/70 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-rose-500/60'

export function TextInput(props) {
  return <input {...props} className={baseInput} />
}

export function TextArea(props) {
  return <textarea rows={3} {...props} className={`${baseInput} resize-none`} />
}

export function SelectInput({ options, placeholder, ...props }) {
  return (
    <select {...props} className={`${baseInput} appearance-none`}>
      <option value="" disabled>
        {placeholder || 'Select…'}
      </option>
      {options.map((o) => (
        <option key={o} value={o} className="bg-ink-900">
          {o}
        </option>
      ))}
    </select>
  )
}

export function ChipMultiSelect({ options, value, onChange }) {
  function toggle(opt) {
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt])
  }
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value.includes(opt)
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`text-xs rounded-full px-3.5 py-1.5 border transition-colors ${
              active
                ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                : 'border-white/10 text-white/50 hover:border-white/25'
            }`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

export function ToggleInput({ checked, onChange, label }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center gap-3"
    >
      <span
        className={`relative w-10 h-[22px] rounded-full transition-colors shrink-0 ${
          checked ? 'bg-rose-500' : 'bg-white/15'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-[18px] h-[18px] rounded-full bg-white transition-transform ${
            checked ? 'translate-x-[18px]' : 'translate-x-0'
          }`}
        />
      </span>
      {label && <span className="text-sm text-white/60">{label}</span>}
    </button>
  )
}

export function CheckboxInput({ checked, onChange, label }) {
  return (
    <label className="flex items-center gap-2.5 text-sm text-white/60 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 rounded accent-rose-500"
      />
      {label}
    </label>
  )
}

export function FileInput({ onChange, fileName }) {
  return (
    <label className={`${baseInput} flex items-center justify-between cursor-pointer text-white/50`}>
      <span className="truncate">{fileName || 'Choose file…'}</span>
      <span className="text-xs text-rose-400 shrink-0 ml-3">Upload</span>
      <input
        type="file"
        className="hidden"
        onChange={(e) => onChange(e.target.files?.[0]?.name || '')}
      />
    </label>
  )
}
