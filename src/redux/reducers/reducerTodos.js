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
    default:
      return state;
  }
}