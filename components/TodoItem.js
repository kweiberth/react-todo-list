import React, { Component } from 'react'

class TodoItem extends Component {

  handleComplete (event) {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete (event) {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render () {
    return (
      <li>
        {this.props.todo.text}
        <button onClick={this.handleComplete.bind(this)}>
          Mark Completed
        </button>
        <button onClick={this.handleDelete.bind(this)}>
          Delete todo
        </button>
      </li>
    )
  }
}

export default TodoItem
