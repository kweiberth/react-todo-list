import React, { Component } from 'react'
import ToDoContainer from '../../container/toDoList/toDo'

class ToDos extends Component{
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map(todo => <ToDoContainer key={todo.id} {...todo} />)}
        </tbody>
      </table>
    )
  }
}

export default ToDos
