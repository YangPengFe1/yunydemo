import React, { FC, ReactElement } from 'react';
import { Itodo } from '../../typings/todo-list';
import TdItem from './item';
import styles from './list.module.scss';
interface IProps {
  todoList: Itodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TdList: FC<IProps> = ({ todoList, removeTodo, toggleTodo }): ReactElement => {
  return (
    <div className={styles.listContainer}>
      {todoList &&
        todoList.map((todo: Itodo) => {
          return <TdItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />;
        })}
    </div>
  );
};
export default TdList;
