import React, { FC, ReactElement } from 'react';
import { Itodo } from '../../typings/todo-list';
interface IProps {
  todo: Itodo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}
const TdItem: FC<IProps> = ({ todo, toggleTodo, removeTodo }): ReactElement => {
  const { id, content, completed } = todo;
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
      <span style={{ textDecoration: completed ? 'line-through' : '' }}>{content}</span>
      <button
        onClick={() => {
          removeTodo(id);
        }}
      >
        删除
      </button>
    </div>
  );
};
export default TdItem;
