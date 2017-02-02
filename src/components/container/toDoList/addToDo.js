import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../../../actionCreators/toDoList_action_creator'
import AddToDo from '../../presentation/todoList/addToDo'

class AddToDoContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      textInput: ''
    }
  }

  _onTextInputChange = (event) => {
    this.setState({textInput: event.target.value})
  }

  _onSubmit = (event) => {
    var textInput = this.state.textInput
    this.props.addToDo(textInput)
    this.setState({textInput: ''})
    event.preventDefault()
  }

  render(){
    return(
      <AddToDo
        onSubmit={this._onSubmit}
        onTextInput={this._onTextInputChange}
        value={this.state.textInput} />
    )
  }
}

const mapActionCreatorsToProps = (dispatch) => {
  return {
    addToDo: (text) => {
      dispatch(addToDo(text))
    }
  }
}

export default connect(null, mapActionCreatorsToProps)(AddToDoContainer)
