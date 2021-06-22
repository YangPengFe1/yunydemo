import * as React from 'react';
import { Label, Pivot, PivotItem } from '@fluentui/react';

export const PivotExample = () => (
  <div>
    <Pivot aria-label="Large Link Size Pivot Example" linkSize="large">
      <PivotItem headerText="Vue">
        <Label>Pivot #1 Vue</Label>
      </PivotItem>
      <PivotItem headerText="Recent">
        <Label>Pivot #2 Recent</Label>
      </PivotItem>
      <PivotItem headerText="Angluar">
        <Label>Pivot #3 Angluar</Label>
      </PivotItem>
    </Pivot>
  </div>
);
