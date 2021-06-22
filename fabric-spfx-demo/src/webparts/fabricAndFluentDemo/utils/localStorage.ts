/*
 * @Date: 2021-06-02 09:21:25
 * @LastEditors: Mason.Yang
 * @LastEditTime: 2021-06-02 09:22:36
 * @FilePath: \FabricAndFulentDemo\src\webparts\fabricAndFluentDemo\utils\localStorage.ts
 * @Description: localstorage
 */

export const setItem = (key: string, value: any) => window.localStorage.setItem(key, JSON.stringify(value));

export const getItem = (key: string) => JSON.parse(window.localStorage.getItem(key) || '{}');

export const removeItem = (key: string) => window.localStorage.removeItem(key);
