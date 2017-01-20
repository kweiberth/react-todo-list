import {applyMiddleware, compose, createStore} from 'redux'
import reducer from '../reducers'
import logger from 'redux-logger'

// add middleware
let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = { todos: [], user: {} }){
  return finalCreateStore(reducer, initialState)
}
