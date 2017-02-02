import { connect } from 'react-redux';
import ToDos from '../../presentation/todoList/toDos';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

/*
Been thinking about this. Im not sure how I feel about adding `ToDos` straight
into the connect with out declaring a component first. My gut feeling
is that even though it will only have a render method, it makes it easier to
maintain down the line and maintains the basic stucture of components.
This is completley up to you, theres no benefit to to me doing it either way
*/
export default connect(mapStateToProps)(ToDos);
