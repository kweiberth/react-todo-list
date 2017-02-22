import React, { Component } from 'react'

class TextDisplay extends Component {

  render() {
    return <div>I am displaying text: {this.props.text}</div>
  }
}

export default TextDisplay
