import React, { Component, PropTypes } from 'react';

class ToDo extends Component{

  render(){
    let _style = this.props.completed ? 'green' : 'red';

    return(
      <tr>
        <td style={{color: _style}} onClick={this.props.onToggle}>{this.props.text}</td>
        <td>
          <label>
            Completed
            <input type="checkbox" checked={this.props.completed} onClick={this.props.onToggle} />
          </label>
          <input type="button" value="Delete" onClick={this.props.onDelete} />
        </td>
      </tr>
    );
  }
}

ToDo.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default ToDo;
