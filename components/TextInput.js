import React, { Component } from 'react'
import TextDisplay from './TextDisplay.js'

class TextInput extends Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  // deleteLetter () {
  //   this.setState({
  //     inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
  //   })
  // }

  handleChange (event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log('submit button clicked')
    this.props.addTodo(this.state.inputText)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            placeholder='What is your focus today?'
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)} />
          {/*<TextDisplay text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)} />*/}
          <input type='submit' text='Submit' />
        </form>
      </div>
    )
  }
}

export default TextInput
