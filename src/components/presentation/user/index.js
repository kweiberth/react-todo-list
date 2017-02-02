import React, { Component, PropTypes } from 'react';
import LoggedIn from './loggedIn';
import LoggedOut from './loggedOut';

class User extends Component{
  render(){
    //Moved the is logged in logic out into the container
    //Keeps the presentation component logic as minimal as possible
    if(this.props.isLoggedIn){
      return (this._loggedIn());
    }

    return this._loggedOut();
  }

  _loggedIn = () => {
    return (
      <LoggedIn
        onLogout={this.props.onLogout}
        username={this.props.username} />
    );
  }

  _loggedOut = () => {
    return (
      <LoggedOut
        onNewUsernameChange={this.props.onNewUsernameChange}
        onLogin={this.props.onLogin}
        newUsername={this.props.newUsername} />
    );
  }
}

User.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onNewUsernameChange: PropTypes.func.isRequired,
  username: PropTypes.string,
  newUsername: PropTypes.string
};

export default User;
