function lowerCase(input) {
  return input && typeof input === "string" ? input.toLowerCase() : input;
}

function upperCase(input) {
  return input && typeof input === "string" ? input.toUpperCase() : input;
}

function trim(input) {
  return typeof input === "string" ? input.trim() : input;
}

function split(input, delimiter = ",") {
  return typeof input === "string" ? input.split(delimiter) : input;
}

// compose函数的实现，请参考 “组合函数的实现” 部分。
const trimLowerCaseAndSplit = compose(trim, upperCase, split);

function compose(...funcs) {
  return function (x) {
    return funcs.reduce(function (arg, fn) {
      return fn(arg);
    }, x);
  };
}

console.log(trimLowerCaseAndSplit(" a,B,C "));
