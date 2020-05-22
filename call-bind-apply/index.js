Function.prototype.mycall = function (context, ...args) {
  if (!context || context === null) {
    context = window;
  }
  let fn = Symbol();
  context[fn] = this;
  return context[fn](...args);
};

Function.prototype.myapply = function (context, args) {
  if (!context || context === null) {
    context = window;
  }
  let fn = Symbol();
  context[fn] = this;
  return context[fn](...args);
};

// 测试一下
let obj = {
  a: 1,
};

function fn(name, age) {
  console.log(this.a);
  console.log(name);
  console.log(age);
}
fn.mycall(obj, "我是this", 18);
fn.myapply(obj, ["我是this", "18"]);
