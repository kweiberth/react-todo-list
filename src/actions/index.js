let actions = {
  addTodo: function(text){
    return {
      type: 'ADD_TODO',
      data: {
        text: text
      }
    }
  },
  completeTodo: function(id){
    return {
      type: 'COMPLETE_TODO',
      data: {
        id: id
      }
    }
  },
  deleteTodo: function(id){
    return {
      type: 'DELETE_TODO',
      data: {
        id: id
      }
    }
  },
  createNewUserId: function(){
    return {
      type: 'CREATE_USER_ID',
      data: {
        id: Math.floor(Math.random()*100) + 1
      }
    }
  },
  createNewUserIdIfOdd: function(){
    return (dispatch, getState) => {
      const { user } = getState();
      if (user.id % 2 === 0){
        return
      }
      dispatch(actions.createNewUserId())
    }
  },
  createNewUserIdAsync: function(){
    return (dispatch) => {
      setTimeout(() => {
        dispatch(actions.createNewUserId())
      }, 2500)
    }
  }
}

export default actions
