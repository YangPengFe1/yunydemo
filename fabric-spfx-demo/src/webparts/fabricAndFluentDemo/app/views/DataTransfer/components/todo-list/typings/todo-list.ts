export interface Itodo {
  id: number;
  content: string;
  completed: boolean;
}
export interface IState {
  todoList: Itodo[];
}

export enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTole',
  INIT_TODO = 'initTodo',
}

export interface IAciton {
  type: ACTION_TYPE;
  payload: number | Itodo | Itodo[];
}
