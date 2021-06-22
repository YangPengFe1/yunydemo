import React, { FC, ReactElement } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './ConLink.module.scss';

interface IProps {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
}

const ConLink: FC<IProps> = ({ label, to, activeOnlyWhenExact }): ReactElement => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <div className={`${match ? styles.active : ''} ${styles.item}`}>
      <Link to={to}>{label}</Link>
    </div>
  );
};
export default ConLink;
