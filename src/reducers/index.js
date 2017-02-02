import { combineReducers } from 'redux';
import toDosReducer from './toDosReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  todos: toDosReducer,
  user: userReducer
});

export default reducer;
