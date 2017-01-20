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
    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.id === action.data.id
            ? Object.assign({}, todo, {completed: true})
            : todo
        })
      })
    case 'DELETE_TODO':
    return Object.assign({}, state, {
      todos: state.todos.filter((todo) => {
        return todo.id !== action.data.id
      })
    })
    default:
      return state
  }
}
