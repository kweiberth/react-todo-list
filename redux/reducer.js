function getId (state) {
  return state.todos.reduce((MaxId, todo) => {
      return Math.max(todo.id, MaxId)
    }, -1) + 1
}

export default function reducer (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          text: action.text,
          completed: false,
          id: getId(state)
        }, ...state.todos]
      })
    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.id) return Object.assign({}, todo, {completed: true})
          else return todo
        })
      })
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id
        })
      })
    case 'CREATE_USER_ID':
      return Object.assign({}, state, {
        user: {
          username: state.user.username,
          id: action.id
        }
      })
    default:
      return state
  }
}
