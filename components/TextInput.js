import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: 'initial text'
    }
  }

  deleteLetter() {
<<<<<<< HEAD
  	// take current this.state.inputText
  	// delete letter
  	// update state
  	this.setState({
  		inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
  	});
=======
    this.setState({
      inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
    })
>>>>>>> 6e632d269af730bafe7e671136547bcb39f68a16
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="This is going to be text"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <TextDisplay text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)}/>
      </div>
    )
  }

}

export default TextInput
