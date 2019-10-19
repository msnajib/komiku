//combine all reducer
import { combineReducers } from 'redux';

import reducerTodos from './../reducers/reducerTodos';

const appReducer = combineReducers({
  todos: reducerTodos
})

export default appReducer