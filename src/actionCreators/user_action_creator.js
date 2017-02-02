import * as actions from '../actions/user_actions';

export function logoutUser(){
  return function(dispatch){
    dispatch(actions.logoutUser());
  };
}

export function loginUser(username){
  return function(dispatch){
    dispatch(actions.loginUser(username));
  };
}
