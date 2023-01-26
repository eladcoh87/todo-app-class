import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.scss';
import { connect } from 'react-redux';
import { AddToDo } from '../../store/ActionsCreator';

type TodoItem = {
  text: string;
  id: number;
};

type OwnProps = {
  AddToDoDis: (todoItem: TodoItem) => void;
  state: State;
};

type State = {
  todoList: any[];
};

class SearchInput extends Component<OwnProps, { toDoTextInput: string }> {
  constructor(props: OwnProps) {
    super(props);

    this.state = {
      toDoTextInput: '',
    };
  }

  handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.props.AddToDoDis({
      text: this.state.toDoTextInput,
      id: Math.floor(Math.random() * 3452452343 + 1),
    });
  };

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ toDoTextInput: event.target.value });
  };

  render() {
    return (
      <div className="searchInputContainer">
        <div className="searchInput">
          <TextField
            value={this.state.toDoTextInput}
            id="outlined-basic"
            onChange={this.handleOnChange}
            label="add to do"
            variant="outlined"
            fullWidth
          />
        </div>

        <Button
          onClick={this.handleOnClick}
          className="addBtn"
          variant="contained"
        >
          Add
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  // recive state from store +  props of the component

  return { state }; // what we return here will be the props in the calssc component
};

export default connect(mapStateToProps, { AddToDoDis: AddToDo })(SearchInput);

// export default SearchInput
