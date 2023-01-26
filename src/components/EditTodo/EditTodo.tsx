import React, { Component } from 'react';
import './style.scss';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { editToDo } from '../../store/ActionsCreator';
import { connect } from 'react-redux';

type EditItem = {
  text: string;
  id: number;
};

type OwnProps = {
  text: string;
  id: number;
  editToDoDoDis: (newTodo: EditItem) => void;
  editTodo: () => void;
};

type OwnState = {
  editText: string;
};

class EditTodo extends Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);

    this.state = {
      editText: this.props.text,
    };
  }

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ editText: event.target.value });
  };

  handleOnClick = () => {
    const newTodo = { text: this.state.editText, id: this.props.id };

    this.props.editToDoDoDis(newTodo);

    this.props.editTodo();
  };

  render() {
    return (
      <div className="containerEditTodo">
        <TextField
          className="textFieldEdit"
          onChange={this.handleOnChange}
          value={this.state.editText}
          id="outlined-basic"
          label="EDIT TODO"
          variant="outlined"
          fullWidth
          focused={true}
        />
        <Button onClick={this.handleOnClick} variant="contained">
          SUBMIT
        </Button>
      </div>
    );
  }
}

type State = {
  todoList: any[];
  editToDoDoDis: (newTodo: string, id: number) => void;
};

const mapStateToProps = ({ editToDoDoDis }: State) => {
  return { editToDoDoDis };
};

export default connect(mapStateToProps, { editToDoDoDis: editToDo })(EditTodo);
