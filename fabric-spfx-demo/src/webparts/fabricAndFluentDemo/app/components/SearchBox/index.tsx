import * as React from 'react';
import { SearchBox, ISearchBoxStyles } from '@fluentui/react/lib/SearchBox';

import { Text, MessageBar, Stack } from '@fluentui/react';
// import { MessageBarButton } from '@fluentui/react/lib/Button';

const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };

const DefaultExample = () => (
  <MessageBar>
    Default MessageBar.
    <Text>this is msg</Text>
  </MessageBar>
);

/* eslint-disable react/jsx-no-bind */
export const SearchBoxExample = () => (
  <Stack>
    <DefaultExample></DefaultExample>
    <SearchBox
      styles={searchBoxStyles}
      placeholder="Search"
      onEscape={ev => {
        console.log('Custom onEscape Called');
      }}
      onClear={ev => {
        console.log('Custom onClear Called');
      }}
      onChange={(_, newValue) =>
        console.log('SearchBox onChange fired: ' + newValue)
      }
      onSearch={newValue =>
        console.log('SearchBox onSearch fired: ' + newValue)
      }
    />
  </Stack>
);
