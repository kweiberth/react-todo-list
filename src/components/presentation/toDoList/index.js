import React, { Component } from 'react';
import ToDosContainer from '../../container/toDoList/toDos';
import AddToDoContainer from '../../container/toDoList/addToDo';

class ToDoList extends Component{
  render(){
    return(
      <div>
        <h2>Todo List!</h2>
        <ToDosContainer />
        <AddToDoContainer />
      </div>
    );
  }
}

export default ToDoList;
