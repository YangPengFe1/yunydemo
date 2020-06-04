// * 交叉类型（Intersection Types）

// 交叉类型是将多个类型合并为一个类型。 
// 这让我们可以把现有的多种类型叠加到一起成为一种类型，
// 它包含了所需的所有类型的特性。 
// 例如， Person & Serializable & Loggable同时是 Person 和 Serializable 和 Loggable。 
// 就是说这个类型的对象同时拥有了这三种类型的成员。

// 我们大多是在混入（mixins）或其它不适合典型面向对象模型的地方看到交叉类型的使用。 
// （在JavaScript里发生这种情况的场合很多！） 

// 下面是如何创建混入的一个简单例子：

function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (const id in first) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}

class Person {
  constructor(public name: string) {
  }
}

interface Loggable {
  log(): void
}

class ConsoleLogge implements Loggable {
  log() {
    console.log(1111)
  }
}

var jim = extend(new Person('JIM'), new ConsoleLogge());
var n = jim.name;
jim.log();