import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import actions from '../actions/actions'

class App extends Component {

  render(){
    return (
      <div className="app">
        <div>To Do List.</div>
        <ToDoInput addTodo={this.props.actions.addTodo}/>
        <ToDoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    )
  }

}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
