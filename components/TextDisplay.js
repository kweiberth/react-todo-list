import React, { Component } from 'react'

class TextDisplay extends Component {

  handleClick () {
    console.log('trying to delete a letter')
    this.props.deleteLetter()
  }

  render () {
    return (
      <div>
        <div>
          I am goint to display text:
          {this.props.text}
        </div>
        <button onClick={this.handleClick.bind(this)}>
          delete one letter
        </button>
      </div>
    )
  }
}

export default TextDisplay
