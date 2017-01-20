import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './components/App'

let store = createStore(
  reducer,
  applyMiddleware(thunk, logger())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
