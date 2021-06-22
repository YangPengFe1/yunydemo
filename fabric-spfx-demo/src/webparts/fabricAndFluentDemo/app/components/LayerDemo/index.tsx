import * as React from 'react';
import { useState } from 'react';
import styles from './Layer.module.scss';
import {
  AnimationClassNames,
  mergeStyles,
  getTheme,
} from '@fluentui/react/lib/Styling';
import { Layer } from '@fluentui/react/lib/Layer';
import { PrimaryButton } from '@fluentui/react/lib/Button';

const theme = getTheme();
const contentClass = mergeStyles([
  {
    backgroundColor: theme.palette.themePrimary,
    color: theme.palette.white,
    lineHeight: '50px',
    padding: '0 20px',
  },
  AnimationClassNames.scaleUpIn100,
]);

export const LayerDemo: React.FunctionComponent = () => {
  const [showLayer, setShowLayer] = useState({ show: false });

  const content = <div className={contentClass}>Hello world</div>;
  // import styles from './ComponentsDemo.module.scss';

  return (
    <div>
      <PrimaryButton
        text="Show Tip"
        onClick={() => {
          setShowLayer({ show: true });
        }}
      />
      <div className={styles.mb}></div>
      {showLayer.show ? <Layer>{content}</Layer> : content}
    </div>
  );
};
