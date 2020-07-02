console.log('11111111111111')
let a: number = 1

function identity<T>(value: T): T {
  return value
}

console.log(typeof identity('2'))