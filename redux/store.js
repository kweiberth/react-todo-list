import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './index.js'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// ToDo: add middleware 
let finalCreateStore = compose(
  applyMiddleware(thunk,logger())
)(createStore)

export default function configureStore (initialState = {todo: [], user: []}) {
  return finalCreateStore(rootReducer, initialState)
}
