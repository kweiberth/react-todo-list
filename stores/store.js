import {applyMiddleware, compose, createStore} from 'redux'
import reducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// add middleware
let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)

export default function configureStore(initialState = { todos: [], user: {} }){
  return finalCreateStore(reducer, initialState)
}
