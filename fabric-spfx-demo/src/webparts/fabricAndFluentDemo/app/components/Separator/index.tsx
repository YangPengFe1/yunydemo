import * as React from 'react';
import { Separator } from '@fluentui/react/lib/Separator';
import { createTheme, ITheme } from '@fluentui/react/lib/Styling';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';

const theme: ITheme = createTheme({
  fonts: {
    medium: {
      fontFamily: 'Monaco, Menlo, Consolas',
      fontSize: '30px',
    },
  },
});

const stackTokens: IStackTokens = { childrenGap: 12 };

interface IProps {
  title: string;
}

export const SeparatorExample: React.FC<IProps> = ({ title }) => (
  <Stack tokens={stackTokens}>
    <Separator theme={theme}>{title}</Separator>
  </Stack>
);
