import { IState, IAciton, ACTION_TYPE, Itodo } from './typings/todo-list';

function todoReducer(state: IState, action: IAciton): IState {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.INIT_TODO:
      return {
        ...state,
        todoList: payload as Itodo[],
      };
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload as Itodo],
      };
    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== payload),
      };
    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          const { id } = todo;
          return id === payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : {
                ...todo,
              };
        }),
      };
    default:
      return state;
  }
}
export { todoReducer };
