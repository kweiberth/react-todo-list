import React, { Component, PropTypes } from 'react'
import LoggedIn from './loggedIn'
import LoggedOut from './loggedOut'

class User extends Component{
  render(){
    let greeting = null;
    if (!!this.props.username){
      greeting = <LoggedIn onLogout={this.props.onLogout} username={this.props.username} />
    }else {
      greeting = <LoggedOut onNewUsernameChange={this.props.onNewUsernameChange} onLogin={this.props.onLogin} newUsername={this.props.newUsername} />
    }
    return greeting;
  }
}

User.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onNewUsernameChange: PropTypes.func.isRequired,
  username: PropTypes.string,
  newUsername: PropTypes.string
}

export default User
