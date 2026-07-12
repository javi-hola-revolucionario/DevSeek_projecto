import { useChat } from '../hooks/useChat'
import History from './History'
import Message from './Message'
import PromptInput from './PromptInput'
import Sidebar from './Sidebar'

function Chat() {
  const { messages, history, isLoading, error, sendMessage } = useChat()

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100">
      <Sidebar />

      <main className="flex flex-1 flex-col">
        <header className="border-b border-slate-800 px-6 py-4">
          <h1 className="text-lg font-semibold">DevSeek assistant</h1>
          <p className="text-sm text-slate-400">A simple chat scaffold powered by Ollama.</p>
        </header>

        <section className="flex-1 overflow-y-auto px-6 py-6">
          <div className="mx-auto flex max-w-3xl flex-col gap-4">
            {messages.map((message) => (
              <Message key={message.id} role={message.role} content={message.content} />
            ))}

            {error && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            {isLoading && <Message role="assistant" content="Thinking..." isLoading />}
          </div>
        </section>

        <div className="mx-auto mb-6 w-full max-w-3xl px-6">
          <History items={history} />
        </div>

        <PromptInput onSend={sendMessage} disabled={isLoading} />
      </main>
    </div>
  )
}

export default Chat
