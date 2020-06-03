/** 
 *  数组：
 * *具有形同类型的一组数据集合
 * *声明数据同时要确定存储的数据类型
 * *同一个数组中的数据只能有一种类型
*/

// 基本语法
let list: number[];
// 泛型方式
let list1: Array<number | string>;
list1.push(1);
list1.push('1');