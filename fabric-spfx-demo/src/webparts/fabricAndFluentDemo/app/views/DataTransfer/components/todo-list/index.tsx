import React, { FC, ReactElement, useCallback, useEffect, useReducer } from 'react';
import TdInput from './components/input';
import TdList from './components/list';
import { ACTION_TYPE, IState, Itodo } from './typings/todo-list';
import { todoReducer } from './reducer';
import styles from './index.module.scss';
import { TODO_LIST_DATA } from '../../../../../constant';

function init(initTodoList: Itodo[]): IState {
  return {
    todoList: initTodoList,
  };
}

const TodoList: FC = (): ReactElement => {
  const [state, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    const tdList = JSON.parse(localStorage.getItem(TODO_LIST_DATA) || '[]');
    dispatch({
      type: ACTION_TYPE.INIT_TODO,
      payload: tdList,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_LIST_DATA, JSON.stringify(state.todoList));
  }, [state.todoList]);

  const addToto = useCallback((todo: Itodo): void => {
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: todo,
    });
  }, []);

  const toggleTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id,
    });
  }, []);

  const removeTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id,
    });
  }, []);

  return (
    <div className={styles.todo_list__container}>
      <TdInput addToto={addToto} todoList={state.todoList} />
      <TdList todoList={state.todoList} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};
export default TodoList;
