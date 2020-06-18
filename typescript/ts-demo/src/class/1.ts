/*
 * @Author       : yangpf-c
 * @Date         : 2020-06-18 15:00:48
 * @LastEditors  : yangpf-c
 * @LastEditTime : 2020-06-18 15:20:50
 * @FilePath     : \ts-demo\src\class\1.ts
 * @Description  : class
 * 修饰符， public（公开），protected（受保护的， 子类可以访问），private（私有的 子类不能访问），readonly（只读）
 * 可以再参数中使用修饰符，同时定义并初始化一个成员的属性
 */

class Persons {
  // ts的类，成员属性必须要声明后使用
  // ts中类成员属性不是在构造函数中声明的。是在class之内，方法之外声明
  public userNane: string = ''
  protected age: number = 22
  private weight: number = 75
  readonly gender: string = '男'
  constructor(name: string) {
    this.userNane = name
  }
}

class Students extends Persons {
  say() {
    // this.gender = '女'
    console.log(this.age)
    console.log(this.gender)
    console.log(this.userNane)
    // ! console.log(this.weight)
  }
}



let p1 = new Persons('小明')
p1.userNane = '小王'
// ! p1.age
// ! p1.weight
// ! p1.gender = '女'