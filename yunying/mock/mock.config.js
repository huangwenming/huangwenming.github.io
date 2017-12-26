define('mock/mock.config', function(require, exports, module) {

/**
 * Created by baidu on 16/8/14.
 */
var config = {
    staticDir: '',
    proxyArray: [
        {
            path: '/activity/*',
            proxy: {
               host: 'http://insurance.che.baidu.com'
            },
            method: 'GET'
        },
        {
            path: '/mbc/**/*',
            proxy: {
                host: 'http://cq02-map-sv-control04.cq02.baidu.com:8222'
            },
            method: 'POST'
        }
    ]
};
module.exports = config;

});
