define('mock/app', function(require, exports, module) {

/**
 * Created by baidu on 16/8/14.
 */
var http = require('http');
var path = require('path');
var koa = require('koa');
var serve = require('koa-static');
var router = require('koa-router')();
var routes = require('mock/routes/routes');
var config = require('mock/mock.config');

var app = koa();
// console.log(process.env);

// 默认静态资源入口
var viewDir = config.staticDir || '';

// 处理静态资源和入口文件
app.use(serve(path.resolve(__dirname, viewDir), {
    maxage: 0
}));

// 处理请求路由
/*routes(router, app);
app.use(router.routes());*/
/*app.use(function* (next) {
    var a = 2;
    console.log('test1');
    yield next;
});
app.use(function* (next) {
    var a = 2;
    console.log('test2');
    yield next;
});*/
 routes(router, app);
 app.use(router.routes());
// app = http.createServer(app.callback());
app.listen(3005, '0.0.0.0', function() {
    console.log('app listen 3005 success.');
});


});
