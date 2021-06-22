import React, { FC, ReactElement } from 'react';
import styles from './TestChild.module.scss';


const TestChild: FC = (): ReactElement => {
  return <div className={styles.test_child}></div>;
};
export default TestChild;
