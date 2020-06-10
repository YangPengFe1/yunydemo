/**
 * @description: 函数
 * @param {type} 函数声明，函数表达式
 * @类型约束: 函数参数，函数返回值
 */

// * 函数声明
// 有返回值
function fn1(x: number, y: number): number {
  return x * y
}
fn1(1, 2)
// ! fn1('1', 2)

// 无返回值
function fn2(x: number, y: number): void {
  console.log(x, y)
}

// * 函数表达式

let fn3 = function (x: number, y: number): void {
  console.log(x, y)
}

let fn4: Function = function (x: number, y: number): void {
  console.log(x, y)
}

fn4('s', 's') // 未报错，这种写法只检测fn4 是不是Function类型

let fn5: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

// ! fn5('s', 's')
