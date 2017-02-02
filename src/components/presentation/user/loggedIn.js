import React, { Component, PropTypes } from 'react';

class LoggedIn extends Component{
  render(){
    return(
      <div>
        Welcome {this.props.username}!
        <input type="button" value="Logout" onClick={this.props.onLogout}/>
      </div>
    );
  }
}

LoggedIn.propTypes = {
  onLogout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

export default LoggedIn;
