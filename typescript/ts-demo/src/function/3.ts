/*
 * @Author       : yangpf-c
 * @Date         : 2020-06-10 14:43:44
 * @LastEditors  : yangpf-c
 * @LastEditTime : 2020-06-10 14:47:27
 * @FilePath     : \ts-demo\src\function\3.ts
 * @Description  : 函数重载
 * 用同名函数实现不同功能
 * 名称相同，但参数个数，类型，顺序不同
 * 注：与返回值无关
 * any 类型与联合类型实现的问题
 */

function fn(x: number, y: number): number;

function fn(x: string, y: string): string;

function fn(x: any, y: any): any {
  return x + y
}

fn(1, 3)
fn('1', '2')
// ! fn(1, '2')