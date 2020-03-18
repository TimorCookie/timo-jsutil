'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @function getHashQueryString
 * @description 获取哈希url参数值
 * @param {string} name - 需要获取的参数key.
 * @returns {String}
 */
var getHashQueryString = function getHashQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

  if (window.location.hash.indexOf("?") < 0) {
    return null;
  }

  var r = window.location.hash.split("?")[1].match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
};
/**
 * @function getQueryVariable
 * @description 获取非哈希url参数
 * @param {string} key - 需要获取的参数key.
 * @returns {String}
 */

var getQueryVariable = function getQueryVariable(key) {
  var query = window.location.search.substring(1);
  var queryArray = query.split("&");

  for (var i = 0; i < queryArray.length; i++) {
    var pair = queryArray[i].split("=");

    if (pair[0] == key) {
      return pair[1];
    }
  }

  return null;
};
/**
 * @function setUrlPrmt
 * @description 设置url参数
 * @param {Object} obj - 需要设置的参数对象
 * @returns {String}
 */

var setUrlPrmt = function setUrlPrmt(obj) {
  var _rs = [];

  for (var p in obj) {
    if (obj[p] != null && obj[p] != '') {
      _rs.push(p + '=' + obj[p]);
    }
  }

  return _rs.join('&');
};
/**
 * @function formatUTCTime
 * @description UTC时间转化为本地时区时间（UTC时间格式一般为 "2017-11-16T05:23:20.000Z"）；
 * @param {String} utc_datetime - UTC时间
 * @param {String} needDetail - 是否需要细化到时分秒
 * @returns {String}
 */

var formatUTCTime = function formatUTCTime(utc_datetime, needDetail) {
  if (!utc_datetime) {
    return '-';
  }

  function handleNum(str) {
    //格式化显示
    return str > 9 ? str : '0' + str;
  }

  timestamp = new Date(Date.parse(utc_datetime));
  timestamp = timestamp.getTime();
  timestamp = timestamp / 1000;
  var timestamp = timestamp; // 时间戳转为时间

  var time = new Date(parseInt(timestamp) * 1000);
  var y = time.getFullYear(); //getFullYear方法以四位数字返回年份

  var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一

  var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)

  var h = time.getHours(); // getHours方法返回 Date 对象的小时 (0 ~ 23)

  var m = time.getMinutes(); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)

  var s = time.getSeconds(); // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)

  if (needDetail) {
    return y + '-' + handleNum(M) + '-' + handleNum(d) + ' ' + handleNum(h) + ':' + handleNum(m) + ':' + handleNum(s);
  } else {
    return y + '-' + handleNum(M) + '-' + handleNum(d);
  }
};
var Lstorage = {
  set: function set(key, val) {
    var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window.localStorage;
    store.setItem(key, JSON.stringify(val));
  },
  get: function get(key) {
    var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.localStorage;
    return JSON.parse(store.getItem(key));
  },
  remove: function remove(key) {
    var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.localStorage;
    store.removeItem(key);
  },
  clear: function clear() {
    var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.localStorage;
    store.clear();
  }
};
/**
 * @function judgeClient
 * @description 判断用户设备系统
 * @returns {String}
 */

var judgeClient = function judgeClient() {
  var client = '';

  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //判断iPhone|iPad|iPod|iOS
    client = 'IOS';
  } else if (/(Android)/i.test(navigator.userAgent)) {
    //判断Android
    client = 'Android';
  } else {
    client = 'PC';
  }

  return client;
};
/**
 * @function isCellphoneValid
 * @description 判断是否为手机号
 * @param {Number} phone - 手机号
 * @returns {Boolean}
 */

var isCellphoneValid = function isCellphoneValid(phone) {
  if (!phone) return false;
  return /^1[34578]\d{9}$/.test(phone) || /^1(99)|(98)|(66)\d{8}$/.test(phone);
};
/**
 * @function isIDValid
 * @description 判断是否为身份证号
 * @param {Number} id - 身份证
 * @returns {Boolean}
 */

var isIDValid = function isIDValid(id) {
  if (!id) return false;
  return /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(id);
};

exports.Lstorage = Lstorage;
exports.formatUTCTime = formatUTCTime;
exports.getHashQueryString = getHashQueryString;
exports.getQueryVariable = getQueryVariable;
exports.isCellphoneValid = isCellphoneValid;
exports.isIDValid = isIDValid;
exports.judgeClient = judgeClient;
exports.setUrlPrmt = setUrlPrmt;
