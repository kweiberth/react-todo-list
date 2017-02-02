import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteToDo } from '../../../actionCreators/toDoList_action_creator';
import { toggleToDo } from '../../../actionCreators/toDo_action_creator';
import ToDo from '../../presentation/toDoList/toDo';

class ToDoContainer extends Component{
  _onToggle = () => {
    //Add toggle to propTypes
    this.props.toggle({
      id: this.props.id,
      text: this.props.text,
      completed: this.props.completed
    });
  }

  _onDelete = () => {
    //Add toggle to propTypes
    this.props.delete({
      id: this.props.id,
      text: this.props.text,
      completed: this.props.completed
    });
  }

  render(){
    return(
      <ToDo
        onToggle={this._onToggle}
        onDelete={this._onDelete}
        text={this.props.text}
        completed={this.props.completed}/>
    );
  }
}

ToDoContainer.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired
};

const mapActionCreatorsToProps = (dispatch) => {
  return {
    toggle: (toDo) => {
      dispatch(toggleToDo(toDo));
    },
    delete: (toDo) => {
      dispatch(deleteToDo(toDo));
    }
  };
};

export default connect(null, mapActionCreatorsToProps)(ToDoContainer);
