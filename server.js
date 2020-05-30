const Koa = require('koa');
const app = new Koa();
const send = require('koa-send')
// response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

app.use(async (ctx) => {
  if ('/' == ctx.path) return ctx.body = 'Try GET /package.json';
  await send(ctx, ctx.path);
})

app.listen(9988);

console.log('http://localhost:9988')
console.log('1')