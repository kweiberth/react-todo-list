import actionConstants from '../constants/action_constants';

export function addToDo(text){
  return {
    type: actionConstants.ADD_TODO,
    data: {
      text: text
    }
  };
}

export function deleteToDo(id){
  return {
    type: actionConstants.DELETE_TODO,
    data: {
      id: id
    }
  };
}
