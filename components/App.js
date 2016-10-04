import React, { Component } from 'react'
import TextInput from './TextInput.js'
import TodoList from './todoList.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/action.js'
import UserInfo from './UserInfo'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Todo List</h1>
        <UserInfo actions={this.props.actions} user={this.props.user} />
        <TextInput addTodo={this.props.actions.addTodo} />
        <TodoList todos={this.props.todos} actions={this.props.actions} />
      </div>
    )
  }
}

function mapStateProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateProps, mapDispatchToProps)(App)
