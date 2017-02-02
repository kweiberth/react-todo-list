import React, { Component, PropTypes } from 'react';

class AddToDo extends Component{
  render(){
    return(
      <form onSubmit={this.props.onSubmit}>
        <input type="text" value={this.props.value} onChange={this.props.onTextInput}/>
        <input type="submit" value="Add" onClick={this.handleClick}/>
      </form>
    );
  }
}

AddToDo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onTextInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default AddToDo;
