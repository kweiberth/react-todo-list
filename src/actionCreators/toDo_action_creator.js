import * as actions from '../actions/toDo_actions';

export function toggleToDo(toDo){
  return function(dispatch){
    dispatch(actions.toggleToDo(toDo));
  };
}
