import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import userReducer from './userReducer'

const reducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
})

export default reducer
