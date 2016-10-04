
function getId (todos) {
  return todos.reduce((MaxId, todo) => {
      return Math.max(todo.id, MaxId)
    }, -1) + 1
}

export default function todoReducer (todos=[], action) {
  switch (action.type) {

    case 'ADD_TODO':
      return [{
          text: action.text,
          completed: false,
          id: getId(todos)
        }, ...todos]

    case 'COMPLETE_TODO':
      return todos.map(todo => {
          if (todo.id === action.id) return Object.assign({}, todo, {completed: true})
          else return todo
        })

    case 'DELETE_TODO':
      return todos.filter((todo) => {
          return todo.id !== action.id
        })

    default:
      return todos
  }
}
