let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },

  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  }

}

export default actions
