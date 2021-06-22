/*
 * @Date: 2021-06-03 12:19:01
 * @LastEditors: Mason.Yang
 * @LastEditTime: 2021-06-03 13:40:24
 * @FilePath: \FabricAndFulentDemo\src\webparts\fabricAndFluentDemo\app\context\webpart.context.ts
 * @Description: $1
 */
import React from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';
interface WebPartContextInterface {
  context: WebPartContext;
  userData?: string;
}

const userContext = React.createContext<WebPartContextInterface | null>(null);

export default userContext;
