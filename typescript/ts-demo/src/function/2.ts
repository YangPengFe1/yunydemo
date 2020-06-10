/**
 * @description: 可选参数 默认参数, 剩余参数
 * @param {type} 
 * @return: 
 */

function fun1(x: number, y?: number): void {
  console.log(x, y)
}

function buildNamea(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");