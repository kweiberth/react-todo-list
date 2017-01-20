import React, {Component} from 'react'

class ToDoItem extends Component{

  handleComplete(){
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete(){
    this.props.actions.deleteTodo(this.props.todo.id)
  }

render(){
    return(
      <li>
        <div>{this.props.todo.text}</div>
        <button onClick={this.handleComplete.bind(this)}>Completed</button>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
      </li>
    )
  }

}

export default ToDoItem
