import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
})

export default rootReducer;
