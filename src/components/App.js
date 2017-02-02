import React, { Component } from 'react';
import ToDoList from './presentation/toDoList/index';
import UserContainer from './container/user/index';

class App extends Component {
  render(){
    return (
      <div className="app">
        <UserContainer />
        <ToDoList />
      </div>
    );
  }
}

export default App;
