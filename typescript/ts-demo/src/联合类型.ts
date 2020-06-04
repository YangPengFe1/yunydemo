// 联合类型（Union Types）

let aaaa: number | string;
aaaa = 1
aaaa = '1'
// ! aaaa = {}

function getFun() {
  return 1
  // ! return '1'
  // return {}
}


// 可以用来接收函数的返回值
let fun: number | object = getFun()


/**
 * Takes a string and adds "padding" to the left. 获取一个字符串并在左边添加“padding
 * If 'padding' is a string, then 'padding' is appended to the left side. 如果'padding'是一个字符串，那么'padding'被附加到左边。
 * If 'padding' is a number, then that number of spaces is added to the left side. 如果padding是一个数字，那么这个数字就会被加到左边。
 */

function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"

// padLeft存在一个问题， padding参数的类型指定成了 any。 这就是说我们可以传入一个既不是 number也不是 string类型的参数，但是TypeScript却不报错。

let indentedString = padLeft("Hello world", true); // 编译阶段通过，运行时报错


// 在传统的面向对象语言里，我们可能会将这两种类型抽象成有层级的类型。 这么做显然是非常清晰的，但同时也存在了过度设计。 padLeft原始版本的好处之一是允许我们传入原始类型。 这样做的话使用起来既简单又方便。 如果我们就是想使用已经存在的函数的话，这种新的方式就不适用了。

// 代替 any， 我们可以使用 联合类型做为 padding的参数：


/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 *
 *
 *
function padLeft(value: string, padding: string | number) {
}
let indentedString = padLeft("Hello world", true); // errors during compilation
*/

// 联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型，所以 number | string | boolean表示一个值可以是 number， string，或 boolean。

// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}


// function getSmallPet(): Fish | Bird {
//   // ...
// }

// let pet = getSmallPet();
// pet.layEggs(); // okay
// pet.swim();    // errors

/**
 * 这里的联合类型可能有点复杂，但是你很容易就习惯了。
 * 如果一个值的类型是 A | B，我们能够 确定的是它包含了 A 和 B中共有的成员。
 * 这个例子里， Bird具有一个 fly成员。 我们不能确定一个 Bird | Fish类型的变量是否有 fly方法。
 * 如果变量在运行时是 Fish类型，那么调用 pet.fly()就出错了。
*/