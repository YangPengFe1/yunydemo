/*
 * @Author       : yangpf-c
 * @Date         : 2020-06-10 14:49:27
 * @LastEditors  : yangpf-c
 * @LastEditTime : 2020-06-18 14:35:13
 * @FilePath     : \ts-demo\src\function\4.ts
 * @Description  : this
 * ts: 默认情况下函数中的this默认指向：any
 * any：类型ts不能提示或者进行类型检测
 * "noImplicitThis": true // 	当 this表达式的值为 any类型的时候，生成一个错误  => 取消默认this的any类型
*/

let obj = {
  a: 10,
  age: 100,
  fun(): number {
    return this.a
  }
}


let obj1 = {
  a: 1,
  fn(this: Document) { 
    // this.querySelector
    // 在ts中函数的第一个this参数是用来设置this类型约束的
    // 这个this是不参与运行的，运行过程中是不存在的，只给ts检测使用
  }
}
document.onclick = obj1.fn
// ! obj1.fn()
