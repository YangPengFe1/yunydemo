/*
 * @Author: your name
 * @Date: 2020-07-12 15:38:48
 * @LastEditTime: 2020-07-12 15:40:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /koa-demo/app.js
 */ 
const Koa = require('koa')
const app = new Koa
app.use((ctx, next) => {
  ctx.body = 'hello koa'
})
app.listen(9999)