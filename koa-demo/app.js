/*
 * @Author: your name
 * @Date: 2020-07-12 15:21:56
 * @LastEditTime: 2020-07-12 15:34:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koa-demo/app.js
 */

const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
  ctx.body = 'hello koa'
  next()
})

app.listen(8099);
