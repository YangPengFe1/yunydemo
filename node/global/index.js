// 全局对象
// console.log(global)
// 文件路径
console.log(__filename)
// 动态路径
console.log(__dirname)

function name(params) {
  console.log(111)
}

setInterval(() => {
  name(1)
}, 100);