define('mock/routes/routes', function(require, exports, module) {

/**
 * Created by baidu on 16/8/14.
 */
var proxy = require('koa-proxy');
var config = require('mock/mock.config');
var list = require('mock/data/list');
module.exports = function(router, app) {
    // mock api
    // 可以根据需要任意定制接口的返回
    router.get('/api/list', function *() {
        this.body = {
            code: 0,
            result: list
        }
        // this.body = 'hello world';
        /*var query = this.query || {};
        var offset = query.offset || 0;
        var limit = query.limit || 10;
        var diff = limit - list.length;

        if(diff <= 0) {
            this.body = {code: 0, data: list.slice(0, limit)};
        } else {
            var arr = list.slice(0, list.length);
            var i = 0;
            while(diff--) arr.push(arr[i++]);
            this.body = {code: 0, data: arr};
        }*/
    });
    // proxy api
    var proxyArray = config.proxyArray;
    if (proxyArray.length > 0) {
        for (var i = 0; i < proxyArray.length; i++) {
            var path = proxyArray[i].path;
            if (proxyArray[i].method) {
                console.log(router[proxyArray[i].method.toLowerCase()]);
                router[proxyArray[i].method.toLowerCase()](path, proxy(proxyArray[i].proxy));
            } else {
                app.use(path, proxyArray[i].proxy);
            }
        }
    }
    /*app.use(proxy({
        host: 'https://m.baidu.com',
        match: /^\/static\//

    }));*/
    /*app.use(proxy({
     host: 'http://insurance.che.baidu.com'

     }));*/
    // router.get('/static/index/plus/plus_logo.png', proxy({host: 'https://m.baidu.com'}));
    // router.get('/static/**/*', proxy({host: 'https://m.baidu.com'}));
    // router.get('/activity/*', proxy({host: 'http://insurance.che.baidu.com'}));
    // router.post('/mbc/**/*', proxy({host: 'http://cq02-map-sv-control04.cq02.baidu.com:8222'}));
}

});
