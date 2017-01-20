import React from 'react'
import { render } from 'react-dom'
// ES5
// var render = require('react-dom').render;
import App from './components/App'
import configureStore from './stores/store'
import { Provider } from 'react-redux'

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Complete me!'
  }],
  user: {
    username: 'airzy',
    id: '91'
  }
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
