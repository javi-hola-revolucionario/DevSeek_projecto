import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

export function useOllama() {
  return useContext(ChatContext)
}
