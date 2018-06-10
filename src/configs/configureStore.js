/* global __DEV__ */

import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as reducers from 'reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default configureStore

function configureStore (initialState) {
  let middleWares
  if (__DEV__) middleWares = applyMiddleware(thunk, )
  else middleWares = applyMiddleware(thunk)

  const reducer = combineReducers(reducers)
  const store = createStore(reducer, initialState, middleWares)

  return store
}
