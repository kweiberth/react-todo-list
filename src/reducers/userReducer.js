import actionConstants from '../constants/action_constants';

export default function userReducer(user = {username: 'airzy'}, action){

  switch(action.type){

    case actionConstants.LOGOUT_USER:
      return {};

    case actionConstants.LOGIN_USER:
      return {
        username: action.data.username
      };

    default:
      return user;
  }

}
