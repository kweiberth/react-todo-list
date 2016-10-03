import React, { Component } from 'react'
import TextInput from './TextInput.js'
import TodoList from './todoList.js'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div>
        <h1>This is Tony first (hot module reloading) react app!</h1>
        <h1>~~Todo List~~</h1>
        <TextInput dispatch={this.props.dispatch} />
        <TodoList todos={this.props.todos} />
      </div>
    )
  }
}

function mapStateProps (state) {
  return state
}

export default connect(mapStateProps)(App)
