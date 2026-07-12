function Sidebar() {
  return (
    <aside className="hidden w-72 flex-col border-r border-slate-800 bg-slate-950 p-6 lg:flex">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">DevSeek</p>
        <h2 className="mt-2 text-xl font-semibold text-white">AI assistant</h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <p className="text-sm font-medium text-slate-200">Model</p>
        <p className="mt-1 text-sm text-slate-400">Ollama local chat</p>
      </div>
    </aside>
  )
}

export default Sidebar
