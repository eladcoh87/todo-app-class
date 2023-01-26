import React, { Component } from 'react';
import './style.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { RemoveToDo } from '../../store/ActionsCreator';
import { connect } from 'react-redux';
import EditTodo from '../EditTodo/EditTodo';

type OwnProps = {
  key: number;
  text: string;
  id: number;
  RemoveToDoDis: (id: number) => void;
};

type OwnState = {
  isEditing: boolean;
};

export class TodoItem extends Component<OwnProps, OwnState> {
  id: number;

  constructor(props: OwnProps) {
    super(props);

    this.id = this.props.id;

    this.state = { isEditing: false };
  }

  removeTodo = () => {
    this.props.RemoveToDoDis(this.id);
  };

  editTodo = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    if (this.state.isEditing) {
      return (
        <EditTodo
          id={this.id}
          text={this.props.text}
          editTodo={this.editTodo}
        />
      );
    }

    return (
      <div className="todoItemContainer">
        <div className="todoText">{this.props.text}</div>
        <div className="btnsContainer">
          <Button
            onClick={this.removeTodo}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>

          <Button
            onClick={this.editTodo}
            variant="outlined"
            startIcon={<CreateOutlinedIcon />}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  }
}

type State = {
  todoList: any[];
  RemoveToDoDis: (id: number) => void;
};

const mapStateToProps = ({ RemoveToDoDis }: State) => {
  // recive state from store +  props of the component

  return { RemoveToDoDis }; // what we return here will be the props in the calssc component
};

export default connect(mapStateToProps, { RemoveToDoDis: RemoveToDo })(
  TodoItem
);
