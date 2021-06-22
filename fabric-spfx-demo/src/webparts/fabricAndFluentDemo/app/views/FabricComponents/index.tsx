import * as React from 'react';
import styles from './FabricDemo.module.scss';
import { ButtonCommand } from '../../components/ButtonCommand/ButtonCommand';
import { DialogExample } from '../../components/Dialog';
import { DetailsListBasic } from '../../components/DetailsListBasic';
import { PivotExample } from '../../components/TabBar';
import { LayerDemo } from '../../components/LayerDemo';
import { MessageBarBasicExample } from '../../components/MessageBar';
import { TooltipExample } from '../../components/Tooltip';
import { CheckboxExample } from '../../components/Checkbox';
import { SeparatorExample } from '../../components/Separator';
import { DropdownBasicExample } from '../../components/DrapDown';
import { SearchBoxExample } from '../../components/SearchBox';
import { ModalExample } from '../../components/Modal';
import { PanelConfirmDismissExample } from '../../components/Panel';
import MyHooksTest from '../../components/MyHooks';
export default class FabricDemoPage extends React.Component {
  /**
   * render
   */
  public render(): React.ReactElement {
    return (
      <div className={styles.FabricDemo}>
        <div className={styles.column}>
          <SeparatorExample title={'Dropdown'} />
        </div>
        <div className={styles.column}>
          <DropdownBasicExample />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'Command Bar Button'} />
        </div>
        <div className={styles.column}>
          <ButtonCommand />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'SearchBox'} />
        </div>
        <div className={styles.column}>
          <SearchBoxExample />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'Checkbox'} />
        </div>
        <div className={styles.column}>
          <CheckboxExample />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'Dialog Drag'} />
        </div>
        <div className={styles.column}>
          <DialogExample />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'Tab'} />
        </div>
        <div className={styles.column}>
          <PivotExample />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'Layer'} />
        </div>
        <div className={styles.column}>
          <LayerDemo />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'Message Bar'} />
        </div>
        <div className={styles.column}>
          <MessageBarBasicExample />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'Tooltip'} />
        </div>
        <div className={styles.column}>
          <TooltipExample />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'Modal'} />
        </div>
        <div className={styles.column}>
          <ModalExample />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'Panel'} />
        </div>
        <div className={styles.column}>
          <PanelConfirmDismissExample />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'List'} />
        </div>
        <div className={styles.column}>
          <DetailsListBasic />
        </div>
        <div className={styles.column}>
          <SeparatorExample title={'Test Hooks'} />
        </div>
        <div className={styles.column}>
          <MyHooksTest />
        </div>
      </div>
    );
  }
}
