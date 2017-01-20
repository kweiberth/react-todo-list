import React, {Component} from 'react'

class ToDoList extends Component{

  render(){
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return <li key={todo.id}>{todo.text}</li>
          })
        }
      </ul>
    )
  }

}


export default ToDoList
