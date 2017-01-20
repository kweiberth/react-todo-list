import React, { Component } from 'react'

class ToDoInput extends Component{

  constructor(props, context){
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event){
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addTodo(this.state.inputText)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="I need to..." value={this.state.inputText} onChange={this.handleChange.bind(this)}/>
        <input type="submit" text="Submit"/>
      </form>
    )
  }

}

export default ToDoInput
