import actionConstants from '../constants/action_constants';

function getId(todos){
  return todos.ids.reduce((maxId, id) => {
    return Math.max(id, maxId);
  }, -1) + 1;
}

/*
  Im deliberatly doing this differently to show you a different approach.
  Further reading http://redux.js.org/docs/advanced/AsyncActions.html#note-on-nested-entities
  P.s. If you use immutablity this will be slightly different
*/

const initialState = {
  ids: [1],
  data: {
    1: {
      id: 1,
      text: "Foo",
      completed: false
    }
  }
};


export default function toDosReducer(todos = initialState, action){

  switch(action.type){
    case actionConstants.ADD_TODO:
      var id = getId(todos);

      todos.ids.push(id);
      todos.data[id] = {
        id,
        text: action.data.text,
        completed: false
      };

      return {
        ...todos
      };

    case actionConstants.TOGGLE_TODO:
      var todo = todos.data[action.data.id];
      todo.completed = !todo.completed;

      return {
        ...todos
      };

    case actionConstants.DELETE_TODO:
      delete todos.data[action.data.id];
      //TODO, Remove ID from array

      return {
        ...todos
      };

    default:
      return todos;
  }

}
