import { DevicesFoldTwoTone } from '@mui/icons-material';
import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { connect } from 'react-redux';

type OwnProps = {
  state: State;
};;

export class TodoList extends Component<OwnProps> {
  constructor(props: OwnProps) {
    super(props);
  }

  renderList = () => {
    const todoList = this.props.state.todoList.map((item) => (
      <TodoItem key={item.id} text={item.text} id={item.id} />
    ));
    return todoList;
  };

  render() {
    return (
      <div>
        {this.props.state.todoList.length !== 0 ? (
          this.renderList()
        ) : (
          <h1>PLEASE ADD TO DO...</h1>
        )}
      </div>
    );
  }
}

type State = {
  todoList: any[];
};

const mapStateToProps = (state: State) => {

  return { state }; 
}
export default connect(mapStateToProps)(TodoList);
