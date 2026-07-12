function History({ items = [] }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Recent prompts
      </h3>
      <ul className="space-y-2">
        {items.length === 0 ? (
          <li className="text-sm text-slate-500">No history yet.</li>
        ) : (
          items.map((item, index) => (
            <li key={`${item}-${index}`} className="truncate text-sm text-slate-300">
              • {item}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default History
