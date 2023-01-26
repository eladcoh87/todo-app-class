import React, { Component } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import TodoList from '../TodoList/TodoList';
import './style.scss';

export class TodoBox extends Component {
  render() {
    return (
      <div className="todoBoxContainer">
        <div className="headline">
          <h2>TODO LIST</h2>
        </div>

        <SearchInput />
        <TodoList />
      </div>
    );
  }
}

export default TodoBox;
