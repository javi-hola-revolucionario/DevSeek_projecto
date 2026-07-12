export const initialState = {
  messages: [],
  history: [],
  isLoading: false,
}

export function chatReducer(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }
    case 'ADD_HISTORY':
      return {
        ...state,
        history: [action.payload, ...state.history].slice(0, 6),
      }
    default:
      return state
  }
}
