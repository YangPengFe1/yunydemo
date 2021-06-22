import * as React from 'react';
import styles from './FabricStyles.module.scss';
import 'office-ui-fabric-react/dist/css/fabric.css';
export default class FabricStyles extends React.Component {
  public render(): React.ReactElement {
    return (
      <div className={styles.FabricStyles}>
        <div className={styles.container}>
          <div className={'ms-Grid'} dir="ltr">
            <div className="ms-Grid-row">
              <div className={`ms-Grid-col ms-sm6 ms-md4 ms-lg1 ${styles.LayoutPageDemoBlock} ${styles.col}`}>A</div>
              <div className={`ms-Grid-col ms-sm6 ms-md8 ms-lg11 ${styles.LayoutPageDemoPink} ${styles.col}`}>B</div>
            </div>
          </div>
          <div className="ms-Grid" dir="rtl">
            <div className="ms-Grid-row">
              <div className={`ms-Grid-col ms-sm6 ms-md4 ms-lg1 ${styles.col}`}>
                <div className={`${styles.LayoutPageDemoBlock}  ${styles.innerDiv}`}>A</div>
              </div>
              <div className={`ms-Grid-col ms-sm6 ms-md8 ms-lg11 ${styles.col}`}>
                <div className={`${styles.LayoutPageDemoPink} ${styles.innerDiv}`}>B</div>
              </div>
            </div>
          </div>
          <div className={`${styles.container1}`}>
            <div className={`${styles.item}`}></div>
            <div className={`${styles.item}`}></div>
          </div>
        </div>
      </div>
    );
  }
}
