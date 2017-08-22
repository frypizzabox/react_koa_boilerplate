const router = require('koa-router')();
const serve = require('koa-static');
const render = require('./renderfile.js');
const koa = require('koa');
const app = new koa();

app.use(serve(__dirname + '/src'));

router.get('/hello', async(ctx, next) => {
  ctx.body = await render(__dirname + '/src/index.html');
});

app.use(router.routes());

app.listen(3000);
