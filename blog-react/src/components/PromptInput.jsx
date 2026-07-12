import { useState } from 'react'

function PromptInput({ onSend, disabled = false }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!value.trim()) {
      return
    }

    onSend(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="border-t border-slate-800 bg-slate-950 p-4">
      <div className="mx-auto flex max-w-3xl gap-3">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          disabled={disabled}
          placeholder="Ask anything..."
          className="flex-1 rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={disabled}
          className="rounded-full bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default PromptInput
