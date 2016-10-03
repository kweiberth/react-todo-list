import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer.js'
import logger from 'redux-logger'

// ToDo: add middleware 
let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

export default function configureStore (initialState = {todo: []}) {
  return finalCreateStore(reducer, initialState)
}
