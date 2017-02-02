import actionConstants from '../constants/action_constants';

export function logoutUser(){
  return {
    type: actionConstants.LOGOUT_USER,
    data: {
    }
  };
}

export function loginUser(username){
  return {
    type: actionConstants.LOGIN_USER,
    data: {
      username: username
    }
  };
}
