import { combineReducers, createStore } from 'redux';
import reducers from '../reducers';

const initStore = () => createStore(combineReducers(reducers));

export default initStore;
