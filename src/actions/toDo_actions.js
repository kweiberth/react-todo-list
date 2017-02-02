import actionConstants from '../constants/action_constants';

export function toggleToDo(toDo){
  return {
    type: actionConstants.TOGGLE_TODO,
    data: toDo
  };
}
