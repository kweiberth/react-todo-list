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
  }
}

export default actions
