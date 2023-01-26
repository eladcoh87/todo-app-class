import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './store/todoReducer';
import { ActionType } from './store/ActionType';





const store = createStore(todoReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
