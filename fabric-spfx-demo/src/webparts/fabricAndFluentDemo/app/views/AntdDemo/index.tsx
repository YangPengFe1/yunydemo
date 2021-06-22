import styles from './AntdDemo.module.scss';
import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import userContext from '../../context/webpart.context';
import { SPService } from '../../../servers/SPService';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';
import TestChild from './components/TestChild/index';
import Menubar from '../../components/Menubar';

const AntdDemo: FC = (): ReactElement => {
  const data = [
    {
      title: '首页',
      link: 'home',
      children: [
        {
          title: '首页1',
          link: 'home1',
          children: [],
        },
        {
          title: '首页2',
          link: 'home2',
          children: [
            {
              title: '首页2-1',
              link: 'home2-1',
            },
            {
              title: '首页2-2',
              link: 'home2-2',
            },
          ],
        },
      ],
    },
    {
      title: '测试',
      link: 'test',
      children: [
        {
          title: '测试1',
          link: 'test1',
          children: [],
        },
        {
          title: '测试2',
          link: 'test2',
          children: [],
        },
      ],
    },
    {
      title: '其他',
      link: 'other',
      children: [],
    },
    {
      title: '我的',
      link: 'my',
      children: [],
    },
  ];
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { context } = useContext(userContext);
  const _services = new SPService(context);
  useEffect(() => {
    const service = async () => {
      setIsLoading(true);
      const res = await _services.getListItems('command-extansions');
      console.log(res)
      // setState(res);
      setIsLoading(false);
    };
    service();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Spinner label="Wait, wait..." size={SpinnerSize.large} />
      ) : (
        <div>
          <ul>
            {state.map(item => (
              <li key={item.ID}>{item.Description}</li>
            ))}
          </ul>
          <Menubar data={data as []} background={'#f0f0f0'} />
          <TestChild />
        </div>
      )}
    </div>
  );
};

export default AntdDemo;
