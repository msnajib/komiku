import { createStore } from 'redux';
import appReducer from './reducers';

const store = createStore(appReducer, {})

export { store };