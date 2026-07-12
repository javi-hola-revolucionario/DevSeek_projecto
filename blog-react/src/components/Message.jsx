function Message({ role, content, isLoading = false }) {
  const isUser = role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-slate-800 text-slate-100'
        } ${isLoading ? 'animate-pulse' : ''}`}
      >
        {content}
      </div>
    </div>
  )
}

export default Message
