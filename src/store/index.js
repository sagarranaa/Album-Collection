import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import logger from 'redux-logger'; //Import redux-logger to log actions

let store;

//Exporting Store
export function configureStore() {
  store = createStore(reducers, applyMiddleware(thunk, logger));
  return store;
}
