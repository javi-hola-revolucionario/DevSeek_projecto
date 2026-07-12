export const initialState = {
  messages: [],
  history: [],
};

export function chatReducer(state, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case "ADD_HISTORY":
      return {
        ...state,
        history: [...state.history, action.payload],
      };

    case "CLEAR_CHAT":
      return {
        ...state,
        messages: [],
      };

    default:
      return state;
  }
}