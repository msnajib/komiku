import * as types from './../types'

const initialState = {
  todos: []
};

export default function reducerTodos(state = initialState, action) {
  switch (action.type) {
    case types.GET_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case types.ADD_TODOS:
      state.todos.push(action.payload)
      return {
        ...state
      }
    case types.UPDATE_TODOS:
      const updateData = state.todos.findIndex(item => item.id === action.payload.id)
      state.todos[updateData] = action.payload
      return {
        ...state
      }
    case types.DELETE_TODOS:
      const deleteData = state.todos.filter(item => item.id !== action.payload.id)
      return {
        ...state,
        todos: deleteData
      }
    default:
      return state;
  }
}