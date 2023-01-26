import { ActionType } from './ActionType';

type ActionReducer = {
  type: ActionType.ADD_TO_DO | ActionType.REMOVE_TO_DO | ActionType.EDIT_TO_DO;
  payload: any;
};

type InitialState = {
  todoList: any[];
};

const initalState = {
  todoList: [],
};

const todoReducer = (
  state: InitialState = initalState,
  action: ActionReducer
) => {
  switch (action.type) {
    case ActionType.ADD_TO_DO:
      const newTodoList = [...state.todoList, action.payload];
      return { ...state, todoList: newTodoList };

    case ActionType.REMOVE_TO_DO:
      const filteredTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );

      return { ...state, todoList: filteredTodoList };

    case ActionType.EDIT_TO_DO:
      const newTodoListEdieted = state.todoList.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

      return { ...state, todoList: newTodoListEdieted };

    default:
      return state;
  }
};

export default todoReducer;
