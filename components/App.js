import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import { connect } from 'react-redux'

class App extends Component {

  render(){
    return (
      <div className="app">
        <div>To Do List.</div>
        <ToDoInput dispatch={this.props.dispatch}/>
        <ToDoList todos={this.props.todos}/>
      </div>
    )
  }

}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(App)
