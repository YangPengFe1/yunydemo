import React from 'react';
import userContext from './context/webpart.context';
import { Route, Switch, BrowserRouter as Router, HashRouter } from 'react-router-dom';
import ConLink from './components/ConLink';
import DataTransfer from './views/DataTransfer';
import FabricStyles from './views/FabricStyles';
import FabricComponent from './views/FabricComponents';
import AntdDemo from './views/AntdDemo';
import TablePage from './views/TablePage';
import styles from './FabricAndFluentDemo.module.scss';
import { IFabricAndFluentDemoProps } from './IFabricAndFluentDemoProps';
import 'antd/dist/antd.css';
import 'office-ui-fabric-react/dist/css/fabric.css';
export default class FabricAndFluentDemo extends React.Component<IFabricAndFluentDemoProps, {}> {
  constructor(props: IFabricAndFluentDemoProps) {
    super(props);
  }

  public render(): React.ReactElement<IFabricAndFluentDemoProps> {
    let { context } = this.props;
    return (
      <userContext.Provider value={{ context }}>
        <div className={styles.fabricAndFluentDemo}>
          <HashRouter>
            <div className={styles.container}>
              <div className={styles.header}>
                <ConLink activeOnlyWhenExact={true} to={'/'} label="数据传递" />
                <ConLink to={'/FabricDemoPage'} label="组件示例" />
                <ConLink to={'/FabricStyles'} label="样式示例" />
                <ConLink to={'/AntdDemo'} label="Antd展示" />
                <ConLink to={'/TablePage'} label="表格示例" />
              </div>
              <div className={styles.body}>
                <Switch>
                  <Route exact path="/" component={DataTransfer} />
                  <Route path="/FabricDemoPage" component={FabricComponent} />
                  <Route path="/FabricStyles" component={FabricStyles} />
                  <Route path="/AntdDemo" component={AntdDemo} />
                  <Route path="/TablePage" component={TablePage} />
                </Switch>
              </div>
            </div>
          </HashRouter>
        </div>
      </userContext.Provider>
    );
  }
}
