import React, {Component} from 'react'
import actions from '../actions/actions'

class ToDoItem extends Component{

  handleComplete(){
    this.props.action.comepleteTodo(this.props.todo.id)
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
