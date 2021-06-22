import React, { FC, ReactElement, useEffect, useState, useCallback } from 'react';
import styles from './menubar.module.scss';
import { IPropsMenubar, MenubarItem, IPropsMenubarItemState } from './typeing';

const MenuItem: FC<IPropsMenubarItemState> = ({ item, index, current, onclick }): ReactElement => {
  return (
    <div
      className={`${styles.container_item} ${index === current ? styles.active : ''}`}
      onClick={() => onclick(index)}
    >
      <span className={styles.title_item}>{item.title}</span>
      {item.children && item.children.length > 0 ? <i className={styles.arrow_item}></i> : ''}

      {item.children && item.children.length > 0 ? (
        <div className={styles.sub_menu}>
          {item.children.map((sub: MenubarItem) => {
            return <div className={styles.sub_menu_item}>{sub.title}</div>;
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const Menubar: FC<IPropsMenubar> = ({ background, data }): ReactElement => {
  const [current, setCurrnt] = useState<number>(0);

  const onclick = useCallback((index: number): void => {
    setCurrnt(index);
  }, []);

  return (
    <div className={styles.container} style={{ background: background ? background : '#fff' }}>
      {data &&
        data.map((item: MenubarItem, index: number) => {
          return <MenuItem key={item.title} item={item} index={index} current={current} onclick={onclick}></MenuItem>;
        })}
    </div>
  );
};
export default Menubar;
