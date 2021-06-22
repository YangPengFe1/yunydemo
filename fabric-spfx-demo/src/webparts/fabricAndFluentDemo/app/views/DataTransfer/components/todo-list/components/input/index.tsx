import React, { FC, ReactElement, useCallback, useRef, useState, useEffect } from 'react';
import { Itodo } from '../../typings/todo-list';
import styles from './input.module.scss';
import { MessageBar, MessageBarType } from '@fluentui/react';

interface IProps {
  addToto: (todo: Itodo) => void;
  todoList: Itodo[];
}

interface IExampleProps {
  resetChoice?: () => void;
}

const ErrorExample = (p: IExampleProps) => (
  <MessageBar
    messageBarType={MessageBarType.error}
    isMultiline={false}
    onDismiss={p.resetChoice}
    dismissButtonAriaLabel="Close"
  >
    Error MessageBarError MessageBar: Re-add.
  </MessageBar>
);

const TdInput: FC<IProps> = ({ addToto, todoList }): ReactElement => {
  const [choice, setChoice] = useState<boolean>(false);

  const resetChoice = useCallback(() => setChoice(true), []);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 当choice改变
    setTimeout(() => {
      setChoice(false);
    }, 2000);
  }, [choice]);

  const addItem = (): void => {
    let val: string = inputRef.current!.value.trim();
    if (val.length) {
      const isExist = todoList.find(item => item.content === val);
      if (isExist) {
        return resetChoice();
      }
      addToto({
        id: new Date().getTime(),
        content: val,
        completed: false,
      });
      inputRef.current!.value = '';
    }
  };
  return (
    <div className={styles.inputContainer}>
      {choice && <ErrorExample resetChoice={resetChoice} />}
      <input ref={inputRef} type="text" placeholder="请输入待办事项" />
      <button onClick={addItem}>新增</button>
    </div>
  );
};

export default TdInput;
