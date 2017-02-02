import actionConstants from '../constants/action_constants'
import toDoReducer from './toDoReducer'

function getId(todos){
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

export default function toDosReducer(todos = [{id: 1, text: "Foo", completed: false}], action){

  switch(action.type){
    case actionConstants.ADD_TODO:
      return [{
        id: getId(todos),
        text: action.data.text,
        completed: false
      }, ...todos]

    case actionConstants.TOGGLE_TODO:
      return todos.map(toDo => {
        return toDo.id === action.data.id ? toDoReducer(toDo, action) : toDo
      })

    case actionConstants.DELETE_TODO:
      return todos.filter((todo) => {
        return todo.id !== action.data.id
      })

    default:
      return todos
  }

}
