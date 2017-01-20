function getId(todos){
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

export default function toDosReducer(todos = [], action){
  
  switch(action.type){
    case 'ADD_TODO':
      return [{
        id: getId(todos),
        text: action.data.text,
        completed: false
      }, ...todos]

    case 'COMPLETE_TODO':
      return todos.map((todo) => {
        return todo.id === action.data.id
          ? Object.assign({}, todo, {completed: true})
          : todo
        })

    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.id !== action.data.id
      })

    default:
      return todos
  }

}
