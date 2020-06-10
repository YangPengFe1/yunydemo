let und: undefined;
let nu: null = null;

// ! nu = 1
// ! und = 1
let v0: void
v0 = und

// 在严格的 null检查模式下， null和 undefined值不包含在任何类型里，只允许用它们自己和 any来赋值（有个例外， undefined可以赋值到 void）

// 默认情况下null和undefined是所有类型的子类型。 
// 就是说你可以把 null和undefined赋值给number类型的变量。

// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 
// 这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，
// 你可以使用联合类型string | null | undefined。 再次说明，稍后我们会介绍联合类型。


// never类型表示的是那些永不存在的值的类型
function infiniteLoop(): never {
  while (true) {
  }
}

// 类型断言

// 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

// 类型断言有两种形式。 其一是“尖括号”语法

let someString: any = 'woshihasd askh';
let stringLeng1: number = (<string>someString).length
let stringLeng2: number = (someString as string).length

// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的


// 类型推导
document.onclick = function (e) {
  console.log(e)
}
document.onkeypress = function (e) {
  console.log(e)
}