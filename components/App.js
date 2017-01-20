import React, { Component } from 'react'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import UserInfo from './UserInfo'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import actions from '../actions/actions'

class App extends Component {

  render(){
    return (
      <div className="app">
        <div>To Do List.</div>
        <UserInfo actions={this.props.actions} user={this.props.user}/>
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
