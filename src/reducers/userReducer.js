export default function userReducer(user = {username: 'airzy', id: 91}, action){

  switch(action.type){
    case 'CREATE_USER_ID':
      return Object.assign({}, user, {
          id: action.data.id
        })

    default:
      return user
  }

}
