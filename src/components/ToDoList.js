import React, {Component} from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends Component{

  render(){
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return <ToDoItem actions={this.props.actions} key={todo.id} todo={todo} />
          })
        }
      </ul>
    )
  }

}


export default ToDoList
