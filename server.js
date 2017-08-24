const koa = require('koa');
const serve = require('koa-static');
const render = require('./renderfile.js');
const app = new koa();

app.use(serve(__dirname + '/src/'));

app.listen(3000);
