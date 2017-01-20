function getId(state){
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}


export default function reducer(state, action){
  switch(action.type){
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          id: getId(state),
          text: action.data.text,
          completed: false
        }, ...state.todos]
      })
    default:
      return state
  }
}
