import React from 'react'
import { render } from 'react-dom'
import App from '../components/App.js'

render(
  // defined the encompassing component
  // DOM element we want to mount it to
  <App/>,
  document.getElementById('app')
)
