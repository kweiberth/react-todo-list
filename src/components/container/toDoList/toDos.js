import React, { Component } from 'react'
import { connect } from 'react-redux'
import ToDos from '../../presentation/todoList/toDos'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(ToDos)
