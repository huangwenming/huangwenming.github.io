define('mock/yunying/common', function(require, exports, module) {

;/*!/static/libs/mod.js*/
var require,define;!function(e){if(!require){var r=document.getElementsByTagName("head")[0],t={},n={},i={},a={},o={},u={},s=function(e,t){if(!(e in a)){a[e]=!0;var n=document.createElement("script");if(t){var i=setTimeout(t,require.timeout);n.onerror=function(){clearTimeout(i),t()};var o=function(){clearTimeout(i)};"onload"in n?n.onload=o:n.onreadystatechange=function(){("loaded"===this.readyState||"complete"===this.readyState)&&o()}}return n.type="text/javascript",n.src=e,r.appendChild(n),n}},c=function(e,r,n){var i=t[e]||(t[e]=[]);i.push(r);var a,c=o[e]||o[e+".js"]||{},l=c.pkg;a=l?u[l].url:c.url||e,s(a,n&&function(){n(e)})};define=function(e,r){e=e.replace(/\.js$/i,""),n[e]=r;var i=t[e];if(i){for(var a=0,o=i.length;o>a;a++)i[a]();delete t[e]}},require=function(e){if(e&&e.splice)return require.async.apply(this,arguments);e=require.alias(e);var r=i[e];if(r)return r.exports;var t=n[e];if(!t)throw"[ModJS] Cannot find module `"+e+"`";r=i[e]={exports:{}};var a="function"==typeof t?t.apply(r,[require,r.exports,r]):t;return a&&(r.exports=a),r.exports},require.async=function(r,t,i){function a(e){for(var r,t=0,f=e.length;f>t;t++){var p=require.alias(e[t]);p in n?(r=o[p]||o[p+".js"],r&&"deps"in r&&a(r.deps)):p in s||(s[p]=!0,l++,c(p,u,i),r=o[p]||o[p+".js"],r&&"deps"in r&&a(r.deps))}}function u(){if(0===l--){for(var n=[],i=0,a=r.length;a>i;i++)n[i]=require(r[i]);t&&t.apply(e,n)}}"string"==typeof r&&(r=[r]);var s={},l=0;a(r),u()},require.resourceMap=function(e){var r,t;t=e.res;for(r in t)t.hasOwnProperty(r)&&(o[r]=t[r]);t=e.pkg;for(r in t)t.hasOwnProperty(r)&&(u[r]=t[r])},require.loadJs=function(e){s(e)},require.loadCss=function(e){if(e.content){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e.content:t.innerHTML=e.content,r.appendChild(t)}else if(e.url){var n=document.createElement("link");n.href=e.url,n.rel="stylesheet",n.type="text/css",r.appendChild(n)}},require.alias=function(e){return e.replace(/\.js$/i,"")},require.timeout=5e3}}(this);
;/*!/static/libs/flexible.debug.js*/
!function(e,t){function i(){var t=n.getBoundingClientRect().width;t/m>540&&(t=540*m);var i=t/10;n.style.fontSize=i+"px",d.rem=e.rem=i}var a,r=e.document,n=r.documentElement,o=r.querySelector('meta[name="viewport"]'),l=r.querySelector('meta[name="flexible"]'),m=0,s=0,d=t.flexible||(t.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var p=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);p&&(s=parseFloat(p[1]),m=parseInt(1/s))}else if(l){var c=l.getAttribute("content");if(c){var u=c.match(/initial\-dpr=([\d\.]+)/),f=c.match(/maximum\-dpr=([\d\.]+)/);u&&(m=parseFloat(u[1]),s=parseFloat((1/m).toFixed(2))),f&&(m=parseFloat(f[1]),s=parseFloat((1/m).toFixed(2)))}}if(!m&&!s){var v=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),h=e.devicePixelRatio;m=v?h>=3&&(!m||m>=3)?3:h>=2&&(!m||m>=2)?2:1:1,s=1/m}if(n.setAttribute("data-dpr",m),!o)if(o=r.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),n.firstElementChild)n.firstElementChild.appendChild(o);else{var x=r.createElement("div");x.appendChild(o),r.write(x.innerHTML)}e.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(i,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(a),a=setTimeout(i,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*m+"px":r.addEventListener("DOMContentLoaded",function(){r.body.style.fontSize=12*m+"px"},!1),i(),d.dpr=e.dpr=m,d.refreshRem=i,d.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},d.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}));
;/*!/static/utils/util.js*/
var callback_number=1,$$CB=[],jsonpcb=[],config={jumpOtherDriveUrl:"http://cp01-rdqa-dev381.cp01.baidu.com:8859/activity/index.php?__m=activity&__c=Mca&rt=JumpDujiaChannel",otherDriveUrl:"https://touch.dujia.qunar.com/pi/detail_2933593227?bd_source=xlife_d_10",rightNowUrl:"https://touch.dujia.qunar.com/pi/detail_3685671106?bd_source=xlife_d_10",selfDriveUrl:"https://touch.dujia.qunar.com/pi/detail_2587579211?bd_source=xlife_d_10",shareUrl:location.origin+"/yunying/musicFestival/index.html",infoUrl:location.origin+"/yunying/ownerSign/index.html",carOwnerUrl:"http://cp01-rdqa-dev381.cp01.baidu.com:8859/activity/index.php?__m=activity&__c=Mca",passUrl:"http://passport.rdtest.baidu.com:8000/passport/?sms=1&login&tpl=ma&subpro=sycx&u=",SHARE_DATA:{weibo:{title:"我已成为百度好车主，就差你啦！",desc:"升职加薪，当上总经理，出任CEO，迎娶白富美。一切都是从成为百度好车主开始的。",url:location.origin+"/yunying/ownerSign/index.html",imgUrl:"http://boscdn.bpc.baidu.com/map-mobile-opnimg/616b99e6e2d2b88b89e7d6bc68718d3b.png"},weixin:{title:"我已成为百度好车主，就差你啦！",desc:"升职加薪，当上总经理，出任CEO，迎娶白富美。一切都是从成为百度好车主开始的。",url:location.origin+"/yunying/ownerSign/index.html",imgUrl:"http://boscdn.bpc.baidu.com/map-mobile-opnimg/616b99e6e2d2b88b89e7d6bc68718d3b.png"},weixinTipImgUrl:"/yunying/static/images/weixin-mask.png"}},util={isAndroid:function(){return navigator.userAgent&&/android/gi.test(navigator.userAgent.toLowerCase())},isIphone:function(){return navigator.userAgent&&/iphone/gi.test(navigator.userAgent.toLowerCase())},isInWeiXin:function(){return navigator.userAgent&&/micromessenger/gi.test(navigator.userAgent.toLowerCase())},isInMap:function(){return navigator.userAgent&&/baidumap_ANDR|baidumap_IPHO/gi.test(navigator.userAgent.toLowerCase())},parseUrl:function(e){if(null==e||-1===e.indexOf("?"))return null;var n=e.split("?")[1];if(-1===n.indexOf("="))return null;"&"===n[0]&&(n=n.replace("&","")),n='"'+n;var t=n.replace(/&/g,'","').replace(/=/g,'":"')+'"',i=JSON.parse("{"+t+"}");return i},addStat:function(e,n,t){var i=util.parseUrl(window.location.href)||{},o=-1!==navigator.userAgent.toLowerCase().indexOf("android")?"android":"iphone",r=["http://client.map.baidu.com/insuranceWeb/img/transparent.gif?resid=01&fr=",i.fr,"&channel=",i.channel,"&cuid=",i.cuid,"&position=",t,"&t=",Date.now(),"&da_src=",e,"&os=",o,"&eventId=",n],a=new Image;a.src=r.join("")},jsonp:function(e,n,t,i,o){var r="jsonpcb"+callback_number++;o=o||"cb",e=e+(e.indexOf("?")>-1?"&":"?")+o+"=window.jsonpcb."+r,n.ctime=(new Date).getTime();for(var a in n)e+="object"==typeof n[a]?"&"+a+"="+JSON.stringify(n[a]):"&"+a+"="+n[a];var c=document.createElement("script");window.jsonpcb[r]=function(e){c.parentNode.removeChild(c),delete window.$$CB[r],t&&t(e)},c.onerror=function(){c.parentNode.removeChild(c),delete window.$$CB[r],t&&t("error")},c.src=e,c.type="text/javascript",document.body.appendChild(c)},post:function(e,n,t,i){var o="",r=function(){return window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHttp")}();r.onreadystatechange=function(){if(4===r.readyState&&(i&&util.removeLoadingMask(),200===r.status)){var e=JSON.parse(r.responseText);t(e)}},r.open("post",e),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var a=0;for(var c in n){var d="";d=a>0?"&"+c+"="+n[c]:c+"="+n[c],o+=d,a++}r.send(o)},stringify:function(e){return encodeURIComponent(JSON.stringify(e))},scriptRequest:function(e,n,t,i){var t=t||{},o=t.callback||"",r=[e];!function(){var e=0,n=function(){return window[o+"_"+e]&&e++,o+"_"+e},t=n();window[t]=function(e){window[o]&&window[o](e),delete window[t]}}();for(var a in t)t.hasOwnProperty(a)&&"onerror"!==a&&r.push("&",a,"=",encodeURIComponent(t[a]||""));r.push("&t="+Date.now()),document.querySelector("#_script_"+n)&&document.querySelector("#_script_"+n).parentNode.removeChild(document.querySelector("#_script_"+n));var c=document.createElement("script");c.charset="utf-8",c.setAttribute("type","text/javascript"),c.id="_script_"+n,i&&(c.asyn="asyn"),t.onerror&&(c.onerror=t.onerror),document.body.appendChild(c),c.setAttribute("src",r.join(""))},checkLogin:function(e,n,t){var i="http://mbcapi.baidu.com/mbc/mcoupons/myself";util.jsonp(i,{},function(i){0===i.code?(util.syncLoginStatus(),t&&t(),e&&(location.href=e)):205===i.code&&n&&(location.href=config.testPassUrl+encodeURIComponent(n))},!0)},syncLoginStatus:function(){var e=document.referrer;if(!(-1===e.indexOf("wappass.baidu.com")&&-1===e.indexOf("passport.baidu.com")||-1===navigator.userAgent.indexOf("baidumap_ANDR")&&-1===navigator.userAgent.indexOf("baidumap_IPHO")&&-1===navigator.userAgent.indexOf("baidumap_IPAD")))try{location.replace("bdapi://wappass_login.sync")}catch(n){}},confirm:function(e,n,t){if(!document.querySelector(".confirm-dialog")){var i=document.createElement("div");i.className="confirm-dialog",i.innerHTML='<div class="confirm-body" style="margin-top:'+document.body.clientHeight/2+'px;"><div class="confirm-text">'+e+'</div><div><div class="confirm-cancel">取消</div><div class="confirm-ok">确认</div></div></div>',i.addEventListener("click",function(e){e.preventDefault();var o=e.target.className;"confirm-cancel"===o?(i.parentNode&&document.body.removeChild(i),i=null,t&&t()):"confirm-ok"===o&&(i.parentNode&&document.body.removeChild(i),i=null,n())},!1),document.body.appendChild(i)}},alert:function(e,n){if(!document.querySelector(".confirm-dialog")){var t=document.createElement("div");t.className="confirm-dialog",t.innerHTML='<div class="confirm-body" style="margin-top:'+document.body.clientHeight/2+'px;"><div class="confirm-text">'+e+'</div><div><div class="alert-ok">确认</div></div></div>',t.addEventListener("click",function(e){e.preventDefault();var i=e.target.className;"alert-ok"===i&&(t.parentNode&&document.body.removeChild(t),t=null,n&&n())},!1),document.body.appendChild(t)}}};

});