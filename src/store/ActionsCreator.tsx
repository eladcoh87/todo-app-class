import { ActionType } from './ActionType';

type TodoItem = {
  text: string;
  id: number;
};

type EditItem = {
  text: string;
  id: number;
};

export const AddToDo = (todoItem: TodoItem) => {
  return {
    type: ActionType.ADD_TO_DO,
    payload: todoItem,
  };
};

export const RemoveToDo = (id: number) => {
  return {
    type: ActionType.REMOVE_TO_DO,
    payload: id,
  };
};

export const editToDo = (newTodo: EditItem) => {
  return {
    type: ActionType.EDIT_TO_DO,
    payload: newTodo,
  };
};
