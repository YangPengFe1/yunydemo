let element = require('./crtateElement')
let myobj = {
  'class': 'big_div'
}
let ul = element('div', myobj, [
  '我是文字',
  element('div', { 'id': 'xiao' }, ['1']),
  element('div', { 'id': 'xiao1' }, ['2']),
  element('div', { 'id': 'xiao2' }, ['3']),
])
console.log(ul)
ul = ul.render()
document.body.appendChild(ul)