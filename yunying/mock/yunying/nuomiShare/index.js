define('mock/yunying/nuomiShare/index', function(require, exports, module) {

function getPhoneNum(){var e=location.origin+"/mbc/user/getUserBusinessPhone",t={version:"8.0"};util.post(e,t,function(e){0===e.code&&(document.querySelector("#content").innerText=e.result.phone)})}document.querySelector("#btn").addEventListener("touchstart",getPhoneNum);

});
