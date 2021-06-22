import * as React from 'react';
import styles from './index.module.scss';
const MyHooksTest: React.FC = (): React.ReactElement => {
  const [count, setCount] = React.useState(0);
  const [name] = React.useState('rose');

  return (
    <div className={styles.fontColor}>
      <div>123123</div>
      <div className={styles.sss}>{count}</div>
      <div>{name}</div>
      <button onClick={() => setCount(count + 1)}>update count </button>
    </div>
  );
};

export default MyHooksTest;
