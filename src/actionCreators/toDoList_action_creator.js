import * as actions from '../actions/toDoList_actions';

export function addToDo(text){
  return function(dispatch){
    dispatch(actions.addToDo(text));
  };
}

export function deleteToDo(toDoItem){
  return function(dispatch){
    dispatch(actions.deleteToDo(toDoItem.id));
  };
}
