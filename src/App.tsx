import React, { Component } from 'react';
import TodoBox from './components/TodoBox/TodoBox';
import './style.scss';

export class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <TodoBox />
      </div>
    );
  }
}

export default App;
