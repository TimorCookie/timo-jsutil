"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={set:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.localStorage;n.setItem(e,JSON.stringify(t))},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.localStorage;return JSON.parse(t.getItem(e))},remove:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.localStorage;t.removeItem(e)},clear:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.localStorage;e.clear()}};exports.Lstorage=e,exports.formatUTCTime=function(e,t){if(!e)return"-";function n(e){return e>9?e:"0"+e}r=(r=new Date(Date.parse(e))).getTime();var r=r/=1e3,o=new Date(1e3*parseInt(r)),i=o.getFullYear(),a=o.getMonth()+1,l=o.getDate(),s=o.getHours(),u=o.getMinutes(),d=o.getSeconds();return t?i+"-"+n(a)+"-"+n(l)+" "+n(s)+":"+n(u)+":"+n(d):i+"-"+n(a)+"-"+n(l)},exports.getHashQueryString=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i");if(window.location.hash.indexOf("?")<0)return null;var n=window.location.hash.split("?")[1].match(t);return null!=n?decodeURIComponent(n[2]):null},exports.getQueryVariable=function(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var r=t[n].split("=");if(r[0]==e)return r[1]}return null},exports.isCellphoneValid=function(e){return!!e&&(/^1[34578]\d{9}$/.test(e)||/^1(99)|(98)|(66)\d{8}$/.test(e))},exports.isIDValid=function(e){return!!e&&/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e)},exports.judgeClient=function(){return/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"IOS":/(Android)/i.test(navigator.userAgent)?"Android":"PC"},exports.setUrlPrmt=function(e){var t=[];for(var n in e)null!=e[n]&&""!=e[n]&&t.push(n+"="+e[n]);return t.join("&")};
