import React, { Component, PropTypes } from 'react';

class LoggedOut extends Component{
  render(){
    return(
      <form onSubmit={this.props.onLogin}>
        Please Login
        <label>
        Username:
        <input type="text" value={this.props.newUsername} onChange={this.props.onNewUsernameChange}/>
        </label>
        <input type="submit" value="Login"/>
      </form>

    );
  }
}

LoggedOut.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onNewUsernameChange: PropTypes.func.isRequired,
  newUsername: PropTypes.string.isRequired
};

export default LoggedOut;
