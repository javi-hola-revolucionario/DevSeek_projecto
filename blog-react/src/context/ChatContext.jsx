import { createContext, useReducer, useState } from 'react'
import { chatReducer, initialState } from './chatReducer'
import { generateResponse } from '../services/ollamaService'

export const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendMessage = async (content) => {
    if (!content.trim()) {
      return
    }

    const userMessage = { id: crypto.randomUUID(), role: 'user', content }
    dispatch({ type: 'ADD_MESSAGE', payload: userMessage })
    dispatch({ type: 'ADD_HISTORY', payload: content })
    setIsLoading(true)
    setError(null)

    try {
      const response = await generateResponse(content)
      const assistantMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: response || 'No response received.',
      }

      dispatch({ type: 'ADD_MESSAGE', payload: assistantMessage })
    } catch (error) {
      setError('Unable to reach Ollama. Make sure the service is running.')
      dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: 'Unable to reach Ollama. Make sure the service is running.',
        },
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ChatContext.Provider value={{ ...state, isLoading, error, sendMessage }}>
      {children}
    </ChatContext.Provider>
  )
}
