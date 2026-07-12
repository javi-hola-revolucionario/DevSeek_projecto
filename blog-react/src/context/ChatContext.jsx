import { createContext, useReducer } from 'react'
import { chatReducer, initialState } from './chatReducer'

export const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState)

  const sendMessage = async (content) => {
    if (!content.trim()) {
      return
    }

    const userMessage = { id: crypto.randomUUID(), role: 'user', content }
    dispatch({ type: 'ADD_MESSAGE', payload: userMessage })
    dispatch({ type: 'ADD_HISTORY', payload: content })
    dispatch({ type: 'SET_LOADING', payload: true })

    try {
      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama3.2',
          prompt: content,
          stream: false,
        }),
      })

      const data = await response.json()
      const assistantMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: data.response || 'No response received.',
      }

      dispatch({ type: 'ADD_MESSAGE', payload: assistantMessage })
    } catch (error) {
      dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: 'Unable to reach Ollama. Make sure the service is running.',
        },
      })
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  return (
    <ChatContext.Provider value={{ ...state, sendMessage }}>
      {children}
    </ChatContext.Provider>
  )
}
