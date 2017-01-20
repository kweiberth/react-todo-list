let actions = {
  addTodo: function(text){
    return {
      type: 'ADD_TODO',
      data: {
        text: text
      }
    }
  }
}

export default actions
