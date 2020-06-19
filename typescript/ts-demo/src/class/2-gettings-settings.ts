/*
 * @Author       : yangpf-c
 * @Date         : 2020-06-18 15:22:08
 * @LastEditors  : yangpf-c
 * @LastEditTime : 2020-06-19 11:05:28
 * @FilePath     : \ts-demo\src\class\2-gettings-settings.ts
 * @Description  : 类-存取器
 */
class Person2 {
  nameUser: string = 'tom'
  private _age: number = 18
  // getAge(): number {
  //   return this.age
  // }
  // setAge(age: number): void {
  //   if (age > 0 && age < 200) {
  //     this.age = age
  //   }
  // }
  get aname(): number {
    return this._age
  }
  
  set age(age: number) {
    if (age > 0 && age < 150) {
      this._age = age
    }
  }
}

let toms1: Person2 = new Person2()
// toms1.setAge(20)
// toms1.setAge(201)
// console.log(toms1.getAge())

// ! console.log(toms1.age)
