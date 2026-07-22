import { ChatProvider } from './context/ChatContext'
import Home from './pages/Home'
import { useState, useEffect } from 'react'
import { isSupabaseConfigured, supabase } from './utils/supabase'

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      return
    }

    async function getTodos() {
      const { data } = await supabase.from('todos').select()

      if (data) {
        setTodos(data)
      }
    }

    getTodos()
  }, [])

  return (
    <>
      {isSupabaseConfigured ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.name}</li>
          ))}
        </ul>
      ) : (
        <p style={{ padding: '1rem' }}>
          Supabase is not configured yet. Add your environment variables to enable the data list.
        </p>
      )}
      <ChatProvider>
        <Home />
      </ChatProvider>
    </>
  )
}
