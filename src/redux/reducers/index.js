//combine all reducer
import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from './../../navigator/RootNavigator'
import reducerTodos from './../reducers/reducerTodos';
import reducerUsers from './../reducers/reducerUsers';

const reducerRouter = createNavigationReducer(RootNavigator);

const appReducer = combineReducers({
  router: reducerRouter,
  todos: reducerTodos,
  users: reducerUsers
})

export default appReducer